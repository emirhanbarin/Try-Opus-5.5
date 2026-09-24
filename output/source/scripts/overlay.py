import numpy as np, pymupdf as fitz
from PIL import Image, ImageDraw
from build2d import *
from pdfseg import PDF
parts,screws,black=build()
DPI=400; z=DPI/72
d=fitz.open(PDF); pg=d[8]
clip=fitz.Rect(120,245,470,690)
pix=pg.get_pixmap(matrix=fitz.Matrix(z,z),clip=clip)
im=Image.frombytes('RGB',(pix.width,pix.height),pix.samples).convert('RGBA')
ov=Image.new('RGBA',im.size,(0,0,0,0)); dr=ImageDraw.Draw(ov)
def mm2px(p):
    p=np.asarray(p)
    x=p[:,0]/S+X0; y=Y0-p[:,1]/S
    return [((xx-clip.x0)*z,(yy-clip.y0)*z) for xx,yy in zip(x,y)]
cols={'frame':(40,120,255),'sash':(0,190,90),'bead':(255,150,0),'steel':(120,120,140),'gasket':(230,0,200),'bead_lip':(200,0,0),'glass':(0,200,255),'spacer':(150,150,150),'sealant':(60,60,60),'bridge':(255,230,0),'desiccant':(250,210,120)}
def colfor(k):
    for c in cols:
        if k.startswith(c): return cols[c]
    return (255,0,0)
for k,poly in parts.items():
    c=colfor(k)
    dr.polygon(mm2px(np.array(poly.exterior.coords)),fill=c+(110,),outline=c+(255,))
    for h in poly.interiors:
        dr.polygon(mm2px(np.array(h.coords)),fill=(255,255,255,140),outline=c+(255,))
out=Image.alpha_composite(im,ov).convert('RGB')
out.save('overlay_full.png')
w,h=out.size
out.resize((w//2,h//2)).save('overlay_half.png')
print(out.size)
