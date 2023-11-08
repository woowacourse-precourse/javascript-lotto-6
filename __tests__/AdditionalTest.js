import { MissionUtils } from "@woowacourse/mission-utils";
import LottoController from "../src/controller/LottoController.js";
import { ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE, ERRMSG_MONEY_NOT_MONEY } from "../src/constants/ErrorMessage.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
  
      return Promise.resolve(input);
    });
  };

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("추가 테스트", ()=>{
    const lottoController = new LottoController();

    test("로또 구매 테스트", async () => {
        MissionUtils.Console.print = jest.fn();
        mockQuestions(["1000j", "8500", "3000"]);

        await lottoController.buyLotto();
        
        const logs = [
            ERRMSG_MONEY_NOT_MONEY,
            ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE,
            "3개"
        ]

        logs.forEach((log, count)=>{
            expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(count+1, expect.stringContaining(log));
        })
    })

    test("로또 발급 테스트", async () => {
        MissionUtils.Console.print = jest.fn();
        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
          ]
        );
        
        lottoController.writeLotto();

        const logs = [
            "[8, 21, 23, 41, 42, 43]",
            "[3, 5, 11, 16, 32, 38]",
            "[7, 11, 16, 35, 36, 44]",
        ]

        logs.forEach((log, count)=>{
            expect(MissionUtils.Console.print).toHaveBeenCalledWith(expect.stringContaining(log));
        })
    })
})