import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "../src/Purchase";
import { ERROR } from "../src/constants/message";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Purchase 클래스 테스트", () => {
  test("인스턴스 생성 시 전달받은 인자로 수량을 얻는다.", () => {
    const purchase = new Purchase("8000");

    expect(purchase.getAmount()).toBe(8);
  });

  test("인스턴스 생성 시 전달받은 인자로 생성된 수량만큼 로또를 생성한다.", () => {
    const purchase = new Purchase("8000");
    const amount = purchase.getAmount();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    expect(purchase.getLottos()).toHaveLength(amount);
  });

  test("인스턴스 생성 시 전달받은 인자에 숫자가 아닌 다른 문자가 있으면 에러가 발생한다.", () => {
    expect(() => {
      new Purchase("80a0");
    }).toThrow(ERROR.NOT_ONLY_NUMBER);
  });

  test("인스턴스 생성 시 전달받은 인자에 천원 단위가 아니라면 에러가 발생한다.", () => {
    expect(() => {
      new Purchase("800");
    }).toThrow(ERROR.INVALID_UNIT);
  });

  test("인스턴스 생성 시 전달받은 인자에 0 이하의 값이 입력되면 에러가 발생한다.", () => {
    expect(() => {
      new Purchase("0");
    }).toThrow(ERROR.LOWER_THAN_ZERO);
  });
});
