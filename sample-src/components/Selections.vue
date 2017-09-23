<template>
  <div>
    <h2 id="selections">Selection</h2>
    <h3>with different sizes</h3>
    <div class="mw6 relative">
      <p>You have selected: {{selectedA || 'zip'}}</p>
      <lib-select v-model="selectedA">
        <lib-option value="1" label="This"></lib-option>
        <lib-option value="2" label="or"></lib-option>
        <lib-option value="3" label="That"></lib-option>
      </lib-select>
      <p>You have also selected: {{selectedB || 'nutta'}}</p>
      <lib-select v-model="selectedB" size="x-small">
        <lib-option value="One"></lib-option>
        <lib-option value="Two"></lib-option>
        <lib-option value="Three"></lib-option>
        <lib-option value="Four"></lib-option>
        <lib-option value="Five"></lib-option>
      </lib-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Selections',
    created() {},
    data() {
      return {
        selectedA: undefined,
        selectedB: undefined,
      };
    },
    methods: {},
  };
</script>
