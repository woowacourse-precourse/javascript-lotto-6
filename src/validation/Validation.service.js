const MIN = 1;
const MAX = 45;
const FULL_NUMBER_LENGTH = 6;

const ERROR_MESSAGES = {
  isNaN: '[ERROR] 입력한 금액이 숫자가 아닙니다.',
  notDivided: '[ERROR] 1000 단위의 금액을 입력하세요.',
  overRange: '[ERROR] 숫자는 1부터 45사이여야 합니다.',
  countError: '[ERROR] 티켓의 번호는 개수가 6개로 이루어져야 합니다.',
  notUnique: '[ERROR] 티켓의 번호는 중복되면 안됩니다.',
  notSorted: '[ERROR] 티켓의 번호는 오름차순으로 정렬되어야 합니다.',
};

export default class ValidationService {
  isNumber(num) {
    if (!Number.isNaN(+num)) {
      throw new Error(ERROR_MESSAGES.isNaN);
    }
  }

  isDividedBy1000(num) {
    const canBeDivided = +num > 0 && +num % 1000 === 0;
    if (!canBeDivided) {
      throw new Error(ERROR_MESSAGES.notDivided);
    }
  }

  isInRange(ticket) {
    const inRange =
      ticket.length ===
      ticket.filter((num) => {
        return num >= MIN && num <= MAX;
      });

    if (!inRange) {
      throw new Error(ERROR_MESSAGES.overRange);
    }
  }

  hasSixNumbers(ticket) {
    if (ticket.length !== FULL_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGES.countError);
    }
  }

  isUnique(ticket) {
    const uniqueArray = [];
    ticket.forEach((num) => {
      if (uniqueArray.includes(num)) {
        throw new Error(ERROR_MESSAGES.notUnique);
      }
      uniqueArray.push(num);
    });
  }

  isSorted(ticket) {
    const sortedTickets = ticket.toSorted((a, b) => a - b);
    ticket.forEach((num, index) => {
      if (sortedTickets[index] != num) {
        throw new Error(ERROR_MESSAGES.notSorted);
      }
    });
  }
}
