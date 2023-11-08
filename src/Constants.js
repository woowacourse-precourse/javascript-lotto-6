export const LOTTO_START = 1;
export const LOTTO_END = 45;
export const LOTTO_LENGTH = 6;
export const LOTTO_PRICE = 1000;
export const WINNIG_PROFITS = {
    '3': 5000,
    '4': 50000,
    '5': 1500000,
    'bonus': 30000000,
    '6': 2000000000,
}
export const WINNING_NUMBERS = [3,4,5,'bonus',6];
export const INPUT_MESSAGE = {
    purchaseAmount: '구입 금액을 입력하세요.\n',
    winningNumbers: '당첨 번호를 입력하세요.\n',
    bonusNumber: '보너스 번호를 입력하세요.\n',
}
export const OUTPUT_MESSAGE = {
    winningStatusGuide: '\n당첨 통계\n---\n',
    numberOfLottos(numberOfLottos) {
      return `${numberOfLottos}개를 구매했습니다.`;
    },
    purchasedLottos(lottos) {
        return `[${lottos.join(', ')}]`
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
      }
}

export const ERROR_MESSAGE = {
    emptyInput: '[ERROR] 아무것도 입력하지 않았습니다.',
    notPositiveInteger: '[ERROR] 양의 정수를 입력하세요.',
    notDivisible: `[ERROR] 구입금액은 ${LOTTO_PRICE}으로 나누어 떨어져야 합니다.`,
    notLottoRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    notLottoLength: `[ERROR] 로또 번호는 ${LOTTO_LENGTH}자리여야 합니다.`,
    notUniqueElements: '[ERROR] 로또번호는 서로 달라야합니다.',
}
