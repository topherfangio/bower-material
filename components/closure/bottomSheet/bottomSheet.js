/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-9892bc8
 */
goog.provide('ng.material.components.bottomSheet');
goog.require('ng.material.components.backdrop');
goog.require('ng.material.core');
!function(){"use strict";function t(){return{restrict:"E"}}function e(t){function e(t,e,n,r,o,a,c){function u(e,r,u){m=o('<md-backdrop class="md-opaque ng-enter">')(e),m.on("click touchstart",function(){n(c.cancel)}),a.inherit(m,u.parent),t.enter(m,u.parent,null);var i=new l(r);return u.bottomSheet=i,u.targetEvent&&angular.element(u.targetEvent.target).blur(),a.inherit(i.element,u.parent),t.enter(i.element,u.parent).then(function(){var t=angular.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));t.eq(0).focus()})}function i(e,n,r){var o=r.bottomSheet;return t.leave(m),t.leave(o.element).then(function(){o.cleanup(),r.targetEvent&&angular.element(r.targetEvent.target).focus()})}function l(t){function r(n){n.preventDefault(),S=n.target,m=u(n),f=t.css(e.CSS.TRANSITION_DURATION),t.css(e.CSS.TRANSITION_DURATION,"0s")}function o(r){t.css(e.CSS.TRANSITION_DURATION,f);var o=u(r);Math.abs(o-m)<5&&r.target==S?angular.element(r.target).triggerHandler("click"):h>d?n(c.cancel):i(void 0)}function a(t){var e=u(t),n=e-m;h=e-s,s=e,n=l(n),i(n+v)}function u(t){var e=t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0];return e.clientY}function i(n){null===n||void 0===n?t.css(e.CSS.TRANSFORM,""):t.css(e.CSS.TRANSFORM,"translate3d(0, "+n+"px, 0)")}function l(t){if(0>t&&-v+g>t){t=-t;var e=v-g;t=Math.max(-v,-Math.min(v-5,e+g*(t-e)/v)-t/50)}return t}var m,s,h,f,S,v=80,g=20,d=10;return t=t.eq(0),t.on("touchstart",r).on("touchmove",a).on("touchend",o),{element:t,cleanup:function(){t.off("touchstart",r).off("touchmove",a).off("touchend",o)}}}var m;return{themable:!0,targetEvent:null,onShow:u,onRemove:i}}return e.$inject=["$animate","$mdConstant","$timeout","$$rAF","$compile","$mdTheming","$mdBottomSheet"],t("$mdBottomSheet").setDefaults({options:e})}angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",t).provider("$mdBottomSheet",e),e.$inject=["$$interimElementProvider"]}();