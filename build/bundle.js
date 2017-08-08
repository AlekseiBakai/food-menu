(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.article = article;
exports.h1 = h1;
exports.h3 = h3;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.i = i;
exports.span = span;
exports.section = section;
exports.footer = footer;
exports.p = p;
exports.img = img;
exports.button = button;
exports.addId = addId;
exports.addClass = addClass;
function text(words) {
  return document.createTextNode(words);
}

function createElement(type) {
  var newElement = document.createElement(type);

  for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  children.forEach(function (child) {
    return newElement.appendChild(child);
  });
  return newElement;
}

function div() {
  for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return createElement.apply(undefined, ['div'].concat(children));
}

function article() {
  for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    children[_key3] = arguments[_key3];
  }

  return createElement.apply(undefined, ['article'].concat(children));
}

function h1() {
  for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return createElement.apply(undefined, ['h1'].concat(children));
}

function h3() {
  for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(undefined, ['h3'].concat(children));
}

function nav() {
  for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    children[_key6] = arguments[_key6];
  }

  return createElement.apply(undefined, ['nav'].concat(children));
}

function ul() {
  for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    children[_key7] = arguments[_key7];
  }

  return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
  for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    children[_key8] = arguments[_key8];
  }

  return createElement.apply(undefined, ['li'].concat(children));
}

function i() {
  for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    children[_key9] = arguments[_key9];
  }

  return createElement.apply(undefined, ['i'].concat(children));
}

function span() {
  for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    children[_key10] = arguments[_key10];
  }

  return createElement.apply(undefined, ['span'].concat(children));
}

function section() {
  for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    children[_key11] = arguments[_key11];
  }

  return createElement.apply(undefined, ['section'].concat(children));
}

function footer() {
  for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    children[_key12] = arguments[_key12];
  }

  return createElement.apply(undefined, ['footer'].concat(children));
}

function p() {
  for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    children[_key13] = arguments[_key13];
  }

  return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
  var image = createElement('img');
  image.src = source;
  return image;
}

function button() {
  for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    children[_key14] = arguments[_key14];
  }

  return createElement.apply(undefined, ['button'].concat(children));
}

function addId(element, id) {
  var newElement = element.cloneNode(true);
  return Object.assign(newElement, { id: id });
}

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    klasses[_key15 - 1] = arguments[_key15];
  }

  klasses.forEach(function (klass) {
    return newElement.classList.add(klass);
  });
  return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = app;

var _builders = require('../builders');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store) {
  var modalEle = (0, _modal2.default)(store);
  var navbarEle = (0, _navbar2.default)();
  var heroEle = (0, _hero2.default)();
  var menuEle = (0, _menu2.default)(store);
  var bottomEle = (0, _bottom2.default)();
  var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

  return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
  var name = (0, _builders.p)((0, _builders.text)('Alex Sears'));
  var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

  var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

  return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
  var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
  var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
  var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
  var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');

  var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');

  var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

  return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
  var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

  store.on('SET_ITEMS', function (_ref) {
    var items = _ref.items;

    var leftSide = (0, _leftMenu2.default)(items);
    var rightSide = (0, _rightMenu2.default)(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    (0, _helpers.$)('#menu').children(columns);
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var articles = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\']';
    });
    var buttons = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\'] button.add-to-cart';
    });

    (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
    (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
  });

  store.on('ITEM_REMOVED', function (_ref3) {
    var cart = _ref3.cart;

    var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
      return parseInt(ele.dataset.key, 10);
    });
    var inCartKeys = [].concat(_toConsumableArray(cart));
    var keysToRemove = onPageKeys.filter(function (key) {
      return !inCartKeys.includes(key);
    });

    keysToRemove.forEach(function (key) {
      (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
      (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
    });
  });

  return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
  var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
  var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

  var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

  var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var menuItems = items.map(_menuItem2.default);

  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

  return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
  var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

  var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');

  var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

  var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

  var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

  store.on('TOGGLE_SHOW_CART', function (_ref) {
    var cartVisible = _ref.cartVisible;

    var ele = (0, _helpers.$)('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var items = _ref2.items,
        cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var cartItems = cartArray.map(function (itemId) {
      return (0, _modalItem2.default)(items[itemId]);
    });
    var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
    (0, _helpers.$)('#cart-items').children(cartList);
  });

  return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
  var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

  var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
  var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

  var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
  var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
  var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

  return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
  var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;
exports.filterByType = filterByType;
exports.$ = $;
function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
  return Object.keys(map).filter(function (key) {
    return map[key].type === type;
  }).map(function (key) {
    return map[key];
  });
}

