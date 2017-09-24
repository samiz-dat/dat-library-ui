export default function (Prism) {
  /**
   * Class name for <pre> which is activating the plugin
   * @type {String}
   */
  const PLUGIN_CLASS = 'line-numbers';

  /**
   * Resizes line numbers spans according to height of line of code
   * @param  {Element} element <pre> element
   */
  const _resizeElement = function (element) {
    const codeStyles = getStyles(element);
    const whiteSpace = codeStyles['white-space'];

    if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
      const codeElement = element.querySelector('code');
      const lineNumbersWrapper = element.querySelector('.line-numbers-rows');
      let lineNumberSizer = element.querySelector('.line-numbers-sizer');
      const codeLines = element.textContent.split('\n');

      if (!lineNumberSizer) {
        lineNumberSizer = document.createElement('span');
        lineNumberSizer.className = 'line-numbers-sizer';

        codeElement.appendChild(lineNumberSizer);
      }

      lineNumberSizer.style.display = 'block';

      codeLines.forEach(function (line, lineNumber) {
        lineNumberSizer.textContent = line || '\n';
        const lineSize = lineNumberSizer.getBoundingClientRect().height;
        lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
      });

      lineNumberSizer.textContent = '';
      lineNumberSizer.style.display = 'none';
    }
  };

  /**
   * Returns style declarations for the element
   * @param {Element} element
   */
  const getStyles = function (element) {
    if (!element) {
      return null;
    }

    return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
  };

  window.addEventListener('resize', function () {
    Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_CLASS), _resizeElement);
  });

  Prism.hooks.add('complete', function (env) {
    if (!env.code) {
      return;
    }
    // works only for <code> wrapped inside <pre> (not inline)
    const pre = env.element.parentNode;
    const clsReg = /\s*\bline-numbers\b\s*/;
    if (
      !pre || !/pre/i.test(pre.nodeName) ||
      // Abort only if nor the <pre> nor the <code> have the class
      (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
    ) {
      return;
    }

    if (env.element.querySelector(".line-numbers-rows")) {
      // Abort if line numbers already exists
      return;
    }

    if (clsReg.test(env.element.className)) {
      // Remove the class "line-numbers" from the <code>
      env.element.className = env.element.className.replace(clsReg, ' ');
    }
    if (!clsReg.test(pre.className)) {
      // Add the class "line-numbers" to the <pre>
      pre.className += ' line-numbers';
    }

    const match = env.code.match(/\n(?!$)/g);
    const linesNum = match ? match.length + 1 : 1;

    let lines = new Array(linesNum + 1);
    lines = lines.join('<span></span>');

    const lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }

    env.element.appendChild(lineNumbersWrapper);

    _resizeElement(pre);
  });
}
