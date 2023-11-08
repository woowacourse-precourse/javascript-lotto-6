import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

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
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능

  test("로또 자동 발급 시 오름차순으로 발급한다.", () => {
    const randoms = new Array(6).fill(0).map((item, index) => index + 1);
    mockRandoms([randoms.reverse()]);
    expect(Lotto.pickRandomNumbers()).toEqual(randoms.reverse());
  });
});
test("구입 금액에 맞춰서 자동 로또를 발급한다.", () => {
  const money = [0, 4565, 9458.8, 18674, 9485, 154840];
  const result = money.map((value) => Math.floor(value / 1000));
  expect(Lotto.buyAutomaticLotto(money.shift()).length).toBe(result.shift());
});

test("구입 금액에 0 이상의 수가 아닌 값이 입력되면 예외가 발생한다.", () => {
  const inputs = [-1, "test"];
  inputs.forEach((input) => {
    expect(() => Lotto.buyAutomaticLotto(input)).toThrow("[ERROR]");
  });
});
