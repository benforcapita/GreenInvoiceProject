<template>
<form>
    <input v-for="field in JSON.parse(FormFields)" :key="field.name" v-bind:type="field.type"/>
</form>
</template>
<script>
export default {
    name: "Form",
    props:['FormFields'],
}
</script>
<style>

</style>