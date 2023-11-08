import { MissionUtils } from '@woowacourse/mission-utils'

const InputView = {
    // 사용자로부터 금액 받기
    async getMoney(){
        const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.')
        this.checkMoneyValidity(input)

        return Number(input)
    },

    // 금액의 유효성 체크
    checkMoneyValidity(money){
        // checkNumberValidity 활용하기
        if(isNaN(money)) throw new Error('[ERROR] 숫자를 입력하세요.')

        const money_num = Number(money)
        if(!Number.isInteger(money_num)) throw new Error('[ERROR] 정수로 금액을 입력해주세요.')

        if(money_num <= 0) throw new Error('[ERROR] 금액을 양수로 입력해주세요.')

        if(money_num%1000 !== 0) throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.')
    },

    // 사용자로부터 당첨번호 받기
    async getWinningLotto(){
        const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
        const splitInput = input.split(',')
        this.checkLottoValidity(splitInput)

        const numberInput = splitInput.map(Number)
        const sortedInput = numberInput.sort((a, b) => a - b)
        return [...sortedInput]
    },

    // 당첨번호 유효성 확인
    checkLottoValidity(lotto){
        if(lotto.length !== 6) throw new Error('[ERROR] 숫자를 6개 입력하세요.')

        lotto.forEach(lotto => {
            this.checkNumberValidity(lotto)
        })
    },

    // 사용자로부터 보너스번호 받기
    async getBonus(){
        const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.')
        this.checkNumberValidity(input)

        return Number(input)
    },

    // 보너스번호 유효성 확인
    checkNumberValidity(number){
        if(isNaN(number)) throw new Error('[ERROR] 숫자를 입력하세요.')

        const temp = Number(number)
        if(!Number.isInteger(temp)) throw new Error('[ERROR] 정수를 입력하세요.')

        if(temp <= 0) throw new Error('[ERROR] 양수를 입력하세요.')
    },
}

module.exports = InputView