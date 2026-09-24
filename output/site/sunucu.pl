#!/usr/bin/perl
# Supremo 85 3B görüntüleyici - yedek yerel sunucu (Perl; macOS ve Linux'ta hazır bulunur)
use strict; use warnings;
use IO::Socket::INET; use File::Basename qw(dirname); use Cwd qw(abs_path);

my $root = dirname(abs_path($0));
my $kiosk = grep { $_ eq '--kiosk' } @ARGV;            # fuar/kiosk: Chrome kiosk modunda, ?kiosk=1 ile açılır
my ($start) = grep { /^\d+$/ } @ARGV; $start //= 8080;
my %types = ('.html'=>'text/html; charset=utf-8', '.js'=>'text/javascript; charset=utf-8', '.mjs'=>'text/javascript; charset=utf-8',
  '.css'=>'text/css; charset=utf-8', '.json'=>'application/json', '.wasm'=>'application/wasm', '.glb'=>'model/gltf-binary',
  '.ktx2'=>'image/ktx2', '.woff2'=>'font/woff2', '.png'=>'image/png', '.svg'=>'image/svg+xml', '.txt'=>'text/plain; charset=utf-8', '.md'=>'text/markdown; charset=utf-8');
my ($srv, $port);
for my $p ($start .. $start + 40) {
  $srv = IO::Socket::INET->new(LocalAddr => '127.0.0.1', LocalPort => $p, Proto => 'tcp', Listen => 16, ReuseAddr => 0);
  if ($srv) { $port = $p; last; }
}
die "Boş port bulunamadı\n" unless $srv;
my $url = "http://localhost:$port/" . ($kiosk ? '?kiosk=1' : '');
print "Supremo 85 3B görüntüleyici çalışıyor: $url\nKapatmak için bu pencereyi kapatın (veya Ctrl+C).\n";
my @kflags = ('--kiosk', $url, '--no-first-run', '--no-default-browser-check', '--overscroll-history-navigation=0', '--disable-pinch', '--user-data-dir=/tmp/supremo85-kiosk');
if ($kiosk && $^O eq 'darwin' && -d '/Applications/Google Chrome.app') { print "Kiosk modu: çıkmak için Cmd+Q.\n"; system('open', '-na', 'Google Chrome', '--args', @kflags); }
elsif ($kiosk && $^O eq 'darwin' && -d '/Applications/Microsoft Edge.app') { print "Kiosk modu: çıkmak için Cmd+Q.\n"; system('open', '-na', 'Microsoft Edge', '--args', @kflags, '--edge-kiosk-type=fullscreen'); }
elsif ($^O eq 'darwin') { system('open', $url); } else { system("xdg-open '$url' >/dev/null 2>&1 &"); }
$SIG{PIPE} = 'IGNORE';
while (my $c = $srv->accept) {
  my $req = <$c>;
  unless (defined $req) { close $c; next; }
  while (my $h = <$c>) { last if $h =~ /^\r?\n$/; }
  my ($path) = $req =~ m{^GET\s+([^\s?]+)};
  $path //= '/';
  $path =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
  $path .= 'index.html' if $path =~ m{/$};
  if ($path =~ m{\.\.}) { print $c "HTTP/1.0 403 Forbidden\r\n\r\n"; close $c; next; }
  my $file = "$root$path";
  if (-f $file && open(my $fh, '<:raw', $file)) {
    my ($ext) = $file =~ /(\.[^.\/]+)$/;
    my $type = $types{lc($ext // '')} // 'application/octet-stream';
    my $size = -s $file;
    print $c "HTTP/1.0 200 OK\r\nContent-Type: $type\r\nContent-Length: $size\r\nCache-Control: no-cache\r\nConnection: close\r\n\r\n";
    binmode $c; my $buf;
    while (read($fh, $buf, 65536)) { print $c $buf; }
    close $fh;
  } else {
    print $c "HTTP/1.0 404 Not Found\r\nContent-Length: 0\r\n\r\n";
  }
  close $c;
}
