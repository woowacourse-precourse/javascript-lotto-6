class EmptyInputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyInputError';
  }
}

export default EmptyInputError;
