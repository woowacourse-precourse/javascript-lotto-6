import { BONUS_NUMBER_TYPE } from "../../src/constants.js";
import { LottoResult } from "../../src/game/lotto/LottoResult.js";

const numbers = [1,2,3,4,5,6];
const winWinningNumbers = [1,2,3,4,44,45];
const loseWinningNumbers = [1,2,42,43,44,45];
const bonusNumberType = BONUS_NUMBER_TYPE.useless;

const winWinningLottoResult = new LottoResult(numbers, winWinningNumbers, bonusNumberType);
const loseWinningLottoResult = new LottoResult(numbers, loseWinningNumbers, bonusNumberType);


describe("1개의 로또 결과", ()=>{
    test("발행한 로또 번호 와 사용자가 입력한 당첨 번호/보너스 번호 비교 하여 일치 개수 계산", ()=>{
        expect(winWinningLottoResult.getCountOfWinningNumbers()).toBe(4);
        expect(winWinningLottoResult.getBonusNumberType()).toBe(BONUS_NUMBER_TYPE.useless);
    })

    test("당첨 조건 과 비교해 당첨 여부 를 확인 한다.", ()=>{
        expect(winWinningLottoResult.isWin()).toBe(true)
        expect(loseWinningLottoResult.isWin()).toBe(false)
    })
})