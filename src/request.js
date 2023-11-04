import prompt from './prompt.js';
import validate from './Validation.js';

class Request {
  static async money() {
    let condition = false;

    while (!condition) {
      try {
        const input = await prompt.in('구입금액을 입력해 주세요.');
        validate.money(input);
        condition = true;
        return input;
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }
}

export default Request;
