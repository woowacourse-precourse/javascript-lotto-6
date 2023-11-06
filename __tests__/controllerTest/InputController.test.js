import InputController from "../../src/Controller/InputController";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  
	Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
	  return Promise.resolve(input);
	});
};


describe('InputController controllerLottoPurchase', () => {
  const input = '1000';
  test('controllerLottoPurchaseAmount은 Function type이다 ', () => {
    expect(typeof (InputController.controllerLottoPurchase)).toBe("function");
  })
  test(`controllerLottoPurchaseAmount로 객체를 생성합니다. `, async () => {
    mockQuestions([input]);
    const test = await InputController.controllerLottoPurchase();
    expect(typeof (test)).toBe("object");
  })
  test(`controllerLottoPurchaseAmount로 생성한 객체는 getLottoTicketCount 를 메소드로 갖습니다. `, async () => {
    mockQuestions([input]);
    const test = await InputController.controllerLottoPurchase();
    expect(test.getLottoTicketCount).toBeInstanceOf(Function);
  })
  test(`getLottoPurchaseAmount는 양의 정수를 리턴한다. `, async () => {
    mockQuestions([input]);
    const test_1 = await InputController.controllerLottoPurchase();
    expect(test_1.getLottoTicketCount()).toBe(1);
    const ZERO = '0';
    mockQuestions([ZERO]);
    const test_2 = await InputController.controllerLottoPurchase();
    expect(test_2.getLottoTicketCount()).toBe(0);
  })
});
