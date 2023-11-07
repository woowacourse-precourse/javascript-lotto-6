import Calculate from '../src/model/Calculate.js';

describe("계산 클래스 테스트", () => {
    let calculate;

    beforeEach(() => {
        calculate = new Calculate();
    })

    describe("로또 번호와 비교한 후 맞힌 경우 테스트", () => {
        test("로또 번호가 3개 이하 맞힌 테스트", () => {
            const array = [
                [1, 2, 3, 4, 5, 6],
            ];
            const numbers = [1, 7, 8, 9, 10, 11];  // 1만 맞힘
            
            calculate = new Calculate(1000, array, numbers, 45);
            expect(calculate.count()).toEqual([]);
        })

        test("로또 번호가 3개와 4개 각각 1개씩 맞힌 테스트", () => {
            const array = [
                [1, 2, 3, 4, 5, 6],  // 4개
                [1, 2, 3, 7, 8, 9],  // 3개
                [10, 11, 12, 13, 14, 15],
            ];
            const numbers = [1, 2, 3, 4, 43, 44];
            
            calculate = new Calculate(1000, array, numbers, 45);
            expect(calculate.count()).toContain(4, 3);
        });
    
        test("5개와 보너스 번호를 맞힌 경우의 테스트", () => {
            const array = [
                [1, 2, 3, 4, 5, 6],
                [7, 8, 9, 10, 11, 12],
                [10, 11, 12, 13, 14, 15],
            ]
            const numbers = [1, 2, 3, 4, 5, 45];
            const bonus = 6;
            
            calculate = new Calculate(1000, array, numbers, bonus);
            expect(calculate.count()).toContain('bonus');
        });
    })

    describe("배열 내에 같은 값의 개수 세기 테스트(객체로 변환)", () => {
        test("0 개를 맞힌 경우 테스트", () => {
            const array = [];
    
            expect(calculate.collect(array)).toEqual({});
        });

        test("1 개를 맞힌 경우 테스트", () => {
            const array = [4];
    
            expect(calculate.collect(array)).toEqual({
                '4': 1
            });
        });

        test("여러 개를 맞힌 경우 테스트", () => {
            const array = ['bonus', 5, 5, 4];
    
            expect(calculate.collect(array)).toEqual({
                'bonus': 1,
                '5': 2,
                '4': 1
            });
        });
    })

    describe("수익률 계산 테스트", () => {
        beforeEach(() => {
            const amount = 3000;
            calculate = new Calculate(amount);
        })

        test("0개 맞힌 경우의 테스트", () => {
            const object = {};
            
            expect(calculate.rate(object)).toEqual("0.0");
        });

        test("1개 맞힌 경우의 테스트", () => {
            const object = {
                '5': 1,
            };
            
            expect(calculate.rate(object)).toEqual("50000.0");
        });

        test("다수 맞힌 경우의 테스트", () => {
            const object = {
                '4': 2,
                '3': 1
            };
            
            expect(calculate.rate(object)).toEqual("3500.0");
        });
    })
})