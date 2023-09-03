import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  h,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  unref,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-QNGQRF5U.js";

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// node_modules/date-fns/esm/addMonths/index.js
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

// node_modules/date-fns/esm/add/index.js
function add(dirtyDate, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var date = toDate(dirtyDate);
  var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date;
  var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1e3;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/startOfWeek/index.js
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/startOfISOWeek/index.js
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

// node_modules/date-fns/esm/getISOWeekYear/index.js
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfISOWeekYear/index.js
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/startOfDay/index.js
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/differenceInCalendarDays/index.js
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

// node_modules/date-fns/esm/addYears/index.js
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

// node_modules/date-fns/esm/constants/index.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/date-fns/esm/isDate/index.js
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/eachDayOfInterval/index.js
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}

// node_modules/date-fns/esm/endOfWeek/index.js
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY2 = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY2) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h2(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds2 = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds2 * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h3(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/esm/_lib/assign/index.js
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

// node_modules/date-fns/esm/formatDistanceStrict/index.js
var MILLISECONDS_IN_MINUTE = 1e3 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;

// node_modules/date-fns/esm/getDay/index.js
function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

// node_modules/date-fns/esm/getDaysInMonth/index.js
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth2 = /* @__PURE__ */ new Date(0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}

// node_modules/date-fns/esm/getHours/index.js
function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

// node_modules/date-fns/esm/getISOWeek/index.js
var MILLISECONDS_IN_WEEK3 = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK3) + 1;
}

// node_modules/date-fns/esm/getMinutes/index.js
function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

// node_modules/date-fns/esm/getMonth/index.js
function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

// node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js
var MILLISECONDS_IN_DAY3 = 24 * 60 * 60 * 1e3;

// node_modules/date-fns/esm/getSeconds/index.js
function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

// node_modules/date-fns/esm/getWeekYear/index.js
function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfWeekYear/index.js
function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/getWeek/index.js
var MILLISECONDS_IN_WEEK4 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK4) + 1;
}

// node_modules/date-fns/esm/getYear/index.js
function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

// node_modules/date-fns/esm/isAfter/index.js
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

