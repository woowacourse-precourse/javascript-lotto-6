import * as Game from '../src/Game';
import * as Input from '../src/UserInput';
import * as Calculate from '../src/Calculate';


import Lotto from '../src/Lotto';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
    Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, Random.pickUniqueNumbersInRange);
};

describe('기능 테스트', () => {
    test('로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
        expect(() => {
            Input.validatePurchaseAmount('s');
        }).toThrow('[ERROR]');
    });

    test('로또 구입 금액이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
        expect(() => {
            Input.validatePurchaseAmount(1234);
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 6자리가 아닐 경우 예외가 발생한다.', () => {
        const inputs = [[1], [1, 2], [1, 2, 3, 4, 5, 6, 7]];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR]');
        });
    });

    test('당첨 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
        const inputs = [
            [ 1, 2, 3, NaN, 4, 5 ]
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR]');
        });
    });

    test('당첨 번호 범위가 1부터 45 사이가 아닐 경우 예외가 발생한다.', () => {
        const inputs = [
            [0, 1, 2, 3, 4, 5],
            [-1, 1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5, 46],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR]');
        });
    });

    test('당첨 번호에 중복된 번호가 존재할 경우 예외가 발생한다.', () => {
        const inputs = [
            [1, 1, 2, 3, 4, 5],
            [1, 1, 1, 1, 1, 1],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR]');
        });
    });

    test('로또 번호를 1부터 45 사이의 무작위 6자리의 배열로 발행한다.', () => {
        const RandomNumbers = [1, 2, 3, 4, 5, 6];
        mockRandoms([RandomNumbers]);

        expect(Game.LottoMaker(1)[0]).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('발행된 로또 번호 배열을 통해 당첨 통계를 계산한다.', () => {
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;
        const lottereis = [
            [1, 7, 8, 9, 10, 11],
            [1, 2, 7, 8, 9, 10],
            [1, 2, 3, 7, 8, 9],
            [1, 2, 3, 4, 7, 8],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 4, 5, 6],
        ];

        const expectResult = [1, 1, 0, 1, 1];
        expect(Game.integrateWinLottery(winningNumbers, bonusNumber, lottereis)).toEqual(expectResult);
    });

    test('상금의 총합을 계산한다.', () => {
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;
        const lottereis = [
            [1, 7, 8, 9, 10, 11],
            [1, 2, 7, 8, 9, 10],
            [1, 2, 3, 7, 8, 9],
            [1, 2, 3, 4, 7, 8],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 4, 5, 6],
        ];

        const expectResult = 2030055000;
        expect(Calculate.gettotalAmount(winningNumbers, bonusNumber, lottereis)).toEqual(expectResult);
    });

    test('상금 수익률을 계산한다.', () => {
        const quantity = 6;
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;
        const lottereis = [
            [1, 7, 8, 9, 10, 11],
            [1, 2, 7, 8, 9, 10],
            [1, 2, 3, 7, 8, 9],
            [1, 2, 3, 4, 7, 8],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 4, 5, 6],
        ];

        const expectResult = '33834250.0';
        expect(Calculate.calculateReturns(quantity, winningNumbers, bonusNumber, lottereis)).toEqual(expectResult);
    })
})