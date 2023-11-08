import { MissionUtils } from '@woowacourse/mission-utils'

const InputView = {
    async getMoney(){
        const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.')
        this.checkMoneyValidity(input)

        return Number(input)
    },

    checkMoneyValidity(money){
        // checkNumberValidity 활용하기
        if(isNaN(money)) throw new Error('[ERROR] 숫자를 입력하세요.')

        const money_num = Number(money)
        if(!Number.isInteger(money_num)) throw new Error('[ERROR] 정수로 금액을 입력해주세요.')

        if(money_num <= 0) throw new Error('[ERROR] 금액을 양수로 입력해주세요.')

        if(money_num%1000 !== 0) throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.')
    },

    async getWinningLotto(){
        const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
        const splitInput = input.split(',')
        this.checkLottoValidity(splitInput)

        return splitInput.map(Number)
    },

    checkLottoValidity(lotto){
        if(lotto.length !== 6) throw new Error('[ERROR] 숫자를 6개 입력하세요.')

        lotto.forEach(lotto => {
            this.checkNumberValidity(lotto)
        })
    },

    async getBonus(){
        const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.')
        this.checkNumberValidity(input)

        return Number(input)
    },

    checkNumberValidity(number){
        if(isNaN(number)) throw new Error('[ERROR] 숫자를 입력하세요.')

        const temp = Number(number)
        if(!Number.isInteger(temp)) throw new Error('[ERROR] 정수를 입력하세요.')

        if(temp <= 0) throw new Error('[ERROR] 양수를 입력하세요.')
    },
}

module.exports = InputView