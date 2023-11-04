import {Lotto} from "./Lotto.js";
import {LottosDto} from "./dto/LottosDto.js";

export class Lottos {
    /**
     * @type {Lotto[]}
     */
    #manylottos

    /**
     *
     * @param {Lottos[]} boughtLottos
     * @description - boughtLottos를 돌면서 Lotto로 보내 로또 한장을 생성해서 모두 가져옴
     */

    constructor(boughtLottos) {
        //
        this.#manylottos = boughtLottos.map((lotto) =>
            new Lotto(lotto)
        )
    }

    /**
     * @description - 추첨 기계로 로또 전부 추첨하기
     * @param lottoMachine
     */
    drawAllBy(lottoMachine) {

    }

    /**
     *
     * @return {LottosDto}
     * @description [LottosDto를 만들어주는 함수]
     *
     * manyLottos는 [Lotto, Lotto, Lotto ...]의 형태이다
     * 그것을 [LottoDto, LottoDto, LottoDto ...]로 만들기! :manyLottoDto
     * Lotto에 돌려서 만든 manyLottosDto를 LottosDto로 보내준다
     *
     */

    makeLottosDto() {
        const manyLottoDto = this.#manylottos.map((lotto) => lotto.makeLottoDto())
        return new LottosDto(manyLottoDto)
    }
}