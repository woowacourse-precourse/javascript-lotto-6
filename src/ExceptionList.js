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
  LengthError = (input) => {
    if (input.length !== 6) {
      throw new Error('[ERROR] 6개의 숫자를 입력해주세요.');
    }
  };
  numberRangeError = (input) => {
    if (input < 1 || input > 45) {
      throw new Error('[ERROR] 1~45사이의 숫자를 입력해주세요.');
    }
  };
  sameNumberError = (input) => {
    if (new Set(input).size !== input.length) {
      throw new Error('[ERROR] 중복된 숫자가 입력되었습니다');
    }
  };
  sameBonusError = (win, bonus) => {
    if (win.includes(bonus)) {
      throw new Error('[ERROR] 당첨번호와 동일한 숫자가 입력되었습니다');
    }
  };
}
export default ExceptionList;
