import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { DIVIDER, LOTTO, MONEY } from './constants';

class Computer {
	static calculateAmount(money) {
		return money / LOTTO.PRICE;
	}
	static createRandomArraysMap(amount) {
		const map = new Map();
		for (let i = 0; i < amount; i += 1) {
			const numbersArr = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH);
			Console.print(numbersArr);
			map.set(i, numbersArr);
		}
		return map;
	}
	static createAnswerArray(input) {
		const inputArr = input.split(DIVIDER);
		const lotto = new Lotto(inputArr);
		const numbers = lotto.getNumbers();
		return numbers;
	}
	static getAmountArrayAndBonus(map, numbers, bonus) {
		const amountArr = [];
		let bonusAmount = 0;
		map.forEach((array) => {
			let amount = 0;
			for (let i = 0; i < array.length; i += 1) {
				if (numbers.includes(array[i])) {
					amount += 1;
					continue;
				}
			}
			amountArr.push(amount);
			if (amount === 5 && numbers.includes(bonus)) {
				bonusAmount = 1;
			}
		});
		return [amountArr, bonusAmount];
	}
	static getResultArr(amountArr) {
		const result = [];
		const sameList = [3, 4, 5, 6];
		for (const s of sameList) {
			let answer = 0;
			for (const a of amountArr) {
				if (s == a) {
					answer++;
				}
			}
			result.push(answer);
		}
		return result;
	}
	static calculateProfitsRate(result, bonusAmount, money) {
		const sum =
			result[0] * MONEY.THREE +
			result[1] * MONEY.FOUR +
			result[2] * MONEY.FIVE +
			result[3] * MONEY.SIX +
			bonusAmount * MONEY.BONUS;
		const profitsRate = (sum / money) * 100;
		return profitsRate;
	}
}

export default Computer;
