import numpy as np
from extract import *
from scipy.spatial import cKDTree

def snap_endpoints(ss, tol=0.06):
    E=np.array([s['pts'][0] for s in ss]+[s['pts'][-1] for s in ss])
    t=cKDTree(E); n=len(ss)
    lab=-np.ones(len(E),int); nid=0
    for k in range(len(E)):
        if lab[k]>=0: continue
        for j in t.query_ball_point(E[k],tol):
            if lab[j]<0: lab[j]=nid
        nid+=1
    C=np.array([E[lab==q].mean(0) for q in range(nid)])
    out=[]
    for i,s in enumerate(ss):
        p=s['pts'].copy(); p[0]=C[lab[i]]; p[-1]=C[lab[i+n]]
        s2=dict(s); s2['pts']=p; out.append(s2)
    return out

def polygonize_segs(ss, tol=0.06):
    ss=snap_endpoints(ss,tol)
    ls=[LineString(s['pts']) for s in ss if LineString(s['pts']).length>1e-6]
    u=unary_union(ls)
    polys,cuts,dangles,invalid=polygonize_full(u)
    return list(polys.geoms), cuts, dangles, invalid

if __name__=='__main__':
    black=clean([s for s in segs if s['color']==BLACK])
    comps=components(black,0.05); comps.sort(key=lambda c:-len(c))
    screw_boxes=[box(286,592,310,660), box(344,385,368,452)]
    prof=[]
    for c in comps:
        P=np.vstack([black[i]['pts'] for i in c]); bb=box(*P.min(0),*P.max(0))
        if not any(sb.contains(bb) for sb in screw_boxes): prof.append(c)
    allprof=[black[i] for c in prof for i in c]
    polys,cuts,dangles,inv=polygonize_segs(allprof)
    print('polys',len(polys),'cuts',len(cuts.geoms),'dangles',len(dangles.geoms),'invalid',len(inv.geoms))
    for i,p in enumerate(sorted(polys,key=lambda p:-p.area)):
        print(i, round(p.area,1), np.round(p.bounds,1), 'holes',len(p.interiors))
