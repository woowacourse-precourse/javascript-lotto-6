const MESSAGE = {
    PURCHASE_NUMBER_INPUT : "구입금액을 입력해 주세요.",
    NUMBER_OF_PURCHASE : "개를 구매했습니다.",
    WIN_NUMBER_INPUT : "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER_INPUT : "보너스 번호를 입력해 주세요.",
    WIN_STATISTICS : "당첨 통계",
    DIVIDE_LINE : "---",
    UNIT : "개", // 단위를 나타내는 "N개"

    RANK : {
        FIFTH : "3개 일치 (5,000원) - ",
        FOURTH : "4개 일치 (50,000원) - ",
        THIRD : "5개 일치 (1,500,000원) - ",
        SECOND : "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
        FIRST : "6개 일치 (2,000,000,000원) - ",
    },
    TOTAL_RETURN : {
        FRONT : "총 수익률은",
        BACK : "%입니다.",
    }
}
const ERROR_MESSAGE = {
    NUMBER_UNDIVEDE : "[ERROR] 금액은 1,000원 단위로 나누어떨어져야 합니다.",
    NUMBER_DUPLICATE : "[ERROR] 당첨 번호는 중복되지 않은 숫자여야 합니다.",
    NUMBER_COUNT : "[ERROR] 로또 번호는 6개여야 합니다.",
    NUMBER_RANGE : "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    NUMBER_TYPE : "[ERROR] 숫자가 잘못된 형식입니다.",
    BONUS_NUMBER_DUPLICATE : "[ERROR] 로또 번호와 보너스 번호는 중복되지 않은 숫자여야 합니다.",
}
export {MESSAGE, ERROR_MESSAGE}
