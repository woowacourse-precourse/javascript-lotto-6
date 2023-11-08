import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";
import { ErrorMessages } from "../src/errors";

jest.mock('@woowacourse/mission-utils', () => ({
    ...jest.requireActual('@woowacourse/mission-utils'),
    Console: {
      ...jest.requireActual('@woowacourse/mission-utils').Console,
      readLineAsync: jest.fn(),
    },
    Random: {
      pickUniqueNumbersInRange: jest.fn(),
    },
}));

describe("App", () => {
    let app;

    beforeEach(() => {
        app = new App();
        MissionUtils.Console.readLineAsync = jest.fn().mockResolvedValue("");
    });

    test('로또 번호가 6개를 초과할 경우 에러를 발생시킨다', () => {
        const tooManyNumbers = [1, 2, 3, 4, 5, 6, 7];
        expect(() => app.validateLottoNumbers(tooManyNumbers)).toThrow(ErrorMessages.INVALID_LOTTO_NUMBERS_COUNT);
    });

    test('로또 번호에 중복된 숫자가 있을 경우 에러를 발생시킨다', () => {
        const duplicateNumbers = [1, 2, 3, 4, 5, 5];
        expect(() => app.validateLottoNumbers(duplicateNumbers)).toThrow(ErrorMessages.DUPLICATE_LOTTO_NUMBERS);
    });

    test('당첨 번호가 쉼표로 구분되지 않았을 경우 에러를 발생시킨다', async () => {
        const invalidInput = "123456";
        MissionUtils.Console.readLineAsync.mockResolvedValueOnce(invalidInput);
      
        await expect(app.requestWinningNumbers()).rejects.toThrow(ErrorMessages.INVALID_NUMBER_FORMAT);
      });
});
