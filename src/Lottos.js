import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from "./Validation/Purchase.js";
import Lotto from './Lotto.js'
import { WINNING_MESSAGE,PRIZEAMONUT } from './Const.js'

export default class Lottos {
    constructor(money) {
        this.validate(money);
        this.value = money
        this.count = money / 1000
        this.list = []
        this.createLottoNumberArray();
    }

    validate(money) {
        CheckMoney.checkPurchaseMoney(money);
    }
    

    createLottoNumberArray() {
        for (let i = 0 ; i < this.count ; i++) {
            const newLottoNumbers = this.createLottoNumber()
            this.list.push(newLottoNumbers)
        }
    }

    createLottoNumber() {
        let lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(lottoNumbers)
    }

    printCount() {
        MissionUtils.Console.print(`\n${this.count}개를 구매했습니다.`)
    }

    printLottoList() {
        this.list.forEach((lotto) => {
            lotto.printLottoNumber();
        });
    }

    getRanks(winningNumbers, bonusNumber) {
        let lottoRanks = [];

        this.list.forEach((lotto) => {
          lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
        });
    
        return lottoRanks.filter((rank) => rank <= 5);
      }

    printRank(lottoRanks) {
        const RANK_NUMBER = [5,4,3,2,1]
        let newLottoRanks = [];
        let calculateArray = [];

        RANK_NUMBER.forEach((e,index) => {
            const count = lottoRanks.filter(i => i === e).length
            const mesage = WINNING_MESSAGE[index]
            calculateArray.push(`${count}`)
            newLottoRanks.push(`${mesage} - ${count}개`)
        })

        newLottoRanks.forEach((rank) => {
            MissionUtils.Console.print(rank)
        });
        this.printRateOfReturn(calculateArray);
    }

    printRateOfReturn(count) {
        let rank = count.map(Number);
        
        const calculateResults = rank.map((rank, index) => {
            return rank * PRIZEAMONUT[index]
        });

        const sumCalculateResults = calculateResults.reduce((a,b) => (a+b));
        const purchaseMoney = this.count * 1000;
        const rateResult = (sumCalculateResults / purchaseMoney * 100).toFixed(1);
        MissionUtils.Console.print(`총 수익률은 ${rateResult}%입니다.`);
    }
}