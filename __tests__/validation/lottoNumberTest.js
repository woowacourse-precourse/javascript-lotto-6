import { numberValidation } from "../../src/utils/Validation";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessages.js";

describe("로또 번호 테스트", () => {
  test("중복된 숫자 에러", () => {
    const numberList = ["1", "2", "2", "4", "5", "6"];

    expect(() => {
      numberValidation(numberList);
    }).toThrow(ERROR_MESSAGE.duplicate);
  });

  test("숫자가 아닌 입력 또는 46 이상인 경우 에러", () => {
    const numberLists = [
      " 1,2,3,4,5,6",
      ",2,3,4,5,6",
      "a,2,3,4,5,6",
      "@,2,3,4,5,6",
      "일,2,3,4,5,6",
      "01,2,3,4,5,6",
      "1.,2,3,4,5,6",
      "1,2,47,4,5,6",
      "0,2,3,4,5,6",
    ];

    numberLists.forEach((list) => {
      let input = list.split(",");
      expect(() => {
        numberValidation(input);
      }).toThrow(ERROR_MESSAGE.number);
    });
  });

  test("입력값 6개가 아닐경우", () => {
    const numberLists = ["1,2,3", "1,2,3,4,5,6,7"];

    numberLists.forEach((list) => {
      let input = list.split(",");
      expect(() => {
        numberValidation(input);
      }).toThrow(ERROR_MESSAGE.max_input);
    });
  });
});
