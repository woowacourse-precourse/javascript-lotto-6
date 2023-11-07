import Lotto from "../src/Lotto.js";
import Lottos from "../src/Lottos.js";
import { ERROR_TYPE } from "../src/constants/messages.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_TYPE.NOT_SIX_NUMBERS);
  });

  test("로또 번호의 개수가 6개가 넘지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_TYPE.NOT_SIX_NUMBERS);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_TYPE.CONTAINS_DUPLICATES);
  });

  test("로또 번호에 1~45 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_TYPE.OUT_OF_RANGE);
  });
});

describe("로또 계산 클래스 테스트", () => {
  test("구매한 로또의 비용이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos("1q2w3e");
    }).toThrow(ERROR_TYPE.NOT_NUMBERS);
  });

  test("구매한 로또의 비용이 1000원 이상을 넘지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(500);
    }).toThrow(ERROR_TYPE.MINIMUM_PRICE);
  });

  test("구매한 로또의 비용이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(1200);
    }).toThrow(ERROR_TYPE.CANNOT_DIVIDE_BY_1000);
  });
});
