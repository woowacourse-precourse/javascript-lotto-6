class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = `[ERROR]`;
  }
}

export default InputError;
