import { MissionUtils } from '@woowacourse/mission-utils'

const OutputView = {
    // 구매 개수 출력
    printCount(count){
        MissionUtils.Console.print(`${count}개를 구매했습니다.`)
    },

    // 구매한 로또 번호 출력
    printLottoList(lotto){
        MissionUtils.Console.print(`[${lotto.join(', ')}]`)
    },

    // 결과 출력
    printResult(result, returnRate){
        MissionUtils.Console.print(`당첨 통계`)
        MissionUtils.Console.print(`---`)
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${result.correct3}개`)
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${result.correct4}개`)
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result.correct5}개`)
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.correct5_bonus}개`)
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result.correct6}개`)
        MissionUtils.Console.print(`총 수익률은 ${returnRate.toLocaleString()}%입니다.`)
    }
}

module.exports = OutputView