<template>
  <pre ref="pre" class="line-numbers" style="white-space: pre-wrap;"><code ref="code" :class="codeClass" ></code></pre>
</template>

<script>
  import Prism from 'prismjs';
  import lineNumbers from '../utils/lineNumbers';
  lineNumbers(Prism);

  export default {
    props: {
      language: {
        type: String,
        default: 'html',
        validator: lang => !!Prism.languages[lang],
      },
      code: {
        type: String,
      },
    },
    computed: {
      codeClass() {
        const lang = this.language;
        return {
          [`language-${lang}`]: true,
        };
      },
    },
    created() {},
    methods: {
      render() {
        this.$refs.code.textContent = this.code;
        Prism.highlightElement(this.$refs.code);
      },
      hasPlugin(plugin) {
        return this.plugins.indexOf(plugin) !== -1;
      },
    },
    mounted() {
      this.render();
    },
    watch: {
      code(val) {
        this.render();
      },
    },
    data() {
      return {
        codeText: null,
      };
    },
  };
</script>
<style lang="scss">
  @import '../../node_modules/prismjs/themes/prism';

  pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre.line-numbers > code {
    position: relative;
      white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: -0.1em;
    font-size: 100%;
    left: -3.8rem; //-4.5em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
</style>
