import numpy as np, json
from pdfseg import get_segments
from comp import components
from shapely.geometry import LineString, Polygon, MultiLineString, Point, box
from shapely.ops import polygonize, unary_union, polygonize_full
import shapely

S = 1/3.0082          # mm per pt (calibrated from dimension lines)
X0, Y0 = 138.44, 675.0 # frame exterior-bottom corner in pt

def to_mm(p):
    p=np.asarray(p,float)
    return np.column_stack([(p[:,0]-X0)*S, (Y0-p[:,1])*S])

segs = get_segments(8, n_bez=16)
BLACK=(0.01,0.02,0.02); RED=(0.93,0.13,0.14)

def clean(ss, minlen=0.02):
    out=[]; seen=set()
    for s in ss:
        p=s['pts']
        L=np.sum(np.linalg.norm(np.diff(p,axis=0),axis=1))
        if L<minlen: continue
        k=tuple(np.round(np.concatenate([p[0],p[-1]]),2)); k2=tuple(np.round(np.concatenate([p[-1],p[0]]),2))
        key=(s['kind'],)+tuple(sorted([k,k2]))
        if key in seen: continue
        seen.add(key); out.append(s)
    return out

def lines_of(ss):
    return [LineString(s['pts']) for s in ss]

def polys_from(ss, snap=0.06):
    ls=lines_of(ss)
    u=unary_union(ls)
    u=shapely.snap(u,u,snap)
    polys, cuts, dangles, invalid = polygonize_full(u)
    return list(polys.geoms), cuts, dangles

if __name__=='__main__':
    black=clean([s for s in segs if s['color']==BLACK])
    comps=components(black,0.05); comps.sort(key=lambda c:-len(c))
    # screws: comps whose segment count 55..63 or 44/45 small ones near screw axes
    screw_boxes=[box(286,592,310,660), box(344,385,368,452)]
    prof=[]; screw=[]; other=[]
    for c in comps:
        P=np.vstack([black[i]['pts'] for i in c]); bb=box(*P.min(0),*P.max(0))
        if any(sb.contains(bb) for sb in screw_boxes): screw+= [black[i] for i in c]
        else: prof.append(c)
    print('screw segs',len(screw))
    allprof=[black[i] for c in prof for i in c]
    polys,cuts,dangles=polys_from(allprof)
    print('polys',len(polys),'cuts',len(getattr(cuts,'geoms',[])),'dangles',len(getattr(dangles,'geoms',[])))
    for i,p in enumerate(sorted(polys,key=lambda p:-p.area)[:60]):
        print(i, round(p.area,1), np.round(p.bounds,1), 'holes',len(p.interiors))
