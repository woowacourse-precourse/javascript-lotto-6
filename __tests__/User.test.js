import { MissionUtils } from "@woowacourse/mission-utils";
import User from "../src/User.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("setMoney", () => {
    test("객체에 입력 금액 저장", async () => {
        mockQuestions(["8000"]);

        const user = new User();
        await user.setMoney();

        expect(user.getMoney()).toBe(8000);
    });

    test("입력 금액이 1000으로 나누어 떨어지지 않으면 에러, 이후 반복", async () => {
        const logSpy = getLogSpy();

        mockQuestions(["8500", "8000"]);

        const user = new User();
        await user.setMoney();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
});
