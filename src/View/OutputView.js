import { MissionUtils } from '@woowacourse/mission-utils'

const OutputView = {
    printCount(count){
        MissionUtils.Console.print(`${count}개를 구매했습니다.`)
    },

    printLottoList(lottoList){
        lottoList.forEach(lotto => {
            MissionUtils.Console.print(`[${lotto.join(', ')}]`)
        })
    }
}

module.exports = OutputView