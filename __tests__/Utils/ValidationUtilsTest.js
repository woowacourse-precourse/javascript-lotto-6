import ValidationUtils from "../../src/utils/ValidationUtils";

describe("ValidationUtils 클래스 테스트", () => {
  describe("validateIsNumber메서드 테스트", () => {
    const ERROR_MESSAGE = "[ERROR] 정수가 아닙니다";
    test("주어진 입력이 숫자일 때, 예외가 발생하지 않아야 한다", () => {
      // given
      const numberInput = 123;

      // when
      const action = () =>
        ValidationUtils.validateIsNumber(numberInput, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test("주어진 입력이 숫자가 아닐 때, 예외가 발생한다.", () => {
      // given
      const stringInput = "abc";

      // when
      const action = () =>
        ValidationUtils.validateIsNumber(stringInput, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateNotNull 메서드 테스트", () => {
    const ERROR_MESSAGE = "[ERROR] 값을 입력해주세요";
    test("주어진 입력값이 있다면 에러를 발생시키지 않는다", () => {
      // given
      const notNullInput = "test";

      // when
      const action = () =>
        ValidationUtils.validateNotNull(notNullInput, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test("주어진 입력값이 빈 문자열이라면 이라면 에러를 발생시킨다.", () => {
      // given
      const nullInput = "";

      // when
      const action = () =>
        ValidationUtils.validateNotNull(nullInput, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateLength 메서드 테스트", () => {
    const LENGTH = 5;
    const ERROR_MESSAGE = `[ERROR] ${LENGTH}길이가 아닙니다`;

    test(`${LENGTH}길이의 문자열이 입력되면 에러가 발생하지 않는다`, () => {
      // given
      const input = "12345";

      // when
      const action = () =>
        ValidationUtils.validateLength(input, LENGTH, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test(`${LENGTH}길이의 문자열이 입력되지 않으면 에러를 발생한다`, () => {
      // given
      const input = "123";

      // when
      const action = () =>
        ValidationUtils.validateLength(input, LENGTH, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateNotDuplicate 메서드 테스트", () => {
    const ERROR_MESSAGE = `[ERROR] 중복되는 값이 입력되었습니다`;

    test("중복되지 않은 값이 입력되면 에러를 발생시키지 않는다", () => {
      // given
      const input = "12345";

      // when
      const action = () =>
        ValidationUtils.validateNotDuplicate(input, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test("중복되는 값을 입력받으면 에러를 발생시킨다", () => {
      // given
      const input = "11234";

      // when
      const action = () =>
        ValidationUtils.validateNotDuplicate(input, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateInRange 메서드 테스트", () => {
    const MIN = 1;
    const MAX = 45;
    const ERROR_MESSAGE = `${MIN}과 ${MAX} 사이의 값이 아닙니다`;

    test(`${MIN}과 ${MAX} 사이의 값이 입력되면 에러를 발생시키지 않는다`, () => {
      // given
      const input = 1;

      // when
      const action = () =>
        ValidationUtils.validateInRange(input, MIN, MAX, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test(`${MIN}과 ${MAX} 사이의 값을 넘어서는 값이 입력되면 에러를 발생시킨다`, () => {
      // given
      const input = 50;

      // when
      const action = () =>
        ValidationUtils.validateInRange(input, MIN, MAX, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateIsMultipleOf 메서드 테스트", () => {
    const MULTIPLE = 1000;
    const ERROR_MESSAGE = `${MULTIPLE}의 배수 값이 아닙니다`;

    test(`${MULTIPLE}배수의 값을 입력받으면 에러를 발생시키지 않는다`, () => {
      // given
      const input = "1000";

      // when
      const action = () =>
        ValidationUtils.validateInRange(input, MULTIPLE, ERROR_MESSAGE);

      // then
      expect(action).not.toThrow();
    });

    test(`${MULTIPLE}배수가 아닌 값을 입력받으면 에러를 발생시킨다`, () => {
      // given
      const input = "999";

      // when
      const action = () =>
        ValidationUtils.validateIsMultipleOf(input, MULTIPLE, ERROR_MESSAGE);

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });

  describe("validateIsNotIncluded 메서드 테스트", () => {
    const EXIST_VALUE = 5;
    const ERROR_MESSAGE = `${EXIST_VALUE}값이 이미 포함되어있습니다`;

    test(`${EXIST_VALUE}값을 포함하지 않는 문자열이 입력되면 에러를 발생시키지 않는다`, () => {
      // given
      const input = "1234";

      // when
      const action = () =>
        ValidationUtils.validateIsNotIncluded(
          input,
          EXIST_VALUE,
          ERROR_MESSAGE
        );

      // then
      expect(action).not.toThrow();
    });

    test(`${EXIST_VALUE}값을 포함하는 문자열이 입력되면 에러가 발생시킨다`, () => {
      // given
      const input = "1235";

      // when
      const action = () =>
        ValidationUtils.validateIsNotIncluded(
          input,
          EXIST_VALUE,
          ERROR_MESSAGE
        );

      // then
      expect(action).toThrow(ERROR_MESSAGE);
    });
  });
});
