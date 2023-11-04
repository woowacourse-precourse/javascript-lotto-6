import {LottoDto} from "./LottoDto.js";

export class LottosDto {
    /**
     * @type {LottoDto[]}
     */
    #lottos

    /**
     *
     * @param {LottoDto[]} manyLottoDto
     * @description manyLottoDto는 [ LottoDto, LottoDto, LottoDto ...]
     *
     * 구조
     *
     * Lotto
     */
    constructor(manyLottoDto) {
        this.#lottos = Object.freeze(manyLottoDto)
    }

    get lottos() {
        return this.#lottos
    }
}