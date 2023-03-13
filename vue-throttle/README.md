# vue-throttle-component

simple throttle component for vue

## Installation
```bash
npm i -S vue-throttle-component
```

## Usage
```js
// main.js
import Vue from 'vue';
import App from './app.vue';
import Throttle from 'vue-throttle-component';

Vue.use(Throttle)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

``` vue
<template>
  <Throttle :timeout="300" events="input">
    <input type="text" @input="handleInput" />
  </Throttle>


  <Throttle :timeout="300" events="input">
    <my-input type="text" @input="handleInput2"></my-input>
  </Throttle>
</template>

<script>
export default {
  methods: {
    handleInput(val){
      console.log(val, 'val')
    },

    handleInput2(val){
      console.log(val, 'val2')
  }
}
</script>

```

## Props

`timeout` default unit is `ms`, so `:timeout="300"` means `300ms`, you can specify unit like `1s`.`ms` and `s` supports only.

`events` use to specify the event you want to throttle. It allows you to set multiple events using `:events="['input','change','click']"`.

| name                       | type             | default         | example         |
| -------------------------- | ---------------- | ----------------|-----------------|
| timeout                    |  String/Number   | 300             | 300/300ms/0.3s  |
| events                     |  String/Array    | /               | input/['input','change']|