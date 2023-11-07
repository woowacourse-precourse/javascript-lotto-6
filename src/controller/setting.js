import { print } from "../view/print";
import { readLineAsync } from "../view/readLineAsync";
import { MESSAGE } from "../constant/MESSAGE";
import Money from "../model/Money";


export const setting = async () => {
	let money;
	while(true) {
		try{
			const inputMoney = await readLineAsync(MESSAGE.INPUT_AMOUNT); // 구입금액을 입력해 주세요.
			money = new Money(inputMoney);
			break;
		} catch(error) {
			print(error.message);
		}
	}

	const inputMoney = money.getMoney();
	const progressNumber = money.getMoney() / 1000;

	return {inputMoney, progressNumber};

}