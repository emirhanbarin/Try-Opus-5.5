import numpy as np, itertools
from build2d import *
parts,screws,black=build()
solid={k:v for k,v in parts.items() if not k.endswith('desiccant')}
# fill chambers: for containment checks use polygon with holes as-is
print('--- overlaps (area mm2) ---')
for a,b in itertools.combinations(solid,2):
    A,B=solid[a],solid[b]
    if A.distance(B)>0.5: continue
    ia=A.intersection(B).area
    d=A.distance(B)
    print(f'{a:20s} {b:20s} overlap={ia:8.4f} dist={d:.4f}')
