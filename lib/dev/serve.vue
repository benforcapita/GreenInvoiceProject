<script>
import { defineComponent } from 'vue';
import TextField  from "../src/lib-components/TextField.vue";
import Button  from "../src/lib-components/Button.vue";
import Form  from "../src/lib-components/Form.vue";
import Spinner  from "../src/lib-components/Spinner.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { LibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
    TextField,
    Button,
    Form,
    Spinner
  }
});
</script>
<template>
  <div id="app">
    <TextField/>
    <Button text ="hello"/>
    <Form FormFields = '[{"name":"num","type":"number"},{"name":"name","type":"text"}]' />
    <Spinner/>
  </div>
</template>
