<template>
  <div>
    <h2 id="inputfields">Input fields</h2>
    <div class="mw6">
      <lib-input type='text' placeholder='Enter some text'></lib-input>
      <lib-input type='password' icon='key' label="Password"></lib-input>
      <h3>can be bound using v-model:</h3>
      <lib-input
        type='number'
        icon='dollar'
        left
        pattern="\d+"
        v-model="numberValue"
      />
      <p>this input is bound to {{numberValue}}.</p>
      <h3>can submit a form</h3>
      <lib-form @submit="handleSearchSubmit">
        <lib-input
          type='text'
          icon='search'
          v-model='search'
          size='x-small'
          placeholder='search for something'
          v-on:click.stop.prevent="handleSearchSubmit($event)"
        />
      </lib-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Inputs',
    created() {},
     data() {
      return {
        numberValue: 0,
        search: '',
      };
    },
    methods: {
      handleSearchSubmit(event) {
        console.log(event);
        this.$alert({
          title: 'Submitted with value',
          message: this.search,
          duration: 2000,
        });
      },
    },
  };
</script>
