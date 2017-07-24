<template>
  <div id="sample">
    <h1>Dat Library UI</h1>
    <p>Dat Library UI is a collection of vue components built to be used with the <a href="https://github.com/e-e-e/dat-library">Dat Library</a>. Although built with Dat Library in mind, they have been built generically so that they can easily be used by any application looking for a simple set of common and reusable design elements. We built this collection because we could not find any library that exactly matched our needs.</p>
    <p><strong>This is a work in progress.</strong></p>
    <h2>Menu</h2>
    <div>
      <!-- <lib-menu :router="true" :default-active="$route.path" mode="horizontal">
        <lib-menu-item index="/search">Browse</lib-menu-item>
        <lib-menu-item index="/libraries">Libraries</lib-menu-item>
        <lib-menu-item index="/">Info</lib-menu-item>
      </lib-menu> -->
      <lib-menu :router="{ok: 'this'}">
        <lib-menu-item>Browse</lib-menu-item>
        <lib-menu-item>Libraries</lib-menu-item>
        <lib-menu-item>Info</lib-menu-item>
      </lib-menu>
    </div>
    <h2>Progress bars:</h2>
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
      <lib-button status='success' filled>success</lib-button>
      <lib-button status='primary' filled>primary</lib-button>
      <lib-button status='warning' filled>warning</lib-button>
      <lib-button status='danger' filled>danger</lib-button>
      <lib-button filled>default</lib-button>
    </div>
    <h3>with icons: </h3>
    <div>
      <lib-button icon="bookmark" filled status="success">bookmark</lib-button>
      <lib-button icon="search" filled status="primary">search</lib-button>
      <lib-button icon="external-link-square" status="warning">open</lib-button>
      <lib-button icon="pencil">Something</lib-button>
    </div>
    <h3>with only icons: </h3>
    <div>
      <lib-button icon="bookmark" filled status="success" />
      <lib-button icon="search" filled status="primary" />
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
      <lib-button status='success' filled>one</lib-button>
      <lib-button status='primary' filled>two</lib-button>
      <lib-button status='warning' filled>three</lib-button>
      <lib-button status='danger' filled>four</lib-button>
      <lib-button filled icon="trash">five</lib-button>
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
      //setInterval(this.incrementPercentage, 66);
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
