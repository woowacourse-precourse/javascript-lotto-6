import AppError from './AppError.js';

class LottoError extends AppError {
  constructor(message, ...args) {
    super(message, ...args);

    this.name = 'lottoView';
  }
}

export default LottoError;
