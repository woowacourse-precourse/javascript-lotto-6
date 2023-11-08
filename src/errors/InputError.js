import AppError from './AppError.js';

class InputError extends AppError {
  constructor(message, ...args) {
    super(message, ...args);

    this.name = 'inputView';
  }
}

export default InputError;
