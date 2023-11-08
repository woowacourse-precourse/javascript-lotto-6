import { getBuyMoney, getWinNumber, getBonusNumber, printLottoNumber, printReward, getBuyNumber, getLottoNumber, calculateWinCount, getWinCount, getRateofReturn} from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
const { Console } = MissionUtils; 
Console.print = jest.fn();
MissionUtils.Random.pickUniqueNumbersInRange = jest.fn(() => [1, 2, 3, 4, 5, 6]);

describe("로또 UI 기능 테스트", () => {

    test("구매 금액 입력받기", async () => {
        const input = 1000;
        const expectresult = 1000;
  
        Console.readLineAsync = jest.fn().mockResolvedValue(input);

        const result = await getBuyMoney();

        expect(result).toEqual(expectresult);
    });

    test("당첨 번호 입력받기", async () => {
        const input = "1,2,3,4,5,6";
        const expectresult = [1,2,3,4,5,6];
  
        Console.readLineAsync = jest.fn().mockResolvedValue(input);

        const result = await getWinNumber();

        expect(result).toEqual(expectresult);
    });

    test("보너스 번호 입력받기", async () => {
        const input = "7";
        const expectresult = 7;
  
        Console.readLineAsync = jest.fn().mockResolvedValue(input);

        const result = await getBonusNumber();

        expect(result).toEqual(expectresult);
    });

    test("로또 번호 출력하기", async () => {
        const buyNumber = 1;
        const lottoNumber = [new Lotto([7,6,5,4,3,2])];
        const expectresult = "[2, 3, 4, 5, 6, 7]";
  
        printLottoNumber(buyNumber, lottoNumber);

        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining(expectresult));
    });

    test("당첨 결과 출력하기", async () => {
        const winCount = [5000,0,0,0,0];
        const rateOfReturn = 100.0;
        const expectresult1 = "3개 일치 (5,000원) - 1개";
        
        printReward(rateOfReturn,winCount);

        expect(Console.print).toHaveBeenCalledWith(expect.stringContaining(expectresult1));
    });
});

//////////////////////////////////////////

describe("로또 핵심 기능 테스트", () => {

    test("구매 횟수 구하기", () => {
        const buyMoney = 1000;
        const expectresult = 1;

        const result = getBuyNumber(buyMoney);

        expect(result).toEqual(expectresult);
    });

    test("로또 번호 생성하기", () => {
        const buyNumber = 1;
        const expectresult = [1, 2, 3, 4, 5, 6];

        const lottoNumber = getLottoNumber(buyNumber);

        expect(lottoNumber[0].getNumber()).toEqual(expectresult);
    });

    test("총 당첨 금액 계산하기", async () => {
        const buyNumber = 1;
        const lottoNumber = [new Lotto([1,2,3,4,5,7])];
        const winNumber = [1,2,3,4,5,6];
        const bonusNumber = 7;
        const expectresult = [0,0,0,30000000,0];
  
        const result = getWinCount(buyNumber,lottoNumber,winNumber,bonusNumber);

        expect(result).toEqual(expectresult);
    });

    test("수익률 계산하기", async () => {
        const buyMoney = 1000;
        const winCount = [5000,0,0,0,0];
        const expectresult = "500.0";
  
        const result =  getRateofReturn(buyMoney,winCount);

        expect(result).toEqual(expectresult);
    });
});
