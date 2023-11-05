import { Console, Random } from '@woowacourse/mission-utils';
class App {
	async play() {
		const money = Console.readLineAsync('구입금액을 입력해주세요'); // 구입금액을 입력해주세요 출력 및 인풋받기
		Console.print(money); // 받은 금액 출력하기
		Console.print(''); // \n
		Console.print(money / 1000); //amount 개를 구매했습니다.
		Console.print(Random.pickUniqueNumbersInRange(1, 45, 6)); // *amount
		Console.print('')
		const input = Console.readLineAsync('당첨 번호를 입력해주세요.');
		const numbers = input.split(',');
		Console.print(...numbers);
		Console.print('');
		const bonusNumber = Console.readLineAsync('보너스 번호를 입력해주세요.');
		Console.print(bonusNumber);
		Console.print('')
		Console.print('당첨 통계\n---')//당첨 통계 출력 , --- 출력
		Console.print('3개 일치 (5,000원) - 0개 출력')//3개 일치 (5,000원) - 0개 출력
		Console.print('4개 일치 (50,000원) - 0개 출력')	//4개 일치 (50,000원) - 0개 출력
		Console.print('5개 일치 (1,500,000원) - 0개  출력')//5개 일치 (1,500,000원) - 0개  출력
		Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  출력')//5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  출력
		Console.print('6개 일치 (2,000,000,000원) - 0개  출력')//6개 일치 (2,000,000,000원) - 0개  출력
		Console.print('총 수익률 nn%입니다')//총 수익률 nn%입니다. 출력
	}
}

export default App;
