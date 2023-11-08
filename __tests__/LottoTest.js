import Lotto from "../src/Lotto.js";
import Functions from "../src/Functions.js";
import Inoutput from "../src/Inoutput.js";
import { Console } from "@woowacourse/mission-utils";

describe("로또 클래스 테스트", () => {
  let functions;
  let prizeTable;
  let resultCounts;
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

   beforeEach(() => {
     functions = new Functions();
       prizeTable = [
         { count: 3, prize: 5000 },
         { count: 4, prize: 50000 },
         { count: 5, prize: 1500000 },
         { count: 6, prize: 2000000000 },
       ];
       resultCounts = {
         3: 2,
         4: 1,
         5: 3,
         6: 1,
       };
   });

   test("금액에 맞게 로또가 발행 및 예외처리 ", ()=> {
    const validAmount = 5000;
    const invalidAmout =5500;
    const validLottoList = functions.buyLottoByAmount(validAmount);
    expect(validLottoList.length).toBe(validAmount / 1000);

    expect(()=> {
      functions.buyLottoByAmount(invalidAmout);
    }).toThrow("[ERROR]")
   });

   test("로또 번호가 1~45 사이에 있는지 확인",()=> {
    const amout = 2000;
    const lottoList = functions.buyLottoByAmount(amout);

    for(const lottoNumbers of lottoList){
      for(const number of lottoNumbers){
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      }
    }
   });
   test("당첨 번호의 수가 올바르지 않을경우 예외가 발생한다. ",async ()=> {
    const invalidInput = "1,2,3,4,5";
    const validInput = "1,2,3,4,5,6"
    jest.spyOn(Console,'readLineAsync')
    .mockReturnValueOnce(Promise.resolve(invalidInput))
    .mockReturnValueOnce(Promise.resolve(validInput));
    await expect(Inoutput.getWinningNumber()).resolves.not.toThrow("[ERROR]")
   });

   test("유효하지 않은 당첨번호를 입력할경우 예외가 발생한다.",async ()=> {
    const invalidInput = "1,2,3,4,5,47";
    const validInput = "1,2,3,4,5,6";
    jest.spyOn(Console, "readLineAsync")
      .mockReturnValueOnce(Promise.resolve(invalidInput))
      .mockReturnValueOnce(Promise.resolve(validInput));
    await expect(Inoutput.getWinningNumber()).resolves.not.toThrow("[ERROR]");
   });

   test("중복된 당첨번호를 입력할 경우 예외가 발생한다.",async ()=> {
    const invalidInput = "1,2,3,4,5,5";
    const validInput = "1,2,3,4,5,6";
    jest.spyOn(Console, "readLineAsync")
      .mockReturnValueOnce(Promise.resolve(invalidInput))
      .mockReturnValueOnce(Promise.resolve(validInput));
    await expect(Inoutput.getWinningNumber()).resolves.not.toThrow("[ERROR]");
   });
   
   test("보너스 번호가 유효하지 않은 번호를 입력할 경우 예외가 발생한다 ",async ()=> {
     const invalidInput = "46";
     const validInput = "7";
     jest.spyOn(Console, "readLineAsync")
       .mockReturnValueOnce(Promise.resolve(invalidInput))
       .mockReturnValueOnce(Promise.resolve(validInput));

     const winningNumbers = [1,2,3,4,5,6];
     await expect(Inoutput.getBounsNumber(winningNumbers)).resolves.not.toThrow("[ERROR]");  
   })

   test("보너스 번호가 중복된 로또번호 입력할 경우 예외가 발생한다 ", async () => {
     const invalidInput = "6";
     const validInput = "7";
     jest.spyOn(Console, "readLineAsync")
       .mockReturnValueOnce(Promise.resolve(invalidInput))
       .mockReturnValueOnce(Promise.resolve(validInput));

     const winningNumbers = [1, 2, 3, 4, 5, 6];
     await expect(Inoutput.getBounsNumber(winningNumbers)).resolves.not.toThrow("[ERROR]");
   });

  

   test("로또 당첨 순위 및 보너스 볼 당첨 테스트  ",()=> {
     // 6개 일치, 보너스 볼 일치
     expect(functions.calculateResult(6, true)).toBe(5);
     // 6개 일치, 보너스 볼 불일치
     expect(functions.calculateResult(6, false)).toBe(6);
     // 5개 일치
     expect(functions.calculateResult(5, false)).toBe(5);
     // 4개 일치
     expect(functions.calculateResult(4, false)).toBe(4);
     // 3개 일치
     expect(functions.calculateResult(3, false)).toBe(3);
     // 일치하지 않음
     expect(functions.calculateResult(2, false)).toBe(0);
   });

   test("로또 당첨 결과 테스트 ",()=> {
    const lottoNumber =[
      [1,2,3,4,5,6],
      [10,11,12,13,14,15],
      [1,2,3,4,5,7]
    ];

    const winningNumbers =[1,2,3,4,5,6];
    const bonusNumber = 7;

    const expectResult = [6,0,5];

    const results = functions.calculateResults(lottoNumber, winningNumbers, bonusNumber);
    expect(results).toEqual(expectResult);
   })

   test("상금 테이블 테스트",()=> {
    const expectedOutput = [
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 3개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const result = functions.generatePrizeStrings(prizeTable, resultCounts);
    expect(result).toEqual(expectedOutput);
   })

test("총 상금 계산 테스트 ",()=> {
  const totalPrize = functions.calculateTotalPrize(prizeTable, resultCounts);
  const expectedTotalPrize =(2 * 5000) + (1 * 50000) + (3 * 1500000) + (1 * 2000000000);
  expect(totalPrize).toEqual(expectedTotalPrize);
})

 test("수익률 형식 테스트 ", () => {
   const profitMargin = 0.1523; 
   const result = functions.ProfitMargin(profitMargin);
   const expectedPattern = /^\d+\.\d+%$/;
   expect(result).toMatch(expectedPattern);
 });

});
