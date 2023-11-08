import { Console } from "@woowacourse/mission-utils";

class UserInput {

  validPrice(price)
  {
    if (!price)
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (isNaN(price) || price < 0)
      throw new Error("[ERROR] 로또 구입 금액은 양수인 숫자여야 합니다.");
    if (price % 1000 != 0)
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    return price;
  }

  async inputPrice()
  {
    try {
      const price = await Console.readLineAsync("\n구입금액을 입력해 주세요.\n");
      return this.validPrice(price);
    } catch (error) {
		  Console.print(error.message);
      return this.inputPrice();
    }
  }

  validWinNumber(winStr)
  {
    if (!winStr)
      throw new Error("[ERROR] 숫자를 입력해주세요.");

    const winNumbers = winStr.split(',').map(Number);

    if (!winNumbers || winNumbers.length !== 6)
     throw new Error("[ERROR] 6개의 숫자를 입력해주세요.");

    for (let i = 0; i < winNumbers.length; i++)
    {
      if (winNumbers[i] < 1 || winNumbers[i] > 45 || isNaN(winNumbers[i]))
        throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
      if (winNumbers.indexOf(winNumbers[i]) != winNumbers.lastIndexOf(winNumbers[i]))
        throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
    return winNumbers;
  }


  async inputWinNumber()
  {
    try {
      const winStr = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");

      return this.validWinNumber(winStr);
    } catch (error) {
      Console.print(error.message);
      return this.inputWinNumber();
    }
  }

  validBonusNumber(bonusNumber, winNumbers)
  {
    if (!bonusNumber)
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (bonusNumber < 1 || bonusNumber > 45 || isNaN(bonusNumber))
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    for (let i = 0; i < 6; i++)
    {
      if (winNumbers[i] == bonusNumber)
        throw new Error("[ERROR] 보너스 번호는 기존 당첨 번호와 중복되지 않아야 합니다.");
    }
    return bonusNumber;
  }

  async inputBonusNumber(winNumbers)
  {
    try {
      const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      return this.validBonusNumber(bonusNumber, winNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber(winNumbers);
    }
  }
}

export default UserInput;
