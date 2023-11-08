export function validatePurchasePrice(price,basedAmount) {
    if (isNaN(price)) {
        throw new Error("[ERROR] 구매 금액이 올바른 숫자 형식이 아닙니다.")
    }
    if (price % basedAmount != 0) {
        throw new Error("[ERROR] 구매 금액은 1,000원 단위 입니다.")
    }
};

export function validateLottoNumbers(numbers,bonusNumber) {
    if (numbers.length != 6) {
        throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.")
    }

    numbers.forEach(number => {
        if (isNaN(number)) {
            throw new Error("[ERROR] 당첨 번호가 올바른 숫자 형식이 아닙니다.")
        }
        if (number < 1 && number > 45) {
            throw new Error("[ERROR] 당첨 번호는 1~45 사이의 번호여야 합니다.")
        }
        
    })

    if (isNaN(bonusNumber)) {
        throw new Error("[ERROR] 보너스 당첨 번호가 올바른 숫자 형식이 아닙니다.")
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error("[ERROR] 보너스 당첨 번호는 1~45 사이의 번호여야 합니다.")
    }
}

export function create2DArray(rows, columns) {
    let arr = Array.from(Array(rows), () => new Array(columns));
    return arr;
};