import { Console } from "@woowacourse/mission-utils";
import { User } from "../../src/User.js";
import { Input } from "../../src/interface/Input";
import { checkErrorInstance } from "../../src/utils/test/error.js";

const logSpy = jest.spyOn(Console, "print");
const user = new User();

test("당첨 번호와 중복되는 경우 예외가 발생한다", async () => {
    Input.readInteger = jest.fn();
    Input.readMultipleValues = jest.fn();
    Input.readMultipleValues.mockResolvedValue([1,2,3,4,5,6]);
    Input.readInteger.mockResolvedValueOnce(6).mockResolvedValueOnce(7);
    
    try {
        await user.inputWinningNumbers();
        await user.inputBonusNumber();
    }
    catch(e){
        checkErrorInstance(e)
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });