import { MissionUtils } from '@woowacourse/mission-utils'

const InputView = {
    async getMoney(){
        const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.\n')
        this.checkMoneyValidity(input)

        return Number(input)
    },

    checkMoneyValidity(money){
        if(isNaN(money)) throw new Error('[ERROR] 숫자를 입력하세요.')

        const money_num = Number(money)
        if(!Number.isInteger(money_num)) throw new Error('[ERROR] 정수로 금액을 입력해주세요.')

        if(money_num <= 0) throw new Error('[ERROR] 금액을 양수로 입력해주세요.')

        if(money_num%1000 !== 0) throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.')
    }
}

module.exports = InputView