import { Console } from "@woowacourse/mission-utils";
import {  WINNING_NUMBERS_COUNT_TYPE } from "../src/constants.js";
import { LottoResult } from "../src/game/lotto/LottoResult.js";
import { WinningLottosResult } from "../src/game/result/WinningLottos.js";
import { getRoundedNumber } from "../src/utils/getRoundedNumber.js";
import { printResult } from "../src/game/result/printResult.js";

let printTitleSpy; 
let printWinningLottoWithBonusSpy;
let printWinningLottoSpy;
let printTotalProfitRateSpy;

const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

const winningNumbers = [1,33,35,31,2,3];
const bonusNumber = 16
const userMoney = 6000;

let fifthWinningLottoNumbers;
let fourthWinningLottoNumbers;
let winningLottoNumbers;
let losingLottoNumbers;
let lottoNumbers;

let lottoResults;

let winningLottosResult;

beforeEach(()=>{
     fifthWinningLottoNumbers = [
        [1,33,35,4,5,6],
        [1,2,3,4,5,6],
    ];

    fourthWinningLottoNumbers = [
        [1,33,35,31,2,6],
        [2,3,35,33,1,4]
    ];

    winningLottoNumbers = [...fifthWinningLottoNumbers, ...fourthWinningLottoNumbers]

    losingLottoNumbers = [[11,12,13,14,15,16]]

    lottoNumbers = [
        ...winningLottoNumbers, ...losingLottoNumbers
    ];

    lottoResults = lottoNumbers.map((lottos)=> new LottoResult(lottos, winningNumbers, bonusNumber));

    winningLottosResult = new WinningLottosResult(lottoResults, userMoney);

    printWinningLottoWithBonusSpy = jest.spyOn(printResult, "winningLottoWithBonus")
    printWinningLottoSpy = jest.spyOn(printResult, "winningLotto")
    printTotalProfitRateSpy = jest.spyOn(printResult, "totalProfitRate")
    printTitleSpy =  jest.spyOn(printResult, "title")
})

describe("n 개의 당첨된 로또들",()=>{
    test("n 개의 '1개의 로또 결과' 의 당첨 여부 결과 에 따라 당첨 된 로또들 을 선별한다.", ()=>{
        expect(winningLottosResult.getWinningLottos().length).toBe(winningLottoNumbers.length)        
    })

    test("당첨 된 로또들 중, 당첨 조건 과 짝 지어지는 당첨된 로또 개수 를 1 증가 한다.",()=>{
        console.log(winningLottosResult.getWinningLottosResult())

        expect(winningLottosResult.getWinningLottosResult().find(({condition})=> condition.winningNumbersCount === WINNING_NUMBERS_COUNT_TYPE.fifth).count).toBe(fifthWinningLottoNumbers.length);

        expect(winningLottosResult.getWinningLottosResult().find(({condition})=> 
        condition.winningNumbersCount === WINNING_NUMBERS_COUNT_TYPE.second).count).toBe(fourthWinningLottoNumbers.length);

    })

    test("수익률 = 당첨 금액 / 구매한 금액 계산",()=>{
        expect(winningLottosResult.getTotalProfitRate()).toBe(getRoundedNumber( (winningLottosResult.getTotalProfit() / userMoney) *100))
    })

    test("당첨 내역 출력",()=>{
        const logSpy = getLogSpy();

        winningLottosResult.print();

        const logs = [
            "당첨통계\n---\n",
            "3개 일치 (5,000원) - 2개",
            "4개 일치 (50,000원) - 0개",
            "5개 일치 (1,500,000원) - 2개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "6개 일치 (2,000,000,000원) - 0개",
            `총 수익률은 ${winningLottosResult.getTotalProfitRate()}%입니다.`
        ]

        expect(printTitleSpy).toHaveBeenCalledTimes(1)
        expect(printWinningLottoWithBonusSpy).toHaveBeenCalledTimes(1)
        expect(printWinningLottoSpy).toHaveBeenCalledTimes(4)
        expect(printTotalProfitRateSpy).toHaveBeenCalledTimes(1)

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
        
    })
})