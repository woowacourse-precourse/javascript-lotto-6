import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let [count, change] = await this.userPriceInput();
      
    } catch (error) {
      [count, change] = await this.userPriceInput();
    }
  }
  async userPriceInput() {
    try {
      const price = await MissionUtils.Console.readLineAsync (
        "구입금액을 입력해 주세요.\n"
      );
      if (!this.notNumber(price)) {
        throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.")
      }
      const cnt = price / 1000;
      const change = price % 1000;
      return [cnt, change];
    } catch(error) {
      throw error;
    }
  }

  notNumber(input) {
    return typeof input === 'number' && !isNaN(input);
  }


}
  

export default App;
