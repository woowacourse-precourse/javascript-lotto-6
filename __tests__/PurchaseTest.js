import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "../src/services/Purchase.js";
import inputs from "../src/domains/inputs.js";
import MESSAGE from "../src/constants/message.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 구입 테스트", () => {
  test("inputPrice 실행 여부 검증", async () => {
    // given
    const input = [1000];
    mockQuestions(input);
    const inputLogSpy = jest.spyOn(inputs, "inputPrice");
    inputLogSpy.mockClear();

    // when
    const purchase = new Purchase();
    purchase.inputPrice();

    // then
    expect(inputLogSpy).toHaveBeenCalledTimes(1);
  });

  test.each([[["천 원"]], [["1100"]]])(
    "구입 금액 입력 시 입력값 검증",
    async (input) => {
      // given
      mockQuestions(input);

      // when
      const purchase = new Purchase();

      // then
      await expect(() => purchase.inputPrice()).rejects.toThrow("[ERROR]");
    }
  );
});
