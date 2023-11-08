import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBERS, INPUT_MESSAGE, WINNER_MESSAGE, GRADING_COUNT, LOTTO_PRIZE_MONEY } from './constants.js';

function inputLottoNum() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PURCHASE_MESSAGE);
}

function parchasedLotto(n) {
  return MissionUtils.Console.print(INPUT_MESSAGE.PURCHASED_MESSAGE(n));
}

function readLineLottoCount() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBER);
}

function readLineBonusCount() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
}

function consoleWinner() {
  return MissionUtils.Console.print(WINNER_MESSAGE.WINLOG);
}
function consoleError(error) {
  MissionUtils.Console.print(`${error.message}`);
  return error;
}

function winnerMessage() {
  return MissionUtils.Console.print(WINNER_MESSAGE.WINLOG);
}
function winCount(statistics) {
  const templates = Object.entries(statistics).map(([prize, count]) => {
    if (prize === 'SECOND_PRIZE') {
      return (
        `${GRADING_COUNT[prize]}개 일치, 보너스 볼 일치 ` +
        `(${LOTTO_PRIZE_MONEY[prize].toLocaleString()}원) - ${count}개`
      );
    }

    return `${GRADING_COUNT[prize]}개 일치 ` + `(${LOTTO_PRIZE_MONEY[prize].toLocaleString()}원) - ${count}개`;
  });

  MissionUtils.Console.print(templates.join('\n'));
}

function resultProfit(earningRatio) {
  const formattedYieldRatio = earningRatio.toLocaleString('ko-KR', {
    minimumFractionDigits: 1, // 최소 소수점 이하 자릿수
    maximumFractionDigits: 1, // 최대 소수점 이하 자릿수
  });
  MissionUtils.Console.print(`총 수익률은 ${formattedYieldRatio}%입니다.`);
}

function randomNum() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_NUMBERS.MIN_RANGE,
    LOTTO_NUMBERS.MAX_RANGE,
    LOTTO_NUMBERS.NUMBER_SIZE,
  );
}

export {
  inputLottoNum,
  parchasedLotto,
  readLineLottoCount,
  readLineBonusCount,
  consoleWinner,
  consoleError,
  winnerMessage,
  winCount,
  resultProfit,
  randomNum,
};
