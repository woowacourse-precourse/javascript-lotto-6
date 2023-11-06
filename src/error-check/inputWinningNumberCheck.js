const isNotNumber = (numbers) => {
    for (const number of numbers) {
        if (isNaN(number.toString())) {
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        }
    }
}

const isOnlyNumber = (numbers) => {
    const numericRegex = /^[0-9]+$/;
    for (const number of numbers) {
        if (!numericRegex.test(number)) {
            throw new Error('[ERROR] 숫자만 입력해주세요.');
        }
    }
}

const isFromOneToFortyFive = (numbers) => {
    for (const number of numbers) {
        if (Number(number) > 45 || Number(number) < 1) {
            throw new Error('[ERROR] 숫자 1부터 45까지 입력해주세요.');
        }
    }
}

const isThereOverlapNumber = (numbers) => {
    if (numbers.length !== new Set(numbers).size) {
        throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
    }
}

const inputWinningNumberAllCheck = (numbers) => {
    isNotNumber(numbers);
    isOnlyNumber(numbers);
    isFromOneToFortyFive(numbers);
    isThereOverlapNumber(numbers);
}

export default inputWinningNumberAllCheck;