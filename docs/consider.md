# 고려사항 및 이슈

## 1. 테스트 코드 덕분에 빠르게 실수 찾기

(주의 : 1차 구현은 쓰레기라도 동작하게 만드는게 우선이라 리팩터링 되지 않은 부분이 많습니다.)

테스트를 하는데 계속 특정한 곳에서 에러가 발생하였습니다.
바로 `validate`의 `numbers.every(isNumberInValidScope)` 이 부분입니다.

`isNumberInValidScope` 함수는 인수로 들어오는 값이 특정 범위내에 있는 숫자인지 유효성을 검사하는 역할을 합니다. 그런데 확장성을 위해 범위의 시작점과 끝점도 매개변수로 설정해 놓았습니다.

하지만 놓친게 하나 있습니다.

```js
export default function isNumberInValidScope(input, start = 1, end = 45) {
  return input >= start && input <= end;
}
```

위 위코드는 `isNumberInValidScope`의 코드인데 매개변수가 3개입니다.
즉 범위가 바뀌면 인수로 넣어주는 `start`와 `end`의 값을 변경해주면 됩니다. (지금은 일단 디폴트 값으로 해놓았습니다. 2차 구현때 인수로 직접 넣어줄 예정)
하지만 여기서 놓친게 있습니다. 바로 `every` `함수는 callbackFn`을 첫 번째 인수로 받는데 그 `callbackFn`은 [3개의 인수를 받습니다.](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

- element : 배열에서 처리되는 현재 요소
- index : 처리되는 현재 요소의 인덱스
- array : every()를 호출한 배열

따라서 3개의 인수를 받는 `isNumberInValidScope`는 만약 예시로 `numbers`가 `[1,2,3,4,5,6]`이라면 첫 번째 인수는 `1`이 되고 두 번째 인수는 `0`이되고 세 번째 인수는 `[1,2,3,4,5,6]`이 되어서 제가 의도한 대로 동작하지 않게 됩니다. 이 부분을 테스트 코드를 만들고 테스트 할 때 발견되었고 다행히 고칠 수 있게 되었습니다. 그래서 현재는 `numbers.every((number)  => isNumberInValidScope(number))`로 수정되어 있습니다.

기능을 구현하면서 놓쳤던 부분이고 테스트 코드가 아니였다면 정말 시간을 오래사용해서 발견했을 것 같습니다.
조금 시간이 더 걸려도 테스트 코드가 꼭 필요하다는 걸 다시 한 번 느꼈습니다.

```js
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (!numbers.every(isNumber)) throw new Error('[ERROR] 숫자이외의 문자가 존재합니다.');
    if (isDuplication(numbers)) throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    if (!numbers.every(isNumberInValidScope)) {
      throw new Error('[ERROR] 숫자 1~45 만 입력이 가능합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static of(numbers) {
    return new Lotto(numbers);
  }

  checkUniqueNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(`[ERROR] ${number}는 당첨 번호에 이미 포함되어 있습니다.`);
    }
  }
}

export default Lotto;
```
