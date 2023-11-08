class InputError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}

export default InputError;
