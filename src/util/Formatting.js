class Formatting {
	static insertCommasByThousandUnits(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	static convertArrayToString(array) {
		return `[${array.join(', ')}]`;
	}
}

export default Formatting;