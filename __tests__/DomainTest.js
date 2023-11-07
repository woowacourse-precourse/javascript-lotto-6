import Domain from "../src/Domain";
import { MissionUtils } from "@woowacourse/mission-utils";


const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
  
      return Promise.resolve(input);
    });
  };
  
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





describe("도메인 클래스 테스트", () => {
    test("로또 번호 출력 테스트", async () => {
        const logSpy = getLogSpy();

        mockRandoms([
            [1, 5, 34, 23, 22, 15],
            [6, 34, 24, 12, 1, 4]
        ]);

        await domain.GetLottoNumbers(2,[]);

        const logs = [
            "[1, 5, 34, 23, 22, 15]",
            "[6, 34, 24, 12, 1, 4]",
        ]
        logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
        })
      
    });
  
    test("로또 결과 출력 테스트", async () => {
        const logSpy = getLogSpy();

        const LOTTOS = [[1,2,3,4,5,6],[7,8,9,10,11,12]];
        const SCORE = [0,0,0,0,0];
        const USERCHOOSENUMBER = [1,2,3,20,21,22];
        const USERBONUSNUMBER = 10;
        const USERSCASH = 2000;
        domain.ScoreSet(LOTTOS,SCORE,USERCHOOSENUMBER,USERBONUSNUMBER);

        const logs = ["총 수익률은 250.0%입니다."];
        domain.Result(SCORE,USERSCASH);
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
            })
    })
    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    

});


const domain = new Domain()