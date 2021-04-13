'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$4 = /*#__PURE__*/vue.defineComponent({
  name: 'LibSample',
  // vue component name
  data: function data() {
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
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-393a2ece");

vue.pushScopeId("data-v-393a2ece");

var _hoisted_1$2 = {
  class: "lib-sample"
};

var _hoisted_2 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

var render$4 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
});function styleInject(css, ref) {
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
}var css_248z$4 = "\n.lib-sample[data-v-393a2ece] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.lib-sample p[data-v-393a2ece] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$4);script$4.render = render$4;
script$4.__scopeId = "data-v-393a2ece";var script$3 = {
  name: "Field",
  props: ['inputType', 'placeholder', 'description']
};var _hoisted_1$1 = {
  class: "inputBox"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode("input", {
    type: $props.inputType,
    class: "formControl",
    required: "",
    placeholder: $props.placeholder
  }, null, 8, ["type", "placeholder"]), vue.createVNode("span", null, vue.toDisplayString($props.description), 1)]);
}var css_248z$3 = "\n";
styleInject(css_248z$3);script$3.render = render$3;var script$2 = {
  name: "Button",
  props: ['type', 'text'],
  data: function data() {
    return {
      mode: 'Regular'
    };
  },
  methods: {
    ChangeMode: function ChangeMode() {
      if (this.mode == 'Regular') this.mode = 'loading';else this.mode = 'Regular';
    }
  }
};function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    type: $props.type
  }, vue.toDisplayString($props.text), 9, ["type"]);
}var css_248z$2 = "\n\n";
styleInject(css_248z$2);script$2.render = render$2;var script$1 = {
  name: "Form",
  props: ['FormFields', 'submitedForm'],
  components: {
    Field: script$3
  }
};function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = vue.resolveComponent("Field");

  return vue.openBlock(), vue.createBlock("div", null, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(JSON.parse($props.FormFields), function (field) {
    return vue.openBlock(), vue.createBlock(_component_Field, {
      key: field.name,
      inputType: field.type,
      placeholder: field.placeholder,
      description: field.description
    }, null, 8, ["inputType", "placeholder", "description"]);
  }), 128))]);
}var css_248z$1 = "\n\n";
styleInject(css_248z$1);script$1.render = render$1;var script = {
  name: "Spinner"
};var _hoisted_1 = {
  class: "loader"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1);
}var css_248z = "\n.loader {\n    border: 16px solid #f3f3f3; \n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n@keyframes spin {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z);script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,LibSample: script$4,Field: script$3,Button: script$2,Form: script$1,Spinner: script});var install = function installLib(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,LibSample: script$4,Field: script$3,Button: script$2,Form: script$1,Spinner: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;