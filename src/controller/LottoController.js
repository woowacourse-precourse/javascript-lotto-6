import Input from "../view/Input.js";
import Output from "../view/Output.js";

import generateMoney from "../utils/generateMoney.js";
import Money from "../model/Money.js";

import generateLottos from "../utils/generateLottos.js";
import LottoSet from "../model/LottoSet.js";

import { generateWinningNumbers, generateBonusNumber } from "../utils/generateWinningLotto.js";
import WinningLotto from "../model/WinningLotto.js";

class LottoController{
    #money;

    #lottoSet;

    #winningLotto;

    constructor(){
        this.#money = -1;
        this.#lottoSet = -1;
        this.#winningLotto = -1;
    }

    async run(){
        const boughtLottoNumber = await this.#buyLotto();
        this.#writeLotto(boughtLottoNumber);
        await this.#makeWinningLotto();
        this.#printResult()
    }

    async #buyLotto(){
        while(true){
            try {
                const moneyString = await Input.inputMoney();
                const money = generateMoney(moneyString);
                this.#money = new Money(money);
                const boughtLottoNumber = this.#money.buyLottos();
                Output.outputBoughtLottoNumber(boughtLottoNumber);
                return boughtLottoNumber;
            }
            catch(e){
                Output.outputError(e);
            }
        }
    }

    #writeLotto(boughtLottoNumber){
        while(true){
            try {
                const lottos = generateLottos(boughtLottoNumber);
                this.#lottoSet = new LottoSet(lottos);
                Output.outputLottoSetNumbers(this.#lottoSet.toString());
                break;
            }catch(e){
                Output.outputError(e);
            }
        }
    }

    async #makeWinningLotto(){
        while(true){
            try{
                const winningNumbersString = await Input.inputWinningNumbers();
                const bonusNumberString = await Input.inputBonusNumber();
                const winningNumbers = generateWinningNumbers(winningNumbersString);
                const bonusNumber = generateBonusNumber(bonusNumberString);
                this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
                break;
            }catch(e){
                Output.outputError(e);
            }
        }
    }

    #printResult(){
        const scoreBoard = this.#lottoSet.makeScoreBoard(this.#winningLotto);
        Output.outputScoreBoard(scoreBoard);
        Output.outputRevenuePercent(this.#money.calculateRevenuePercent(scoreBoard.prize));
    }
}

export default LottoController;