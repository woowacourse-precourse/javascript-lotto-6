const isValidRange = (arr) => {
    const invalidRangeArr = arr.filter((el) => el < 1 || el > 45);
    if (invalidRangeArr.length !== 0) {
        return false;
    }
    return true;
};

export default isValidRange;
