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

  return { getLottoNumbers, validateLottoNumbers };
};

export default UserInterface;
