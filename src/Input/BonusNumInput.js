import Input from './Input.js';

class BonusNumInput extends Input {
  constructor(type) {
    super(type);
    this.content = '보너스 번호를 입력해 주세요.';
  }
}

export default BonusNumInput;
