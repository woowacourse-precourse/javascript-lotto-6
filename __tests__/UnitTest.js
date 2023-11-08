import * as lottoUtil from '../src/lottoUtil.js';
import Lotto from '../src/Lotto.js';
import WinLotto from '../src/WinLotto.js';

describe('단위 테스트', () => {
    test('로또 구입 금액이 숫자가 아니라면 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay('1000');
        }).toThrow('[ERROR] 숫자만 입력 가능합니다.');
    });

    test('로또 구입 금액이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay(1234);
        }).toThrow('[ERROR] 1000의 배수만 입력 가능합니다.');
    });

    test('당첨 번호가 6자리가 아니라면 예외가 발생한다.', () => {
        const inputs = [1, [1], [1, 2], [1, 2, 3, 4, 5, 6, 7]];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
        });
    });

    test('당첨 번호가 숫자가 아니라면 예외가 발생한다.', () => {
        const inputs = [
            ['1', '2', '3', '4', '5', '6'],
            [1, 2, 3, 4, 5, '6'],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.');
        });
    });

    test('당첨 번호가 1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
        const inputs = [
            [0, 1, 2, 3, 4, 5],
            [-1, 1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5, 46],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.');
        });
    });

    test('당첨 번호에 중복된 번호가 존재하면 예외가 발생한다.', () => {
        const inputs = [
            [1, 1, 2, 3, 4, 5],
            [1, 1, 1, 1, 1, 1],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 중복된 번호는 사용하실 수 없습니다.');
        });
    });

    test('당첨 번호가 오름차순 정렬되어 있지 않으면 예외가 발생한다', () => {
        const inputs = [
            [6, 5, 4, 3, 2, 1],
            [1, 3, 2, 5, 4, 6],
        ];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 오름차순 정렬이 되어있지 않은 배열입니다.');
        });
    });

    test('보너스 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const inputs = ['문자', '', '7'];

        inputs.forEach(input => {
            expect(() => {
                new WinLotto(new Lotto(lottoNumbers), input);
            }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 사용 가능합니다.');
        });
    });

    test('보너스 번호가 1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const inputs = [-1, 0, 46];

        inputs.forEach(input => {
            expect(() => {
                new WinLotto(new Lotto(lottoNumbers), input);
            }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 사용 가능합니다.');
        });
    });

    test('보너스 번호가 당첨 번호 숫자와 중복된 경우 예외가 발생한다.', () => {
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const inputs = [1, 2, 3, 4, 5, 6];

        inputs.forEach(input => {
            expect(() => {
                new WinLotto(new Lotto(lottoNumbers), input);
            }).toThrow('[ERROR] 당첨 번호로 사용된 번호는 보너스 번호로 사용할 수 없습니다.');
        });
    });
});