import numpy as np
from scipy.spatial import cKDTree
def components(segs, tol=0.05):
    # union-find over segment endpoints
    n=len(segs)
    ends=[]
    for i,s in enumerate(segs):
        ends.append((s['pts'][0],i)); ends.append((s['pts'][-1],i))
    P=np.array([e[0] for e in ends]); idx=np.array([e[1] for e in ends])
    parent=list(range(n))
    def find(a):
        while parent[a]!=a:
            parent[a]=parent[parent[a]]; a=parent[a]
        return a
    def union(a,b):
        ra,rb=find(a),find(b)
        if ra!=rb: parent[ra]=rb
    t=cKDTree(P)
    for a,b in t.query_pairs(tol):
        union(idx[a],idx[b])
    comp={}
    for i in range(n):
        comp.setdefault(find(i),[]).append(i)
    return list(comp.values())
