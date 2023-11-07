import { Console } from '@woowacourse/mission-utils';

const Input = {
	askUser: async (question) => {
		const reply = await Console.readLineAsync(question);
		return reply;
	},

	askUserUntilValid: async (question, validatorCallBack = () => true) => {
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
	},
};
export default Input;
