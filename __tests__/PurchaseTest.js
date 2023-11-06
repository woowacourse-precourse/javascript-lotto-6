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
  test.each([["천 원"], ["1100"]])("구입 금액 입력 시 입력값 검증", (input) => {
    // given
    mockQuestions(input);
    const inputLogSpy = jest.spyOn(inputs, "inputPrice");

    // when
    const purchase = new Purchase();
    purchase.inputPrice();

    // then
    expect(inputLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.input.price)
    );
    expect(() => purchase.inputPrice()).toThrow("[ERROR]");
  });
});
