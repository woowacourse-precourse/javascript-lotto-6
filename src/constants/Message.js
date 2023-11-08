import { LOTTO_PRICE, LOTTO_LENGTH, WINNIG_PROFITS } from './Constants';

export const WINNING_NUMBERS = [3, 4, 5, 'bonus', 6];
export const INPUT_MESSAGE = {
  purchaseAmount: '구입 금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};
export const OUTPUT_MESSAGE = {
  winningStatusGuide: '\n당첨 통계\n---\n',
  numberOfLottos(numberOfLottos) {
    return `${numberOfLottos}개를 구매했습니다.`;
  },
  purchasedLottos(lottos) {
    return `[${lottos.join(', ')}]`;
  },
  rateOfReturn(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  },
  winningStatus(matchingCount, winnigStatus) {
    const WINNIG_PROFIT = WINNIG_PROFITS[matchingCount].toLocaleString();
    if (matchingCount === 'bonus') {
      return `5개 일치, 보너스 볼 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
    }
    return `${matchingCount}개 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
  },
};

export const ERROR_MESSAGE = {
  invalidEmptyInput: '[ERROR] 아무것도 입력하지 않았습니다.',
  invalidPositiveInteger: '[ERROR] - 값(음수)는 입력이 불가합니다.',
  invalidDivisible: `[ERROR] 구입금액은 ${LOTTO_PRICE}으로 나누어 떨어져야 합니다.`,
  invalidLottoRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidLottoLength: `[ERROR] 로또 번호는 ${LOTTO_LENGTH}자리여야 합니다.`,
  invalidNumberDuplicate: '[ERROR] 로또번호는 중복될 수 없습니다.',
};
