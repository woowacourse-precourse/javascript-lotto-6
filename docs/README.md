# 우테코 3주차 미션

## 목적

우아한 테크 코스 미션용 과제(3주차)

## 설치 및 실행 방법

```shell
git clone https://github.com/thumbthing/javascript-lotto-6.git thumbthing
npm install
node index.js
```

## 요구사항

1. 함수의 길이가 15라인을 넘어가지 않도록 구현
2. 함수가 한가지 기능만을 담당하도록 구현
3. else를 지양
4. 단위 테스트를 구현
5. 핵심 로직 / UI 담당 코드를 분리

## 기타


## 프로젝트 구조

```shell

```

## 기능

### input handler

입력: 금액
조건:  
1000으로 나눴을때 0이 아닐 경우 예외처리

입력: 당첨 번호
조건:  
중복된 숫자가 입력되었을 경우 예외처리
숫자가 아닌 값이 입력되었을 경우 예외처리

입력: 보너스 번호
조건: 
당첨 번호와 동일

### data generator

금액을 1000으로 나눠서 다온 값 만큼의 길이를 가지는 배열을 생성

생성된 단일 배열의 길이는 6
생성된 배열 내에 중복값이 없도록 생성

## matcher

생성된 배열의 값을 입력된 당첨 번호와 대조

### library feature

'MissionUtils' 라이브러리의 기능을 반환하는 handler

기능:  

1. Console.print()
2. Console.readLineAsync()
3. pickUniqueNumbersInRange()


### validate

### parse

### error

### test



## Commit Convertion

| Type 키워드 | 사용 시점                                                             |
| ----------- | --------------------------------------------------------------------- |
| feat        | 새로운 기능 추가                                                      |
| fix         | 버그 수정                                                             |
| docs        | 문서 수정                                                             |
| style       | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경 (CSS 등)                                        |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                |
| refactor    | 코드 리팩토링                                                         |
| build       | 빌드 파일 수정                                                        |
| ci          | CI 설정 파일 수정                                                     |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                     |
| remove      | 파일을 삭제만 한 경우                                                 |