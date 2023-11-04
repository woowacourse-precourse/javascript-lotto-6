class LottoError extends Error {
	constructor(value, ...params) {
		this.super(...params);
		this.name = value;
	}
}

export default LottoError;
