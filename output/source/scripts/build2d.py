import numpy as np, json
from extract3 import *
from shapely.geometry import Polygon, MultiPolygon, mapping
from shapely import affinity

def P(poly):  # pt -> mm polygon
    ext=to_mm(np.array(poly.exterior.coords))
    ints=[to_mm(np.array(h.coords)) for h in poly.interiors]
    return Polygon(ext,ints)

def largest(polys): return sorted(polys,key=lambda p:-p.area)[0]

def build():
    parts={}
    black=clean([s for s in segs if s['color']==BLACK])
    comps=components(black,0.05); comps.sort(key=lambda c:-len(c))
    screw_boxes=[box(286,592,310,660), box(344,385,368,452)]
    prof=[]; screws=[]
    for c in comps:
        Pp=np.vstack([black[i]['pts'] for i in c]); bb=box(*Pp.min(0),*Pp.max(0))
        if any(sb.contains(bb) for sb in screw_boxes): screws.append(c)
        else: prof.append(c)
    allprof=[black[i] for c in prof for i in c]
    polys,cuts,dangles,inv=polygonize_segs(allprof)
    withholes=[p for p in polys if len(p.interiors)>0]
    for p in withholes:
        b=p.bounds
        if b[0]<140: parts['frame']=P(p)
        elif b[0]<200: parts['sash']=P(p)
        else: parts['bead']=P(p)
    for k in ['steel_frame','steel_sash','gasket_middle','bead_lip_top','bead_lip_bot','bridge','sealant1','sealant2']:
        polys,_,_,_=polygonize_segs(groups[k],0.08); parts[k]=P(largest(polys))
    for k in ['gasket_frame_ext','gasket_interior','gasket_glazing_ext']:
        polys,_,_,_=polygonize_segs(groups[k],0.08); parts[k]=P(largest(polys))
    for k in ['spacer1','spacer2']:
        polys,_,_,_=polygonize_segs(groups[k],0.08)
        outer=unary_union(polys).buffer(0.01).buffer(-0.01)
        inner,_,_,_=polygonize_segs(groups[k+'_in'],0.08)
        parts[k]=P(outer.difference(largest(inner))) if outer.geom_type=='Polygon' else None
        parts[k+'_desiccant']=P(largest(inner))
    # glass panes (blue vertical lines pairs)
    for i,(x0,x1) in enumerate([(255.7,267.8),(297.8,309.9),(340.0,352.0)]):
        parts['glass%d'%(i+1)]=Polygon(to_mm(np.array([[x0,380.8],[x1,380.8],[x1,262.4],[x0,262.4]])))
    return parts, screws, black

if __name__=='__main__':
    parts,screws,black=build()
    for k,v in parts.items():
        print(k, v.geom_type, round(v.area,2),'mm2', np.round(v.bounds,2), 'holes',len(v.interiors) if v.geom_type=='Polygon' else '-')
