import Input from './Input.js';

class WinNumInput extends Input {
  constructor(type) {
    super(type);
    this.content = '당첨 번호를 입력해 주세요.';
  }
}

export default WinNumInput;
