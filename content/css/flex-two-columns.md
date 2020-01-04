---
title: "Flex two columns"
description: "Two columns Flexbox layout for html elements or sections"
---

import { Message } from '@theme-ui/components';

<Message variant='info'>
  Two columns Flexbox layout for html elements or sections
</Message>

#### .html

```html
<section>
  <div class="twoColumns">
    <div class="text"></div>
    <div class="illustration"></div>  
  </div>
</section>
```

#### .css

```css
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.twoColumns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 70%;
  margin: auto;
}

.text {
  /* flex: 2 50%; */
  flex-grow: 2;
  flex-basis: 50%;
  padding: 2rem 2rem;
}

.illustration {
  /* flex: 1 */
  flex-grow: 1;
  padding: 2rem 2rem;
  max-width: 20rem;
}
```