// node_modules/date-fns/esm/isBefore/index.js
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// node_modules/date-fns/esm/isEqual/index.js
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i2 = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i2 >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i2++]
          };
        },
        e: function e2(_e2) {
          throw _e2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s3() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/date-fns/esm/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = function() {
  function Setter2() {
    _classCallCheck(this, Setter2);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
}();
var ValueSetter = function(_Setter) {
  _inherits(ValueSetter2, _Setter);
  var _super = _createSuper(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set2(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = function(_Setter2) {
  _inherits(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set2(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
}(Setter);

// node_modules/date-fns/esm/parse/_lib/Parser.js
var Parser = function() {
  function Parser2() {
    _classCallCheck(this, Parser2);
    _defineProperty(this, "incompatibleTokens", void 0);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", void 0);
  }
  _createClass(Parser2, [{
    key: "run",
    value: function run(dateString, token, match2, options) {
      var result = this.parse(dateString, token, match2, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
}();

// node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js
var EraParser = function(_Parser) {
  _inherits(EraParser2, _Parser);
  var _super = _createSuper(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 140);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
        case "GGGGG":
          return match2.era(dateString, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return match2.era(dateString, {
            width: "wide"
          }) || match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/esm/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js
var YearParser = function(_Parser) {
  _inherits(YearParser2, _Parser);
  var _super = _createSuper(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = function(_Parser) {
  _inherits(LocalWeekYearParser2, _Parser);
  var _super = _createSuper(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "Yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = function(_Parser) {
  _inherits(ISOWeekYearParser2, _Parser);
  var _super = _createSuper(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = function(_Parser) {
  _inherits(ExtendedYearParser2, _Parser);
  var _super = _createSuper(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js
var QuarterParser = function(_Parser) {
  _inherits(QuarterParser2, _Parser);
  var _super = _createSuper(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        case "Qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "QQQ":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = function(_Parser) {
  _inherits(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        case "qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "qqq":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js
var MonthParser = function(_Parser) {
  _inherits(MonthParser2, _Parser);
  var _super = _createSuper(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    return _this;
  }
  _createClass(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Mo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "MMM":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = function(_Parser) {
  _inherits(StandAloneMonthParser2, _Parser);
  var _super = _createSuper(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Lo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "LLL":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCWeek/index.js
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = function(_Parser) {
  _inherits(LocalWeekParser2, _Parser);
  var _super = _createSuper(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = function(_Parser) {
  _inherits(ISOWeekParser2, _Parser);
  var _super = _createSuper(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = function(_Parser) {
  _inherits(DateParser2, _Parser);
  var _super = _createSuper(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear2) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = function(_Parser) {
  _inherits(DayOfYearParser2, _Parser);
  var _super = _createSuper(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      if (isLeapYear2) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCDay/index.js
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js
var DayParser = function(_Parser) {
  _inherits(DayParser2, _Parser);
  var _super = _createSuper(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = function(_Parser) {
  _inherits(LocalDayParser2, _Parser);
  var _super = _createSuper(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "eo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "eee":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = function(_Parser) {
  _inherits(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "co":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "ccc":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISODay/index.js
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js
var ISODayParser = function(_Parser) {
  _inherits(ISODayParser2, _Parser);
  var _super = _createSuper(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        case "io":
          return match2.ordinalNumber(dateString, {
            unit: "day"
          });
        case "iii":
          return mapValue(match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiii":
          return mapValue(match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiiii":
          return mapValue(match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiii":
        default:
          return mapValue(match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js
var AMPMParser = function(_Parser) {
  _inherits(AMPMParser2, _Parser);
  var _super = _createSuper(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = function(_Parser) {
  _inherits(AMPMMidnightParser2, _Parser);
  var _super = _createSuper(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = function(_Parser) {
  _inherits(DayPeriodParser2, _Parser);
  var _super = _createSuper(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = function(_Parser) {
  _inherits(Hour1to12Parser2, _Parser);
  var _super = _createSuper(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = function(_Parser) {
  _inherits(Hour0to23Parser2, _Parser);
  var _super = _createSuper(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = function(_Parser) {
  _inherits(Hour0To11Parser2, _Parser);
  var _super = _createSuper(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = function(_Parser) {
  _inherits(Hour1To24Parser2, _Parser);
  var _super = _createSuper(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js
var MinuteParser = function(_Parser) {
  _inherits(MinuteParser2, _Parser);
  var _super = _createSuper(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 60);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match2.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js
var SecondParser = function(_Parser) {
  _inherits(SecondParser2, _Parser);
  var _super = _createSuper(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 50);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match2.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = function(_Parser) {
  _inherits(FractionOfSecondParser2, _Parser);
  var _super = _createSuper(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 30);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback3 = function valueCallback4(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback3);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = function(_Parser) {
  _inherits(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = function(_Parser) {
  _inherits(ISOTimezoneParser2, _Parser);
  var _super = _createSuper(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = function(_Parser) {
  _inherits(TimestampSecondsParser2, _Parser);
  var _super = _createSuper(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 40);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = function(_Parser) {
  _inherits(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 20);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/index.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/esm/parse/index.js
var formattingTokensRegExp2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp2 = /^'([^]*?)'?$/;
var doubleQuoteRegExp2 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp2 = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  if (!locale2.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp2).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters_default) {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp2);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale2.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp2)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString2(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof(_ret) === "object")
        return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a3, b2) {
    return b2 - a3;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a3, b2) {
      return b2.subPriority - a3.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString2(input) {
  return input.match(escapedStringRegExp2)[1].replace(doubleQuoteRegExp2, "'");
}

// node_modules/date-fns/esm/subDays/index.js
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

// node_modules/date-fns/esm/parseISO/index.js
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = /* @__PURE__ */ new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex2(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex2(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex2(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// node_modules/date-fns/esm/setMonth/index.js
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

// node_modules/date-fns/esm/set/index.js
function set(dirtyDate, values) {
  requiredArgs(2, arguments);
  if (_typeof(values) !== "object" || values === null) {
    throw new RangeError("values parameter must be an object");
  }
  var date = toDate(dirtyDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds));
  }
  return date;
}

// node_modules/date-fns/esm/setHours/index.js
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

// node_modules/date-fns/esm/setMilliseconds/index.js
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var milliseconds2 = toInteger(dirtyMilliseconds);
  date.setMilliseconds(milliseconds2);
  return date;
}

// node_modules/date-fns/esm/setMinutes/index.js
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

// node_modules/date-fns/esm/setSeconds/index.js
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

// node_modules/date-fns/esm/setYear/index.js
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}

// node_modules/date-fns/esm/subMonths/index.js
function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

// node_modules/date-fns/esm/sub/index.js
function sub(date, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var dateWithoutMonths = subMonths(date, months + years * 12);
  var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7);
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1e3;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

// node_modules/date-fns/esm/subYears/index.js
function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

// node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function Yt() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Yt.compatConfig = {
  MODE: 3
};
function pa() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createBaseVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
pa.compatConfig = {
  MODE: 3
};
function Rn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Rn.compatConfig = {
  MODE: 3
};
function Nn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function On() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createBaseVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
On.compatConfig = {
  MODE: 3
};
function In() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
In.compatConfig = {
  MODE: 3
};
function Yn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Yn.compatConfig = {
  MODE: 3
};
function Bn(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var ba = { exports: {} };
(function(e2) {
  function n(a3) {
    return a3 && a3.__esModule ? a3 : {
      default: a3
    };
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(ba);
var Ja = ba.exports;
var wn = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2) {
    if (t2 === null || t2 === true || t2 === false)
      return NaN;
    var o = Number(t2);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e2.exports = n.default;
})(wn, wn.exports);
var Xa = wn.exports;
var xa = Bn(Xa);
var Dn = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2) {
    var o = new Date(Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate(), t2.getHours(), t2.getMinutes(), t2.getSeconds(), t2.getMilliseconds()));
    return o.setUTCFullYear(t2.getFullYear()), t2.getTime() - o.getTime();
  }
  e2.exports = n.default;
})(Dn, Dn.exports);
var Qa = Dn.exports;
var Kn = Bn(Qa);
function er(e2, n) {
  var a3 = rr(n);
  return a3.formatToParts ? nr(a3, e2) : ar(a3, e2);
}
var tr = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function nr(e2, n) {
  try {
    for (var a3 = e2.formatToParts(n), t2 = [], o = 0; o < a3.length; o++) {
      var l = tr[a3[o].type];
      l >= 0 && (t2[l] = parseInt(a3[o].value, 10));
    }
    return t2;
  } catch (d3) {
    if (d3 instanceof RangeError)
      return [NaN];
    throw d3;
  }
}
function ar(e2, n) {
  var a3 = e2.format(n).replace(/\u200E/g, ""), t2 = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a3);
  return [t2[3], t2[1], t2[2], t2[4], t2[5], t2[6]];
}
var sn = {};
function rr(e2) {
  if (!sn[e2]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a3 = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    sn[e2] = a3 ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return sn[e2];
}
function En(e2, n, a3, t2, o, l, d3) {
  var M3 = /* @__PURE__ */ new Date(0);
  return M3.setUTCFullYear(e2, n, a3), M3.setUTCHours(t2, o, l, d3), M3;
}
var Gn = 36e5;
var lr = 6e4;
var un = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Fn(e2, n, a3) {
  var t2, o;
  if (!e2 || (t2 = un.timezoneZ.exec(e2), t2))
    return 0;
  var l;
  if (t2 = un.timezoneHH.exec(e2), t2)
    return l = parseInt(t2[1], 10), Zn(l) ? -(l * Gn) : NaN;
  if (t2 = un.timezoneHHMM.exec(e2), t2) {
    l = parseInt(t2[1], 10);
    var d3 = parseInt(t2[2], 10);
    return Zn(l, d3) ? (o = Math.abs(l) * Gn + d3 * lr, l > 0 ? -o : o) : NaN;
  }
  if (ur(e2)) {
    n = new Date(n || Date.now());
    var M3 = a3 ? n : or(n), p = Mn(M3, e2), $ = a3 ? p : sr(n, p, e2);
    return -$;
  }
  return NaN;
}
function or(e2) {
  return En(
    e2.getFullYear(),
    e2.getMonth(),
    e2.getDate(),
    e2.getHours(),
    e2.getMinutes(),
    e2.getSeconds(),
    e2.getMilliseconds()
  );
}
function Mn(e2, n) {
  var a3 = er(e2, n), t2 = En(
    a3[0],
    a3[1] - 1,
    a3[2],
    a3[3] % 24,
    a3[4],
    a3[5],
    0
  ).getTime(), o = e2.getTime(), l = o % 1e3;
  return o -= l >= 0 ? l : 1e3 + l, t2 - o;
}
function sr(e2, n, a3) {
  var t2 = e2.getTime(), o = t2 - n, l = Mn(new Date(o), a3);
  if (n === l)
    return n;
  o -= l - n;
  var d3 = Mn(new Date(o), a3);
  return l === d3 ? l : Math.max(l, d3);
}
function Zn(e2, n) {
  return -23 <= e2 && e2 <= 23 && (n == null || 0 <= n && n <= 59);
}
var qn = {};
function ur(e2) {
  if (qn[e2])
    return true;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e2 }), qn[e2] = true, true;
  } catch {
    return false;
  }
}
var ka = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var dn = 36e5;
var Jn = 6e4;
var ir = 2;
var Ye = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: ka
};
function $n(e2, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e2 === null)
    return /* @__PURE__ */ new Date(NaN);
  var a3 = n || {}, t2 = a3.additionalDigits == null ? ir : xa(a3.additionalDigits);
  if (t2 !== 2 && t2 !== 1 && t2 !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e2 instanceof Date || typeof e2 == "object" && Object.prototype.toString.call(e2) === "[object Date]")
    return new Date(e2.getTime());
  if (typeof e2 == "number" || Object.prototype.toString.call(e2) === "[object Number]")
    return new Date(e2);
  if (!(typeof e2 == "string" || Object.prototype.toString.call(e2) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = dr(e2), l = cr(o.date, t2), d3 = l.year, M3 = l.restDateString, p = fr(M3, d3);
  if (isNaN(p))
    return /* @__PURE__ */ new Date(NaN);
  if (p) {
    var $ = p.getTime(), h4 = 0, S3;
    if (o.time && (h4 = vr(o.time), isNaN(h4)))
      return /* @__PURE__ */ new Date(NaN);
    if (o.timeZone || a3.timeZone) {
      if (S3 = Fn(o.timeZone || a3.timeZone, new Date($ + h4)), isNaN(S3))
        return /* @__PURE__ */ new Date(NaN);
    } else
      S3 = Kn(new Date($ + h4)), S3 = Kn(new Date($ + h4 + S3));
    return new Date($ + h4 + S3);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function dr(e2) {
  var n = {}, a3 = Ye.dateTimePattern.exec(e2), t2;
  if (a3 ? (n.date = a3[1], t2 = a3[3]) : (a3 = Ye.datePattern.exec(e2), a3 ? (n.date = a3[1], t2 = a3[2]) : (n.date = null, t2 = e2)), t2) {
    var o = Ye.timeZone.exec(t2);
    o ? (n.time = t2.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = t2;
  }
  return n;
}
function cr(e2, n) {
  var a3 = Ye.YYY[n], t2 = Ye.YYYYY[n], o;
  if (o = Ye.YYYY.exec(e2) || t2.exec(e2), o) {
    var l = o[1];
    return {
      year: parseInt(l, 10),
      restDateString: e2.slice(l.length)
    };
  }
  if (o = Ye.YY.exec(e2) || a3.exec(e2), o) {
    var d3 = o[1];
    return {
      year: parseInt(d3, 10) * 100,
      restDateString: e2.slice(d3.length)
    };
  }
  return {
    year: null
  };
}
function fr(e2, n) {
  if (n === null)
    return null;
  var a3, t2, o, l;
  if (e2.length === 0)
    return t2 = /* @__PURE__ */ new Date(0), t2.setUTCFullYear(n), t2;
  if (a3 = Ye.MM.exec(e2), a3)
    return t2 = /* @__PURE__ */ new Date(0), o = parseInt(a3[1], 10) - 1, xn(n, o) ? (t2.setUTCFullYear(n, o), t2) : /* @__PURE__ */ new Date(NaN);
  if (a3 = Ye.DDD.exec(e2), a3) {
    t2 = /* @__PURE__ */ new Date(0);
    var d3 = parseInt(a3[1], 10);
    return yr(n, d3) ? (t2.setUTCFullYear(n, 0, d3), t2) : /* @__PURE__ */ new Date(NaN);
  }
  if (a3 = Ye.MMDD.exec(e2), a3) {
    t2 = /* @__PURE__ */ new Date(0), o = parseInt(a3[1], 10) - 1;
    var M3 = parseInt(a3[2], 10);
    return xn(n, o, M3) ? (t2.setUTCFullYear(n, o, M3), t2) : /* @__PURE__ */ new Date(NaN);
  }
  if (a3 = Ye.Www.exec(e2), a3)
    return l = parseInt(a3[1], 10) - 1, Qn(n, l) ? Xn(n, l) : /* @__PURE__ */ new Date(NaN);
  if (a3 = Ye.WwwD.exec(e2), a3) {
    l = parseInt(a3[1], 10) - 1;
    var p = parseInt(a3[2], 10) - 1;
    return Qn(n, l, p) ? Xn(n, l, p) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function vr(e2) {
  var n, a3, t2;
  if (n = Ye.HH.exec(e2), n)
    return a3 = parseFloat(n[1].replace(",", ".")), cn(a3) ? a3 % 24 * dn : NaN;
  if (n = Ye.HHMM.exec(e2), n)
    return a3 = parseInt(n[1], 10), t2 = parseFloat(n[2].replace(",", ".")), cn(a3, t2) ? a3 % 24 * dn + t2 * Jn : NaN;
  if (n = Ye.HHMMSS.exec(e2), n) {
    a3 = parseInt(n[1], 10), t2 = parseInt(n[2], 10);
    var o = parseFloat(n[3].replace(",", "."));
    return cn(a3, t2, o) ? a3 % 24 * dn + t2 * Jn + o * 1e3 : NaN;
  }
  return null;
}
function Xn(e2, n, a3) {
  n = n || 0, a3 = a3 || 0;
  var t2 = /* @__PURE__ */ new Date(0);
  t2.setUTCFullYear(e2, 0, 4);
  var o = t2.getUTCDay() || 7, l = n * 7 + a3 + 1 - o;
  return t2.setUTCDate(t2.getUTCDate() + l), t2;
}
var mr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var gr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function wa(e2) {
  return e2 % 400 === 0 || e2 % 4 === 0 && e2 % 100 !== 0;
}
function xn(e2, n, a3) {
  if (n < 0 || n > 11)
    return false;
  if (a3 != null) {
    if (a3 < 1)
      return false;
    var t2 = wa(e2);
    if (t2 && a3 > gr[n] || !t2 && a3 > mr[n])
      return false;
  }
  return true;
}
function yr(e2, n) {
  if (n < 1)
    return false;
  var a3 = wa(e2);
  return !(a3 && n > 366 || !a3 && n > 365);
}
function Qn(e2, n, a3) {
  return !(n < 0 || n > 52 || a3 != null && (a3 < 0 || a3 > 6));
}
function cn(e2, n, a3) {
  return !(e2 != null && (e2 < 0 || e2 >= 25) || n != null && (n < 0 || n >= 60) || a3 != null && (a3 < 0 || a3 >= 60));
}
var Tn = { exports: {} };
var An = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2, o) {
    if (t2 == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var l in o)
      Object.prototype.hasOwnProperty.call(o, l) && (t2[l] = o[l]);
    return t2;
  }
  e2.exports = n.default;
})(An, An.exports);
var hr = An.exports;
(function(e2, n) {
  var a3 = Ja.default;
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = o;
  var t2 = a3(hr);
  function o(l) {
    return (0, t2.default)({}, l);
  }
  e2.exports = n.default;
})(Tn, Tn.exports);
var pr = Tn.exports;
var br = Bn(pr);
function kr(e2, n, a3) {
  var t2 = $n(e2, a3), o = Fn(n, t2, true), l = new Date(t2.getTime() - o), d3 = /* @__PURE__ */ new Date(0);
  return d3.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()), d3.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()), d3;
}
function wr(e2, n, a3) {
  if (typeof e2 == "string" && !e2.match(ka)) {
    var t2 = br(a3);
    return t2.timeZone = n, $n(e2, t2);
  }
  var o = $n(e2, a3), l = En(
    o.getFullYear(),
    o.getMonth(),
    o.getDate(),
    o.getHours(),
    o.getMinutes(),
    o.getSeconds(),
    o.getMilliseconds()
  ).getTime(), d3 = Fn(n, new Date(l));
  return new Date(l + d3);
}
function ea(e2) {
  return (n) => new Intl.DateTimeFormat(e2, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2);
}
function Dr(e2) {
  return (n) => format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e2 });
}
var Mr = (e2, n, a3) => {
  const t2 = [1, 2, 3, 4, 5, 6, 7];
  let o;
  if (e2 !== null)
    try {
      o = t2.map(Dr(e2));
    } catch {
      o = t2.map(ea(n));
    }
  else
    o = t2.map(ea(n));
  const l = o.slice(0, a3), d3 = o.slice(a3 + 1, o.length);
  return [o[a3]].concat(...d3).concat(...l);
};
var Vn = (e2, n) => {
  const a3 = [];
  for (let t2 = +e2[0]; t2 <= +e2[1]; t2++)
    a3.push({ value: +t2, text: `${t2}` });
  return n ? a3.reverse() : a3;
};
var Da = (e2, n, a3) => {
  const t2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const d3 = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${d3}-01T00:00:00+00:00`);
  });
  if (e2 !== null)
    try {
      const l = a3 === "long" ? "MMMM" : "MMM";
      return t2.map((d3, M3) => {
        const p = format(d3, l, { locale: e2 });
        return {
          text: p.charAt(0).toUpperCase() + p.substring(1),
          value: M3
        };
      });
    } catch {
    }
  const o = new Intl.DateTimeFormat(n, { month: a3, timeZone: "UTC" });
  return t2.map((l, d3) => {
    const M3 = o.format(l);
    return {
      text: M3.charAt(0).toUpperCase() + M3.substring(1),
      value: d3
    };
  });
};
var $r = (e2) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e2];
var Ae = (e2) => {
  const n = unref(e2);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
};
var Tr = (e2) => Object.assign({ type: "dot" }, e2);
var Ma = (e2) => Array.isArray(e2) ? !!e2[0] && !!e2[1] : false;
var Zt = {
  prop: (e2) => `"${e2}" prop must be enabled!`,
  dateArr: (e2) => `You need to use array as "model-value" binding in order to support "${e2}"`
};
var Te = (e2) => e2;
var ta = (e2) => e2 === 0 ? e2 : !e2 || isNaN(+e2) ? null : +e2;
var na = (e2) => e2 === null;
var Ar = (e2) => {
  if (e2)
    return [...e2.querySelectorAll("input, button, select, textarea, a[href]")][0];
};
var Sr = (e2) => {
  const n = [], a3 = (t2) => t2.filter((o) => o);
  for (let t2 = 0; t2 < e2.length; t2 += 3) {
    const o = [e2[t2], e2[t2 + 1], e2[t2 + 2]];
    n.push(a3(o));
  }
  return n;
};
var Rt = (e2, n, a3) => {
  const t2 = a3 ?? a3 === 0, o = n ?? n === 0;
  if (!t2 && !o)
    return false;
  const l = +a3, d3 = +n;
  return t2 && o ? +e2 > l || +e2 < d3 : t2 ? +e2 > l : o ? +e2 < d3 : false;
};
var kt = (e2, n) => Sr(e2).map((a3) => a3.map((t2) => {
  const { active: o, disabled: l, isBetween: d3 } = n(t2);
  return {
    ...t2,
    active: o,
    disabled: l,
    className: {
      dp__overlay_cell_active: o,
      dp__overlay_cell: !o,
      dp__overlay_cell_disabled: l,
      dp__overlay_cell_pad: true,
      dp__overlay_cell_active_disabled: l && o,
      dp__cell_in_between: d3
    }
  };
}));
var aa = (e2, n, a3, t2, o) => {
  const l = parse(e2, n.slice(0, e2.length), /* @__PURE__ */ new Date());
  return isValid(l) && isDate(l) ? t2 || o ? l : set(l, {
    hours: +a3.hours,
    minutes: +(a3 == null ? void 0 : a3.minutes),
    seconds: +(a3 == null ? void 0 : a3.seconds),
    milliseconds: 0
  }) : null;
};
var _r = (e2, n, a3, t2, o) => {
  const l = Array.isArray(a3) ? a3[0] : a3;
  if (typeof n == "string")
    return aa(e2, n, l, t2, o);
  if (Array.isArray(n)) {
    let d3 = null;
    for (const M3 of n)
      if (d3 = aa(e2, M3, l, t2, o), d3)
        break;
    return d3;
  }
  return typeof n == "function" ? n(e2) : null;
};
var P = (e2) => e2 ? new Date(e2) : /* @__PURE__ */ new Date();
var Pr = (e2, n, a3) => {
  if (n) {
    const o = (e2.getMonth() + 1).toString().padStart(2, "0"), l = e2.getDate().toString().padStart(2, "0"), d3 = e2.getHours().toString().padStart(2, "0"), M3 = e2.getMinutes().toString().padStart(2, "0"), p = a3 ? e2.getSeconds().toString().padStart(2, "0") : "00";
    return `${e2.getFullYear()}-${o}-${l}T${d3}:${M3}:${p}.000Z`;
  }
  const t2 = Date.UTC(
    e2.getUTCFullYear(),
    e2.getUTCMonth(),
    e2.getUTCDate(),
    e2.getUTCHours(),
    e2.getUTCMinutes(),
    e2.getUTCSeconds()
  );
  return new Date(t2).toISOString();
};
var Le = (e2) => {
  let n = P(JSON.parse(JSON.stringify(e2)));
  return n = setHours(n, 0), n = setMinutes(n, 0), n = setSeconds(n, 0), n = setMilliseconds(n, 0), n;
};
var nt = (e2, n, a3, t2) => {
  let o = e2 ? P(e2) : P();
  return (n || n === 0) && (o = setHours(o, +n)), (a3 || a3 === 0) && (o = setMinutes(o, +a3)), (t2 || t2 === 0) && (o = setSeconds(o, +t2)), setMilliseconds(o, 0);
};
var Pe = (e2, n) => !e2 || !n ? false : isBefore(Le(e2), Le(n));
var ye = (e2, n) => !e2 || !n ? false : isEqual(Le(e2), Le(n));
var Ne = (e2, n) => !e2 || !n ? false : isAfter(Le(e2), Le(n));
var Hn = (e2, n, a3) => e2 != null && e2[0] && (e2 != null && e2[1]) ? Ne(a3, e2[0]) && Pe(a3, e2[1]) : e2 != null && e2[0] && n ? Ne(a3, e2[0]) && Pe(a3, n) || Pe(a3, e2[0]) && Ne(a3, n) : false;
var ze = (e2) => {
  const n = set(new Date(e2), { date: 1 });
  return Le(n);
};
var fn = (e2, n, a3) => n && (a3 || a3 === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t2) => t2 === n ? [t2, a3] : [t2, isNaN(+e2[t2]) ? void 0 : +e2[t2]])
) : {
  hours: isNaN(+e2.hours) ? void 0 : +e2.hours,
  minutes: isNaN(+e2.minutes) ? void 0 : +e2.minutes,
  seconds: isNaN(+e2.seconds) ? void 0 : +e2.seconds
};
var vt = (e2) => ({
  hours: getHours(e2),
  minutes: getMinutes(e2),
  seconds: getSeconds(e2)
});
var $a = (e2, n) => {
  if (n) {
    const a3 = getYear(P(n));
    if (a3 > e2)
      return 12;
    if (a3 === e2)
      return getMonth(P(n));
  }
};
var Ta = (e2, n) => {
  if (n) {
    const a3 = getYear(P(n));
    return a3 < e2 ? -1 : a3 === e2 ? getMonth(P(n)) : void 0;
  }
};
var wt = (e2) => {
  if (e2)
    return getYear(P(e2));
};
var Ze = (e2, n) => n ? kr(e2, n) : e2;
var Cr = (e2, n) => n ? wr(e2, n) : e2;
var ra = (e2) => e2 instanceof Date ? e2 : parseISO(e2);
var Aa = (e2, n) => {
  const a3 = Ne(e2, n) ? n : e2, t2 = Ne(n, e2) ? n : e2;
  return eachDayOfInterval({ start: a3, end: t2 });
};
var Rr = (e2) => {
  const n = addMonths(e2, 1);
  return { month: getMonth(n), year: getYear(n) };
};
var Kt = (e2, n, a3) => {
  const t2 = startOfWeek(Ze(e2, n), { weekStartsOn: +a3 }), o = endOfWeek(Ze(e2, n), { weekStartsOn: +a3 });
  return [t2, o];
};
var Sa = (e2, n) => {
  const a3 = {
    hours: getHours(P()),
    minutes: getMinutes(P()),
    seconds: n ? getSeconds(P()) : 0
  };
  return Object.assign(a3, e2);
};
var tt = (e2, n, a3) => [set(P(e2), { date: 1 }), set(P(), { month: n, year: a3, date: 1 })];
var xe = (e2, n, a3) => {
  let t2 = e2 ? P(e2) : P();
  return (n || n === 0) && (t2 = setMonth(t2, n)), a3 && (t2 = setYear(t2, a3)), t2;
};
var _a = (e2, n, a3, t2, o) => {
  if (!t2 || o && !n || !o && !a3)
    return false;
  const l = o ? addMonths(e2, 1) : subMonths(e2, 1), d3 = [getMonth(l), getYear(l)];
  return o ? !Or(...d3, n) : !Nr(...d3, a3);
};
var Nr = (e2, n, a3) => Pe(...tt(a3, e2, n)) || ye(...tt(a3, e2, n));
var Or = (e2, n, a3) => Ne(...tt(a3, e2, n)) || ye(...tt(a3, e2, n));
var Pa = (e2, n, a3, t2, o, l) => {
  if (typeof n == "function")
    return n(e2);
  const d3 = a3 ? { locale: a3 } : void 0;
  return Array.isArray(e2) ? `${format(e2[0], l, d3)}${o && !e2[1] ? "" : t2}${e2[1] ? format(e2[1], l, d3) : ""}` : format(e2, l, d3);
};
var yt = (e2) => {
  if (e2)
    return null;
  throw new Error(Zt.prop("partial-range"));
};
var Lt = (e2, n) => {
  if (n)
    return e2();
  throw new Error(Zt.prop("range"));
};
var Sn = (e2) => Array.isArray(e2) ? isValid(e2[0]) && (e2[1] ? isValid(e2[1]) : true) : e2 ? isValid(e2) : false;
var Ir = (e2) => set(P(), {
  hours: +e2.hours || 0,
  minutes: +e2.minutes || 0,
  seconds: +e2.seconds || 0
});
var vn = (e2, n, a3, t2) => {
  if (!e2)
    return true;
  if (t2) {
    const o = a3 === "max" ? isBefore(e2, n) : isAfter(e2, n), l = { seconds: 0, milliseconds: 0 };
    return o || isEqual(set(e2, l), set(n, l));
  }
  return a3 === "max" ? e2.getTime() <= n.getTime() : e2.getTime() >= n.getTime();
};
var la = (e2, n, a3, t2, o) => {
  const l = e2 ? Ir(e2) : P(n);
  return Array.isArray(t2) ? vn(t2[0], l, a3, !!n) && vn(t2[1], l, a3, !!n) && o : vn(t2, l, a3, !!n) && o;
};
var mn = (e2) => set(P(), vt(e2));
var Yr = (e2, n) => Array.isArray(e2) ? e2.map((a3) => P(a3)).filter((a3) => getYear(P(a3)) === n).map((a3) => getMonth(a3)) : [];
var At = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
});
var Ca = () => {
  const e2 = (t2) => {
    At.menuFocused = t2;
  }, n = (t2) => {
    At.shiftKeyInMenu !== t2 && (At.shiftKeyInMenu = t2);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: At.shiftKeyInMenu, menuFocused: At.menuFocused })),
    setMenuFocused: e2,
    setShiftKey: n
  };
};
var be = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
});
var gn = ref(null);
var Ut = ref(false);
var yn = ref(false);
var hn = ref(false);
var pn = ref(false);
var Oe = ref(0);
var _e = ref(0);
var lt = () => {
  const e2 = computed(() => Ut.value ? [...be.selectionGrid, be.actionRow].filter((k2) => k2.length) : yn.value ? [
    ...be.timePicker[0],
    ...be.timePicker[1],
    pn.value ? [] : [gn.value],
    be.actionRow
  ].filter((k2) => k2.length) : hn.value ? [...be.monthPicker, be.actionRow] : [be.monthYear, ...be.calendar, be.time, be.actionRow].filter((k2) => k2.length)), n = (k2) => {
    Oe.value = k2 ? Oe.value + 1 : Oe.value - 1;
    let T2 = null;
    e2.value[_e.value] && (T2 = e2.value[_e.value][Oe.value]), T2 || (Oe.value = k2 ? Oe.value - 1 : Oe.value + 1);
  }, a3 = (k2) => {
    if (_e.value === 0 && !k2 || _e.value === e2.value.length && k2)
      return;
    _e.value = k2 ? _e.value + 1 : _e.value - 1, e2.value[_e.value] ? e2.value[_e.value] && !e2.value[_e.value][Oe.value] && Oe.value !== 0 && (Oe.value = e2.value[_e.value].length - 1) : _e.value = k2 ? _e.value - 1 : _e.value + 1;
  }, t2 = (k2) => {
    let T2 = null;
    e2.value[_e.value] && (T2 = e2.value[_e.value][Oe.value]), T2 ? T2.focus({ preventScroll: !Ut.value }) : Oe.value = k2 ? Oe.value - 1 : Oe.value + 1;
  }, o = () => {
    n(true), t2(true);
  }, l = () => {
    n(false), t2(false);
  }, d3 = () => {
    a3(false), t2(true);
  }, M3 = () => {
    a3(true), t2(true);
  }, p = (k2, T2) => {
    be[T2] = k2;
  }, $ = (k2, T2) => {
    be[T2] = k2;
  }, h4 = () => {
    Oe.value = 0, _e.value = 0;
  };
  return {
    buildMatrix: p,
    buildMultiLevelMatrix: $,
    setTimePickerBackRef: (k2) => {
      gn.value = k2;
    },
    setSelectionGrid: (k2) => {
      Ut.value = k2, h4(), k2 || (be.selectionGrid = []);
    },
    setTimePicker: (k2, T2 = false) => {
      yn.value = k2, pn.value = T2, h4(), k2 || (be.timePicker[0] = [], be.timePicker[1] = []);
    },
    setTimePickerElements: (k2, T2 = 0) => {
      be.timePicker[T2] = k2;
    },
    arrowRight: o,
    arrowLeft: l,
    arrowUp: d3,
    arrowDown: M3,
    clearArrowNav: () => {
      be.monthYear = [], be.calendar = [], be.time = [], be.actionRow = [], be.selectionGrid = [], be.timePicker[0] = [], be.timePicker[1] = [], Ut.value = false, yn.value = false, pn.value = false, hn.value = false, h4(), gn.value = null;
    },
    setMonthPicker: (k2) => {
      hn.value = k2, h4();
    },
    refSets: be
    // exposed for testing
  };
};
var oa = (e2) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e2 ?? {}
});
var Br = (e2) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (n) => `Increment ${n}`,
  decrementValue: (n) => `Decrement ${n}`,
  openTpOverlay: (n) => `Open ${n} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e2 ?? {}
});
var sa = (e2) => e2 ? typeof e2 == "boolean" ? e2 ? 2 : 0 : +e2 >= 2 ? +e2 : 2 : 0;
var Er = (e2) => {
  const n = typeof e2 == "object" && e2, a3 = {
    static: true,
    solo: false
  };
  if (!e2)
    return { ...a3, count: sa(false) };
  const t2 = n ? e2 : {}, o = n ? t2.count ?? true : e2, l = sa(o);
  return Object.assign(a3, t2, { count: l });
};
var Fr = (e2, n, a3) => e2 || (typeof a3 == "string" ? a3 : n);
var Vr = (e2) => typeof e2 == "boolean" ? e2 ? oa({}) : false : oa(e2);
var Hr = (e2) => {
  const n = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    rangeSeparator: " - "
  };
  return typeof e2 == "object" ? { ...n, ...e2 ?? {}, enabled: true } : { ...n, enabled: e2 };
};
var Lr = (e2) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e2 ?? {}
});
var Ur = (e2) => ({
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true,
  ...e2 ?? {}
});
var Wr = (e2) => {
  const n = { input: false };
  return typeof e2 == "object" ? { ...n, ...e2 ?? {}, enabled: true } : {
    enabled: e2,
    ...n
  };
};
var Re = (e2) => {
  const n = () => {
    const W = e2.enableSeconds ? ":ss" : "";
    return e2.is24 ? `HH:mm${W}` : `hh:mm${W} aa`;
  }, a3 = () => e2.format ? e2.format : e2.monthPicker ? "MM/yyyy" : e2.timePicker ? n() : e2.weekPicker ? "MM/dd/yyyy" : e2.yearPicker ? "yyyy" : e2.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy", t2 = (W) => Sa(W, e2.enableSeconds), o = () => e2.range ? e2.startTime && Array.isArray(e2.startTime) ? [t2(e2.startTime[0]), t2(e2.startTime[1])] : null : e2.startTime && !Array.isArray(e2.startTime) ? t2(e2.startTime) : null, l = computed(() => Er(e2.multiCalendars)), d3 = computed(() => o()), M3 = computed(() => Br(e2.ariaLabels)), p = computed(() => Lr(e2.filters)), $ = computed(() => Vr(e2.transitions)), h4 = computed(() => Ur(e2.actionRow)), S3 = computed(
    () => Fr(e2.previewFormat, e2.format, a3())
  ), R2 = computed(() => Hr(e2.textInput)), J = computed(() => Wr(e2.inline));
  return {
    defaultedTransitions: $,
    defaultedMultiCalendars: l,
    defaultedStartTime: d3,
    defaultedAriaLabels: M3,
    defaultedFilters: p,
    defaultedActionRow: h4,
    defaultedPreviewFormat: S3,
    defaultedTextInput: R2,
    defaultedInline: J,
    getDefaultPattern: a3,
    getDefaultStartTime: o
  };
};
var zr = (e2, n, a3) => {
  const t2 = ref(), { defaultedTextInput: o, getDefaultPattern: l } = Re(n), d3 = ref(""), M3 = toRef(n, "format");
  watch(t2, () => {
    e2("internal-model-change", t2.value);
  }), watch(M3, () => {
    V();
  });
  const p = (r) => Cr(r, n.timezone), $ = (r) => Ze(r, n.timezone), h4 = (r, U) => Pa(
    r,
    n.format,
    n.formatLocale,
    o.value.rangeSeparator,
    n.modelAuto,
    U ?? l()
  ), S3 = (r) => {
    const U = r ?? P();
    return n.modelType ? m3(U) : {
      hours: getHours(U),
      minutes: getMinutes(U),
      seconds: n.enableSeconds ? getSeconds(U) : 0
    };
  }, R2 = (r) => n.modelType ? m3(r) : { month: getMonth(r), year: getYear(r) }, J = (r) => Array.isArray(r) ? Lt(
    () => [
      setYear(P(), r[0]),
      r[1] ? setYear(P(), r[1]) : yt(n.partialRange)
    ],
    n.range
  ) : setYear(P(), +r), W = (r, U) => (typeof r == "string" || typeof r == "number") && n.modelType ? b2(r) : U, Q2 = (r) => Array.isArray(r) ? [
    W(
      r[0],
      nt(null, +r[0].hours, +r[0].minutes, r[0].seconds)
    ),
    W(
      r[1],
      nt(null, +r[1].hours, +r[1].minutes, r[1].seconds)
    )
  ] : W(r, nt(null, r.hours, r.minutes, r.seconds)), Z = (r) => Array.isArray(r) ? n.multiDates ? r.map((U) => W(U, xe(null, +U.month, +U.year))) : Lt(
    () => [
      W(r[0], xe(null, +r[0].month, +r[0].year)),
      W(
        r[1],
        r[1] ? xe(null, +r[1].month, +r[1].year) : yt(n.partialRange)
      )
    ],
    n.range
  ) : W(r, xe(null, +r.month, +r.year)), k2 = (r) => {
    if (Array.isArray(r))
      return r.map((U) => b2(U));
    throw new Error(Zt.dateArr("multi-dates"));
  }, T2 = (r) => {
    if (Array.isArray(r))
      return [P(r[0]), P(r[1])];
    throw new Error(Zt.dateArr("week-picker"));
  }, I2 = (r) => n.modelAuto ? Array.isArray(r) ? [b2(r[0]), b2(r[1])] : n.autoApply ? [b2(r)] : [b2(r), null] : Array.isArray(r) ? Lt(
    () => [
      b2(r[0]),
      r[1] ? b2(r[1]) : yt(n.partialRange)
    ],
    n.range
  ) : b2(r), H3 = () => {
    Array.isArray(t2.value) && n.range && t2.value.length === 1 && t2.value.push(yt(n.partialRange));
  }, A = () => {
    const r = t2.value;
    return [
      m3(r[0]),
      r[1] ? m3(r[1]) : yt(n.partialRange)
    ];
  }, q2 = () => t2.value[1] ? A() : m3(Te(t2.value[0])), j = () => (t2.value || []).map((r) => m3(r)), le = () => (H3(), n.modelAuto ? q2() : n.multiDates ? j() : Array.isArray(t2.value) ? Lt(() => A(), n.range) : m3(Te(t2.value))), f = (r) => !r || Array.isArray(r) && !r.length ? null : n.timePicker ? Q2(Te(r)) : n.monthPicker ? Z(Te(r)) : n.yearPicker ? J(Te(r)) : n.multiDates ? k2(Te(r)) : n.weekPicker ? T2(Te(r)) : I2(Te(r)), w2 = (r) => {
    const U = f(r);
    Sn(Te(U)) ? (t2.value = Te(U), V()) : (t2.value = null, d3.value = "");
  }, C = () => {
    const r = (U) => format(U, o.value.format);
    return `${r(t2.value[0])} ${o.value.rangeSeparator} ${t2.value[1] ? r(t2.value[1]) : ""}`;
  }, K2 = () => a3.value && t2.value ? Array.isArray(t2.value) ? C() : format(t2.value, o.value.format) : h4(t2.value), c2 = () => t2.value ? n.multiDates ? t2.value.map((r) => h4(r)).join("; ") : o.value.enabled && typeof o.value.format == "string" ? K2() : h4(t2.value) : "", V = () => {
    !n.format || typeof n.format == "string" || o.value.enabled && typeof o.value.format == "string" ? d3.value = c2() : d3.value = n.format(t2.value);
  }, b2 = (r) => {
    if (n.utc) {
      const U = new Date(r);
      return n.utc === "preserve" ? new Date(U.getTime() + U.getTimezoneOffset() * 6e4) : U;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? $(new Date(r)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? parse(r, l(), /* @__PURE__ */ new Date()) : $(parse(r, n.modelType, /* @__PURE__ */ new Date())) : $(new Date(r));
  }, m3 = (r) => r ? n.utc ? Pr(r, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +p(r) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? h4(p(r)) : h4(p(r), n.modelType) : p(r) : "", u2 = (r, U = false) => {
    if (e2("update:model-value", r), n.emitTimezone && U) {
      const N = Array.isArray(r) ? r.map((g) => Ze(Te(g)), n.emitTimezone) : Ze(Te(r), n.emitTimezone);
      e2("update:model-timezone-value", N);
    }
  }, y3 = (r) => Array.isArray(t2.value) ? n.multiDates ? t2.value.map((U) => r(U)) : [
    r(t2.value[0]),
    t2.value[1] ? r(t2.value[1]) : yt(n.partialRange)
  ] : r(Te(t2.value)), s3 = (r) => u2(Te(y3(r)));
  return {
    inputValue: d3,
    internalModelValue: t2,
    checkBeforeEmit: () => t2.value ? n.range ? n.partialRange ? t2.value.length >= 1 : t2.value.length === 2 : !!t2.value : false,
    parseExternalModelValue: w2,
    formatInputValue: V,
    emitModelValue: () => (V(), n.monthPicker ? s3(R2) : n.timePicker ? s3(S3) : n.yearPicker ? s3(getYear) : n.weekPicker ? u2(t2.value, true) : u2(le(), true))
  };
};
var jr = (e2, n) => {
  const { defaultedFilters: a3 } = Re(e2), { validateMonthYearInRange: t2 } = Et(e2), o = ($, h4) => {
    let S3 = $;
    return a3.value.months.includes(getMonth(S3)) ? (S3 = h4 ? addMonths($, 1) : subMonths($, 1), o(S3, h4)) : S3;
  }, l = ($, h4) => {
    let S3 = $;
    return a3.value.years.includes(getYear(S3)) ? (S3 = h4 ? addYears($, 1) : subYears($, 1), l(S3, h4)) : S3;
  }, d3 = ($, h4 = false) => {
    const S3 = set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year });
    let R2 = $ ? addMonths(S3, 1) : subMonths(S3, 1);
    e2.disableYearSelect && (R2 = setYear(R2, e2.year));
    let J = getMonth(R2), W = getYear(R2);
    a3.value.months.includes(J) && (R2 = o(R2, $), J = getMonth(R2), W = getYear(R2)), a3.value.years.includes(W) && (R2 = l(R2, $), W = getYear(R2)), t2(J, W, $, e2.preventMinMaxNavigation) && M3(J, W, h4);
  }, M3 = ($, h4, S3) => {
    n("update-month-year", { month: $, year: h4, fromNav: S3 });
  }, p = computed(() => ($) => _a(
    set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year }),
    e2.maxDate,
    e2.minDate,
    e2.preventMinMaxNavigation,
    $
  ));
  return { handleMonthYearChange: d3, isDisabled: p, updateMonthYear: M3 };
};
var ht = ((e2) => (e2.center = "center", e2.left = "left", e2.right = "right", e2))(ht || {});
var We = ((e2) => (e2.month = "month", e2.year = "year", e2))(We || {});
var ut = ((e2) => (e2.top = "top", e2.bottom = "bottom", e2))(ut || {});
var mt = ((e2) => (e2.header = "header", e2.calendar = "calendar", e2.timePicker = "timePicker", e2))(mt || {});
var Ke = ((e2) => (e2.month = "month", e2.year = "year", e2.calendar = "calendar", e2.time = "time", e2.minutes = "minutes", e2.hours = "hours", e2.seconds = "seconds", e2))(Ke || {});
var Kr = ({
  menuRef: e2,
  menuRefInner: n,
  inputRef: a3,
  pickerWrapperRef: t2,
  inline: o,
  emit: l,
  props: d3,
  slots: M3
}) => {
  const p = ref({}), $ = ref(false), h4 = ref({
    top: "0",
    left: "0"
  }), S3 = ref(false), R2 = toRef(d3, "teleportCenter");
  watch(R2, () => {
    h4.value = JSON.parse(JSON.stringify({})), H3();
  });
  const J = (m3) => {
    if (d3.teleport) {
      const u2 = m3.getBoundingClientRect();
      return {
        left: u2.left + window.scrollX,
        top: u2.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, W = (m3, u2) => {
    h4.value.left = `${m3 + u2 - p.value.width}px`;
  }, Q2 = (m3) => {
    h4.value.left = `${m3}px`;
  }, Z = (m3, u2) => {
    d3.position === ht.left && Q2(m3), d3.position === ht.right && W(m3, u2), d3.position === ht.center && (h4.value.left = `${m3 + u2 / 2 - p.value.width / 2}px`);
  }, k2 = (m3) => {
    const { width: u2, height: y3 } = m3.getBoundingClientRect(), { top: s3, left: _ } = d3.altPosition ? d3.altPosition(m3) : J(m3);
    return { top: +s3, left: +_, width: u2, height: y3 };
  }, T2 = () => {
    h4.value.left = "50%", h4.value.top = "50%", h4.value.transform = "translate(-50%, -50%)", h4.value.position = "fixed", delete h4.value.opacity;
  }, I2 = () => {
    const m3 = Ae(a3), { top: u2, left: y3, transform: s3 } = d3.altPosition(m3);
    h4.value = { top: `${u2}px`, left: `${y3}px`, transform: s3 ?? "" };
  }, H3 = (m3 = true) => {
    var u2;
    if (!o.value.enabled) {
      if (R2.value)
        return T2();
      if (d3.altPosition !== null)
        return I2();
      if (m3) {
        const y3 = d3.teleport ? (u2 = n.value) == null ? void 0 : u2.$el : e2.value;
        y3 && (p.value = y3.getBoundingClientRect()), l("recalculate-position");
      }
      return C();
    }
  }, A = ({ inputEl: m3, left: u2, width: y3 }) => {
    window.screen.width > 768 && !$.value && Z(u2, y3), le(m3);
  }, q2 = (m3) => {
    const { top: u2, left: y3, height: s3, width: _ } = k2(m3);
    h4.value.top = `${s3 + u2 + +d3.offset}px`, S3.value = false, $.value || (h4.value.left = `${y3 + _ / 2 - p.value.width / 2}px`), A({ inputEl: m3, left: y3, width: _ });
  }, j = (m3) => {
    const { top: u2, left: y3, width: s3 } = k2(m3);
    h4.value.top = `${u2 - +d3.offset - p.value.height}px`, S3.value = true, A({ inputEl: m3, left: y3, width: s3 });
  }, le = (m3) => {
    if (d3.autoPosition) {
      const { left: u2, width: y3 } = k2(m3), { left: s3, right: _ } = p.value;
      if (!$.value) {
        if (Math.abs(s3) !== Math.abs(_)) {
          if (s3 <= 0)
            return $.value = true, Q2(u2);
          if (_ >= document.documentElement.clientWidth)
            return $.value = true, W(u2, y3);
        }
        return Z(u2, y3);
      }
    }
  }, f = () => {
    const m3 = Ae(a3);
    if (m3) {
      const { height: u2 } = p.value, { top: y3, height: s3 } = m3.getBoundingClientRect(), ee = window.innerHeight - y3 - s3, r = y3;
      return u2 <= ee ? ut.bottom : u2 > ee && u2 <= r ? ut.top : ee >= r ? ut.bottom : ut.top;
    }
    return ut.bottom;
  }, w2 = (m3) => f() === ut.bottom ? q2(m3) : j(m3), C = () => {
    const m3 = Ae(a3);
    if (m3)
      return d3.autoPosition ? w2(m3) : q2(m3);
  }, K2 = function(m3) {
    if (m3) {
      const u2 = m3.scrollHeight > m3.clientHeight, s3 = window.getComputedStyle(m3).overflowY.indexOf("hidden") !== -1;
      return u2 && !s3;
    }
    return true;
  }, c2 = function(m3) {
    return !m3 || m3 === document.body || m3.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : K2(m3) ? m3 : c2(m3.parentNode);
  }, V = (m3) => {
    if (m3)
      switch (d3.position) {
        case ht.left:
          return { left: 0, transform: "translateX(0)" };
        case ht.right:
          return { left: `${m3.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${m3.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: S3,
    menuStyle: h4,
    xCorrect: $,
    setMenuPosition: H3,
    getScrollableParent: c2,
    shadowRender: (m3, u2) => {
      var N, g, F;
      const y3 = document.createElement("div"), s3 = (N = Ae(a3)) == null ? void 0 : N.getBoundingClientRect();
      y3.setAttribute("id", "dp--temp-container");
      const _ = (g = t2.value) != null && g.clientWidth ? t2.value : document.body;
      _.append(y3);
      const ee = document.getElementById("dp--temp-container"), r = V(s3), U = h(
        m3,
        {
          ...u2,
          shadow: true,
          style: { opacity: 0, position: "absolute", ...r }
        },
        Object.fromEntries(Object.keys(M3).map((ae) => [ae, M3[ae]]))
      );
      render(U, ee), p.value = (F = U.el) == null ? void 0 : F.getBoundingClientRect(), render(null, ee), _.removeChild(ee);
    }
  };
};
var st = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] }
];
var Gr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }];
var Zr = {
  all: () => st,
  monthYear: () => st.filter((e2) => e2.use.includes("month-year")),
  input: () => Gr,
  timePicker: () => st.filter((e2) => e2.use.includes("time")),
  action: () => st.filter((e2) => e2.use.includes("action")),
  calendar: () => st.filter((e2) => e2.use.includes("calendar")),
  menu: () => st.filter((e2) => e2.use.includes("menu")),
  shared: () => st.filter((e2) => e2.use.includes("shared"))
};
var je = (e2, n, a3) => {
  const t2 = [];
  return Zr[n]().forEach((o) => {
    e2[o.name] && t2.push(o.name);
  }), a3 != null && a3.length && a3.forEach((o) => {
    o.slot && t2.push(o.slot);
  }), t2;
};
var Bt = (e2) => {
  const n = computed(() => (t2) => e2.value ? t2 ? e2.value.open : e2.value.close : ""), a3 = computed(() => (t2) => e2.value ? t2 ? e2.value.menuAppearTop : e2.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e2.value, menuTransition: a3 };
};
var qt = (e2, n) => {
  const a3 = ref([{ month: getMonth(P()), year: getYear(P()) }]), t2 = reactive({
    hours: e2.range ? [getHours(P()), getHours(P())] : getHours(P()),
    minutes: e2.range ? [getMinutes(P()), getMinutes(P())] : getMinutes(P()),
    seconds: e2.range ? [0, 0] : 0
  }), o = computed({
    get: () => e2.internalModelValue,
    set: (M3) => {
      !e2.readonly && !e2.disabled && n("update:internal-model-value", M3);
    }
  }), l = computed(
    () => (M3) => a3.value[M3] ? a3.value[M3].month : 0
  ), d3 = computed(
    () => (M3) => a3.value[M3] ? a3.value[M3].year : 0
  );
  return {
    calendars: a3,
    time: t2,
    modelValue: o,
    month: l,
    year: d3
  };
};
var qr = (e2, n) => {
  const { defaultedMultiCalendars: a3 } = Re(n), { isDisabled: t2, matchDate: o } = Et(n), l = ref(null), d3 = ref(P()), M3 = (s3) => {
    !s3.current && n.hideOffsetDates || (l.value = s3.value);
  }, p = () => {
    l.value = null;
  }, $ = (s3) => Array.isArray(e2.value) && n.range && e2.value[0] && l.value ? s3 ? Ne(l.value, e2.value[0]) : Pe(l.value, e2.value[0]) : true, h4 = (s3, _) => {
    const ee = () => e2.value ? _ ? e2.value[0] || null : e2.value[1] : null, r = e2.value && Array.isArray(e2.value) ? ee() : null;
    return ye(P(s3.value), r);
  }, S3 = (s3) => {
    const _ = Array.isArray(e2.value) ? e2.value[0] : null;
    return s3 ? !Pe(l.value ?? null, _) : true;
  }, R2 = (s3, _ = true) => (n.range || n.weekPicker) && Array.isArray(e2.value) && e2.value.length === 2 ? n.hideOffsetDates && !s3.current ? false : ye(P(s3.value), e2.value[_ ? 0 : 1]) : n.range ? h4(s3, _) && S3(_) || ye(s3.value, Array.isArray(e2.value) ? e2.value[0] : null) && $(_) : false, J = (s3, _, ee) => Array.isArray(e2.value) && e2.value[0] && e2.value.length === 1 ? s3 ? false : ee ? Ne(e2.value[0], _.value) : Pe(e2.value[0], _.value) : false, W = (s3) => !e2.value || n.hideOffsetDates && !s3.current ? false : n.range ? n.modelAuto && Array.isArray(e2.value) ? ye(s3.value, e2.value[0] ? e2.value[0] : d3.value) : false : n.multiDates && Array.isArray(e2.value) ? e2.value.some((_) => ye(_, s3.value)) : ye(s3.value, e2.value ? e2.value : d3.value), Q2 = (s3) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !s3.current)
          return false;
        const _ = addDays(l.value, +n.autoRange), ee = Kt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ye(ee[1], P(s3.value)) : ye(_, P(s3.value));
      }
      return false;
    }
    return false;
  }, Z = (s3) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        const _ = addDays(l.value, +n.autoRange);
        if (n.hideOffsetDates && !s3.current)
          return false;
        const ee = Kt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? Ne(s3.value, ee[0]) && Pe(s3.value, ee[1]) : Ne(s3.value, l.value) && Pe(s3.value, _);
      }
      return false;
    }
    return false;
  }, k2 = (s3) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !s3.current)
          return false;
        const _ = Kt(P(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ye(_[0], s3.value) : ye(l.value, s3.value);
      }
      return false;
    }
    return false;
  }, T2 = (s3) => Hn(e2.value, l.value, s3.value), I2 = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : false, H3 = () => n.modelAuto ? Ma(n.internalModelValue) : true, A = (s3) => {
    if (Array.isArray(e2.value) && e2.value.length || n.weekPicker)
      return false;
    const _ = n.range ? !R2(s3) && !R2(s3, false) : true;
    return !t2(s3.value) && !W(s3) && !(!s3.current && n.hideOffsetDates) && _;
  }, q2 = (s3) => n.range ? n.modelAuto ? I2() && W(s3) : false : W(s3), j = (s3) => {
    var _;
    return n.highlight ? o(
      s3.value,
      (_ = n.arrMapValues) != null && _.highlightedDates ? n.arrMapValues.highlightedDates : n.highlight
    ) : false;
  }, le = (s3) => t2(s3.value) && n.highlightDisabledDays === false, f = (s3) => {
    var _;
    return (_ = n.highlightWeekDays) == null ? void 0 : _.includes(s3.value.getDay());
  }, w2 = (s3) => (n.range || n.weekPicker) && (!(a3.value.count > 0) || s3.current) && H3() && !(!s3.current && n.hideOffsetDates) && !W(s3) ? T2(s3) : false, C = (s3) => {
    const { isRangeStart: _, isRangeEnd: ee } = V(s3), r = n.range ? _ || ee : false;
    return {
      dp__cell_offset: !s3.current,
      dp__pointer: !n.disabled && !(!s3.current && n.hideOffsetDates) && !t2(s3.value),
      dp__cell_disabled: t2(s3.value),
      dp__cell_highlight: !le(s3) && (j(s3) || f(s3)) && !q2(s3) && !r,
      dp__cell_highlight_active: !le(s3) && (j(s3) || f(s3)) && q2(s3),
      dp__today: !n.noToday && ye(s3.value, d3.value) && s3.current
    };
  }, K2 = (s3) => ({
    dp__active_date: q2(s3),
    dp__date_hover: A(s3)
  }), c2 = (s3) => ({
    ...b2(s3),
    ...m3(s3),
    dp__range_between_week: w2(s3) && n.weekPicker
  }), V = (s3) => {
    const _ = a3.value.count > 0 ? s3.current && R2(s3) && H3() : R2(s3) && H3(), ee = a3.value.count > 0 ? s3.current && R2(s3, false) && H3() : R2(s3, false) && H3();
    return { isRangeStart: _, isRangeEnd: ee };
  }, b2 = (s3) => {
    const { isRangeStart: _, isRangeEnd: ee } = V(s3);
    return {
      dp__range_start: _,
      dp__range_end: ee,
      dp__range_between: w2(s3) && !n.weekPicker,
      dp__date_hover_start: J(A(s3), s3, true),
      dp__date_hover_end: J(A(s3), s3, false)
    };
  }, m3 = (s3) => ({
    ...b2(s3),
    dp__cell_auto_range: Z(s3),
    dp__cell_auto_range_start: k2(s3),
    dp__cell_auto_range_end: Q2(s3)
  }), u2 = (s3) => n.range ? n.autoRange ? m3(s3) : n.modelAuto ? { ...K2(s3), ...b2(s3) } : b2(s3) : n.weekPicker ? c2(s3) : K2(s3);
  return {
    setHoverDate: M3,
    clearHoverDate: p,
    getDayClassData: (s3) => n.hideOffsetDates && !s3.current ? {} : {
      ...C(s3),
      ...u2(s3),
      [n.dayClass ? n.dayClass(s3.value) : ""]: true,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    }
  };
};
var Et = (e2) => {
  const { defaultedFilters: n } = Re(e2), a3 = (f) => {
    const w2 = Le(t2(P(f))).toISOString(), [C] = w2.split("T");
    return C;
  }, t2 = (f) => Ze(f, e2.timezone), o = (f) => {
    var s3;
    const w2 = e2.maxDate ? Ne(t2(f), t2(P(e2.maxDate))) : false, C = e2.minDate ? Pe(t2(f), t2(P(e2.minDate))) : false, K2 = p(
      f,
      (s3 = e2.arrMapValues) != null && s3.disabledDates ? e2.arrMapValues.disabledDates : e2.disabledDates
    ), V = n.value.months.map((_) => +_).includes(getMonth(f)), b2 = e2.disabledWeekDays.length ? e2.disabledWeekDays.some((_) => +_ === getDay(f)) : false, m3 = h4(f), u2 = getYear(f), y3 = u2 < +e2.yearRange[0] || u2 > +e2.yearRange[1];
    return !(w2 || C || K2 || V || y3 || b2 || m3);
  }, l = (f, w2) => Pe(...tt(e2.minDate, f, w2)) || ye(...tt(e2.minDate, f, w2)), d3 = (f, w2) => Ne(...tt(e2.maxDate, f, w2)) || ye(...tt(e2.maxDate, f, w2)), M3 = (f, w2, C) => {
    let K2 = false;
    return e2.maxDate && C && d3(f, w2) && (K2 = true), e2.minDate && !C && l(f, w2) && (K2 = true), K2;
  }, p = (f, w2) => f ? w2 instanceof Map ? !!w2.get(a3(f)) : Array.isArray(w2) ? w2.some((C) => ye(t2(P(C)), t2(f))) : w2 ? w2(P(JSON.parse(JSON.stringify(f)))) : false : true, $ = (f, w2, C, K2) => {
    let c2 = false;
    return K2 ? e2.minDate && e2.maxDate ? c2 = M3(f, w2, C) : (e2.minDate && l(f, w2) || e2.maxDate && d3(f, w2)) && (c2 = true) : c2 = true, c2;
  }, h4 = (f) => {
    var w2, C, K2, c2, V;
    return Array.isArray(e2.allowedDates) && !((w2 = e2.allowedDates) != null && w2.length) ? true : (C = e2.arrMapValues) != null && C.allowedDates ? !p(f, (K2 = e2.arrMapValues) == null ? void 0 : K2.allowedDates) : (c2 = e2.allowedDates) != null && c2.length ? !((V = e2.allowedDates) != null && V.some((b2) => ye(t2(P(b2)), t2(f)))) : false;
  }, S3 = (f) => !o(f), R2 = (f) => !eachDayOfInterval({ start: f[0], end: f[1] }).some((C) => S3(C)), J = (f, w2, C = 0) => {
    if (Array.isArray(w2) && w2[C]) {
      const K2 = differenceInCalendarDays(f, w2[C]), c2 = Aa(w2[C], f), V = c2.length === 1 ? 0 : c2.filter((m3) => S3(m3)).length, b2 = Math.abs(K2) - V;
      if (e2.minRange && e2.maxRange)
        return b2 >= +e2.minRange && b2 <= +e2.maxRange;
      if (e2.minRange)
        return b2 >= +e2.minRange;
      if (e2.maxRange)
        return b2 <= +e2.maxRange;
    }
    return true;
  }, W = (f) => new Map(f.map((w2) => [a3(w2), true])), Q2 = (f) => Array.isArray(f) && f.length > 0, Z = () => {
    const f = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return Q2(e2.allowedDates) && (f.allowedDates = W(e2.allowedDates)), Q2(e2.highlight) && (f.highlightedDates = W(e2.highlight)), Q2(e2.disabledDates) && (f.disabledDates = W(e2.disabledDates)), f;
  }, k2 = () => !e2.enableTimePicker || e2.monthPicker || e2.yearPicker || e2.ignoreTimeValidation, T2 = (f) => Array.isArray(f) ? [f[0] ? mn(f[0]) : null, f[1] ? mn(f[1]) : null] : mn(f), I2 = (f, w2, C) => f.find(
    (K2) => +K2.hours === getHours(w2) && K2.minutes === "*" ? true : +K2.minutes === getMinutes(w2)
  ) && C, H3 = (f, w2, C) => {
    const [K2, c2] = f, [V, b2] = w2;
    return !I2(K2, V, C) && !I2(c2, b2, C) && C;
  }, A = (f, w2) => {
    const C = Array.isArray(w2) ? w2 : [w2];
    return Array.isArray(e2.disabledTimes) ? Array.isArray(e2.disabledTimes[0]) ? H3(e2.disabledTimes, C, f) : !C.some((K2) => I2(e2.disabledTimes, K2, f)) : f;
  }, q2 = (f, w2) => {
    const C = Array.isArray(w2) ? [vt(w2[0]), w2[1] ? vt(w2[1]) : void 0] : vt(w2), K2 = !e2.disabledTimes(C);
    return f && K2;
  }, j = (f, w2) => e2.disabledTimes ? Array.isArray(e2.disabledTimes) ? A(w2, f) : q2(w2, f) : w2;
  return {
    isDisabled: S3,
    validateDate: o,
    validateMonthYearInRange: $,
    isDateRangeAllowed: R2,
    checkMinMaxRange: J,
    matchDate: p,
    mapDatesArrToMap: Z,
    isValidTime: (f) => {
      let w2 = true;
      if (!f || k2())
        return true;
      const C = !e2.minDate && !e2.maxDate ? T2(f) : f;
      return (e2.maxTime || e2.maxDate) && (w2 = la(e2.maxTime, e2.maxDate, "max", Te(C), w2)), (e2.minTime || e2.minDate) && (w2 = la(e2.minTime, e2.minDate, "min", Te(C), w2)), j(f, w2);
    }
  };
};
var Jt = () => {
  const e2 = computed(() => (t2, o) => t2 == null ? void 0 : t2.includes(o)), n = computed(() => (t2, o) => t2.count ? t2.solo ? true : o === 0 : true), a3 = computed(() => (t2, o) => t2.count ? t2.solo ? true : o === t2.count - 1 : true);
  return { hideNavigationButtons: e2, showLeftIcon: n, showRightIcon: a3 };
};
var Jr = (e2, n, a3) => {
  const t2 = ref(0), o = reactive({
    // monthYearInput: !!props.timePicker,
    [mt.timePicker]: !e2.enableTimePicker || e2.timePicker || e2.monthPicker,
    [mt.calendar]: false,
    [mt.header]: false
  }), l = (h4) => {
    var S3;
    (S3 = e2.flow) != null && S3.length && (o[h4] = true, Object.keys(o).filter((R2) => !o[R2]).length || $());
  }, d3 = () => {
    var h4;
    (h4 = e2.flow) != null && h4.length && t2.value !== -1 && (t2.value += 1, n("flow-step", t2.value), $());
  }, M3 = () => {
    t2.value = -1;
  }, p = (h4, S3, ...R2) => {
    e2.flow[t2.value] === h4 && a3.value && a3.value[S3](...R2);
  }, $ = () => {
    p(Ke.month, "toggleMonthPicker", true), p(Ke.year, "toggleYearPicker", true), p(Ke.calendar, "toggleTimePicker", false, true), p(Ke.time, "toggleTimePicker", true, true);
    const h4 = e2.flow[t2.value];
    (h4 === Ke.hours || h4 === Ke.minutes || h4 === Ke.seconds) && p(h4, "toggleTimePicker", true, true, h4);
  };
  return { childMount: l, updateFlowStep: d3, resetFlow: M3, flowStep: t2 };
};
var Xt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: false },
  autoPosition: { type: Boolean, default: true },
  closeOnAutoApply: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  keepActionRow: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: false },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: false },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: [Boolean, Object], default: false },
  textInput: { type: [Boolean, Object], default: false },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  allowPreventDefault: { type: Boolean, default: false },
  closeOnClearValue: { type: Boolean, default: true },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null }
};
var Qe = {
  ...Xt,
  shadow: { type: Boolean, default: false },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) }
};
var Xr = {
  key: 1,
  class: "dp__input_wrap"
};
var xr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"];
var Qr = {
  key: 2,
  class: "dp__clear_icon"
};
var el = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...Xt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { defaultedTextInput: o, defaultedAriaLabels: l, defaultedInline: d3, getDefaultPattern: M3, getDefaultStartTime: p } = Re(t2), $ = ref(), h4 = ref(null), S3 = ref(false), R2 = ref(false), J = computed(
      () => ({
        dp__pointer: !t2.disabled && !t2.readonly && !o.value.enabled,
        dp__disabled: t2.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: true,
        dp__input_icon_pad: !t2.hideInputIcon,
        dp__input_valid: !!t2.state,
        dp__input_invalid: t2.state === false,
        dp__input_focus: S3.value || t2.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [t2.inputClassName]: !!t2.inputClassName
      })
    ), W = () => {
      a3("set-input-date", null), t2.autoApply && (a3("set-empty-date"), $.value = null);
    }, Q2 = (c2) => {
      const V = p();
      return _r(
        c2,
        o.value.format ?? M3(),
        V ?? Sa({}, t2.enableSeconds),
        t2.inputValue,
        R2.value
      );
    }, Z = (c2) => {
      const { rangeSeparator: V } = o.value, [b2, m3] = c2.split(`${V}`);
      if (b2) {
        const u2 = Q2(b2.trim()), y3 = m3 ? Q2(m3.trim()) : null, s3 = u2 && y3 ? [u2, y3] : [u2];
        $.value = u2 ? s3 : null;
      }
    }, k2 = () => {
      R2.value = true;
    }, T2 = (c2) => {
      if (t2.range)
        Z(c2);
      else if (t2.multiDates) {
        const V = c2.split(";");
        $.value = V.map((b2) => Q2(b2.trim())).filter((b2) => b2);
      } else
        $.value = Q2(c2);
    }, I2 = (c2) => {
      var b2;
      const V = typeof c2 == "string" ? c2 : (b2 = c2.target) == null ? void 0 : b2.value;
      V !== "" ? (o.value.openMenu && !t2.isMenuOpen && a3("open"), T2(V), a3("set-input-date", $.value)) : W(), R2.value = false, a3("update:input-value", V);
    }, H3 = (c2) => {
      o.value.enabled ? (T2(c2.target.value), o.value.enterSubmit && Sn($.value) && t2.inputValue !== "" ? (a3("set-input-date", $.value, true), $.value = null) : o.value.enterSubmit && t2.inputValue === "" && ($.value = null, a3("clear"))) : j(c2);
    }, A = (c2) => {
      o.value.enabled && o.value.tabSubmit && T2(c2.target.value), o.value.tabSubmit && Sn($.value) && t2.inputValue !== "" ? (a3("set-input-date", $.value, true), $.value = null) : o.value.tabSubmit && t2.inputValue === "" && ($.value = null, a3("clear"));
    }, q2 = () => {
      S3.value = true, a3("focus");
    }, j = (c2) => {
      c2.preventDefault(), c2.stopImmediatePropagation(), c2.stopPropagation(), o.value.enabled && o.value.openMenu && !d3.value.input && !t2.isMenuOpen ? a3("open") : o.value.enabled || a3("toggle");
    }, le = () => {
      a3("real-blur"), S3.value = false, (!t2.isMenuOpen || d3.value.enabled && d3.value.input) && a3("blur"), t2.autoApply && o.value.enabled && $.value && !t2.isMenuOpen && (a3("set-input-date", $.value), a3("select-date"), $.value = null);
    }, f = () => {
      a3("clear");
    }, w2 = (c2) => {
      if (!o.value.enabled) {
        if (c2.code === "Tab")
          return;
        c2.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var c2;
        (c2 = h4.value) == null || c2.focus({ preventScroll: true });
      },
      setParsedDate: (c2) => {
        $.value = c2;
      }
    }), (c2, V) => {
      var b2;
      return openBlock(), createElementBlock("div", { onClick: j }, [
        c2.$slots.trigger && !c2.$slots["dp-input"] && !unref(d3).enabled ? renderSlot(c2.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !c2.$slots.trigger && (!unref(d3).enabled || unref(d3).input) ? (openBlock(), createElementBlock("div", Xr, [
          c2.$slots["dp-input"] && !c2.$slots.trigger && !unref(d3).enabled ? renderSlot(c2.$slots, "dp-input", {
            key: 0,
            value: e2.inputValue,
            isMenuOpen: e2.isMenuOpen,
            onInput: I2,
            onEnter: H3,
            onTab: A,
            onClear: f,
            onBlur: le,
            onKeypress: w2,
            onPaste: k2
          }) : createCommentVNode("", true),
          c2.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            ref_key: "inputRef",
            ref: h4,
            id: c2.uid ? `dp-input-${c2.uid}` : void 0,
            name: c2.name,
            class: normalizeClass(J.value),
            inputmode: unref(o).enabled ? "text" : "none",
            placeholder: c2.placeholder,
            disabled: c2.disabled,
            readonly: c2.readonly,
            required: c2.required,
            value: e2.inputValue,
            autocomplete: c2.autocomplete,
            "aria-label": (b2 = unref(l)) == null ? void 0 : b2.input,
            "aria-disabled": c2.disabled || void 0,
            "aria-invalid": c2.state === false ? true : void 0,
            onInput: I2,
            onKeydown: [
              withKeys(H3, ["enter"]),
              withKeys(A, ["tab"]),
              w2
            ],
            onBlur: le,
            onFocus: q2,
            onKeypress: w2,
            onPaste: k2
          }, null, 42, xr)),
          createBaseVNode("div", {
            onClick: V[2] || (V[2] = (m3) => a3("toggle"))
          }, [
            c2.$slots["input-icon"] && !c2.hideInputIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: V[0] || (V[0] = (m3) => a3("toggle"))
            }, [
              renderSlot(c2.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !c2.$slots["input-icon"] && !c2.hideInputIcon && !c2.$slots["dp-input"] ? (openBlock(), createBlock(unref(Yt), {
              key: 1,
              onClick: V[1] || (V[1] = (m3) => a3("toggle")),
              class: "dp__input_icon dp__input_icons"
            })) : createCommentVNode("", true)
          ]),
          c2.$slots["clear-icon"] && e2.inputValue && c2.clearable && !c2.disabled && !c2.readonly ? (openBlock(), createElementBlock("span", Qr, [
            renderSlot(c2.$slots, "clear-icon", { clear: f })
          ])) : createCommentVNode("", true),
          c2.clearable && !c2.$slots["clear-icon"] && e2.inputValue && !c2.disabled && !c2.readonly ? (openBlock(), createBlock(unref(pa), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: withModifiers(f, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var tl = ["title"];
var nl = { class: "dp__action_buttons" };
var al = ["onKeydown", "disabled"];
var rl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    calendarWidth: { type: Number, default: 0 },
    ...Qe
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e2, { emit: n }) {
    const a3 = e2, {
      defaultedActionRow: t2,
      defaultedPreviewFormat: o,
      defaultedMultiCalendars: l,
      defaultedTextInput: d3,
      defaultedInline: M3,
      getDefaultPattern: p
    } = Re(a3), { isValidTime: $ } = Et(a3), { buildMatrix: h4 } = lt(), S3 = ref(null), R2 = ref(null);
    onMounted(() => {
      a3.arrowNavigation && h4([Ae(S3), Ae(R2)], "actionRow");
    });
    const J = computed(() => a3.range && !a3.partialRange && a3.internalModelValue ? a3.internalModelValue.length === 2 : true), W = computed(() => !Q2.value || !Z.value || !J.value), Q2 = computed(() => !a3.enableTimePicker || a3.ignoreTimeValidation ? true : $(a3.internalModelValue)), Z = computed(() => a3.monthPicker ? a3.range && Array.isArray(a3.internalModelValue) ? !a3.internalModelValue.filter((w2) => !j(w2)).length : j(a3.internalModelValue) : true), k2 = () => {
      const f = o.value;
      return a3.timePicker || a3.monthPicker, f(Te(a3.internalModelValue));
    }, T2 = () => {
      const f = a3.internalModelValue;
      return l.value.count > 0 ? `${I2(f[0])} - ${I2(f[1])}` : [I2(f[0]), I2(f[1])];
    }, I2 = (f) => Pa(
      f,
      o.value,
      a3.formatLocale,
      d3.value.rangeSeparator,
      a3.modelAuto,
      p()
    ), H3 = computed(() => !a3.internalModelValue || !a3.menuMount ? "" : typeof o.value == "string" ? Array.isArray(a3.internalModelValue) ? a3.internalModelValue.length === 2 && a3.internalModelValue[1] ? T2() : a3.multiDates ? a3.internalModelValue.map((f) => `${I2(f)}`) : a3.modelAuto ? `${I2(a3.internalModelValue[0])}` : `${I2(a3.internalModelValue[0])} -` : I2(a3.internalModelValue) : k2()), A = () => a3.multiDates ? "; " : " - ", q2 = computed(
      () => Array.isArray(H3.value) ? H3.value.join(A()) : H3.value
    ), j = (f) => {
      if (!a3.monthPicker)
        return true;
      let w2 = true;
      const C = P(ze(f));
      if (a3.minDate && a3.maxDate) {
        const K2 = P(ze(a3.minDate)), c2 = P(ze(a3.maxDate));
        return Ne(C, K2) && Pe(C, c2) || ye(C, K2) || ye(C, c2);
      }
      if (a3.minDate) {
        const K2 = P(ze(a3.minDate));
        w2 = Ne(C, K2) || ye(C, K2);
      }
      if (a3.maxDate) {
        const K2 = P(ze(a3.maxDate));
        w2 = Pe(C, K2) || ye(C, K2);
      }
      return w2;
    }, le = () => {
      Q2.value && Z.value && J.value ? n("select-date") : n("invalid-select");
    };
    return (f, w2) => (openBlock(), createElementBlock("div", {
      class: "dp__action_row",
      style: normalizeStyle(e2.calendarWidth ? { width: `${e2.calendarWidth}px` } : {})
    }, [
      f.$slots["action-row"] ? renderSlot(f.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: f.internalModelValue,
        disabled: W.value,
        selectDate: () => f.$emit("select-date"),
        closePicker: () => f.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(t2).showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: q2.value
        }, [
          f.$slots["action-preview"] ? renderSlot(f.$slots, "action-preview", {
            key: 0,
            value: f.internalModelValue
          }) : createCommentVNode("", true),
          f.$slots["action-preview"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(q2.value), 1)
          ], 64))
        ], 8, tl)) : createCommentVNode("", true),
        createBaseVNode("div", nl, [
          f.$slots["action-buttons"] ? renderSlot(f.$slots, "action-buttons", {
            key: 0,
            value: f.internalModelValue
          }) : createCommentVNode("", true),
          f.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !unref(M3).enabled && unref(t2).showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: S3,
              class: "dp__action_button dp__action_cancel",
              onClick: w2[0] || (w2[0] = (C) => f.$emit("close-picker")),
              onKeydown: [
                w2[1] || (w2[1] = withKeys((C) => f.$emit("close-picker"), ["enter"])),
                w2[2] || (w2[2] = withKeys((C) => f.$emit("close-picker"), ["space"]))
              ]
            }, toDisplayString(f.cancelText), 545)) : createCommentVNode("", true),
            unref(t2).showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: S3,
              class: "dp__action_button dp__action_cancel",
              onClick: w2[3] || (w2[3] = (C) => f.$emit("select-now")),
              onKeydown: [
                w2[4] || (w2[4] = withKeys((C) => f.$emit("select-now"), ["enter"])),
                w2[5] || (w2[5] = withKeys((C) => f.$emit("select-now"), ["space"]))
              ]
            }, toDisplayString(f.nowButtonLabel), 545)) : createCommentVNode("", true),
            unref(t2).showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                withKeys(le, ["enter"]),
                withKeys(le, ["space"])
              ],
              onClick: le,
              disabled: W.value,
              ref_key: "selectButtonRef",
              ref: R2
            }, toDisplayString(f.selectText), 41, al)) : createCommentVNode("", true)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
});
var ll = ["onKeydown"];
var ol = { class: "dp__selection_grid_header" };
var sl = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"];
var ul = ["aria-label", "onKeydown"];
var Nt = defineComponent({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] }
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { setSelectionGrid: o, buildMultiLevelMatrix: l, setMonthPicker: d3 } = lt(), { defaultedAriaLabels: M3, defaultedTextInput: p } = Re(t2), { hideNavigationButtons: $ } = Jt(), h4 = ref(false), S3 = ref(null), R2 = ref(null), J = ref([]), W = ref(), Q2 = ref(null), Z = ref(0), k2 = ref(null);
    onBeforeUpdate(() => {
      S3.value = null;
    }), onMounted(() => {
      nextTick().then(() => f()), I2(), T2(true);
    }), onUnmounted(() => T2(false));
    const T2 = (u2) => {
      var y3;
      t2.arrowNavigation && ((y3 = t2.headerRefs) != null && y3.length ? d3(u2) : o(u2));
    }, I2 = () => {
      var y3;
      const u2 = Ae(R2);
      u2 && (p.value.enabled || (S3.value ? (y3 = S3.value) == null || y3.focus({ preventScroll: true }) : u2.focus({ preventScroll: true })), h4.value = u2.clientHeight < u2.scrollHeight);
    }, H3 = computed(
      () => ({
        dp__overlay: true,
        "dp--overlay-absolute": !t2.useRelative,
        "dp--overlay-relative": t2.useRelative
      })
    ), A = computed(
      () => t2.useRelative ? { height: `${t2.height}px`, width: "260px" } : void 0
    ), q2 = computed(() => ({
      dp__overlay_col: true
    })), j = computed(
      () => ({
        dp__btn: true,
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: h4.value,
        dp__button_bottom: t2.isLast
      })
    ), le = computed(() => {
      var u2, y3;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((u2 = t2.items) == null ? void 0 : u2.length) <= 6,
        dp__container_block: ((y3 = t2.items) == null ? void 0 : y3.length) > 6
      };
    }), f = () => {
      nextTick().then(() => {
        const u2 = Ae(S3), y3 = Ae(R2), s3 = Ae(Q2), _ = Ae(k2), ee = s3 ? s3.getBoundingClientRect().height : 0;
        y3 && (Z.value = y3.getBoundingClientRect().height - ee), u2 && _ && (_.scrollTop = u2.offsetTop - _.offsetTop - (Z.value / 2 - u2.getBoundingClientRect().height) - ee);
      });
    }, w2 = (u2) => {
      u2.disabled || a3("selected", u2.value);
    }, C = () => {
      a3("toggle"), a3("reset-flow");
    }, K2 = () => {
      t2.escClose && C();
    }, c2 = (u2, y3, s3, _) => {
      u2 && (y3.active && (S3.value = u2), t2.arrowNavigation && (Array.isArray(J.value[s3]) ? J.value[s3][_] = u2 : J.value[s3] = [u2], V()));
    }, V = () => {
      var y3, s3;
      const u2 = (y3 = t2.headerRefs) != null && y3.length ? [t2.headerRefs].concat(J.value) : J.value.concat([t2.skipButtonRef ? [] : [Q2.value]]);
      l(Te(u2), (s3 = t2.headerRefs) != null && s3.length ? "monthPicker" : "selectionGrid");
    }, b2 = (u2) => {
      t2.arrowNavigation || u2.stopImmediatePropagation();
    }, m3 = (u2) => {
      W.value = u2, a3("hover-value", u2);
    };
    return n({ focusGrid: I2 }), (u2, y3) => {
      var s3;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: R2,
        class: normalizeClass(H3.value),
        style: normalizeStyle(A.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          withKeys(withModifiers(K2, ["prevent"]), ["esc"]),
          y3[0] || (y3[0] = withKeys(withModifiers((_) => b2(_), ["prevent"]), ["left"])),
          y3[1] || (y3[1] = withKeys(withModifiers((_) => b2(_), ["prevent"]), ["up"])),
          y3[2] || (y3[2] = withKeys(withModifiers((_) => b2(_), ["prevent"]), ["down"])),
          y3[3] || (y3[3] = withKeys(withModifiers((_) => b2(_), ["prevent"]), ["right"]))
        ]
      }, [
        createBaseVNode("div", {
          class: normalizeClass(le.value),
          ref_key: "containerRef",
          ref: k2,
          role: "grid",
          style: normalizeStyle({ height: `${Z.value}px` })
        }, [
          createBaseVNode("div", ol, [
            renderSlot(u2.$slots, "header")
          ]),
          u2.$slots.overlay ? renderSlot(u2.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(u2.items, (_, ee) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: u2.items.length >= 3 }]),
            key: ee,
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_, (r, U) => (openBlock(), createElementBlock("div", {
              role: "gridcell",
              class: normalizeClass(q2.value),
              key: r.value,
              "aria-selected": r.active,
              "aria-disabled": r.disabled || void 0,
              ref_for: true,
              ref: (N) => c2(N, r, ee, U),
              tabindex: "0",
              onClick: (N) => w2(r),
              onKeydown: [
                withKeys(withModifiers((N) => w2(r), ["prevent"]), ["enter"]),
                withKeys(withModifiers((N) => w2(r), ["prevent"]), ["space"])
              ],
              onMouseover: (N) => m3(r.value)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(r.className)
              }, [
                u2.$slots.item ? renderSlot(u2.$slots, "item", {
                  key: 0,
                  item: r
                }) : createCommentVNode("", true),
                u2.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(r.text), 1)
                ], 64))
              ], 2)
            ], 42, sl))), 128))
          ], 2))), 128))
        ], 6),
        u2.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          "aria-label": (s3 = unref(M3)) == null ? void 0 : s3.toggleOverlay,
          class: normalizeClass(j.value),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: Q2,
          onClick: C,
          onKeydown: [
            withKeys(C, ["enter"]),
            withKeys(C, ["tab"])
          ]
        }, [
          renderSlot(u2.$slots, "button-icon")
        ], 42, ul)), [
          [vShow, !unref($)(u2.hideNavigation, u2.type)]
        ]) : createCommentVNode("", true)
      ], 46, ll);
    };
  }
});
var Ln = defineComponent({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean }
  },
  setup(e2) {
    const n = e2, a3 = computed(
      () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
    ), t2 = computed(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    }));
    return (o, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass({
        dp__menu_inner: !o.stretch,
        "dp--menu--inner-stretched": o.stretch,
        dp__flex_display: o.multiCalendars > 0
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a3.value, (d3, M3) => (openBlock(), createElementBlock("div", {
        key: d3,
        class: normalizeClass(t2.value)
      }, [
        renderSlot(o.$slots, "default", {
          instance: d3,
          index: M3
        })
      ], 2))), 128))
    ], 2));
  }
});
var il = ["aria-label", "aria-disabled"];
var St = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e2, { emit: n }) {
    const a3 = ref(null);
    return onMounted(() => n("set-ref", a3)), (t2, o) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      onClick: o[0] || (o[0] = (l) => t2.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = withKeys(withModifiers((l) => t2.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = withKeys(withModifiers((l) => t2.$emit("activate"), ["prevent"]), ["space"]))
      ],
      tabindex: "0",
      "aria-label": t2.ariaLabel,
      "aria-disabled": t2.disabled || void 0,
      ref_key: "elRef",
      ref: a3
    }, [
      createBaseVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: t2.disabled }])
      }, [
        renderSlot(t2.$slots, "default")
      ], 2)
    ], 40, il));
  }
});
var Un = (e2, n, a3) => {
  if (n.value && Array.isArray(n.value))
    if (n.value.some((t2) => ye(e2, t2))) {
      const t2 = n.value.filter((o) => !ye(o, e2));
      n.value = t2.length ? t2 : null;
    } else
      (a3 && +a3 > n.value.length || !a3) && n.value.push(e2);
  else
    n.value = [e2];
};
var Ra = (e2, n, a3) => {
  let t2 = e2.value ? e2.value.slice() : [];
  return t2.length === 2 && t2[1] !== null && (t2 = []), t2.length ? Pe(n, t2[0]) ? (t2.unshift(n), a3("range-start", t2[0]), a3("range-start", t2[1])) : (t2[1] = n, a3("range-end", n)) : (t2 = [n], a3("range-start", n)), e2.value = t2, t2;
};
var Wn = (e2, n, a3, t2) => {
  e2[0] && e2[1] && a3 && n("auto-apply"), e2[0] && !e2[1] && t2 && a3 && n("auto-apply");
};
var dl = (e2, n) => {
  const { defaultedMultiCalendars: a3, defaultedAriaLabels: t2, defaultedTransitions: o } = Re(e2), { modelValue: l, year: d3, month: M3, calendars: p } = qt(e2, n), $ = computed(() => Da(e2.formatLocale, e2.locale, e2.monthNameFormat)), h4 = computed(() => Vn(e2.yearRange, e2.reverseYears)), S3 = ref(null), R2 = () => {
    for (let b2 = 0; b2 < a3.value.count; b2++)
      if (b2 === 0)
        p.value[b2] = p.value[0];
      else {
        const m3 = set(P(), p.value[b2 - 1]);
        p.value[b2] = { month: getMonth(m3), year: getYear(addYears(m3, b2)) };
      }
  }, J = (b2) => {
    if (!b2)
      return R2();
    const m3 = set(P(), p.value[b2]);
    return p.value[0].year = getYear(subYears(m3, a3.value.count - 1)), R2();
  }, W = (b2) => e2.focusStartDate ? b2[0] : b2[1] ? b2[1] : b2[0], Q2 = () => {
    if (l.value) {
      const b2 = Array.isArray(l.value) ? W(l.value) : l.value;
      p.value[0] = { month: getMonth(b2), year: getYear(b2) };
    }
  };
  onMounted(() => {
    Q2(), a3.value.count && R2();
  });
  const Z = computed(() => (b2, m3) => {
    const u2 = set(ze(/* @__PURE__ */ new Date()), {
      month: M3.value(b2),
      year: d3.value(b2)
    });
    return _a(u2, e2.maxDate, e2.minDate, e2.preventMinMaxNavigation, m3);
  }), k2 = (b2) => b2 ? { month: getMonth(b2), year: getYear(b2) } : { month: null, year: null }, T2 = () => l.value ? Array.isArray(l.value) ? l.value.map((b2) => k2(b2)) : k2(l.value) : k2(), I2 = (b2, m3) => {
    const u2 = p.value[b2], y3 = T2();
    return Array.isArray(y3) ? y3.some((s3) => s3.year === (u2 == null ? void 0 : u2.year) && s3.month === m3) : (u2 == null ? void 0 : u2.year) === y3.year && m3 === y3.month;
  }, H3 = (b2, m3, u2) => {
    var s3, _;
    const y3 = T2();
    return Array.isArray(y3) ? d3.value(m3) === ((s3 = y3[u2]) == null ? void 0 : s3.year) && b2 === ((_ = y3[u2]) == null ? void 0 : _.month) : false;
  }, A = (b2, m3) => {
    if (e2.range) {
      const u2 = T2();
      if (Array.isArray(l.value) && Array.isArray(u2)) {
        const y3 = H3(b2, m3, 0) || H3(b2, m3, 1), s3 = xe(ze(P()), b2, d3.value(m3));
        return Hn(l.value, S3.value, s3) && !y3;
      }
      return false;
    }
    return false;
  }, q2 = computed(() => (b2) => kt($.value, (m3) => {
    const u2 = I2(b2, m3.value), y3 = Rt(
      m3.value,
      $a(d3.value(b2), e2.minDate),
      Ta(d3.value(b2), e2.maxDate)
    ) || Yr(e2.disabledDates, d3.value(b2)).includes(m3.value), s3 = A(m3.value, b2);
    return { active: u2, disabled: y3, isBetween: s3 };
  })), j = computed(() => (b2) => kt(h4.value, (m3) => {
    const u2 = d3.value(b2) === m3.value, y3 = Rt(m3.value, wt(e2.minDate), wt(e2.maxDate));
    return { active: u2, disabled: y3 };
  })), le = (b2, m3) => xe(ze(P()), b2, d3.value(m3)), f = (b2, m3) => {
    const u2 = l.value ? l.value : ze(/* @__PURE__ */ new Date());
    l.value = xe(u2, b2, d3.value(m3)), n("auto-apply");
  }, w2 = (b2, m3) => {
    const u2 = Ra(l, le(b2, m3), n);
    Wn(u2, n, e2.autoApply, e2.modelAuto);
  }, C = (b2, m3) => {
    Un(le(b2, m3), l, e2.multiDatesLimit), n("auto-apply", true);
  };
  return {
    groupedMonths: q2,
    groupedYears: j,
    year: d3,
    isDisabled: Z,
    defaultedMultiCalendars: a3,
    defaultedAriaLabels: t2,
    defaultedTransitions: o,
    setHoverDate: (b2, m3) => {
      S3.value = le(b2, m3);
    },
    selectMonth: (b2, m3) => (p.value[m3].month = b2, e2.multiDates ? C(b2, m3) : e2.range ? w2(b2, m3) : f(b2, m3)),
    selectYear: (b2, m3) => {
      p.value[m3].year = b2, a3.value.count && !a3.value.solo && J(m3);
    }
  };
};
var cl = { class: "dp__month_picker_header" };
var fl = ["aria-label", "onClick", "onKeydown"];
var vl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...Qe
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply"
  ],
  setup(e2, { emit: n }) {
    const a3 = e2, {
      groupedMonths: t2,
      groupedYears: o,
      year: l,
      isDisabled: d3,
      defaultedMultiCalendars: M3,
      defaultedAriaLabels: p,
      defaultedTransitions: $,
      setHoverDate: h4,
      selectMonth: S3,
      selectYear: R2
    } = dl(a3, n), { transitionName: J, showTransition: W } = Bt($), { showRightIcon: Q2, showLeftIcon: Z } = Jt(), k2 = ref([false]), T2 = (A, q2) => {
      R2(A, q2), H3(q2);
    }, I2 = (A, q2 = false) => {
      if (!d3.value(A, q2)) {
        const j = q2 ? l.value(A) + 1 : l.value(A) - 1;
        R2(j, A);
      }
    }, H3 = (A, q2 = false, j) => {
      q2 || n("reset-flow"), j !== void 0 ? k2.value[A] = j : k2.value[A] = !k2.value[A], k2.value || n("overlay-closed");
    };
    return (A, q2) => (openBlock(), createBlock(Ln, {
      "multi-calendars": unref(M3).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: j }) => [
        A.$slots["month-year"] ? renderSlot(A.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
          year: unref(l),
          months: unref(t2)(j),
          years: unref(o)(j),
          selectMonth: unref(S3),
          selectYear: unref(R2),
          instance: j
        }))) : (openBlock(), createBlock(Nt, {
          key: 1,
          items: unref(t2)(j),
          "arrow-navigation": A.arrowNavigation,
          "is-last": A.autoApply && !A.keepActionRow,
          "esc-close": A.escClose,
          height: A.modeHeight,
          onSelected: (le) => unref(S3)(le, j),
          onHoverValue: (le) => unref(h4)(le, j),
          "use-relative": "",
          type: "month"
        }, {
          header: withCtx(() => {
            var le, f, w2;
            return [
              createBaseVNode("div", cl, [
                unref(Z)(unref(M3), j) ? (openBlock(), createBlock(St, {
                  key: 0,
                  ref: "mpPrevIconRef",
                  "aria-label": (le = unref(p)) == null ? void 0 : le.prevYear,
                  disabled: unref(d3)(j, false),
                  onActivate: (C) => I2(j, false)
                }, {
                  default: withCtx(() => [
                    A.$slots["arrow-left"] ? renderSlot(A.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
                    A.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Rn), { key: 1 }))
                  ]),
                  _: 2
                }, 1032, ["aria-label", "disabled", "onActivate"])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "dp--year-select",
                  role: "button",
                  ref: "mpYearButtonRef",
                  "aria-label": (f = unref(p)) == null ? void 0 : f.openYearsOverlay,
                  tabindex: "0",
                  onClick: () => H3(j, false),
                  onKeydown: withKeys(() => H3(j, false), ["enter"])
                }, [
                  A.$slots.year ? renderSlot(A.$slots, "year", {
                    key: 0,
                    year: unref(l)(j)
                  }) : createCommentVNode("", true),
                  A.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(unref(l)(j)), 1)
                  ], 64))
                ], 40, fl),
                unref(Q2)(unref(M3), j) ? (openBlock(), createBlock(St, {
                  key: 1,
                  ref: "mpNextIconRef",
                  "aria-label": (w2 = unref(p)) == null ? void 0 : w2.nextYear,
                  disabled: unref(d3)(j, false),
                  onActivate: (C) => I2(j, true)
                }, {
                  default: withCtx(() => [
                    A.$slots["arrow-right"] ? renderSlot(A.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
                    A.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Nn), { key: 1 }))
                  ]),
                  _: 2
                }, 1032, ["aria-label", "disabled", "onActivate"])) : createCommentVNode("", true),
                createVNode(Transition, {
                  name: unref(J)(k2.value[j]),
                  css: unref(W)
                }, {
                  default: withCtx(() => [
                    k2.value[j] ? (openBlock(), createBlock(Nt, {
                      key: 0,
                      items: unref(o)(j),
                      "text-input": A.textInput,
                      "esc-close": A.escClose,
                      onToggle: (C) => H3(j),
                      onSelected: (C) => T2(C, j),
                      "is-last": A.autoApply && !A.keepActionRow,
                      type: "year"
                    }, createSlots({
                      "button-icon": withCtx(() => [
                        A.$slots["calendar-icon"] ? renderSlot(A.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                        A.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      A.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: withCtx(({ item: C }) => [
                          renderSlot(A.$slots, "year-overlay-value", {
                            text: C.text,
                            value: C.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["items", "text-input", "esc-close", "onToggle", "onSelected", "is-last"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ])
            ];
          }),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
});
var ml = (e2, n) => {
  const { modelValue: a3 } = qt(e2, n), t2 = ref(null), o = (h4) => Array.isArray(a3.value) ? a3.value.some((S3) => getYear(S3) === h4) : a3.value ? getYear(a3.value) === h4 : false, l = (h4) => e2.range && Array.isArray(a3.value) ? Hn(a3.value, t2.value, M3(h4)) : false, d3 = computed(() => kt(Vn(e2.yearRange, e2.reverseYears), (h4) => {
    const S3 = o(h4.value), R2 = Rt(h4.value, wt(e2.minDate), wt(e2.maxDate)), J = l(h4.value);
    return { active: S3, disabled: R2, isBetween: J };
  })), M3 = (h4) => setYear(ze(/* @__PURE__ */ new Date()), h4);
  return {
    groupedYears: d3,
    setHoverValue: (h4) => {
      t2.value = setYear(ze(/* @__PURE__ */ new Date()), h4);
    },
    selectYear: (h4) => {
      if (e2.multiDates)
        return Un(M3(h4), a3, e2.multiDatesLimit), n("auto-apply", true);
      if (e2.range) {
        const S3 = Ra(a3, M3(h4), n);
        return Wn(S3, n, e2.autoApply, e2.modelAuto);
      }
      a3.value = M3(h4), n("auto-apply");
    }
  };
};
var gl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...Qe
  },
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e2, { emit: n }) {
    const a3 = e2, { groupedYears: t2, selectYear: o, setHoverValue: l } = ml(a3, n);
    return (d3, M3) => (openBlock(), createElementBlock("div", null, [
      d3.$slots["month-year"] ? renderSlot(d3.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
        years: unref(t2),
        selectYear: unref(o)
      }))) : (openBlock(), createBlock(Nt, {
        key: 1,
        items: unref(t2),
        "is-last": d3.autoApply && !d3.keepActionRow,
        height: d3.modeHeight,
        type: "year",
        "use-relative": "",
        onSelected: unref(o),
        onHoverValue: unref(l)
      }, createSlots({ _: 2 }, [
        d3.$slots["year-overlay-value"] ? {
          name: "item",
          fn: withCtx(({ item: p }) => [
            renderSlot(d3.$slots, "year-overlay-value", {
              text: p.text,
              value: p.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "onSelected", "onHoverValue"]))
    ]));
  }
});
var yl = {
  key: 0,
  class: "dp__time_input"
};
var hl = ["aria-label", "onKeydown", "onClick"];
var pl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var bl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var kl = ["aria-label", "disabled", "onKeydown", "onClick"];
var wl = ["aria-label", "onKeydown", "onClick"];
var Dl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var Ml = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var $l = { key: 0 };
var Tl = ["aria-label", "onKeydown"];
var Al = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    ...Qe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { setTimePickerElements: o, setTimePickerBackRef: l } = lt(), { defaultedAriaLabels: d3, defaultedTransitions: M3, defaultedFilters: p } = Re(t2), { transitionName: $, showTransition: h4 } = Bt(M3), S3 = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), R2 = ref("AM"), J = ref(null), W = ref([]);
    onMounted(() => {
      a3("mounted");
    });
    const Q2 = (r) => set(/* @__PURE__ */ new Date(), {
      hours: r.hours,
      minutes: r.minutes,
      seconds: t2.enableSeconds ? r.seconds : 0,
      milliseconds: 0
    }), Z = computed(() => (r) => w2(r, t2[r])), k2 = computed(() => ({ hours: t2.hours, minutes: t2.minutes, seconds: t2.seconds })), T2 = computed(() => (r) => !K2(+t2[r] + +t2[`${r}Increment`], r)), I2 = computed(() => (r) => !K2(+t2[r] - +t2[`${r}Increment`], r)), H3 = (r, U) => add(set(P(), r), U), A = (r, U) => sub(set(P(), r), U), q2 = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !t2.timePickerInline,
        dp__time_col_reg_block: !t2.enableSeconds && t2.is24 && !t2.timePickerInline,
        dp__time_col_reg_inline: !t2.enableSeconds && t2.is24 && t2.timePickerInline,
        dp__time_col_reg_with_button: !t2.enableSeconds && !t2.is24,
        dp__time_col_sec: t2.enableSeconds && t2.is24,
        dp__time_col_sec_with_button: t2.enableSeconds && !t2.is24
      })
    ), j = computed(() => {
      const r = [{ type: "hours" }, { type: "", separator: true }, { type: "minutes" }];
      return t2.enableSeconds ? r.concat([{ type: "", separator: true }, { type: "seconds" }]) : r;
    }), le = computed(() => j.value.filter((r) => !r.separator)), f = computed(() => (r) => {
      if (r === "hours") {
        const U = u2(+t2.hours);
        return { text: U < 10 ? `0${U}` : `${U}`, value: U };
      }
      return { text: t2[r] < 10 ? `0${t2[r]}` : `${t2[r]}`, value: t2[r] };
    }), w2 = (r, U) => {
      var g;
      if (!t2.disabledTimesConfig)
        return false;
      const N = t2.disabledTimesConfig(t2.order, r === "hours" ? U : void 0);
      return N[r] ? !!((g = N[r]) != null && g.includes(U)) : true;
    }, C = (r) => {
      const U = t2.is24 ? 24 : 12, N = r === "hours" ? U : 60, g = +t2[`${r}GridIncrement`], F = r === "hours" && !t2.is24 ? g : 0, ae = [];
      for (let G2 = F; G2 < N; G2 += g)
        ae.push({ value: G2, text: G2 < 10 ? `0${G2}` : `${G2}` });
      return r === "hours" && !t2.is24 && ae.push({ value: 0, text: "12" }), kt(ae, (G2) => ({ active: false, disabled: p.value.times[r].includes(G2.value) || !K2(G2.value, r) || w2(r, G2.value) }));
    }, K2 = (r, U) => {
      const N = t2.minTime ? Q2(fn(t2.minTime)) : null, g = t2.maxTime ? Q2(fn(t2.maxTime)) : null, F = Q2(fn(k2.value, U, r));
      return N && g ? (isBefore(F, g) || isEqual(F, g)) && (isAfter(F, N) || isEqual(F, N)) : N ? isAfter(F, N) || isEqual(F, N) : g ? isBefore(F, g) || isEqual(F, g) : true;
    }, c2 = (r) => t2[`no${r[0].toUpperCase() + r.slice(1)}Overlay`], V = (r) => {
      c2(r) || (S3[r] = !S3[r], S3[r] || a3("overlay-closed"));
    }, b2 = (r) => r === "hours" ? getHours : r === "minutes" ? getMinutes : getSeconds, m3 = (r, U = true) => {
      const N = U ? H3 : A, g = U ? +t2[`${r}Increment`] : -+t2[`${r}Increment`];
      K2(+t2[r] + g, r) && a3(
        `update:${r}`,
        b2(r)(N({ [r]: +t2[r] }, { [r]: +t2[`${r}Increment`] }))
      );
    }, u2 = (r) => t2.is24 ? r : (r >= 12 ? R2.value = "PM" : R2.value = "AM", $r(r)), y3 = () => {
      R2.value === "PM" ? (R2.value = "AM", a3("update:hours", t2.hours - 12)) : (R2.value = "PM", a3("update:hours", t2.hours + 12)), a3("am-pm-change", R2.value);
    }, s3 = (r) => {
      S3[r] = true;
    }, _ = (r, U, N) => {
      if (r && t2.arrowNavigation) {
        Array.isArray(W.value[U]) ? W.value[U][N] = r : W.value[U] = [r];
        const g = W.value.reduce(
          (F, ae) => ae.map((G2, we) => [...F[we] || [], ae[we]]),
          []
        );
        l(t2.closeTimePickerBtn), J.value && (g[1] = g[1].concat(J.value)), o(g, t2.order);
      }
    }, ee = (r, U) => (V(r), r === "hours" && !t2.is24 ? a3(`update:${r}`, R2.value === "PM" ? U + 12 : U) : a3(`update:${r}`, U));
    return n({ openChildCmp: s3 }), (r, U) => {
      var N;
      return r.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", yl, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(j.value, (g, F) => {
          var ae, G2, we;
          return openBlock(), createElementBlock("div", {
            key: F,
            class: normalizeClass(q2.value)
          }, [
            g.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t2.timePickerInline,
                  dp__inc_dec_button_inline: t2.timePickerInline,
                  dp__tp_inline_btn_top: t2.timePickerInline,
                  dp__inc_dec_button_disabled: T2.value(g.type)
                }),
                "aria-label": (ae = unref(d3)) == null ? void 0 : ae.incrementValue(g.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((se) => m3(g.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((se) => m3(g.type), ["prevent"]), ["space"])
                ],
                onClick: (se) => m3(g.type),
                ref_for: true,
                ref: (se) => _(se, F, 0)
              }, [
                t2.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  pl,
                  bl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  r.$slots["arrow-up"] ? renderSlot(r.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  r.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(In), { key: 1 }))
                ], 64))
              ], 42, hl),
              createBaseVNode("button", {
                type: "button",
                "aria-label": (G2 = unref(d3)) == null ? void 0 : G2.openTpOverlay(g.type),
                class: normalizeClass({
                  dp__time_display: true,
                  dp__time_display_block: !t2.timePickerInline,
                  dp__time_display_inline: t2.timePickerInline,
                  "dp--time-invalid": Z.value(g.type),
                  "dp--time-overlay-btn": !Z.value(g.type)
                }),
                disabled: c2(g.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((se) => V(g.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((se) => V(g.type), ["prevent"]), ["space"])
                ],
                onClick: (se) => V(g.type),
                ref_for: true,
                ref: (se) => _(se, F, 1)
              }, [
                r.$slots[g.type] ? renderSlot(r.$slots, g.type, {
                  key: 0,
                  text: f.value(g.type).text,
                  value: f.value(g.type).value
                }) : createCommentVNode("", true),
                r.$slots[g.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(f.value(g.type).text), 1)
                ], 64))
              ], 42, kl),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t2.timePickerInline,
                  dp__inc_dec_button_inline: t2.timePickerInline,
                  dp__tp_inline_btn_bottom: t2.timePickerInline,
                  dp__inc_dec_button_disabled: I2.value(g.type)
                }),
                "aria-label": (we = unref(d3)) == null ? void 0 : we.decrementValue(g.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((se) => m3(g.type, false), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((se) => m3(g.type, false), ["prevent"]), ["space"])
                ],
                onClick: (se) => m3(g.type, false),
                ref_for: true,
                ref: (se) => _(se, F, 2)
              }, [
                t2.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  Dl,
                  Ml
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  r.$slots["arrow-down"] ? renderSlot(r.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  r.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yn), { key: 1 }))
                ], 64))
              ], 42, wl)
            ], 64))
          ], 2);
        }), 128)),
        r.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", $l, [
          r.$slots["am-pm-button"] ? renderSlot(r.$slots, "am-pm-button", {
            key: 0,
            toggle: y3,
            value: R2.value
          }) : createCommentVNode("", true),
          r.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: J,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (N = unref(d3)) == null ? void 0 : N.amPmButton,
            tabindex: "0",
            onClick: y3,
            onKeydown: [
              withKeys(withModifiers(y3, ["prevent"]), ["enter"]),
              withKeys(withModifiers(y3, ["prevent"]), ["space"])
            ]
          }, toDisplayString(R2.value), 41, Tl))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(le.value, (g, F) => (openBlock(), createBlock(Transition, {
          key: F,
          name: unref($)(S3[g.type]),
          css: unref(h4)
        }, {
          default: withCtx(() => [
            S3[g.type] ? (openBlock(), createBlock(Nt, {
              key: 0,
              items: C(g.type),
              "is-last": r.autoApply && !r.keepActionRow,
              "esc-close": r.escClose,
              type: g.type,
              "text-input": r.textInput,
              "arrow-navigation": r.arrowNavigation,
              onSelected: (ae) => ee(g.type, ae),
              onToggle: (ae) => V(g.type),
              onResetFlow: U[0] || (U[0] = (ae) => r.$emit("reset-flow"))
            }, createSlots({
              "button-icon": withCtx(() => [
                r.$slots["clock-icon"] ? renderSlot(r.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                r.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(On), { key: 1 }))
              ]),
              _: 2
            }, [
              r.$slots[`${g.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: ae }) => [
                  renderSlot(r.$slots, `${g.type}-overlay-value`, {
                    text: ae.text,
                    value: ae.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "arrow-navigation", "onSelected", "onToggle"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
});
var Sl = ["aria-label"];
var _l = ["tabindex"];
var Pl = ["aria-label"];
var Na = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    ...Qe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { buildMatrix: o, setTimePicker: l } = lt(), d3 = useSlots(), { defaultedTransitions: M3, defaultedAriaLabels: p, defaultedTextInput: $ } = Re(t2), { transitionName: h4, showTransition: S3 } = Bt(M3), { hideNavigationButtons: R2 } = Jt(), J = ref(null), W = ref(null), Q2 = ref([]), Z = ref(null);
    onMounted(() => {
      a3("mount"), !t2.timePicker && t2.arrowNavigation ? o([Ae(J.value)], "time") : l(true, t2.timePicker);
    });
    const k2 = computed(() => t2.range && t2.modelAuto ? Ma(t2.internalModelValue) : true), T2 = ref(false), I2 = (c2) => ({
      hours: Array.isArray(t2.hours) ? t2.hours[c2] : t2.hours,
      minutes: Array.isArray(t2.minutes) ? t2.minutes[c2] : t2.minutes,
      seconds: Array.isArray(t2.seconds) ? t2.seconds[c2] : t2.seconds
    }), H3 = computed(() => {
      const c2 = [];
      if (t2.range)
        for (let V = 0; V < 2; V++)
          c2.push(I2(V));
      else
        c2.push(I2(0));
      return c2;
    }), A = (c2, V = false, b2 = "") => {
      V || a3("reset-flow"), T2.value = c2, a3(c2 ? "overlay-opened" : "overlay-closed"), t2.arrowNavigation && l(c2), nextTick(() => {
        b2 !== "" && Q2.value[0] && Q2.value[0].openChildCmp(b2);
      });
    }, q2 = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: t2.autoApply && !t2.keepActionRow
    })), j = je(d3, "timePicker"), le = (c2, V, b2) => t2.range ? V === 0 ? [c2, H3.value[1][b2]] : [H3.value[0][b2], c2] : c2, f = (c2) => {
      a3("update:hours", c2);
    }, w2 = (c2) => {
      a3("update:minutes", c2);
    }, C = (c2) => {
      a3("update:seconds", c2);
    }, K2 = () => {
      if (Z.value && !$.value.enabled) {
        const c2 = Ar(Z.value);
        c2 && c2.focus({ preventScroll: true });
      }
    };
    return n({ toggleTimePicker: A }), (c2, V) => {
      var b2;
      return openBlock(), createElementBlock("div", null, [
        !c2.timePicker && !c2.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: normalizeClass(q2.value),
          "aria-label": (b2 = unref(p)) == null ? void 0 : b2.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: J,
          onKeydown: [
            V[0] || (V[0] = withKeys((m3) => A(true), ["enter"])),
            V[1] || (V[1] = withKeys((m3) => A(true), ["space"]))
          ],
          onClick: V[2] || (V[2] = (m3) => A(true))
        }, [
          c2.$slots["clock-icon"] ? renderSlot(c2.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          c2.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(On), { key: 1 }))
        ], 42, Sl)), [
          [vShow, !unref(R2)(c2.hideNavigation, "time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(h4)(T2.value),
          css: unref(S3) && !c2.timePickerInline
        }, {
          default: withCtx(() => {
            var m3;
            return [
              T2.value || c2.timePicker || c2.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({
                  dp__overlay: !c2.timePickerInline,
                  "dp--overlay-absolute": !t2.timePicker && !c2.timePickerInline,
                  "dp--overlay-relative": t2.timePicker
                }),
                style: normalizeStyle(c2.timePicker ? { height: `${c2.modeHeight}px` } : void 0),
                ref_key: "overlayRef",
                ref: Z,
                tabindex: c2.timePickerInline ? void 0 : 0
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(
                    c2.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  c2.$slots["time-picker-overlay"] ? renderSlot(c2.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e2.hours,
                    minutes: e2.minutes,
                    seconds: e2.seconds,
                    setHours: f,
                    setMinutes: w2,
                    setSeconds: C
                  }) : createCommentVNode("", true),
                  c2.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(c2.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(H3.value, (u2, y3) => withDirectives((openBlock(), createBlock(Al, mergeProps({ key: y3 }, {
                      ...c2.$props,
                      order: y3,
                      hours: u2.hours,
                      minutes: u2.minutes,
                      seconds: u2.seconds,
                      closeTimePickerBtn: W.value,
                      disabledTimesConfig: e2.disabledTimesConfig,
                      disabled: y3 === 0 ? c2.fixedStart : c2.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: Q2,
                      "onUpdate:hours": (s3) => f(le(s3, y3, "hours")),
                      "onUpdate:minutes": (s3) => w2(le(s3, y3, "minutes")),
                      "onUpdate:seconds": (s3) => C(le(s3, y3, "seconds")),
                      onMounted: K2,
                      onOverlayClosed: K2,
                      onAmPmChange: V[3] || (V[3] = (s3) => c2.$emit("am-pm-change", s3))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(j), (s3, _) => ({
                        name: s3,
                        fn: withCtx((ee) => [
                          renderSlot(c2.$slots, s3, normalizeProps(guardReactiveProps(ee)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, y3 === 0 ? true : k2.value]
                    ])), 128))
                  ], 2)),
                  !c2.timePicker && !c2.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: W,
                    class: normalizeClass(q2.value),
                    "aria-label": (m3 = unref(p)) == null ? void 0 : m3.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      V[4] || (V[4] = withKeys((u2) => A(false), ["enter"])),
                      V[5] || (V[5] = withKeys((u2) => A(false), ["space"]))
                    ],
                    onClick: V[6] || (V[6] = (u2) => A(false))
                  }, [
                    c2.$slots["calendar-icon"] ? renderSlot(c2.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    c2.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yt), { key: 1 }))
                  ], 42, Pl)), [
                    [vShow, !unref(R2)(c2.hideNavigation, "time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 14, _l)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
});
var Oa = (e2, n, a3, t2) => {
  const o = (k2, T2) => Array.isArray(n[k2]) ? n[k2][T2] : n[k2], l = (k2) => e2.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[k2] : n.seconds : 0, d3 = (k2, T2) => k2 ? T2 !== void 0 ? nt(k2, o("hours", T2), o("minutes", T2), l(T2)) : nt(k2, n.hours, n.minutes, l()) : P(), M3 = (k2, T2) => {
    n[k2] = T2;
  }, p = (k2, T2) => {
    const I2 = Object.fromEntries(
      Object.keys(n).map((H3) => H3 === k2 ? [H3, T2] : [H3, n[H3]].slice())
    );
    if (e2.range && !e2.disableTimeRangeValidation) {
      const H3 = (q2) => a3.value ? nt(
        a3.value[q2],
        I2.hours[q2],
        I2.minutes[q2],
        I2.seconds[q2]
      ) : null, A = (q2) => setMilliseconds(a3.value[q2], 0);
      return !(ye(H3(0), H3(1)) && (isAfter(H3(0), A(1)) || isBefore(H3(1), A(0))));
    }
    return true;
  }, $ = (k2, T2) => {
    p(k2, T2) && (M3(k2, T2), t2 && t2());
  }, h4 = (k2) => {
    $("hours", k2);
  }, S3 = (k2) => {
    $("minutes", k2);
  }, R2 = (k2) => {
    $("seconds", k2);
  }, J = (k2, T2, I2, H3) => {
    T2 && h4(k2), !T2 && !I2 && S3(k2), I2 && R2(k2), a3.value && H3(a3.value);
  }, W = (k2) => {
    if (k2) {
      const T2 = Array.isArray(k2), I2 = T2 ? [+k2[0].hours, +k2[1].hours] : +k2.hours, H3 = T2 ? [+k2[0].minutes, +k2[1].minutes] : +k2.minutes, A = T2 ? [+k2[0].seconds, +k2[1].seconds] : +k2.seconds;
      M3("hours", I2), M3("minutes", H3), e2.enableSeconds && M3("seconds", A);
    }
  }, Q2 = (k2, T2) => {
    const I2 = {
      hours: Array.isArray(n.hours) ? n.hours[k2] : n.hours,
      disabledArr: []
    };
    return (T2 || T2 === 0) && (I2.hours = T2), Array.isArray(e2.disabledTimes) && (I2.disabledArr = e2.range && Array.isArray(e2.disabledTimes[k2]) ? e2.disabledTimes[k2] : e2.disabledTimes), I2;
  }, Z = computed(() => (k2, T2) => {
    var I2;
    if (Array.isArray(e2.disabledTimes)) {
      const { disabledArr: H3, hours: A } = Q2(k2, T2), q2 = H3.filter((j) => +j.hours === A);
      return ((I2 = q2[0]) == null ? void 0 : I2.minutes) === "*" ? { hours: [A], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (q2 == null ? void 0 : q2.map((j) => +j.minutes)) ?? [],
        seconds: (q2 == null ? void 0 : q2.map((j) => j.seconds ? +j.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: M3,
    updateHours: h4,
    updateMinutes: S3,
    updateSeconds: R2,
    getSetDateTime: d3,
    updateTimeValues: J,
    getSecondsValue: l,
    assignStartTime: W,
    disabledTimesConfig: Z
  };
};
var Cl = (e2, n) => {
  const { modelValue: a3, time: t2 } = qt(e2, n), { defaultedStartTime: o } = Re(e2), { updateTimeValues: l, getSetDateTime: d3, setTime: M3, assignStartTime: p, disabledTimesConfig: $ } = Oa(
    e2,
    t2,
    a3
  ), h4 = (T2) => {
    const { hours: I2, minutes: H3, seconds: A } = T2;
    return { hours: +I2, minutes: +H3, seconds: A ? +A : 0 };
  }, S3 = () => {
    if (e2.startTime) {
      if (Array.isArray(e2.startTime)) {
        const I2 = h4(e2.startTime[0]), H3 = h4(e2.startTime[1]);
        return [set(P(), I2), set(P(), H3)];
      }
      const T2 = h4(e2.startTime);
      return set(P(), T2);
    }
    return e2.range ? [null, null] : null;
  }, R2 = () => {
    if (e2.range) {
      const [T2, I2] = S3();
      a3.value = [d3(T2, 0), d3(I2, 1)];
    } else
      a3.value = d3(S3());
  }, J = (T2) => Array.isArray(T2) ? [vt(P(T2[0])), vt(P(T2[1]))] : [vt(T2 ?? P())], W = (T2, I2, H3) => {
    M3("hours", T2), M3("minutes", I2), e2.enableSeconds && M3("seconds", H3);
  }, Q2 = () => {
    const [T2, I2] = J(a3.value);
    return e2.range ? W(
      [T2.hours, I2.hours],
      [T2.minutes, I2.minutes],
      [T2.seconds, I2.minutes]
    ) : W(T2.hours, T2.minutes, T2.seconds);
  };
  onMounted(() => {
    if (!e2.shadow)
      return p(o.value), a3.value ? Q2() : R2();
  });
  const Z = () => {
    Array.isArray(a3.value) ? a3.value = a3.value.map((T2, I2) => T2 && d3(T2, I2)) : a3.value = d3(a3.value), n("time-update");
  };
  return {
    time: t2,
    disabledTimesConfig: $,
    updateTime: (T2, I2 = true, H3 = false) => {
      l(T2, I2, H3, Z);
    }
  };
};
var Rl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...Qe
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e2, { emit: n }) {
    const a3 = e2, t2 = useSlots(), o = je(t2, "timePicker"), { time: l, disabledTimesConfig: d3, updateTime: M3 } = Cl(a3, n);
    return (p, $) => (openBlock(), createBlock(Ln, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: withCtx(() => [
        createVNode(Na, mergeProps(p.$props, {
          hours: unref(l).hours,
          minutes: unref(l).minutes,
          seconds: unref(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": unref(d3),
          "onUpdate:hours": $[0] || ($[0] = (h4) => unref(M3)(h4)),
          "onUpdate:minutes": $[1] || ($[1] = (h4) => unref(M3)(h4, false)),
          "onUpdate:seconds": $[2] || ($[2] = (h4) => unref(M3)(h4, false, true)),
          onAmPmChange: $[3] || ($[3] = (h4) => p.$emit("am-pm-change", h4))
        }), createSlots({ _: 2 }, [
          renderList(unref(o), (h4, S3) => ({
            name: h4,
            fn: withCtx((R2) => [
              renderSlot(p.$slots, h4, normalizeProps(guardReactiveProps(R2)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config"])
      ]),
      _: 3
    }));
  }
});
var Nl = { class: "dp__month_year_row" };
var Ol = ["aria-label", "onClick", "onKeydown"];
var Il = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Qe
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { defaultedTransitions: o, defaultedAriaLabels: l, defaultedMultiCalendars: d3, defaultedFilters: M3 } = Re(t2), { transitionName: p, showTransition: $ } = Bt(o), { buildMatrix: h4 } = lt(), { handleMonthYearChange: S3, isDisabled: R2, updateMonthYear: J } = jr(t2, a3), { showLeftIcon: W, showRightIcon: Q2 } = Jt(), Z = ref(false), k2 = ref(false), T2 = ref([null, null, null, null]);
    onMounted(() => {
      a3("mount");
    });
    const I2 = (u2) => ({
      get: () => t2[u2],
      set: (y3) => {
        const s3 = u2 === We.month ? We.year : We.month;
        a3("update-month-year", { [u2]: y3, [s3]: t2[s3] }), u2 === We.month ? C(true) : K2(true);
      }
    }), H3 = computed(I2(We.month)), A = computed(I2(We.year)), q2 = computed(() => (u2) => ({
      month: t2.month,
      year: t2.year,
      items: u2 === We.month ? t2.months : t2.years,
      instance: t2.instance,
      updateMonthYear: J,
      toggle: u2 === We.month ? C : K2
    })), j = computed(() => {
      const u2 = t2.months.find((y3) => y3.value === t2.month);
      return u2 || { text: "", value: 0 };
    }), le = computed(() => kt(t2.months, (u2) => {
      const y3 = t2.month === u2.value, s3 = Rt(
        u2.value,
        $a(t2.year, t2.minDate),
        Ta(t2.year, t2.maxDate)
      ) || M3.value.months.includes(u2.value);
      return { active: y3, disabled: s3 };
    })), f = computed(() => kt(t2.years, (u2) => {
      const y3 = t2.year === u2.value, s3 = Rt(u2.value, wt(t2.minDate), wt(t2.maxDate)) || M3.value.years.includes(u2.value);
      return { active: y3, disabled: s3 };
    })), w2 = (u2, y3) => {
      y3 !== void 0 ? u2.value = y3 : u2.value = !u2.value, u2.value || a3("overlay-closed");
    }, C = (u2 = false, y3) => {
      c2(u2), w2(Z, y3);
    }, K2 = (u2 = false, y3) => {
      c2(u2), w2(k2, y3);
    }, c2 = (u2) => {
      u2 || a3("reset-flow");
    }, V = (u2, y3) => {
      t2.arrowNavigation && (T2.value[y3] = Ae(u2), h4(T2.value, "monthYear"));
    }, b2 = computed(() => {
      var u2, y3;
      return [
        {
          type: We.month,
          index: 1,
          toggle: C,
          modelValue: H3.value,
          updateModelValue: (s3) => H3.value = s3,
          text: j.value.text,
          showSelectionGrid: Z.value,
          items: le.value,
          ariaLabel: (u2 = l.value) == null ? void 0 : u2.openMonthsOverlay
        },
        {
          type: We.year,
          index: 2,
          toggle: K2,
          modelValue: A.value,
          updateModelValue: (s3) => A.value = s3,
          text: t2.year,
          showSelectionGrid: k2.value,
          items: f.value,
          ariaLabel: (y3 = l.value) == null ? void 0 : y3.openYearsOverlay
        }
      ];
    }), m3 = computed(
      () => t2.disableYearSelect ? [b2.value[0]] : b2.value
    );
    return n({
      toggleMonthPicker: C,
      toggleYearPicker: K2,
      handleMonthYearChange: S3
    }), (u2, y3) => {
      var s3, _, ee;
      return openBlock(), createElementBlock("div", Nl, [
        u2.$slots["month-year"] ? renderSlot(u2.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, { month: e2.month, year: e2.year, months: e2.months, years: e2.years, updateMonthYear: unref(J), handleMonthYearChange: unref(S3), instance: e2.instance }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(W)(unref(d3), e2.instance) && !u2.vertical ? (openBlock(), createBlock(St, {
            key: 0,
            "aria-label": (s3 = unref(l)) == null ? void 0 : s3.prevMonth,
            disabled: unref(R2)(false),
            onActivate: y3[0] || (y3[0] = (r) => unref(S3)(false, true)),
            onSetRef: y3[1] || (y3[1] = (r) => V(r, 0))
          }, {
            default: withCtx(() => [
              u2.$slots["arrow-left"] ? renderSlot(u2.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
              u2.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Rn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: u2.disableYearSelect
            }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(m3.value, (r, U) => (openBlock(), createElementBlock(Fragment, {
              key: r.type
            }, [
              createBaseVNode("button", {
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": r.ariaLabel,
                ref_for: true,
                ref: (N) => V(N, U + 1),
                onClick: r.toggle,
                onKeydown: [
                  withKeys(withModifiers(r.toggle, ["prevent"]), ["enter"]),
                  withKeys(withModifiers(r.toggle, ["prevent"]), ["space"])
                ]
              }, [
                u2.$slots[r.type] ? renderSlot(u2.$slots, r.type, {
                  key: 0,
                  text: r.text,
                  value: t2[r.type]
                }) : createCommentVNode("", true),
                u2.$slots[r.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(r.text), 1)
                ], 64))
              ], 40, Ol),
              createVNode(Transition, {
                name: unref(p)(r.showSelectionGrid),
                css: unref($)
              }, {
                default: withCtx(() => [
                  r.showSelectionGrid ? (openBlock(), createBlock(Nt, {
                    key: 0,
                    items: r.items,
                    "arrow-navigation": u2.arrowNavigation,
                    "hide-navigation": u2.hideNavigation,
                    "is-last": u2.autoApply && !u2.keepActionRow,
                    "skip-button-ref": false,
                    type: r.type,
                    "header-refs": [],
                    "esc-close": u2.escClose,
                    "text-input": u2.textInput,
                    onSelected: r.updateModelValue,
                    onToggle: r.toggle
                  }, createSlots({
                    "button-icon": withCtx(() => [
                      u2.$slots["calendar-icon"] ? renderSlot(u2.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                      u2.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Yt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    u2.$slots[`${r.type}-overlay-val`] ? {
                      name: "item",
                      fn: withCtx(({ item: N }) => [
                        renderSlot(u2.$slots, `${r.type}-overlay-val`, {
                          text: N.text,
                          value: N.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    u2.$slots[`${r.type}-overlay`] ? {
                      name: "overlay",
                      fn: withCtx(() => [
                        renderSlot(u2.$slots, `${r.type}-overlay`, normalizeProps(guardReactiveProps(q2.value(r.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    u2.$slots[`${r.type}-overlay-header`] ? {
                      name: "header",
                      fn: withCtx(() => [
                        renderSlot(u2.$slots, `${r.type}-overlay-header`, {
                          toggle: r.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          unref(W)(unref(d3), e2.instance) && u2.vertical ? (openBlock(), createBlock(St, {
            key: 1,
            "aria-label": (_ = unref(l)) == null ? void 0 : _.prevMonth,
            disabled: unref(R2)(false),
            onActivate: y3[2] || (y3[2] = (r) => unref(S3)(false, true))
          }, {
            default: withCtx(() => [
              u2.$slots["arrow-up"] ? renderSlot(u2.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
              u2.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(In), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          unref(Q2)(unref(d3), e2.instance) ? (openBlock(), createBlock(St, {
            key: 2,
            ref: "rightIcon",
            disabled: unref(R2)(true),
            "aria-label": (ee = unref(l)) == null ? void 0 : ee.nextMonth,
            onActivate: y3[3] || (y3[3] = (r) => unref(S3)(true, true)),
            onSetRef: y3[4] || (y3[4] = (r) => V(r, u2.disableYearSelect ? 2 : 3))
          }, {
            default: withCtx(() => [
              u2.$slots[u2.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(u2.$slots, u2.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
              u2.$slots[u2.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(u2.vertical ? unref(Yn) : unref(Nn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
var Yl = ["aria-label"];
var Bl = {
  class: "dp__calendar_header",
  role: "row"
};
var El = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
};
var Fl = createBaseVNode("div", { class: "dp__calendar_header_separator" }, null, -1);
var Vl = ["aria-label"];
var Hl = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
};
var Ll = { class: "dp__cell_inner" };
var Ul = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"];
var Wl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Qe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { buildMultiLevelMatrix: o } = lt(), { defaultedTransitions: l, defaultedAriaLabels: d3, defaultedMultiCalendars: M3 } = Re(t2), p = ref(null), $ = ref({
      bottom: "",
      left: "",
      transform: ""
    }), h4 = ref([]), S3 = ref(null), R2 = ref(true), J = ref(""), W = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), Q2 = ref([]), Z = ref({ left: "50%" }), k2 = computed(() => t2.calendar ? t2.calendar(t2.mappedDates) : t2.mappedDates), T2 = computed(() => t2.dayNames ? Array.isArray(t2.dayNames) ? t2.dayNames : t2.dayNames(t2.locale, +t2.weekStart) : Mr(t2.formatLocale, t2.locale, +t2.weekStart));
    onMounted(() => {
      a3("mount", { cmp: "calendar", refs: h4 }), t2.noSwipe || S3.value && (S3.value.addEventListener("touchstart", K2, { passive: false }), S3.value.addEventListener("touchend", c2, { passive: false }), S3.value.addEventListener("touchmove", V, { passive: false })), t2.monthChangeOnScroll && S3.value && S3.value.addEventListener("wheel", u2, { passive: false });
    });
    const I2 = (s3) => s3 ? t2.vertical ? "vNext" : "next" : t2.vertical ? "vPrevious" : "previous", H3 = (s3, _) => {
      if (t2.transitions) {
        const ee = Le(xe(P(), t2.month, t2.year));
        J.value = Ne(Le(xe(P(), s3, _)), ee) ? l.value[I2(true)] : l.value[I2(false)], R2.value = false, nextTick(() => {
          R2.value = true;
        });
      }
    }, A = computed(
      () => ({
        [t2.calendarClassName]: !!t2.calendarClassName
      })
    ), q2 = computed(() => (s3) => {
      const _ = Tr(s3);
      return {
        dp__marker_dot: _.type === "dot",
        dp__marker_line: _.type === "line"
      };
    }), j = computed(() => (s3) => ye(s3, p.value)), le = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: M3.value.count > 0 && t2.instance !== 0
    })), f = computed(() => (s3) => t2.hideOffsetDates ? s3.current : true), w2 = async (s3, _, ee) => {
      var r, U;
      if (a3("set-hover-date", s3), (U = (r = s3.marker) == null ? void 0 : r.tooltip) != null && U.length) {
        const N = Ae(h4.value[_][ee]);
        if (N) {
          const { width: g, height: F } = N.getBoundingClientRect();
          p.value = s3.value;
          let ae = { left: `${g / 2}px` }, G2 = -50;
          if (await nextTick(), Q2.value[0]) {
            const { left: we, width: se } = Q2.value[0].getBoundingClientRect();
            we < 0 && (ae = { left: "0" }, G2 = 0, Z.value.left = `${g / 2}px`), window.innerWidth < we + se && (ae = { right: "0" }, G2 = 0, Z.value.left = `${se - g / 2}px`);
          }
          $.value = {
            bottom: `${F}px`,
            ...ae,
            transform: `translateX(${G2}%)`
          }, a3("tooltip-open", s3.marker);
        }
      }
    }, C = (s3) => {
      p.value && (p.value = null, $.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a3("tooltip-close", s3.marker));
    }, K2 = (s3) => {
      W.value.startX = s3.changedTouches[0].screenX, W.value.startY = s3.changedTouches[0].screenY;
    }, c2 = (s3) => {
      W.value.endX = s3.changedTouches[0].screenX, W.value.endY = s3.changedTouches[0].screenY, b2();
    }, V = (s3) => {
      t2.vertical && !t2.inline && s3.preventDefault();
    }, b2 = () => {
      const s3 = t2.vertical ? "Y" : "X";
      Math.abs(W.value[`start${s3}`] - W.value[`end${s3}`]) > 10 && a3("handle-swipe", W.value[`start${s3}`] > W.value[`end${s3}`] ? "right" : "left");
    }, m3 = (s3, _, ee) => {
      s3 && (Array.isArray(h4.value[_]) ? h4.value[_][ee] = s3 : h4.value[_] = [s3]), t2.arrowNavigation && o(h4.value, "calendar");
    }, u2 = (s3) => {
      t2.monthChangeOnScroll && (s3.preventDefault(), a3("handle-scroll", s3));
    }, y3 = (s3) => {
      const _ = s3[0];
      return t2.weekNumbers === "local" ? getWeek(_.value, { weekStartsOn: +t2.weekStart }) : t2.weekNumbers === "iso" ? getISOWeek(_.value) : typeof t2.weekNumbers == "function" ? t2.weekNumbers(_.value) : "";
    };
    return n({ triggerTransition: H3 }), (s3, _) => {
      var ee;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(le.value)
      }, [
        createBaseVNode("div", {
          ref_key: "calendarWrapRef",
          ref: S3,
          role: "grid",
          class: normalizeClass(A.value),
          "aria-label": (ee = unref(d3)) == null ? void 0 : ee.calendarWrap
        }, [
          (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", Bl, [
              s3.weekNumbers ? (openBlock(), createElementBlock("div", El, toDisplayString(s3.weekNumName), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(T2.value, (r, U) => (openBlock(), createElementBlock("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: U
              }, [
                s3.$slots["calendar-header"] ? renderSlot(s3.$slots, "calendar-header", {
                  key: 0,
                  day: r,
                  index: U
                }) : createCommentVNode("", true),
                s3.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(r), 1)
                ], 64))
              ]))), 128))
            ]),
            Fl,
            createVNode(Transition, {
              name: J.value,
              css: !!s3.transitions
            }, {
              default: withCtx(() => {
                var r;
                return [
                  R2.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": ((r = unref(d3)) == null ? void 0 : r.calendarDays) || void 0
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(k2.value, (U, N) => (openBlock(), createElementBlock("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: N
                    }, [
                      s3.weekNumbers ? (openBlock(), createElementBlock("div", Hl, [
                        createBaseVNode("div", Ll, toDisplayString(y3(U.days)), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(U.days, (g, F) => {
                        var ae, G2, we;
                        return openBlock(), createElementBlock("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: true,
                          ref: (se) => m3(se, N, F),
                          key: F + N,
                          "aria-selected": g.classData.dp__active_date || g.classData.dp__range_start || g.classData.dp__range_start,
                          "aria-disabled": g.classData.dp__cell_disabled || void 0,
                          "aria-label": (G2 = (ae = unref(d3)) == null ? void 0 : ae.day) == null ? void 0 : G2.call(ae, g),
                          tabindex: "0",
                          onClick: withModifiers((se) => s3.$emit("select-date", g), ["stop", "prevent"]),
                          onKeydown: [
                            withKeys((se) => s3.$emit("select-date", g), ["enter"]),
                            withKeys((se) => s3.$emit("handle-space", g), ["space"])
                          ],
                          onMouseenter: (se) => w2(g, N, F),
                          onMouseleave: (se) => C(g)
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(["dp__cell_inner", g.classData])
                          }, [
                            s3.$slots.day && f.value(g) ? renderSlot(s3.$slots, "day", {
                              key: 0,
                              day: +g.text,
                              date: g.value
                            }) : createCommentVNode("", true),
                            s3.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(g.text), 1)
                            ], 64)),
                            g.marker && f.value(g) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              s3.$slots.marker ? renderSlot(s3.$slots, "marker", {
                                key: 0,
                                marker: g.marker,
                                day: +g.text,
                                date: g.value
                              }) : (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: normalizeClass(q2.value(g.marker)),
                                style: normalizeStyle(g.marker.color ? { backgroundColor: g.marker.color } : {})
                              }, null, 6))
                            ], 64)) : createCommentVNode("", true),
                            j.value(g.value) ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: true,
                              ref_key: "activeTooltip",
                              ref: Q2,
                              style: normalizeStyle($.value)
                            }, [
                              (we = g.marker) != null && we.tooltip ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: _[0] || (_[0] = withModifiers(() => {
                                }, ["stop"]))
                              }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(g.marker.tooltip, (se, O2) => (openBlock(), createElementBlock("div", {
                                  key: O2,
                                  class: "dp__tooltip_text"
                                }, [
                                  s3.$slots["marker-tooltip"] ? renderSlot(s3.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: se,
                                    day: g.value
                                  }) : createCommentVNode("", true),
                                  s3.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createBaseVNode("div", {
                                      class: "dp__tooltip_mark",
                                      style: normalizeStyle(se.color ? { backgroundColor: se.color } : {})
                                    }, null, 4),
                                    createBaseVNode("div", null, toDisplayString(se.text), 1)
                                  ], 64))
                                ]))), 128)),
                                createBaseVNode("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: normalizeStyle(Z.value)
                                }, null, 4)
                              ])) : createCommentVNode("", true)
                            ], 4)) : createCommentVNode("", true)
                          ], 2)
                        ], 40, Ul);
                      }), 128))
                    ]))), 128))
                  ], 8, Vl)) : createCommentVNode("", true)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, Yl)
      ], 2);
    };
  }
});
var ua = (e2) => Array.isArray(e2);
var zl = (e2, n, a3, t2) => {
  const o = ref([]), { modelValue: l, calendars: d3, time: M3 } = qt(e2, n), { defaultedMultiCalendars: p, defaultedStartTime: $ } = Re(e2), { validateMonthYearInRange: h4, isDisabled: S3, isDateRangeAllowed: R2, checkMinMaxRange: J } = Et(e2), { updateTimeValues: W, getSetDateTime: Q2, setTime: Z, assignStartTime: k2, disabledTimesConfig: T2 } = Oa(
    e2,
    M3,
    l,
    t2
  ), I2 = computed(
    () => (i2) => d3.value[i2] ? d3.value[i2].month : 0
  ), H3 = computed(
    () => (i2) => d3.value[i2] ? d3.value[i2].year : 0
  ), A = (i2, E2, ne) => {
    var de, De;
    d3.value[i2] || (d3.value[i2] = { month: 0, year: 0 }), d3.value[i2].month = na(E2) ? (de = d3.value[i2]) == null ? void 0 : de.month : E2, d3.value[i2].year = na(ne) ? (De = d3.value[i2]) == null ? void 0 : De.year : ne;
  }, q2 = () => {
    e2.autoApply && n("select-date");
  };
  watch(l, (i2, E2) => {
    JSON.stringify(i2) !== JSON.stringify(E2) && f();
  }), onMounted(() => {
    e2.shadow || (l.value || (s3(), $.value && k2($.value)), f(true), e2.focusStartDate && e2.startDate && s3());
  });
  const j = computed(() => {
    var i2;
    return (i2 = e2.flow) != null && i2.length && !e2.partialFlow ? e2.flowStep === e2.flow.length : true;
  }), le = () => {
    e2.autoApply && j.value && n("auto-apply", e2.partialFlow);
  }, f = (i2 = false) => {
    if (l.value)
      return Array.isArray(l.value) ? (o.value = l.value, b2(i2)) : C(l.value, i2);
    if (p.value.count && i2 && !e2.startDate)
      return w2(P(), i2);
  }, w2 = (i2, E2 = false) => {
    if ((!p.value.count || !p.value.static || E2) && A(0, getMonth(i2), getYear(i2)), p.value.count)
      for (let ne = 1; ne < p.value.count; ne++) {
        const de = set(P(), { month: I2.value(ne - 1), year: H3.value(ne - 1) }), De = add(de, { months: 1 });
        d3.value[ne] = { month: getMonth(De), year: getYear(De) };
      }
  }, C = (i2, E2) => {
    w2(i2), Z("hours", getHours(i2)), Z("minutes", getMinutes(i2)), Z("seconds", getSeconds(i2)), p.value.count && E2 && y3();
  }, K2 = (i2) => {
    if (p.value.count) {
      if (p.value.solo)
        return 0;
      const E2 = getMonth(i2[0]), ne = getMonth(i2[1]);
      return Math.abs(ne - E2) < p.value.count ? 0 : 1;
    }
    return 1;
  }, c2 = (i2, E2) => {
    i2[1] && e2.showLastInRange ? w2(i2[K2(i2)], E2) : w2(i2[0], E2);
    const ne = (de, De) => [
      de(i2[0]),
      i2[1] ? de(i2[1]) : M3[De][1]
    ];
    Z("hours", ne(getHours, "hours")), Z("minutes", ne(getMinutes, "minutes")), Z("seconds", ne(getSeconds, "seconds"));
  }, V = (i2, E2) => {
    if ((e2.range || e2.weekPicker) && !e2.multiDates)
      return c2(i2, E2);
    if (e2.multiDates && E2) {
      const ne = i2[i2.length - 1];
      return C(ne, E2);
    }
  }, b2 = (i2) => {
    const E2 = l.value;
    V(E2, i2), p.value.count && p.value.solo && y3();
  }, m3 = (i2, E2) => {
    const ne = set(P(), { month: I2.value(E2), year: H3.value(E2) }), de = i2 < 0 ? addMonths(ne, 1) : subMonths(ne, 1);
    h4(getMonth(de), getYear(de), i2 < 0, e2.preventMinMaxNavigation) && (A(E2, getMonth(de), getYear(de)), p.value.count && !p.value.solo && u2(E2), a3());
  }, u2 = (i2) => {
    for (let E2 = i2 - 1; E2 >= 0; E2--) {
      const ne = subMonths(set(P(), { month: I2.value(E2 + 1), year: H3.value(E2 + 1) }), 1);
      A(E2, getMonth(ne), getYear(ne));
    }
    for (let E2 = i2 + 1; E2 <= p.value.count - 1; E2++) {
      const ne = addMonths(set(P(), { month: I2.value(E2 - 1), year: H3.value(E2 - 1) }), 1);
      A(E2, getMonth(ne), getYear(ne));
    }
  }, y3 = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const i2 = P(
        P(l.value[1] ? l.value[1] : addMonths(l.value[0], 1))
      ), [E2, ne] = [getMonth(l.value[0]), getYear(l.value[0])], [de, De] = [getMonth(l.value[1]), getYear(l.value[1])];
      (E2 !== de || E2 === de && ne !== De) && p.value.solo && A(1, getMonth(i2), getYear(i2));
    } else
      l.value && !Array.isArray(l.value) && (A(0, getMonth(l.value), getYear(l.value)), w2(P()));
  }, s3 = () => {
    e2.startDate && (A(0, getMonth(P(e2.startDate)), getYear(P(e2.startDate))), p.value.count && u2(0));
  }, _ = (i2, E2) => {
    e2.monthChangeOnScroll && m3(e2.monthChangeOnScroll !== "inverse" ? -i2.deltaY : i2.deltaY, E2);
  }, ee = (i2, E2, ne = false) => {
    e2.monthChangeOnArrows && e2.vertical === ne && r(i2, E2);
  }, r = (i2, E2) => {
    m3(i2 === "right" ? -1 : 1, E2);
  }, U = (i2) => e2.markers.find((E2) => ye(ra(i2.value), ra(E2.date))), N = (i2, E2) => {
    switch (e2.sixWeeks === true ? "append" : e2.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [i2 == 0, true];
      case "fair":
        return [i2 == 0 || E2 > i2, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, g = (i2, E2, ne, de) => {
    if (e2.sixWeeks && i2.length < 6) {
      const De = 6 - i2.length, et = (E2.getDay() + 7 - de) % 7, Vt = 6 - (ne.getDay() + 7 - de) % 7, [Tt, ln] = N(et, Vt);
      for (let ot = 1; ot <= De; ot++)
        if (ln ? !!(ot % 2) == Tt : Tt) {
          const Ht = i2[0].days[0], on = F(addDays(Ht.value, -7), getMonth(E2));
          i2.unshift({ days: on });
        } else {
          const Ht = i2[i2.length - 1], on = Ht.days[Ht.days.length - 1], Ya = F(addDays(on.value, 1), getMonth(E2));
          i2.push({ days: Ya });
        }
    }
    return i2;
  }, F = (i2, E2) => {
    const ne = P(JSON.parse(JSON.stringify(i2))), de = [];
    for (let De = 0; De < 7; De++) {
      const et = addDays(ne, De), $t = getMonth(et) !== E2;
      de.push({
        text: e2.hideOffsetDates && $t ? "" : et.getDate(),
        value: et,
        current: !$t,
        classData: {}
      });
    }
    return de;
  }, ae = (i2, E2) => {
    const ne = [], de = P(Ze(new Date(E2, i2), e2.timezone)), De = P(Ze(new Date(E2, i2 + 1, 0), e2.timezone)), et = e2.weekStart, $t = startOfWeek(de, { weekStartsOn: et }), Vt = (Tt) => {
      const ln = F(Tt, i2);
      if (ne.push({ days: ln }), !ne[ne.length - 1].days.some(
        (ot) => ye(Le(ot.value), Le(De))
      )) {
        const ot = addDays(Tt, 7);
        Vt(ot);
      }
    };
    return Vt($t), g(ne, de, De, et);
  }, G2 = (i2) => (l.value = Kt(P(i2.value), e2.timezone, e2.weekStart), le()), we = (i2) => {
    const E2 = nt(P(i2.value), M3.hours, M3.minutes, Ft());
    e2.multiDates ? Un(E2, l, e2.multiDatesLimit) : l.value = E2, t2(), nextTick().then(() => {
      le();
    });
  }, se = (i2) => e2.noDisabledRange ? Aa(o.value[0], i2).some((ne) => S3(ne)) : false, O2 = () => {
    o.value = l.value ? l.value.slice() : [], o.value.length === 2 && !(e2.fixedStart || e2.fixedEnd) && (o.value = []);
  }, X2 = (i2, E2) => {
    const ne = [P(i2.value), addDays(P(i2.value), +e2.autoRange)];
    R2(ne) && (E2 && $e(i2.value), o.value = ne);
  }, $e = (i2) => {
    const E2 = getMonth(P(i2)), ne = getYear(P(i2));
    if (A(0, E2, ne), p.value.count > 0)
      for (let de = 1; de < p.value.count; de++) {
        const De = Rr(
          set(P(i2), { year: I2.value(de - 1), month: H3.value(de - 1) })
        );
        A(de, De.month, De.year);
      }
  }, x2 = (i2) => Array.isArray(l.value) && l.value.length === 2 ? e2.fixedStart && (Ne(i2, l.value[0]) || ye(i2, l.value[0])) ? [l.value[0], i2] : e2.fixedEnd && (Pe(i2, l.value[1]) || ye(i2, l.value[1])) ? [i2, l.value[1]] : (n("invalid-fixed-range", i2), l.value) : [], Ve = (i2) => {
    se(i2.value) || !J(i2.value, l.value, e2.fixedStart ? 0 : 1) || (o.value = x2(P(i2.value)));
  }, Se = (i2, E2) => {
    if (O2(), e2.autoRange)
      return X2(i2, E2);
    if (e2.fixedStart || e2.fixedEnd)
      return Ve(i2);
    o.value[0] ? J(P(i2.value), l.value) && !se(i2.value) && (Pe(P(i2.value), P(o.value[0])) ? (o.value.unshift(P(i2.value)), n("range-end", o.value[0])) : (o.value[1] = P(i2.value), n("range-end", o.value[1]))) : (o.value[0] = P(i2.value), n("range-start", o.value[0]));
  }, Ft = (i2 = true) => e2.enableSeconds ? Array.isArray(M3.seconds) ? i2 ? M3.seconds[0] : M3.seconds[1] : M3.seconds : 0, Mt = (i2) => {
    o.value[i2] = nt(
      o.value[i2],
      M3.hours[i2],
      M3.minutes[i2],
      Ft(i2 !== 1)
    );
  }, xt = () => {
    var i2, E2;
    o.value[0] && o.value[1] && +((i2 = o.value) == null ? void 0 : i2[0]) > +((E2 = o.value) == null ? void 0 : E2[1]) && (o.value.reverse(), n("range-start", o.value[0]), n("range-end", o.value[1]));
  }, Qt = () => {
    o.value.length && (o.value[0] && !o.value[1] ? Mt(0) : (Mt(0), Mt(1), t2()), xt(), l.value = o.value.slice(), Wn(o.value, n, e2.autoApply, e2.modelAuto));
  }, en = (i2, E2 = false) => {
    if (!(S3(i2.value) || !i2.current && e2.hideOffsetDates)) {
      if (e2.weekPicker)
        return G2(i2);
      if (!e2.range)
        return we(i2);
      ua(M3.hours) && ua(M3.minutes) && !e2.multiDates && (Se(i2, E2), Qt());
    }
  }, tn = (i2, E2) => {
    var de;
    A(i2, E2.month, E2.year), p.value.count && !p.value.solo && u2(i2), n("update-month-year", { instance: i2, month: E2.month, year: E2.year }), a3(p.value.solo ? i2 : void 0);
    const ne = (de = e2.flow) != null && de.length ? e2.flow[e2.flowStep] : void 0;
    !E2.fromNav && (ne === Ke.month || ne === Ke.year) && t2();
  }, nn = (i2, E2) => {
    Array.isArray(i2) && i2.length <= 2 && e2.range ? l.value = i2.map((ne) => Ze(P(ne), E2 ? void 0 : e2.timezone)) : Array.isArray(i2) || (l.value = Ze(P(i2), E2 ? void 0 : e2.timezone)), q2(), e2.multiCalendars && nextTick().then(() => f(true));
  }, an = () => {
    e2.range ? l.value && Array.isArray(l.value) && l.value[0] ? l.value = Pe(P(), l.value[0]) ? [P(), l.value[0]] : [l.value[0], P()] : l.value = [P()] : l.value = P(), q2();
  }, rn = () => {
    if (Array.isArray(l.value))
      if (e2.multiDates) {
        const i2 = re();
        l.value[l.value.length - 1] = Q2(i2);
      } else
        l.value = l.value.map((i2, E2) => i2 && Q2(i2, E2));
    else
      l.value = Q2(l.value);
    n("time-update");
  }, re = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null;
  return {
    calendars: d3,
    modelValue: l,
    month: I2,
    year: H3,
    time: M3,
    disabledTimesConfig: T2,
    getCalendarDays: ae,
    getMarker: U,
    handleScroll: _,
    handleSwipe: r,
    handleArrow: ee,
    selectDate: en,
    updateMonthYear: tn,
    presetDate: nn,
    selectCurrentDate: an,
    updateTime: (i2, E2 = true, ne = false) => {
      W(i2, E2, ne, rn);
    }
  };
};
var jl = { key: 0 };
var Kl = defineComponent({
  __name: "DatePicker",
  props: {
    ...Qe
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, {
      calendars: o,
      month: l,
      year: d3,
      modelValue: M3,
      time: p,
      disabledTimesConfig: $,
      getCalendarDays: h4,
      getMarker: S3,
      handleArrow: R2,
      handleScroll: J,
      handleSwipe: W,
      selectDate: Q2,
      updateMonthYear: Z,
      presetDate: k2,
      selectCurrentDate: T2,
      updateTime: I2
    } = zl(t2, a3, u2, y3), H3 = useSlots(), { setHoverDate: A, getDayClassData: q2, clearHoverDate: j } = qr(M3, t2), { defaultedMultiCalendars: le } = Re(t2), f = ref([]), w2 = ref([]), C = ref(null), K2 = je(H3, "calendar"), c2 = je(H3, "monthYear"), V = je(H3, "timePicker"), b2 = (N) => {
      t2.shadow || a3("mount", N);
    };
    watch(
      o,
      () => {
        t2.shadow || setTimeout(() => {
          a3("recalculate-position");
        }, 0);
      },
      { deep: true }
    );
    const m3 = computed(() => (N) => h4(l.value(N), d3.value(N)).map((g) => ({
      ...g,
      days: g.days.map((F) => (F.marker = S3(F), F.classData = q2(F), F))
    })));
    function u2(N) {
      var g;
      N || N === 0 ? (g = w2.value[N]) == null || g.triggerTransition(l.value(N), d3.value(N)) : w2.value.forEach((F, ae) => F.triggerTransition(l.value(ae), d3.value(ae)));
    }
    function y3() {
      a3("update-flow-step");
    }
    const s3 = (N, g = false) => {
      Q2(N, g), t2.spaceConfirm && a3("select-date");
    };
    return n({
      clearHoverDate: j,
      presetDate: k2,
      selectCurrentDate: T2,
      toggleMonthPicker: (N, g, F = 0) => {
        var ae;
        (ae = f.value[F]) == null || ae.toggleMonthPicker(N, g);
      },
      toggleYearPicker: (N, g, F = 0) => {
        var ae;
        (ae = f.value[F]) == null || ae.toggleYearPicker(N, g);
      },
      toggleTimePicker: (N, g, F) => {
        var ae;
        (ae = C.value) == null || ae.toggleTimePicker(N, g, F);
      },
      handleArrow: R2,
      updateMonthYear: Z,
      getSidebarProps: () => ({
        modelValue: M3,
        month: l,
        year: d3,
        time: p,
        updateTime: I2,
        updateMonthYear: Z,
        selectDate: Q2,
        presetDate: k2
      })
    }), (N, g) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(Ln, {
        "multi-calendars": unref(le).count
      }, {
        default: withCtx(({ instance: F, index: ae }) => [
          N.disableMonthYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(Il, mergeProps({
            key: 0,
            ref: (G2) => {
              G2 && (f.value[ae] = G2);
            },
            months: unref(Da)(N.formatLocale, N.locale, N.monthNameFormat),
            years: unref(Vn)(N.yearRange, N.reverseYears),
            month: unref(l)(F),
            year: unref(d3)(F),
            instance: F
          }, N.$props, {
            onMount: g[0] || (g[0] = (G2) => b2(unref(mt).header)),
            onResetFlow: g[1] || (g[1] = (G2) => N.$emit("reset-flow")),
            onUpdateMonthYear: (G2) => unref(Z)(F, G2),
            onOverlayClosed: g[2] || (g[2] = (G2) => N.$emit("focus-menu"))
          }), createSlots({ _: 2 }, [
            renderList(unref(c2), (G2, we) => ({
              name: G2,
              fn: withCtx((se) => [
                renderSlot(N.$slots, G2, normalizeProps(guardReactiveProps(se)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          createVNode(Wl, mergeProps({
            ref: (G2) => {
              G2 && (w2.value[ae] = G2);
            },
            "mapped-dates": m3.value(F),
            month: unref(l)(F),
            year: unref(d3)(F)
          }, N.$props, {
            onSelectDate: (G2) => unref(Q2)(G2, F !== 1),
            onHandleSpace: (G2) => s3(G2, F !== 1),
            onSetHoverDate: g[3] || (g[3] = (G2) => unref(A)(G2)),
            onHandleScroll: (G2) => unref(J)(G2, F),
            onHandleSwipe: (G2) => unref(W)(G2, F),
            onMount: g[4] || (g[4] = (G2) => b2(unref(mt).calendar)),
            onResetFlow: g[5] || (g[5] = (G2) => N.$emit("reset-flow")),
            onTooltipOpen: g[6] || (g[6] = (G2) => N.$emit("tooltip-open", G2)),
            onTooltipClose: g[7] || (g[7] = (G2) => N.$emit("tooltip-close", G2))
          }), createSlots({ _: 2 }, [
            renderList(unref(K2), (G2, we) => ({
              name: G2,
              fn: withCtx((se) => [
                renderSlot(N.$slots, G2, normalizeProps(guardReactiveProps({ ...se })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      N.enableTimePicker ? (openBlock(), createElementBlock("div", jl, [
        N.$slots["time-picker"] ? renderSlot(N.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(p), updateTime: unref(I2) }))) : (openBlock(), createBlock(Na, mergeProps({
          key: 1,
          ref_key: "timePickerRef",
          ref: C
        }, N.$props, {
          hours: unref(p).hours,
          minutes: unref(p).minutes,
          seconds: unref(p).seconds,
          "internal-model-value": N.internalModelValue,
          "disabled-times-config": unref($),
          onMount: g[8] || (g[8] = (F) => b2(unref(mt).timePicker)),
          "onUpdate:hours": g[9] || (g[9] = (F) => unref(I2)(F)),
          "onUpdate:minutes": g[10] || (g[10] = (F) => unref(I2)(F, false)),
          "onUpdate:seconds": g[11] || (g[11] = (F) => unref(I2)(F, false, true)),
          onResetFlow: g[12] || (g[12] = (F) => N.$emit("reset-flow")),
          onOverlayClosed: g[13] || (g[13] = (F) => N.$emit("time-picker-close")),
          onOverlayOpened: g[14] || (g[14] = (F) => N.$emit("time-picker-open", F)),
          onAmPmChange: g[15] || (g[15] = (F) => N.$emit("am-pm-change", F))
        }), createSlots({ _: 2 }, [
          renderList(unref(V), (F, ae) => ({
            name: F,
            fn: withCtx((G2) => [
              renderSlot(N.$slots, F, normalizeProps(guardReactiveProps(G2)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config"]))
      ])) : createCommentVNode("", true)
    ], 64));
  }
});
var Gl = ["id", "onKeydown"];
var Zl = {
  key: 0,
  class: "dp__sidebar_left"
};
var ql = {
  key: 1,
  class: "dp--preset-dates"
};
var Jl = ["onClick", "onKeydown"];
var Xl = {
  key: 2,
  class: "dp__sidebar_right"
};
var xl = {
  key: 3,
  class: "dp__action_extra"
};
var ia = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Xt,
    shadow: { type: Boolean, default: false },
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, o = computed(() => {
      const { openOnTop: O2, ...X2 } = t2;
      return {
        ...X2,
        flowStep: q2.value
      };
    }), { setMenuFocused: l, setShiftKey: d3, control: M3 } = Ca(), p = useSlots(), { defaultedTextInput: $, defaultedInline: h4 } = Re(t2), S3 = ref(null), R2 = ref(0), J = ref(null), W = ref(null), Q2 = ref(false), Z = ref(null);
    onMounted(() => {
      if (!t2.shadow) {
        Q2.value = true, k2(), window.addEventListener("resize", k2);
        const O2 = Ae(J);
        if (O2 && !$.value.enabled && !h4.value.enabled && (l(true), C()), O2) {
          const X2 = ($e) => {
            t2.allowPreventDefault && $e.preventDefault(), $e.stopImmediatePropagation(), $e.stopPropagation();
          };
          O2.addEventListener("pointerdown", X2), O2.addEventListener("mousedown", X2);
        }
      }
    }), onUnmounted(() => {
      window.removeEventListener("resize", k2);
    });
    const k2 = () => {
      const O2 = Ae(W);
      O2 && (R2.value = O2.getBoundingClientRect().width);
    }, { arrowRight: T2, arrowLeft: I2, arrowDown: H3, arrowUp: A } = lt(), { flowStep: q2, updateFlowStep: j, childMount: le, resetFlow: f } = Jr(t2, a3, Z), w2 = computed(() => t2.monthPicker ? vl : t2.yearPicker ? gl : t2.timePicker ? Rl : Kl), C = () => {
      const O2 = Ae(J);
      O2 && O2.focus({ preventScroll: true });
    }, K2 = computed(() => {
      var O2;
      return ((O2 = Z.value) == null ? void 0 : O2.getSidebarProps()) || {};
    }), c2 = () => {
      t2.openOnTop && a3("recalculate-position");
    }, V = je(p, "action"), b2 = computed(() => t2.monthPicker || t2.yearPicker ? je(p, "monthYear") : t2.timePicker ? je(p, "timePicker") : je(p, "shared")), m3 = computed(() => t2.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), u2 = computed(() => ({
      dp__menu_disabled: t2.disabled,
      dp__menu_readonly: t2.readonly
    })), y3 = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !h4.value.enabled,
        dp__relative: h4.value.enabled,
        [t2.menuClassName]: !!t2.menuClassName
      })
    ), s3 = (O2) => {
      O2.stopPropagation(), O2.stopImmediatePropagation();
    }, _ = () => {
      t2.escClose && a3("close-picker");
    }, ee = (O2) => {
      if (t2.arrowNavigation) {
        if (O2 === "up")
          return A();
        if (O2 === "down")
          return H3();
        if (O2 === "left")
          return I2();
        if (O2 === "right")
          return T2();
      } else
        O2 === "left" || O2 === "up" ? F("handleArrow", "left", 0, O2 === "up") : F("handleArrow", "right", 0, O2 === "down");
    }, r = (O2) => {
      d3(O2.shiftKey), !t2.disableMonthYearSelect && O2.code === "Tab" && O2.target.classList.contains("dp__menu") && M3.value.shiftKeyInMenu && (O2.preventDefault(), O2.stopImmediatePropagation(), a3("close-picker"));
    }, U = () => {
      C(), a3("time-picker-close");
    }, N = (O2) => {
      var X2, $e, x2;
      (X2 = Z.value) == null || X2.toggleTimePicker(false, false), ($e = Z.value) == null || $e.toggleMonthPicker(false, false, O2), (x2 = Z.value) == null || x2.toggleYearPicker(false, false, O2);
    }, g = (O2, X2 = 0) => {
      var $e, x2, Ve;
      return O2 === "month" ? ($e = Z.value) == null ? void 0 : $e.toggleMonthPicker(false, true, X2) : O2 === "year" ? (x2 = Z.value) == null ? void 0 : x2.toggleYearPicker(false, true, X2) : O2 === "time" ? (Ve = Z.value) == null ? void 0 : Ve.toggleTimePicker(true, false) : N(X2);
    }, F = (O2, ...X2) => {
      var $e, x2;
      ($e = Z.value) != null && $e[O2] && ((x2 = Z.value) == null || x2[O2](...X2));
    }, ae = () => {
      F("selectCurrentDate");
    }, G2 = (O2, X2) => {
      F("presetDate", O2, X2);
    }, we = () => {
      F("clearHoverDate");
    };
    return n({
      updateMonthYear: (O2, X2) => {
        F("updateMonthYear", O2, X2);
      },
      switchView: g
    }), (O2, X2) => {
      var $e;
      return openBlock(), createElementBlock("div", {
        id: O2.uid ? `dp-menu-${O2.uid}` : void 0,
        tabindex: "0",
        ref_key: "dpMenuRef",
        ref: J,
        role: "dialog",
        class: normalizeClass(y3.value),
        onMouseleave: we,
        onClick: s3,
        onKeydown: [
          withKeys(_, ["esc"]),
          X2[15] || (X2[15] = withKeys(withModifiers((x2) => ee("left"), ["prevent"]), ["left"])),
          X2[16] || (X2[16] = withKeys(withModifiers((x2) => ee("up"), ["prevent"]), ["up"])),
          X2[17] || (X2[17] = withKeys(withModifiers((x2) => ee("down"), ["prevent"]), ["down"])),
          X2[18] || (X2[18] = withKeys(withModifiers((x2) => ee("right"), ["prevent"]), ["right"])),
          r
        ]
      }, [
        (O2.disabled || O2.readonly) && unref(h4).enabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(u2.value)
        }, null, 2)) : createCommentVNode("", true),
        !unref(h4).enabled && !O2.teleportCenter ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(m3.value)
        }, null, 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "innerMenuRef",
          ref: W,
          class: normalizeClass({
            dp__menu_content_wrapper: (($e = O2.presetDates) == null ? void 0 : $e.length) || !!O2.$slots["left-sidebar"] || !!O2.$slots["right-sidebar"]
          }),
          style: normalizeStyle({ "--dp-menu-width": `${R2.value}px` })
        }, [
          O2.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", Zl, [
            renderSlot(O2.$slots, "left-sidebar", normalizeProps(guardReactiveProps(K2.value)))
          ])) : createCommentVNode("", true),
          O2.presetDates.length ? (openBlock(), createElementBlock("div", ql, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(O2.presetDates, (x2, Ve) => (openBlock(), createElementBlock("div", {
              key: Ve,
              style: normalizeStyle(x2.style || {}),
              class: "dp--preset-range"
            }, [
              x2.slot ? renderSlot(O2.$slots, x2.slot, {
                key: 0,
                presetDate: G2,
                label: x2.label,
                value: x2.value
              }) : (openBlock(), createElementBlock("div", {
                key: 1,
                role: "button",
                tabindex: "0",
                onClick: (Se) => G2(x2.value, x2.noTz),
                onKeydown: [
                  withKeys(withModifiers((Se) => G2(x2.value, x2.noTz), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((Se) => G2(x2.value, x2.noTz), ["prevent"]), ["space"])
                ]
              }, toDisplayString(x2.label), 41, Jl))
            ], 4))), 128))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "dp__instance_calendar",
            ref_key: "calendarWrapperRef",
            ref: S3,
            role: "document"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(w2.value), mergeProps({
              ref_key: "dynCmpRef",
              ref: Z
            }, o.value, {
              "flow-step": unref(q2),
              onMount: unref(le),
              onUpdateFlowStep: unref(j),
              onResetFlow: unref(f),
              onFocusMenu: C,
              onSelectDate: X2[0] || (X2[0] = (x2) => O2.$emit("select-date")),
              onTooltipOpen: X2[1] || (X2[1] = (x2) => O2.$emit("tooltip-open", x2)),
              onTooltipClose: X2[2] || (X2[2] = (x2) => O2.$emit("tooltip-close", x2)),
              onAutoApply: X2[3] || (X2[3] = (x2) => O2.$emit("auto-apply", x2)),
              onRangeStart: X2[4] || (X2[4] = (x2) => O2.$emit("range-start", x2)),
              onRangeEnd: X2[5] || (X2[5] = (x2) => O2.$emit("range-end", x2)),
              onInvalidFixedRange: X2[6] || (X2[6] = (x2) => O2.$emit("invalid-fixed-range", x2)),
              onTimeUpdate: X2[7] || (X2[7] = (x2) => O2.$emit("time-update")),
              onAmPmChange: X2[8] || (X2[8] = (x2) => O2.$emit("am-pm-change", x2)),
              onTimePickerOpen: X2[9] || (X2[9] = (x2) => O2.$emit("time-picker-open", x2)),
              onTimePickerClose: U,
              onRecalculatePosition: c2,
              onUpdateMonthYear: X2[10] || (X2[10] = (x2) => O2.$emit("update-month-year", x2)),
              "onUpdate:internalModelValue": X2[11] || (X2[11] = (x2) => O2.$emit("update:internal-model-value", x2))
            }), createSlots({ _: 2 }, [
              renderList(b2.value, (x2, Ve) => ({
                name: x2,
                fn: withCtx((Se) => [
                  renderSlot(O2.$slots, x2, normalizeProps(guardReactiveProps({ ...Se })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          O2.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", Xl, [
            renderSlot(O2.$slots, "right-sidebar", normalizeProps(guardReactiveProps(K2.value)))
          ])) : createCommentVNode("", true),
          O2.$slots["action-extra"] ? (openBlock(), createElementBlock("div", xl, [
            O2.$slots["action-extra"] ? renderSlot(O2.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: ae
            }) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6),
        !O2.autoApply || O2.keepActionRow ? (openBlock(), createBlock(rl, mergeProps({
          key: 2,
          "menu-mount": Q2.value
        }, o.value, {
          "calendar-width": R2.value,
          onClosePicker: X2[12] || (X2[12] = (x2) => O2.$emit("close-picker")),
          onSelectDate: X2[13] || (X2[13] = (x2) => O2.$emit("select-date")),
          onInvalidSelect: X2[14] || (X2[14] = (x2) => O2.$emit("invalid-select")),
          onSelectNow: ae
        }), createSlots({ _: 2 }, [
          renderList(unref(V), (x2, Ve) => ({
            name: x2,
            fn: withCtx((Se) => [
              renderSlot(O2.$slots, x2, normalizeProps(guardReactiveProps({ ...Se })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : createCommentVNode("", true)
      ], 42, Gl);
    };
  }
});
var Ql = typeof window < "u" ? window : void 0;
var bn = () => {
};
var eo = (e2) => getCurrentScope() ? (onScopeDispose(e2), true) : false;
var to = (e2, n, a3, t2) => {
  if (!e2)
    return bn;
  let o = bn;
  const l = watch(
    () => unref(e2),
    (M3) => {
      o(), M3 && (M3.addEventListener(n, a3, t2), o = () => {
        M3.removeEventListener(n, a3, t2), o = bn;
      });
    },
    { immediate: true, flush: "post" }
  ), d3 = () => {
    l(), o();
  };
  return eo(d3), d3;
};
var no = (e2, n, a3, t2 = {}) => {
  const { window: o = Ql, event: l = "pointerdown" } = t2;
  return o ? to(o, l, (M3) => {
    const p = Ae(e2), $ = Ae(n);
    !p || !$ || p === M3.target || M3.composedPath().includes(p) || M3.composedPath().includes($) || a3(M3);
  }, { passive: true }) : void 0;
};
var ao = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Xt
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, o = useSlots(), l = ref(false), d3 = toRef(t2, "modelValue"), M3 = toRef(t2, "timezone"), p = ref(null), $ = ref(null), h4 = ref(null), S3 = ref(false), R2 = ref(null), { setMenuFocused: J, setShiftKey: W } = Ca(), { clearArrowNav: Q2 } = lt(), { mapDatesArrToMap: Z, validateDate: k2, isValidTime: T2 } = Et(t2), { defaultedTransitions: I2, defaultedTextInput: H3, defaultedInline: A } = Re(t2), { menuTransition: q2, showTransition: j } = Bt(I2);
    onMounted(() => {
      s3(t2.modelValue), nextTick().then(() => {
        A.value.enabled || (b2(R2.value).addEventListener("scroll", F), window.addEventListener("resize", ae));
      }), A.value.enabled && (l.value = true);
    });
    const le = computed(() => Z());
    onUnmounted(() => {
      if (!A.value.enabled) {
        const re = b2(R2.value);
        re && re.removeEventListener("scroll", F), window.removeEventListener("resize", ae);
      }
    });
    const f = je(o, "all", t2.presetDates), w2 = je(o, "input");
    watch(
      [d3, M3],
      () => {
        s3(d3.value);
      },
      { deep: true }
    );
    const { openOnTop: C, menuStyle: K2, xCorrect: c2, setMenuPosition: V, getScrollableParent: b2, shadowRender: m3 } = Kr({
      menuRef: p,
      menuRefInner: $,
      inputRef: h4,
      pickerWrapperRef: R2,
      inline: A,
      emit: a3,
      props: t2,
      slots: o
    }), {
      inputValue: u2,
      internalModelValue: y3,
      parseExternalModelValue: s3,
      emitModelValue: _,
      formatInputValue: ee,
      checkBeforeEmit: r
    } = zr(a3, t2, S3), U = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: t2.dark,
        dp__theme_light: !t2.dark,
        dp__flex_display: A.value.enabled,
        dp__flex_display_with_input: A.value.input
      })
    ), N = computed(() => t2.dark ? "dp__theme_dark" : "dp__theme_light"), g = computed(() => t2.teleport ? {
      to: typeof t2.teleport == "boolean" ? "body" : t2.teleport,
      disabled: A.value.enabled
    } : { class: "dp__outer_menu_wrap" }), F = () => {
      l.value && (t2.closeOnScroll ? Se() : V());
    }, ae = () => {
      l.value && V();
    }, G2 = () => {
      !t2.disabled && !t2.readonly && (m3(ia, t2), V(false), l.value = true, l.value && a3("open"), l.value || Ve(), s3(t2.modelValue));
    }, we = () => {
      u2.value = "", Ve(), a3("update:model-value", null), a3("update:model-timezone-value", null), a3("cleared"), t2.closeOnClearValue && Se();
    }, se = () => {
      const re = y3.value;
      return !re || !Array.isArray(re) && k2(re) ? true : Array.isArray(re) ? re.length === 2 && k2(re[0]) && k2(re[1]) ? true : t2.partialRange && !t2.timePicker ? k2(re[0]) : false : false;
    }, O2 = () => {
      r() && se() ? (_(), Se()) : a3("invalid-select", y3.value);
    }, X2 = (re) => {
      $e(), _(), t2.closeOnAutoApply && !re && Se();
    }, $e = () => {
      h4.value && H3.value.enabled && h4.value.setParsedDate(y3.value);
    }, x2 = (re = false) => {
      t2.autoApply && T2(y3.value) && se() && (t2.range && Array.isArray(y3.value) ? (t2.partialRange || y3.value.length === 2) && X2(re) : X2(re));
    }, Ve = () => {
      H3.value.enabled || (y3.value = null);
    }, Se = () => {
      A.value.enabled || (l.value && (l.value = false, c2.value = false, J(false), W(false), Q2(), a3("closed"), u2.value && s3(d3.value)), Ve(), a3("blur"));
    }, Ft = (re, ie) => {
      if (!re) {
        y3.value = null;
        return;
      }
      y3.value = re, ie && (O2(), a3("text-submit"));
    }, Mt = () => {
      t2.autoApply && T2(y3.value) && _(), $e();
    }, xt = () => l.value ? Se() : G2(), Qt = (re) => {
      y3.value = re;
    }, en = () => {
      H3.value.enabled && (S3.value = true, ee()), a3("focus");
    }, tn = () => {
      H3.value.enabled && (S3.value = false, s3(t2.modelValue)), a3("blur");
    }, nn = (re) => {
      $.value && $.value.updateMonthYear(0, {
        month: ta(re.month),
        year: ta(re.year)
      });
    }, an = (re) => {
      s3(re ?? t2.modelValue);
    }, rn = (re, ie) => {
      var i2;
      (i2 = $.value) == null || i2.switchView(re, ie);
    };
    return no(
      p,
      h4,
      t2.onClickOutside ? () => t2.onClickOutside(se) : Se
    ), n({
      closeMenu: Se,
      selectDate: O2,
      clearValue: we,
      openMenu: G2,
      onScroll: F,
      formatInputValue: ee,
      // exposed for testing purposes
      updateInternalModelValue: Qt,
      // modify internal modelValue
      setMonthYear: nn,
      parseModel: an,
      switchView: rn
    }), (re, ie) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(U.value),
      ref_key: "pickerWrapperRef",
      ref: R2
    }, [
      createVNode(el, mergeProps({
        ref_key: "inputRef",
        ref: h4,
        "is-menu-open": l.value,
        "input-value": unref(u2),
        "onUpdate:inputValue": ie[0] || (ie[0] = (i2) => isRef(u2) ? u2.value = i2 : null)
      }, re.$props, {
        onClear: we,
        onOpen: G2,
        onSetInputDate: Ft,
        onSetEmptyDate: unref(_),
        onSelectDate: O2,
        onToggle: xt,
        onClose: Se,
        onFocus: en,
        onBlur: tn,
        onRealBlur: ie[1] || (ie[1] = (i2) => S3.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(w2), (i2, E2) => ({
          name: i2,
          fn: withCtx((ne) => [
            renderSlot(re.$slots, i2, normalizeProps(guardReactiveProps(ne)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      createVNode(Transition, {
        name: unref(q2)(unref(C)),
        css: unref(j) && !unref(A).enabled
      }, {
        default: withCtx(() => [
          l.value ? (openBlock(), createBlock(resolveDynamicComponent(re.teleport ? Teleport : "div"), mergeProps({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: p
          }, g.value, {
            class: { "dp--menu-wrapper": !unref(A).enabled },
            style: unref(A).enabled ? void 0 : unref(K2)
          }), {
            default: withCtx(() => [
              createVNode(ia, mergeProps({
                ref_key: "dpMenuRef",
                ref: $,
                class: { [N.value]: true, "dp--menu-wrapper": re.teleport },
                style: re.teleport ? unref(K2) : void 0,
                "open-on-top": unref(C),
                "arr-map-values": le.value
              }, re.$props, {
                "internal-model-value": unref(y3),
                "onUpdate:internalModelValue": ie[2] || (ie[2] = (i2) => isRef(y3) ? y3.value = i2 : null),
                onClosePicker: Se,
                onSelectDate: O2,
                onAutoApply: x2,
                onTimeUpdate: Mt,
                onFlowStep: ie[3] || (ie[3] = (i2) => re.$emit("flow-step", i2)),
                onUpdateMonthYear: ie[4] || (ie[4] = (i2) => re.$emit("update-month-year", i2)),
                onInvalidSelect: ie[5] || (ie[5] = (i2) => re.$emit("invalid-select", unref(y3))),
                onInvalidFixedRange: ie[6] || (ie[6] = (i2) => re.$emit("invalid-fixed-range", i2)),
                onRecalculatePosition: unref(V),
                onTooltipOpen: ie[7] || (ie[7] = (i2) => re.$emit("tooltip-open", i2)),
                onTooltipClose: ie[8] || (ie[8] = (i2) => re.$emit("tooltip-close", i2)),
                onTimePickerOpen: ie[9] || (ie[9] = (i2) => re.$emit("time-picker-open", i2)),
                onTimePickerClose: ie[10] || (ie[10] = (i2) => re.$emit("time-picker-close", i2)),
                onAmPmChange: ie[11] || (ie[11] = (i2) => re.$emit("am-pm-change", i2)),
                onRangeStart: ie[12] || (ie[12] = (i2) => re.$emit("range-start", i2)),
                onRangeEnd: ie[13] || (ie[13] = (i2) => re.$emit("range-end", i2))
              }), createSlots({ _: 2 }, [
                renderList(unref(f), (i2, E2) => ({
                  name: i2,
                  fn: withCtx((ne) => [
                    renderSlot(re.$slots, i2, normalizeProps(guardReactiveProps({ ...ne })))
                  ])
                }))
              ]), 1040, ["class", "style", "open-on-top", "arr-map-values", "internal-model-value", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
});
var Ia = (() => {
  const e2 = ao;
  return e2.install = (n) => {
    n.component("Vue3DatePicker", e2);
  }, e2;
})();
var ro = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Ia
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ro).forEach(([e2, n]) => {
  e2 !== "default" && (Ia[e2] = n);
});
export {
  Ia as default
};
//# sourceMappingURL=@vuepic_vue-datepicker.js.map
