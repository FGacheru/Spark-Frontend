(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksparkweb"] = self["webpackChunksparkweb"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutes": function AppRoutes() {
          return (
            /* binding */
            _AppRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/errors/error-not-found/error-not-found.component */
      32911);
      /* harmony import */


      var _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/authentication/authentication.component */
      30465);
      /* harmony import */


      var _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/modules.component */
      46766);
      /* harmony import */


      var _core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/auth-guards/auth.guards */
      29394);

      var _AppRoutes = [{
        path: '',
        component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__.ModulesComponent,
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_modules_modules_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./modules/modules.module */
            27354)).then(function (m) {
              return m.ModulesModule;
            });
          },
          canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
        }]
      }, {
        path: '',
        component: _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent,
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_core_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./core/authentication/authentication.module */
            42428)).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: '404',
        component: _core_errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_0__.ErrorNotFoundComponent
      }, {
        path: '**',
        redirectTo: '/'
      }];
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      35602);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services */
      21866);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(_cookieService, _errorsService, _storageService, _authService) {
          _classCallCheck(this, _AppComponent);

          this._cookieService = _cookieService;
          this._errorsService = _errorsService;
          this._storageService = _storageService;
          this._authService = _authService;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.title = 'sparkweb';
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var itemsStored = ['token', 'userDetails'];
            window.addEventListener('storage', function () {
              Object.values(localStorage).forEach(function (item) {
                var storageItem = Object.keys(JSON.parse(item));

                for (var i = 0; i < storageItem.length; i++) {
                  if (itemsStored.indexOf(storageItem[i]) > -1) {
                    continue;
                  } else {
                    localStorage.clear();
                    window.location.href = "".concat(window.location.protocol, "//").concat(window.location.host, "/signin");
                    break;
                  }
                }
              });
            });

            if (this._cookieService.get('rememberMe') || localStorage.getItem('rememberMe')) {
              this.refreshToken();
            }
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}') || null;

            if (tokenItems !== undefined && tokenItems !== null || tokenItems !== {}) {
              if (Date.now() > tokenItems.refreshTokenTime) {
                var params = {
                  token: tokenItems.token,
                  refresh_token: tokenItems.tokenRefresh
                };

                this._authService.refreshToken(params);
              }
            }
          }
        }, {
          key: "initializeErrors",
          value: function initializeErrors() {
            this._errorsService.getErrors().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.ngUnsubscribe)).subscribe(function (errors) {
              console.log('STATUS ERRORS: Show through the modal service', errors); //TODO -> Create the modal Service
              // const modalRef = this._modalService.open(PromptComponent);
              // modalRef.componentInstance.message = errors.toString();
              // modalRef.componentInstance.button = 'Confirm';
              // modalRef.componentInstance.title = 'STATUS ERROR';
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerSubscription.unsubscribe();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/authentication/authentication.component */
      30465);
      /* harmony import */


      var _modules_modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/modules.component */
      46766);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /** Angular imports */

      /** Main App Routing */

      /** Reusable modules */

      /** Main App Components */


      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [// {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: Interceptor,
        //   multi: true,
        // },
        _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_6__.ToastNotificationsService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, {
          useHash: true
        }), _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__.AuthenticationComponent, _modules_modules_component__WEBPACK_IMPORTED_MODULE_5__.ModulesComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    29394: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/authentication/auth.service */
      53271);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(auth, _route) {
          _classCallCheck(this, _AuthGuard);

          this.auth = auth;
          this._route = _route;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.auth.isLoggedIn()) {
              if (this.auth.hasWebDashboardAccess()) {
                return true;
              } else {
                this._route.navigate(['/signin'], {
                  queryParams: {
                    returnUrl: state.url
                  }
                });

                return false;
              }
            }

            this._route.navigate(['/signin'], {
              queryParams: {
                returnUrl: state.url
              }
            });

            return false;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    30465: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationComponent": function AuthenticationComponent() {
          return (
            /* binding */
            _AuthenticationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../structure/footer/footer.component */
      4082);

      var _AuthenticationComponent = /*#__PURE__*/function () {
        function _AuthenticationComponent() {
          _classCallCheck(this, _AuthenticationComponent);

          this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__.VERSION;
        }

        _createClass(_AuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthenticationComponent;
      }();

      _AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) {
        return new (t || _AuthenticationComponent)();
      };

      _AuthenticationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AuthenticationComponent,
        selectors: [["app-authentication"]],
        decls: 4,
        vars: 0,
        consts: [[1, "bg-container", "container-view-height", "d-flex", "justify-content-center", "align-items-center"]],
        template: function AuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
        styles: [".top-padding[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUFBSiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtcGFkZGluZyB7XG4gICAgLy8gdG9kbzogbWFrZSBtb3JlIHJlc3BvbnNpdmVcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    57634: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LockScreenComponent": function LockScreenComponent() {
          return (
            /* binding */
            _LockScreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LockScreenComponent = /*#__PURE__*/function () {
        function _LockScreenComponent() {
          _classCallCheck(this, _LockScreenComponent);
        }

        _createClass(_LockScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LockScreenComponent;
      }();

      _LockScreenComponent.ɵfac = function LockScreenComponent_Factory(t) {
        return new (t || _LockScreenComponent)();
      };

      _LockScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LockScreenComponent,
        selectors: [["app-lock-screen"]],
        decls: 2,
        vars: 0,
        template: function LockScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock-screen works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNjcmVlbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    40294: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/interceptors/interceptor */
      33787);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./structure/footer/footer.component */
      4082);
      /* harmony import */


      var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./structure/navbar/navbar.component */
      95948);
      /* harmony import */


      var _errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./errors/error-not-found/error-not-found.component */
      32911);
      /* harmony import */


      var _authentication_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authentication/lock-screen/lock-screen.component */
      57634);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /** App Interceptor */


      var _CoreModule = function _CoreModule() {
        _classCallCheck(this, _CoreModule);
      };

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)();
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
          useClass: _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_0__.Interceptor,
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_CoreModule, {
          declarations: [_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_4__.ErrorNotFoundComponent, _authentication_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__.LockScreenComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent]
        });
      })();
      /***/

    },

    /***/
    32911: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorNotFoundComponent": function ErrorNotFoundComponent() {
          return (
            /* binding */
            _ErrorNotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ErrorNotFoundComponent = /*#__PURE__*/function () {
        function _ErrorNotFoundComponent() {
          _classCallCheck(this, _ErrorNotFoundComponent);
        }

        _createClass(_ErrorNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ErrorNotFoundComponent;
      }();

      _ErrorNotFoundComponent.ɵfac = function ErrorNotFoundComponent_Factory(t) {
        return new (t || _ErrorNotFoundComponent)();
      };

      _ErrorNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ErrorNotFoundComponent,
        selectors: [["app-error-not-found"]],
        decls: 2,
        vars: 0,
        template: function ErrorNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    33787: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Interceptor": function Interceptor() {
          return (
            /* binding */
            _Interceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      21866);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint;

      var _Interceptor = /*#__PURE__*/function () {
        function _Interceptor(_authService, _route, _errorService, _storageService) {
          _classCallCheck(this, _Interceptor);

          this._authService = _authService;
          this._route = _route;
          this._errorService = _errorService;
          this._storageService = _storageService;
        }

        _createClass(_Interceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}') || null;
            var token = tokenItems !== null || tokenItems !== {} ? tokenItems.token : null;
            console.log("Intercepiting...", token);

            if (token !== null && typeof token !== 'object') {
              var contentType = 'application/json';

              if (request.body instanceof FormData) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(token)
                  }
                });
              } else {
                request = request.clone({
                  setHeaders: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: "Bearer ".concat(token)
                  }
                });
              }
            } else {
              request = request.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                }
              });
            }

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (error) {
              var errorMessage = '';
              var errorGroup = [];

              if (error.error) {
                if (error.error.detail) {
                  errorMessage = error.error.detail;
                } else if (error.error.name) {
                  errorMessage = error.error.name[0];
                } else if (error.error.error_description) {
                  errorMessage = error.error.error_description;
                } else if (error.error.phone) {
                  errorMessage = error.error.phone[0];
                } else {
                  for (var x in error.error) {
                    errorGroup.push(error.error[x]);
                  }

                  errorMessage = errorGroup.toString();
                }
              } // else {


              var errorStatus;
              var errorStatusText;

              switch (error.status) {
                case 400:
                  return next.handle(request);

                case 401:
                  errorStatus = error.status;
                  errorStatusText = 'Oops! You are unauthorized to view this page';
                  console.log('REFRESH TOKEN ERROR:', error);

                  if (error.error.detail === 'Authentication credentials were not provided.') {
                    var params = {
                      token: tokenItems.token,
                      refresh_token: tokenItems.tokenRefresh
                    };

                    _this._authService.refreshToken(params).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(function () {
                      var token = JSON.parse(_this._storageService.getItem('token') || '{}').token;

                      if (token !== null || token !== {}) {
                        request = request.clone({
                          setHeaders: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: "Bearer ".concat(token)
                          }
                        });
                        return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
                          console.error('Refresh Token Issue', err);
                          return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
                        }));
                      }
                    });
                  } else {
                    //logout from account
                    _this._route.navigate(['/signin']);
                  }

                  break;

                case 403:
                  errorStatus = error.status;
                  errorStatusText = 'Oops! You are unauthorized to view this page';

                  _this._errorService.addErrors([errorStatusText]);

                  break;
                // case 403:
                //     errorStatus = error.status;
                //     errorStatusText = 'Oops! Media format of the requested data is unsupported';
                //     break;

                case 500:
                  if (/DoesNotExist|\/auth\/token/.test(error.error)) {
                    _this._route.navigate(['/signin']);
                  }

                  errorStatus = error.status;
                  errorStatusText = 'Oops! You caught us doing some house keeping. Please come back in a few. Sorry for any inconvenience';

                  _this._errorService.addErrors([errorStatusText]);

                  break;

                default:
                  errorStatus = 400;
                  errorStatusText = "Oops! Seems this page was not found";

                  _this._errorService.addErrors([errorStatusText]);

                  break;
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
            }));
          }
        }]);

        return _Interceptor;
      }();

      _Interceptor.ɵfac = function Interceptor_Factory(t) {
        return new (t || _Interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.StorageService));
      };

      _Interceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _Interceptor,
        factory: _Interceptor.ɵfac
      });
      /***/
    },

    /***/
    4082: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.date = new Date().getFullYear();
          }
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: [".footer[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Museo-Sans\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FBQUo7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0FBRFIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgLy8gdG9kbzogY2hlY2sgb24gcGFkZGluZyAqIFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXG4gICAgXG4gICAgLy8gdG9kbzogcGljayBmb250cyBmcm9tIHZhcmlhYmxlcy5zY3NzXG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlby1TYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    95948: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services */
      21866);

      var _c0 = function _c0() {
        return ["/home"];
      };

      var _c1 = function _c1() {
        return ["/customers"];
      };

      var _c2 = function _c2() {
        return ["/technicalsupport"];
      };

      var _c3 = function _c3() {
        return ["/customerreferral"];
      };

      var _c4 = function _c4() {
        return ["/accounts"];
      };

      var _c5 = function _c5() {
        return ["/statement-page"];
      };

      var _c6 = function _c6() {
        return ["/bonuses"];
      };

      var _c7 = function _c7() {
        return ["/repair-center"];
      };

      var _c8 = function _c8() {
        return ["/dispatch-stock"];
      };

      var _c9 = function _c9() {
        return ["/users"];
      };

      var _c10 = function _c10() {
        return ["/shop"];
      };

      var _c11 = function _c11() {
        return ["/bonus-scheme"];
      };

      var _c12 = function _c12() {
        return ["/administration/inventory/item-type-config"];
      };

      var _c13 = function _c13() {
        return ["/administration/inventory/item-config"];
      };

      var _c14 = function _c14() {
        return ["/administration/inventory/boxs"];
      };

      var _c15 = function _c15() {
        return ["/administration/inventory/price-group"];
      };

      var _c16 = function _c16() {
        return ["/administration/inventory/pay-go-providers"];
      };

      var _c17 = function _c17() {
        return ["/administration/inventory/product-type"];
      };

      var _c18 = function _c18() {
        return ["/administration/inventory/suppliers"];
      };

      var _c19 = function _c19() {
        return ["/administration/repair/spare-part-types"];
      };

      var _c20 = function _c20() {
        return ["/inventory/list"];
      };

      var _c21 = function _c21() {
        return ["/inventory/check-in"];
      };

      var _c22 = function _c22() {
        return ["/inventory/box-change-log"];
      };

      var _c23 = function _c23() {
        return ["/inventory/repair/collect-at-store"];
      };

      var _c24 = function _c24() {
        return ["/inventory/repair/part-usage-report"];
      };

      var _c25 = function _c25() {
        return ["/inventory/repair/parts-received"];
      };

      var _c26 = function _c26() {
        return ["/inventory/repair/parts-adjustment"];
      };

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent(_route, _authService) {
          _classCallCheck(this, _NavbarComponent);

          this._route = _route;
          this._authService = _authService;
          this.username = 'User';
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserDetails();
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            this.username = this._authService.getUserProfile().username;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this._authService.signOut();
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 127,
        vars: 57,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], [1, "navbar-brand", "bg-light", "ml-4", "p-2"], [3, "routerLink"], ["src", "assets/img/logo/spark-logo-trans-bg.png", 1, "navbar-logo", 2, "height", "30px", "width", "100px"], [1, "container-fluid", "header-background", 2, "height", "60px"], ["id", "navbarTogglerMainMenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "pr-3", "active"], [1, "nav-link", "nav-title", 3, "routerLink"], [1, "sr-only"], [1, "nav-item", "pr-3", "dropdown"], ["href", "/administration", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-title", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["role", "button", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-sub-menu"], ["href", "#", 1, "dropdown-item", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "/inventory", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-title", "dropdown-toggle"], [1, "dropdown-divider"], [1, "form-inline", "my-2", "my-lg-0"], [1, "nav-item", "dropdown", "form-inline", "my-2", "my-lg-0", "user-profile-wrapper"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["href", "#", 1, "dropdown-item", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "(current)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Technical Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Customer Referral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Field Force ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Accounts/Payments ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Statement Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Bonuses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Operations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Repair Center Management ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Stockroom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Administration ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Shop ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Bonus Scheme ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Inventory Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Item Type Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Item Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Box Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Price Group Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Pay Go Provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Product Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Suppliers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Repair Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Spare Part Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Inventory ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Inventory List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Check In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Box Changelog");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Repair Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Collect For Repair");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Part Usage Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "View Parts Received");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Part Adjustment View");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_125_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c11));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c12));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c13));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c14));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c15));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c16));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c17));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c18));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c19));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c20));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c21));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c22));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c23));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](54, _c24));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c25));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c26));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".header-background[_ngcontent-%COMP%] {\n  background-color: #245FB9;\n  color: white;\n}\n\n.nav-title[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 0.5rem;\n  position: relative !important;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  left: 100%;\n  top: 0;\n  left: 100%;\n  margin-top: -0.55rem;\n  margin-left: -0.8px;\n  border-radius: 0 6px 6px 6px;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  clear: both;\n}\n\n.dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  min-height: 24px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUh1QjtFQUl2QixZQUFBO0FBRkY7O0FBS0E7RUFDSSx1QkFBQTtBQUZKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFKSjs7QUFPVTtFQUNFLGNBQUE7QUFMWjs7QUFTSTtFQUVJLE1BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFSUjs7QUFVUTtFQUNJLHlCQUFBO0FBUlo7O0FBV1E7RUFDSSxtQkF4Q0s7RUF5Q0wsV0FBQTtBQVRaOztBQVVZO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBUmhCOztBQWVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVpKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtZW51LWZvbnQtc2l6ZTogMC44NzVyZW07XG4kaGVhZGVyLWJhY2dyb3VuZC1jb2xvcjogIzI0NUZCOTtcblxuLmhlYWRlci1iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJhY2dyb3VuZC1jb2xvcjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5uYXYtdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbiRtZW51LWJhY2tncm91bmQtc2hhZG93LWNvbG9yOiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYxKTtcblxuLmRyb3Bkb3duLXN1Yi1tZW51IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIC8vIHdpZHRoOjIwcmVtO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuNTVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMC44cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCA2cHg7XG5cbiAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogICRtZW51LWZvbnQtc2l6ZTtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4ubmF2LWxpbmsge1xuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    46766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModulesComponent": function ModulesComponent() {
          return (
            /* binding */
            _ModulesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/structure/navbar/navbar.component */
      95948);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/structure/footer/footer.component */
      4082);
      /* harmony import */


      var _shared_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/toast-notifications/toast-notifications.component */
      83950);

      var _ModulesComponent = /*#__PURE__*/function () {
        function _ModulesComponent() {
          _classCallCheck(this, _ModulesComponent);
        }

        _createClass(_ModulesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModulesComponent;
      }();

      _ModulesComponent.ɵfac = function ModulesComponent_Factory(t) {
        return new (t || _ModulesComponent)();
      };

      _ModulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ModulesComponent,
        selectors: [["app-modules"]],
        decls: 6,
        vars: 0,
        consts: [[1, "container-fluid", "bg-container", "container-minus-header", "pt-4"]],
        template: function ModulesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-toast-notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_core_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _core_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _shared_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    53271: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      56816);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      21866);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-cookie-service */
      35602);

      var clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIClientID;
      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint;
      var endpointV1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIv1Endpoint;

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(_route, _userService, _storageService, _http, _cookieService) {
          _classCallCheck(this, _AuthService);

          this._route = _route;
          this._userService = _userService;
          this._storageService = _storageService;
          this._http = _http;
          this._cookieService = _cookieService;
        }

        _createClass(_AuthService, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            //check if the user is logged in using an api generated token
            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}');
            var token = tokenItems !== null ? tokenItems.token : null;

            if (token != null && token != undefined) {
              console.log("LOGGED !"); //to do if user not verified

              return true;
            }

            console.log("NOT LOGGED !");
            return false;
          }
        }, {
          key: "hasAdminAccess",
          value: function hasAdminAccess() {
            return this.getUserProfile().role == 'AD' ? true : false;
          }
        }, {
          key: "hasWebDashboardAccess",
          value: function hasWebDashboardAccess() {
            console.log("ROLE");
            console.log(this.getUserProfile().role);
            return (//this.getUserProfile().role == 'S' ||
              // TODO update roles checkup
              this.getUserProfile().role == '1' || this.getUserProfile().role == 'N' && this.getUserProfile().role !== null ? true : false
            );
          }
        }, {
          key: "isVerifiedUser",
          value: function isVerifiedUser() {
            return this.getUserProfile().verified == 'true' ? true : false;
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            // this._storageService.watchStorage().subscribe((data:string) => {
            //this.user = JSON.parse(localStorage.getItem('userDetails'));
            this.user = JSON.parse(this._storageService.getItem('userDetails') || '{}');

            if (this.user !== {} || this !== null) {
              return this.user;
            }

            return;
          } //TODO -> Remove if one needs not to signup
          // signUp(data: any) {
          //   return this._http.post<any>(endpointV1 + 'users/', data).pipe(
          //     map((res) => {
          //       const token = res.token.access_token;
          //       const tokenExpiry = res.token.expires_in;
          //       const tokenRefresh = res.token.refresh_token;
          //       let tokenItems = { token, tokenExpiry, tokenRefresh };
          //       localStorage.setItem('token', JSON.stringify(tokenItems));
          //       return res;
          //     })
          //   );
          // }
          //TODO -> Remove if there's no 2-factor-authentication with SMS
          // verifyOTP(data: any) {
          //   return this._http.post<any>(endpointV1 + 'users/verify-otp/', data);
          // }
          // requestOTP(data: any) {
          //   let body = {
          //     username: data,
          //   };
          //   return this._http.post<any>(endpointV1 + 'users/request-otp/', body);
          // }

        }, {
          key: "signIn",
          value: function signIn(data) {
            var _this2 = this;

            data.grant_type = 'password';
            data.client_id = clientId;
            var rememberMe = data.remember_me;

            if (rememberMe) {
              this._cookieService.set('rememberMe', rememberMe);

              this._storageService.setItem('rememberMe', rememberMe);
            }

            return this._http.post(endpoint + 'auth/token/', data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(function (res) {
              var token = res.access_token;
              var tokenExpiry = res.expires_in;
              var tokenRefresh = res.refresh_token;
              var tokenItems;
              tokenItems = {
                token: token,
                tokenExpiry: tokenExpiry,
                tokenRefresh: tokenRefresh
              };

              if (rememberMe) {
                var loggedInTime = Date.now();
                var refreshTokenTime = Math.max(loggedInTime + 3600000, 3600000); // const refreshTokenTime = loggedInTime + 2000;

                tokenItems = {
                  token: token,
                  tokenExpiry: tokenExpiry,
                  tokenRefresh: tokenRefresh,
                  refreshTokenTime: refreshTokenTime
                };
              }

              console.log("OMOMOMO 3"); // localStorage.setItem('token', JSON.stringify(tokenItems));

              _this2._storageService.setItem('token', JSON.stringify(tokenItems));

              console.log("OMOMOMO 4");
              return _this2._userService.userProfile();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(function () {
              console.log("OMOMOMO 5");
              return _this2._route.navigate(['/home']);
            }));
          }
        }, {
          key: "refreshToken",
          value: function refreshToken(data) {
            var _this3 = this;

            data.grant_type = 'refresh_token';
            data.client_id = clientId;
            return this._http.post("".concat(endpoint, "auth/token/"), data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              var token = res.access_token;
              var tokenExpiry = res.expires_in;
              var tokenRefresh = res.refresh_token;
              var tokenItems;
              tokenItems = {
                token: token,
                tokenExpiry: tokenExpiry,
                tokenRefresh: tokenRefresh
              };

              var rememberMe = _this3._cookieService.get('rememberMe') || // localStorage.getItem('rememberMe');
              _this3._storageService.getItem('rememberMe');

              if (rememberMe) {
                var refreshTokenInitialTime = Date.now();
                var refreshTokenTime = Math.max(refreshTokenInitialTime + 3600000, 3600000);
                tokenItems = {
                  token: token,
                  tokenExpiry: tokenExpiry,
                  tokenRefresh: tokenRefresh,
                  refreshTokenTime: refreshTokenTime
                };
              } //localStorage.setItem('token', JSON.stringify(tokenItems));


              _this3._storageService.setItem('token', JSON.stringify(tokenItems));
            }));
          }
        }, {
          key: "resetPassowrd",
          value: function resetPassowrd(data) {
            return this._http.post(endpointV1 + 'users/reset-password', data);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            return this._http.post(endpointV1 + 'users/forgot-password', data);
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this._http.put(endpointV1 + 'users/me/change-password', data);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            localStorage.clear();
            sessionStorage.clear();

            this._cookieService["delete"]('rememberMe');

            this._route.navigate(['/signin']);
          }
        }, {
          key: "toggleShowPassword",
          value: function toggleShowPassword(type) {
            type === 'password' ? type = 'text' : type = 'password';
            return type;
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77991: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorsService": function ErrorsService() {
          return (
            /* binding */
            _ErrorsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ErrorsService = function _ErrorsService() {
        var _this4 = this;

        _classCallCheck(this, _ErrorsService);

        this.errors = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();

        this.addErrors = function (errors) {
          return _this4.errors.next(errors);
        };

        this.getErrors = function () {
          return _this4.errors.asObservable();
        };
      };

      _ErrorsService.ɵfac = function ErrorsService_Factory(t) {
        return new (t || _ErrorsService)();
      };

      _ErrorsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ErrorsService,
        factory: _ErrorsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    25335: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormItemService": function FormItemService() {
          return (
            /* binding */
            _FormItemService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/tap */
      91549);
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../http/http-service.service */
      33990);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);

      var _FormItemService = /*#__PURE__*/function () {
        function _FormItemService(_http, _toastService) {
          _classCallCheck(this, _FormItemService);

          this._http = _http;
          this._toastService = _toastService;
          this.selectedTab = '';
          this.selectedTabChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_FormItemService, [{
          key: "postForm",
          value: function postForm(isNew, data) {
            var _this5 = this;

            var request;

            if (isNew) {
              request = this._http.post(data.url, data.formData).pipe((0, rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {
                _this5._toastService.showToast("Successfully added Record", "success");
              }));
            } else {
              request = this._http.patch(data.url, data.formData).pipe((0, rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__.tap)(function (data) {
                _this5._toastService.showToast("Successfully edited Record", "success");
              }));
            }

            return request;
          }
        }, {
          key: "formDropdownSelectedTab",
          value: function formDropdownSelectedTab(data) {
            console.log('THE SELECTED TAB IN SERVICE', data);
            this.selectedTabChange.next(data);
          }
        }, {
          key: "getDropdownValues",
          value: function getDropdownValues(url) {
            return this._http.get(url);
          }
        }]);

        return _FormItemService;
      }();

      _FormItemService.ɵfac = function FormItemService_Factory(t) {
        return new (t || _FormItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_http_service_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationsService));
      };

      _FormItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _FormItemService,
        factory: _FormItemService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    33990: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIClientID;
      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint;
      var endpointV1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIv1Endpoint;

      var _HttpService = /*#__PURE__*/function () {
        function _HttpService(_httpClient) {
          _classCallCheck(this, _HttpService);

          this._httpClient = _httpClient;
        }

        _createClass(_HttpService, [{
          key: "get",
          value: function get(url) {
            return this._httpClient.get("".concat(endpointV1).concat(url));
          }
        }, {
          key: "delete",
          value: function _delete(url) {
            return this._httpClient["delete"]("".concat(endpointV1).concat(url));
          }
        }, {
          key: "post",
          value: function post(url, formData) {
            return this._httpClient.post("".concat(endpointV1).concat(url), formData);
          }
        }, {
          key: "patch",
          value: function patch(url, formData) {
            return this._httpClient.patch("".concat(endpointV1).concat(url), formData);
          }
        }]);

        return _HttpService;
      }();

      _HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || _HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _HttpService,
        factory: _HttpService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21866: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorsService": function ErrorsService() {
          return (
            /* reexport safe */
            _errors_errors_service__WEBPACK_IMPORTED_MODULE_0__.ErrorsService
          );
        },

        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* reexport safe */
            _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
          );
        },

        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* reexport safe */
            _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
          );
        },

        /* harmony export */
        "UserService": function UserService() {
          return (
            /* reexport safe */
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
          );
        },

        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* reexport safe */
            _http_http_service_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _errors_errors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./errors/errors.service */
      77991);
      /* harmony import */


      var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication/auth.service */
      53271);
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage/storage.service */
      86578);
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user/user.service */
      9709);
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./http/http-service.service */
      33990);
      /***/

    },

    /***/
    19493: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalService": function ModalService() {
          return (
            /* binding */
            _ModalService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ModalService = /*#__PURE__*/function () {
        function _ModalService() {
          _classCallCheck(this, _ModalService);

          this.modals = [];
        }

        _createClass(_ModalService, [{
          key: "closeAll",
          value: function closeAll() {
            this.modals.forEach(function (modal) {
              return modal.close();
            });
          }
        }, {
          key: "add",
          value: function add(modal) {
            // add modal to array of active modals
            this.modals.push(modal);
          }
        }, {
          key: "remove",
          value: function remove(id) {
            // remove modal from array of active modals
            this.modals = this.modals.filter(function (x) {
              return x.id !== id;
            });
          }
        }, {
          key: "open",
          value: function open(id) {
            // open modal specified by id
            var modal = this.modals.find(function (x) {
              return x.id === id;
            });
            modal.open();
          }
        }, {
          key: "close",
          value: function close(id) {
            // close modal specified by id
            var modal = this.modals.find(function (x) {
              return x.id === id;
            });
            modal.close();
          }
        }]);

        return _ModalService;
      }();

      _ModalService.ɵfac = function ModalService_Factory(t) {
        return new (t || _ModalService)();
      };

      _ModalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ModalService,
        factory: _ModalService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    86578: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* binding */
            _StorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _StorageService = /*#__PURE__*/function () {
        function _StorageService() {
          _classCallCheck(this, _StorageService);

          this.storageSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_StorageService, [{
          key: "watchStorage",
          value: function watchStorage() {
            return this.storageSub.asObservable();
          }
        }, {
          key: "setItem",
          value: function setItem(key, data) {
            console.log(key);
            console.log(data);
            localStorage.setItem(key, data);
            this.storageSub.next(key);
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return localStorage.getItem(key);
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            localStorage.removeItem(key);
            this.storageSub.next(key);
          }
        }]);

        return _StorageService;
      }();

      _StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || _StorageService)();
      };

      _StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _StorageService,
        factory: _StorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9709: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../http/http-service.service */
      33990);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      21866);

      var _UserService = /*#__PURE__*/function () {
        function _UserService(_http, _storageService) {
          _classCallCheck(this, _UserService);

          this._http = _http;
          this._storageService = _storageService;
        }

        _createClass(_UserService, [{
          key: "userProfile",
          value: function userProfile() {
            var _this6 = this;

            return this._http.get('users/me').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              console.log('THE USER PROFILE', res);

              _this6._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }, {
          key: "editUserProfile",
          value: function editUserProfile(data) {
            var _this7 = this;

            return this._http.patch('users/me', data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              _this7._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }, {
          key: "uploadUserImage",
          value: function uploadUserImage(data) {
            var _this8 = this;

            // const options = {
            //   params: new HttpParams(),
            //   reportProgress: true,
            // }
            return this._http.patch('users/me/profile', data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              // localStorage.setItem('userDetails', JSON.stringify(res));
              _this8._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }]);

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_http_service_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.StorageService));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    10419: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function BreadcrumbComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.label, " ");
        }
      }

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent(_route, _activatedRoute) {
          _classCallCheck(this, _BreadcrumbComponent);

          this._route = _route;
          this._activatedRoute = _activatedRoute;
          this.breadcrumbs = this.buildBreadCrumb(this._activatedRoute.root);
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.breadcrumbsObserver = this._route.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)()).subscribe(function () {
              _this9.breadcrumbs = _this9.buildBreadCrumb(_this9._activatedRoute.root);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.breadcrumbsObserver.unsubscribe();
          }
          /**
           * Recursively build breadcrumb according to the activated route.
           * @param route
           * @param url
           * @param breadcrumbs
           */

        }, {
          key: "buildBreadCrumb",
          value: function buildBreadCrumb(route) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            //If no routeConfig available we're on root path
            var label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
            var path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : ''; //if the route is dynamic route such as ':id' or ':slug' remove it

            var lastRoutePath = path === null || path === void 0 ? void 0 : path.split('/').pop();
            var isDynamicRoute = lastRoutePath === null || lastRoutePath === void 0 ? void 0 : lastRoutePath.startsWith(':');

            if (isDynamicRoute && !!route.snapshot) {
              var paramName = lastRoutePath === null || lastRoutePath === void 0 ? void 0 : lastRoutePath.split(':')[1];
              path = path === null || path === void 0 ? void 0 : path.replace(lastRoutePath, route.snapshot.params[paramName]);
              label = route.snapshot.params[paramName];
            } //in the routeConfig the complete path is not available so we rebuild it each time


            var nextUrl = path ? "".concat(url, "/").concat(path) : url;
            var breadcrumb = {
              label: label,
              url: nextUrl
            }; //only add route with non-empty label

            var newBreadcrumbs = breadcrumb.label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

            if (route.firstChild) {
              // if we are not on our current path yet there will be more children to look after to build our breadcrumb
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
            }

            return newBreadcrumbs;
          }
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 2,
        vars: 1,
        consts: [[1, "breadcrumb", "p-0"], ["class", "mt-0 pt-0 mb-0 pb-0", 4, "ngFor", "ngForOf"], [1, "mt-0", "pt-0", "mb-0", "pb-0"], ["routerLinkActive", "router-link-active", 3, "routerLink"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 3, 2, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["@charset \"UTF-8\";\n\n\n\n\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background: none;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  font-weight: bold;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 0.75rem 0;\n  margin-left: 50px;\n}\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8B8888;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 14px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: dimgrey;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  margin: 0.5rem;\n  padding-right: 2rem;\n  text-transform: capitalize;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\u0387\";\n  position: absolute;\n  color: #535252;\n  width: 0.5rem;\n  height: 1rem;\n  left: 100%;\n  transform: translateX(-100%);\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 1rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  color: #535252;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 2rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9zdHlsZXMvX3ZhcnMuc2NzcyIsIi4uLy4uL3N0eWxlcy9taXhpbnMvX3R5cG9ncmFwaHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEJBQUE7QUFDQSw4QkFBQTtBQUNBLDhCQUFBO0FBMEJBLDJCQUFBO0FBRUEseUJBQUE7QUQzQkE7RUFHSSxnQkFBQTtFRUxBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRnJJSixpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBRStIWTtFQUNJLGlCQUFBO0FGN0hoQjtBQU5JOztFQUVJLGNBWmdCO0VBYWhCLG9EQUFBO0VBQ0EsZUFBQTtBQVFSO0FBTlE7O0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBU1o7QUFMSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQU9SO0FBTFE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2RFO0VEZUYsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFPWjtBQUpRO0VBQ0ksa0JBQUE7QUFNWjtBQUhRO0VBQ0ksY0MxQkU7QUQrQmQ7QUFGUTtFQUNJLGtCQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7QUFLaEIiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL3R5cG9ncmFwaHlcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyc1wiO1xuXG4uYnJlYWRjcnVtYiB7XG4gICAgJGNvbG9yX2JyZWFkY3J1bWJzOiAjOEI4ODg4O1xuICAgICRjb2xvcl9icmVhZGNydW1iX2NoZXZyb25fcmlnaHQ6ICRjb2xvcl90aXRsZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogLjc1cmVtIDA7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cbiAgICBhLFxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yX2JyZWFkY3J1bWJzO1xuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBkaW1ncmV5O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcXDAzODdcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfYnJlYWRjcnVtYl9jaGV2cm9uX3JpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IC41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl90aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogY29sb3JzICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kY29sb3JfYmFja2dyb3VuZDogI2ZmZmZmZjtcbiRjb2xvci1iYWNrZ3JvdW5kLWNhcmQ6ICNmZmZmZmY7XG4kY29sb3JfYmFja2dyb3VuZC1pbnB1dHM6ICNmZmZmZmY7XG4kY29sb3JfdG9wYmFyOiAjZmZmZmZmO1xuJGNvbG9yX2J1dHRvbnM6ICM0ZDRkNGQ7XG4kY29sb3JfcHJpbWFyeTogIzAzNkZCNjtcbiRjb2xvcl9zZWNvbmRhcnk6ICNlNTdjMmM7XG4kY29sb3JfdGVydGlhcnk6ICMxMjI2M2Y7XG4kY29sb3Jfd2FybmluZzogI2U2Mzc1NztcbiRjb2xvcl9zdWNjZXNzOiAjMDA3NzAwO1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwO1xuJGNvbG9yX2xpZ2h0Z3JleTogcmdiYSgkY29sb3Jfd2hpdGUsIDAuNSk7XG4kY29sb3JfbGlnaHRlcmdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjI1KTtcbiRjb2xvcl9mb3Jtc19ib3JkZXI6ICM3MDcwNzA7XG4kY29sb3JfZm9ybV9wbGFjZWhvbGRlcjogI2IxYzJkOTtcbiRjb2xvcl9saW5rc19idXR0b25zOiAjMDM2ZmI2O1xuJGNvbG9yX3N1YnN1YnRpdGxlOiAjN2U3ZTdlO1xuJGNvbG9yX3RpdGxlOiAjNTM1MjUyO1xuJGNvbG9yX3N1YnRpdGxlOiAjQjJCMUIxO1xuJGNvbG9yX25hdmJhcl9iYWNrZ3JvdW5kOiAkY29sb3JfYmFja2dyb3VuZDtcbiRjb2xvcl9uYXZiYXJfYm9yZGVyOiAjYTlhOGE4O1xuXG4kY29sb3JfdGl0bGVfZGVmYXVsdDogIzUzNTI1Mjtcbi8qIEFkZCByZXVzYWJsZSBhbmltYXRpb25zKi9cblxuLyogQWNjb21vZGF0ZSBpcGhvbmUgMTErKi9cbiRpcGhvbmUtc2FmZXNwYWNlOiByZW0tY2FsYyg0NCk7XG4kY29tbW9uR3V0dGVyOiAzcmVtO1xuIiwiQG1peGluIHR5cG9ncmFwaHkoJGZvcm1hdDogYm9keSwgJHdlaWdodDogbnVsbCwgJGNvbG9yOm51bGwsICRmb250c2l6ZTogbnVsbCwgJGxpbmVoZWlnaHQ6IG51bGwsICRtYXhsaW5lczowICkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJG1heGxpbmVzO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cblxuICAgIEBpZiAkZm9ybWF0ID09ICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNi42cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC44cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDQge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDUge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjRyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zcmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuM3JlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjJyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5dmVyeXNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxcmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuNnJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfVxuXG4gICAgQGlmICR3ZWlnaHQgPT0gYm9sZCBvciAkd2VpZ2h0ID09IHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSBAZWxzZSBpZiAkd2VpZ2h0ID09IG5vcm1hbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG4gICAgQGlmICRmb250c2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xuICAgIH1cblxuICAgIEBpZiAkbGluZWhlaWdodCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZWhlaWdodDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    53949: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardComponent": function CardComponent() {
          return (
            /* binding */
            _CardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function CardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      var _c0 = ["*"];

      var _CardComponent = /*#__PURE__*/function () {
        function _CardComponent() {
          _classCallCheck(this, _CardComponent);

          this.title = '';
          this.tabbed = false;
        }

        _createClass(_CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CardComponent;
      }();

      _CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || _CardComponent)();
      };

      _CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CardComponent,
        selectors: [["app-card"]],
        inputs: {
          title: "title",
          tabbed: "tabbed",
          tabbedItems: "tabbedItems"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [[1, "card"], ["class", "card-header", 4, "ngIf"], [1, "card-body"], [1, "card-header"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title != "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  height: 4rem;\n  padding: 1.25rem 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7QUFKUjtBQU1JO0VBQ0ksWUFBQTtBQUpSIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2FyZC1oZWFkZXItY29sb3I6ICNmNWY1ZjU7XG4kY29sb3ItYm9yZGVyczogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cblxuLmNhcmQge1xuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjI1cmVtO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    89825: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultButtonComponent": function DefaultButtonComponent() {
          return (
            /* binding */
            _DefaultButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DefaultButtonComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultButtonComponent_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.doAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, "\n");
        }
      }

      function DefaultButtonComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultButtonComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.doAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, "\n");
        }
      }

      var _DefaultButtonComponent = /*#__PURE__*/function () {
        function _DefaultButtonComponent() {
          _classCallCheck(this, _DefaultButtonComponent);

          this.outline = false;
          this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_DefaultButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doAction",
          value: function doAction() {
            this.action.emit();
          }
        }]);

        return _DefaultButtonComponent;
      }();

      _DefaultButtonComponent.ɵfac = function DefaultButtonComponent_Factory(t) {
        return new (t || _DefaultButtonComponent)();
      };

      _DefaultButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DefaultButtonComponent,
        selectors: [["app-default-button"]],
        inputs: {
          outline: "outline",
          text: "text"
        },
        outputs: {
          action: "action"
        },
        decls: 2,
        vars: 2,
        consts: [["type", "button", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
        template: function DefaultButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefaultButtonComponent_button_0_Template, 2, 1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DefaultButtonComponent_button_1_Template, 2, 1, "button", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outline);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.outline);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".btn-primary[_ngcontent-%COMP%] {\n  background-color: #245FB9 !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #245FB9 !important;\n  border-color: #245FB9 !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: white !important;\n  background-color: #245FB9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDSTtFQUNJLHVCQUFBO0VBQ0Esb0NBQUE7QUFDUiIsImZpbGUiOiJkZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1RkI5ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5e1xuICAgIGNvbG9yOiAjMjQ1RkI5ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQ1RkI5ICFpbXBvcnRhbnQ7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NUZCOSAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    61618: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownTableComponent": function DropdownTableComponent() {
          return (
            /* binding */
            _DropdownTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DropdownTableComponent_table_5_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var head_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](head_r3.name);
        }
      }

      function DropdownTableComponent_table_5_tr_4_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var head_r6 = ctx.$implicit;

          var row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.cellValue(head_r6.field, row_r4), " ");
        }
      }

      function DropdownTableComponent_table_5_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DropdownTableComponent_table_5_tr_4_td_1_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.data.fields);
        }
      }

      function DropdownTableComponent_table_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DropdownTableComponent_table_5_th_2_Template, 2, 1, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DropdownTableComponent_table_5_tr_4_Template, 2, 1, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.history);
        }
      }

      var _DropdownTableComponent = /*#__PURE__*/function () {
        function _DropdownTableComponent(_formService) {
          _classCallCheck(this, _DropdownTableComponent);

          this._formService = _formService;
          this.titles = [];
          this.history = [];
          this.opened = false;
          this.faUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretUp;
          this.faDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown;
        }

        _createClass(_DropdownTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this._formService.getDropdownValues(this.data.url).subscribe(function (response) {
              _this10.history = response.results;
            }, function (err) {});
          }
        }, {
          key: "cellValue",
          value: function cellValue(source, row) {
            if (source.trim() == "" || source == undefined) return "null";
            var parts = source.split(".");
            var value = "\u2014";
            var tempValue = row;

            for (var index in parts) {
              var key = parts[index];
              if (tempValue == null) return "null";

              if (tempValue.hasOwnProperty(key)) {
                tempValue = tempValue[key];
                value = tempValue;
              }
            }

            return value;
          }
        }, {
          key: "toggleShow",
          value: function toggleShow() {
            this.opened = !this.opened;
          }
        }]);

        return _DropdownTableComponent;
      }();

      _DropdownTableComponent.ɵfac = function DropdownTableComponent_Factory(t) {
        return new (t || _DropdownTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__.FormItemService));
      };

      _DropdownTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DropdownTableComponent,
        selectors: [["app-dropdown-table"]],
        inputs: {
          data: "data",
          title: "title",
          titles: "titles"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "p-3", 2, "background-color", "white"], [1, "row", "pl-4", "pt-0", 2, "align-items", "start !important"], ["size", "2x", 3, "icon", "click"], [1, "ml-4", 2, "font-size", "85%", "font-weight", "600"], ["class", "table table-hover table-sm mt-0 pt-0 ml- pl-0", 4, "ngIf"], [1, "table", "table-hover", "table-sm", "mt-0", "pt-0", "ml-", "pl-0"], ["style", "font-size: 80%;font-weight: 500;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [2, "font-size", "80%", "font-weight", "500"], ["style", "font-size: 80%;font-weight: 400;", 4, "ngFor", "ngForOf"], [2, "font-size", "80%", "font-weight", "400"]],
        template: function DropdownTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownTableComponent_Template_fa_icon_click_2_listener() {
              return ctx.toggleShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DropdownTableComponent_table_5_Template, 5, 2, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.opened ? ctx.faUp : ctx.faDown);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opened);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    73446: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);

      var _c0 = ["*"];
      ;

      var _ModalComponent = /*#__PURE__*/function () {
        function _ModalComponent(_modalService, el) {
          _classCallCheck(this, _ModalComponent);

          this._modalService = _modalService;
          this.el = el;
          this.width = 'col-6';
          this.element = el.nativeElement;
        }

        _createClass(_ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // ensure id attribute exists
            if (!this.id) {
              console.error('modal must have an id');
              return;
            } // move element to bottom of page (just before </body>) so it can be displayed above everything else


            document.body.appendChild(this.element); // close modal on background click

            this.element.addEventListener('click', function (el) {
              if (el.target.className === 'jw-modal') {
                _this11.close();
              }
            }); // add self (this modal instance) to the modal service so it's accessible from controllers

            this._modalService.add(this);
          } // remove self from modal service when component is destroyed

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._modalService.remove(this.id);

            this.element.remove();
          } // open modal

        }, {
          key: "open",
          value: function open() {
            this.element.getElementsByClassName('jw-modal-body')[0].style.width = this.width;
            this.element.style.display = 'block';
            document.body.classList.add('jw-modal-open');
          } // close modal

        }, {
          key: "close",
          value: function close() {
            this.element.style.display = 'none';
            document.body.classList.remove('jw-modal-open');
          }
        }]);

        return _ModalComponent;
      }();

      _ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || _ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ModalComponent,
        selectors: [["jw-modal"]],
        inputs: {
          id: "id",
          width: "width"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 0,
        consts: [[1, "jw-modal", "d-flex", "justify-content-center", "align-items-center"], [1, "jw-modal-body"], [1, "jw-modal-background"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
          }
        },
        styles: ["/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  width: 300px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLHFEQUFBO0VBQ0EsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsY0FBQTtBQURSO0FBR1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnREFBQTtFQUNBLFlBQUE7QUFGWjtBQU1JO0VBQ0ksK0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsK0RBQUE7RUFDQSxZQUFBO0FBTlI7QUFVQTtFQUNJLDZFQUFBO0VBQ0EsZ0JBQUE7QUFQSiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAuanctbW9kYWwge1xuICAgICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgXG4gICAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAuanctbW9kYWwtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAgICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgICAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgICAgICAgei1pbmRleDogOTAwO1xuICAgIH1cbn1cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    60515: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MultiSelectComponent": function MultiSelectComponent() {
          return (
            /* binding */
            _MultiSelectComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var _multi_select_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./multi-select.service */
      99418);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);

      function MultiSelectComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_div_6_button_5_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var se_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.chooseSelection($event, se_r3, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_div_6_ng_template_6_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var se_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.chooseSelection($event, se_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MultiSelectComponent_div_6_Template_input_change_4_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var se_r3 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.setValue($event, se_r3.id);
          })("onkeyup", function MultiSelectComponent_div_6_Template_input_onkeyup_4_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var se_r3 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.setValue($event, se_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MultiSelectComponent_div_6_button_5_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_div_6_ng_template_6_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var se_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](se_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.parameter["count"] ? "number" : "hidden")("value", ctx_r1.pre_selection_status.includes(se_r3.id) ? ctx_r1.pre_select_values[se_r3.id] : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.pre_selection_status.includes(se_r3.id))("ngIfElse", _r5);
        }
      }

      function MultiSelectComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_button_12_Template_span_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var se_r16 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.removeSelection(se_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var se_r16 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", se_r16.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](se_r16.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faMinusCircle);
        }
      }

      var _MultiSelectComponent = /*#__PURE__*/function () {
        // formGroupCount = new FormGroup({
        //   id: new FormControl('', Validators.required),
        //   count: new FormControl('', Validators.required)
        // })
        function _MultiSelectComponent(multiServ) {
          _classCallCheck(this, _MultiSelectComponent);

          this.multiServ = multiServ;

          this.onChange = function () {};

          this.onTouch = function () {};
          /**
           * It should dissapper after some time
           * Define default args
           */


          this.focus = false;
          this.loader = false;
          this.categories = [];
          this.selection = [];
          this.pre_selection = [];
          this.pre_select_values = [];
          this.selected_values = [];
          this.pre_selection_status = [];
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMinusCircle;
          this.pageSize = 3;
          this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
          });
          this.parameter = {
            "type": "field",
            "required": true,
            "read_only": false,
            "label": "Items",
            "display_name": "name",
            "value_field": "id",
            "multiple": true,
            "url": "item-configs/",
            "search_field": "name",
            "args": "users",
            "edit_source_field": "items_details",
            "edit_display_name": "item_name",
            "res_value_field": "item_config",
            "isMap": true,
            "count": true
          };
        }

        _createClass(_MultiSelectComponent, [{
          key: "selectSe",
          value: function selectSe() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.subject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500)).subscribe(function (search) {
              _this12.focus = true;

              _this12.searchingFunc(search);
            });
          } //my

        }, {
          key: "setValue",
          value: function setValue(e, id) {
            this.pre_select_values[id] = e.target.value;
          } //end of my

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value) {
              this.parseWriteData(value);
            } else {
              this.selection = [];
            }
          }
        }, {
          key: "parseWriteData",
          value: function parseWriteData(value) {
            var _this13 = this;

            this.selection = value.map(function (ele) {
              var sel = {};
              sel.count = ele.count;
              sel.id = ele[_this13.responseValueFieldName];
              sel.name = _this13.getObjValue(ele, _this13.editSourceDisplayFieldName);
              return sel;
            });
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "clearSelection",
          value: function clearSelection() {
            this.pre_selection = [];
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp() {
            var search_text = this.formGroupSearch.controls['search'].value;
            this.subject.next(search_text);
          }
        }, {
          key: "chooseSelection",
          value: function chooseSelection(event, se) {
            var is_update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            event.preventDefault();

            if (!this.parameter["multiple"] && this.selection.length >= 1 && !is_update) {
              return;
            }

            var choice = {
              id: se.id,
              name: se.name,
              count: this.pre_select_values[se.id]
            };

            for (var i in this.selection) {
              if (this.selection[i].id == se.id) {
                this.selection[i].count = this.pre_select_values[se.id];
                is_update = true;
                this.hasChanged();
                break;
              }
            }

            if (!is_update) {
              this.selection.push(choice);
              this.hasChanged();
            }

            this.pre_selection_status.includes(se.id) ? true : this.pre_selection_status.push(se.id);
          }
        }, {
          key: "hasChanged",
          value: function hasChanged() {
            this.onChange(this.mapResponseValue(this.selection));
          }
        }, {
          key: "mapResponseValue",
          value: function mapResponseValue(selection) {
            var _this14 = this;

            return selection.map(function (ele) {
              var res = {};
              res[_this14.responseValueFieldName] = ele.id;
              return Object.assign(Object.assign({}, res), ele);
            });
          }
        }, {
          key: "removeSelection",
          value: function removeSelection(se) {
            var index = this.selection.indexOf(se);
            this.selection.splice(index, 1);
            var status_idx = this.pre_selection_status.indexOf(se.id);
            this.pre_selection_status.splice(status_idx, 1);
            this.hasChanged();
          }
        }, {
          key: "searchArgs",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("args")) return this.parameter.args;
            }

            return "";
          }
        }, {
          key: "hideSearchResult",
          value: function hideSearchResult(event) {
            event.preventDefault();
            this.focus = false;
          }
        }, {
          key: "searchingFunc",
          value: function searchingFunc(search) {
            var _this15 = this;

            this.loader = true;

            if (!search) {
              this.pre_selection = [];
              this.loader = false;
              return;
            }

            var count = search.length;
            var searchArgs = "".concat(this.searchArgs, "&").concat(this.searchFieldName, "=").concat(search);

            if (!this.isOfflineSearch) {
              this.multiServ.search(this.url, this.pageSize, searchArgs).subscribe(function (res) {
                _this15.loader = false;
                console.log(res);

                _this15.mapPreselectionData(res.results);
              }, function (error) {
                console.log("Failed to search http");
                _this15.loader = false;
                console.log(error);
              });
            } else {
              console.log("Offline search");
              this.mapPreselectionData(this.parameter.data);
              this.loader = false;
            }
          }
        }, {
          key: "mapPreselectionData",
          value: function mapPreselectionData(data) {
            var _this16 = this;

            // Check the data for the source and the display_name
            if (data.length < 1) return;
            this.pre_selection = data.map(function (elem) {
              var preSelect = {};
              preSelect.id = _this16.getObjValue(elem, _this16.valueFieldName);
              preSelect.name = _this16.getObjValue(elem, _this16.displayFieldName);
              if (!_this16.parameter["count"]) _this16.pre_select_values[elem.id] = 1;
              return preSelect;
            });
          }
        }, {
          key: "displayFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("display_name")) return this.parameter.display_name;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "editSourceDisplayFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("edit_display_name")) {
                return this.parameter.edit_display_name;
              }

              return "name";
            }

            return "name";
          }
        }, {
          key: "editSourceFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("edit_source_field")) return this.parameter.edit_source_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "valueFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("value_field")) return this.parameter.value_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "responseValueFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("res_value_field")) return this.parameter.res_value_field;
              return this.parameter.label;
            }

            return "id";
          }
        }, {
          key: "url",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("url")) return this.parameter.url;
            }

            return "";
          }
        }, {
          key: "getObjValue",
          value: function getObjValue(rawData, source) {
            var parts = source.split(".");
            var value = "Incorrect Data Source ".concat(source, " ");
            var tempValue = rawData; // Check if data hardcoded

            for (var index in parts) {
              var key = parts[index];

              if (tempValue.hasOwnProperty(key)) {
                tempValue = tempValue[key];
                value = tempValue;
              }
            }

            return value;
          }
        }, {
          key: "searchFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("search_field")) return this.parameter.search_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "paramType",
          get: function get() {
            return typeof this.parameter;
          }
          /**
           * Check if the paramer has a data object
           * If exists no api call is required
           */

        }, {
          key: "isOfflineSearch",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("data")) {
                return true;
              }

              return false;
            }

            return false;
          }
        }]);

        return _MultiSelectComponent;
      }();

      _MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
        return new (t || _MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_multi_select_service__WEBPACK_IMPORTED_MODULE_0__.MultiSelectService));
      };

      _MultiSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MultiSelectComponent,
        selectors: [["app-multi-select"]],
        inputs: {
          pageSize: "pageSize",
          parameter: "parameter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function () {
            return _MultiSelectComponent;
          }),
          multi: true
        }])],
        decls: 13,
        vars: 5,
        consts: [[3, "formGroup"], [1, "d-flex", "justify-content-between"], ["formControlName", "search", "placeholder", "Search items", 1, "form-control", "form-control-lg", "multiselect-input", 3, "keyup", "blur"], ["class", "spinner-border ml-2 p-2 text-primary", "role", "status", 4, "ngIf"], [3, "hidden"], [1, "list-group-item", "search-results"], ["class", "d-flex justify-content-between result", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row-reverse"], [1, "btn", "btn-secondary", "btn-sm", "pull-right", "mt-3", 3, "click"], [1, "mt-3"], ["class", "btn btn-sm btn-secondary btn-tag pr-3 pl-3 m-2 multiselect-input", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "ml-2", "p-2", "text-primary"], [1, "sr-only"], [1, "d-flex", "justify-content-between", "result"], [1, "mt-1", "multiselect-input", "d"], ["placeholder", "Quantity", 1, "form-control", "d-inline", "mr-2", "multiselect-input", 3, "type", "value", "change", "onkeyup"], ["class", "btn btn-sm btn-success multiselect-input multiselect-btn", 3, "click", 4, "ngIf", "ngIfElse"], ["AddBlock", ""], [1, "btn", "btn-sm", "btn-success", "multiselect-input", "multiselect-btn", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "multiselect-input", "multiselect-btn", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", "btn-tag", "pr-3", "pl-3", "m-2", "multiselect-input"], [1, "mr-2", "pr-1", "pl-1"], [3, "click"], [3, "icon"]],
        template: function MultiSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function MultiSelectComponent_Template_input_keyup_2_listener() {
              return ctx.onKeyUp();
            })("blur", function MultiSelectComponent_Template_input_blur_2_listener() {
              return ctx.onTouch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_div_3_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_div_6_Template, 8, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_button_click_8_listener($event) {
              return ctx.hideSearchResult($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MultiSelectComponent_button_12_Template, 7, 3, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroupSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.focus);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pre_selection);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selection);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
        styles: [".search-results[_ngcontent-%COMP%] {\n  border: 1px solid #dedede;\n  border-radius: 0.185rem;\n  box-sizing: border-box;\n  overflow-y: auto;\n}\n\n.result[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.625rem;\n}\n\n.result[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background-color: red;\n  color: black;\n}\n\n.result[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fafafa;\n}\n\n.btn-tag[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\n.count[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: black;\n  padding: 0.2rem;\n  border-radius: 2rem;\n  font-size: 10px;\n  vertical-align: middle;\n}\n\n.multiselect-input[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n\n.multiselect-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBSUE7RUFDRSxvREFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJtdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiAwLjE4NXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnJlc3VsdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xuICBcbiAgLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5yZXN1bHQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuLmJ0bi10YWcge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5tdWx0aXNlbGVjdC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubXVsdGlzZWxlY3QtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    1791: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MultiSelectModule": function MultiSelectModule() {
          return (
            /* binding */
            _MultiSelectModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _multi_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./multi-select.component */
      60515);
      /* harmony import */


      var _multi_select_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./multi-select.service */
      99418);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MultiSelectModule = function _MultiSelectModule() {
        _classCallCheck(this, _MultiSelectModule);
      };

      _MultiSelectModule.ɵfac = function MultiSelectModule_Factory(t) {
        return new (t || _MultiSelectModule)();
      };

      _MultiSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MultiSelectModule
      });
      _MultiSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_multi_select_service__WEBPACK_IMPORTED_MODULE_1__.MultiSelectService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MultiSelectModule, {
          declarations: [_multi_select_component__WEBPACK_IMPORTED_MODULE_0__.MultiSelectComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule],
          exports: [_multi_select_component__WEBPACK_IMPORTED_MODULE_0__.MultiSelectComponent]
        });
      })();
      /***/

    },

    /***/
    99418: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MultiSelectService": function MultiSelectService() {
          return (
            /* binding */
            _MultiSelectService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services */
      21866);

      var _MultiSelectService = /*#__PURE__*/function () {
        function _MultiSelectService(_http) {
          _classCallCheck(this, _MultiSelectService);

          this._http = _http;
          this.actionsEvent$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_MultiSelectService, [{
          key: "search",
          value: function search(url, pageSize, args) {
            console.log(args);
            return this._http.get("".concat(url, "?").concat(args, "&page_size=").concat(pageSize));
          }
        }]);

        return _MultiSelectService;
      }();

      _MultiSelectService.ɵfac = function MultiSelectService_Factory(t) {
        return new (t || _MultiSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.HttpService));
      };

      _MultiSelectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MultiSelectService,
        factory: _MultiSelectService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    44466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast-notifications/toast-notifications.module */
      99138);
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      10419);
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card/card.component */
      53949);
      /* harmony import */


      var _tables_tables_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables/tables.module */
      87879);
      /* harmony import */


      var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./default-button/default-button.component */
      89825);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal/modal.component */
      73446);
      /* harmony import */


      var _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ng-multi-select/multi-select.module */
      1791);
      /* harmony import */


      var _dropdown_table_dropdown_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dropdown-table/dropdown-table.component */
      61618);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /** Custom modules */

      /** Components */


      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsModule, _tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsModule, _tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule, _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_6__.MultiSelectModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _dropdown_table_dropdown_table_component__WEBPACK_IMPORTED_MODULE_7__.DropdownTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsModule, _tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule],
          exports: [_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsModule, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule, _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_6__.MultiSelectModule, _dropdown_table_dropdown_table_component__WEBPACK_IMPORTED_MODULE_7__.DropdownTableComponent]
        });
      })();
      /***/

    },

    /***/
    4767: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicTableCellComponent": function BasicTableCellComponent() {
          return (
            /* binding */
            _BasicTableCellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function BasicTableCellComponent_small_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cellValue);
        }
      }

      function BasicTableCellComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function BasicTableCellComponent_div_2_div_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, action_r4["link"] + ctx_r5.row.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r4["name"]);
        }
      }

      function BasicTableCellComponent_div_2_div_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BasicTableCellComponent_div_2_div_3_ng_template_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.actionDropDown($event, action_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r4);
        }
      }

      function BasicTableCellComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BasicTableCellComponent_div_2_div_3_a_1_Template, 2, 4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BasicTableCellComponent_div_2_div_3_ng_template_2_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isObject(action_r4))("ngIfElse", _r6);
        }
      }

      function BasicTableCellComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BasicTableCellComponent_div_2_div_3_Template, 4, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faDropDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.header["actions"]);
        }
      }

      var _BasicTableCellComponent = /*#__PURE__*/function () {
        function _BasicTableCellComponent(_tableService) {
          _classCallCheck(this, _BasicTableCellComponent);

          this._tableService = _tableService;
          this.faDropDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown;
        }

        _createClass(_BasicTableCellComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cellValue",
          get: function get() {
            var source = this.header["field"];
            if (source.trim() == "" || source == undefined) return "null";
            var parts = source.split(".");
            var value = "\u2014";
            var tempValue = this.row;

            for (var index in parts) {
              var key = parts[index];
              if (tempValue == null) return "null";

              if (tempValue.hasOwnProperty(key)) {
                tempValue = tempValue[key];
                value = tempValue;
              }
            }

            return value;
          }
        }, {
          key: "isAction",
          get: function get() {
            return this.header["action"] != undefined && this.header["action"] == true;
          }
        }, {
          key: "isCheckBox",
          get: function get() {
            return this.header["checkbox"] != undefined && this.header["checkbox"] == true;
          }
        }, {
          key: "actionDropDown",
          value: function actionDropDown(event, action) {
            event.preventDefault();

            this._tableService.doAction(action, this.row);
          }
        }, {
          key: "isObject",
          value: function isObject(action) {
            var type;

            try {
              type = action["type"];
            } catch (e) {
              return false;
            }

            return type != undefined;
          }
        }]);

        return _BasicTableCellComponent;
      }();

      _BasicTableCellComponent.ɵfac = function BasicTableCellComponent_Factory(t) {
        return new (t || _BasicTableCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _BasicTableCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BasicTableCellComponent,
        selectors: [["app-basic-table-cell"]],
        inputs: {
          header: "header",
          row: "row"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "p-0", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown dropleft", 4, "ngIf"], [1, "p-0"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", "primary"], [1, "dropdown", "dropleft"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", 3, "icon"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], [1, "dropdown-item"], ["style", "color: black;", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["actionTemp", ""], [2, "color", "black", 3, "routerLink"], ["href", "#", 2, "color", "black", 3, "click"]],
        template: function BasicTableCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BasicTableCellComponent_small_0_Template, 2, 1, "small", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BasicTableCellComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BasicTableCellComponent_div_2_Template, 4, 2, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAction);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCheckBox);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAction);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS1jZWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90139: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicTableHeaderComponent": function BasicTableHeaderComponent() {
          return (
            /* binding */
            _BasicTableHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);

      function BasicTableHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BasicTableHeaderComponent_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.filterValue = $event;
          })("ngModelChange", function BasicTableHeaderComponent_div_1_Template_input_ngModelChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.filter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterValue);
        }
      }

      function BasicTableHeaderComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faIcon);
        }
      }

      var _BasicTableHeaderComponent = /*#__PURE__*/function () {
        function _BasicTableHeaderComponent(_tableService) {
          _classCallCheck(this, _BasicTableHeaderComponent);

          this._tableService = _tableService;
          this.faIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendarAlt;
          this.filterValue = "";
          this.headerfull = false;
        }

        _createClass(_BasicTableHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.filterValue = this.filters.filter(function (item) {
              return item["field"] == _this17.header["field"];
            })["value"];
          }
        }, {
          key: "normalCell",
          get: function get() {
            return this.header["date"] == undefined && this.header["actions"] == undefined && this.header['calculated'] == undefined;
          }
        }, {
          key: "isDate",
          get: function get() {
            return this.header["date"] != undefined;
          }
        }, {
          key: "filter",
          value: function filter() {
            this._tableService.getJoinedFilters({
              field: this.header["field"],
              value: this.filterValue
            });
          }
        }]);

        return _BasicTableHeaderComponent;
      }();

      _BasicTableHeaderComponent.ɵfac = function BasicTableHeaderComponent_Factory(t) {
        return new (t || _BasicTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _BasicTableHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BasicTableHeaderComponent,
        selectors: [["app-basic-table-header"]],
        inputs: {
          header: "header",
          filters: "filters",
          headerfull: "headerfull"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "row"], ["class", "col-12 mb-2", 4, "ngIf"], ["class", "col-12 d-flex justify-content-center", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-weight", "bold"], [1, "col-12", "mb-2"], ["type", "text", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [3, "icon"]],
        template: function BasicTableHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BasicTableHeaderComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BasicTableHeaderComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalCell);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    81170: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicTableComponent": function BasicTableComponent() {
          return (
            /* binding */
            _BasicTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../basic-table-header/basic-table-header.component */
      90139);
      /* harmony import */


      var _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../basic-table-cell/basic-table-cell.component */
      4767);
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mypagination/mypagination.component */
      81417);
      /* harmony import */


      var _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../table-loader/table-loader.component */
      31005);

      function BasicTableComponent_table_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-basic-table-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r5)("filters", ctx_r3.filters);
        }
      }

      function BasicTableComponent_table_1_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-basic-table-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r8 = ctx.$implicit;

          var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r8)("row", row_r6);
        }
      }

      function BasicTableComponent_table_1_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BasicTableComponent_table_1_tr_5_td_1_Template, 2, 2, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.titles);
        }
      }

      function BasicTableComponent_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BasicTableComponent_table_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BasicTableComponent_table_1_tr_5_Template, 2, 1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.results);
        }
      }

      function BasicTableComponent_app_mypagination_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-mypagination", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPageSelect", function BasicTableComponent_app_mypagination_2_Template_app_mypagination_onPageSelect_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.onPageSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedPage", ctx_r1.page)("pageSize", ctx_r1.page_size)("resultsMeta", ctx_r1.resultsMeta);
        }
      }

      function BasicTableComponent_app_table_loader_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-table-loader");
        }
      }

      var _BasicTableComponent = /*#__PURE__*/function () {
        function _BasicTableComponent(_tableService) {
          _classCallCheck(this, _BasicTableComponent);

          this._tableService = _tableService;
          this.titles = [];
          this.url = "";
          this.page_size = 18;
          this.page = 1;
          this.loading = true;
          this.filters = [];
        }

        _createClass(_BasicTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.getTableData();
            this.selectedFiltersSubscriber = this._tableService.getFilters$.subscribe(function (data) {
              _this18.selectedFilterOptions = _this18.getFilteredOptions(data);

              _this18.getTableData({
                load: false
              });
            });
          }
        }, {
          key: "getFilteredOptions",
          value: function getFilteredOptions(filter) {
            var filterTmp = [];
            this.filters = this.filters.filter(function (item) {
              return item.field != filter.field;
            });
            this.filters = this.filters.filter(function (item) {
              return item.value.trim() != "";
            });
            this.filters.push(filter);
            this.filters.map(function (item) {
              if (item.value != "") {
                var arr = {};
                var filterItem = "".concat(item.field, "=").concat(item.value);
                arr = filterItem;
                filterTmp.push(arr);
              }
            });
            var data = filterTmp.join("&");
            return data;
          }
        }, {
          key: "onPageSelect",
          value: function onPageSelect(page) {
            this.page = page;
            this.getTableData();
          }
        }, {
          key: "setLoaderStatus",
          value: function setLoaderStatus(status) {
            this.loading = status;
          }
        }, {
          key: "tableMetaData",
          value: function tableMetaData(meta) {
            if (meta.hasOwnProperty("next")) {
              this.resultsMeta = {
                next: meta.next,
                prev: meta.previous,
                count: meta.count
              };
            }
          }
        }, {
          key: "getTableData",
          value: function getTableData() {
            var _this19 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this.data != null) {
              this.results = this.data;
            }

            if (!(data instanceof Object)) this.setLoaderStatus(true);

            this._tableService.getList(this.url, this.page_size, this.page, this.selectedFilterOptions, data, false).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (res) {
              _this19.setLoaderStatus(false);

              _this19.results = res.results;

              _this19.tableMetaData(res);
            }, function (error) {
              _this19.setLoaderStatus(false);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.selectedFiltersSubscriber]; //other subsciptions this.actionsSubscription, this.deleteSubscription, 

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }]);

        return _BasicTableComponent;
      }();

      _BasicTableComponent.ɵfac = function BasicTableComponent_Factory(t) {
        return new (t || _BasicTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _BasicTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _BasicTableComponent,
        selectors: [["app-basic-table"]],
        inputs: {
          titles: "titles",
          url: "url",
          data: "data",
          page_size: "page_size"
        },
        decls: 4,
        vars: 3,
        consts: [[2, "background-color", "white"], ["class", "table table-hover table-sm mt-0 pt-0 ml- pl-0 ", "style", "background-color: white;", 4, "ngIf"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect", 4, "ngIf"], [4, "ngIf"], [1, "table", "table-hover", "table-sm", "mt-0", "pt-0", "ml-", "pl-0", 2, "background-color", "white"], [4, "ngFor", "ngForOf"], [3, "header", "filters"], ["class", "text-center p-1", 4, "ngFor", "ngForOf"], [1, "text-center", "p-1"], [3, "header", "row"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect"]],
        template: function BasicTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BasicTableComponent_table_1_Template, 6, 2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BasicTableComponent_app_mypagination_2_Template, 1, 3, "app-mypagination", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BasicTableComponent_app_table_loader_3_Template, 1, 0, "app-table-loader", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableHeaderComponent, _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__.BasicTableCellComponent, _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__.MypaginationComponent, _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__.TableLoaderComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88414: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangelogTableCellComponent": function ChangelogTableCellComponent() {
          return (
            /* binding */
            _ChangelogTableCellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function ChangelogTableCellComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cellValue("from"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cellValue("to"));
        }
      }

      function ChangelogTableCellComponent_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.cellValue("id"), "");
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function ChangelogTableCellComponent_div_2_div_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, action_r4["link"] + ctx_r5.row.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r4["name"]);
        }
      }

      function ChangelogTableCellComponent_div_2_div_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangelogTableCellComponent_div_2_div_3_ng_template_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.actionDropDown($event, action_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r4);
        }
      }

      function ChangelogTableCellComponent_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChangelogTableCellComponent_div_2_div_3_a_1_Template, 2, 4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChangelogTableCellComponent_div_2_div_3_ng_template_2_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isObject(action_r4))("ngIfElse", _r6);
        }
      }

      function ChangelogTableCellComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChangelogTableCellComponent_div_2_div_3_Template, 4, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faDropDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.header["actions"]);
        }
      }

      var _ChangelogTableCellComponent = /*#__PURE__*/function () {
        function _ChangelogTableCellComponent(_tableService) {
          _classCallCheck(this, _ChangelogTableCellComponent);

          this._tableService = _tableService;
          this.faDropDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown;
        }

        _createClass(_ChangelogTableCellComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cellValue",
          value: function cellValue(location) {
            var source = this.header["field"];
            if (source == "id") return this.header["id"];
            var value = this.row[location][source];
            if (value != null && (value.trim() == "box_history.store.name" || value.trim() == "box.store.location.name")) value = "Nairobi";
            return value != null ? value.trim() : value;
          }
        }, {
          key: "isAction",
          get: function get() {
            return this.header["action"] != undefined && this.header["action"] == true;
          }
        }, {
          key: "actionDropDown",
          value: function actionDropDown(event, action) {
            event.preventDefault();

            this._tableService.doAction(action, this.row);
          }
        }, {
          key: "isObject",
          value: function isObject(action) {
            var type;

            try {
              type = action["type"];
            } catch (e) {
              return false;
            }

            return type != undefined;
          }
        }]);

        return _ChangelogTableCellComponent;
      }();

      _ChangelogTableCellComponent.ɵfac = function ChangelogTableCellComponent_Factory(t) {
        return new (t || _ChangelogTableCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _ChangelogTableCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ChangelogTableCellComponent,
        selectors: [["app-changelog-table-cell"]],
        inputs: {
          header: "header",
          row: "row"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "col-12 m-0 p-0 ", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown dropleft", 4, "ngIf"], [1, "col-12", "m-0", "p-0"], [1, "row"], [1, "col-6", "pl-0", 2, "background-color", "#f1f1f1"], [1, "p-1", "text-center"], [1, "col-6", "pl-0"], [1, "dropdown", "dropleft"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", 3, "icon"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], [1, "dropdown-item"], ["style", "color: black;", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["actionTemp", ""], [2, "color", "black", 3, "routerLink"], ["href", "#", 2, "color", "black", 3, "click"]],
        template: function ChangelogTableCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChangelogTableCellComponent_div_0_Template, 8, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChangelogTableCellComponent_small_1_Template, 2, 1, "small", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChangelogTableCellComponent_div_2_Template, 4, 2, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.header["field"] != "id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.header["field"] == "id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAction);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2ctdGFibGUtY2VsbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    36011: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangelogTableComponent": function ChangelogTableComponent() {
          return (
            /* binding */
            _ChangelogTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _chnagelog_table_header_changelog_table_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chnagelog-table-header/changelog-table-header.component */
      64237);
      /* harmony import */


      var _changelog_table_cell_changelog_table_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../changelog-table-cell/changelog-table-cell.component */
      88414);
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mypagination/mypagination.component */
      81417);
      /* harmony import */


      var _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../table-loader/table-loader.component */
      31005);

      function ChangelogTableComponent_table_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-changelog-table-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r5)("filters", ctx_r3.filters);
        }
      }

      function ChangelogTableComponent_table_1_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-changelog-table-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r8 = ctx.$implicit;

          var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r8)("row", row_r6);
        }
      }

      function ChangelogTableComponent_table_1_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangelogTableComponent_table_1_tr_5_td_1_Template, 2, 2, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.titles);
        }
      }

      function ChangelogTableComponent_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ChangelogTableComponent_table_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ChangelogTableComponent_table_1_tr_5_Template, 2, 1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.results);
        }
      }

      function ChangelogTableComponent_app_mypagination_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-mypagination", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPageSelect", function ChangelogTableComponent_app_mypagination_2_Template_app_mypagination_onPageSelect_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.onPageSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedPage", ctx_r1.page)("pageSize", ctx_r1.page_size)("resultsMeta", ctx_r1.resultsMeta);
        }
      }

      function ChangelogTableComponent_app_table_loader_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-table-loader");
        }
      }

      var _ChangelogTableComponent = /*#__PURE__*/function () {
        function _ChangelogTableComponent(_tableService) {
          _classCallCheck(this, _ChangelogTableComponent);

          this._tableService = _tableService;
          this.titles = [];
          this.url = "";
          this.page_size = 12;
          this.page = 1;
          this.loading = true;
          this.filters = [];
        }

        _createClass(_ChangelogTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.getTableData();
            this.selectedFiltersSubscriber = this._tableService.getFilters$.subscribe(function (data) {
              _this20.selectedFilterOptions = _this20.getFilteredOptions(data);

              _this20.getTableData({
                load: false
              });
            });
          }
        }, {
          key: "getFilteredOptions",
          value: function getFilteredOptions(filter) {
            var filterTmp = [];
            this.filters = this.filters.filter(function (item) {
              return item.field != filter.field;
            });
            this.filters = this.filters.filter(function (item) {
              return item.value.trim() != "";
            });
            this.filters.push(filter);
            this.filters.map(function (item) {
              if (item.value != "") {
                var arr = {};
                var filterItem = "".concat(item.field, "=").concat(item.value);
                arr = filterItem;
                filterTmp.push(arr);
              }
            });
            var data = filterTmp.join("&");
            return data;
          }
        }, {
          key: "onPageSelect",
          value: function onPageSelect(page) {
            this.page = page;
            this.getTableData();
          }
        }, {
          key: "setLoaderStatus",
          value: function setLoaderStatus(status) {
            this.loading = status;
          }
        }, {
          key: "tableMetaData",
          value: function tableMetaData(meta) {
            if (meta.hasOwnProperty("next")) {
              this.resultsMeta = {
                next: meta.next,
                prev: meta.previous,
                count: meta.count
              };
            }
          }
        }, {
          key: "getTableData",
          value: function getTableData() {
            var _this21 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this.data != null) {
              this.results = this.data;
            }

            if (!(data instanceof Object)) this.setLoaderStatus(true);

            this._tableService.getList(this.url, this.page_size, this.page, this.selectedFilterOptions, data, false).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (res) {
              _this21.setLoaderStatus(false);

              _this21.results = res;

              _this21.tableMetaData(res);
            }, function (error) {
              _this21.setLoaderStatus(false);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.selectedFiltersSubscriber]; //other subsciptions this.actionsSubscription, this.deleteSubscription, 

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }]);

        return _ChangelogTableComponent;
      }();

      _ChangelogTableComponent.ɵfac = function ChangelogTableComponent_Factory(t) {
        return new (t || _ChangelogTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _ChangelogTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ChangelogTableComponent,
        selectors: [["app-changelog-table"]],
        inputs: {
          titles: "titles",
          url: "url",
          data: "data",
          page_size: "page_size"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "p-1", "pl-3", 2, "background-color", "white"], ["class", "table table-hover table-sm mt-0 pt-0 ml- pl-0 ", "style", "background-color: white;", 4, "ngIf"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect", 4, "ngIf"], [4, "ngIf"], [1, "table", "table-hover", "table-sm", "mt-0", "pt-0", "ml-", "pl-0", 2, "background-color", "white"], [4, "ngFor", "ngForOf"], [3, "header", "filters"], ["class", "m-0 p-0 pt-1 pb-1", 4, "ngFor", "ngForOf"], [1, "m-0", "p-0", "pt-1", "pb-1"], [3, "header", "row"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect"]],
        template: function ChangelogTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangelogTableComponent_table_1_Template, 6, 2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ChangelogTableComponent_app_mypagination_2_Template, 1, 3, "app-mypagination", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ChangelogTableComponent_app_table_loader_3_Template, 1, 0, "app-table-loader", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _chnagelog_table_header_changelog_table_header_component__WEBPACK_IMPORTED_MODULE_1__.ChangeLogTableHeaderComponent, _changelog_table_cell_changelog_table_cell_component__WEBPACK_IMPORTED_MODULE_2__.ChangelogTableCellComponent, _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__.MypaginationComponent, _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__.TableLoaderComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2ctdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    13353: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckedTableComponent": function CheckedTableComponent() {
          return (
            /* binding */
            _CheckedTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../basic-table-header/basic-table-header.component */
      90139);
      /* harmony import */


      var _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../basic-table-cell/basic-table-cell.component */
      4767);
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mypagination/mypagination.component */
      81417);
      /* harmony import */


      var _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../table-loader/table-loader.component */
      31005);

      function CheckedTableComponent_table_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-basic-table-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r5)("filters", ctx_r3.filters);
        }
      }

      function CheckedTableComponent_table_1_tr_7_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-basic-table-cell", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r8 = ctx.$implicit;

          var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", title_r8)("row", row_r6);
        }
      }

      function CheckedTableComponent_table_1_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckedTableComponent_table_1_tr_7_td_1_Template, 2, 2, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.titles);
        }
      }

      function CheckedTableComponent_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CheckedTableComponent_table_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "SELECT");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CheckedTableComponent_table_1_tr_7_Template, 4, 1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.results);
        }
      }

      function CheckedTableComponent_app_mypagination_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-mypagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPageSelect", function CheckedTableComponent_app_mypagination_2_Template_app_mypagination_onPageSelect_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.onPageSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedPage", ctx_r1.page)("pageSize", ctx_r1.page_size)("resultsMeta", ctx_r1.resultsMeta);
        }
      }

      function CheckedTableComponent_app_table_loader_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-table-loader");
        }
      }

      var _CheckedTableComponent = /*#__PURE__*/function () {
        function _CheckedTableComponent(_tableService) {
          _classCallCheck(this, _CheckedTableComponent);

          this._tableService = _tableService;
          this.titles = [];
          this.url = "";
          this.page_size = 18;
          this.page = 1;
          this.loading = true;
          this.filters = [];
        }

        _createClass(_CheckedTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.getTableData();
            this.selectedFiltersSubscriber = this._tableService.getFilters$.subscribe(function (data) {
              _this22.selectedFilterOptions = _this22.getFilteredOptions(data);

              _this22.getTableData({
                load: false
              });
            });
          }
        }, {
          key: "getFilteredOptions",
          value: function getFilteredOptions(filter) {
            var filterTmp = [];
            this.filters = this.filters.filter(function (item) {
              return item.field != filter.field;
            });
            this.filters = this.filters.filter(function (item) {
              return item.value.trim() != "";
            });
            this.filters.push(filter);
            this.filters.map(function (item) {
              if (item.value != "") {
                var arr = {};
                var filterItem = "".concat(item.field, "=").concat(item.value);
                arr = filterItem;
                filterTmp.push(arr);
              }
            });
            var data = filterTmp.join("&");
            return data;
          }
        }, {
          key: "onPageSelect",
          value: function onPageSelect(page) {
            this.page = page;
            this.getTableData();
          }
        }, {
          key: "setLoaderStatus",
          value: function setLoaderStatus(status) {
            this.loading = status;
          }
        }, {
          key: "tableMetaData",
          value: function tableMetaData(meta) {
            if (meta.hasOwnProperty("next")) {
              this.resultsMeta = {
                next: meta.next,
                prev: meta.previous,
                count: meta.count
              };
            }
          }
        }, {
          key: "getTableData",
          value: function getTableData() {
            var _this23 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this.data != null) {
              this.results = this.data;
            }

            if (!(data instanceof Object)) this.setLoaderStatus(true);

            this._tableService.getList(this.url, this.page_size, this.page, this.selectedFilterOptions, data, false).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (res) {
              _this23.setLoaderStatus(false);

              _this23.results = res.results;

              _this23.tableMetaData(res);
            }, function (error) {
              _this23.setLoaderStatus(false);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.selectedFiltersSubscriber]; //other subsciptions this.actionsSubscription, this.deleteSubscription,

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }]);

        return _CheckedTableComponent;
      }();

      _CheckedTableComponent.ɵfac = function CheckedTableComponent_Factory(t) {
        return new (t || _CheckedTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _CheckedTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CheckedTableComponent,
        selectors: [["app-checked-table"]],
        inputs: {
          titles: "titles",
          url: "url",
          data: "data",
          page_size: "page_size"
        },
        decls: 4,
        vars: 3,
        consts: [[2, "background-color", "white"], ["class", "table table-hover table-sm mt-0 pt-0 ml- pl-0 ", "style", "background-color: white;", 4, "ngIf"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect", 4, "ngIf"], [4, "ngIf"], [1, "table", "table-hover", "table-sm", "mt-0", "pt-0", "ml-", "pl-0", 2, "background-color", "white"], [4, "ngFor", "ngForOf"], [3, "header", "filters"], ["class", "text-center p-1", 4, "ngFor", "ngForOf"], [1, "text-center", "p-1"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], [3, "header", "row"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect"]],
        template: function CheckedTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckedTableComponent_table_1_Template, 8, 2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CheckedTableComponent_app_mypagination_2_Template, 1, 3, "app-mypagination", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CheckedTableComponent_app_table_loader_3_Template, 1, 0, "app-table-loader", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableHeaderComponent, _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__.BasicTableCellComponent, _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__.MypaginationComponent, _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__.TableLoaderComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2VkLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    64237: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeLogTableHeaderComponent": function ChangeLogTableHeaderComponent() {
          return (
            /* binding */
            _ChangeLogTableHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _table_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../table-service.service */
      15609);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);

      function ChangeLogTableHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChangeLogTableHeaderComponent_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.filterValue = $event;
          })("ngModelChange", function ChangeLogTableHeaderComponent_div_1_Template_input_ngModelChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.filter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterValue);
        }
      }

      function ChangeLogTableHeaderComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faIcon);
        }
      }

      var _ChangeLogTableHeaderComponent = /*#__PURE__*/function () {
        function _ChangeLogTableHeaderComponent(_tableService) {
          _classCallCheck(this, _ChangeLogTableHeaderComponent);

          this._tableService = _tableService;
          this.faIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendarAlt;
          this.filterValue = "";
          this.headerfull = false;
        }

        _createClass(_ChangeLogTableHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.filterValue = this.filters.filter(function (item) {
              return item["field"] == _this24.header["field"];
            })["value"];
          }
        }, {
          key: "normalCell",
          get: function get() {
            return this.header["date"] == undefined && this.header["actions"] == undefined && this.header['calculated'] == undefined;
          }
        }, {
          key: "isDate",
          get: function get() {
            return this.header["date"] != undefined;
          }
        }, {
          key: "filter",
          value: function filter() {
            this._tableService.getJoinedFilters({
              field: this.header["field"],
              value: this.filterValue
            });
          }
        }]);

        return _ChangeLogTableHeaderComponent;
      }();

      _ChangeLogTableHeaderComponent.ɵfac = function ChangeLogTableHeaderComponent_Factory(t) {
        return new (t || _ChangeLogTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_service_service__WEBPACK_IMPORTED_MODULE_0__.TableServiceService));
      };

      _ChangeLogTableHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ChangeLogTableHeaderComponent,
        selectors: [["app-changelog-table-header"]],
        inputs: {
          header: "header",
          filters: "filters",
          headerfull: "headerfull"
        },
        decls: 14,
        vars: 3,
        consts: [[1, "p-0", "m-0", 2, "width", "300px !important"], ["class", "col-12 m-0 mb-2 p-0", 4, "ngIf"], ["class", "col-12 d-flex justify-content-center", 4, "ngIf"], [1, "col-12", "m-0", "mb-2", "p-0", "d-flex"], [2, "font-weight", "bold"], [1, "col-12", "m-0", "p-0"], [1, "row"], [1, "col-6"], [2, "font-weight", "800 !important"], [1, "col-12", "m-0", "mb-2", "p-0"], ["type", "text", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "col-12", "d-flex", "justify-content-center"], [3, "icon"]],
        template: function ChangeLogTableHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChangeLogTableHeaderComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChangeLogTableHeaderComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "To");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalCell);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2ctdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    81417: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MypaginationComponent": function MypaginationComponent() {
          return (
            /* binding */
            _MypaginationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function MypaginationComponent_ul_3_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.hasPrev);
        }
      }

      function MypaginationComponent_ul_3_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_3_li_7_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var page_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.selectPage(page_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r4 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r2.selectedPage == page_r4 ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4);
        }
      }

      function MypaginationComponent_ul_3_button_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MypaginationComponent_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.scrollPage(-1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_3_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.selectPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MypaginationComponent_ul_3_button_6_Template, 2, 1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MypaginationComponent_ul_3_li_7_Template, 3, 4, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MypaginationComponent_ul_3_button_9_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_3_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selectPage(ctx_r10.totalPages);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.scrollPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.hasPrev);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.selectedPage == 1 ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.moreAtStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.moreAtEnd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.selectedPage == ctx_r0.totalPages ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.totalPages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.hasNext);
        }
      }

      var _MypaginationComponent = /*#__PURE__*/function () {
        function _MypaginationComponent() {
          _classCallCheck(this, _MypaginationComponent);

          this.selectedPage = 5;
          this.pageSize = 10;
          this.totalDisplayedPAges = 9;
          this.onPageSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_MypaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isAtEnd",
          get: function get() {
            return this.totalDisplayedPAges - this.selectedPage <= Math.round(this.totalDisplayedPAges / 2);
          }
        }, {
          key: "isAtStart",
          get: function get() {
            // 5 -2
            return this.selectedPage - 2 <= 3;
          }
        }, {
          key: "moreAtStart",
          get: function get() {
            return this.isAtEnd && this.hideSomePages;
          }
        }, {
          key: "moreAtEnd",
          get: function get() {
            return this.isAtStart && this.hideSomePages;
          }
        }, {
          key: "hideSomePages",
          get: function get() {
            // console.log((this.totalPages - 2) >= this.totalDisplayedPAges)
            return this.totalPages - 2 >= this.totalDisplayedPAges;
          }
        }, {
          key: "pages",
          get: function get() {
            if (!this.isPaginatable) return [];
            var pages = [];
            var totalPages = this.totalPages;
            var excluded = [1, this.totalPages];
            var remPages = totalPages - 2;
            var addFactor = 2; // 6 7 8 9 10 11

            if (this.hideSomePages) {
              var tempAddFactor = this.selectedPage - 1; // Less than 3 because , less than that means use 2 

              if (this.isAtStart) {
                tempAddFactor = 2;
              } else if (this.isAtEnd) {
                tempAddFactor = 6;
              }

              addFactor = tempAddFactor;
            }

            for (var i = 0; i < (this.hideSomePages ? 5 : remPages); i++) {
              var newPage = i + addFactor;

              if (!pages.includes(newPage) && !excluded.includes(newPage)) {
                pages.push(newPage);
              }
            }

            pages.sort(function (a, b) {
              return a - b;
            });
            return pages;
          }
        }, {
          key: "totalItems",
          get: function get() {
            if (!this.isPaginatable) return 1;
            return this.resultsMeta.count;
          }
        }, {
          key: "scrollPage",
          value: function scrollPage(addPage) {
            var tempvalue = addPage + this.selectedPage;

            if (tempvalue > this.totalPages) {
              tempvalue = this.totalPages;
            } else if (tempvalue < 1) {
              tempvalue = 1;
            }

            this.selectPage(tempvalue);
          }
        }, {
          key: "totalPages",
          get: function get() {
            if (!this.isPaginatable) return 1;
            return Math.ceil(this.resultsMeta.count / this.pageSize);
          }
        }, {
          key: "isPaginationActive",
          get: function get() {
            if (!this.isPaginatable) return false; // return 

            return this.hasNext || this.hasPrev;
          }
        }, {
          key: "hasNext",
          get: function get() {
            if (!this.isPaginatable) return false;
            return this.resultsMeta.next != undefined;
          }
        }, {
          key: "hasPrev",
          get: function get() {
            if (!this.isPaginatable) return false;
            return this.resultsMeta.prev != undefined;
          }
        }, {
          key: "isPaginatable",
          get: function get() {
            if (!this.resultsMeta) return false;
            return this.resultsMeta.hasOwnProperty("next") || this.resultsMeta.hasOwnProperty("prev");
          }
        }, {
          key: "selectPage",
          value: function selectPage(page) {
            if (this.selectedPage == page) return;
            this.onPageSelect.emit(page); // this.selectedPage = page
            // console.log(`Selected page ${page}`)
          }
        }, {
          key: "checkIsSelected",
          value: function checkIsSelected(page) {
            return this.selectedPage == page;
          }
        }]);

        return _MypaginationComponent;
      }();

      _MypaginationComponent.ɵfac = function MypaginationComponent_Factory(t) {
        return new (t || _MypaginationComponent)();
      };

      _MypaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MypaginationComponent,
        selectors: [["app-mypagination"]],
        inputs: {
          resultsMeta: "resultsMeta",
          selectedPage: "selectedPage",
          pageSize: "pageSize",
          totalDisplayedPAges: "totalDisplayedPAges"
        },
        outputs: {
          onPageSelect: "onPageSelect"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "col-12", "d-flex", "justify-content-center", "mt-2"], [1, "row", "justify-content-center"], ["aria-label", "Page navigation"], ["class", "pagination", 4, "ngIf"], [1, "item-count"], [1, "pagination"], [1, "btn", "page-link", 3, "disabled", "click"], [1, "btn", "page-link", 3, "click"], ["class", "btn page-link", 3, "disabled", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "btn page-link", 4, "ngIf"], [1, "btn", "page-link", 3, "disabled"], [1, "btn", "page-link"]],
        template: function MypaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MypaginationComponent_ul_3_Template, 16, 12, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPaginationActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalItems, " Items ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: ["*[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.page-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.item-count[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  font-size: 11px;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #245FB9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHFEQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0kscURBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKIiwiZmlsZSI6Im15cGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnBhZ2UtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS1jb3VudCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zLTUwMFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5wYWdlLWxpbmsge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fucy01MDBcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NUZCOSAgIWltcG9ydGFudDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    31005: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableLoaderComponent": function TableLoaderComponent() {
          return (
            /* binding */
            _TableLoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TableLoaderComponent = /*#__PURE__*/function () {
        function _TableLoaderComponent() {
          _classCallCheck(this, _TableLoaderComponent);
        }

        _createClass(_TableLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TableLoaderComponent;
      }();

      _TableLoaderComponent.ɵfac = function TableLoaderComponent_Factory(t) {
        return new (t || _TableLoaderComponent)();
      };

      _TableLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TableLoaderComponent,
        selectors: [["app-table-loader"]],
        decls: 4,
        vars: 0,
        consts: [[1, "con", "d-flex", "justify-content-center"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function TableLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".con[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100vw !important;\n  height: 100vh !important;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #245FB9;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLG9EQUFBO0VBQ0EsNENBQUE7QUFESjs7QUFJRTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJRTtFQUNFO0lBQVcsMkJBQUE7RUFBYjtFQUNFO0lBQU0sMkJBQUE7RUFFUjtBQUNGOztBQUFFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLDJCQUFBO0VBRUo7RUFESTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUFHSjtBQUNGIiwiZmlsZSI6InRhYmxlLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG4uc3Bpbm5lciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDVGQjk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUgeyBcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIH0gNTAlIHsgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    15609: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableServiceService": function TableServiceService() {
          return (
            /* binding */
            _TableServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services */
      21866);

      var _TableServiceService = /*#__PURE__*/function () {
        function _TableServiceService(_httpService) {
          _classCallCheck(this, _TableServiceService);

          this._httpService = _httpService;
          this.getFilters$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.actionListeners = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_TableServiceService, [{
          key: "getList",
          value: function getList(typeUrl, page_size, page, filters, searchInput, append) {
            return this._httpService.get("".concat(typeUrl).concat(append ? '&' : '?', "page_size=").concat(page_size, "&page=").concat(page, "&").concat(filters));
          }
        }, {
          key: "getJoinedFilters",
          value: function getJoinedFilters(data) {
            this.getFilters$.emit(data);
          }
        }, {
          key: "doAction",
          value: function doAction(action, data) {
            this.actionListeners.emit({
              action: action,
              data: data
            });
          }
        }]);

        return _TableServiceService;
      }();

      _TableServiceService.ɵfac = function TableServiceService_Factory(t) {
        return new (t || _TableServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__.HttpService));
      };

      _TableServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TableServiceService,
        factory: _TableServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    87879: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesModule": function TablesModule() {
          return (
            /* binding */
            _TablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-table-header/basic-table-header.component */
      90139);
      /* harmony import */


      var _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-table-cell/basic-table-cell.component */
      4767);
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mypagination/mypagination.component */
      81417);
      /* harmony import */


      var _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./table-loader/table-loader.component */
      31005);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _changelog_table_changelog_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./changelog-table/changelog-table.component */
      36011);
      /* harmony import */


      var _changelog_table_cell_changelog_table_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./changelog-table-cell/changelog-table-cell.component */
      88414);
      /* harmony import */


      var _chnagelog_table_header_changelog_table_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chnagelog-table-header/changelog-table-header.component */
      64237);
      /* harmony import */


      var _checked_table_checked_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./checked-table/checked-table.component */
      13353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TablesModule = function _TablesModule() {
        _classCallCheck(this, _TablesModule);
      };

      _TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || _TablesModule)();
      };

      _TablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _TablesModule
      });
      _TablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_TablesModule, {
          declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableHeaderComponent, _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__.BasicTableCellComponent, _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_3__.MypaginationComponent, _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__.TableLoaderComponent, _changelog_table_changelog_table_component__WEBPACK_IMPORTED_MODULE_5__.ChangelogTableComponent, _changelog_table_cell_changelog_table_cell_component__WEBPACK_IMPORTED_MODULE_6__.ChangelogTableCellComponent, _chnagelog_table_header_changelog_table_header_component__WEBPACK_IMPORTED_MODULE_7__.ChangeLogTableHeaderComponent, _checked_table_checked_table_component__WEBPACK_IMPORTED_MODULE_8__.CheckedTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
          exports: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _table_loader_table_loader_component__WEBPACK_IMPORTED_MODULE_4__.TableLoaderComponent, _basic_table_header_basic_table_header_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableHeaderComponent, _basic_table_cell_basic_table_cell_component__WEBPACK_IMPORTED_MODULE_2__.BasicTableCellComponent, _changelog_table_changelog_table_component__WEBPACK_IMPORTED_MODULE_5__.ChangelogTableComponent, _checked_table_checked_table_component__WEBPACK_IMPORTED_MODULE_8__.CheckedTableComponent]
        });
      })();
      /***/

    },

    /***/
    83950: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastNotificationsComponent": function ToastNotificationsComponent() {
          return (
            /* binding */
            _ToastNotificationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _toast_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast-notifications.service */
      85349);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "info": a0,
          "warning": a1,
          "success": a2
        };
      };

      function ToastNotificationsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastNotificationsComponent_div_1_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var indexOfelement_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.closeToast(indexOfelement_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, message_r1.style == "info", message_r1.style == "danger", message_r1.style == "success"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r1.message, " ");
        }
      }

      var _ToastNotificationsComponent = /*#__PURE__*/function () {
        function _ToastNotificationsComponent(toastService) {
          _classCallCheck(this, _ToastNotificationsComponent);

          this.toastService = toastService;
          this._toasts = [];
          this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEdit;
        }

        _createClass(_ToastNotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.toastService.toasts.subscribe(function (response) {
              _this25._toasts = response;
              console.log(response);
            }); // this.toastService.update("Message1", "info")
          }
        }, {
          key: "closeToast",
          value: function closeToast(index) {
            console.log(index);
            this.toastService.removeToast(index);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._toasts = [];
            this.toastService.toasts.unsubscribe();
          }
        }]);

        return _ToastNotificationsComponent;
      }();

      _ToastNotificationsComponent.ɵfac = function ToastNotificationsComponent_Factory(t) {
        return new (t || _ToastNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_notifications_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsService));
      };

      _ToastNotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ToastNotificationsComponent,
        selectors: [["app-toast-notifications"]],
        decls: 2,
        vars: 1,
        consts: [[1, "position-absolute", "bottom-0", "right-0", "p-3", "toast-container", 2, "z-index", "3000"], ["id", "liveToast", "class", "toast show", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 4, "ngFor", "ngForOf"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "show"], [1, "toast-body", 3, "ngClass"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "ml-2", "mb-1", "close", 3, "click"], ["aria-hidden", "true"]],
        template: function ToastNotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastNotificationsComponent_div_1_Template, 7, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._toasts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: ["p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.success[_ngcontent-%COMP%] {\n  background-color: #007700;\n}\n.info[_ngcontent-%COMP%] {\n  background-color: #036FB6;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #e63757;\n}\n.toast-container[_ngcontent-%COMP%] {\n  z-index: 5;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwidG9hc3Qtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQzNCQTtFQUNJLGNEVVU7QUNQZDtBQURBO0VBQ0kseUJETVk7QUNGaEI7QUFGQTtFQUNJLHlCRERZO0FDTWhCO0FBSEE7RUFDSSx5QkREWTtBQ09oQjtBQUpBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBT0oiLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIlxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJzXCI7XG5cbnAge1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG59XG4uc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3N1Y2Nlc3M7XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG59XG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3dhcm5pbmc7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiA1OyBcbiAgICByaWdodDogMDsgXG4gICAgYm90dG9tOiAwO1xufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    99138: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastNotificationsModule": function ToastNotificationsModule() {
          return (
            /* binding */
            _ToastNotificationsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _toast_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast-notifications.component */
      83950);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ToastNotificationsModule = function _ToastNotificationsModule() {
        _classCallCheck(this, _ToastNotificationsModule);
      };

      _ToastNotificationsModule.ɵfac = function ToastNotificationsModule_Factory(t) {
        return new (t || _ToastNotificationsModule)();
      };

      _ToastNotificationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ToastNotificationsModule
      });
      _ToastNotificationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ToastNotificationsModule, {
          declarations: [_toast_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule],
          exports: [_toast_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationsComponent]
        });
      })();
      /***/

    },

    /***/
    85349: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastNotificationsService": function ToastNotificationsService() {
          return (
            /* binding */
            _ToastNotificationsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ToastNotificationsService = /*#__PURE__*/function () {
        function _ToastNotificationsService() {
          _classCallCheck(this, _ToastNotificationsService);

          this.toastData = [];
          this.toasts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.toastData);
        }

        _createClass(_ToastNotificationsService, [{
          key: "showToast",
          value: function showToast(message, style) {
            var _this26 = this;

            var data = {
              message: message,
              style: style
            };
            this.toastData = [data].concat(_toConsumableArray(this.toastData));
            this.toasts.next(this.toastData);
            setTimeout(function () {
              _this26.toastData.pop();

              _this26.toasts.next(_this26.toastData);
            }, 5000);
          }
        }, {
          key: "removeToast",
          value: function removeToast(index) {
            this.toastData.splice(index, 1);
            this.toasts.next(this.toastData);
          }
        }, {
          key: "getToast",
          value: function getToast() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.toastData);
          }
        }]);

        return _ToastNotificationsService;
      }();

      _ToastNotificationsService.ɵfac = function ToastNotificationsService_Factory(t) {
        return new (t || _ToastNotificationsService)();
      };

      _ToastNotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ToastNotificationsService,
        factory: _ToastNotificationsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      //TODO -> Pull the environments from a dotenv for security purposes


      var _environment = {
        production: false,
        APIEndpoint: 'http://139.162.139.67:8000/',
        APIv1Endpoint: 'http://139.162.139.67:8000/api/v1/',
        //APIEndpoint: 'http://localhost:8000/',
        //  APIv1Endpoint: 'http://localhost:8000/api/v1/', 
        APIClientID: 'fbaPXGrD6wewVEqoOkJfvierIrYbnROPXMa8CDv5'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map