import bonusNumberValidService from './validate/bonusNumberValidService.js';

export default async function getBonusNumber(bonusInput, winningNumber) {
  try {
    const bonusNumber = Number(bonusInput);
    await bonusNumberValidService(bonusNumber, winningNumber);
    return bonusNumber;
  } catch (error) {
    throw new Error(error.message);
  }
}
