import { Console } from "@woowacourse/mission-utils";
import { 
    PRIZE_MAP,
    RESULT_MESSAGES,
    MATCH,
    ZERO,
    EARNING_MESSAGES,
    BUYING_COUNT_MESSAGE,
    JOIN_WITH_COMMA,
} from "../utils/Define";
import { calculateEarnings } from "../utils/Calculate.js";

const printWinningHead = () => {
    Console.print(RESULT_MESSAGES.WINNING_HEAD);
    Console.print(RESULT_MESSAGES.DIVIDING_LINE);
};

const printMatchResult = (matchCount, prize, count) => {
    const formattedPrize = prize.toLocaleString();
    const message = matchCount === MATCH.FIVE_BONUS
        ? `${RESULT_MESSAGES.FIVE_BOUNS}${formattedPrize}${RESULT_MESSAGES.SECOND}${count}${RESULT_MESSAGES.COUNT}`
        : `${matchCount}${RESULT_MESSAGES.FIRST}${formattedPrize}${RESULT_MESSAGES.SECOND}${count}${RESULT_MESSAGES.COUNT}`;
    Console.print(message);
};

const printAllMatchResults = (results) => {
    Object.keys(results).forEach(matchCount => {
        const prize = PRIZE_MAP[matchCount] || ZERO;
        const count = results[matchCount];
        printMatchResult(matchCount, prize, count);
    });
};

const displayResults = (results) => {
    printWinningHead();
    printAllMatchResults(results);
};

const displayEarnings = (results, purchaseAmount) => {
    const earnings = calculateEarnings(results, purchaseAmount);
    Console.print(`${EARNING_MESSAGES.FIRST}${earnings.toLocaleString()}${EARNING_MESSAGES.SECOND}`);
};

export const printNumberOfLottos = (numberOfLottos) => {
    Console.print(`${numberOfLottos}${BUYING_COUNT_MESSAGE}`);
};

export const printLottoNumbers = (lotto) => {
    const numbers = lotto.getNumbers().join(JOIN_WITH_COMMA);
    Console.print(`[${numbers}]`);
};

export const displayGameResults = (results, purchaseAmount) => {
    displayResults(results);
    displayEarnings(results, purchaseAmount);
};