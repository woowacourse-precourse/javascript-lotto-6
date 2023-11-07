import { LOTTO_CONDITION, PRICE_PER_TICKET } from './constants';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const PREFIX_ERROR = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  invalidLength: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.length}개여야 합니다.`,
  invalidNumberic: `${PREFIX_ERROR} 숫자가 잘못된 형식입니다.`,
  invalidRange: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.startRange}부터 ${LOTTO_CONDITION.endRange}사이의 숫자여야 합니다.`,
  invalidUnique: `${PREFIX_ERROR} 로또 번호는 중복되지 않아야 합니다.`,
  invalidAmount: `${PREFIX_ERROR} 구입 금액은 ${PRICE_PER_TICKET}원으로 나누어 떨어져야 합니다.`,
  invalidBonusNumber: `${PREFIX_ERROR} 보너스 번호는 하나의 숫자만 가능합니다.`,
  invalidUniqueBonusNumber: `${PREFIX_ERROR} 보너스 번호는 로또 번호와 중복되지 않아야 합니다.`,
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
