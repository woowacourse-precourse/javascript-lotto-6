import {Console} from "@woowacourse/mission-utils";
import {LottosDto} from "../domain/dto/LottosDto.js";

export class OutputView {


    printFinalResult() {
    }

    /**
     *
     * @param {LottosDto} lottosDto
     * @return {void}
     */
    printLottosDto(lottosDto) {
        this.#printLottsLenght(lottosDto.lottos.length) //배열의 길이로 몇개의 로또인지 구함
        lottosDto.lottos.forEach(lottoDto => {
            this.#printLottoDto(lottoDto)
        })
    }

    /**
     *
     * @param {LottoDto} lottoDto
     * 앞뒤 공백 제거를 위한..
     * @return {void}`
     */
    #printLottoDto(lottoDto) {
        //[1,2,3,4,5,6] -> '1, 2, 3, 4, 5, 6'
        const lottoNumberString = lottoDto.numbers.join(', ')
        // -> '[1, 2, 3, 4, 5, 6]'
        Console.print(`[${lottoNumberString}]`)
    }


    /**
     *
     * @param {number} length
     * @return {void}
     */

    #printLottsLenght(length) {
        Console.print(`\n${length}개를 구매했습니다.`)
    }
}