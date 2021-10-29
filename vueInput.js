export default {
  name: 'vueInput',
  emits:['onInvalidInputField', 'onInputField', 'onFocusInputField', 'onBlurInputField'],
  props:{
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Label'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valid: {
      type: Boolean,
      default: true
    },
    autofocus:{
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false
    },
    name: String,
    maxLength: String,
    pattern: String
  },
  data(){
    return {
      inputValue: this.value,
      isValid: this.valid
    }
  },
  computed:{
    hasContent(){
      return Boolean(this.inputValue)
    }
  },
  watch:{
    valid( value ){
      this.isValid = Boolean(value);
    },
    inputValue(newValue){
      let valid = true;
      if(this.required){
       valid = this._isRequired(newValue);
      }
      this.isValid  = valid;
    },
    isValid(isValid){
      this._onInvalidInput(isValid);
    }
  },
  methods:{
    _isRequired(inputValue){
      return Boolean(inputValue);
    },
    _onInvalidInput(inputValue){
      this.$emit('onInvalidInputField', {name: this.name, value:isValid})
    },
    _onInput({target}){
      this.inputValue = target.value;
      this.$emit('onInputField', {name: this.name, value: this.inputValue})
    },
    _onFocus(){
      this.$emit('onFocusInputField')
    },
    _onBlur(){
      this.$emit('onBlurInputField')
    },
  }
};