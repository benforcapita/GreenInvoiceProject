import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, resolveComponent, Fragment, renderList } from 'vue';

var script$4 = /*#__PURE__*/defineComponent({
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

const _hoisted_1$2 = {
  class: "lib-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render$4 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode("button", {
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

var css_248z$4 = "\n.lib-sample[data-v-393a2ece] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.lib-sample p[data-v-393a2ece] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-393a2ece";

var script$3 = {
  name: "Field",
  props: ['inputType', 'placeholder', 'description']
};

const _hoisted_1$1 = {
  class: "inputBox"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("input", {
    type: $props.inputType,
    class: "formControl",
    required: "",
    placeholder: $props.placeholder
  }, null, 8, ["type", "placeholder"]), createVNode("span", null, toDisplayString($props.description), 1)]);
}

var css_248z$3 = "\n";
styleInject(css_248z$3);

script$3.render = render$3;

var script$2 = {
  name: "Button",
  props: ['type', 'text'],

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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: $props.type
  }, toDisplayString($props.text), 9, ["type"]);
}

var css_248z$2 = "\n\n";
styleInject(css_248z$2);

script$2.render = render$2;

var script$1 = {
  name: "Form",
  props: ['FormFields', 'submitedForm'],
  components: {
    Field: script$3
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = resolveComponent("Field");

  return openBlock(), createBlock("div", null, [(openBlock(true), createBlock(Fragment, null, renderList(JSON.parse($props.FormFields), field => {
    return openBlock(), createBlock(_component_Field, {
      key: field.name,
      inputType: field.type,
      placeholder: field.placeholder,
      description: field.description
    }, null, 8, ["inputType", "placeholder", "description"]);
  }), 128))]);
}

var css_248z$1 = "\n\n";
styleInject(css_248z$1);

script$1.render = render$1;

var script = {
  name: "Spinner"
};

const _hoisted_1 = {
  class: "loader"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1);
}

var css_248z = "\n.loader {\n    border: 16px solid #f3f3f3; \n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n@keyframes spin {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z);

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LibSample: script$4,
  Field: script$3,
  Button: script$2,
  Form: script$1,
  Spinner: script
});

// Import vue components

const install = function installLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$2 as Button, script$3 as Field, script$1 as Form, script$4 as LibSample, script as Spinner };
