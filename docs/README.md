# 미션 - 로또

<br>

## 목차

1. [소개](#1-소개)

2. [설치법](#2-설치법)

3. [기능 목록](#3-기능-목록)

4. [파일 구조](#4-파일-구조)

5. [동작 예시](#4-동작-방식)

<br><br><br><br><br>

## 1. 소개

- 지불한 금액만큼의 로또 복권을 추첨하고, 입력한 번호와 추첨된 번호들을 비교하여 당첨 결과를 출력해주는 애플리케이션 입니다.

- 로또 금액은 1회당 1000원이며 추첨 시 6자리 번호와 보너스 번호 하나를 추첨받습니다.

- 로또 당첨은 최소 3개의 숫자가 맞아야 합니다.

  <br><br><br><br><br><br>

## 2. 설치법

- 아래 명령어로 로컬 경로에 폴더 복제

```
git clone https://github.com/Songhyunseop/javascript-lotto-6.git
```

<br><br>

- IDE 에서 터미널을 열고 프로젝트 폴더 위치에서 아래 명령어로 패키지 설치

```
npm install
```

<br><br><br><br><br><br>

## 3. 기능 목록

☑ 구입 금액을 입력받음<br> -입력 금액이 1000으로 나누어 떨어지지 않을 시 예외처리 됨<br> -입력 금액이 올바른 형식이 아닐 시 예외처리 됨

☑ 입력 금액을 1000원 단위로 나눔<br>

☑ 나눠진 횟수만큼 랜덤 번호를 생성하여 출력

☑ 당첨 번호를 입력받음<br> -입력 번호가 올바른 형식이 아닐 시 예외처리 됨<br> -입력 번호가 6개가 아닐 시 예외처리 됨<br> -입력 번호가 1~45 범위에 없을 시 예외처리 됨

☑️ 보너스 번호를 입력 받음<br> -입력 번호가 올바른 형식이 아닐 시 예외처리 됨<br> -입력 번호가 6개가 아닐 시 예외처리 됨<br> -입력 번호가 1~45 범위에 없을 시 예외처리 됨<br> -입력 번호가 당첨 번호와 중복될 시 예외처리 됨

☑ 각 생성된 로또번호와 입력한 번호를 비교<br>
&nbsp;&nbsp; ☑ 6개 모두 일치 => 1등 반환<br>
&nbsp;&nbsp; ☑ 5개 일치 시 보너스 번호 비교<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -보너스 일치(O) => 2등 반환<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -보너스 불일치(X) => 3등 반환<br>
&nbsp;&nbsp; ☑ 4개 일치 => 4등 반환 <br>
&nbsp;&nbsp; ☑ 3개 일치 => 3등 반환

☑ 반환된 결과에 따라 각 결과 카운트 횟수 증가<br>

☑ 합산 된 카운트 최종결과를 화면에 출력

☑ 각 당첨 결과 카운트 수만큼 당첨금을 곱해서 최종 수익금 계산

☑ 지불 금액을 최종 수익금으로 나눠 계산된 수익률 출력
<br><br><br><br><br><br>

## 4. 파일 구조

```
📦src
 ┣ 📂Constant
 ┃ ┣ 📜message.js
 ┃ ┗ 📜stats.js
 ┣ 📂Controller
 ┃ ┣ 📜Create.js
 ┃ ┗ 📜Play.js
 ┣ 📂Domain
 ┃ ┣ 📜Computer.js
 ┃ ┣ 📜NumberCheck.js
 ┃ ┗ 📜User.js
 ┣ 📂Utils
 ┃ ┣ 📜Regex.js
 ┃ ┗ 📜validation.js
 ┣ 📂View
 ┃ ┣ 📜Input.js
 ┃ ┗ 📜Output.js
 ┣ 📜App.js
 ┣ 📜Lotto.js
 ┗ 📜index.js
```

<br><br><br><br><br><br>

## 5. 동작 예시

- 애플리케이션 실행<br>

![1  실행](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/124991681/ff8818e1-d01f-420f-a889-0eb65a64ba09)

<br><br><br><br><br><br>

- 구입 금액 입력<br>

![금액입력](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/124991681/29cc0690-ffbe-4984-a1cd-6b48acc0257e)

<br><br><br><br><br><br>

- 당첨 번호 입력 및 결과출력<br>

![결과출력](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/124991681/26164413-bec8-4f6f-8d47-23a7550016be)

<br><br><br><br><br><br>

- 예외(1) - 잘못된 형식의 금액 입력<br>

![잘못된 금액](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/124991681/32d95b69-b892-4de9-8d7d-c741176a267c)

<br><br><br><br><br><br>

- 예외(2) - 잘못된 형식의 번호 입력<br>

![숫자범위 값 입력](https://github.com/woowacourse-precourse/javascript-lotto-6/assets/124991681/e3433a29-0834-423a-b753-c85c2f62790a)
