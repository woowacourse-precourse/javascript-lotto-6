export const GUIDE_MESSAGE =Object.freeze({
  insertMoney: '구입 금액을 입력해 주세요.\n',
  insertWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  insertBonusNumber: '보너스 번호를 입력해 주세요.\n',
  totalTickets: '개를 구매했습니다.\n',
  winningStatistics: '당첨 통계',
  divider: '---',
  totalReturn: '총 수익률은 *%입니다.'
})

export const PURCHASE_AMOUNT_ERROR_MESSAGE = Object.freeze({
  wrongFormat: '[ERROR] 잘못된 입력입니다. 1,000원 단위로 입력해야합니다. 게임을 종료합니다.',
  underThousand: '[ERROR] 잘못된 입력입니다. 1,000원 미만의 금액은 입력이 불가합니다. 게임을 종료합니다.',
  notNumber: '[ERROR] 잘못된 입력입니다. 구입 금액은 숫자여야 합니다. 게임을 종료합니다.',
})

export const WINNING_NUMBERS_ERROR_MESSAGE = Object.freeze({
  notNaturalNumber: '[ERROR]: 잘못된 입력입니다. 0 이하의 값은 입력이 불가합니다. 게임을 종료합니다.',
  wrongRange: '[ERROR] 잘못된 범위입니다. 로또 번호는 1부터 45까지 입력할 수 있습니다. 게임을 종료합니다.',
  detectedLastComma: '[ERROR]: 잘못된 입력입니다. 입력된 값 없이 콤마(,)를 입력할 수 없습니다. 게임을 종료합니다.',
  wrongWinningNumber: '[ERROR]: 잘못된 형식입니다. 숫자와 쉼표 외에는 입력할 수 없습니다. 게임을 종료합니다.',
  wrongCount: '[ERROR] 잘못된 입력입니다. 로또 한 장의 숫자 개수는 6개 입니다. 게임을 종료합니다.',
  emptyInput: '[ERROR] 입력된 값이 없습니다. 게임을 종료합니다.',
})