---
title: first name, last name 혹은 full name!
subtitle: 유저의 이름을 대하는 두 가지 방법과 flex order를 활용한 CSS 트릭
date: 2022-04-27
tags: ['UX', 'CSS', 'i18n', 'flex']
excerpt:
  [
    'https://blog.prototypr.io/full-name-vs-first-last-name-ux-best-practice-8c2db7178fd1',
    'https://www.w3schools.com/csSref/css3_pr_order.asp',
  ]
---

# full name

대체로 sign up 과정을 생각해보면 크게 고려하지 않고 자연스럽게 유저의 이름을 first name, last name 두 가지 필드로 나눠 받고자 했다. 지금 만드는 프로덕트도 그렇게 두 가지 필드로 유저의 이름을 받는다. 그러나 어떤 문화권에서는 단지 두 가지 필드로는 이름을 훌륭하게 담아낼 수 없을 것이다. 부모 모두로부터 성을 받는 경우, 미들 네임이 있는 경우, 한국 같은 문화권에서 last name을 first name보다 우선해 쓰는 경우 등을 생각해보면 유저가 이 프로덕트가 충분히 inclusive 하다고 느끼기 위해서는 full name 하나의 필드를 사용하는 것이 전략적일 수 있다.

# first name, last name

그렇다면 두 가지 필드로 나눠 유저의 데이터를 입력 받는 현재의 방식은 아예 장점이 없을까? 현재 진행 중인 프로젝트 역시 다양한 문화권의 고객을 잠재 고객으로 생각하고 진행 중이지만, 지금은 우선 한국어와 영어만 서비스하기로 했다. 이런 상황에서, 고객에게 친근한 톤의 말투를 제품 전반에 사용하고 있는데, 이를 위해서 고객의 first name을 따로 저장한 것이 유용하게 쓰이고 있다. "안녕하세요, {{first name}}!" 같은 식이다.

# CSS tricks

full name 필드 하나를 받는 것보다는 조금의 수고가 더 들기는 하다. 가령 personalized 웹사이트 경험을 향상시키기 위해 i18n을 적용했을 때 번역된 페이지는 유저가 익숙할 문화권의 이름 정렬을 따라야 한다. 한국어에서는 last name, first name을 영어 페이지에서는 그 반대 식이다.

처음에는 이를 JS로 처리해서 아래 같은 코드로 정렬을 맞춰두었다.

```
language === 'ko' ? {last name} {first name} : {first name} {last name}
```

웬만하면 JS로 가능한 문법은 CSS로 대체하는 것이 유용하기 때문에 이를 flex의 order로 수정해주기로 했다. tailwindcss를 이용해 두 개의 span 태그를 감싸는 div 태그에 inline-flex를 적용하고, 하위 태그들 각각에 언어별 order 순서를 정해줬다. 처음에는 부트스트랩 등에서 제공하는 것으로 order를 종종 써왔는데, CSS3 문법인 줄은 몰라서 자유자재로 쓰지는 않았었다.

```js
<div className='inline-flex'>
  <span className='en:order-1 ko:order-2'>{user.fName}</span>
  <span className='en:order-2 ko:order-1'>{user.lName}</span>
</div>
```

> The `order` property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.

여기서 flex의 적용을 받는 아이템이 아니라면 `order` 속성은 아무런 영향을 끼치지 않는다.

이를 가능하게 하기 위해서는 각 언어별 `:lang(en)`과 `:lang(ko)`를 prefix로 사용할 수 있었어야 했다. 프로젝트 루트에 있는 `tailwind.config.js`로 이동해서 아래처럼 추가적으로 플러그인을 설정해준다. 새로 모듈을 다운받을 필요 없이 built in plugin을 import 시켜주기만 하면 된다.

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    ...
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('en', '&:lang(en)'),
      addVariant('ko', '&:lang(ko)')
    })
  ]
}
```

이때 addVariant 함수는 첫 번째 인자로 쓰고자 하는 나만의 커스텀 prefix를 string으로 받고, 두 번째 인자로는 CSS modifier를 받는다. 더 많은 개별 언어에 대응해야 하면 'zh', 'jp' 등 원하는 대로 설정하면 된다.

```css
/* tailwind.css */

.en\:order-1:lang(en) {
  order: 1;
}

.en\:order-2:lang(en) {
  order: 2;
}
```

tailwind.css로 variant가 적용된 모습은 위와 같다. 그럼 이제 CSS만으로 이름의 순서를 쉽게 바꿀 수 있게 됐다.
