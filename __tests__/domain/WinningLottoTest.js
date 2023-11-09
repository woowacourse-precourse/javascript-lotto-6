/* eslint-disable */
import WinningLotto from "../../src/domain/WinningLotto.js";
import {ERROR_MESSAGE} from "../../src/utils/Define.js";

describe('당첨 로또 클래스 테스트', () => {
    const inputCases= [
        {input: [[1, 2, 3, 4, 5, 6], 1], expected: ERROR_MESSAGE.notUniqueBonusNumber},
        {input: [[1, 2, 3, 4, 5, 5], 10], expected: ERROR_MESSAGE.notUniqueNumbers},
        {input: [[1,2,3,4],10],expected: ERROR_MESSAGE.notNumberCountSix},
        {input: [[-1,2,3,4,5,6],10] ,expected: ERROR_MESSAGE.outOfRange},
    ];
    test.each(inputCases)(
        '당첨 로또와 보너스 번호가 $input일때, $expected 에러가 발생해야한다.',
        ({input, expected})=>{
            expect(()=> {
                new WinningLotto({numbers: input[0],bonusNumber: input[1]});
            }).toThrow(expected);
        }
    )
});
