import { Console } from '@woowacourse/mission-utils';

export default async function retryForError(inputFunction) {
  try {
    return await inputFunction();
  } catch (error) {
    Console.print(error.message);
    return retryForError(inputFunction);
  }
}
