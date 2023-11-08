import Customer from "../src/game/Customer";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("고객 클래스 테스트", () => {
  test("지불한 금액만큼 로또를 구입", () => {
    mockRandoms([[1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16]]);
    const customer = new Customer(2000);
    const result = customer.cntLottoTicekts;

    expect(result).toEqual(2);
  });

  test("구입한 로또만큼 리스트에 저장", () => {
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16]]);
    const customer = new Customer(2000);
    customer.buyLottoTickets();
    const logs = [
      "2개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[11, 12, 13, 14, 15, 16]"
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
