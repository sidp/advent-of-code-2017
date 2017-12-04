const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/3.txt'), 'utf-8');

const gridSize = Math.ceil(Math.sqrt(input));
const gridMaxNumber = Math.pow(gridSize, 2);

module.exports = gridMaxNumber - input;
