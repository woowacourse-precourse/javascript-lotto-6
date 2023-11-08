import { MissionUtils } from '@woowacourse/mission-utils'

const InputView = {
    // 사용자로부터 금액 받기
    async getMoney(){
        while(true){
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
        }
    },

    checkIsNumber(number){
        if (isNaN(number)) {
            throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.')
        }
    },

    checkIsInteger(number){
        if(!Number.isInteger(number)){
            throw new Error('[ERROR] 구입 금액은 정수여야 합니다.')
        }
    },

    checkUnit(number){
        if(number%1000 !== 0){
            throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.')
        }
    },

    checkMoneyRange(number){
        if(number < 1000){
            throw new Error('[ERROR] 구입 금액은 1000원 이상이어야 합니다.')
        }
    },

    // 사용자로부터 당첨번호 받기
    async getWinningLotto(){
        while(true){
            try{
                const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
                const splitInput = input.split(',').map(Number)        
                const sortedInput = splitInput.sort((a, b) => a - b)
                return sortedInput
            }
            catch(error){
                MissionUtils.Console.print('[ERROR] getWinningLotto Error')
            }
        }
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