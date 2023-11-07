import Lotto from "../src/Lotto.js";
import { ERROR_MESSAGE } from "../src/constants/errorMessage.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.NO_WINNING_NUMBERS);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.INPUT_DUPLICATION);
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호가 1~45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test("로또 번호가 1~45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 47, 5, 6]);
    }).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test("로또 번호에 숫자가 아닌 문자가 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "j", 5, 6]);
    }).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
  });

  
});
