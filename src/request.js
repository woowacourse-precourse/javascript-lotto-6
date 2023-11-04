import prompt from './prompt.js';
import validate from './Validation.js';

class Request {
  static async money() {
    const condition = true;
    do {
      try {
        const input = await prompt.in('숫자로 입력해주세요.');
        validate.money(input);
        return input;
      } catch (error) {
        prompt.out(error);
      }
    } while (condition);
  }
}

export default Request;
