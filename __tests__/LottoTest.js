import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import App from "../src/App.js";
import WinningLotto from "../src/classes/WinningLotto.js";
import Util from "../src/classes/util.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 클래스 테스트", () => {
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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호 6자리 숫자 생성 테스트", () => {

    const lottoNumbers = Lotto.createNumber();
    const result = lottoNumbers.length;

    expect(result).toBe(6);
  })
  test("로또 번호 맞은 수 만큼 COUNT 값 업데이트 테스트", () => {
    const winningNumber = [3, 4, 5, 6, 1, 2];
    const lottoNumber = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(lottoNumber);
    lotto.compareNumber(winningNumber);
    const result = lotto.COUNT;

    expect(result).toBe(6);
  });

  test("보너스 번호 맞으면 BONUS 속성값 업데이트 테스트", () => {
    const bonusNumber = 3;
    const lottoNumber = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(lottoNumber);
    lotto.compareBonusNumber(bonusNumber);
    const result = lotto.BONUS;

    expect(result).toBe(true);
  });
});

describe("도메인 로직 테스트", () =>{
  test("구매금액을 통해 구매할 복권 갯수 구하는 테스트", () => {
    const money = 8000;
  
    const result = Util.getPurchaseNumber(money);
  
    expect(result).toBe(8);
  });
  
  test("복권 갯수만큼 로또 클래스 생성후 배열에 담아 반환하는 테스트", () => {
    const purchaseNumber = 8;
  
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
  
    const lottoClassesArray = Util.getLottoClasses(purchaseNumber);
    const result = lottoClassesArray.length;
  
    expect(result).toBe(8);
  });
  
  test("구매한 복권들의 클래스 속성을 이용해 랭킹 객체 반환 테스트", () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
  
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
  
    const lottoClassesArray = Util.getLottoClasses(8);
    const winningNumberClass = new WinningLotto(winningNumber, bonusNumber);
    Util.getLottosCount(lottoClassesArray, winningNumberClass);
    const result = Util.getRank(lottoClassesArray);
  
    expect(result).toEqual({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    });
  });
  
  test("랭킹 객체의 값을 이용해 총 당첨금 반환하는 테스트", () => {
    const rank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };
  
    const result = Util.totalPrize(rank);
  
    expect(result).toBe(5000);
  });
  
  test("총 당첨금과 초기 투자비용으로 수익률 소수 첫째자리까지 구하는 테스트", () => {
    const totalPrize = 50000;
    const investMoney = 5000;
  
    const result = Util.rate(totalPrize, investMoney);
  
  
    expect(result).toBe("1000.0");
  });
})
