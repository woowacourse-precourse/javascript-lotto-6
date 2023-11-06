const validation = {
    hasSameNumber: (numbers) => {
        const uniqueSet = new Set(numbers);
        if (uniqueSet.size !== numbers.length)
            throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
    },

    isValidRange: (inputArr) => {
        inputArr.forEach((number) => {
            if (number < 1 || number > 45)
                throw new Error("[ERROR]1~45 사이로 입력해주세요.");
        });
    },

    isValidInputCount: (inputArr, count) => {
        if (inputArr.length !== count)
            throw new Error(`[ERROR] 로또 번호는 ${count}개를 입력하셔야 합니다.`);
    },

    isValidNumber: (input) => {
        if (isNaN(input)) throw new Error("[ERROR] 숫자를 입력하셔야 합니다.");
    },

};
export default validation;
