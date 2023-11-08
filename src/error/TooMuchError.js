class TooMuchError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TooMuchError';
  }
}

export default TooMuchError;
