<template>
    <div class="zan-cell zan-field"
         :class="{ 'zan-field--error': error , 'zan-field--wrapped': mode === 'wrapped' }">
      <div
        v-if="title"
        class="zan-cell__hd zan-field__title">{{ title }}</div>
      <textarea
        v-if="type === 'textarea'"
        :style="{height: textareaHeight}"
        :name="name || componentId || ''"
        :value="value"
        :placeholder="placeholder"
        class="zan-field__input zan-cell__bd"
        :class="{ 'zan-field__input--right' : right }"
        placeholder-class="zan-field__placeholder"
        @change="handleZanFieldChange"
        :data-component-id="componentId || ''"></textarea>
      <input
        v-else
        :type="inputType || 'text'"
        :name="name || componentId || ''"
        :value="value"
        :key="'input-'+componentId"
        :placeholder="placeholder"
        class="zan-field__input zan-cell__bd"
        :class="{ 'zan-field__input--right' : right }"
        placeholder-class="zan-field__placeholder"
        @change="handleZanFieldChange"
        :data-component-id="componentId || ''"/>
    </div>
</template>

<script>
  export default {
    props: {
      error: Boolean,
      mode: String,
      title: String,
      type: String,
      textareaHeight: String,
      focus: Boolean,
      name: String,
      componentId: String,
      value: String,
      inputType: String,
      right: Boolean,
      placeholder: String
    },
    methods: {
      handleZanFieldChange (event) {
        this.$emit('handleZanFieldChange', event)
      }
    }
  }
</script>

<style scoped>
</style>