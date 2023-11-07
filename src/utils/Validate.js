class Validate {
  static isItNumber(value) {
    if (/[^0-9]/g.test(value)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }
  }

  static isItUnitOf1000(value) {
    if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1,000단위로 입력해주세요');
    }
  }

  static isItInRangeOfNumber(value) {
    if (value <= 0 || value > 45) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자여야 합니다.');
    }
  }

  static cannotBeDuplicated(list) {
    const changeSet = [...new Set(list)];
    if (changeSet.length !== list.length) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  static cannotBeDuplicatedWithList(value, list) {
    if (list.includes(value)) {
      throw new Error('[ERROR] 보너스 값이 당첨 번호와 중복되선 안됩니다.');
    }
  }

  static isItLengthOfSix(value) {
    if (value.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

export default Validate;
