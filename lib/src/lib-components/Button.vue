<template>
<button>{{text}}</button>
</template>

<script>
export default {
    name: "Button", 
    props: ['text'],
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