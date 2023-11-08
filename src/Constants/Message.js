export const MESSAGE = Object.freeze({
    PURCHASE_INPUT : '구입금액을 입력해 주세요.',
    WINNIG_NUM_INPUT : '당첨 번호를 입력해 주세요.',
    BONUS_NUM_INPUT : '보너스 번호를 입력해주세요',
    COUNT : '개를 구매했습니다.',
    FIFTH_PLACE : '3개 일치 (5,000원) - ',
    FOURTH_PLACE : '4개 일치 (50,000원) - ',
    THIRD_PLACE : '5개 일치 (1,500,000원) - ',
    SECOND_PLACE : '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    FIRST_PLACE : '6개 일치 (2,000,000,000원) - ',
    PROFIT : '총 수익률은 '
})

export const ERROR = Object.freeze({
    PURCHASE_INPUT : "[ERROR] 구입 금액이 1000원 단위가 아닙니다.",
    NUM_LENGTH : "[ERROR] 로또 번호는 6개여야 합니다.",
    NUM_DUPLICATION : "[ERROR] 로또 번호는 중복되지 않아야합니다.",
    NUM_RANGE : "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자만 가능합니다.",
    WINNIG_NUM_DUPLICATION : "[ERROR] 당첨 번호는 중복되지 않아야합니다.",
    BONUS_NUM_DUPLICATION : "[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다.",
    NOT_SET_WINNIG : "[ERROR] 당첨번호가 정해지지 않았습니다.",
    NOT_NUM : "[ERROR] 숫자를 입력해주세요",
})
