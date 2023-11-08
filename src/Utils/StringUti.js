import { DEFAULT_CONSTANT } from '../Constants/LottoContstants.js';

const StringUtil = {
	stringToNumberArray(text) {
		const numbers = text.split(DEFAULT_CONSTANT.splitStandardText);
		const trimmedNumbers = numbers.map((number) => Number(number));

		return trimmedNumbers;
	},
};

export default StringUtil;
