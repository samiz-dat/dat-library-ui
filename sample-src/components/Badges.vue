<template>
  <div>
    <h2 id="badges">Badges:</h2>
    <h3>On buttons</h3>
    <div>
      <lib-badge :value="9">
        <lib-button>Number</lib-button>
      </lib-badge>
      <lib-badge :value="100" :max="50">
        <lib-button>With Maximum value</lib-button>
      </lib-badge>
      <lib-badge value="new">
        <lib-button>With Words</lib-button>
      </lib-badge>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Badges',
    created() {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
