import { ERROR_MESSAGES } from "../utils/Messages.js";
import { isNumberLengthValid } from "../utils/Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isNumberLengthValid(numbers)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

  countMatches(tickets, winningNumbers, bonusNumber, ticketPrice) {
    const result = {
      "5등": 0,
      "4등": 0,
      "3등": 0,
      "2등": 0,
      "1등": 0,
      totalSpent: parseInt(ticketPrice),
      totalEarnings: 0,
    };
    tickets.forEach((ticket) => {
  
      const matchedNumbers = ticket.filter((number) =>
        winningNumbers.includes(number)
      );
      const matchedCount = matchedNumbers.length;
  
      if (matchedCount === 6) {
        result["1등"]++;
        result.totalEarnings += 2000000000; 
      } else if (matchedCount === 5 && matchedNumbers.includes(bonusNumber)) {
        result["2등"]++;
        result.totalEarnings += 30000000;
      } else if (matchedCount === 5) {
        result["3등"]++;
        result.totalEarnings += 1500000; 
      } else if (matchedCount === 4) {
        result["4등"]++;
        result.totalEarnings += 50000; 
      } else if (matchedCount === 3) {
        result["5등"]++;
        result.totalEarnings += 5000; 
      }
    });
  
    return result;
  }  
}

export default Lotto;
