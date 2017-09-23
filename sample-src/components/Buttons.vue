<template>
  <div>
    <h2 id="buttons">Buttons:</h2>
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
    <h3>with active state:</h3>
    <lib-button-group>
      <lib-button>one</lib-button>
      <lib-button active>active</lib-button>
      <lib-button>three</lib-button>
      <lib-button>four</lib-button>
      <lib-button>five</lib-button>
    </lib-button-group>
    <br/>
    <lib-button status='primary'>one</lib-button>
    <lib-button status='primary' active>active</lib-button>
    <lib-button status='primary'>three</lib-button>
    <lib-button status='primary'>four</lib-button>
    <lib-button status='primary'>five</lib-button>
  </div>
</template>

<script>
  export default {
    name: 'Buttons',
    created() {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
