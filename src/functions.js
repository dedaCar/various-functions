module.exports = {
	random(min, max) {
		if (typeof min === 'number' && typeof max === 'number' && min <= max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		} if (min >= max) {
			const check = 'We are sorry min value must be lower then max value!!!';
			return check;
		}
		const check = 'We are sorry. Unable to preform selected operation!!! Both values must be numbers!!!';
		return check;
	},
	minIntegerFromArray(myArray) {
		let min;
		for (let i = 0; i < myArray.length; i += 1) {
			const diff = myArray[i];
			if (typeof diff === 'number') {
				if (typeof min === 'undefined') {
					min = diff;
				} else if (diff < min) {
					min = diff;
				}
			}
		}
		if (typeof min === 'undefined') {
			return false;
		}
		return min;
	},
	minIntegerFromString(myString) {
		const numb = myString.match(/\d+./g);
		if (numb == null) {
			return false;
		}
		const final = numb.map(x => parseInt(x, 10));
		return Math.min(...final);
	},
	concatStringsByLength(arrayOfstrings, type) {
		if (type === 0) {
			const descendArray = arrayOfstrings.sort((a, b) => b.length - a.length);
			return descendArray.join('');
		} if (type === 1) {
			const ascendArray = arrayOfstrings.sort((a, b) => a.length - b.length);
			return ascendArray.join('');
		}
		return false;
	},
};
