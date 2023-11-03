export const Data = {
    userPurchasePrice: 0,
    userLotto: [],
    winningLotto: null,
    bonusNum: 0,
    lottoResult: {},
};

export const MESSAGE = new Object.freeze({
    LOTTO_PRICE: 1000,
    PURCHASE_INPUT_ASK: "구입금액을 입력해 주세요.",
    PURCHASE_INPUT_RESPONSE: "개를 구매했습니다.",
    LOTTO_NUM_INPUT_ASK: "당첨 번호를 입력해 주세요.",
    BONUS_NUM_INPUT_ASK: "보너스 번호를 입력해 주세요.",
    STATISTICS_3: "3개 일치 (5,000원) - ",
    STATISTICS_4: "4개 일치 (50,000원) - ",
    STATISTICS_5: "5개 일치 (1,500,000원) - ",
    STATISTICS_5_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    STATISTICS_6: "6개 일치 (2,000,000,000원) - ",
});
