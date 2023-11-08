import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockPrint = jest.fn();
MissionUtils.Console = {
    print: mockPrint,
    readLineAsync: jest.fn()
};

const mockPickUniqueNumbersInRange = jest.fn();
MissionUtils.Random = {
    pickUniqueNumbersInRange: mockPickUniqueNumbersInRange
};


function setupWinningNumbers(winningNumbers, bonusNumber) {
    MissionUtils.Console.readLineAsync
        .mockResolvedValueOnce(winningNumbers.join(',')) // 당첨 번호 반환
        .mockResolvedValueOnce(bonusNumber.toString()); // 보너스 번호 반환
}

function verifyNumbers(numbers, winningNumbers, bonusNumber) {
    expect(numbers).toHaveLength(7);
    expect(new Set(numbers).size).toBe(numbers.length); // 모든 숫자가 중복되지 않는지 확인
    expect(numbers.slice(0, -1)).toEqual(winningNumbers); // 처음 6개 숫자가 당첨 번호와 일치하는지 확인
    expect(numbers[numbers.length - 1]).toEqual(bonusNumber); // 마지막 숫자가 보너스 번호와 일치하는지 확인
}

describe('App', () => {
    let app;

    beforeEach(() => {
        app = new App();
        mockPrint.mockClear();
        MissionUtils.Console.readLineAsync.mockClear();
        mockPickUniqueNumbersInRange.mockClear();
    });

    it('보너스 번호는 당첨번호와 중복될 수 없다', async () => {
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;

        setupWinningNumbers(winningNumbers, bonusNumber);
        const numbers = await app.requestWinningNumbers();
        verifyNumbers(numbers, winningNumbers, bonusNumber);
    });
});