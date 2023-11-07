import DispatcherServlet from '../../src/Server/Spring/MVCpattern/DispatcherServlet.js';
import UserController from '../../src/Server/Spring/Annotation/@Controller/UserController.js';
import WinningLottoController from '../../src/Server/Spring/Annotation/@Controller/WinningLottoController.js';
import BonusController from '../../src/Server/Spring/Annotation/@Controller/BonusController.js';
import CompareLottoController from '../../src/Server/Spring/Annotation/@Controller/CompareLottoController.js';
import API from '../../src/Util/API.js';
import HandlerMapping from '../../src/Server/Spring/MVCpattern/HandlerMapping.js';
import HandlerAdapter from '../../src/Server/Spring/MVCpattern/HandlerAdapter.js';
import ModelAndView from '../../src/Server/Spring/Objects/ModelAndView.js';
import User from '../../src/Server/Spring/VO/User.js';
import generateLottoNumber from '../../src/Server/Spring/Annotation/@Service/generateLottoNumber.js';
import LottoPosView from '../../src/Server/Spring/MVCpattern/LottoPosView.js';
import ViewResolver from '../../src/Server/Spring/MVCpattern/ViewResolver.js';
import HttpRequest from '../../src/Client/HttpRequest.js';
import CONSTANTS from '../../src/Util/Constants.js';

describe('LottoServer 도메인 테스트', () => {
  describe('handlerMapping 테스트', () => {
    let handlerMapping;
    beforeEach(() => {
      handlerMapping = new HandlerMapping();
    });

    test('handlerMapping에서 요청한 URL에 맞는 컨트롤러를 반환해야 한다.', () => {
      // given
      const { purchaseAmount, setWinningNumber, setBonusNumber, compareLottoNumber } = API;
      const api = [purchaseAmount, setWinningNumber, setBonusNumber, compareLottoNumber];
      const expectResult = [
        UserController,
        WinningLottoController,
        BonusController,
        CompareLottoController,
      ];

      // when
      const controllers = api.map((url) => handlerMapping.getController(url));

      // then
      controllers.forEach((controller, idx) => {
        expect(controller).toEqual(expectResult[idx].instance);
      });
    });
  });

  describe('handlerAdatper 테스트', () => {
    let handlerAdapter;
    let testCases = [];
    beforeEach(() => {
      handlerAdapter = new HandlerAdapter();
      testCases = [
        { controller: new UserController(), httpRequestBody: '8000' },
        { controller: new WinningLottoController(), httpRequestBody: '1,2,3,4,5,6' },
        { controller: new BonusController(), httpRequestBody: '8' },
        {
          controller: new CompareLottoController(),
          httpRequestBody: new User('8000', generateLottoNumber),
        },
      ];
    });

    test('handlerAdatper에서 반환한 객체는 modelAndView 이다.', () => {
      testCases.forEach(({ controller, httpRequestBody }) => {
        expect(handlerAdapter.handler(controller, httpRequestBody)).toBeInstanceOf(ModelAndView);
      });
    });
  });

  describe('viewResolver 테스트', () => {
    test('viewResolver에서 반환한 view객체는 LottoPosView 이다.', () => {
      const viewResolver = new ViewResolver();
      expect(viewResolver.getView()).toBeInstanceOf(LottoPosView);
    });
  });

  describe('상태 테스트', () => {
    let dispatcherServlet;
    let httpRequests = [];
    beforeEach(() => {
      dispatcherServlet = new DispatcherServlet();
      httpRequests = [
        new HttpRequest(API.purchaseAmount, '10001'),
        new HttpRequest(API.purchaseAmount, 'a2'),
        new HttpRequest(API.setWinningNumber, '1,2,3,4,5'),
        new HttpRequest(API.setWinningNumber, '1,2,3,4,5,5'),
        new HttpRequest(API.setWinningNumber, '1,2,3,4,5,a'),
        new HttpRequest(API.setBonusNumber, 'a'),
      ];
    });
    test('만약 처리하는 과정에서 에러가 발생하면 httpResponse의 status는 [ERROR]가 되어야한다.', () => {
      httpRequests.forEach((httpRequest) => {
        expect(dispatcherServlet.requestAPI(httpRequest).status).toBe(CONSTANTS.error);
      });
    });
  });

  describe('상태 테스트', () => {
    let dispatcherServlet;
    let httpRequests = [];
    beforeEach(() => {
      dispatcherServlet = new DispatcherServlet();
      httpRequests = [
        new HttpRequest(API.purchaseAmount, '8000'),
        new HttpRequest(API.purchaseAmount, '12000'),
        new HttpRequest(API.setWinningNumber, '1,2,3,4,5,6'),
        new HttpRequest(API.setWinningNumber, '2,3,5,6,7,8'),
        new HttpRequest(API.setBonusNumber, '10'),
      ];
    });
    test('만약 처리하는 과정에서 에러가 발생하면 httpResponse의 status는 [SUCCESS]가 되어야한다.', () => {
      httpRequests.forEach((httpRequest) => {
        expect(dispatcherServlet.requestAPI(httpRequest).status).toBe(CONSTANTS.success);
      });
    });
  });
});
