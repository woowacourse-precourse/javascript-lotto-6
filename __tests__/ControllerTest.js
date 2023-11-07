import Controller from "../src/Controller.js";
import { Console, Random } from "@woowacourse/mission-utils";
import Utils from "../src/Utils.js";

describe("Controller 클래스 테스트", () => {
  let controller;
  let readLineMockFn;
  let randomMockFn;

  beforeAll(() => {
    controller = new Controller();
    readLineMockFn = jest.spyOn(Console, "readLineAsync");
    randomMockFn = jest.spyOn(Random, "pickUniqueNumbersInRange");
  });

  test("purchaseLottos 메서드로 로또 구매 금액을 정상적으로 입력하면, 구매한 양만큼 생성됩니다.", async () => {
    randomMockFn.mockReturnValue([1, 2, 3, 4, 5, 6]);
    readLineMockFn.mockResolvedValue("1000");

    await controller.purchaseLottos();

    expect(controller.getDomain.getLottos.length).toEqual(1);
    readLineMockFn.mockClear();
    randomMockFn.mockClear();
  });

  test("setWinnings 메서드로 로또 당첨 번호를 정상적으로 입력하면, 당첨 번호가 저장됩니다.", async () => {
    readLineMockFn.mockResolvedValue("1,2,3,4,5,6");

    await controller.setWinnings();

    expect(controller.getDomain.getWinnings).toEqual([1, 2, 3, 4, 5, 6]);
    readLineMockFn.mockClear();
  });

  test("setBonus 메서드로 로또 보너스 번호를 정상적으로 입력하면, 보너스 번호가 저장됩니다.", async () => {
    readLineMockFn.mockResolvedValue("7");

    await controller.setBonus();

    expect(controller.getDomain.getBonus).toEqual(7);
    readLineMockFn.mockClear();
  });

  test("announceLottery 메서드로 로또의 당첨 결과 배열을 계산할 수 있다.", () => {
    randomMockFn.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const inputs = ["1000", "1,2,3,4,5,6"];
    readLineMockFn.mockImplementationOnce(() => {
      return Promise.resolve(inputs.shift());
    })();

    controller.announceLottery();

    expect(controller.getDomain.getLotteryResults).toEqual([0, 0, 0, 0, 1]);
    randomMockFn.mockClear();
    readLineMockFn.mockClear();
  });

  test("announceProfit 메서드로 로또 수익률을 확인할 수 있다.", () => {
    randomMockFn.mockReturnValue([1, 2, 3, 4, 5, 6]);

    const inputs = ["1000", "1,2,3,4,5,6"];
    readLineMockFn.mockImplementationOnce(() => {
      return Promise.resolve(inputs.shift());
    })();

    controller.announceProfit();

    expect(
      Utils.calculateProfit(controller.getDomain.getLotteryResults, 1)
    ).toEqual("200000000.0");
  });
});
