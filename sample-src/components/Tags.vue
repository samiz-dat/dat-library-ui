<template>
  <div>
    <h2 id="tags">Tags</h2>
    <h3>with status</h3>
    <lib-tag status='success'>success</lib-tag>
    <lib-tag status='primary'>primary</lib-tag>
    <lib-tag status='warning'>warning</lib-tag>
    <lib-tag status='danger'>danger</lib-tag>
    <lib-tag>default</lib-tag>
    <h3>with size:</h3>
    <lib-tag size='x-large'>x-large</lib-tag>
    <lib-tag size='large'>large</lib-tag>
    <lib-tag>Normal</lib-tag>
    <lib-tag size='small'>small</lib-tag>
    <lib-tag size='x-small'>x-small</lib-tag>
  </div>
</template>

<script>
  export default {
    name: 'Tags',
    created() {},
    data() {
      return {};
    },
    methods: {},
  };
</script>
