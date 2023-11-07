import { Console } from '@woowacourse/mission-utils';

const Input = {
	askUser: async (question) => {
		const reply = await Console.readLineAsync(question);
		return reply;
	},

	askUserUntilValid: async (question, validatorCallBack = () => true) => {
		let reply = await Input.askUser(question);
		const isReplyValid = validatorCallBack(reply);
		if (!isReplyValid) {
			reply = await Input.askUserUntilValid(
				question,
				validatorCallBack,
			);
		}
		return reply;
	},
};
export default Input;
