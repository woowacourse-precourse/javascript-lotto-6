import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Message";
import { WINNIGAMOUNT } from "../Constants/Constant";

export default class Compare{
    #fifth;
    #fourth;
    #third;
    #second;
    #first;
    #total;

    constructor(){
        this.#fifth = 0;
        this.#fourth = 0;
        this.#third = 0;
        this.#second = 0;
        this.#first = 0;
        this.#total = 0;
    }

    compareLotto(winningNum, bonusNum, userNum){
        userNum.forEach((userLotto) => {
            const matched = winningNum.filter(num => userLotto.includes(num)).length;
            const matchedBonus = userLotto.includes(bonusNum) ? 1 : 0;

            switch (matched) {
                case 6:
                    this.#first++;
                    this.total += WINNIGAMOUNT.FIRST_PLACE
                    break;
                case 5:
                    if (matchedBonus) {
                        this.#second++;
                        this.total += WINNIGAMOUNT.SECOND_PLACE
                    } else {
                        this.#third++;
                        this.total += WINNIGAMOUNT.THIRD_PLACE
                    }
                    break;
                case 4:
                    this.#fourth++;
                    this.total += WINNIGAMOUNT.FOURTH_PLACE
                    break;
                case 3:
                    this.#fifth++;
                    this.#total += WINNIGAMOUNT.FIFTH_PLACE
                    break;
            }
        });
        this.#printResult();
        Console.print(this.#total)
    }

    profit(price){
        const profit = ((this.#total / price) * 100).toFixed(1);
        return profit
    }

    printTotal(profit){
        Console.print(`${MESSAGE.PROFIT}${profit}%입니다.`)
    }

    #printResult(){
        Console.print(`${MESSAGE.FIFTH_PLACE}${this.#fifth}개`)
        Console.print(`${MESSAGE.FOURTH_PLACE}${this.#fourth}개`)
        Console.print(`${MESSAGE.THIRD_PLACE}${this.#third}개`)
        Console.print(`${MESSAGE.SECOND_PLACE}${this.#second}개`)
        Console.print(`${MESSAGE.FIRST_PLACE}${this.#first}개`)
    }
}