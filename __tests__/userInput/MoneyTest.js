import { Console } from "@woowacourse/mission-utils";
import { Input } from "../../src/interface/Input.js";
import { checkErrorInstance } from "../../src/utils/test/error.js";
import { User } from "../../src/User.js";

Console.readLineAsync = jest.fn();

const logSpy = jest.spyOn(Console, "print");
let user;

describe("로또 구입 금액 입력 테스트", () => {
    beforeEach(()=>{
        user = new User();
    })

  test("1000 단위로 떨어지지 않는 값이 입력될 경우 예외가 발생한다.", async () => {
    /**잘못된 입력 후, 재귀호출로 인해 한번더 값을 반환 */
    Console.readLineAsync
    .mockResolvedValueOnce('1200')
    .mockResolvedValueOnce('1000');

    try {
       await user.inputMoney();
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readInteger).toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
