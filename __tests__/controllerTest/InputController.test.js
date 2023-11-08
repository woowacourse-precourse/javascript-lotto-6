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
    const controllerTest = await InputController.controllerLottoPurchase();
    expect(typeof (controllerTest)).toBe("object");
  })
  test(`controllerLottoPurchaseAmount로 생성한 객체는 getLottoTicketCount 를 메소드로 갖습니다. `, async () => {
    mockQuestions([input]);
    const controllerTest = await InputController.controllerLottoPurchase();
    expect(controllerTest.getLottoTicketCount).toBeInstanceOf(Function);
  })
  test(`getLottoPurchaseAmount는 양의 정수를 리턴한다. `, async () => {
    mockQuestions([input]);
    const controllerTest = await InputController.controllerLottoPurchase();
    expect(controllerTest.getLottoTicketCount()).toBe(1);
  });
});

describe('InputController controllerCommonLottoWinningNumbers', () => {
  test('controllerLottoPurchaseAmount은 Function type이다 ', () => {
    expect(typeof (InputController.controllerCommonLottoWinningNumbers)).toBe("function");
  })
  test(`controllerLottoPurchaseAmount로 객체를 생성합니다. `, async () => {
    const input = '1,2,3,4,5,6';
    mockQuestions([input]);
    const controllerTest = await InputController.controllerCommonLottoWinningNumbers();
    expect(typeof (controllerTest)).toBe("object");
  })
  test(`controllerLottoPurchaseAmount로 생성한 객체는 getLottoTicketCount 를 메소드로 갖습니다. `, async () => {
    const input = '1,2,3,4,5,6';
    mockQuestions([input]);
    const controllerTest = await InputController.controllerCommonLottoWinningNumbers();
    expect(controllerTest.getlottoCommonWinningNumbersArray).toBeInstanceOf(Function);
  })
  test(`getLottoPurchaseAmount는 원소를 정수로 가진 배열로 리턴한다. `, async () => {
    const input = '1,2,3,4,5,6';
    const expected = [1, 2, 3, 4, 5, 6];
    mockQuestions([input]);
    const controllerTest = await InputController.controllerCommonLottoWinningNumbers();
    const answer = controllerTest.getlottoCommonWinningNumbersArray();
    expect(answer).toStrictEqual(expected);
  });
});

describe('InputController controllerBonusLottoWinningNumber', () => {
  const input = '1';
  const array = [2,3,4,5,6,7];
  test('controllerBonusLottoWinningNumber 은 Function type이다 ', () => {
    expect(typeof (InputController.controllerBonusLottoWinningNumber)).toBe("function");
  })
  test(`controllerLottoPurchaseAmount로 객체를 생성합니다. `, async () => {
    mockQuestions([input]);
    const controllerTest = await InputController.controllerBonusLottoWinningNumber(array);
    expect(typeof (controllerTest)).toBe("object");
  })
  test(`controllerBonusLottoWinningNumber 로 생성한 객체는 getlottoBonusWinningNumber 를 메소드로 갖습니다. `, async () => {
    mockQuestions([input]);
    const controllerTest = await InputController.controllerBonusLottoWinningNumber(array);
    expect(controllerTest.getlottoBonusWinningNumber).toBeInstanceOf(Function);
  })
  test(`controllerBonusLottoWinningNumber 는 원소를 정수 리턴한다. `, async () => {
    const expected = 1;
    mockQuestions([input]);
    const controllerTest = await InputController.controllerBonusLottoWinningNumber(array);
    const answer = controllerTest.getlottoBonusWinningNumber();
    expect(answer).toStrictEqual(expected);
  });
});
