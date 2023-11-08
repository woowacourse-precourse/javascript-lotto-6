import { ERROR_MESSAGE } from "../src/constants/errorMessage.js";
import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.not_six_numbers);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.exists_duplication);
  });

  test("로또 번호의 개수가 6개 이하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.not_six_numbers);
  });

  test("로또 번호 중 하나라도 숫자가 아닌 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow(ERROR_MESSAGE.not_number);
  });

  test("로또 번호 중 하나라도 1부터 45 번위에 들지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.not_in_range);
  });

  test("로또 번호 중 중복이 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.exists_duplication);
  });

  test("정상적인 입력이면 에러가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
