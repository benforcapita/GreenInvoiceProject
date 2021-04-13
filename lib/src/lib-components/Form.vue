<template>
<div>
    <Field v-for="field in JSON.parse(FormFields)" :key="field.name" v-bind:inputType="field.type"  v-bind:placeholder="field.placeholder"  v-bind:description ="field.description" />
</div>
</template>
<script>
import Field from './Field'
export default {
    name: "Form",
    props:['FormFields','submitedForm'],
    components: {
    Field
    }
}
</script>
<style>

</style>