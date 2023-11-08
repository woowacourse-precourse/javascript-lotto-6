import InputView from '../View/InputView'
import OutputView from '../View/OutputView'
import Lotto from '../Model/Lotto'
import { MissionUtils } from '@woowacourse/mission-utils'

class LottoGame{
    #money // 사용자의 구입 금액
    #count // 로또 구매 개수
    #winningLotto // 당첨 번호가 담긴 Lotto 객체
    #bonus // 보너스 번호
    #lottoList // 사용자가 구매한 로또 번호가 담긴 Lotto 객체
    #result // 당첨 결과 저장

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
        // 구매 개수 확인하기
        this.#count = await this.getCount()
        OutputView.printCount(this.#count) 

        // 구매한 로또 리스트 출력
        this.#lottoList = await this.getLottoNumList()
        this.#lottoList.forEach((lotto) => {
            OutputView.printLottoList(lotto.getNumbers())
        })
        
        // 당첨 번호, 보너스 번호 입력받기
        this.#winningLotto = await this.getWinningLotto()
        this.#bonus = await InputView.getBonus(this.#winningLotto.getNumbers())

        // 결과 생성 및 출력
        this.makeResult()
        const returnRate = this.getReturnRate()
        OutputView.printResult(this.#result, returnRate)
    }

    // 구매금액 받아서 로또 구매개수 확인
    async getCount(){
        this.#money = await InputView.getMoney()
        return Math.floor(this.#money / 1000) 
    }

    // 구매개수에 맞게 로또 번호 리스트 받아오기
    async getLottoNumList(){
        const lottoNumList = []
        for(let i=0; i<this.#count; i++){
            const lottoNum = await this.getLottoNum()
            lottoNumList.push(new Lotto(lottoNum))
        }

        return lottoNumList
    }

    // 로또 1장의 번호 생성
    async getLottoNum(){
        const lottoNum = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
        const sortedLottoNum = lottoNum.sort((a, b) => a - b)
        return sortedLottoNum
    }

    // 
    async getWinningLotto(){
        const winningLotto = await InputView.getWinningLotto()
        return new Lotto(winningLotto)
    }

    // 구매개수에 맞게 당첨번호와 로또번호리스트 대조
    makeResult(){
        this.#lottoList.forEach(lotto => {
            this.compareLotto(lotto.getNumbers())
        })
    }

    // 로또 1장과 당첨번호 대조
    compareLotto(lotto){
        const winningLotto = this.#winningLotto.getNumbers()

        // 당첨번호와 일치한 번호 개수 계산
        let count = 0
        lotto.forEach(lotto => { 
            if(winningLotto.includes(lotto)) 
                count += 1 
        })

        // 로또 당첨 결과 저장
        switch(count){
            case 6:
                this.#result.correct6 += 1
                break
            case 5:
                // 일치한 번호 개수가 5개인 경우 보너스 번호가 맞았는지 여부 검사
                if(this.checkBonus(lotto)) this.#result.correct5_bonus += 1
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

    // 보너스번호가 구매한 로또번호에 있는지 확인
    checkBonus(lotto){
        if(lotto.includes(this.#bonus)) return true
        return false
    }

    // 수익률 계산
    getReturnRate(){
        const total = 
            this.#result.correct3 * 5000 +
            this.#result.correct4 * 50000 + 
            this.#result.correct5 * 1500000 +
            this.#result.correct5_bonus * 30000000 + 
            this.#result.correct6 * 2000000000
        
        const rate = ( total / this.#money ) * 100
        if(Number.isInteger(rate)) return rate
        return rate.toFixed(1)
    }
}

module.exports = LottoGame