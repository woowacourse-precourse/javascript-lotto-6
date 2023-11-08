import Lotto from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import WinLotto from '../src/WinLotto.js';
import * as lottoUtil from '../src/lottoUtil.js';


const mockRandoms = numbers => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('단위 테스트', () => {
    test('로또 구입 금액이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay(1234);
        }).toThrow('[ERROR] 1000의 배수만 입력 가능합니다.');
    });

    test('로또 구입 금액이 숫자가 아니라면 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay('1000');
        }).toThrow('[ERROR] 숫자만 입력 가능합니다.');
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

    test('당첨 번호가 6자리가 아니라면 예외가 발생한다.', () => {
        const inputs = [1, [1], [1, 2], [1, 2, 3, 4, 5, 6, 7]];

        inputs.forEach(input => {
            expect(() => {
                new Lotto(input);
            }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
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


    test('보너스 번호가 1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const inputs = [-1, 0, 46];

        inputs.forEach(input => {
            expect(() => {
                new WinLotto(new Lotto(lottoNumbers), input);
            }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 사용 가능합니다.');
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


    test('보너스 번호가 당첨 번호 숫자와 중복된 경우 예외가 발생한다.', () => {
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const inputs = [1, 2, 3, 4, 5, 6];

        inputs.forEach(input => {
            expect(() => {
                new WinLotto(new Lotto(lottoNumbers), input);
            }).toThrow('[ERROR] 당첨 번호로 사용된 번호는 보너스 번호로 사용할 수 없습니다.');
        });
    });

    test('무작위 6자리 번호를 발행하는 기능', () => {
        const prepareRandomNumber = [1, 2, 3, 4, 5, 6];
        mockRandoms([prepareRandomNumber]);

        expect(lottoUtil.lottoGenerate(1)[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('당첨 번호 갯수를 계산하는 기능', () => {
        const winLottoSet = new Set([1, 2, 3, 4, 5, 6]);
        const inputs = [
            [1, 7, 8, 9, 10, 11],
            [1, 2, 7, 8, 9, 10],
            [1, 2, 3, 7, 8, 9],
            [1, 2, 3, 4, 7, 8],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 4, 5, 6],
        ];

        const expectResult = [1, 2, 3, 4, 5, 6];

        inputs.forEach((input, i) => {
            expect(lottoUtil.checkAnswerCnt(input, winLottoSet)).toEqual(expectResult[i]);
        });
    });

    test('보너스 번호 일치 여부를 검사하는 기능', () => {
        const inputs = [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 7],
            [1, 2, 3, 7, 8, 9],
            [1, 2, 3, 4, 5, 8],
            [1, 2, 7, 10, 17, 20],
            [1, 2, 3, 8, 20, 45],
        ];

        const expectResult = [false, true, true, false, true, false];

        inputs.forEach((input, i) => {
            expect(lottoUtil.checkHasBonus(input, 7)).toEqual(expectResult[i]);
        });
    });

    test('당첨 번호 갯수와 보너스 일치 여부로 등수를 결정하는 기능', () => {
        const inputs = [
            [1, true],
            [2, false],
            [3, false],
            [3, true],
            [4, false],
            [5, false],
            [5, true],
            [6, false],
            [6, true],
        ];

        const expectResult = [-1, -1, 5, 5, 4, 3, 2, 1, 1];

        inputs.forEach(([answerCnt, hasBonusNumber], i) => {
            expect(lottoUtil.lottoRank(answerCnt, hasBonusNumber)).toEqual(expectResult[i]);
        });
    });
});