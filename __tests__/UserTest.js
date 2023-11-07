import User from "../src/User.js";
import {MissionUtils} from "@woowacourse/mission-utils";

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

describe("유저 클래스 테스트", () => {
    test("유저가 가지고 있는 돈이 천의 단위가 아니면 에러가 발생하지 않는다..",async () => {
        const logSpy = getLogSpy();
        mockQuestions(["8000"]);
        const log = "8개를 구매했습니다."

        const user = new User();
        const money = await user.readUserMoney();
        user.setUserMoney(money);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })

    test("유저가 가지고 있는 돈이 천의 단위라면 에러가 발생한다.", async () => {
        const logSpy = getLogSpy();
        mockQuestions(["7500", "8000"]);


        const logs = ["[ERROR] 입력받은 값이 해당 단위와 다릅니다.","8개를 구매했습니다."]
        const user = new User();
        await user.readAndSetUserMoney();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    })

    test("유저가 가지고 있는 돈만큼 정확한 시도 횟수를 발급받을 수 있다.",()=>{
        const user = new User();
        user.setUserMoney(7000);
        expect(user.getCount()).toBe(7);
    })
})
;
