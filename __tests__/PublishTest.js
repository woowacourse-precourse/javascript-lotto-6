import { MissionUtils } from "@woowacourse/mission-utils";
import publishUtils from "../src/utils/publishUtils.js";
import Publish from "../src/services/Publish.js";
import outputs from "../src/domains/outputs.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 발행 테스트", () => {
  test("구입 금액에 따른 로또 수량 검증", () => {
    // given
    const price = 8000;

    // when
    const result = publishUtils.calculateAmount(price);

    // then
    expect(result).toBe(8);
  });
  test("로또 수량에 따른 문구 출력 검증", () => {
    // given
    const price = 8000;
    const amount = 8;
    const logSpy = jest.spyOn(outputs, "printAmountOfLotto");

    // when
    const publish = new Publish(price);
    publish.printAmount();

    // then
    expect(logSpy).toHaveBeenCalledWith(amount);
  });
  test("로또 번호", () => {});
});
