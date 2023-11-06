export const CONSTANT = Object.freeze({
    LOTTO_PRICE: 1000,
    MONEY_INPUT_ASK: "구입금액을 입력해 주세요.",
    MONEY_INPUT_RESPONSE: "개를 구매했습니다.",
    LOTTO_NUM_INPUT_ASK: "당첨 번호를 입력해 주세요.",
    BONUS_NUM_INPUT_ASK: "보너스 번호를 입력해 주세요.",
    STATISTICS_RESPONSE: "당첨통계\n---\n",
    WINNER_PRICE: new Map([
        ["3", 5000],
        ["4", 50000],
        ["5", 1500000],
        ["b5", 30000000],
        ["6", 2000000000],
    ]),
    ERROR_PURCHASE_INPUT:
        "[ERROR] 구입 금액이 1000원으로 나누어 떨어지지 않습니다.",
    ERROR_LOTTO_NUM_INPUT: "[ERROR] 1~45의 숫자가 아닙니다.",
    ERROR_LOTTO_NUM_INPUT: "[ERROR] 1~45의 숫자 6개를 입력해야합니다.",
});
