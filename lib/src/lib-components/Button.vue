<template>
<button v-bind:type="type">{{text}}</button>
</template>

<script>
export default {
    name: "Button", 
    props: ['type','text'],
    data() {
    return {
        mode:'Regular'
    }
    },
    methods: {
        ChangeMode() {
            if(this.mode == 'Regular')
                this.mode = 'loading'
            else
                this.mode = 'Regular'
        }
            
}
}
</script>

<style>

</style>