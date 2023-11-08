import { Console } from "@woowacourse/mission-utils";

//import Lotto from "./Lotto.js";

class UserInput {

  validPrice(price)
  {
    if (isNaN(price) || Number.isInteger(price) || price < 0)
      throw new Error("[ERROR] 로또 구입 금액은 양의 정수인 숫자여야 합니다.\n");
    if (price % 1000 != 0)
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.\n");
    return price;
  }

  async inputPrice()
  {
    try {
      const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validPrice(price);
    } catch (error) {
		  Console.print(error.message);
      return this.inputPrice();
    }
  }



  async inputWinNumber()
  {
    try {
      const price = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      return this.validPrice(price);
    } catch (error) {
      Console.print(error.message);
      return this.inputPrice();
    }
  }

  async inputBonusNumber()
  {
    try {
      const price = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      return this.validPrice(price);
    } catch (error) {
      Console.print(error.message);
      return this.inputPrice();
    }
  }

}

export default UserInput;
