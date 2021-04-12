import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, Fragment, renderList } from 'vue';

var script$3 = /*#__PURE__*/defineComponent({
  name: 'LibSample',

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-393a2ece");

pushScopeId("data-v-393a2ece");

const _hoisted_1 = {
  class: "lib-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render$3 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = "\n.lib-sample[data-v-393a2ece] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.lib-sample p[data-v-393a2ece] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-393a2ece";

var script$2 = {
  name: "TextField",

  data() {
    return {
      invalid: false
    };
  },

  methods: {
    ChangeValid(val) {
      this.invalid = val;
    }

  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("input", {
    class: {
      invalid: $data.invalid
    },
    invalid: ""
  }, null, 2);
}

var css_248z$2 = "\ninput.invalid {\n  border: 1px solid #ff0000;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;

var script$1 = {
  name: "Button",
  props: ['text'],

  data() {
    return {
      mode: 'Regular'
    };
  },

  methods: {
    ChangeMode() {
      if (this.mode == 'Regular') this.mode = 'loading';else this.mode = 'Regular';
    }

  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", null, toDisplayString($props.text), 1);
}

var css_248z$1 = "\n\n";
styleInject(css_248z$1);

script$1.render = render$1;

var script = {
  name: "Form",
  props: ['FormFields']
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("form", null, [(openBlock(true), createBlock(Fragment, null, renderList(JSON.parse($props.FormFields), field => {
    return openBlock(), createBlock("input", {
      key: field.name,
      type: field.type
    }, null, 8, ["type"]);
  }), 128))]);
}

var css_248z = "\n\n";
styleInject(css_248z);

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LibSample: script$3,
  TextField: script$2,
  Button: script$1,
  Form: script
});

// Import vue components

const install = function installLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as Button, script as Form, script$3 as LibSample, script$2 as TextField };
