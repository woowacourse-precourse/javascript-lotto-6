import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE, PRIZE_MONEY } from './constant.js';

const MESSAGE = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PRINT_LOTTO_NUMBERS: (count) => `${count}개를 구매했습니다.`,
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const Message = Object.freeze({
  inputPurchasingAmount() {
    return MissionUtils.Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
  },

  printNumberOfLottos(count) {
    MissionUtils.Console.print(MESSAGE.PRINT_LOTTO_NUMBERS(count));
  },

  printLottoNumber(lottoNumber) {
    MissionUtils.Console.print('[' + lottoNumber.toString().replaceAll(',', ', ') + ']');
  },

  inputWinningLotteryNumbers() {
    return MissionUtils.Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
  },

  inputBonusNumber() {
    return MissionUtils.Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
  },

  printWinningStats(prize) {
    MissionUtils.Console.print('당첨 통계\n---\n');
    MissionUtils.Console.print(
      `3개 일치 (${PRIZE_MONEY[PRIZE.FIFTH].toLocaleString('ko-KR')}원) - ${
        prize[PRIZE.FIFTH] ?? 0
      }개\n` +
        `4개 일치 (${PRIZE_MONEY[PRIZE.FOURTH].toLocaleString('ko-KR')}원) - ${
          prize[PRIZE.FOURTH] ?? 0
        }개\n` +
        `5개 일치 (${PRIZE_MONEY[PRIZE.THIRD].toLocaleString('ko-KR')}원) - ${
          prize[PRIZE.THIRD] ?? 0
        }개\n` +
        `5개 일치, 보너스 볼 일치 (${PRIZE_MONEY[PRIZE.SECOND].toLocaleString('ko-KR')}원) - ${
          prize[PRIZE.SECOND] ?? 0
        }개\n` +
        `6개 일치 (${PRIZE_MONEY[PRIZE.FIRST].toLocaleString('ko-KR')}원) - ${
          prize[PRIZE.FIRST] ?? 0
        }개\n`,
    );
  },

  printProfit(profit) {
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  },
});
