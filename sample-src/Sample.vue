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
    <h2>Buttons: </h2>
    <div>
      <lib-button status='success'>Something</lib-button>
      <lib-button status='primary'>Something</lib-button>
      <lib-button status='warning'>Something</lib-button>
      <lib-button status='danger'>Something</lib-button>
      <lib-button>Something</lib-button>
    </div>
    <div>
      <lib-button status='success' type="primary">Something</lib-button>
      <lib-button status='primary' type="primary">Something</lib-button>
      <lib-button status='warning' type="primary">Something</lib-button>
      <lib-button status='danger' type="primary">Something</lib-button>
      <lib-button type="primary">Something</lib-button>
    </div>
    <h2>Buttons with icons: </h2>
    <div>
      <lib-button icon="bookmark" type="primary" status="success">bookmark</lib-button>
      <lib-button icon="search" type="primary" status="primary">search</lib-button>
      <lib-button icon="external-link-square" status="warning">open</lib-button>
      <lib-button icon="pencil">Something</lib-button>
    </div>
    <h2>Buttons with only icons: </h2>
    <div>
      <lib-button icon="bookmark" type="primary" status="success" />
      <lib-button icon="search" type="primary" status="primary" />
      <lib-button icon="external-link-square" status="warning" />
      <lib-button icon="pencil" />
    </div>
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
