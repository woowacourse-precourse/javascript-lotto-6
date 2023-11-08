import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("App 클래스 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("getPrice() 메서드가 유효한 가격을 반환해야 한다.", async () => {
    const mockReadLineAsync = jest.fn().mockResolvedValue("2000");
    // mockReadLineAsync라는 가상 함수를 생성하고,
    // 이 함수가 비동기 함수로 만들어짐을 나타내는 mockResolvedValue 메서드를 사용하여
    // 이 함수가 호출될 때 "2000" 값을 반환하도록 설정함
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockImplementation(mockReadLineAsync);
    // MissionUtils.Console 객체의 readLineAsync 메서드를 모킹함
    // 이것은 원래의 readLineAsync 메서드를 대체하고, 대신 mockReadLineAsync 함수를 사용하도록 설정함
    // 이것은 테스트에서 사용자의 입력을 시뮬레이션하는 역할을 함

    const validPrice = await app.getPrice();
    // app 객체의 getPrice 메서드를 호출함
    // 이 메서드는 MissionUtils.Console 객체의 readLineAsync 메서드를 호출하는데,
    // 이 호출은 모킹된 readLineAsync가 "2000"을 반환하도록 설정되어 있음

    expect(validPrice).toBe(2000);
    // validPrice 변수의 값을 검사하여 2000과 비교함 
    expect(mockReadLineAsync).toHaveBeenCalledWith("구입 금액을 입력해 주세요.\n");
    // mockReadLineAsync 함수가 정확하게 한 번 호출되었으며,
    // 호출 시에 "구입 금액을 입력해 주세요.\n"라는 메시지와 함께 호출되었는지 검사함
    // 이것은 getPrice 메서드에서 사용자에게 입력을 요청하는지 확인하기 위한 부분임
  });

  test("getPrice() 메서드가 유효하지 않은 가격을 입력했을 때 오류를 발생해야 한다.", async () => {
    const mockReadLineAsync = jest.fn().mockResolvedValue("invalid");
    // mockReadLineAsync라는 가상 함수를 생성하고,
    // 이 함수가 비동기 함수로 만들어짐을 나타내는 mockResolvedValue 메서드를 사용하여
    // 이 함수가 호출될 때 "invalid" 값을 반환하도록 설정함
    jest.spyOn(MissionUtils.Console, "readLineAsync").mockImplementation(mockReadLineAsync);
    // MissionUtils.Console 객체의 readLineAsync 메서드를 모킹함
    // 이것은 원래의 readLineAsync 메서드를 대체하고, 대신 mockReadLineAsync 함수를 사용하도록 설정함
    // 이것은 테스트에서 사용자의 입력을 시뮬레이션하는 역할을 함

    await expect(app.getPrice()).rejects.toThrow("[ERROR]");
  });
});
