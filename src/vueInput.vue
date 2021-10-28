<template lang='pug'>
div.vueinput-component(:data-has-error='!isValid', :data-has-content='hasContent')
   label.field
      span.field-label {{label}}
      input(
         :value='inputValue'
         :placeholder='placeholder'
         :pattern='pattern'
         :required='required'
         :disabled='disabled'
         :maxlength='maxLength'
         :autofocus='autofocus'
         :readonly='readonly'
         @input="_onInput($event)"
         @focus='_onFocus'
         @blur='_onBlur'
      ).field-input
</template>
<script src='./vueInput.js'></script>
<style lang="scss" scoped>
   @import './vueInput.scss';
</style>