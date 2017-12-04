const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/4.txt'), 'utf-8');

let passphrases = input.split('\n');
passphrases = passphrases.map(passphrase => passphrase.split(' '));

const normalizeWord = word => {
	return word.split('').sort().join('');
};

const passphraseIsValid = passphrase => {
	let correct = true;
	passphrase.forEach((word, i) => {
		word = normalizeWord(word);
		passphrase.forEach((word2, j) => {
			word2 = normalizeWord(word2);
			if (word === word2 && i !== j) {
				correct = false;
			}
		});
	});
	return correct;
};

const answer = passphrases.reduce((sum, passphrase) => {
	if (passphraseIsValid(passphrase)) {
		return sum + 1;
	}
	return sum;
}, 0);

module.exports = answer;
