import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";

describe("로또 예산 검사", () => {
    test("1000원으로 나누어지지 않는 경우", async () => {
        const mockReadLineAsync = jest.fn();
        mockReadLineAsync
            .mockResolvedValueOnce("1500");

        Console.readLineAsync = mockReadLineAsync;

        const app = new App();

        await expect(app.lottoBudget()).rejects.toThrow("[ERROR]");
    });
    test("0이하인 경우", async () => {
        const mockReadLineAsync = jest.fn();
        mockReadLineAsync
            .mockResolvedValueOnce("0");

        Console.readLineAsync = mockReadLineAsync;

        const app = new App();

        await expect(app.lottoBudget()).rejects.toThrow("[ERROR]");
    });
    test("문자열을 포함한 경우", async () => {
        const mockReadLineAsync = jest.fn();
        mockReadLineAsync
            .mockResolvedValueOnce("100j");

        Console.readLineAsync = mockReadLineAsync;

        const app = new App();

        await expect(app.lottoBudget()).rejects.toThrow("[ERROR]");
    });
})