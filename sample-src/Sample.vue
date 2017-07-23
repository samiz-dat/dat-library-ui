<template>
  <div id="sample">
    <h1>Dat Library UI</h1>
    <p>Dat Library UI is a collection of vue components built to be used with the <a href="https://github.com/e-e-e/dat-library">Dat Library</a>. Although built with Dat Library in mind, they have been built generically so that they can easily be used by any application looking for a simple set of common and reusable design elements. We built this collection because we could not find any library that exactly matched our needs.</p>
    <p><strong>This is a work in progress.</strong></p>
    <h2>Progress bars:</h2>
    <lib-progress :percentage="percentage" status="success"></lib-progress>
    <lib-progress :percentage="percentage" status="primary"></lib-progress>
    <lib-progress :percentage="percentage" status="warning"></lib-progress>
    <lib-progress :percentage="percentage" status="danger"></lib-progress>
    <lib-progress :percentage="percentage"></lib-progress>
    <h2>Buttons: </h2>
    <h3>Outlined</h3>
    <div>
      <lib-button status='success'>success</lib-button>
      <lib-button status='primary'>primary</lib-button>
      <lib-button status='warning'>warning</lib-button>
      <lib-button status='danger'>danger</lib-button>
      <lib-button>default</lib-button>
    </div>
    <h3>Filled:</h3>
    <div>
      <lib-button status='success' type="primary">success</lib-button>
      <lib-button status='primary' type="primary">primary</lib-button>
      <lib-button status='warning' type="primary">warning</lib-button>
      <lib-button status='danger' type="primary">danger</lib-button>
      <lib-button type="primary">default</lib-button>
    </div>
    <h3>with icons: </h3>
    <div>
      <lib-button icon="bookmark" type="primary" status="success">bookmark</lib-button>
      <lib-button icon="search" type="primary" status="primary">search</lib-button>
      <lib-button icon="external-link-square" status="warning">open</lib-button>
      <lib-button icon="pencil">Something</lib-button>
    </div>
    <h3>with only icons: </h3>
    <div>
      <lib-button icon="bookmark" type="primary" status="success" />
      <lib-button icon="search" type="primary" status="primary" />
      <lib-button icon="external-link-square" status="warning" />
      <lib-button icon="pencil" />
    </div>
    <h3>with size: </h3>
    <div>
      <lib-button icon="bookmark" status="primary" size='x-large'>x-large</lib-button>
      <lib-button icon="bookmark" status="primary" size='large'>large</lib-button>
      <lib-button icon="bookmark" status="primary">Normal</lib-button>
      <lib-button icon="bookmark" status="primary" size='small'>small</lib-button>
      <lib-button icon="bookmark" status="primary" size='x-small'>x-small</lib-button>
    </div>
    <h3>grouped:</h3>
    <lib-button-group>
      <lib-button status='success' type="primary">one</lib-button>
      <lib-button status='primary' type="primary">two</lib-button>
      <lib-button status='warning' type="primary">three</lib-button>
      <lib-button status='danger' type="primary">four</lib-button>
      <lib-button type="primary" icon="trash">five</lib-button>
    </lib-button-group>
    <br/>
    <lib-button-group>
      <lib-button>Works with one button</lib-button>
    </lib-button-group>
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
  h1, h2, h3, h4 {
    font-family: 'Crimson Text', serif;
    font-weight: normal;
    font-style: italic;
  }
  h3, h4 {
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
  }

  .lib-progress {
    margin: 0.5rem 0;
  }
</style>
