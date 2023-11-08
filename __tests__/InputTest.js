import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe('입력 테스트', () => {

    test('입력 금액 범위 테스트(1000이하)', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['10', '1000', '1,2,3,4,5,6', '45', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('입력 금액 숫자가 아닌 값 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['8000k', '1000', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('1부터 45 범위 외의 값 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,46,5', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('당첨 번호와 중복된 숫자 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,5,6', '6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('숫자가 아닌 값 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,5,6', 'A', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('당첨번호 구분자를 슬래쉬로 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1/2/3/4/5/6', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('음수 입력 처리 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['-8000', '1000', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('1부터 45 범위 외의 값 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,46,5', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('당첨 번호 숫자가 아닌 값 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,a,6', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('당첨 번호를 7개 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1,2,3,4,5,6,7', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test('구분자를 슬래쉬로 입력 테스트', async () => {
        const logSpy = getLogSpy();

        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(['1000', '1/2/3/4/5/6', '1,2,3,4,5,6', '7']);

        const app = new App();
        try {
            await app.play();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

})