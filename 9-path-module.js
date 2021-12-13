const path = require('path');

const sepPath = 'foo/bar/baz'.split(path.sep);
console.log(sepPath); // ['foo', 'bar', 'baz']

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath); // /content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);