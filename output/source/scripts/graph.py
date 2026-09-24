import numpy as np
from scipy.spatial import cKDTree
from collections import defaultdict
def build_graph(segs, idxs, tol=0.05):
    # nodes = clustered endpoints
    E=[]
    for i in idxs:
        E.append(segs[i]['pts'][0]); E.append(segs[i]['pts'][-1])
    E=np.array(E)
    t=cKDTree(E)
    lab=-np.ones(len(E),int); nid=0
    for k in range(len(E)):
        if lab[k]>=0: continue
        nb=t.query_ball_point(E[k],tol)
        for j in nb:
            if lab[j]<0: lab[j]=nid
        nid+=1
    nodes=np.array([E[lab==n].mean(0) for n in range(nid)])
    edges=[]
    for k,i in enumerate(idxs):
        a,b=lab[2*k],lab[2*k+1]
        edges.append((a,b,i))
    adj=defaultdict(list)
    for ei,(a,b,i) in enumerate(edges):
        adj[a].append(ei); adj[b].append(ei)
    return nodes,edges,adj
