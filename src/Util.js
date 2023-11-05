export const validatePurchasePrice = (price) => {
    const basedAmount = 1000;
    if (price % basedAmount != 0) {
        throw new Error("[ERROR] 구매 금액은 1,000원 단위 입니다.")
    }
};