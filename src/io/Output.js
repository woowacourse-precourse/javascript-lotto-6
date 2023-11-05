import { 
    RESULT_MESSAGES,
    MATCH,
} from "../utils/Define";

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