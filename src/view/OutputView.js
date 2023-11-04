import {Console} from "@woowacourse/mission-utils";
import {LottosDto} from "../domain/dto/LottosDto.js";

export class OutputView {
    /**
     * @return {number}
     * @param money
     */
    printAmount(money) {
        const amount = money / 1000
        Console.print(`\n${amount}개를 구매했습니다.`)
    }

    /**
     *
     * @param {LottosDto} LottosDto
     */
    printLottos(LottosDto) {
        LottosDto.lottos.forEach(lottoDto => {
            Console.print(lottoDto.number)
        })
    }

    printFinalResult() {
    }
}