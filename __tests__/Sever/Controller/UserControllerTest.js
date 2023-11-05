import { MissionUtils } from '@woowacourse/mission-utils';
import UserController from '../../../src/Server/Spring/Annotation/@Controller/UserController.js';
import InputView from '../../../src/Client/InputView.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('User 테스트', () => {
  let userController;
  let purchaseAmount;
  beforeEach(() => {
    purchaseAmount = '8000';
    userController = new UserController();
  });

  describe('싱글톤 테스트', () => {
    test('userController객체는 하나의 인스턴스만 가져야 한다.', () => {
      const newUserController = new UserController();
      expect(userController).toBe(newUserController);
    });
  });

  describe(`사용자로부터 ${purchaseAmount}를 입력받는다.`, () => {
    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 view값은 LottoPos다.', () => {
      const modelAndView = userController.requestMapping(purchaseAmount);
      expect(modelAndView.view).toBe('LottoPos');
    });
  });
});
