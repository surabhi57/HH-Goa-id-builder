const fs = require('fs');
const PNG = require('pngjs').PNG;

const data = fs.readFileSync('./src/assets/shore-strip.png');
const png = PNG.sync.read(data);

let top = png.height;
let bottom = 0;
let left = png.width;
let right = 0;

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const alpha = png.data[idx + 3];
    if (alpha > 10) {
      if (y < top) top = y;
      if (y > bottom) bottom = y;
      if (x < left) left = x;
      if (x > right) right = x;
    }
  }
}

console.log('Image dimensions:', png.width, 'x', png.height);
console.log('Non-transparent bounds:');
console.log('Top:', top);
console.log('Bottom:', bottom);
console.log('Left:', left);
console.log('Right:', right);
console.log('Visible Height:', bottom - top);
console.log('Visible Width:', right - left);
