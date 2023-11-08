class DuplicateNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateNumberError';
  }
}

export default DuplicateNumberError;
