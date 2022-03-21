(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _daily_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-menu */ "./assets/js/theme/daily-menu.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Category.prototype;

  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus
    });
  };

  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;

    if (!$("[data-shop-by-price]").length) return;

    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }

    $("a.navList-action").on("click", function () {
      return _this2.setLiveRegionAttributes($("span.price-filter-message"), "status", "assertive");
    });
  };

  _proto.onReady = function onReady() {
    var _this3 = this;

    Object(_daily_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on("click", function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), "status", "polite");
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);

    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on("sortBy-submitted", this.onSortBySubmit);
    }

    $("a.reset-btn").on("click", function () {
      return _this3.setLiveRegionsAttributes($("span.reset-message"), "status", "polite");
    });
    this.ariaNotifyNoProducts();
  };

  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $("[data-no-products-notification]");

    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $("#product-listing-container");
    var $facetedSearchContainer = $("#faceted-search-container");
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: "category/product-listing",
        sidebar: "category/sidebar"
      },
      showMore: "category/show-more"
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $("body").triggerHandler("compareReset");
      $("html, body").animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/daily-menu.js":
/*!***************************************!*\
  !*** ./assets/js/theme/daily-menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DailyMenu; });
function DailyMenu() {
  //   const d = new Date();
  //   d.toLocaleString("en-US", { timeZone: "America/Chicago" });
  var d = new Date(new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago"
  })); // timezone ex: Asia/Jerusalem

  console.log(d);
  var day = d.getDay();
  var dayContainers = document.querySelectorAll(".daily-menu-item");
  var navLinks = document.querySelectorAll(".daily-menu-navigation a");

  if (day == 0) {
    day = 1;
  }

  if (document.querySelector(".daily-menu-item.day-" + day)) {
    classToggle(day);
    navToggle(day);
    navLinks.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        parentToggle(this.getAttribute("data-click"));
      });
    });
  }

  function parentToggle(day) {
    classToggle(day);
    navToggle(day);
  }

  function navToggle(dayToShow) {
    navLinks.forEach(function (el) {
      if (el.getAttribute("data-click") == dayToShow) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  function classToggle(dayToShow) {
    dayContainers.forEach(function (el) {
      if (el.classList.contains("day-" + dayToShow)) {
        el.classList.add("open");
        el.classList.remove("closed");
      } else {
        el.classList.remove("open");
        el.classList.add("closed");
      }
    });
  }

  function toggleDay(e) {
    e.preventDefault();

    if (this.getAttribute("data-click")) {
      var dayClicked = this.getAttribute("data-click");
      classToggle(dayClicked);
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2RhaWx5LW1lbnUuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiRGFpbHlNZW51IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJDYXRhbG9nUGFnZSIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsImQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZSIsImNvbnNvbGUiLCJsb2ciLCJkYXkiLCJnZXREYXkiLCJkYXlDb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NUb2dnbGUiLCJuYXZUb2dnbGUiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRUb2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJkYXlUb1Nob3ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlu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QUksS0FBS0UsWUFBTCxDQUFrQixZQUFsQixDQUFKLEVBQXFDO0FBQ25DLFVBQUlPLFVBQVUsR0FBRyxLQUFLUCxZQUFMLENBQWtCLFlBQWxCLENBQWpCO0FBQ0FQLGlCQUFXLENBQUNjLFVBQUQsQ0FBWDtBQUNEO0FBQ0Y7QUFDRixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSBcIkBiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzXCI7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSBcIi4vY2F0YWxvZ1wiO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tIFwiLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0c1wiO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSBcIi4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tIFwiLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlsc1wiO1xuaW1wb3J0IERhaWx5TWVudSBmcm9tIFwiLi9kYWlseS1tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG4gICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgfVxuXG4gIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmVTdGF0dXMsXG4gICAgfSk7XG4gIH1cblxuICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgIGlmICghJChcIltkYXRhLXNob3AtYnktcHJpY2VdXCIpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKCQoXCIubmF2TGlzdC1hY3Rpb25cIikuaGFzQ2xhc3MoXCJpcy1hY3RpdmVcIikpIHtcbiAgICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZVwiKS5mb2N1cygpO1xuICAgIH1cblxuICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoXCJzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlXCIpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcImFzc2VydGl2ZVwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgRGFpbHlNZW51KCk7XG4gICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgJCgnW2RhdGEtYnV0dG9uLXR5cGU9XCJhZGQtY2FydFwiXScpLm9uKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKFxuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcInBvbGl0ZVwiXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuXG4gICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICBpZiAoJChcIiNmYWNldGVkU2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgIGhvb2tzLm9uKFwic29ydEJ5LXN1Ym1pdHRlZFwiLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICAkKFwiYS5yZXNldC1idG5cIikub24oXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJChcInNwYW4ucmVzZXQtbWVzc2FnZVwiKSwgXCJzdGF0dXNcIiwgXCJwb2xpdGVcIilcbiAgICApO1xuXG4gICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuICB9XG5cbiAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJChcIltkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl1cIik7XG4gICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoXCIjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBwcm9kdWN0TGlzdGluZzogXCJjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmdcIixcbiAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICB9LFxuICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgfTtcblxuICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKFxuICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAoY29udGVudCkgPT4ge1xuICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnRyaWdnZXJIYW5kbGVyKFwiY29tcGFyZVJlc2V0XCIpO1xuXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYWlseU1lbnUoKSB7XG4gIC8vICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIC8vICAgZC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmU6IFwiQW1lcmljYS9DaGljYWdvXCIgfSk7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogXCJBbWVyaWNhL0NoaWNhZ29cIiB9KVxuICApOyAvLyB0aW1lem9uZSBleDogQXNpYS9KZXJ1c2FsZW1cblxuICBjb25zb2xlLmxvZyhkKTtcbiAgbGV0IGRheSA9IGQuZ2V0RGF5KCk7XG4gIGNvbnN0IGRheUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5LW1lbnUtaXRlbVwiKTtcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5LW1lbnUtbmF2aWdhdGlvbiBhXCIpO1xuICBpZiAoZGF5ID09IDApIHtcbiAgICBkYXkgPSAxO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGFpbHktbWVudS1pdGVtLmRheS0ke2RheX1gKSkge1xuICAgIGNsYXNzVG9nZ2xlKGRheSk7XG4gICAgbmF2VG9nZ2xlKGRheSk7XG5cbiAgICBuYXZMaW5rcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGFyZW50VG9nZ2xlKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja1wiKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmVudFRvZ2dsZShkYXkpIHtcbiAgICBjbGFzc1RvZ2dsZShkYXkpO1xuICAgIG5hdlRvZ2dsZShkYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmF2VG9nZ2xlKGRheVRvU2hvdykge1xuICAgIG5hdkxpbmtzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja1wiKSA9PSBkYXlUb1Nob3cpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGFzc1RvZ2dsZShkYXlUb1Nob3cpIHtcbiAgICBkYXlDb250YWluZXJzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGBkYXktJHtkYXlUb1Nob3d9YCkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZURheShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY2xpY2tcIikpIHtcbiAgICAgIHZhciBkYXlDbGlja2VkID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrXCIpO1xuICAgICAgY2xhc3NUb2dnbGUoZGF5Q2xpY2tlZCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9