<template>
<input v-bind:class="{invalid:invalid }" invalid>
</template>

<script>
export default {
  name: "TextField", 
  data() {
    return {
      invalid: false
    }
  },
  methods: {
    ChangeValid(val) {
      this.invalid = val;
    }
            
}
}
</script>

<style>
input.invalid {
  border: 1px solid #ff0000;
}
</style>