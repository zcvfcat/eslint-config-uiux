# eslint-config-uiux

> GOOGLE ESLINT 참고 [shareable config](https://github.com/google/eslint-config-google.git)  
> GOOGLE STYLE [Google JavaScript style guide (ES2015+ version)](https://google.github.io/styleguide/jsguide.html)

## package

- 설치할 package

  ```bash
  npm install --save-dev eslint-config-uiux \
  eslint \
  eslint-plugin-babel \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  prettier \
  typescript
  ```

- react 사용 안할시

  ```bash
  npm uninstall eslint-plugin-react \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react-hooks
  ```

## setting eslint

- `${root}/package.json`

  ```json
  {
    ...
    "eslintConfig": {
      "extends": "uiux"
    }
  }
  ```

- `${root}/.eslintrc`

  ```json
  {
    "extends": ["uiux"],
    "rules": {
      ...rules
    }
  }
  ```

## rules override

- `node_modules/eslint-config-uiux/config/${module_config}` 참고

  ```json
  "rules": {
    'react/display-name': 'off',
    ...rules
  }
  ```
