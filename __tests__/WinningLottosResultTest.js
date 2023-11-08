import { BONUS_NUMBER_TYPE, WINNING_NUMBERS_COUNT_TYPE } from "../src/constants.js";
import { LottoResult } from "../src/lottoGame/result/Lotto.js";
import { WinningLottosResult } from "../src/lottoGame/result/WinningLottos.js";

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
})