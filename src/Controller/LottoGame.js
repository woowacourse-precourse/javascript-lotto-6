import InputView from '../View/InputView'
import OutputView from '../View/OutputView'
import { MissionUtils } from '@woowacourse/mission-utils'

class LottoGame{
    #money
    #count
    #winningLotto // 당첨 번호
    #bonus // 보너스 번호
    #lottoList // 사용자가 구매한 로또 번호
    #result

    constructor(){
        this.#money = 0
        this.#count = 0
        this.#result = {
            correct3: 0,
            correct4: 0,
            correct5: 0,
            correct5_bonus: 0,
            correct6: 0
        }
    }
    
    async startGame(){
        await this.getCount()

        this.#lottoList = await this.getLottoNumList()
        OutputView.printLottoList(this.#lottoList)

        this.#winningLotto = await InputView.getWinningLotto()
        this.#bonus = await InputView.getBonus()

        this.makeResult()
        const returnRate = this.getReturnRate()
        OutputView.printResult(this.#result, returnRate)
    }

    async getCount(){
        this.#money = await InputView.getMoney()
        this.#count = Math.floor(this.#money / 1000) 
        OutputView.printCount(this.#count) 
    }

    async getLottoNumList(){
        const lottoNumList = []
        for(let i=0; i<this.#count; i++){
            const lottoNum = await this.getLottoNum()
            lottoNumList.push(lottoNum)
        }

        return lottoNumList
    }

    async getLottoNum(){
        const lottoNum = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
        const sortedLottoNum = lottoNum.sort((a, b) => a - b)
        return sortedLottoNum
    }

    makeResult(){
        this.#lottoList.forEach(lotto => {
            this.compareLotto(lotto)
        })
    }

    compareLotto(lotto){
        let count = 0
        lotto.forEach(lotto => { if(this.#winningLotto.includes(lotto)) count += 1 })

        switch(count){
            case 6:
                this.#result.correct6 += 1
                break
            case 5:
                if(this.checkBonus()) this.#result.correct5_bonus += 1
                else this.#result.correct5 += 1
                break
            case 4: 
                this.#result.correct4 += 1
                break
            case 3: 
                this.#result.correct3 += 1
                break
            default:
                break
        }        
    }

    checkBonus(){
        if(this.#winningLotto.includes(this.#bonus)) return true
        return false
    }

    getReturnRate(){
        const total = 
            this.#result.correct3 * 5000 +
            this.#result.correct4 * 50000 + 
            this.#result.correct5 * 1500000 +
            this.#result.correct5_bonus * 30000000 + 
            this.#result.correct6 * 2000000000
        
        const rate = ( total / this.#money ) * 100
        return rate.toFixed(1)
    }
}

module.exports = LottoGame