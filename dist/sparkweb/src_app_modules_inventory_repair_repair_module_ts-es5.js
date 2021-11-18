(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksparkweb"] = self["webpackChunksparkweb"] || []).push([["src_app_modules_inventory_repair_repair_module_ts"], {
    /***/
    5815: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollectAtStorreComponent": function CollectAtStorreComponent() {
          return (
            /* binding */
            _CollectAtStorreComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/card/card.component */
      53949);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);

      function CollectAtStorreComponent_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](type_r6);
        }
      }

      function CollectAtStorreComponent_ng_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var customer_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", customer_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r7.name);
        }
      }

      function CollectAtStorreComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 24);
        }
      }

      function CollectAtStorreComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function CollectAtStorreComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectAtStorreComponent_div_19_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.repair_form.controls["customer"].errors.required);
        }
      }

      function CollectAtStorreComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.api_errors.customer, " ");
        }
      }

      function CollectAtStorreComponent_div_52_div_4_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var condition_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", condition_r13.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](condition_r13.name);
        }
      }

      function CollectAtStorreComponent_div_52_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CollectAtStorreComponent_div_52_div_4_option_9_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.conditions);
        }
      }

      function CollectAtStorreComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CollectAtStorreComponent_div_52_div_4_Template, 12, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var box_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](box_r9["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", box_r9["items"]);
        }
      }

      var _CollectAtStorreComponent = /*#__PURE__*/function () {
        function _CollectAtStorreComponent(_formService, _toastService) {
          _classCallCheck(this, _CollectAtStorreComponent);

          this._formService = _formService;
          this._toastService = _toastService;
          this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch;
          this.boxes = [];
          this.conditions = [{
            name: "Good",
            id: 1
          }, {
            name: "Damaged",
            id: 2
          }];
          this.types = ['Repair', 'Repossession'];
          this.api_errors = [];
          this.customers = [];
          this.customers_loading = true;
          this.repair_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            customer_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            boxes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
          });
        }

        _createClass(_CollectAtStorreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFields();
          }
        }, {
          key: "loadFields",
          value: function loadFields() {
            var _this = this;

            //get customers
            this._formService.getDropdownValues("customers").subscribe(function (response) {
              _this.customers_loading = false;
              _this.customers = response.results;
            }, function (err) {
              _this.customers_loading = false;
            });
          }
        }, {
          key: "fetchCustomerBox",
          value: function fetchCustomerBox() {// this._formService.getDropdownValues(`customers/product`).subscribe(
            //   response => {
            //     this.customers_loading = false;
            //     this.customers = response.results;
            //   },
            //   err => {
            //     this.customers_loading = false;
            //   }
            // );
          }
        }, {
          key: "changeCustomer",
          value: function changeCustomer() {
            var _this2 = this;

            this.boxes = [];
            var bxs = [{
              name: "Battery Box",
              items: [{
                name: "12v Battery",
                present: false,
                condition: 2,
                description: ""
              }, {
                name: "Lamp",
                present: true,
                condition: 1,
                description: ""
              }]
            }, {
              name: "TV Box",
              items: [{
                name: "24' TV",
                present: false,
                condition: 1,
                description: ""
              }, {
                name: "Antenna",
                present: true,
                condition: 2,
                description: ""
              }]
            }, {
              name: "Woofer Box",
              items: [{
                name: "Woofer",
                present: false,
                condition: 1,
                description: ""
              }, {
                name: "Remote",
                present: true,
                condition: 2,
                description: ""
              }]
            }];

            for (var i = 0; i < 2; i++) {
              var b = bxs[Math.floor(Math.random() * bxs.length)];
              this.boxes.push(b);
            } // this.boxes = bxs[Math.floor(Math.random()*bxs.length)];


            this.customers.forEach(function (customer) {
              var _a, _b, _c, _d, _e, _f;

              if (customer['id'] === ((_a = _this2.repair_form.get('customer')) === null || _a === void 0 ? void 0 : _a.value)) {
                console.log(customer);
                (_b = _this2.repair_form.get('customer_name')) === null || _b === void 0 ? void 0 : _b.setValue(customer['name']);
                (_c = _this2.repair_form.get('phone_number')) === null || _c === void 0 ? void 0 : _c.setValue(customer['contact_number']);
                (_d = _this2.repair_form.get('id')) === null || _d === void 0 ? void 0 : _d.setValue(customer['id_number']);
                (_e = _this2.repair_form.get('customer_number')) === null || _e === void 0 ? void 0 : _e.setValue(customer['id']);
                (_f = _this2.repair_form.get('boxes')) === null || _f === void 0 ? void 0 : _f.setValue(_this2.boxes);
              }
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            if (this.repair_form.invalid) {
              console.log(this.repair_form.errors);
            }

            console.log(this.repair_form.value);
            var data = {
              url: 'operations/',
              formData: this.repair_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this3._toastService.showToast(" CREATED SUCCESSFULLY!", "success");
            }, function (err) {
              _this3._toastService.showToast("An Error Ocurred", "danger");
            });
          }
        }]);

        return _CollectAtStorreComponent;
      }();

      _CollectAtStorreComponent.ɵfac = function CollectAtStorreComponent_Factory(t) {
        return new (t || _CollectAtStorreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationsService));
      };

      _CollectAtStorreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CollectAtStorreComponent,
        selectors: [["app-collect-at-storre"]],
        inputs: {
          customers: "customers"
        },
        decls: 60,
        vars: 7,
        consts: [[1, "mb-2"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-3"], ["formControlName", "type", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["formControlName", "customer", 3, "change"], ["class", "linear-background", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], ["formControlName", "customer_name", "type", "text", 1, "form-control", "mt-1"], ["formControlName", "phone_number", "type", "text", 1, "form-control", "mt-1"], ["formControlName", "id", "type", "text", 1, "form-control", "mt-1"], ["formControlName", "customer_number", "type", "text", 1, "form-control", "mt-1"], [1, "col-8", "offset-1"], [1, "col-2"], [1, "mt-4"], ["class", "mt-2 mb-2", 4, "ngFor", "ngForOf"], [1, "col-6", "mt-2", "mb-2"], ["formControlName", "description", "id", "", "rows", "5", 1, "form-control", "mt-2"], [1, "col-6"], ["text", "Submit"], [3, "value"], [1, "linear-background"], [1, "alert"], [1, "text-danger", "opt-value"], [1, "mt-2", "mb-2"], [1, "color:black;"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "mb-2"], [1, "col-3", "m-0", "pt-3"], [1, "col-12", "d-flex", "justify-content-between"], ["type", "checkbox"], [1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "col3"], ["type", "text", 1, "form-control"]],
        template: function CollectAtStorreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "REPAIR - COLLECT ITEMS AT STOCKROOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CollectAtStorreComponent_Template_form_ngSubmit_3_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Collection Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CollectAtStorreComponent_option_9_Template, 2, 2, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "SEARCH CUSTOMER");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "CUSTOMER NAME:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ng-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CollectAtStorreComponent_Template_ng_select_change_16_listener() {
              return ctx.changeCustomer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CollectAtStorreComponent_ng_option_17_Template, 2, 2, "ng-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CollectAtStorreComponent_span_18_Template, 1, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CollectAtStorreComponent_div_19_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CollectAtStorreComponent_div_20_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "PHONE NUMBER");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "ID NUMBER");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "CUSTOMER NUMBER");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "BOXES");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "CONDITION");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "FAULT DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, CollectAtStorreComponent_div_52_Template, 5, 2, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "textarea", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "app-default-button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.repair_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customers);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.customers_loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.repair_form.controls["customer"].invalid && (ctx.repair_form.controls["customer"].dirty || ctx.repair_form.controls["customer"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.api_errors.customer);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.boxes);
          }
        },
        directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0LWF0LXN0b3JyZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    46592: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PartUsageReportComponent": function PartUsageReportComponent() {
          return (
            /* binding */
            _PartUsageReportComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/table-service.service */
      15609);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);

      var _PartUsageReportComponent = /*#__PURE__*/function () {
        function _PartUsageReportComponent(_tableService, _modalService, route, _router, _formService, _toastService) {
          var _this4 = this;

          _classCallCheck(this, _PartUsageReportComponent);

          this._tableService = _tableService;
          this._modalService = _modalService;
          this.route = route;
          this._router = _router;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = "technical-support/";
          this.titles = [{
            title: "PART CODE",
            field: "ticket_number"
          }, {
            title: "SUPPLIER NAME",
            field: "reception_date",
            date: true
          }, {
            title: "PART DESCRIPTION",
            field: "return_datee",
            date: true
          }, {
            title: "COMMENT",
            field: "customer.id"
          }, {
            title: "NUMBER RECEIVED WARRANTY",
            field: "customer.name"
          }, {
            title: "NUMBER RECEIVED NON-WARRANTY",
            field: "item_type"
          }, {
            title: "NUMBER RECEIVED TOTAL",
            field: "item_serial"
          }, {
            title: "NUMBER USED TOTAL",
            field: "problem_description"
          }, {
            title: "NUMBER ADJUSTED WARRANTY",
            field: "repair_center"
          }, {
            title: "NUMBER ADJUSTED NON-WARRANTY",
            field: "technician"
          }, {
            title: "NUMBER ADJUSTED TOTAL",
            field: "work_done"
          }, {
            title: "BALANCE WARRANTY",
            field: "work_done"
          }, {
            title: "BALANCE NON-WARRANTY",
            field: "work_done"
          }, {
            title: "BALANCE TOTAL",
            field: "work_done"
          }, {
            title: "RE-ORDER LEVEL",
            field: "work_done"
          }, {
            title: "RE-ORDER FLAG",
            field: "work_done"
          }, {
            title: "Actions",
            field: "",
            action: true,
            actions: ["WITHHOLD PAYMENTS", "ACCOUNT STATEMENT", "ADJUSTMENTS"]
          }];
          this.users = [];
          this.users_loading = true;
          this.actionSubscribe = _tableService.actionListeners.subscribe(function (data) {
            _this4.current_item = data.data;

            switch (data.action) {
              case "UPDATE":
                _this4._modalService.open("edit-ticket");

                break;

              case "ARCHIVE":
                _this4._modalService.open("archive-box");

                break;
            }
          });
        }

        _createClass(_PartUsageReportComponent, [{
          key: "archive",
          value: function archive() {
            var _this5 = this;

            var data = {
              url: "technical-support/archive/",
              formData: {
                id: this.current_item.id
              }
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this5.cancelModal();

              _this5.reloadTable();
            }, function (err) {
              _this5._toastService.showToast("An Error Ocurred", "danger");
            });
          }
        }, {
          key: "reloadTable",
          value: function reloadTable() {
            this.table.getTableData();
          }
        }, {
          key: "syncAngaza",
          value: function syncAngaza() {}
        }, {
          key: "cancelModal",
          value: function cancelModal() {
            this._modalService.closeAll();
          }
        }, {
          key: "createTicket",
          value: function createTicket() {
            this._modalService.open("ticket");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.actionSubscribe]; //other subsciptions this.actionsSubscription, this.deleteSubscription, 

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PartUsageReportComponent;
      }();

      _PartUsageReportComponent.ɵfac = function PartUsageReportComponent_Factory(t) {
        return new (t || _PartUsageReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__.TableServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationsService));
      };

      _PartUsageReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PartUsageReportComponent,
        selectors: [["app-part-usage-report"]],
        viewQuery: function PartUsageReportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 6,
        vars: 2,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "", 1, "mr-4", 3, "action"], [3, "titles", "url"]],
        template: function PartUsageReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "REPAIR CENTER-PART USAGE REPORT");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PartUsageReportComponent_Template_app_default_button_action_4_listener() {
              return ctx.createTicket();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0LXVzYWdlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    58503: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PartsAdjustmentsComponent": function PartsAdjustmentsComponent() {
          return (
            /* binding */
            _PartsAdjustmentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/table-service.service */
      15609);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);

      var _PartsAdjustmentsComponent = /*#__PURE__*/function () {
        function _PartsAdjustmentsComponent(_tableService, _modalService, route, _router, _formService, _toastService) {
          var _this6 = this;

          _classCallCheck(this, _PartsAdjustmentsComponent);

          this._tableService = _tableService;
          this._modalService = _modalService;
          this.route = route;
          this._router = _router;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = "technical-support/";
          this.titles = [{
            title: "PART CODE",
            field: "ticket_number"
          }, {
            title: "SUPPLIER NAME",
            field: "reception_date"
          }, {
            title: "PART DESCRIPTION",
            field: "return_datee"
          }, {
            title: "PART COMMENT",
            field: "customer.id"
          }, {
            title: "NUMBER ADJUSTED WARRANTY",
            field: "customer.name"
          }, {
            title: "NUMBER ADJUSTED NON-WARRANTY",
            field: "item_type"
          }, {
            title: "DATE",
            field: "item_serial",
            date: true
          }, {
            title: "COMMNET",
            field: "repair_center"
          }, {
            title: "Actions",
            field: "",
            action: true,
            actions: ["WITHHOLD PAYMENTS", "ACCOUNT STATEMENT", "ADJUSTMENTS"]
          }];
          this.users = [];
          this.users_loading = true;
          this.actionSubscribe = _tableService.actionListeners.subscribe(function (data) {
            _this6.current_item = data.data;

            switch (data.action) {
              case "UPDATE":
                _this6._modalService.open("edit-ticket");

                break;

              case "ARCHIVE":
                _this6._modalService.open("archive-box");

                break;
            }
          });
        }

        _createClass(_PartsAdjustmentsComponent, [{
          key: "archive",
          value: function archive() {
            var _this7 = this;

            var data = {
              url: "technical-support/archive/",
              formData: {
                id: this.current_item.id
              }
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this7.cancelModal();

              _this7.reloadTable();
            }, function (err) {
              _this7._toastService.showToast("An Error Ocurred", "danger");
            });
          }
        }, {
          key: "reloadTable",
          value: function reloadTable() {
            this.table.getTableData();
          }
        }, {
          key: "syncAngaza",
          value: function syncAngaza() {}
        }, {
          key: "cancelModal",
          value: function cancelModal() {
            this._modalService.closeAll();
          }
        }, {
          key: "createTicket",
          value: function createTicket() {
            this._modalService.open("ticket");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.actionSubscribe]; //other subsciptions this.actionsSubscription, this.deleteSubscription, 

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PartsAdjustmentsComponent;
      }();

      _PartsAdjustmentsComponent.ɵfac = function PartsAdjustmentsComponent_Factory(t) {
        return new (t || _PartsAdjustmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__.TableServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationsService));
      };

      _PartsAdjustmentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PartsAdjustmentsComponent,
        selectors: [["app-parts-adjustments"]],
        viewQuery: function PartsAdjustmentsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 6,
        vars: 2,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "ADJUST", 1, "mr-4", 3, "action"], [3, "titles", "url"]],
        template: function PartsAdjustmentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "REPAIR CENTER-PARTS ADJUSTMENTS VIEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PartsAdjustmentsComponent_Template_app_default_button_action_4_listener() {
              return ctx.createTicket();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0cy1hZGp1c3RtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    48697: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PartsReceivedComponent": function PartsReceivedComponent() {
          return (
            /* binding */
            _PartsReceivedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/table-service.service */
      15609);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);

      var _PartsReceivedComponent = /*#__PURE__*/function () {
        function _PartsReceivedComponent(_tableService, _modalService, route, _router, _formService, _toastService) {
          var _this8 = this;

          _classCallCheck(this, _PartsReceivedComponent);

          this._tableService = _tableService;
          this._modalService = _modalService;
          this.route = route;
          this._router = _router;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = "technical-support/";
          this.titles = [{
            title: "PART CODE",
            field: "ticket_number"
          }, {
            title: "SUPPLIER NAME",
            field: "reception_date"
          }, {
            title: "PART DESCRIPTION",
            field: "return_datee"
          }, {
            title: "PART COMMENT",
            field: "customer.id"
          }, {
            title: "NUMBER RECEIVED WARRANTY",
            field: "customer.name"
          }, {
            title: "NUMBER RECEIVED NON-WARRANTY",
            field: "item_type"
          }, {
            title: "DATE OF RECEIPT",
            field: "item_serial",
            date: true
          }, {
            title: "P.0",
            field: "problem_description"
          }, {
            title: "COMMNET",
            field: "repair_center"
          }];
          this.users = [];
          this.users_loading = true;
          this.actionSubscribe = _tableService.actionListeners.subscribe(function (data) {
            _this8.current_item = data.data;

            switch (data.action) {
              case "UPDATE":
                _this8._modalService.open("edit-ticket");

                break;

              case "ARCHIVE":
                _this8._modalService.open("archive-box");

                break;
            }
          });
        }

        _createClass(_PartsReceivedComponent, [{
          key: "archive",
          value: function archive() {
            var _this9 = this;

            var data = {
              url: "technical-support/archive/",
              formData: {
                id: this.current_item.id
              }
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this9.cancelModal();

              _this9.reloadTable();
            }, function (err) {
              _this9._toastService.showToast("An Error Ocurred", "danger");
            });
          }
        }, {
          key: "reloadTable",
          value: function reloadTable() {
            this.table.getTableData();
          }
        }, {
          key: "syncAngaza",
          value: function syncAngaza() {}
        }, {
          key: "cancelModal",
          value: function cancelModal() {
            this._modalService.closeAll();
          }
        }, {
          key: "createTicket",
          value: function createTicket() {
            this._modalService.open("ticket");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.actionSubscribe]; //other subsciptions this.actionsSubscription, this.deleteSubscription, 

            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PartsReceivedComponent;
      }();

      _PartsReceivedComponent.ɵfac = function PartsReceivedComponent_Factory(t) {
        return new (t || _PartsReceivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_tables_table_service_service__WEBPACK_IMPORTED_MODULE_1__.TableServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationsService));
      };

      _PartsReceivedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PartsReceivedComponent,
        selectors: [["app-parts-received"]],
        viewQuery: function PartsReceivedComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 6,
        vars: 2,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "CHECK IN", 1, "mr-4", 3, "action"], [3, "titles", "url"]],
        template: function PartsReceivedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "REPAIR CENTRE-PARTS RECEIPT VIEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PartsReceivedComponent_Template_app_default_button_action_4_listener() {
              return ctx.createTicket();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_5__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0cy1yZWNlaXZlZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    99496: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepairRoutes": function RepairRoutes() {
          return (
            /* binding */
            _RepairRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _collect_at_storre_collect_at_storre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collect-at-storre/collect-at-storre.component */
      5815);
      /* harmony import */


      var _part_usage_report_part_usage_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./part-usage-report/part-usage-report.component */
      46592);
      /* harmony import */


      var _parts_adjustments_parts_adjustments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parts-adjustments/parts-adjustments.component */
      58503);
      /* harmony import */


      var _parts_received_parts_received_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parts-received/parts-received.component */
      48697);

      var _RepairRoutes = [{
        path: 'collect-at-store',
        component: _collect_at_storre_collect_at_storre_component__WEBPACK_IMPORTED_MODULE_0__.CollectAtStorreComponent,
        data: {
          breadcrumb: 'Collect at Store'
        }
      }, {
        path: 'part-usage-report',
        component: _part_usage_report_part_usage_report_component__WEBPACK_IMPORTED_MODULE_1__.PartUsageReportComponent,
        data: {
          breadcrumb: 'Part Usage Report'
        }
      }, {
        path: 'parts-adjustment',
        component: _parts_adjustments_parts_adjustments_component__WEBPACK_IMPORTED_MODULE_2__.PartsAdjustmentsComponent,
        data: {
          breadcrumb: 'Parts Adjustment'
        }
      }, {
        path: 'parts-received',
        component: _parts_received_parts_received_component__WEBPACK_IMPORTED_MODULE_3__.PartsReceivedComponent,
        data: {
          breadcrumb: 'Parts Received'
        }
      }];
      /***/
    },

    /***/
    28331: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepairModule": function RepairModule() {
          return (
            /* binding */
            _RepairModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _collect_at_storre_collect_at_storre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collect-at-storre/collect-at-storre.component */
      5815);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _repair_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./repair-routing.module */
      99496);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      52334);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _part_usage_report_part_usage_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./part-usage-report/part-usage-report.component */
      46592);
      /* harmony import */


      var _parts_received_parts_received_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./parts-received/parts-received.component */
      48697);
      /* harmony import */


      var _parts_adjustments_parts_adjustments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parts-adjustments/parts-adjustments.component */
      58503);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RepairModule = function _RepairModule() {
        _classCallCheck(this, _RepairModule);
      };

      _RepairModule.ɵfac = function RepairModule_Factory(t) {
        return new (t || _RepairModule)();
      };

      _RepairModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _RepairModule
      });
      _RepairModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_repair_routing_module__WEBPACK_IMPORTED_MODULE_1__.RepairRoutes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_RepairModule, {
          declarations: [_collect_at_storre_collect_at_storre_component__WEBPACK_IMPORTED_MODULE_0__.CollectAtStorreComponent, _part_usage_report_part_usage_report_component__WEBPACK_IMPORTED_MODULE_3__.PartUsageReportComponent, _parts_received_parts_received_component__WEBPACK_IMPORTED_MODULE_4__.PartsReceivedComponent, _parts_adjustments_parts_adjustments_component__WEBPACK_IMPORTED_MODULE_5__.PartsAdjustmentsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_inventory_repair_repair_module_ts-es5.js.map