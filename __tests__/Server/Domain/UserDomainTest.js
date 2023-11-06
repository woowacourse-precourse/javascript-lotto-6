import UserController from '../../../src/Server/Spring/Annotation/@Controller/UserController.js';
import User from '../../../src/Server/Spring/VO/User.js';
import CONSTANTS from '../../../src/Util/Constants.js';

describe('UserController 테스트', () => {
  let userController;
  const purchaseAmount = '8000';
  const purchaseAmounts = ['8000', '10000', '12000'];
  const { lottoPrice } = CONSTANTS;
  const { lottoMin } = CONSTANTS;
  const { lottoMax } = CONSTANTS;

  beforeEach(() => {
    userController = new UserController();
  });

  describe('싱글톤 테스트', () => {
    test('userController객체는 하나의 인스턴스만 가져야 한다.', () => {
      const newUserController = new UserController();
      expect(userController).toBe(newUserController);
    });
  });

  describe(`컨트롤러에서 반환되는 modelAndView 테스트`, () => {
    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 view값은 LottoPos다.', () => {
      // when
      const modelAndView = userController.requestMapping(purchaseAmount);

      // then
      expect(modelAndView.view).toBe('LottoPos');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 user객체이다.', () => {
      // when
      const modelAndView = userController.requestMapping(purchaseAmount);
      // then
      expect(modelAndView.model.data).toBeInstanceOf(User);
    });
  });

  describe('user 객체 구입금액(purchaseMaount) 테스트', () => {
    test('user객체의 구입금액(purchaseMaount)는 전달받은 금액이여야 한다.', () => {
      // given
      const expectAnswers = [8000, 10000, 12000];

      // when
      const testCaseResult = purchaseAmounts.map((amount) => {
        const modelAndView = userController.requestMapping(amount);
        return modelAndView.model.data.purchaseAmount;
      });

      // then
      testCaseResult.forEach((result, idx) => {
        expect(result).toBe(expectAnswers[idx]);
      });
    });
  });

  describe('user 객체 구입한 로또 갯수(lottoCount) 테스트', () => {
    test(`user객체의 구입한 로또 갯수(lottoCount)는 구입금액 / ${lottoPrice}이여야 한다.`, () => {
      // given
      const expectAnswers = [8000 / lottoPrice, 10000 / lottoPrice, 12000 / lottoPrice];

      // when
      const testCaseResult = purchaseAmounts.map((amount) => {
        const modelAndView = userController.requestMapping(amount);
        return modelAndView.model.data.lottoCount;
      });

      // then
      testCaseResult.forEach((result, idx) => {
        expect(result).toBe(expectAnswers[idx]);
      });
    });
  });

  describe('user 객체 구입한 로또 (lotto) 테스트', () => {
    test(`user객체의 구입한 로또(lotto)의 길이는 구입한 로또 갯수여야 한다.`, () => {
      // given
      const expectAnswers = [8000 / lottoPrice, 10000 / lottoPrice, 12000 / lottoPrice];

      // when
      const testCaseResult = purchaseAmounts.map((amount) => {
        const modelAndView = userController.requestMapping(amount);
        return modelAndView.model.data.userLotto;
      });

      // then
      testCaseResult.forEach((result, idx) => {
        expect(result.length).toBe(expectAnswers[idx]);
      });
    });

    test(`user객체의 구입한 로또번호는 ${lottoMin} 이상 ${lottoMax}이하여야 한다.`, () => {
      // when
      const testCaseResult = purchaseAmounts.map((amount) => {
        const modelAndView = userController.requestMapping(amount);
        return modelAndView.model.data.userLotto;
      });
      // then
      testCaseResult.forEach((testCase) => {
        testCase.forEach((result) => {
          const isAllInRange = result.every((lotto) => lotto >= lottoMin && lotto <= lottoMax);
          expect(isAllInRange).toBe(true);
        });
      });
    });

    test(`user객체의 구입한 로또번호는 유니크해야 한다.`, () => {
      // when
      const testCaseResult = purchaseAmounts.map((amount) => {
        const modelAndView = userController.requestMapping(amount);
        return modelAndView.model.data.userLotto;
      });
      // then
      testCaseResult.forEach((testCase) => {
        testCase.forEach((result) => {
          const resultSet = new Set(result);
          expect(result.length).toBe(resultSet.size);
        });
      });
    });
  });
});
