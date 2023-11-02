export class Lottos {
    /**
     * @type {Lotto[]}
     */
    #manylottos

    /**
     *
     * @param {Lotto[]} manyLottos
     * @description - 생성자함수는 리턴이 없음: this가 숨어있어서 원본 변경
     */

    constructor(manyLottos) {
        this.#manylottos = manyLottos
    }
}