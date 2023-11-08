import BonusNum from "../src/BonusNum.js";
import Lotto from "../src/Lotto.js";
import LottoController from "../src/LottoController.js";
import ErrorMsg from "../src/utils/ErrorMsg.js";
import LottoNumGenerator from "../src/utils/LottoNumGenerator.js";
import Validator from "../src/utils/Validator.js";

describe("구입 금액 입력 테스트", () => {
  test("구입금액에 숫자가 아닌 것이 입력된 경우 예외가 발생한다", () => {
    expect(() => {
      Validator.isNum("123f");
    }).toThrow(ErrorMsg.IS_NAN);
  });

  test.each(["33", "999"])(
    "구입금액이 1000미만일 경우 예외가 발생한다",
    (input) => {
      expect(() => {
        Validator.budgetMin(input);
      }).toThrow(ErrorMsg.BUDGET.MIN_IS_UNIT_PRICE);
    }
  );

  test("구매금액이 1000단위가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      Validator.budgetDivisibleByUnit("2009");
    }).toThrow(ErrorMsg.BUDGET.DIVISBLE_BY_UNIT_PRICE);
  });
});

describe("구입한 로또티켓 테스트", () => {
  test("10000원으로 10개의 로또를 구입할 수 있다", () => {
    const controller = new LottoController();
    controller.getLottoCount(10000);
    expect(controller.returnCount()).toBe(10);
  });

  test("자동 생성된 로또티켓의 숫자는 중복없는 숫자 6개이다.", () => {
    const testSet = new Set([...LottoNumGenerator()]);
    expect(testSet.size).toBe(6);
  });
});

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ErrorMsg.LOTTO_NUM.IS_REDUNDANCY);
  });
});

describe("보너스 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 문자열을 입력하면 예외가 발생한다", () => {
    expect(() => {
      new BonusNum("d");
    }).toThrow(ErrorMsg.IS_NAN);
  });
  test("보너스 번호에 1미만 45초과를 입력하면 예외가 발생한다", () => {
    expect(() => {
      new BonusNum("555");
    }).toThrow(ErrorMsg.NUM_OUT_OF_RANGE);
  });
});
