<template>
  <div id="example">
    <lib-progress :percentage="percentage" status="success"></lib-progress>
    <lib-progress :percentage="percentage" status="primary"></lib-progress>
    <lib-progress :percentage="percentage" status="warning"></lib-progress>
    <lib-progress :percentage="percentage" status="danger"></lib-progress>
    <lib-progress :percentage="percentage"></lib-progress>
  </div>
</template>

<script>
  import LibProgress from './components/LibProgress';

  export default {
    name: 'Example',
    components: {
      LibProgress,
    },
    created() {
      setInterval(this.incrementPercentage, 66);
    },
    data() {
      return {
        percentage: 0,
      };
    },
    methods: {
      incrementPercentage() {
        this.percentage = (this.percentage + 1) % 100;
      },
    },
  };
</script>

<style lang="css">
  .lib-progress {
    margin: 0.5rem 0;
  }
</style>
