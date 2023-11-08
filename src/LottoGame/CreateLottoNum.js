import { MissionUtils } from "@woowacourse/mission-utils";
import { PurChasePrice } from "../LottoInput/PurChasePrice.js";
import { LottoNum } from "../Computer/LottoNums.js";

export class CreateLottoNum {
    constructor() {
        this.purChasePrice = new PurChasePrice();
    }

    async start() {
        const lottoCount = await this.purChasePrice.inputPrice();
        const lottoNum = new LottoNum(lottoCount);
        MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
        lottoNum.numbers.forEach(number => 
            MissionUtils.Console.print(`[${number.sort(function(a,b){
                return a-b;
            }).join(', ')}]`)
        );
        return { lottoNum, lottoCount };
    }
}

