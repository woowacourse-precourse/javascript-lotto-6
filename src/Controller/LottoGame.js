import InputView from '../View/InputView'
import OutputView from '../View/OutputView'
import { MissionUtils } from '@woowacourse/mission-utils'

class LottoGame{
    #count


    constructor(){
        this.#count = 0
    }
    
    async startGame(){
        await this.getCount()

        const lottoList = await this.getLottoNumList()
        OutputView.printLottoList(lottoList)

        const winningLotto = InputView.getWinningLotto()
        // const bonus = InputView.getBonus()
    }

    async getCount(){
        const money = await InputView.getMoney()
        this.#count = Math.floor(money / 1000) 
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
}

module.exports = LottoGame