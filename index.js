const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');

const decorate = () => {
	const decor = ['🎄', '🎅', '☃️', '❄️', '🔔', '🦌', '🎁', '🕯', '✨', '🔥'];
	return decor[Math.floor(Math.random() * decor.length)];
};

const getTitle = filename => {
	const day = filename.match(/^[0-9]+/);
	const part = filename.match(/\-([a|b])\.js/)[1];
	if (part === 'a') {
		return `${decorate()} December ${day}\n`;
	}

	return '';
};

const getPart = filename => {
	return filename.match(/\-([a|b])\.js/)[1];
};

const printAnswer = filename => {
	const answer = require('./src/' + filename);
	const title = getTitle(filename);
	const part = getPart(filename);

	console.log(`${title}   ${part}: ${answer}`);
};

const files = fs.readdirSync(src).map(printAnswer);
