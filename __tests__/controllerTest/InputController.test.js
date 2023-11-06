import InputController from "../../src/Controller/InputController";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  
	Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
	  return Promise.resolve(input);
	});
};


describe('InputController controllerLottoPurchaseAmount', () => {
  const factor = '1000';
  test('controllerLottoPurchaseAmount은 Function type이다 ', () => {
    expect(typeof (InputController.controllerLottoPurchaseAmount)).toBe("function");
  })
  test(`controllerLottoPurchaseAmount로 객체를 생성합니다. `, async () => {
    mockQuestions([factor]);
    const test = await InputController.controllerLottoPurchaseAmount();
    expect(typeof (test)).toBe("object");
  })
  test(`controllerLottoPurchaseAmount로 생성한 객체는 getLottoPurchaseAmount를 메소드로 갖습니다. `, async () => {
    mockQuestions([factor]);
    const test = await InputController.controllerLottoPurchaseAmount();
    expect(test.getLottoPurchaseAmount).toBeInstanceOf(Function);
  })
  test(`getLottoPurchaseAmount는 양의 정수를 리턴한다. `, async () => {
    mockQuestions([factor]);
    const test_1 = await InputController.controllerLottoPurchaseAmount();
    expect(test_1.getLottoPurchaseAmount()).toBe(1);
    const factor_zero = '0';
    mockQuestions([factor_zero]);
    const test_2 = await InputController.controllerLottoPurchaseAmount();
    expect(test_2.getLottoPurchaseAmount()).toBe(0);
  })
});
