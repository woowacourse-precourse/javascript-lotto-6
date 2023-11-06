import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";
import { errorMessages } from "../src/Message";

describe("App 클래스 테스트", () => {
  test("구입금액은 숫자여야 한다.", async () => {
    //given
    const app = new App();

    //when
    const mockReadLineAsync = jest.fn().mockResolvedValue("구입금액8000");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    //expect(wrongPurchasePrice).isMatch(/^d+$/);
    //expect(() => app.checkPurchasePrice(wrongPurchasePrice)).toThrow("[ERROR]");
    //getPurchasePrice 함수를 호출하고 예외 발생을 확인
    expect(app.getPurchasePrice()).rejects.toThrowError(
      errorMessages.ERROR_INPUT_TYPE_IS_NUMBER
    );
  });

  test("구입금액은 1000원 단위로 나누어 떨어져야 한다.", () => {
    //given
    const app = new App();

    //when
    //const wrongPurchasePrice = "8888";
    const mockReadLineAsync = jest.fn().mockResolvedValue("8888");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    //expect(() => parseInt(wrongPurchasePrice) % 1000).isEqual(0);
    expect(app.getPurchasePrice()).rejects.toThrowError(
      errorMessages.ERROR_INPUT_DIVIDED_BY_1000
    );
  });

  /**  /**2. 당첨번호를 입력받는다.
  - 당첨번호는 숫자여야 한다.
  - 당첨번호는 6개여야 한다.
  - 당첨번호는 중복되지 않아야 한다.
- 각 당첨번호는 1~45사이의 숫자여야 한다. */
  test("당첨금액은 숫자여야 한다.", () => {
    //given
    const app = new App();

    //when
    const mockReadLineAsync = jest.fn().mockResolvedValue("당,1,2,3,4,5");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    expect(app.getWinning()).rejects.toThrowError(
      "[ERROR] 당첨번호는 숫자여야 합니다."
    );
  });

  test("당첨금액은 6개여야 한다.", () => {
    //given
    const app = new App();

    //when
    const mockReadLineAsync = jest.fn().mockResolvedValue("1,2,3,4,5");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    expect(app.getWinning()).rejects.toThrowError(
      "[ERROR] 당첨번호는 6개여야 합니다."
    );
  });

  test("당첨번호는 중복되지 않아야 한다.", () => {
    //given
    const app = new App();

    //when
    const mockReadLineAsync = jest.fn().mockResolvedValue("1,2,3,4,5,5");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    expect(app.getWinning()).rejects.toThrowError(
      "[ERROR] 당첨번호는 중복되지 않아야 합니다."
    );
  });

  test("각 당첨번호는 1~45사이의 숫자여야 한다.", () => {
    //given
    const app = new App();

    //when
    const mockReadLineAsync = jest.fn().mockResolvedValue("1,2,3,4,5,55");
    jest
      .spyOn(MissionUtils.Console, "readLineAsync")
      .mockImplementation(mockReadLineAsync);

    //then
    expect(app.getWinning()).rejects.toThrowError(
      "[ERROR] 각 당첨번호는 1~45사이의 숫자여야 합니다."
    );
  });
});
