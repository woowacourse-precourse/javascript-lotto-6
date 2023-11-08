import { MissionUtils } from '@woowacourse/mission-utils';
import { ResultMessage } from '../Message';

export default class GameView {
  async printGameMessage(message) {
    await MissionUtils.Console.print(message);
  }

  async printLottos(lottos, lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      const num = lotto.getLottoNumber();
      MissionUtils.Console.print(`[${num.join(', ')}]`);
    });
  }

  async printWinningNumber(number) {
    MissionUtils.Console.print(number);
  }

  async printGameResult(result) {
    MissionUtils.Console.print(
      `${ResultMessage.THREE_MATCH_MESSAGE}${result['THREE_MATCH']}개`,
    );
    MissionUtils.Console.print(
      `${ResultMessage.FOUR_MATCH_MESSAGE}${result['FOUR_MATCH']}개`,
    );
    MissionUtils.Console.print(
      `${ResultMessage.FIVE_MATCH_MESSAGE}${result['FIVE_MATCH']}개`,
    );
    MissionUtils.Console.print(
      `${ResultMessage.FIVE_BONUS_MATCH_MESSAGE}${result['FIVE_BONUS_MATCH']}개`,
    );
    MissionUtils.Console.print(
      `${ResultMessage.SIX_MATCH_MESSAGE}${result['SIX_MATCH']}개`,
    );
    MissionUtils.Console.print(`총 수익률은 ${result['PROFIT_RATE']}%입니다.`);
  }
}
