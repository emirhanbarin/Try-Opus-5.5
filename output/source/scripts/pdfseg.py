import pymupdf as fitz
import numpy as np
import os
PDF=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'reference', 'Supremo85_teknik_dokuman.pdf')

def colkey(c):
    if c is None: return None
    return tuple(round(v,2) for v in c)

def bez(p0,p1,p2,p3,n=12):
    t=np.linspace(0,1,n+1)[:,None]
    return ((1-t)**3)*p0+3*((1-t)**2)*t*p1+3*(1-t)*t*t*p2+t**3*p3

def get_segments(pageno, n_bez=12):
    d=fitz.open(PDF)
    p=d[pageno]
    out=[]
    for di,x in enumerate(p.get_drawings()):
        col = colkey(x.get('color')) if x['type'] in ('s','fs') else None
        fill = colkey(x.get('fill')) if x['type'] in ('f','fs') else None
        for ii,it in enumerate(x['items']):
            k=it[0]
            if k=='l':
                a=np.array([it[1].x,it[1].y]); b=np.array([it[2].x,it[2].y])
                pts=np.array([a,b]); ctrl=None
            elif k=='c':
                P=[np.array([q.x,q.y]) for q in it[1:5]]
                pts=bez(*P,n=n_bez); ctrl=np.array(P)
            elif k=='re':
                r=it[1]
                pts=np.array([[r.x0,r.y0],[r.x1,r.y0],[r.x1,r.y1],[r.x0,r.y1],[r.x0,r.y0]]); ctrl=None
            elif k=='qu':
                q=it[1]
                pts=np.array([[q.ul.x,q.ul.y],[q.ur.x,q.ur.y],[q.lr.x,q.lr.y],[q.ll.x,q.ll.y],[q.ul.x,q.ul.y]]); ctrl=None
            else:
                continue
            out.append(dict(draw=di,item=ii,kind=k,pts=pts,ctrl=ctrl,color=col,fill=fill,type=x['type'],width=x.get('width'),close=x.get('closePath')))
    return out
