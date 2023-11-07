import Input from "../view/input.js";
import Output from "../view/Output.js";

import generateMoney from "../utils/generateMoney.js";
import Money from "../model/Money.js";

import generateLottos from "../utils/generateLottos.js";
import LottoSet from "../model/LottoSet.js";

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
        
        // const boughtLottoNumber = buyLotto(this.#money);
        // Output.outputMessage(`${boughtLottoNumber}개를 구매했습니다.`);
        // const lottoset = new LottoSet(generateLottos(boughtLottoNumber));
        // lottoset.printLottoSet();
        // await this.inputWinningLottoUntilValid();
        // await this.inputBonusNumberUntilValid();
        // lottoset.calculatePrizeResult(this.#winningLotto, this.#bonusNumber);
        // const total = lottoset.printResult();
        // Output.outputMessage(`총 수익률은 ${Math.round((total/this.#money)*1000)/10}%입니다.`);
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

    async inputWinningLottoUntilValid(){
        let input  = await Input.inputWinningLotto();
        input = input.split(',');
        const numArray = [];
        input.forEach(str => numArray.push(Number.parseInt(str, 10)));
        this.#winningLotto = new Lotto(numArray);
    }

    async inputBonusNumberUntilValid(){
        this.#bonusNumber = await Input.inputBonusNumber();
    }
}

export default LottoController;