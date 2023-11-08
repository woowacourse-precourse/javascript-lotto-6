export const ERROR_MESSEGE = Object.freeze({
  notNumber: '[ERROR] 입력값은 숫자만 가능합니다.',
  invalidUnit: '[ERROR] 로또 구매는 1,000원 단위로만 가능합니다.',
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicate: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  notInRange: '[ERROR] 로또 번호의 숫자 범위는 1~45 입니다.',
  invalideInput: ' 다시 입력해주세요.',
});

export const INPUT_MESSEGE = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  win: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
});

export const PROMPT_MESSEGE = Object.freeze({
  lottoResult: '\n당첨 통계\n---',
});

export const RESULT_MESSEGE = Object.freeze([
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
]);
