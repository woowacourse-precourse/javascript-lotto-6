import {
    generateLotto,
    calculateMatchCount,
    calculateEarnings,
} from "../src/utils/Calculate";
import Lotto from "../src/Lotto";

describe('연산 테스트', () => {
    describe('당첨 번호 생성 테스트', () => {
        test('당첨 번호를 생성할 때 1 ~ 45 범위의 유니크한 6개의 숫자를 생성한다.', () => {
            const lotto = generateLotto();
            const testLottoNumbers = lotto.getNumbers();
            expect(testLottoNumbers).toHaveLength(6);
            expect(new Set(testLottoNumbers).size).toBe(6);
    
            testLottoNumbers.forEach(number => {
                expect(number).toBeGreaterThanOrEqual(1);
                expect(number).toBeLessThanOrEqual(45);
            });
        });
    });

    describe('당첨 번호 갯수 체크 연산 테스트', () => {
        test('로또와 당첨번호가 주어졌을 때 매칭되는 번호의 개수를 정확히 계산한다.', () => {
            const lottoNumbers = [5, 10, 15, 20, 25, 30];
            const winningNumbers = [5, 10, 15, 20, 25, 40];
            const lotto = new Lotto(lottoNumbers);
            const matchCount = calculateMatchCount(lotto, winningNumbers);
            expect(matchCount).toBe(5);
        });
    });

    describe('수익률 계산 테스트', () => {
        test('당첨 결과와 구매 금액이 주어졌을 때 수익률을 정확히 계산한다.', () => {
            const results = {
                '3': 5,
                '4': 2,
                '5': 1,
            };
            const PRIZE_MAP = {
                '3': 5000,
                '4': 50000,
                '5': 1500000,
                '5+': 30000000,
                '6': 2000000000,
            };
            const purchaseAmount = 5000;
            const earnings = calculateEarnings(results, purchaseAmount);
            const expectedEarnings = (
              (5 * PRIZE_MAP['3'] + 2 * PRIZE_MAP['4'] + 1 * PRIZE_MAP['5']) / purchaseAmount) * 100;
            expect(parseFloat(earnings)).toBeCloseTo(expectedEarnings);
        });
    });
});