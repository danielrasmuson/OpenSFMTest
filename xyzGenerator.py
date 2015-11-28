import numpy as np
from random import randint

WGS84_a = 6378137.0
WGS84_b = 6356752.314245

def ecef_from_lla(lat, lon, alt):
    '''
    Compute ECEF XYZ from latitude, longitude and altitude.
    All using the WGS94 model.
    Altitude is the distance to the WGS94 ellipsoid.
    Check results here http://www.oc.nps.edu/oc2902w/coord/llhxyz.htm
    >>> lat, lon, alt = 10, 20, 30
    >>> x, y, z = ecef_from_lla(lat, lon, alt)
    >>> np.allclose(lla_from_ecef(x,y,z), [lat, lon, alt])
    True
    '''
    a2 = WGS84_a**2
    b2 = WGS84_b**2
    lat = np.radians(lat)
    lon = np.radians(lon)
    L = 1.0 / np.sqrt(a2 * np.cos(lat)**2 + b2 * np.sin(lat)**2)
    x = (a2 * L + alt) * np.cos(lat) * np.cos(lon)
    y = (a2 * L + alt) * np.cos(lat) * np.sin(lon)
    z = (b2 * L + alt) * np.sin(lat)
    return x, y, z

fname = '/Users/danielrasmuson/Documents/Code/DroneDeploy/OpenSfM/data/dronedeploy/sparse_points.txt'
with open(fname) as f:
    for line in f.readlines():
        cells = line.strip('\n').split(' ')
        xyz = ecef_from_lla(float(cells[0]), float(cells[1]), float(cells[2]))
        print str(xyz[0])+' '+str(xyz[1])+' '+str(xyz[2])+(' '.join(cells[2:]))
       # print str(randint(-100,100))+' '+str(randint(-100,100))+' '+str(randint(-100,100))+(' '.join(cells[2:]))
        # print 
        # print ' '.join(xyz)

# print(randint(0,9))
