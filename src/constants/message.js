import LOTTO_INFO from './lottoInfo.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumbers: '보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseLottoCount: '개를 구매했습니다.',
});

const ERROR_MESSAGE = Object.freeze({
  empty: '사용자 입력이 없습니다.',
  notInteger: '정수 형태가 아닙니다.',
  notIntegerList: '정수 형태 배열이 아닙니다.',
  purchaseUnit: `${LOTTO_INFO.purchase.unit} 단위의 금액만 가능합니다.`,
  invalidWinningNumberCount: '당첨 번호는 6개의 숫자로 이루어져야 합니다.',
  invalidWinningNumberRange: `당첨 번호는 ${LOTTO_INFO.lottoNumber.min}~${LOTTO_INFO.lottoNumber.max} 사이 숫자여야 합니다.`,
  duplicate: '당첨 번호는 중복되면 안 됩니다.',
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
