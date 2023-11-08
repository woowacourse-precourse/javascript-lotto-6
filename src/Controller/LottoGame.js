import InputView from '../View/InputView'
import OutputView from '../View/OutputView'

class LottoGame{
    #count

    constructor(){
        this.count = 0
    }
    
    async startGame(){
        await this.getCount()
    }

    async getCount(){
        const money = await InputView.getMoney()
        this.#count = Math.floor(money / 1000) 
        OutputView.printCount(this.#count) 
    }
}

module.exports = LottoGame