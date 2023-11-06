import { Console } from "@woowacourse/mission-utils";

export const getBonusNumber = async (winNumber) => {
  const userInput = await Console.readLineAsync("보너스 번호를 입력해주세요");

  if (userInput.length > 2 || isNaN(userInput) || Number(userInput) > 45) {
    throw new Error("[ERROR] 45 이하의 숫자만 입력해주세요");
  }

  winNumber.forEach((num) => {
    if (num === Number(userInput)) {
      throw new Error(
        "[ERROR] 보너스 숫자는 우승번호에 포함되지 않는 숫자로 입력해야 합니다."
      );
    }
  });

  return Number(userInput);
};

// A 키보드로부터 숫자 하나를 입력 받는다.

// B 입력 받은 숫자를 한자리인지 검증한다.

// srp

// 사용자로부터 보너스 번호 하나를 입력 받는다.
