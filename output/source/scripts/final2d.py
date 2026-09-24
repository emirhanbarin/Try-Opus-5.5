import numpy as np, json
from build2d import *
from shapely.geometry import Polygon, LineString
from shapely import affinity
import shapely

def ring_clean(coords, tol):
    ls=LineString(coords).simplify(tol, preserve_topology=False)
    return np.array(ls.coords)

def soften(poly, r, qs=3):
    if r<=0: return poly
    p=poly.buffer(-r, quad_segs=qs, join_style='round').buffer(r, quad_segs=qs, join_style='round')
    p=p.buffer(r, quad_segs=qs, join_style='round').buffer(-r, quad_segs=qs, join_style='round')
    if p.geom_type=='MultiPolygon':
        p=max(p.geoms,key=lambda g:g.area)
    return p

def simplify_poly(poly, tol=0.003):
    ext=ring_clean(poly.exterior.coords,tol)
    holes=[ring_clean(h.coords,tol) for h in poly.interiors]
    p=Polygon(ext,holes)
    return shapely.geometry.polygon.orient(p,1.0)  # exterior CCW, holes CW

SOFT = {'frame':0.2,'sash':0.2,'bead':0.2,'steel_frame':0.0,'steel_sash':0.0,
        'gasket_middle':0.1,'gasket_frame_ext':0.08,'gasket_interior':0.08,'gasket_glazing_ext':0.08,
        'bead_lip_top':0.0,'bead_lip_bot':0.0,'bridge':0.15,'spacer1':0.08,'spacer2':0.08,
        'sealant1':0.0,'sealant2':0.0,'spacer1_desiccant':0.0,'spacer2_desiccant':0.0}

if __name__=='__main__':
    parts,screws,black=build()
    # fix sash screw? (keep drawing data separately) ; glass panes exact from lines
    gl=[(38.993,42.993),(52.992,56.991),(66.99,70.99)]
    for i,(a,b) in enumerate(gl):
        parts['glass%d'%(i+1)]=Polygon([(a,97.807),(b,97.807),(b,137.142),(a,137.142)])
    out={}
    for k,p in parts.items():
        r=SOFT.get(k,0.0)
        q=soften(p,r) if r>0 else p
        q=simplify_poly(q,0.003)
        dA=abs(q.area-p.area)
        haus=q.exterior.hausdorff_distance(p.exterior)
        out[k]={'exterior':np.round(np.array(q.exterior.coords)[:-1],4).tolist(),
                'holes':[np.round(np.array(h.coords)[:-1],4).tolist() for h in q.interiors]}
        nv=len(q.exterior.coords)+sum(len(h.coords) for h in q.interiors)
        print(f'{k:20s} verts={nv:5d} holes={len(q.interiors):2d} area={q.area:8.2f} dA={dA:.3f} hausdorff={haus:.3f}')
    json.dump(out,open('section_mm.json','w'))
