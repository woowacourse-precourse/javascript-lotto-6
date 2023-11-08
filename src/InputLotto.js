import { Console } from "@woowacourse/mission-utils";

class InputLotto {
  async inputWinningNumbers() {
    const inputNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningNumbers = this.validateWinningNumbers(inputNumbers).split(',').map(Number);
    return winningNumbers;
  }

  validateWinningNumbers(winningNumbers) {
    if (!winningNumbers) {
      throw new Error("[ERROR] 당첨 번호를 입력해 주세요.");
    }

    const commaNumbers = winningNumbers.split(',');
    if (commaNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    if (new Set(commaNumbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호에 중복이 있습니다.");
    }

    commaNumbers.forEach((number) => {
      if (isNaN(Number(number))) {
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      }

      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 값이어야 합니다.");
      }
    });

    return commaNumbers;
  }

  async inputBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = this.validateBonusNumber(winningNumbers, bonusInput);

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateBonusNumber(winningNumbers, bonusInput) {
    const bonusNumber = parseInt(bonusInput, 10);

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    } else if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 값이어야 합니다.");
    } else if (new Set([...winningNumbers, bonusNumber]).size !== 7) {
      throw new Error("[ERROR] 당첨 번호와 중복되는 보너스 번호는 입력할 수 없습니다.");
    }

    return bonusNumber;
  }
}

export default InputLotto;