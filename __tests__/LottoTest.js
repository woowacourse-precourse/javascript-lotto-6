import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
  
  test("hasNumber 테스트",()=>{
    const lotto = new Lotto([1,2,3,4,5,6]);
    expect(lotto.hasNumber(1)).toEqual(true);
    expect(lotto.hasNumber(7)).toEqual(false);
  })
});

describe("App.js 메서드 단위 테스트",()=>{
  test("constructor 테스트",()=>{
    const app = new App();
    expect(app.winningNumbers).toEqual([]);
    expect(app.bonusNumber).toEqual(0);
  })
  test("validateMoney 테스트",()=>{
    const app = new App();
    expect(app.validateMoney(1000)).toEqual(true);
    expect(app.validateMoney(1001)).toEqual(undefined);
    expect(app.validateMoney(0)).toEqual(undefined);
    expect(app.validateMoney(-1)).toEqual(undefined);
  })
  test("publishLotto 테스트",()=>{
    const app = new App();
    const lottos = app.publishLotto(1000);
    expect(lottos.length).toEqual(1);
    expect(lottos[0].getNumbers().length).toEqual(6);
  })
  test("validateNumbers 테스트",()=>{
    const app = new App();
    expect(app.validateNumbers([1,2,3,4,5,6])).toEqual(true);
    expect(app.validateNumbers([1,2,3,4,5,5])).toEqual(undefined);
    expect(app.validateNumbers([1,2,3,4,5,0])).toEqual(undefined);
    expect(app.validateNumbers([1,2,3,4,5,46])).toEqual(undefined);
  })
  test("validateBonusNumber 테스트",()=>{
    const app = new App();
    app.winningNumbers = [1,2,3,4,5,6];
    expect(app.validateBonusNumber(7)).toEqual(true);
    expect(app.validateBonusNumber(6)).toEqual(undefined);
    expect(app.validateBonusNumber(0)).toEqual(undefined);
    expect(app.validateBonusNumber(46)).toEqual(undefined);
  })
  test("countMatchingNumbers 테스트",()=>{
    const app = new App();
    app.winningNumbers = [1,2,3,4,5,6];
    const lotto = new Lotto([1,2,3,4,5,6]);
    expect(app.countMatchingNumbers(lotto)).toEqual(6);
    app.winningNumbers = [1,2,3,4,5,7];
    expect(app.countMatchingNumbers(lotto)).toEqual(5);
  })
  test("computeRank 테스트",()=>{
    const app = new App();
    app.bonusNumber = 7;
    const lotto = new Lotto([1,2,3,4,5,6]);
    app.winningNumbers = [1,2,3,4,5,6];
    expect(app.computeRank(lotto)).toEqual("1등");
    // app.winningNumbers = [1,2,3,4,5,7];
    // expect(app.computeRank(lotto)).toEqual("2등");
    app.winningNumbers = [1,2,3,4,5,8];
    expect(app.computeRank(lotto)).toEqual("3등");
    app.winningNumbers = [1,2,3,4,7,8];
    expect(app.computeRank(lotto)).toEqual("4등");
    app.winningNumbers = [1,2,3,7,8,9];
    expect(app.computeRank(lotto)).toEqual("5등");
    app.winningNumbers = [1,2,7,8,9,10];
    expect(app.computeRank(lotto)).toEqual("꽝");
  });
})
