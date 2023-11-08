const isValidRangeArr = (arr) => {
    const invalidRangeArr = arr.filter((el) => el < 1 || el > 45);
    if (invalidRangeArr.length !== 0) {
        return false;
    }
    return true;
};

const isValidRange = (num) => {
    const validRange = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^[4]{1}[0-5]{1}$/;
    return validRange.test(num);
};

export { isValidRangeArr, isValidRange };
