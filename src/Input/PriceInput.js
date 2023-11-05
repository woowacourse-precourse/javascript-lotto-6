import Input from './Input.js';

class PriceInput extends Input {
  constructor(type) {
    super(type);
    this.content = '구입금액을 입력해 주세요.';
  }
}

export default PriceInput;
