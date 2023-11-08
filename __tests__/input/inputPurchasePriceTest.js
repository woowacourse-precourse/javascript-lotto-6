import { InputError } from "../../src/errors";
import inputPurchasePrice, {
  ERROR_MESSAGES,
} from "../../src/input/inputPurchasePrice";
import { mockQuestions } from "../../test-utils";

describe("구입금액 입력 예외 테스트", () => {
  test("빈 값", async () => {
    // given
    const inputs = [""];

    mockQuestions(inputs);

    // when & then
    await expect(inputPurchasePrice()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND)
    );
  });

  test("공백", async () => {
    // given
    const inputs = [" "];

    mockQuestions(inputs);

    // when & then
    await expect(inputPurchasePrice()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND)
    );
  });

  test("문자", async () => {
    // given
    const inputs = ["천"];

    mockQuestions(inputs);

    // when & then
    await expect(inputPurchasePrice()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND)
    );
  });

  test("영(0)인 값", async () => {
    // given
    const inputs = ["0"];

    mockQuestions(inputs);

    // when & then
    await expect(inputPurchasePrice()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND)
    );
  });

  test.each([[["530"]], [["1200"]]])(
    "%#. 1,000 단위의 숫자가 아닌 값",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputPurchasePrice()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND)
      );
    }
  );
});
