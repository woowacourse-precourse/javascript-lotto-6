export const sortNumbers = (numbers) => numbers.sort((a, b) => a - b);

export const checkNumberType = (value) => /^[0-9]+$/.test(value);
