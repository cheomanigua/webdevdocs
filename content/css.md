---
title: "CSS"
description: "CSS quick reference"
---

import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  <strong>Flexbox</strong> is used to layout sections whereas <strong>Grid</strong> is used to layout the entire page. It's important to keep this distinction.
</Message>

# Flexbox

## Two Columns Layout

### html

```html
<section>
  <div class="twoColumns">
    <div class="text"></div>
    <div class="ilustration"></div>  
  </div>
</section>
```

### css

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
}
```
