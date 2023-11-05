export function validatePurchasePrice(price,basedAmount) {
    if (price % basedAmount != 0) {
        throw new Error("[ERROR] 구매 금액은 1,000원 단위 입니다.")
    }
};

export function create2DArray(rows, columns) {
    let arr = Array.from(Array(rows), () => new Array(columns));
    return arr;
};