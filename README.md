# vue-cli-plugin-yaml

Add YAML support to Webpack using yaml-loader

### Install

```
yarn add --dev vue-cli-plugin-yaml

npm install --save-dev vue-cli-plugin-yaml
```

There is no need to configure anything else

### Usage

```yaml
# src/config.yml

apiKey: abcd
```

```js
// src/main.js

import config from './config.yml' 
import config from './config'       // extension can be omitted
console.log(config)                 // { "apiKey": "abcd" }

import { apiKey } from '@/config'   // Using @ alias for src
console.log(apiKey)                 // "abcd"
```
