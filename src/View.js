import { Console } from "@woowacourse/mission-utils";

class View {
  async getLottoPurchaseAmount() {
    let amount;
    while (true) {
      try {
        amount = await this.readLine("구입금액을 입력해 주세요.\n");
        this.amountValidate(amount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return amount;
  }

  async getLottoWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        userInput = await this.readLine("당첨 번호를 입력해 주세요.\n");
        winningNumbers = userInput.split(",").map(Number);
        this.validateWinningNumbers(winningNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbers;
  }

  async getLottoBonusNumber() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await this.readLine("보너스 번호를 입력해 주세요.\n");
        this.validateNumberRange(userInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }

  amountValidate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위만 가능합니다.");
    }
  }

  validateWinningNumbers(numbers) {
    this.validateDuplicate(numbers);
    for (let i = 0; i < numbers.length; i++) {
      this.validateNumberRange(numbers[i]);
    }
  }

  validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45까지만 가능합니다.");
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복 되지않는 수가 6개여야 합니다.");
    }
  }

  // Lottos : Lotto 인스턴스 배열
  getLottos(user) {
    user.printLottos();
  }

  async getLottoResult(results) {
    Console.print("당첨 통계");
    Console.print(`3개 일치 (5,000원) - ${prize.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${prize.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prize.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prize.first}개`);
    Console.print(
      `총 수익률은 ${((allPrize / amount) * 100).toFixed(2)}%입니다.`
    );
  }

  async readLine(query) {
    return await Console.readLineAsync(query);
  }
}
