import DomainValidator from "../../../src/lib/Validator/DomainValidator";

const pickRandomInRange = (min, max) => {
  return parseInt(Math.random() * (max - min)) + min;
};

describe("DomainValidator.lottoMoney - 기능", () => {
  test.each([
    ...Array.from({ length: 100 }, () => pickRandomInRange(1, 800000) * 1000),
  ])(
    "구입 금액이 %s와 같을 때, 검증 결과는 정상 처리되어야 한다..",
    (money) => {
      expect(() => {
        DomainValidator.lottoMoney(money);
      }).not.toThrow("[ERROR]");
    },
  );
});

describe("DomainValidator.lottoMoney - 예외", () => {
  test.each([
    [0, "범위"],
    [-1000, "범위"],
    [Number.MAX_SAFE_INTEGER + 1000 - (Number.MAX_SAFE_INTEGER % 1000), "범위"],
    [1001, "나머지"],
  ])(
    "구입 금액이 %s와 같을 때, 검증 결과는 %s의 문제로 에러를 발생시켜야 한다.",
    (money) => {
      expect(() => {
        DomainValidator.lottoMoney(money);
      }).toThrow("[ERROR]");
    },
  );
});

describe("DomainValidator.winNumbers - 기능", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 45]],
    [[1, 6, 2, 3, 4, 7]],
  ])(
    "당첨 번호(%s)가 주어질 때, 검증 결과는 정상적으로 생성되어야 한다.",
    (numbers) => {
      expect(() => {
        DomainValidator.winNumbers(numbers);
      }).not.toThrow("[ERROR]");
    },
  );
});

describe("DomainValidator.winNumbers - 예외", () => {
  test.each([
    [[1, 2, 3, 4], "원소의 개수"],
    [[1, 2, 3, 4, 5, 6, 7], "원소의 개수"],
    [[-1, -2, -3, -4, -5, -6], "원소의 범위"],
    [[0, 1, 2, 3, 4, 5], "원소의 범위"],
    [[1, 2, 3, 4, 5, 46], "원소의 범위"],
    [[1, 1, 2, 3, 4, 5], "중복"],
  ])(
    "당첨 번호(%s)가 주어질 때, 검증 결과는 %s의 문제로 에러를 발생시켜야 한다.",
    (numbers) => {
      expect(() => {
        DomainValidator.winNumbers(numbers);
      }).toThrow("[ERROR]");
    },
  );
});

describe("DomainValidator.bonusNumber - 기능", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 7],
    [[1, 2, 3, 4, 5, 6], 45],
    [[1, 2, 4, 5, 6, 7], 3],
  ])(
    "당첨 번호(%s)가 주어졌을 때, 보너스 번호(%s)를 검증한 결과는 정상 처리되어야 한다.",
    (numbers, bonusNumber) => {
      expect(() => {
        DomainValidator.bonusNumber(numbers, bonusNumber);
      }).not.toThrow("[ERROR]");
    },
  );
});

describe("DomainValidator.bonusNumber - 예외", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 0, "원소의 범위"],
    [[1, 2, 3, 4, 5, 6], 46, "원소의 범위"],
    [[1, 2, 3, 4, 5, 6], 1, "중복"],
  ])(
    "당첨 번호(%s)가 주어졌을 때, 보너스 번호(%s)를 검증한 결과는 %s의 문제로 에러를 발생시켜야 한다.",
    async (numbers, bonusNumber) => {
      await expect(() => {
        DomainValidator.bonusNumber(numbers, bonusNumber);
      }).toThrow("[ERROR]");
    },
  );
});
