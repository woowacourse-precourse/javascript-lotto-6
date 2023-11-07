import { Console } from '@woowacourse/mission-utils';

class Input {
	#console = Console;

	async askUser(question) {
		const reply = await this.#console.readLineAsync(question);
		return reply;
	}

	async askUserUntilValid(question, validatorCallBack = () => true) {
		let reply = await this.askUser(question);
		const isReplyValid = validatorCallBack(reply);
		if (!isReplyValid) {
			reply = await this.askUserUntilValid(
				question,
				validatorCallBack,
			);
		}
		return reply;
	}
}
export default Input;
