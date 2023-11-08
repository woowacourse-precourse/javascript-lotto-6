import Lotto from "../src/Model/Lotto.js";

describe('로또 컨트롤러 테스트', () => {
    test('번호 6개 입력시 에러', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow('[ERROR]');
    });

    test('중복된 숫자 에러발생', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow('[ERROR]');
    });
    test('a<1 , 45<a 인 경우 에러', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 46]);
        }).toThrow('[ERROR]');
    });
    test('번호 6개 아닐경우 에러', () => {
        expect(() => {
            new Lotto([1,2]);
        }).toThrow('[ERROR]');
    });

    test('두개의 로또번호 비교후 같은 숫자 확인.', () => {
        const lotto1 = new Lotto([1,2,3,4,5,6]);
        const lotto2 = new Lotto([1,2,6, 20, 21, 22]);

        expect(lotto1.countSameNumber(lotto2)).toBe(3);
    });
    test('번호 오름차순 정렬', () => {
        const lotto = new Lotto([25, 30, 1, 40, 28, 3]);

        expect(lotto.getNumbers()).toStrictEqual([1, 3, 25, 28, 30, 40]);
    });

    test('번호에 특정숫자 확인', () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

        expect(lotto.includes(1)).toBe(true);
        expect(lotto.includes(7)).toBe(false);
    });



});