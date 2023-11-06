export const INPUT_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  WINNING_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  printLottosCount: lottoCount => `${lottoCount}개를 구매했습니다.`,
  printLottoNumbers: lotto => `[${lotto.getNumbers().join(', ')}]`,
  printLottoROI: lottoROI => `총 수익률은 ${lottoROI}%입니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  ONLY_NUMBERS: '[ERROR] 숫자만 입력 가능합니다.',
  ONLY_SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  NUMBER_RANGE: '[ERROR] 1 ~ 45 사이의 숫자만 가능합니다.',
  INVALID_AMOUNT: '[ERROR] 구입 금액이 올바르지 않습니다.',
  DUPLICATE_NUMBER: '[ERROR] 중복 번호가 포함되어 있습니다.',
  ONE_BONUS_NUMBER_ALLOWED: '[ERROR] 보너스 번호는 하나만 입력 가능합니다.',
  PURCHASE_AMOUNT_THOUSANDS_ONLY: '[ERROR] 천원 단위로 입력해주세요.',
  BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

export const NUMBER_REGEX = /^[0-9]+$/;
