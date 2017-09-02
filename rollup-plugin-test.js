// const descriptions = {
//   name: 'the name of the plugin, for use in error messages and warnings',
//   options: 'a function that replaces or manipulates the options object passed to rollup.rollup',
//   load: 'a custom id => code loader. Returning null or undefined defers to other load functions (and eventually the, default behavior of loading from the file system).',
//   resolveId: 'a custom ( importee, importer ) => id resolver (useful for e.g. locating third-party dependencies). Returning null or undefined defers to other resolveId functions (and eventually the default resolution behavior); returning any other falsy value signals that importee should be treated as an external module and not included in the bundle.',
//   transform: 'a source, id => code or source, id => { code, map } module transformer function',
//   transformBundle: 'a ( source, { format } ) => code or ( source, { format } ) => { code, map } bundle transformer function.',
//   ongenerate: 'Function hook called when bundle.generate() is being executed. Receives .generate() options along with the underlying Bundle object.',
//   onwrite: 'Function hook called when bundle.write() is being executed, after the file has been written to disk. Receives .write() options along with the underlying Bundle object.',
//   intro: 'a function for generating intro text',
//   outro: 'a function for generating outro text',
//   banner: 'a string, or a function that returns a string',
//   footer: 'a string, or a function that returns a string',
// };

export default function () {
  return {
    name: 'the name of the plugin, for use in error messages and warnings',
    options: (opts) => {
      console.log('\n---------- options ----------\n');
      console.log('a function that replaces or manipulates the options object passed to rollup.rollup\n');
      console.log('options', opts);
      return opts;
    },
    load: (id) => {
      console.log('\n---------- load ----------\n');
      console.log('a custom id => code loader. Returning null or undefined defers to other load functions (and eventually the, default behavior of loading from the file system).\n');
      console.log('load', id);
      return null;
    },
    resolveId: (importee, importer) => {
      console.log('\n---------- resolveId ----------\n');
      console.log('a custom ( importee, importer ) => id resolver (useful for e.g. locating third-party dependencies). Returning null or undefined defers to other resolveId functions (and eventually the default resolution behavior); returning any other falsy value signals that importee should be treated as an external module and not included in the bundle.\n');
      console.log('importee', importee);
      console.log('importer', importer);
      return null;
    },
    transform: (source, id) => {
      console.log('\n---------- transform ----------\n');
      console.log('a source, id => code or source, id => { code, map } module transformer function\n');
      console.log('transform id', id);
      return source;
    },
    transformBundle: (source, { format }) => {
      console.log('\n---------- transformBundle ----------\n');
      console.log('a ( source, { format } ) => code or ( source, { format } ) => { code, map } bundle transformer function.\n');
      console.log('format', format);
      return source;
    },
    ongenerate: (options) => {
      console.log('\n---------- ongenerate ----------\n');
      console.log('Function hook called when bundle.generate() is being executed. Receives .generate() options along with the underlying Bundle object.\n');
      console.log('ongenerate args', options);
    },
    onwrite: (options) => {
      console.log('\n---------- onwrite ----------\n');
      console.log('Function hook called when bundle.write() is being executed, after the file has been written to disk. Receives .write() options along with the underlying Bundle object.\n');
      console.log('onwrite args', options);
    },
    intro: () => {
      console.log('\n---------- intro ----------\n');
      console.log('a function for generating intro text\n');
    },
    outro: () => {
      console.log('\n---------- outro ----------\n');
      console.log('a function for generating outro text\n');
    },
    banner: () => {
      console.log('\n---------- banner ----------\n');
      console.log('a string, or a function that returns a string\n');
    },
    footer: () => {
      console.log('\n---------- footer ----------\n');
      console.log('a string, or a function that returns a string\n');
    },
  };
}
