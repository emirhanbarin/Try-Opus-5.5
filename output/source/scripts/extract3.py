import numpy as np, json
from extract2 import *

def group(pred):
    return clean([s for s in segs if pred(s)])

def by_draw(lo,hi,color=RED):
    return group(lambda s: s['color']==color and lo<=s['draw']<=hi)

groups = {
 'steel_frame': by_draw(65,65),
 'steel_sash': by_draw(1261,1261),
 'gasket_middle': by_draw(971,989),
 'gasket_frame_ext': by_draw(990,1054),
 'gasket_interior': by_draw(1055,1119),
 'gasket_glazing_ext': by_draw(1120,1184),
 'bead_lip_top': by_draw(1185,1195),
 'bead_lip_bot': by_draw(1255,1260),
 'bridge': group(lambda s: s['color']==(0.73,0.32,0.62)),
 'spacer1': group(lambda s: s['color']==(0.84,0.84,0.84) and s['draw'] in (1272,1273)),
 'spacer1_in': group(lambda s: s['color']==(0.84,0.84,0.84) and s['draw'] in (1275,)),
 'spacer2': group(lambda s: s['color']==(0.84,0.84,0.84) and s['draw'] in (1276,1277)),
 'spacer2_in': group(lambda s: s['color']==(0.84,0.84,0.84) and s['draw'] in (1279,)),
 'sealant1': group(lambda s: s['draw']==1281),
 'sealant2': group(lambda s: s['draw']==1283),
}
if __name__=='__main__':
    for k,v in groups.items():
        polys,cuts,dangles,inv=polygonize_segs(v,0.08)
        polys=sorted(polys,key=lambda p:-p.area)
        print(k,len(v),'segs ->',len(polys),'polys', [ (round(p.area,1), len(p.interiors)) for p in polys[:6]], 'dangles',len(dangles.geoms),'cuts',len(cuts.geoms))
