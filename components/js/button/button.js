/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-9892bc8
 */
!function(){"use strict";function t(t,n,e){function a(t){return angular.isDefined(t.href)||angular.isDefined(t.ngHref)}function r(t,n){return a(n)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function i(r,i,u){var c=i[0];n(i),t.attachButtonBehavior(i);var o=c.textContent.trim();o||e.expect(i,"aria-label"),a(u)&&r.$watch(u.ngDisabled,function(t){i.attr("tabindex",t?-1:0)})}return{restrict:"E",replace:!0,transclude:!0,template:r,link:i}}angular.module("material.components.button",["material.core"]).directive("mdButton",t),t.$inject=["$mdInkRipple","$mdTheming","$mdAria"]}();