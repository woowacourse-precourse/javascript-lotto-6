export const GameText = Object.freeze({
  GET_BUYING_MONEY: '구입금액을 입력해 주세요.',
  GET_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  GET_BOUNS_NUMBER: '보너스 번호를 입력해 주세요.',
  GAME_RESULT: '당첨 통계 \n ---',
});

export const ErrorMessage = Object.freeze({
  INVALID_BUYING_MONEY: '[ERROR] 구매금액을 천원 단위로 입력해 주세요.',
  INVALID_MONEY_TYPE: '[ERROR] 구매금액은 숫자만 입력이 가능합니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 당첨 번호와 중복되지 않은 숫자만 입력이 가능한니다.',
  INVALID_BONUS_NUMBER_TYPE: '[ERROR] 숫자만 입력이 가능합니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 1에서 45 사이에 숫자만 입력이 가능합니다.',
  INVALID_LOTTO_NUMBER: '[ERROR] 1에서 45 사이에 숫자만 입력이 가능합니다.',
  INVALID_LOTTO_TYPE: '[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.',
  DUPLICATE_LOTTO_NUMBER: '[ERROR] 중복되지 않는 6개의 숫자로 입력해 주세요.',
  INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
});

export const ResultMessage = Object.freeze({
  THREE_MATCH_MESSAGE: '3개 일치 (5,000원) - ',
  FOUR_MATCH_MESSAGE: '4개 일치 (50,000원) - ',
  FIVE_MATCH_MESSAGE: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS_MATCH_MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_MATCH_MESSAGE: '6개 일치 (2,000,000,000원) - ',
});