function $(query) {
  var elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function on(event, cb) {
    elements.forEach(function (ele) {
      ele.addEventListener(event, cb);
    });
  }

  function children(toAdd) {
    elements.forEach(function (ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      ele.appendChild(toAdd);
    });
  }

  function addClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.add(klass);
    });
  }

  function removeClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.remove(klass);
    });
  }

  function attr(attribute, value) {
    elements.forEach(function (ele) {
      if (value === false) {
        ele.removeAttribute(attribute);
      } else {
        ele.setAttribute(attribute, value);
      }
    });
  }

  function map(cb) {
    return elements.map(cb);
  }

  return {
    on: on,
    children: children,
    addClass: addClass,
    removeClass: removeClass,
    attr: attr,
    map: map
  };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce(function (total, item) {
          return Object.assign({}, total, _defineProperty({}, item.id, item));
        }, {})
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: new Set(state.cart).add(data.item)
      });
    case 'ITEM_REMOVED':
      var newCart = new Set(state.cart);
      newCart.delete(data.item);
      return Object.assign({}, state, {
        cart: newCart
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible
      });
    default:
      return state;
  }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
  return res.json();
}).then(function (resBody) {
  var body = document.querySelector('body');
  body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
  store.trigger('SET_ITEMS', { items: resBody });
  (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  (0, _helpers.$)('#cart-icon, #close').on('click', function () {
    store.trigger('TOGGLE_SHOW_CART');
  });

  function getParentWithKey(element) {
    var parent = element.parentElement;

    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }

    return parent;
  }

  (0, _helpers.$)('.add-to-cart').on('click', function (e) {
    var parent = getParentWithKey(e.currentTarget);

    var key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', { item: key });
  });

  (0, _helpers.$)('body').on('click', function (e) {
    if (e.target.classList.contains('remove')) {
      var element = e.target;
      var parent = getParentWithKey(element);
      var key = parseInt(parent.dataset.key, 10);

      parent.parentElement.removeChild(parent);
      store.trigger('ITEM_REMOVED', { item: key });
    }
  });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
var defaultState = {
  items: {},
  cart: new Set(),
  cartVisible: false
};

function createStore(reducer) {
  var listeners = {};
  var state = Object.assign({}, defaultState);

  function on(event, cb) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(cb);
  }

  function trigger(event) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    state = reducer(state, event, data);

    if (listeners[event]) {
      listeners[event].forEach(function (cb) {
        cb(state);
      });
    }
  }

  return {
    on: on,
    trigger: trigger
  };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiLCJzcmNcXGpzXFxzZXR1cF9saXN0ZW5lcnMuanMiLCJzcmNcXGpzXFxzdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBSUEsYSxHQUFBLGE7UUFNQSxHLEdBQUEsRztRQUlBLE8sR0FBQSxPO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLEcsR0FBQSxHO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLEMsR0FBQSxDO1FBSUEsSSxHQUFBLEk7UUFJQSxPLEdBQUEsTztRQUlBLE0sR0FBQSxNO1FBSUEsQyxHQUFBLEM7UUFJQSxHLEdBQUEsRztRQU1BLE0sR0FBQSxNO1FBSUEsSyxHQUFBLEs7UUFLQSxRLEdBQUEsUTtBQXpFVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQzFCLFNBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENB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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gxJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XG4gIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9IHNvdXJjZTtcbiAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGRpdiwgYWRkSWQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGJvdHRvbSBmcm9tICcuL2JvdHRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChzdG9yZSkge1xuICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKHN0b3JlKTtcbiAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XG4gIGNvbnN0IGhlcm9FbGUgPSBoZXJvKCk7XG4gIGNvbnN0IG1lbnVFbGUgPSBtZW51KHN0b3JlKTtcbiAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7XG4gIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xuXG4gIHJldHVybiBhcHBFbGU7XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcbiAgY29uc3QgbmFtZSA9IHAodGV4dCgnQWxleCBTZWFycycpKTtcbiAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcblxuICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2ZhbmN5YmVhcl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcbiAgY29uc3QgdGhlID0gYWRkQ2xhc3MocCh0ZXh0KCdUaGUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcbiAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgY29uc3QgZWF0ZXJpZXMgPSBhZGRDbGFzcyhwKHRleHQoJ0VhdGVyaWVzJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZSwgZmFuY3lCZWFyLCBlYXRlcmllcyksICdjb250YWluZXInKTtcblxuICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xuICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XG4gIGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoc3RvcmUpIHtcbiAgY29uc3QgbWVudUVsZSA9IGFkZElkKGFkZENsYXNzKGRpdigpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XG5cbiAgc3RvcmUub24oJ1NFVF9JVEVNUycsICh7IGl0ZW1zIH0pID0+IHtcbiAgICBjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcbiAgICBjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuICAgICQoJyNtZW51JykuY2hpbGRyZW4oY29sdW1ucyk7XG4gIH0pO1xuXG4gIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgY2FydCB9KSA9PiB7XG4gICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xuICAgIGNvbnN0IGFydGljbGVzID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXWApO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xuXG4gICAgJChhcnRpY2xlcy5qb2luKCcsICcpKS5hZGRDbGFzcygnaW4tY2FydCcpO1xuICAgICQoYnV0dG9ucy5qb2luKCcsICcpKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICB9KTtcblxuICBzdG9yZS5vbignSVRFTV9SRU1PVkVEJywgKHsgY2FydCB9KSA9PiB7XG4gICAgY29uc3Qgb25QYWdlS2V5cyA9ICQoJ2FydGljbGUuaW4tY2FydCcpLm1hcChlbGUgPT4gcGFyc2VJbnQoZWxlLmRhdGFzZXQua2V5LCAxMCkpO1xuICAgIGNvbnN0IGluQ2FydEtleXMgPSBbLi4uY2FydF07XG4gICAgY29uc3Qga2V5c1RvUmVtb3ZlID0gb25QYWdlS2V5cy5maWx0ZXIoa2V5ID0+ICFpbkNhcnRLZXlzLmluY2x1ZGVzKGtleSkpO1xuXG4gICAga2V5c1RvUmVtb3ZlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICQoYGFydGljbGVbZGF0YS1rZXk9JyR7a2V5fSddYCkucmVtb3ZlQ2xhc3MoJ2luLWNhcnQnKTtcbiAgICAgICQoYGFydGljbGVbZGF0YS1rZXk9JyR7a2V5fSddIGJ1dHRvbi5hZGQtdG8tY2FydGApLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbWVudUVsZTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBhcnRpY2xlLCBidXR0b24sIGRpdiwgaDMsIHAsIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XG4gIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhoMyh0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcbiAgY29uc3QgYWRkVG9DYXJ0ID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0FkZCB0byBDYXJ0JykpLCAnYnV0dG9uJywgJ2lzLXB1bGxlZC1yaWdodCcsICdhZGQtdG8tY2FydCcpO1xuXG4gIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xuICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcblxuICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoaGVhZGxpbmUpKSwgJ3RpdGxlJyk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgYnV0dG9uLCBkaXYsIGgxLCBpLCBwLCBzZWN0aW9uLCB0ZXh0LCB1bCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7ICQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChzdG9yZSkge1xuICBjb25zdCBjbG9zZSA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2Nsb3NlJyksICdjbG9zZScpO1xuICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xuXG4gIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYocCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpKSwgJ2NhcnQtaXRlbXMnKTtcblxuICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcblxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcblxuICBzdG9yZS5vbignVE9HR0xFX1NIT1dfQ0FSVCcsICh7IGNhcnRWaXNpYmxlIH0pID0+IHtcbiAgICBjb25zdCBlbGUgPSAkKCcjbW9kYWwnKTtcbiAgICBpZiAoY2FydFZpc2libGUpIHtcbiAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgaXRlbXMsIGNhcnQgfSkgPT4ge1xuICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0QXJyYXkubWFwKGl0ZW1JZCA9PiBtb2RhbEl0ZW0oaXRlbXNbaXRlbUlkXSkpO1xuICAgIGNvbnN0IGNhcnRMaXN0ID0gYWRkQ2xhc3ModWwoLi4uY2FydEl0ZW1zKSwgJ21lbnUnKTtcbiAgICAkKCcjY2FydC1pdGVtcycpLmNoaWxkcmVuKGNhcnRMaXN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1vZGFsRWxlO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcblxuICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcbiAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3BhbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xuICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xuXG4gIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG4gIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcbiAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XG4gIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0JywgJ2NhcnQnKTtcblxuICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSkge1xuICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKVxuICAgIC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXG4gICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSkge1xuICBjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcblxuICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hpbGRyZW4odG9BZGQpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgZWxlLmFwcGVuZENoaWxkKHRvQWRkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGtsYXNzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3Moa2xhc3MpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShrbGFzcyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRyKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXAoY2IpIHtcbiAgICByZXR1cm4gZWxlbWVudHMubWFwKGNiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb24sXG4gICAgY2hpbGRyZW4sXG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXR0cixcbiAgICBtYXAsXG4gIH07XG59XG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCBzZXR1cExpc3RlbmVycyBmcm9tICcuL3NldHVwX2xpc3RlbmVycyc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdTRVRfSVRFTVMnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBkYXRhLml0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdG90YWwsIHsgW2l0ZW0uaWRdOiBpdGVtIH0pXG4gICAgICAgICAgLCB7fSksXG4gICAgICB9KTtcbiAgICBjYXNlICdJVEVNX0FEREVEJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjYXJ0OiAobmV3IFNldChzdGF0ZS5jYXJ0KSkuYWRkKGRhdGEuaXRlbSksXG4gICAgICB9KTtcbiAgICBjYXNlICdJVEVNX1JFTU9WRUQnOlxuICAgICAgY29uc3QgbmV3Q2FydCA9IChuZXcgU2V0KHN0YXRlLmNhcnQpKTtcbiAgICAgIG5ld0NhcnQuZGVsZXRlKGRhdGEuaXRlbSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY2FydDogbmV3Q2FydCxcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1RPR0dMRV9TSE9XX0NBUlQnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNhcnRWaXNpYmxlOiAhc3RhdGUuY2FydFZpc2libGUsXG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbmZldGNoKCdmb29kLmpzb24nKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4ocmVzQm9keSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShhcHAoc3RvcmUpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xuICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XG4gICAgc2V0dXBMaXN0ZW5lcnMoc3RvcmUpO1xuICB9KTtcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RvcmUpIHtcbiAgJCgnI2NhcnQtaWNvbiwgI2Nsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0b3JlLnRyaWdnZXIoJ1RPR0dMRV9TSE9XX0NBUlQnKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5kYXRhc2V0LmtleSkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudDtcbiAgfVxuXG4gICQoJy5hZGQtdG8tY2FydCcpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fQURERUQnLCB7IGl0ZW06IGtleSB9KTtcbiAgfSk7XG5cbiAgJCgnYm9keScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpO1xuICAgICAgY29uc3Qga2V5ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XG5cbiAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhcmVudCk7XG4gICAgICBzdG9yZS50cmlnZ2VyKCdJVEVNX1JFTU9WRUQnLCB7IGl0ZW06IGtleSB9KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBpdGVtczoge30sXG4gIGNhcnQ6IChuZXcgU2V0KCkpLFxuICBjYXJ0VmlzaWJsZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcbiAgbGV0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0YXRlKTtcblxuICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcbiAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2IpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KSB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cbiAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2Ioc3RhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICB0cmlnZ2VyLFxuICB9O1xufVxuIl19
