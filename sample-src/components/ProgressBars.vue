<template>
  <div>
    <h2 id="progress-bars">Progress bars:</h2>
    <lib-progress text :percentage="percentage" status="success"></lib-progress>
    <h3>with optional text:</h3>
    <lib-progress text percentage="20" status="primary"></lib-progress>
    <lib-progress text percentage="40" status="warning"></lib-progress>
    <lib-progress percentage="60" status="danger"></lib-progress>
    <lib-progress percentage="80"></lib-progress>
    <h3>with different sizes:</h3>
    <lib-progress percentage="50" status="primary" size="thin"></lib-progress>
    <lib-progress percentage="25" status="primary"></lib-progress>
    <lib-progress percentage="75" status="primary" size="thick"></lib-progress>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBars',
    created() {
      this.interval = setInterval(this.incrementPercentage, 66);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    data() {
      return {
        percentage: 0,
      };
    },
    methods: {
      incrementPercentage() {
        this.percentage = (this.percentage + 0.5) % 100;
      },
    },
  };
</script>
