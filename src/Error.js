class CustomError extends Error {
	constructor(value, ...params) {
		this.super(...params);
		this.message = [...params];
		this.name = value;
	}
}

export default CustomError;
