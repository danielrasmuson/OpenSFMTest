import simplejson as json
import time
import random
import numpy
import math
path = 'reconstruction.meshed.json'

fd = open(path)
fd = fd.read()
fd = json.loads(fd)

for f in fd:
    #print f.keys()
    f['points'] = []
    for camera in f['shots'].keys():
        f['shots'][camera]['vertices'] = []
        f['shots'][camera]['points'] = []
        f['shots'][camera]['faces'] = []



with open(path + '.2', mode='w') as p:
    p.write(json.dumps(fd))

def pretty(obj, line, indent):

    if type(obj) == list:
        for i, v in enumerate(obj):
            pretty(v, line + str(i) + '.', indent+1)
    elif type(obj) == dict:
        for k, v in obj.items():
            pretty(v, line + str(k) + '.', indent+1)
    else:
        print line, obj

pretty(fd, '', 0)

def camera_positions(filename):

    structure = [ {} ]

    camera = {
        'dji fc300x' : {
            'k2' : 0.0146854812129,
            'height' : 3000,
            'focal_prior' : 0.555555555556,
            'k1' : -0.0254794290645,
            'width' : 4000,
            'focal' : 0.565225015157,
        }
    }

    import pylab
    #pylab.figure()
    shots = {}

    structure[0]['cameras'] = camera

    xs = []
    ys = []
    zs = []
    items = []
    with open(filename) as fd:
        while True:
            line = fd.readline().strip()

            if not line: break
            if line.startswith('#'): continue

            filtered = line.split('\t')
            filtered = filter(None, filtered)
            #print filtered

            image_name = filtered[0]

            x = float(filtered[1])
            y = float(filtered[2])
            z = float(filtered[3])

            a = float(filtered[4])
            b = float(filtered[5])
            c = float(filtered[6])

            # x = (x - 37.599974) / (37.605159 - 37.599974)
            # y = (y - 55.713167) / (55.716172 - 55.713167)
            #
            # a = math.radians(a)
            # b = math.radians(b)
            # c = math.radians(c)


            items.append([image_name, x, y, z, a, b, c])

            # x = x * 100 -  50
            # y = y * 100 - 50
            xs.append(x)
            ys.append(y)
            zs.append(z)

    for image_name, x, y, z, a, b, c in items:
        x = (x - numpy.array(xs).min()) / (numpy.array(xs).max() - numpy.array(xs).min())
        y = (y - numpy.array(ys).min()) / (numpy.array(ys).max() - numpy.array(ys).min())
        z = (z - numpy.array(zs).min()) / (numpy.array(zs).max() - numpy.array(zs).min())
        x = x * 100 - 50
        y = y * 100 - 50
        z = z * 50

        print x, y
        shots[image_name] = {}
        shots[image_name]['camera'] = 'dji fc300x'
        shots[image_name]['orientation'] = 1
        shots[image_name]['capture_time'] = time.time()
        shots[image_name]['gps_dop'] = time.time()
        shots[image_name]['rotation'] = [ 0, 0, 0 ]
        shots[image_name]['translation'] = [ x, y, z]
        shots[image_name]['gps_position'] = [ 0, 0, 0]

    structure[0]['shots'] = shots

    #pretty(structure, '', 0)
    #pylab.show()
    return structure


filename = 'image_analysis_ground_control.txt'
fd = camera_positions(filename)

with open(path + '.3', mode='w') as p:
    p.write(json.dumps(fd))
