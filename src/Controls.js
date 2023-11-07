import { read, write } from './IO.js';
import Validator from './Validator.js';

const TEXT = {
  BET: '구입 금액을 입력해 주세요. ',
};

class Controls {
  static async getBet() {
    const bet = await read(TEXT.BET);
    Validator.validateBet(bet);

    return bet / 1000;
  }

  static print;
}

export default Controls;
