import * as fs from 'fs';
import * as stream from 'stream';

import * as MI from '../lib/mapimage';

const imagestream = MI.createImage();
const out = fs.createWriteStream('foo.png');
imagestream.pipe(out);
