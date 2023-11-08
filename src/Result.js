import { MONEY } from './constants';

class Result {
	#sameList = [3, 4, 5, 6];
	constructor(bonus, map, numbers) {
		this.amountList = this.getAmountArrayAndBonus(bonus, map, numbers)[0];
		this.#sameList;
		this.bonusAmount = this.getAmountArrayAndBonus(bonus, map, numbers)[1];
	}
	getAmountArrayAndBonus(bonus, map, numbers) {
		const amountArr = [];
		let bonusAmount = 0;
		map.forEach((array) => {
			let amount = 0;
			// console.log('numbers', numbers);
			for (let i = 0; i < array.length; i += 1) {
				if (numbers.includes(array[i])) {
					amount += 1;
					continue;
				}
			}
			amountArr.push(amount);
			// console.log('amountArr', amountArr);
			if (amount === 5 && numbers.includes(bonus)) {
				bonusAmount = 1;
			}
		});
		// console.log(amountArr, bonusAmount);
		return [amountArr, bonusAmount];
	}
	getResultArr() {
		const resultArr = [];
		for (const s of this.#sameList) {
			let answer = 0;
			for (const a of this.amountList) {
				if (s == a) {
					answer++;
				}
			}
			resultArr.push(answer);
		}
		return resultArr;
	}
	getProfitsRate(money, result) {
		// console.log('money: ', money);
		// console.log('result: ', result);
		const sum =
			result[0] * MONEY.THREE +
			result[1] * MONEY.FOUR +
			result[2] * MONEY.FIVE +
			result[3] * MONEY.SIX +
			this.bonusAmount * MONEY.BONUS;
		// console.log('sum: ', sum);
		const profitsRate = (sum / money) * 100;
		// console.log(profitsRate);
		return profitsRate;
	}
	getBonusAmount() {
		return this.bonusAmount;
	}
}
export default Result;
