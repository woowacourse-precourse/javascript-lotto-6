import { BONUS_NUMBER_TYPE } from "../src/constants.js";
import { LottoResult } from "../src/lottoGame/result/Lotto.js";

const numbers = [1,2,3,4,5,6];
const winningNumbers = [1,2,3,4,44,45];
const bonusNumberType = BONUS_NUMBER_TYPE.useless;

const lottoResult = new LottoResult(numbers, winningNumbers, bonusNumberType);

const winningConditions = [
    {
        condition: {winningNumbersCount : 4, bonusNumberType : BONUS_NUMBER_TYPE.useless},
    },    
]

const losingConditions = [
    {
        condition: {winningNumbersCount : 1, bonusNumberType : BONUS_NUMBER_TYPE.useless},
    },
    {
        condition: {winningNumbersCount : 2, bonusNumberType : BONUS_NUMBER_TYPE.useless},
    },
    {
        condition: {winningNumbersCount : 5, bonusNumberType : BONUS_NUMBER_TYPE.withOutFiveWinningNumbers},
    },
    {
        condition: {winningNumbersCount : 5, bonusNumberType : BONUS_NUMBER_TYPE.withFiveWinningNumbers},
    }
]

describe("1개의 로또 결과", ()=>{
    test("발행한 로또 번호 와 사용자가 입력한 당첨 번호/보너스 번호 비교 하여 일치 개수 계산", ()=>{
        expect(lottoResult.getCountOfWinningNumbers()).toBe(4);
        expect(lottoResult.getBonusNumberType()).toBe(BONUS_NUMBER_TYPE.useless);
    })

    test("당첨 여부 확인", ()=>{
        winningConditions.forEach(({condition}) => {
            expect(lottoResult.isWin(condition)).toBe(true)
        })

        losingConditions.forEach(({condition}) => {
            expect(lottoResult.isWin(condition)).toBe(false)
        })
        
    })
})