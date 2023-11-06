import Lotto from "../src/Lotto.js";
import Functions from "../src/Functions.js";

describe("로또 클래스 테스트", () => {
  let functions;
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


});
