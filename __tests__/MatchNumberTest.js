import App from "../src/App";
import Lotto from "../src/Lotto";

jest.mock('@woowacourse/mission-utils', () => ({
    ...jest.requireActual('@woowacourse/mission-utils'),
    Random: {
        pickUniqueNumbersInRange: jest.fn(),
    },
}));

describe('App', () => {
    let app;
    const mockLottos = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    beforeEach(() => {
        app = new App();
        app.lottos = mockLottos;

        const { Random } = require('@woowacourse/mission-utils');
        Random.pickUniqueNumbersInRange.mockImplementation((min, max, size) => Array.from({ length: size }, (_, i) => min + i));
    });

    test('로또 번호와 당첨 번호가 일치하는 갯수와 상금을 정확히 계산해야 한다.', () => {
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;

        app.matchNumbers(winningNumbers, bonusNumber);

        const expectedMatchedCounts = {3: 0, 4: 0, 5: 0, '5B': 0, 6: 1 };
        for (const [match, count] of Object.entries(expectedMatchedCounts)) {
            expect(app.matchedCount[match]).toBe(count);
        }
        
        expect(app.prizeMoney).toBe(2000000000);
    });
});