<template>
  <div id="sample" class="pa3">
    <h1>Dat Library UI</h1>
    <p>Dat Library UI is a collection of vue components built to be used with the <a href="https://github.com/e-e-e/dat-library">Dat Library</a>. Although built with Dat Library in mind, they have been built generically so that they can easily be used by any application looking for a simple set of common and reusable design elements. We built this collection because we could not find any library that exactly matched our needs.</p>
    <p><strong>This is a work in progress.</strong></p>
    <h2 id="menu">Menu</h2>
    <div>
      <lib-menu>
        <lib-menu-item link="#menu">Menu</lib-menu-item>
        <lib-menu-item link="#progress-bars">Progress Bars</lib-menu-item>
        <lib-menu-item link="#buttons">Buttons</lib-menu-item>
        <lib-menu-item link="#notifications">Notifications</lib-menu-item>
        <lib-menu-item link="#loaders">Loaders</lib-menu-item>
        <lib-menu-item link="#tags">Tags</lib-menu-item>
        <lib-menu-item link="#inputfields">Inputs</lib-menu-item>
        <lib-menu-item link="#selections">Selections</lib-menu-item>
        <lib-menu-item link="#checkboxs">Checkboxes</lib-menu-item>
        <lib-menu-item link="#sourcecode">Source Code Views</lib-menu-item>
      </lib-menu>
    </div>
    <progress-bars/>
    <buttons/>
    <notifications/>
    <loaders/>
    <tags/>
    <inputs/>
    <selections/>
    <checkboxes/>
    <source-code-views/>
  </div>
</template>

<script>
  import Buttons from './components/Buttons';
  import ProgressBars from './components/ProgressBars';
  import Notifications from './components/Notifications';
  import Loaders from './components/Loaders';
  import Tags from './components/Tags';
  import Inputs from './components/Inputs';
  import Checkboxes from './components/Checkboxes';
  import Selections from './components/Selections';
  import SourceCodeViews from './components/SourceCodeViews';

  export default {
    name: 'Sample',
    components: {
      Buttons,
      ProgressBars,
      Notifications,
      Loaders,
      Tags,
      Inputs,
      Checkboxes,
      Selections,
      SourceCodeViews,
    },
    created() {},
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="css">
  /*h1, h2, h3, h4 {
    font-family: 'Crimson Text', serif;
    font-weight: normal;
    font-style: italic;
  }
  h3, h4 {
    font-style: normal;
  }*/

  body {
    /*font-family: 'Roboto', sans-serif;*/
    text-rendering: optimizeLegibility;
  }

  .lib-progress, .lib-input {
    margin: 0.5rem 0;
  }
</style>
