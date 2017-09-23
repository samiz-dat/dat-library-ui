<template>
  <div>
    <h2 id="checkboxs">Checkboxes</h2>
    <h3>as individuals</h3>
    <lib-checkbox label='singlecity'/>
    <h3>or as grouped</h3>
    <lib-checkbox-group v-model='checks'>
      <lib-checkbox name='ok' label='one'/>
      <lib-checkbox name='ok' label='two'/>
      <lib-checkbox name='ok' label='three'/>
    </lib-checkbox-group>
    <div>{{checks}}</div>
    <h3>with labels</h3>
    <lib-checkbox-group v-model='checks'>
      <lib-checkbox name='ok' label='one'>one</lib-checkbox>
      <lib-checkbox name='ok' label='two'>two</lib-checkbox>
      <lib-checkbox name='ok' label='three'>three</lib-checkbox>
    </lib-checkbox-group>
    <h3>default to checked</h3>
    <lib-checkbox-group v-model='precheckedChecks'>
      <lib-checkbox name='ok' label='one'/>
      <lib-checkbox name='ok' label='two'/>
      <lib-checkbox name='ok' label='three' checked/>
    </lib-checkbox-group>
    <div>{{precheckedChecks}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Checkboxes',
    created() {},
    data() {
      return {
        checks: [],
        precheckedChecks: [],
      };
    },
    methods: {},
  };
</script>
