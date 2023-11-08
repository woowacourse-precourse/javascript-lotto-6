import { MissionUtils } from '@woowacourse/mission-utils'

const InputView = {
    // 사용자로부터 금액 받기
    async getMoney(){
        try{
            const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.')
            this.checkIsNumber(Number(input))
            this.checkIsInteger(Number(input))
            this.checkUnit(Number(input))
            this.checkMoneyRange(Number(input))

            return Number(input)
        }
        catch(error){
            MissionUtils.Console.print('[ERROR]')
        }
        
    },

    checkIsNumber(number){
        if (isNaN(number)) {
            throw new Error('[ERROR]')
        }
    },

    checkIsInteger(number){
        if(!Number.isInteger(number)){
            throw new Error('[ERROR]')
        }
    },

    checkUnit(number){
        if(number%1000 !== 0){
            throw new Error('[ERROR]')
        }
    },

    checkMoneyRange(number){
        if(number < 1000){
            throw new Error('[ERROR]')
        }
    },

    // 사용자로부터 당첨번호 받기
    async getWinningLotto(){
        try{
            const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
            const splitInput = input.split(',').map(Number)
            this.checkLottoValidity(splitInput)
    
            const sortedInput = splitInput.sort((a, b) => a - b)
            return sortedInput
        }
        catch(error){
            MissionUtils.Console.print('[ERROR]')
        }

    },

    // 당첨번호 유효성 확인
    checkLottoValidity(lotto){
        this.checkLength(lotto)
        this.checkDuplicate(lotto)

        lotto.forEach(lotto => {
            this.checkIsNumber(Number(lotto))
            this.checkIsInteger(Number(lotto))
        })
    },

    checkLength(array){
        if(array.length !== 6) throw new Error('[ERROR] 숫자를 6개 입력하세요.')
    },

    checkDuplicate(array){
        const set = new Set(array)
        if(set.size !== array.length) throw new Error('[ERROR]')
    }, 

    // 사용자로부터 보너스번호 받기
    async getBonus(){
        try{
            const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.')
            this.checkIsNumber(Number(input))

            return Number(input)
        }
        catch(error){
            MissionUtils.Console.print('[ERROR]')
        }

    }
}

module.exports = InputView