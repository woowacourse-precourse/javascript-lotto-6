class ExceptionList {
  noInputError = (input) => {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
  };
  isNaNError = (input) => {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 입력값이 숫자가 아닙니다.');
    }
  };
  isZeroError = (input) => {
    if (input === '0') {
      throw new Error('[ERROR] 0원으로는 복권을 구매할 수 없습니다.');
    }
  };
  notThousandError = (input) => {
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 복권은 천원단위로만 구매할 수 있습니다.');
    }
  };
}
export default ExceptionList;