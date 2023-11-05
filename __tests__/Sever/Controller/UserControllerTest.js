import { MissionUtils } from '@woowacourse/mission-utils';
import UserController from '../../../src/Server/Spring/Annotation/@Controller/UserController.js';
import User from '../../../src/Server/Spring/VO/User.js';

describe('UserController 테스트', () => {
  let userController;
  const purchaseAmount = '8000';
  beforeEach(() => {
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
      // when
      const modelAndView = userController.requestMapping(purchaseAmount);

      // then
      expect(modelAndView.view).toBe('LottoPos');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 user객체이다.', () => {
      // when
      const modelAndView = userController.requestMapping(purchaseAmount);
      console.log(modelAndView);
      // then
      expect(modelAndView.model.data).toBeInstanceOf(User);
    });
  });
});
