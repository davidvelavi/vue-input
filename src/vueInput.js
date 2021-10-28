export default {
  name: 'vueInput',
  emits:['inputField', 'inputFieldFocus', 'inputFieldBlur'],
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
    maxLength: String,
    pattern: String,
    required: Boolean
  },
  data(){
    return {
      inputValue: this.value,
      isValid : this.valid
    }
  },
  computed:{
    hasContent(){
      return Boolean(this.inputValue)
    }
  },
  methods:{
    _onInput({target}){
      this.inputValue = target.value;
      this.$emit('inputField')
    },
    _onFocus(){
      this.$emit('inputFieldFocus')
    },
    _onBlur(){
      this.$emit('inputFieldBlur')
    },
  }
};