import App from '../src/App.js';

describe('기능 테스트', () => {
    const app = new App();

    test('로또를 구매할 수 있다.', () => {
        expect(app.buyLotto('5000')).toHaveLength(5);
    });

    test('로또를 구매할 때 1000원 미만의 금액을 입력하면 예외가 발생한다.', () => {
        expect(() => {
            app.buyLotto('500');
        }).toThrow('[ERROR]');
    });

    test('로또를 구매할 때 1000원 단위가 아닌 금액을 입력하면 예외가 발생한다.', () => {
        expect(() => {
            app.buyLotto('1500');
        }).toThrow('[ERROR]');
    });

    test('로또를 구매할 때 숫자가 아닌 다른 문자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            app.buyLotto('1000원');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호에 숫자가 아닌 다른 문자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            app.getWinNumbers('1,2,3,4,5,a');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호에 중복이 있으면 예외가 발생한다.', () => {
        expect(() => {
            app.getWinNumbers('1,2,3,4,5,5');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호에 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
        expect(() => {
            app.getWinNumbers('1,2,3,4,5,46');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
        expect(() => {
            app.getWinNumbers('1,2,3,4,5');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호에 당첨 번호가 있으면 예외가 발생한다.', () => {
        expect(() => {
            app.getBonusNumbers([1, 2, 3, 4, 5, 6], '6');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
        expect(() => {
            app.getBonusNumbers([1, 2, 3, 4, 5, 6], '46');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 1개가 아닌 경우 예외가 발생한다.', () => {
        expect(() => {
            app.getBonusNumbers([1, 2, 3, 4, 5, 6], '1,2');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호를 받아올 수 있다.', () => {
        expect(app.getWinNumbers('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('보너스 번호를 받아올 수 있다.', () => {
        expect(app.getBonusNumbers([1, 2, 3, 4, 5, 6], '7')).toEqual(7);
    });

    test('로또의 등수를 반환한다.', () => {
        expect(
            app.getLottoRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7)
        ).toBe(1);
        expect(
            app.getLottoRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7], 6)
        ).toBe(2);
        expect(
            app.getLottoRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 8], 45)
        ).toBe(3);
        expect(
            app.getLottoRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 9], 45)
        ).toBe(4);
        expect(
            app.getLottoRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9, 10], 45)
        ).toBe(5);
    });

    test('로또의 수익률을 반환한다.', () => {
        const lottoRanks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
        expect(app.getLottoRate(10000, lottoRanks)).toBe(50);
    });

    test('로또의 수익률은 소숫점 둘째 자리에서 반올림한다.', () => {
        const lottoRanks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
        expect(app.getLottoRate(8000, lottoRanks)).toBe(62.5);
    });
});
