import { Console } from '@woowacourse/mission-utils';

class Input {
	static async askUser(question) {
		const reply = await Console.readLineAsync(question);
		return reply;
	}

	static async askUserUntilValid(question, validatorCallBack = () => true) {
		let isNotValid = true;
		let reply = '';
		while (isNotValid) {
			try {
				reply = await Input.askUser(question);

				validatorCallBack(reply);
				isNotValid = false;
			} catch (err) {
				Console.print(err.message);
			}
		}
		Console.print('');
		return reply;
	}
}
export default Input;
