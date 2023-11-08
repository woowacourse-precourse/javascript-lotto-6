import { Console } from "@woowacourse/mission-utils";

const UserInterface = () => {
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
      Console.print(lottoNumber);
    });
  };

  const getWinningNumbers = async () => {
    const winningNumbers = [];
    let isValid = false;
    while (!isValid) {
      const winningNumber = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      try {
        validateWinningNumbers(winningNumber);

        winningNumber.split(",").forEach((number) => {
          winningNumbers.push(parseInt(number, 10));
        });
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbers;
  };

  const validateWinningNumbers = (winningNumbers) => {
    const winningNumbersArray = winningNumbers.split(",");
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
    return winningNumbers;
  }
  return { getLottoNumbers, printLottoNumbers, getWinningNumbers };
};

export default UserInterface;
