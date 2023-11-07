import LOTTO_INFO from './lottoInfo.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  empty: '사용자 입력이 없습니다.',
  notInteger: '정수 형태가 아닙니다.',
  purchaseUnit: `${LOTTO_INFO.purchase.unit} 단위의 금액만 가능합니다.`,
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
