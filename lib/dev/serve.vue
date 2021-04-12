<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { LibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  LibSample,
  // }
});
</script>

<template>
  <div id="app">
    <lib-sample />
  </div>
</template>
