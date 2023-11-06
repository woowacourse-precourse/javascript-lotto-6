import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow('[ERROR]');
    });

    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow('[ERROR]');
    });

    // 아래에 추가 테스트 작성 가능
    test('로또 번호가 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 46]);
        }).toThrow('[ERROR]');
    });

    test('로또 번호를 받아올 수 있다.', () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('로또 번호 배열의 내용은 오름차순으로 정렬되어 있다.', () => {
        const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
        expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
