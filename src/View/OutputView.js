import { MissionUtils } from '@woowacourse/mission-utils'

const OutputView = {
    printCount(count){
        MissionUtils.Console.print(`\n${count}개를 구매했습니다.`)
    },

    printLottoList(lottoList){
        const length = lottoList.length
        lottoList.forEach(lotto => {
            MissionUtils.Console.print(lotto)
        })
    }
}

module.exports = OutputView