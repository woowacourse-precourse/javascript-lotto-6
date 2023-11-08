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

describe("추가 테스트", ()=>{
    const lottoController = new LottoController();

    test("로또 구매 테스트", async () => {
        MissionUtils.Console.print = jest.fn();
        mockQuestions(["1000j", "8500", "8000"]);

        expect(await lottoController.buyLotto()).toBe(8);
        
        const logs = [
            ERRMSG_MONEY_NOT_MONEY,
            ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE,
        ]

        logs.forEach((log, count)=>{
            expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(count+1, expect.stringContaining(log));
        })
    })
})