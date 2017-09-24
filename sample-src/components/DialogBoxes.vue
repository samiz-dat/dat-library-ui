<template>
  <div>
    <h2 id="dialog-boxes">Dialog Boxes</h2>
    <lib-button @click="visible = true">Open</lib-button>
    <lib-dialog :visible.sync="visible">
      <h1>Hello</h1>
      <lib-button @click="visible = false">Close</lib-button>
    </lib-dialog>
  </div>
</template>

<script>
  export default {
    name: 'DialogBoxes',
    created() {},
    data() {
      return {
        visible: false,
      };
    },
    methods: {
    },
  };
</script>
