/**
 * @description 로또를 추첨해주는 클래스
 */
export class LottoMachine {
    /**
     * @type {numbers[]}
     * @description 당첨 번호를 갖고있음
     */
    #winningNumbers
    /**
     * @type {number}
     * @description 보너스 번호를 갖고있음
     */
    #bonusNumber
    /**
     * @type {Lotto[]}
     * @description 로또들을 갖고있음
     */
    #boughtLottos

    /**
     *
     * @param {numbers[]} winningNumbers
     * @param {number} bonusNumber
     * @param {Lotto[]} boughtLottos // [ [1,2,...],[4,5,...]...]
     */
    constructor(winningNumbers, bonusNumber, boughtLottos) {
        this.#winningNumbers = winningNumbers
        this.#bonusNumber = bonusNumber
        this.#boughtLottos = boughtLottos
    }

    /**
     * @return {number[]}
     * @description 로또 추첨하기 -> 몇개 일치하는지 세는 로직
     */
    drawing(winningNumbers, bonusNumber, boughtLottos) {
        //하나씩 돌면서 몇개 일치하는지 카운트 올리기

        let resultArr = [0, 0, 0, 0, 0]
        // [3개 일치하는 로또의 수,4개일치하는 로또의 수, ... ,6개일치하는 로또의 수]

        this.#boughtLottos.forEach(lotto => {
            const matchNumber = this.#compareMatchingNumber(lotto)
            if (matchNumber === 3) {
                resultArr[0]++
            }
            if (matchNumber === 4) {
                resultArr[1]++
            }
            if (matchNumber === 5) {
                resultArr[2]++
            }
            // if(matchNumber === 5 && 보너스넘버가 포함됨){
            //     resultArr[3] ++
            // }
            if (matchNumber === 6) {
                resultArr[4]++
            }

        })
        return resultArr
    }

    /**
     *
     * @param lotto
     * @return {number}
     * @description 겹치는 번호만 필터로 모아서 총 몇개겹치는지 세준다
     *
     * ex. 5개 겹치면 5 리턴
     */

    #compareMatchingNumber(lotto) {
        let matchNum = lotto.filter(n => this.#winningNumbers.includes(n))
        return matchNum.length
    }
}