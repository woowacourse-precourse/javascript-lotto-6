import { Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";
import Amount from "../Service/Amount";
import Generation from "../Service/Generation";
import Input from "../View/Input";
import { MESSAGE } from "../Constants/Message";
import Compare from "../Service/Compare";
import TYPE_CONVERTOR from "../Service/ChageType";

export default class Controller{
    #input;
    #amount;
    #generation;
    #lotto;
    #print;
    #checkLotto
    #checkBonus

    constructor(){
        this.#input = new Input();
        this.#amount = new Amount();
        this.#generation = new Generation();
        this.#print = new Compare();
    }

    async totalPrice(){
        const totalPrice = await this.#input.InputMoney();
        this.#amount.validatePirce(totalPrice)
        this.#amount.makeVariables(totalPrice)
    }

    chance(){
        const chance = this.#amount.getChance();
        Console.print(`${chance}${MESSAGE.COUNT}`)
    }

    getLottoNum(){
        const chance = this.#amount.getChance()
        this.#generation.list(chance)
    }
    
    printLottoNum(){
        const lottoNum = this.#generation.getNum();
        lottoNum.forEach(numArr => {
            const str = TYPE_CONVERTOR.arrTostrArr(numArr);
            Console.print(str)
        })
    }

    async userLottoNum(){
        const lottoNum = await this.#input.inputWinningNum();
        if(lottoNum){
            const makeArray = lottoNum.split(',')
            const makeNum = makeArray.map((str) => Number(str))
            this.#lotto = new Lotto(makeNum)
            this.#checkLotto = makeNum
        }
    }

    async userBonusNum(){
        const bonusNum = await this.#input.inputBonusNum();
        this.#lotto.validateBonusNum(bonusNum)
        this.#checkBonus = bonusNum
        return bonusNum
    }
    
    async comapreLotto(){
        const lotto = this.#generation.getNum();
        const winning = this.#checkLotto
        const bonus = this.#checkBonus
        this.#print.compareLotto(winning, bonus, lotto)
    }

    async getProfit(){
        const price = this.#amount.getPrice();
        const totalProfit = this.#print.profit(price);
        this.#print.printTotal(totalProfit);
        return totalProfit
    }

    async run(){
        Console.print(MESSAGE.PURCHASE_INPUT)
        await this.totalPrice();
        this.chance();
        this.getLottoNum();
        this.printLottoNum();
        await this.userLottoNum();
        await this.userBonusNum();
        this.comapreLotto();
        this.getProfit();
    }
}