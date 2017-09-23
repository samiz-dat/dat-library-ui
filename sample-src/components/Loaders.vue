<template>
  <div>
    <h2 id="loaders">Loading</h2>
    <h3>a global loading screen</h3>
    <lib-loader :loading="loading"/>
    <lib-button @click="showGlobalLoading">Show global loader</lib-button>
    <h3>a relative loader</h3>
    <lib-loader :loading="localLoading" class="w5 h5 ba pa2">
      <p>must be in a relatively positioned container</p>
      <lib-button @click="showLocalLoading">Show localized loader</lib-button>
    </lib-loader>
  </div>
</template>

<script>
  export default {
    name: 'Notifications',
    created() {},
    data() {
      return {
        loading: false,
        localLoading: false,
      };
    },
    methods: {
      cancelLoading() {
        this.loading = false;
        this.localLoading = false;
      },
      showGlobalLoading() {
        this.loading = true;
        setTimeout(() => this.cancelLoading(), 5000);
      },
      showLocalLoading() {
        this.localLoading = true;
        setTimeout(() => this.cancelLoading(), 3000);
      },
    },
  };
</script>
