<template>
<div class="inputBox">
    <input v-bind:type="inputType" class="formControl" required v-bind:placeholder="placeholder">
    <span>{{description}}</span>
</div>
</template>

<script>
export default {
    name: "Field", 
    props:['inputType','placeholder','description']
}
</script>

<style  >
</style>