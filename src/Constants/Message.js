export const SYSTEM_MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASE_LOTTO_MESSAGE: '개를 구매했습니다.',
  INPUT_GOAL_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const resultMessage = (correctArray, rateOfReturn) =>
  `당첨 통계
  ---
  3개 일치 (5,000원) - ${correctArray[0]}개
  4개 일치 (50,000원) - ${correctArray[1]}개
  5개 일치 (1,500,000원) - ${correctArray[2]}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${correctArray[3]}개
  6개 일치 (2,000,000,000원) - ${correctArray[4]}개
  총 수익률은 ${rateOfReturn}%입니다.`;

export const ERROR_MESSAGE = Object.freeze({
  IS_EMPTY: '[ERROR] 구입금액을 0원 이상 입력하세요.',
  INPUT_NUMBER: '[ERROR] 숫자를 입력하세요.',
  NOT_DISVISIBLE: '[ERROR] 1000원 단위로 입력하세요.',
  WRONG_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  IS_DUPLICATED: '[ERROR] 로또 번호를 중복 없이 입력하세요.',
  NOT_IN_RANGE: '[ERROR] 1 ~ 45 이내의 숫자만을 입력하세요.',
});
