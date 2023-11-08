import Validator from "../src/Validator.js";

describe("유효성 검사 validateInputMoney 메소드 테스트", () => {
  test("숫자가 아닌 값 입력시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.validateInputMoney("5000a")
    }).toThrow("[ERROR]");
  });

  test("1000원 단위가 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.validateInputMoney("58400")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사 checkUserNum 메소드 테스트", () => {
  test("번호가 쉼표으로 구분된 숫자들이 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkUserNum("1 2 3 4 5 6")
    }).toThrow("[ERROR]");
  });

  test("번호가 쉼표으로 구분된 숫자들이 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkUserNum("1,2,3,,4,5")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사 checkUserBonusNum 메소드 테스트", () => {
  test("보너스 번호가 숫자가 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkUserBonusNum([1,2,3,4,5,6], "8ab")
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위가 아닐 시 예외가 발생한다", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkUserBonusNum([1,2,3,4,5,6], "100")
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 번호에 포함 시 예외가 발생한다", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkUserBonusNum([1,2,3,4,5,6], "6")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사 isNotNumber 메소드 테스트", () => {
  test("숫자가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotNumber("5000a")).toEqual(true);
  });
});

describe("유효성 검사 isNotUnitOfPrice 메소드 테스트", () => {
  test("단위가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotUnitOfPrice(84200)).toEqual(true);
  });

  test("단위가 맞는지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotUnitOfPrice(15000)).toEqual(false);
  });
});

describe("유효성 검사 isNotRangeOfNumber 메소드 테스트", () => {
  test("범위 내 숫자가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotRangeOfNumber(0)).toEqual(true);
  });

  test("범위 내 숫자인지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotRangeOfNumber(45)).toEqual(false);
  });
});

describe("유효성 검사 isExistInUserNumber 메소드 테스트", () => {
  test("보너스 번호가 당첨 번호에 포함인지 확인", () => {
    const validator = new Validator();
    expect(validator.isExistInUserNumber([1,2,3,4,5,6], 6)).toEqual(true);
  });

  test("보너스 번호가 당첨 번호에 포함 안 되는지 확인", () => {
    const validator = new Validator();
    expect(validator.isExistInUserNumber([1,2,3,4,5,6], 7)).toEqual(false);
  });
});

describe("유효성 검사 isNotLottoNumberCount 메소드 테스트", () => {
  test("번호가 6개가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotLottoNumberCount([1,2,3,4,5])).toEqual(true);
  });

  test("번호가 6개인지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotLottoNumberCount([1,2,3,4,5,6])).toEqual(false);
  });
});

describe("유효성 검사 isDuplicate 메소드 테스트", () => {
  test("번호에 중복이 있는지 확인", () => {
    const validator = new Validator();
    expect(validator.isDuplicate([1,2,3,4,5,5])).toEqual(true);
  });

  test("번호에 중복이 없는지 확인", () => {
    const validator = new Validator();
    expect(validator.isDuplicate([1,2,3,4,5,6])).toEqual(false);
  });
});