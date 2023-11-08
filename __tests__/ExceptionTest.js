import { MissionUtils } from "@woowacourse/mission-utils";
import LottoService from "../src/LottoService.js";
import Lotto from "../src/LottoService.js";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

describe("에외처리 테스트", () => {
  test("구입금액은 숫자 형식이어야합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateMoney(Number("1000j"))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 구입금액은 숫자 형식이어야 합니다.`)
    
  });
  test("구입금액은 0 보다 커야합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateMoney(Number(-1000))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 구입금액은 0 보다 커야합니다.`)
    
  });
  test("구입금액은 1000원 단위로 입력해야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateMoney(Number(1001))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 구입금액은 1000원 단위로 입력해야 합니다.`)
    
  });

  test("보너스 번호는 숫자 형식이어야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateBonusNumber(Number("1000j"))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 보너스 번호는 숫자 형식이어야 합니다.`)
    
  });
  test("보너스 숫자의 범위는 1 ~ 45 사이여야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateBonusNumber(Number(46))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 보너스 숫자의 범위는 1 ~ 45 사이여야 합니다.`)
    
  });
  test("보너스 번호는 정수 형식이어야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateBonusNumber(Number(7.7))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 보너스 번호는 정수 형식이어야 합니다.`)
    
  });
  test("보너스 번호는 로또 번호와 중복되면 안됩니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.setNumber([1,2,3,4,5,6])
    lottoService.validateBonusNumber(Number(4))

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.`)
    
  });
  test("로또 번호는 6개여야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateNumbers([1,2,3,4,5])

    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 로또 번호는 6개여야 합니다.`)
    
  });
  test("로또 번호는 숫자 형식이어야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateNumbers([1,2,3,4,5, Number('k')])


    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 로또 번호는 숫자 형식이어야 합니다.`)
    
  });
  test("로또 번호는 정수 형식이어야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateNumbers([1,2,3,4,5,"k"])


    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 로또 번호는 정수 형식이어야 합니다.`)
    
  });
  test("로또 번호는 1에서 45사이여야 합니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateNumbers([1,2,3,4,5,56])


    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 로또 번호는 1에서 45사이여야 합니다.`)
    
  });
  test("로또 번호는 중복되면 안됩니다.", () => {
    
    const logSpy = getLogSpy();


    const lottoService = new LottoService();
    lottoService.validateNumbers([1,2,3,4,5,5])


    expect(logSpy).toHaveBeenCalledWith(`Error: [ERROR] 로또 번호는 중복되면 안됩니다.`)
    
  });
  
});
