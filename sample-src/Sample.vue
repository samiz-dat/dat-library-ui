<template>
  <div id="sample">
    <h1>Dat Library UI</h1>
    <p>Dat Library UI is a collection of vue components built to be used with the <a href="https://github.com/e-e-e/dat-library">Dat Library</a>. Although built with Dat Library in mind, they have been built generically so that they can easily be used by any application looking for a simple set of common and reusable design elements. We built this collection because we could not find any library that exactly matched our needs.</p>
    <p>This is a work in progress.</p>
    <h2>Progress bars:</h2>
    <lib-progress :percentage="percentage" status="success"></lib-progress>
    <lib-progress :percentage="percentage" status="primary"></lib-progress>
    <lib-progress :percentage="percentage" status="warning"></lib-progress>
    <lib-progress :percentage="percentage" status="danger"></lib-progress>
    <lib-progress :percentage="percentage"></lib-progress>
  </div>
</template>

<script>
  export default {
    name: 'Sample',
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
