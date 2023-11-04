import prompt from './prompt.js';
import validate from './Validation.js';

class Request {
  static async money() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in('구입금액을 입력해 주세요.\n');
        validate.money(input);
        condition = true;
        return Number(input);
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }

  static async winningNumbers() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in('\n당첨 번호를 입력해 주세요.\n');
        validate.winningNumbers(input);
        condition = true;
        return input;
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }

  static async bonusNumber() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in('\n보너스 번호를 입력해 주세요.\n');
        validate.bonusNumber(input);
        condition = true;
        return Number(input);
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }
}

export default Request;
