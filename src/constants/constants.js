const TOTAL_LOTTO_NUMBERS = 6
const UNIT = 1000
const MAXIMUM = 1000000

const LOTTO_NUMBER_RANGE = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
})

const GUIDE_MESSAGE = Object.freeze({
  insertMoney: '구입 금액을 입력해 주세요.\n',
  insertWinnerNumbers: '당첨 번호를 입력해 주세요.\n',
  insertBonusNumber: '보너스 번호를 입력해 주세요.\n',
  totalTickets: '개를 구매했습니다.\n',
  winningStats: '당첨 통계',
  divider: '---',
  winningStatistics: '총 수익률은 *%입니다.'
})

const COMMON_ERROR_MESSAGE = Object.freeze({
  emptyString: '[ERROR] 입력된 값이 없습니다.',
  onlyNumber: '[ERROR] 잘못된 형식입니다. 숫자 외의 문자는 입력할 수 없습니다.',
  wrongRange: '[ERROR] 잘못된 범위입니다. 로또 번호는 1부터 45까지 입력할 수 있습니다.',
  wrongCount: '[ERROR] 잘못된 입력입니다. 로또 한 장의 숫자 개수는 6개 입니다.',
  detectedDuplicate: '[ERROR] 잘못된 입력입니다. 중복된 숫자는 입력이 불가합니다',
})

const PURCHASE_AMOUNT_ERROR_MESSAGE = Object.freeze({
  underThousand: '[ERROR] 잘못된 입력입니다. 1000원 미만의 단위는 입력이 불가합니다.',
  maximumNumber: '[ERROR] 잘못된 범위입니다. 금액을 1,000,000원으로 제한하고 있습니다.',
  wrongUnit: '[ERROR] 잘못된 형식입니다. 1,000원 단위로 입력하시기 바랍니다.',
})

const WINNING_NUMBERS_ERROR_MESSAGE = Object.freeze({
  detectedSpace: '[ERROR] 잘못된 형식입니다. 공백은 입력이 불가합니다.',
  detectedLastComma: '[ERROR] 잘못된 입력입니다. 입력된 값 없이 콤마(,)를 입력할 수 없습니다.',
  wrongWinningNumber: '[ERROR] 잘못된 형식입니다. 숫자와 쉼표 외에는 입력할 수 없습니다.',
})

const BONUS_NUMBER_ERROR_MESSAGE = Object.freeze({
  wrongBonusNumber: '[ERROR] 잘못된 개수입니다. 보너스 숫자는 한개만 입력할 수 있습니다.',
  underZero: '[ERROR] 잘못된 입력입니다. 0 이하의 값은 입력이 불가합니다.',
  duplicatedNumberWithWinningNumbers: '[ERROR] 잘못된 숫자입니다. 당첨 번호에 포함된 숫자는 입력이 불가합니다.',
})

const WINNING_AMOUNTS = Object.freeze({
  FIFTH_PRIZE: 5000  ,
  FOURTH_PRIZE:  50000,
  THIRD_PRIZE: 1500000 ,
  SECOND_PRIZE: 30000000 ,
  FIRST_PRIZE: 2000000000
})

const WINNING_RESULT_DETAILS = Object.freeze({
  FIRST: '3개 일치 (5,000원) - ',
  SECOND: '4개 일치 (50,000원) - ',
  THIRD: '5개 일치 (1,500,000원) - ',
  FOURTH: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIFTY: '6개 일치 (2,000,000,000원) - ',
})

export { TOTAL_LOTTO_NUMBERS, UNIT, MAXIMUM, LOTTO_NUMBER_RANGE, GUIDE_MESSAGE, COMMON_ERROR_MESSAGE, PURCHASE_AMOUNT_ERROR_MESSAGE, WINNING_NUMBERS_ERROR_MESSAGE, BONUS_NUMBER_ERROR_MESSAGE, WINNING_AMOUNTS, WINNING_RESULT_DETAILS}