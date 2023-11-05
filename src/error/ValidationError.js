class ValidationError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = 'validation';
  }
}

export default ValidationError;
