<script>
import { defineComponent } from 'vue';
import Field  from "../src/lib-components/Field.vue";
import Button  from "../src/lib-components/Button.vue";
import Form  from "../src/lib-components/Form.vue";
import Spinner  from "../src/lib-components/Spinner.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { LibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Field,
    Button,
    Form,
    Spinner
  }
});
</script>
<template>
  <div id="app">
    <Field inputType="text" placeholder="testing" description="this is a test"/>
    <Button type="submit" text ="hello"/>
    <Form FormFields = '[{"name":"num","inputType":"text","placeholder":"this is test 1","description":"this is test 1 desc"},{"name":"num","inputType":"text","placeholder":"this is test 2","description":"this is test 2 desc"}]' />
    <Spinner/>
  </div>
</template>
