---
title: 언어별로 달라지는 반응형 이미지 CSS로 관리하기
subtitle: :lang() + media query
date: 2022-04-05
tags: ['Media Query', ':lang()', 'CSS', 'i18n']
excerpt:
  [
    'https://medium.datadriveninvestor.com/internationalize-your-css-media-queries-64c749eb00c',
    'https://caniuse.com/?search=%3Alang',
  ]
---

Can I Use에 검색해보면, Firefox(for Android), Chrome(for Android), Safari(on iOS) 등 주요 브라우저를 폭넓게 지원하는 CSS Selector이다.

```js
const Container = () => {
  const lang = 'en'; // or 'ko'

  return (
    <div className='container' lang={lang}>
      Background image
    </div>
  );
};
```

```scss
.container {
  background-image: url('/images/mobile-kr.png');
  &:lang(en) {
    background-image: url('/images/mobile-en.png');
  }

  @include media-breakpoint-up(lg) {
    background-image: url('/images/desktop-kr.png');
    &:lang(en) {
      background-image: url('/images/desktop-en.png');
    }
  }
}
```

`:lang(locale)`을 사용하고자 하는 html tag에 `lang` attribute를 적용해준 후, media query로 media break 마다 다르게 적용하고자 하는 asset을 지정해준다.

여기에 언어별로 한차례 더 달라져야 하는 경우 `:lang(locale)`로 선택해준다.

즉, 위 코드의 경우 스크린의 `width`가 `lg`보다 이하인 경우 `mobile-kr.png`가 선택되지만, 페이지가 영문이라면, `mobile-en.png` asset이 선택될 것이다.
