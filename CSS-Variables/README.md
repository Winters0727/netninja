# CSS Variables

- CSS Variables == Custom Properties

- CSS Variables example

  - CSS 프로퍼티 앞에 '--'를 붙여서 정의

  - 최상위 개념인 루트(root)에 변수를 저장

  - 사용시에는 var(Custom Properties)로 사용

  - 하위 요소에서 Override 가능

  - 미디어 쿼리 마다 다르게 설정 가능

    ```CSS
    :root {
        --theme-color : ...;
        --link-color : ...;
    }
    
    nav {
        --theme-color : #000;
    }
    
    @media screen and (max-width:760px) {
        :root {
            --layout : 1fr;
        }
    }
    
    
    ...
    
    div {
        background : var(--theme-color);
    }
    ```

- Javascript

  ```javascript
  const swatches = document.querySelectorAll('.swatches span');
  const root = document.querySelector(':root');
  
  swatches.forEach((swatch) => {
      swatch.addEventListner('click', (e) => {
          root.style.setProperty('--theme-color', e.target.style.background);
      })
  })
  ```

  