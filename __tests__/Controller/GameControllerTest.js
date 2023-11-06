import { MissionUtils } from "@woowacourse/mission-utils";
import GameController from "../../src/Controller/GameController";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 구매 과정 테스트", () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  describe("Test 1. 로또 구입 금액 입력 및 로또 구매 테스트", () => {  
    test("Test 1-1. 로또 구입 금액을 입력받고 반환한다", async () => {
      const money = 10000;
      mockQuestions([money]);
  
      const result = await gameController.getMoney();
      expect(result).toBe(money);
    });
  
    test("Test 1-2. 입력받은 금액만큼 로또를 구매한다", () => {
      const money = 10000;
      const lottoCnt = 10;
      
      expect(gameController.getLottocnt(money)).toBe(lottoCnt);
    });

    test("Test 1-3. 구매한 로또를 lotto 배열에 저장한다", () => {
      const money = 10000;
      const lottoCnt = 10;

      gameController.buyLotto(money);
      expect(gameController.lottos.length).toBe(lottoCnt);
    });
  });

  describe("Test 2. 로또 번호 및 보너스 번호 입력 테스트", () => {
    test("Test 2-1. 당첨 번호를 입력받고 반환한다", async () => {
      const luckyNumbers = "1,2,3,4,5,6";
      const output = luckyNumbers.split(",").map((number) => Number(number));
      mockQuestions([luckyNumbers]);
  
      const result = await gameController.getLuckyNumbers();
      expect(result).toEqual(output);
    });
  
    test("Test 2-2. 보너스 번호를 입력받고 반환한다", async () => {
      const bonusNumber = 7;
      const luckyNumbers = [1,2,3,4,5,6];
      mockQuestions([bonusNumber]);
  
      const result = await gameController.getBonusNumber(luckyNumbers);
      expect(result).toBe(bonusNumber);
    });
  })
});