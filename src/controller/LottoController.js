import Input from "../view/input.js";
import Output from "../view/Output.js";

import generateMoney from "../utils/generateMoney.js";
import Money from "../model/Money.js";

import generateLottos from "../utils/generateLottos.js";
import LottoSet from "../model/LottoSet.js";

import { generateWinningNumbers, generateBonusNumber } from "../utils/generateWinningLotto.js";
import WinningLotto from "../model/WinningLotto.js";

class LottoController{
    #money;

    #winningLotto;

    #bonusNumber;

    #boughtLottoNumber;

    constructor(){
        this.#money = 100;
        this.#winningLotto = -1;
        this.#bonusNumber = -1;
        this.#boughtLottoNumber = -1;
    }

    async run(){
        const boughtLottoNumber = await this.#buyLotto();
        this.#writeLotto(boughtLottoNumber);
        const winningLotto = this.#makeWinningLotto();
    }

    async #buyLotto(){
        try {
            const moneyString = await Input.inputMoney();
            const money = generateMoney(moneyString);
            const boughtLottoNumber = new Money(money).buyLottos();
            Output.outputBoughtLottoNumber(boughtLottoNumber);
            return boughtLottoNumber;
        }
        catch(e){
            Output.outputError(e);
            this.#buyLotto();
        }
    }

    #writeLotto(boughtLottoNumber){
        try {
            const lottos = generateLottos(boughtLottoNumber);
            const lottoSet = new LottoSet(lottos);
            Output.outputLottoSetNumbers(lottoSet.toString());
            return lottoSet;
        }catch(e){
            Output.outputError(e);
            this.#writeLotto();
        }
    }

    async #makeWinningLotto(){
        try{
            const winningNumbersString = await Input.inputWinningNumbers();
            const bonusNumberString = await Input.inputBonusNumber();
            const winningNumbers = generateWinningNumbers(winningNumbersString);
            const bonusNumber = generateBonusNumber(bonusNumberString);
            return new WinningLotto(winningNumbers, bonusNumber);
        }catch(e){
            Output.outputError(e);
            this.#makeWinningLotto();
        }
    }
}

export default LottoController;