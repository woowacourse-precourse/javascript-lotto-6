import { Console } from "@woowacourse/mission-utils";

const UserInterface = () => {
  let winningNumbers = [];

  const getLottoNumbers = async () => {
    let isValid = false;
    let inputToNumber;
    while (!isValid) {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      try {
        inputToNumber = validateLottoNumbers(input);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return inputToNumber;
  };

  const validateLottoNumbers = (input) => {
    const inputToNumber = parseInt(input, 10);
    if (Number.isNaN(inputToNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (inputToNumber <= 0) {
      throw new Error("[ERROR] 0 이상의 숫자를 입력해주세요.");
    }
    if (inputToNumber % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 숫자를 입력해주세요.");
    }
    return inputToNumber;
  };

  const printLottoNumbers = (lottoNumbers) => {
    Console.print("\n" + lottoNumbers.length + "개를 구매했습니다.");
    lottoNumbers.forEach((lottoNumber) => {

      Console.print("[" + lottoNumber.join(", ") + "]");
    });
  };

  const getWinningNumbers = async () => {
    let isValid = false;
    let winningNumbersArray;
    while (!isValid) {
      const winningNumber = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      try {
        winningNumbersArray = validateWinningNumbers(winningNumber);
        winningNumbers = [...winningNumbersArray];
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbers;
  };

  const validateWinningNumbers = (winningNumbers) => {
    const winningNumbersArray = winningNumbers.split(",")
      .map((number) => parseInt(number.trim(), 10));

    if (winningNumbersArray.length !== 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해주세요.");
    }

    const regex = /^[0-9,]*$/;
    if (!regex.test(winningNumbers)) {
      throw new Error("[ERROR] 숫자와 쉼표만 입력해주세요.");
    }

    winningNumbersArray.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");
      }
    });

    const set = new Set(winningNumbersArray);
    if (set.size !== 6) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
    return Array.from(winningNumbersArray);;
  }

  const getBonusNumber = async () => {
    let isValid = false;
    let bonusNumberToInt;
    while (!isValid) {
      const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      try {
        bonusNumberToInt = validateBonusNumber(bonusNumber);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumberToInt;
  }

  const validateBonusNumber = (bonusNumber) => {
    const bonusNumberToInt = parseInt(bonusNumber, 10);
    if (Number.isNaN(bonusNumberToInt)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (bonusNumberToInt < 1 || bonusNumberToInt > 45) {
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");
    }

    if (winningNumbers.includes(bonusNumberToInt)) {
      throw new Error("[ERROR] 당첨 번호와 중복된 숫자입니다.");
    }

    // 쉼표를 입력한 경우 1개가 아니기 때문에 예외 처리
    if (bonusNumber.includes(",")) {
      throw new Error("[ERROR] 1개의 숫자만 입력해주세요.");
    }

    return bonusNumberToInt;
  };

  const printResult = (rankCount) => {
    Console.print("\n당첨 통계\n---");
    Console.print("3개 일치 (5,000원) - " + rankCount['5'] + "개");
    Console.print("4개 일치 (50,000원) - " + rankCount['4'] + "개");
    Console.print("5개 일치 (1,500,000원) - " + rankCount['3'] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + rankCount['2'] + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + rankCount['1'] + "개");

  }

  const printProfitRate = (profitRate) => {
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  return { getLottoNumbers, printLottoNumbers, getWinningNumbers, getBonusNumber, printResult, printProfitRate };
};

export default UserInterface;
