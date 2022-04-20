---
title: 모던 자바스크립트 Deep Dive 읽기
subtitle: 40장 이벤트
date: 2022-04-21
tags:
  [
    'JavaScript',
    'Modern JavaScript Deep Dive',
    '이벤트',
    '이벤트 드리븐 프로그래밍',
  ]
excerpt: ['https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=251552545']
---

- 모든 것을 한번에 학습하려는 대신 중요한 키워드를 중심으로 나누어 학습.
- 여러 번 반복하는 것이 한 번에 완벽하게 이해하려는 것보다 효과적
- 아직 학습하지 않은, 익숙하지 않은 개념은 기술부채로 쌓고 우선 진행
- 개념과 동작 원리를 익힌 후에는 코드 구현 연습
- 능력치보다 살짝 더 어려운 것을 도전하는 "의도적 연습"만이 성장을 돕는다.
- 개념/원리 -> 코드 구현 -> 프로젝트를 통한 의도적 연습의 선순환

40장 이벤트

- Event Handler : 키보드 입력, 클릭 등 브라우저에서 이벤트가 발생했을 때 이에 따라 호출되는 함수
- Event Hanlder 등록 : 이벤트 발생 시 브라우저에게 이벤트 호출을 위임하는 행위

이렇게 구분하는 것은 개발자 입장에서는 사용자가 언제 이벤트를 발생시킬지 모르기 때문. 즉 사용자가 잠재적으로 발생시킬 이벤트가 언제 일어날지 모르므로 브라우저에게 이벤트 핸들러를 위임하는 것.

```js
<button type='button'>Click</button>
<script>
const $button = document.querySelector('button');
$button.onClick = () => {
  alert('button clicked')
}
</script>
```

- `$button`의 `onClick` property에 함수(이벤트 핸들러)를 할당
- 브라우저는 이를 위임받아, 해당 이벤트가 발생했을 때 할당된 Event Handler 처리
- 이처럼 브라우저 상의 상호작용, 이벤트를 중심으로 제어하는 프로그래밍 방식을 'Event Driven Programming'

...

# Event Type

# Event Handler 등록

# Event Handler 제거

# Event Object

# Event 위임

# DOM 요소의 기본 동작 조작

# Event Handler 내부의 this

# Event Handler 인수 전달

# Custom Event
