import App from '../src/App';
import Lotto from "../src/Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

describe("클래스 테스트", () => {
    test('구매 금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
        //given
        const input = '1300';
        const playerInputMock = jest.fn(() => input);

        //when
        const app = new App(playerInputMock);

        // then
        expect(app.getAmount()).rejects.toThrowError('[ERROR] 입력값이 잘못 되었습니다.');
    });

    test('구매 금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
        //given
        const input = '100';
        const playerInputMock = jest.fn(() => input);

        //when
        const app = new App(playerInputMock);

        // then
        expect(app.getAmount()).rejects.toThrowError('[ERROR] 입력값이 잘못 되었습니다.');
    });
    
    test('구매 금액이 정수가 아니라면 예외가 발생한다.', () => {
        //given
        const input = '1000원';
        const playerInputMock = jest.fn(() => input);

        //when
        const app = new App(playerInputMock);

        // then
        expect(app.getAmount()).rejects.toThrowError('[ERROR] 입력값이 잘못 되었습니다.');
    });

    test('구매 금액에 따른 로또 개수 확인', () => {
        //given
        const input = 4000;
        const playerInputMock = jest.fn(() => input);

        //when
        const app = new App(playerInputMock);
        const result = app.getLottoNumbers(input);

        //then
        expect(result).toHaveLength(4);
    });

    test('로또 번호는 오름차순으로 출력 확인', () => {
        //given
        mockRandoms([
            [ 43, 5, 6, 2, 1, 7 ]
        ]);

        //when
        const app = new App();
        const result = app.printRandomLottoNumbers();

        //then
        expect(result).toEqual([1, 2, 5, 6, 7, 43]);
    });

    test('보너스 번호와 입력한 로또 번호가 중복일시 예외가 발생한다.', () => {
        //given
        const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
        const input = 6;

        //when
        const playerInputMock = jest.fn(() => input);
        const app = new App(playerInputMock);

        //then
        expect(app.getBonusNumber(winningNumber)).rejects.toThrowError('[ERROR] 중복된 값이 있습니다.');
    });

    test('보너스 번호가 1~45까지의 숫자가 아닐경우 예외가 발생한다.', () => {
        //given
        const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
        const input = 54;

        //when
        const playerInputMock = jest.fn(() => input);
        const app = new App(playerInputMock);

        //then
        expect(app.getBonusNumber(winningNumber)).rejects.toThrowError('[ERROR] 보너스 번호는 1부터 45 사이의 한개의 정수여야 합니다.');
    });

    test('보너스 번호가 한개가 아닐경우 발생한다.', () => {
        //given
        const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
        const input = '2,5';

        //when
        const playerInputMock = jest.fn(() => input);
        const app = new App(playerInputMock);

        //then
        expect(app.getBonusNumber(winningNumber)).rejects.toThrowError('[ERROR] 보너스 번호는 1부터 45 사이의 한개의 정수여야 합니다.');
    });

    test('보너스 번호가 정수가 아닐경우 예외가 발생한다.', () => {
        //given
        const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
        const input = 2.5;

        //when
        const playerInputMock = jest.fn(() => input);
        const app = new App(playerInputMock);

        //then
        expect(app.getBonusNumber(winningNumber)).rejects.toThrowError('[ERROR] 보너스 번호는 1부터 45 사이의 한개의 정수여야 합니다.');
    });

    test('로또 당첨 결과 확인', () => {
        //given
        const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
        const lottoNumbersArray = ([
            [1, 2, 3, 8, 9, 10],
            [1, 2, 3, 8, 9, 10],
            [1, 2, 3, 4, 9, 10]
        ]);
        const intBonusNumber = 7;

        //when
        const app = new App();
        const result = app.getResult(winningNumber, lottoNumbersArray, intBonusNumber);

        // then
        expect(result).toEqual({"all": 0, "bonus": 0, "five": 0, "four": 1, "three": 2});
    });

    test('로또 당첨 수익률 계산', () => {
        //given
        const amount = 8000;
        const lottoResult = ({"all": 0, "bonus": 0, "five": 0, "four": 0, "three": 1});

        //when
        const app = new App();
        const result = app.getProfitRate(amount, lottoResult);

        // then
        expect(result).toEqual('62.5%');
    });
});
