class ValidationError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}\n`);
    this.name = 'validation';
  }
}

export default ValidationError;
