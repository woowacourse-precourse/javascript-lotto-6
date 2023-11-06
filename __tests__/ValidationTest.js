import Validation from "../src/Validation/Validation";

describe("Validation 클래스 테스트", () => {
  test.each([
    ["string"],
    [{ key: "value" }],
    [() => {}],
    [undefined],
    [["this", "is", "array"]],
    [-1],
    [1001],
  ])("isValidPurchaseAmount 함수", async (inputs) => {
    await expect(() => Validation.isValidPurchaseAmount(inputs)).toThrow();
  });

  test.each([
    [[1, 2, 3, 4, 5, 6, 7]],
    [1, 2, 3, 4, 5, 46],
    [1, 2, 3, 4, 5, 5],
    [1, 2, 3, 4, 5, -6],
    [1, 2, 3, 4, 5, 6.5],
    [1, 2, 3, 4, 5, 0],
  ])("isValidLottoNumber 함수", async (inputs) => {
    await expect(() => Validation.isValidLottoNumber(inputs)).toThrow();
  });

  test.each([[1], [-1], "string", [undefined]])(
    "isValidBonusNumber 함수",
    async (inputs) => {
      await expect(() =>
        Validation.isValidBonusNumber([1, 2, 3, 4, 5, 6], inputs)
      ).toThrow();
    }
  );
});
