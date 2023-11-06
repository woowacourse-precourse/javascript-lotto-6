import {Console} from "@woowacourse/mission-utils";
import {LottosDto} from "../domain/dto/LottosDto.js";

export class OutputView {

    /**
     *
     * @param resultArray
     * @description //resultArray는 [3개 일치하는 로또의 수,4개일치하는 로또의 수, ... ,6개일치하는 로또의 수]
     */
    printResult(resultArray) {
        Console.print(`3개 일치 (5,000원) - ${resultArray[0]}개`)
        Console.print(`4개 일치 (50,000원) - ${resultArray[0]}개`)
        Console.print(`5개 일치 (1,500,000원) - ${resultArray[0]}개`)
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultArray[0]}개`)
        Console.print(`6개 일치 (2,000,000,000원) - ${resultArray[0]}개`)
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