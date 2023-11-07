import { PurChasePrice } from "./PurChasePrice.js";
import { LottoNum } from "../Computer/LottoNums.js";

export class LottoGame {
    constructor() {
        this.purChasePrice = new PurChasePrice();
    }

    async start() {
        const lottoCount = await this.purChasePrice.inputPrice();
        const lottoNum = new LottoNum(lottoCount);
        lottoNum.numbers.forEach(number => 
            console.log(number.sort(function(a,b){
                return a-b;
            }))
        );
    }
}

const lottoGame = new LottoGame();
lottoGame.start();
