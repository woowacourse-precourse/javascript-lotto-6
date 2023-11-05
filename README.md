# [우아한테크코스] 3주차 미션 - 로또

: 각 요구사항의 규칙에 맞게 기능 구현을 해내는 미션 프로젝트.

---

# 📌 3가지 요구사항

## 기능 요구사항

- 로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.

```
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
```

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

---

### 입출력 요구사항

**입력**

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- 보너스 번호를 입력 받는다.

**출력**

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬한다.
- 당첨 내역을 출력한다.
- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

**최종 출력**

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

---

## 기능 요구사항 구현 정리

**입력구현**

- 로또 구입 금액을 입력 받는다.
  - 구입 금액은 1,000원 단위로 입력 받는다.
  - 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
    - 구입 금액에 해당하는 만큼 로또를 발행해야 함.
- 당첨 번호를 입력 받는다.
  - 6자리이며, 쉼표(,)를 기준으로 구분한다.
  - 로또 번호의 숫자 범위는 1~45까지이다.
  - 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 보너스 번호를 입력 받는다.
  - 하나의 보너스 번호만 입력 받는다.

**출력구현**

- 발행한만큼의 로또 수량 및 번호를 컴퓨터에 출력받는다.
  - 로또 번호는 오름차순으로 정렬돼있다.
  - 로또 번호의 숫자 범위는 1~45까지이다.
  - 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 내력을 출력한다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

---

## 프로그래밍 요구 사항

- Node.js 18.17.1 버전에서 실행 가능해야 한다. Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.
- 프로그램 실행의 시작점은 App.js의 play 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.
- package.json을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다. 테스트가 실패할 경우 0점 처리한다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.

### 미션 추가 요구사항

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
  - 단위 테스트 작성이 익숙하지 않다면 **tests**/LottoTest.js를 참고하여 학습한 후 테스트를 구현한다.

### 피드백 메일 추가 요구사항

- 기능 목록을 업데이트한다

  - README.md 파일에 작성하는 기능 목록은 기능 구현을 하면서 변경될 수 있다. 시작할 때 모든 기능 목록을 완벽하게 정리해야 한다는 부담을 가지기보다 기능을 구현하면서 문서를 계속 업데이트한다. 죽은 문서가 아니라 살아있는 문서를 만들기 위해 노력한다.

- 값을 하드 코딩하지 않는다.
  - 문자열, 숫자 등의 값을 하드 코딩하지 마라. 상수를 만들고 이름을 부여해 이 변수의 역할이 무엇인지 의도를 드러낸다.
- 구현 순서도 코딩 컨벤션이다.
  - 클래스는 필드, 생성자, 메서드 순으로 작성한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.

  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.

- 테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리해본다.
  - 단지 기능을 점검하기 위한 목적으로 테스트를 작성하는 것은 아니다. 테스트를 작성하는 과정을 통해서 나의 코드에 대해 빠르게 피드백을 받을 수 있을 뿐만 아니라 학습 도구(학습테스트를 통해 JUnit 학습하기.pdf)로도 활용할 수 있다. 이런 경험을 통해 테스트에 대해 어떤 유용함을 느꼈는지 알아본다.

---

## 과제 진행 요구사항

- 미션은 javascript-lotto-6 저장소를 Fork & Clone해 시작한다.
- 기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 docs/README.md에 정리한 기능 목록 단위로 추가한다.
  - 커밋 메시지 컨벤션 가이드를 참고해 커밋 메시지를 작성한다.
- 과제 진행 및 제출 방법은 프리코스 과제 제출 문서를 참고한다.
