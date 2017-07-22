<template>
  <div id="example">
    <test message="test"/>
  </div>
</template>

<script>
  import test from './components/test';

  export default {
    name: 'Example',
    components: {
      test,
    },
  };
</script>
