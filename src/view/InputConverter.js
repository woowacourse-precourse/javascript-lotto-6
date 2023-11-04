// 사용자 입력값의 타입을 변환하는 컨버터

export class InputConverter {
    bonusNumber;
    winningNumbers;
    money;

    /**
     *
     * @param input
     * @return number
     * @description [구매 금액 변환기]
     *
     * 사용자가 입력한 구매 금액을 `number`로 가져옴
     *
     * '5000' -> 5000
     */
    convertToMoney(input) {
        const money = Number(input)
        return money
    }

    /**
     *
     * @param input
     * @return {numbers[]}
     * @description - [당첨 번호 변환기]
     *
     * 사용자가 입력한 당첨 번호를 리스트로 가져옴
     *
     * '1,2,3,4,5,6' -> ['1','2','3','4','5','6']
     */

    convertToWinningNumbers(input) {
        return this.winningNumbers = input.split(',');

    }

    /**
     *
     * @param input
     * @return {number}
     * @description [보너스 번호 변환기]
     *
     * 사용자가 입력한 보너스 번호를 변환해서 `number`로 가져옴
     *
     * '4' -> 4
     */
    convertToBonusNumber(input) {
        return this.bonusNumber = Number(input);
    }
}