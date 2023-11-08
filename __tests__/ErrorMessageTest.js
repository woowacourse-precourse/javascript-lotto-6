import App from "../src/App";

jest.mock('@woowacourse/mission-utils', () => ({
    ...jest.requireActual('@woowacourse/mission-utils'),
    Random: {
        pickUniqueNumbersInRange: jest.fn(),
    },
}));

describe("App", () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    test('로또 번호가 6개를 초과할 경우 에러를 발생시킨다', () => {
        const tooManyNumbers = [1, 2, 3, 4, 5, 6, 7];
        expect(() => app.validateLottoNumbers(tooManyNumbers)).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    test('로또 번호에 중복된 숫자가 있을 경우 에러를 발생시킨다', () => {
        const duplicateNumbers = [1, 2, 3, 4, 5, 5];
        expect(() => app.validateLottoNumbers(duplicateNumbers)).toThrow("[ERROR] 로또 번호는 중복될 수 없습니다.");
    });
});