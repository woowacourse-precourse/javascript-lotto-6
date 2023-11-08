import { Console } from "@woowacourse/mission-utils";
import { Input } from "../../src/interface/Input.js";
import { checkErrorInstance } from "../../src/utils/test/error.js";

Console.readLineAsync = jest.fn();

const logSpy = jest.spyOn(Console, "print");

describe("쉼표로 나누어지는 여러 값을 포함하는 문자열 입력 테스트", () => {
  test("입력이 되지 않을 경우 예외가 발생한다.", async () => {

    /**잘못된 입력 후, 재귀호출로 인해 한번더 값을 반환
     * 이후 테스트에서 동일
     */
    Console.readLineAsync
    .mockResolvedValueOnce(' ')
    .mockResolvedValueOnce('1,2,3');

    try {
       await Input.readMultipleValues("쉼표로 나누어지는 여러 값을 포함하는 문자열 입력");  
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readMultipleValues).toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("공백이 포함된 값이 입력될 경우 예외가 발생한다.", async () => {
    Console.readLineAsync
    .mockResolvedValueOnce('1,2,3,1 0')
    .mockResolvedValueOnce('1,2,3');

    try {
       await Input.readMultipleValues("쉼표로 나누어지는 여러 값을 포함하는 문자열 입력");  
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readMultipleValues).toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

describe("숫자 입력 테스트", () => {
  test("입력이 되지 않을 경우 예외가 발생한다.", async () => {
    Console.readLineAsync
    .mockResolvedValueOnce(' ')
    .mockResolvedValueOnce('5');

    try {
       await Input.readInteger("숫자 입력");  
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readInteger).not.toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("공백이 포함된 값이 입력될 경우 예외가 발생한다.", async () => {
    Console.readLineAsync
    .mockResolvedValueOnce('5 4')
    .mockResolvedValueOnce('5');

    try {
       await Input.readInteger("숫자 입력");  
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readInteger).toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });


  test("숫자가 아닌 문자열 이 입력될 경우 예외가 발생한다.", async () => {
    Console.readLineAsync
    .mockResolvedValueOnce('숫자가 아닙니다')
    .mockResolvedValueOnce('1000');

    try {
      await Input.readInteger("숫자 입력");  
    }
    catch(e){
      checkErrorInstance(e);

      expect(Input.readInteger).toHaveBeenCalled();
    }

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
