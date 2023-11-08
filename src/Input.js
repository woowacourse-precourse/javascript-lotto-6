import { Console } from '@woowacourse/mission-utils';

class Input {
	static async askUser(question) {
		const reply = await Console.readLineAsync(question);
		return reply;
	}

	static async askUserUntilValid(question, validatorCallBack = () => true) {
		let reply = await Input.askUser(question);
		try {
			validatorCallBack(reply);
		} catch (err) {
			reply = await Input.askUserUntilValid(
				question,
				validatorCallBack,
			);
		}

		return reply;
	}
}
export default Input;
