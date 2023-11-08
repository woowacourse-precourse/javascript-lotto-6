import Controller from "../src/Controller";
import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR from '../src/ErrorDb';

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
  
      return Promise.resolve(input);
    });
  };

describe("Controller 클래스 테스트", () => {
  beforeEach(() => {
   jest.restoreAllMocks();
  });

  test("입력된 구입 금액이 숫자가 아닌 경우", async () => {
    mockQuestions(["notANumber"]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(1);
    expect(result).toBe(ERROR.STAGES.WRONG_INPUT_TYPE);
  });

  test("입력된 구입 금액이 1000원 단위로 나누어 떨어지지 않는 경우", async () => {
    mockQuestions(["2345"]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(1);
    expect(result).toBe(ERROR.STAGES.WRONG_AMOUNT_MONEY);
  });

  test("입력된 당첨 번호가 숫자가 아니거나 비어있을 경우", async () => {
    mockQuestions([""]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(3);
    expect(result).toBe(ERROR.STAGES.WRONG_INPUT_TYPE);
  });

  test("입력된 당첨 번호가 숫자가 아니거나 비어있을 경우", async () => {
    mockQuestions([" , , "]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(3);
    expect(result).toBe(ERROR.STAGES.WRONG_INPUT_TYPE);
  });

  test("입력된 당첨 번호가 로또 숫자 범위에서 벗어날 경우", async () => {
    mockQuestions(["1,2,3,4,5,100"]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(3);
    expect(result).toBe(ERROR.STAGES.INPUT_RANGE);
  });

  test("입력된 보너스 번호가 숫자가 아니거나 비어있을 경우", async () => {
    mockQuestions(["num"]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(4);
    expect(result).toBe(ERROR.STAGES.WRONG_INPUT_TYPE);
  });

  test("입력된 보너스 번호가 로또 숫자 범위에서 벗어날 경우", async () => {
    mockQuestions(["0"]);
    const controller = Controller.getInstance();
    const result = await controller.switchStage(4);
    expect(result).toBe(ERROR.STAGES.INPUT_RANGE);
  });

  test("입력된 보너스 번호가 당첨 로또 번호와 중복될 경우", async () => {
    mockQuestions(["1,2,3,4,5,6", "6"]);
    const controller = Controller.getInstance();
    const tmp = await controller.switchStage(3);
    const result = await controller.switchStage(4);
    expect(result).toBe(ERROR.STAGES.WRONG_BONUS);
  });

});
