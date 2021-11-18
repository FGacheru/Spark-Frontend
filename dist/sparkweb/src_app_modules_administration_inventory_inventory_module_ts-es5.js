(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksparkweb"] = self["webpackChunksparkweb"] || []).push([["src_app_modules_administration_inventory_inventory_module_ts"], {
    /***/
    44178: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoxsComponent": function BoxsComponent() {
          return (
            /* binding */
            _BoxsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/ng-multi-select/multi-select.component */
      60515);

      function BoxsComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function BoxsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoxsComponent_div_14_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.add_box_config_form.controls["name"].errors.required);
        }
      }

      function BoxsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function BoxsComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function BoxsComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoxsComponent_div_20_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.add_box_config_form.controls["name"].errors.required);
        }
      }

      function BoxsComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.items, " ");
        }
      }

      function BoxsComponent_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function BoxsComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoxsComponent_div_27_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.add_box_config_form.controls["description"].errors.required);
        }
      }

      function BoxsComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.api_errors.description, " ");
        }
      }

      var _BoxsComponent = /*#__PURE__*/function () {
        function _BoxsComponent(_modalService, _formService, _toastService) {
          _classCallCheck(this, _BoxsComponent);

          this._modalService = _modalService;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = 'box-configs/';
          this.titles = [{
            title: 'DB ID',
            field: 'id'
          }, {
            title: 'Name',
            field: 'name'
          }, {
            title: 'Description',
            field: 'description'
          }, {
            title: 'Item Count',
            field: 'items_details.length',
            calculated: true
          }];
          this.api_errors = [];
          this.add_box_config_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            items: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
          });
        }

        _createClass(_BoxsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            //validate
            this.add_box_config_form.markAllAsTouched();
            if (this.add_box_config_form.invalid) return; //submit

            var data = {
              url: "".concat(this.url),
              formData: this.add_box_config_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this.add_box_config_form.reset();

              _this.cancel();

              _this.table.getTableData();
            }, function (err) {
              _this._toastService.showToast("An Error Ocurred", "danger");

              _this.api_errors = err.error;
            });
          } //modal

        }, {
          key: "openAdd",
          value: function openAdd() {
            this._modalService.open('add-box-config');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._modalService.remove('add-box-config');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-box-config');
          }
        }]);

        return _BoxsComponent;
      }();

      _BoxsComponent.ɵfac = function BoxsComponent_Factory(t) {
        return new (t || _BoxsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationsService));
      };

      _BoxsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _BoxsComponent,
        selectors: [["app-boxs"]],
        viewQuery: function BoxsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 32,
        vars: 10,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"], ["id", "add-box-config", "width", "25%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], ["formControlName", "items"], ["cols", "4", "rows", "8", "type", "description", "formControlName", "description", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function BoxsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "BOX CONFIGURATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function BoxsComponent_Template_app_default_button_action_4_listener() {
              return ctx.openAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-basic-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "jw-modal", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "ADD BOX CONFIGURATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function BoxsComponent_Template_form_ngSubmit_9_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, BoxsComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, BoxsComponent_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "ITEM TYPES");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-multi-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, BoxsComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, BoxsComponent_div_21_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, BoxsComponent_div_27_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, BoxsComponent_div_28_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "app-default-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function BoxsComponent_Template_app_default_button_action_30_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "app-default-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.add_box_config_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_box_config_form.controls["name"].invalid && (ctx.add_box_config_form.controls["name"].dirty || ctx.add_box_config_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_box_config_form.controls["items"].invalid && (ctx.add_box_config_form.controls["items"].dirty || ctx.add_box_config_form.controls["items"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_box_config_form.controls["description"].invalid && (ctx.add_box_config_form.controls["description"].dirty || ctx.add_box_config_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.MultiSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3hzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    24504: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryModule": function InventoryModule() {
          return (
            /* binding */
            _InventoryModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _invetory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invetory-routing.module */
      54603);
      /* harmony import */


      var _items_type_config_item_type_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./items-type-config/item-type-config.component */
      37070);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _boxs_boxs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./boxs/boxs.component */
      44178);
      /* harmony import */


      var _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./price-group/price-group.component */
      90942);
      /* harmony import */


      var _price_group_add_price_group_add_price_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./price-group/add-price-group/add-price-group.component */
      50565);
      /* harmony import */


      var _pay_go_providers_pay_go_providers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pay-go-providers/pay-go-providers.component */
      96245);
      /* harmony import */


      var _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./suppliers/suppliers.component */
      43994);
      /* harmony import */


      var _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./product-type/product-type.component */
      88735);
      /* harmony import */


      var _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./item-config/item-config.component */
      9103);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InventoryModule = function _InventoryModule() {
        _classCallCheck(this, _InventoryModule);
      };

      _InventoryModule.ɵfac = function InventoryModule_Factory(t) {
        return new (t || _InventoryModule)();
      };

      _InventoryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _InventoryModule
      });
      _InventoryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_invetory_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministrationInvetoryRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_InventoryModule, {
          declarations: [_items_type_config_item_type_config_component__WEBPACK_IMPORTED_MODULE_1__.ItemsTypeConfigComponent, _boxs_boxs_component__WEBPACK_IMPORTED_MODULE_3__.BoxsComponent, _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_4__.PriceGroupComponent, _price_group_add_price_group_add_price_group_component__WEBPACK_IMPORTED_MODULE_5__.AddPriceGroupComponent, _pay_go_providers_pay_go_providers_component__WEBPACK_IMPORTED_MODULE_6__.PayGoProvidersComponent, _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_7__.SuppliersComponent, _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_8__.ProductTypeComponent, _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_9__.ItemConfigComponent],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    54603: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdministrationInvetoryRoutes": function AdministrationInvetoryRoutes() {
          return (
            /* binding */
            _AdministrationInvetoryRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _boxs_boxs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./boxs/boxs.component */
      44178);
      /* harmony import */


      var _items_type_config_item_type_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./items-type-config/item-type-config.component */
      37070);
      /* harmony import */


      var _pay_go_providers_pay_go_providers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pay-go-providers/pay-go-providers.component */
      96245);
      /* harmony import */


      var _price_group_add_price_group_add_price_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./price-group/add-price-group/add-price-group.component */
      50565);
      /* harmony import */


      var _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./price-group/price-group.component */
      90942);
      /* harmony import */


      var _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-type/product-type.component */
      88735);
      /* harmony import */


      var _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./suppliers/suppliers.component */
      43994);
      /* harmony import */


      var _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-config/item-config.component */
      9103);

      var _AdministrationInvetoryRoutes = [{
        path: 'item-type-config',
        data: {
          breadcrumb: 'Items Type Config'
        },
        component: _items_type_config_item_type_config_component__WEBPACK_IMPORTED_MODULE_1__.ItemsTypeConfigComponent
      }, {
        path: 'item-config',
        data: {
          breadcrumb: 'Items Config'
        },
        component: _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_7__.ItemConfigComponent
      }, {
        path: 'boxs',
        data: {
          breadcrumb: 'Box'
        },
        component: _boxs_boxs_component__WEBPACK_IMPORTED_MODULE_0__.BoxsComponent
      }, {
        path: 'price-group',
        data: {
          breadcrumb: 'Price Group'
        },
        component: _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_4__.PriceGroupComponent
      }, {
        path: 'add-price-group',
        data: {
          breadcrumb: 'Add Price Group'
        },
        component: _price_group_add_price_group_add_price_group_component__WEBPACK_IMPORTED_MODULE_3__.AddPriceGroupComponent
      }, {
        path: 'pay-go-providers',
        data: {
          breadcrumb: 'Pay Go Providers'
        },
        component: _pay_go_providers_pay_go_providers_component__WEBPACK_IMPORTED_MODULE_2__.PayGoProvidersComponent
      }, {
        path: 'suppliers',
        data: {
          breadcrumb: 'Suppliers'
        },
        component: _suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_6__.SuppliersComponent
      }, {
        path: 'product-type',
        data: {
          breadcrumb: 'Product Config'
        },
        component: _product_type_product_type_component__WEBPACK_IMPORTED_MODULE_5__.ProductTypeComponent
      }];
      /***/
    },

    /***/
    9103: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemConfigComponent": function ItemConfigComponent() {
          return (
            /* binding */
            _ItemConfigComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/ng-multi-select/multi-select.component */
      60515);

      function ItemConfigComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ItemConfigComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ItemConfigComponent_div_14_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.add_item_config_form.controls["name"].errors.required);
        }
      }

      function ItemConfigComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function ItemConfigComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ItemConfigComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ItemConfigComponent_div_20_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.add_item_config_form.controls["type_tmp"].errors.required);
        }
      }

      function ItemConfigComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.type, " ");
        }
      }

      function ItemConfigComponent_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ItemConfigComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ItemConfigComponent_div_27_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.add_item_config_form.controls["description"].errors.required);
        }
      }

      function ItemConfigComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.api_errors.description, " ");
        }
      }

      var _ItemConfigComponent = /*#__PURE__*/function () {
        function _ItemConfigComponent(_modalService, _formService, _toastService) {
          _classCallCheck(this, _ItemConfigComponent);

          this._modalService = _modalService;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = 'item-configs/';
          this.api_errors = [];
          this.titles = [{
            title: 'DB ID',
            field: 'id'
          }, {
            title: 'Name',
            field: 'name'
          }, {
            title: 'TYPE',
            field: 'type_name'
          }, {
            title: 'Description',
            field: 'description'
          }];
          this.item_type_config = {
            "type": "field",
            "required": true,
            "read_only": false,
            "label": "Items Type",
            "display_name": "name",
            "value_field": "id",
            "multiple": false,
            "url": "item-type-configs/",
            "search_field": "name",
            "args": "users",
            "edit_source_field": "items_details",
            "edit_display_name": "item_name",
            "res_value_field": "item_type",
            "isMap": false,
            "count": false
          };
          this.add_item_config_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            type_tmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
          });
        }

        _createClass(_ItemConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openEdit",
          value: function openEdit() {
            this._modalService.open('add-item-config');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._modalService.remove('add-item-config');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-item-config');
          }
        }, {
          key: "onSubmitAdd",
          value: function onSubmitAdd() {
            var _this2 = this;

            var _a, _b;

            console.log();
            this.add_item_config_form.markAllAsTouched();
            if (this.add_item_config_form.invalid) return;
            (_a = this.add_item_config_form.get('type')) === null || _a === void 0 ? void 0 : _a.setValue((_b = this.add_item_config_form.get('type_tmp')) === null || _b === void 0 ? void 0 : _b.value[0].id);
            var data = {
              url: this.url,
              formData: this.add_item_config_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this2.add_item_config_form.reset();

              _this2.cancel();

              _this2.table.getTableData();
            }, function (err) {
              _this2._toastService.showToast("An Error Ocurred", "danger");

              _this2.api_errors = err.error;
            });
          }
        }]);

        return _ItemConfigComponent;
      }();

      _ItemConfigComponent.ɵfac = function ItemConfigComponent_Factory(t) {
        return new (t || _ItemConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationsService));
      };

      _ItemConfigComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ItemConfigComponent,
        selectors: [["app-item-config"]],
        viewQuery: function ItemConfigComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 32,
        vars: 11,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"], ["id", "add-item-config", "width", "30%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], ["formControlName", "type_tmp", 3, "parameter"], ["cols", "4", "rows", "8", "type", "description", "formControlName", "description", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function ItemConfigComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "ITEM CONFIGURATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ItemConfigComponent_Template_app_default_button_action_4_listener() {
              return ctx.openEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-basic-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "jw-modal", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "ADD ITEM CONFIGURATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ItemConfigComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ItemConfigComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ItemConfigComponent_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "ITEM TYPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-multi-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ItemConfigComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ItemConfigComponent_div_21_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ItemConfigComponent_div_27_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ItemConfigComponent_div_28_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "app-default-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ItemConfigComponent_Template_app_default_button_action_30_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "app-default-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.add_item_config_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_item_config_form.controls["name"].invalid && (ctx.add_item_config_form.controls["name"].dirty || ctx.add_item_config_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("parameter", ctx.item_type_config);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_item_config_form.controls["type_tmp"].invalid && (ctx.add_item_config_form.controls["type_tmp"].dirty || ctx.add_item_config_form.controls["type_tmp"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_item_config_form.controls["description"].invalid && (ctx.add_item_config_form.controls["description"].dirty || ctx.add_item_config_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.MultiSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    37070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemsTypeConfigComponent": function ItemsTypeConfigComponent() {
          return (
            /* binding */
            _ItemsTypeConfigComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ItemsTypeConfigComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ItemsTypeConfigComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ItemsTypeConfigComponent_div_14_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.add_item_config_form.controls["name"].errors.required);
        }
      }

      function ItemsTypeConfigComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function ItemsTypeConfigComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ItemsTypeConfigComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ItemsTypeConfigComponent_div_21_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.add_item_config_form.controls["description"].errors.required);
        }
      }

      function ItemsTypeConfigComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.description, " ");
        }
      }

      var _ItemsTypeConfigComponent = /*#__PURE__*/function () {
        function _ItemsTypeConfigComponent(_modalService, _formService, _toastService) {
          _classCallCheck(this, _ItemsTypeConfigComponent);

          this._modalService = _modalService;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = 'item-type-configs/';
          this.titles = [{
            title: 'DB ID',
            field: 'id'
          }, {
            title: 'NAME',
            field: 'name'
          }, {
            title: 'Description',
            field: 'description'
          }];
          this.api_errors = [];
          this.loading = true;
        }

        _createClass(_ItemsTypeConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.add_item_config_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('item-config', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
            });
          }
        }, {
          key: "openEdit",
          value: function openEdit() {
            this._modalService.open('add-item-type-config');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._modalService.remove('add-item-type-config');
          }
        }, {
          key: "onSubmitAdd",
          value: function onSubmitAdd() {
            var _this3 = this;

            //validate
            this.add_item_config_form.markAllAsTouched();
            if (this.add_item_config_form.invalid) return;
            this.loading = true; //submit

            var data = {
              url: "item-type-configs/",
              formData: this.add_item_config_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this3.loading = false;

              _this3.add_item_config_form.reset();

              _this3.cancel();

              _this3.table.getTableData();
            }, function (err) {
              _this3.loading = false;

              _this3._toastService.showToast("An Error Ocurred", "danger");

              _this3.api_errors = err.error;
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-item-type-config');
          }
        }]);

        return _ItemsTypeConfigComponent;
      }();

      _ItemsTypeConfigComponent.ɵfac = function ItemsTypeConfigComponent_Factory(t) {
        return new (t || _ItemsTypeConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationsService));
      };

      _ItemsTypeConfigComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ItemsTypeConfigComponent,
        selectors: [["app-items"]],
        viewQuery: function ItemsTypeConfigComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 26,
        vars: 8,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"], ["id", "add-item-type-config", "width", "30%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], ["cols", "4", "rows", "8", "type", "description", "formControlName", "description", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function ItemsTypeConfigComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "ITEM TYPE CONFIGURATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function ItemsTypeConfigComponent_Template_app_default_button_action_4_listener() {
              return ctx.openEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "jw-modal", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "ADD ITEM TYPE CONFIGURATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ItemsTypeConfigComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ItemsTypeConfigComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ItemsTypeConfigComponent_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ItemsTypeConfigComponent_div_21_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ItemsTypeConfigComponent_div_22_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "app-default-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function ItemsTypeConfigComponent_Template_app_default_button_action_24_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "app-default-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.add_item_config_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_item_config_form.controls["name"].invalid && (ctx.add_item_config_form.controls["name"].dirty || ctx.add_item_config_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_item_config_form.controls["description"].invalid && (ctx.add_item_config_form.controls["description"].dirty || ctx.add_item_config_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXR5cGUtY29uZmlnLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    96245: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PayGoProvidersComponent": function PayGoProvidersComponent() {
          return (
            /* binding */
            _PayGoProvidersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function PayGoProvidersComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function PayGoProvidersComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PayGoProvidersComponent_div_14_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.add_pay_go_form.controls["name"].errors.required);
        }
      }

      function PayGoProvidersComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function PayGoProvidersComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function PayGoProvidersComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PayGoProvidersComponent_div_21_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.add_pay_go_form.controls["description"].errors.required);
        }
      }

      function PayGoProvidersComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.description, " ");
        }
      }

      var _PayGoProvidersComponent = /*#__PURE__*/function () {
        function _PayGoProvidersComponent(_formService, _toastService, _modalService) {
          _classCallCheck(this, _PayGoProvidersComponent);

          this._formService = _formService;
          this._toastService = _toastService;
          this._modalService = _modalService;
          this.api_errors = [];
          this.url = 'pay-go-providers/';
          this.titles = [{
            title: 'Name',
            field: 'name'
          }, {
            title: 'Description',
            field: 'description'
          }];
          this.add_pay_go_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
          });
        }

        _createClass(_PayGoProvidersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmitAdd",
          value: function onSubmitAdd() {
            var _this4 = this;

            //validate
            this.add_pay_go_form.markAllAsTouched();
            if (this.add_pay_go_form.invalid) return; //submit

            var data = {
              url: this.url,
              formData: this.add_pay_go_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this4.add_pay_go_form.reset();

              _this4.cancel();

              _this4.table.getTableData();
            }, function (err) {
              _this4._toastService.showToast("An Error Ocurred", "danger");

              _this4.api_errors = err.error;
            });
          }
        }, {
          key: "openAdd",
          value: function openAdd() {
            this._modalService.open('add-pay-go');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-pay-go');
          }
        }]);

        return _PayGoProvidersComponent;
      }();

      _PayGoProvidersComponent.ɵfac = function PayGoProvidersComponent_Factory(t) {
        return new (t || _PayGoProvidersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService));
      };

      _PayGoProvidersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PayGoProvidersComponent,
        selectors: [["app-pay-go-providers"]],
        viewQuery: function PayGoProvidersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 26,
        vars: 8,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"], ["id", "add-pay-go", "width", "30%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], ["cols", "4", "rows", "8", "type", "description", "formControlName", "description", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function PayGoProvidersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "PAY GO PROVIDERS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PayGoProvidersComponent_Template_app_default_button_action_4_listener() {
              return ctx.openAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "jw-modal", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "ADD PAY GO PROVIDER");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PayGoProvidersComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PayGoProvidersComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PayGoProvidersComponent_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "textarea", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PayGoProvidersComponent_div_21_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PayGoProvidersComponent_div_22_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "app-default-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PayGoProvidersComponent_Template_app_default_button_action_24_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "app-default-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.add_pay_go_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_pay_go_form.controls["name"].invalid && (ctx.add_pay_go_form.controls["name"].dirty || ctx.add_pay_go_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_pay_go_form.controls["description"].invalid && (ctx.add_pay_go_form.controls["description"].dirty || ctx.add_pay_go_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXktZ28tcHJvdmlkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    50565: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddPriceGroupComponent": function AddPriceGroupComponent() {
          return (
            /* binding */
            _AddPriceGroupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../shared/card/card.component */
      53949);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../shared/default-button/default-button.component */
      89825);

      function AddPriceGroupComponent_select_8_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var provider_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", provider_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](provider_r16.name);
        }
      }

      function AddPriceGroupComponent_select_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_select_8_option_1_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pay_go_providers);
        }
      }

      function AddPriceGroupComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
        }
      }

      function AddPriceGroupComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_10_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.product_config_form.controls["pay_go_provider"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.pay_go_provider, " ");
        }
      }

      function AddPriceGroupComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", type_r18.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r18.name);
        }
      }

      function AddPriceGroupComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_17_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.product_config_form.controls["type"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.api_errors.type, " ");
        }
      }

      function AddPriceGroupComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_23_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.product_config_form.controls["name"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.api_errors.name, " ");
        }
      }

      function AddPriceGroupComponent_div_25_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_25_div_5_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_25_div_5_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.product_config_form.controls["deposit"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.product_config_form.controls["deposit"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_25_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r22.api_errors.deposit, " ");
        }
      }

      function AddPriceGroupComponent_div_25_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_25_div_11_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_25_div_11_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.product_config_form.controls["number_of_days"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.product_config_form.controls["number_of_days"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_25_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24.api_errors.number_of_days, " ");
        }
      }

      function AddPriceGroupComponent_div_25_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_25_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_25_div_17_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_25_div_17_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.product_config_form.controls["daily_rate"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.product_config_form.controls["daily_rate"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_25_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r26.api_errors.daily_rate, " ");
        }
      }

      function AddPriceGroupComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddPriceGroupComponent_div_25_Template_input_ngModelChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r33.calculate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddPriceGroupComponent_div_25_div_5_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddPriceGroupComponent_div_25_div_6_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "No. Of Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddPriceGroupComponent_div_25_Template_input_ngModelChange_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r35.calculate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddPriceGroupComponent_div_25_div_11_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddPriceGroupComponent_div_25_div_12_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Daily Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddPriceGroupComponent_div_25_Template_input_ngModelChange_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r36.calculate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddPriceGroupComponent_div_25_div_17_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddPriceGroupComponent_div_25_div_18_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.product_config_form.controls["deposit"].invalid && (ctx_r9.product_config_form.controls["deposit"].dirty || ctx_r9.product_config_form.controls["deposit"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.api_errors.deposit);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.product_config_form.controls["number_of_days"].invalid && (ctx_r9.product_config_form.controls["number_of_days"].dirty || ctx_r9.product_config_form.controls["number_of_days"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.api_errors.number_of_days);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.product_config_form.controls["daily_rate"].invalid && (ctx_r9.product_config_form.controls["daily_rate"].dirty || ctx_r9.product_config_form.controls["daily_rate"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.api_errors.daily_rate);
        }
      }

      function AddPriceGroupComponent_div_26_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_26_div_5_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_26_div_5_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r37.product_config_form.controls["days_in_activation_amount"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r37.product_config_form.controls["days_in_activation_amount"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_26_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r38.api_errors.days_in_activation_amount, " ");
        }
      }

      function AddPriceGroupComponent_div_26_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_26_div_11_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_26_div_11_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r39.product_config_form.controls["min_activation_amount"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r39.product_config_form.controls["min_activation_amount"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_26_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r40.api_errors.min_activation_amount, " ");
        }
      }

      function AddPriceGroupComponent_div_26_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_26_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_26_div_17_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_26_div_17_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.product_config_form.controls["unlock_price"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.product_config_form.controls["unlock_price"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_26_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r42.api_errors.unlock_price, " ");
        }
      }

      function AddPriceGroupComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Days To Activate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddPriceGroupComponent_div_26_Template_input_ngModelChange_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r49.calculate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddPriceGroupComponent_div_26_div_5_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddPriceGroupComponent_div_26_div_6_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Min Activation Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddPriceGroupComponent_div_26_div_11_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddPriceGroupComponent_div_26_div_12_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Unlock Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddPriceGroupComponent_div_26_div_17_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddPriceGroupComponent_div_26_div_18_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.product_config_form.controls["days_in_activation_amount"].invalid && (ctx_r10.product_config_form.controls["days_in_activation_amount"].dirty || ctx_r10.product_config_form.controls["days_in_activation_amount"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.api_errors.days_in_activation_amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.product_config_form.controls["min_activation_amount"].invalid && (ctx_r10.product_config_form.controls["min_activation_amount"].dirty || ctx_r10.product_config_form.controls["min_activation_amount"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.api_errors.min_activation_amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.product_config_form.controls["unlock_price"].invalid && (ctx_r10.product_config_form.controls["unlock_price"].dirty || ctx_r10.product_config_form.controls["unlock_price"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.api_errors.unlock_price);
        }
      }

      function AddPriceGroupComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_32_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field has to be a number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_32_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddPriceGroupComponent_div_32_div_2_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.product_config_form.controls["cash_amount"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.product_config_form.controls["cash_amount"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.api_errors.cash_amount, " ");
        }
      }

      function AddPriceGroupComponent_div_39_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddPriceGroupComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddPriceGroupComponent_div_39_div_1_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.product_config_form.controls["description"].errors.required);
        }
      }

      function AddPriceGroupComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r14.api_errors.description, " ");
        }
      }

      var _AddPriceGroupComponent = /*#__PURE__*/function () {
        function _AddPriceGroupComponent(router, _formService, location) {
          _classCallCheck(this, _AddPriceGroupComponent);

          var _a, _b, _c, _d, _e, _f;

          this.router = router;
          this._formService = _formService;
          this.location = location;
          this.page_title = 'Add Price Group Configuration';
          this.newEntry = true;
          this.types = [{
            name: 'Installment',
            value: 'I'
          }, {
            name: 'Cash',
            value: 'C'
          }];
          this.pay_go_providers_loading = true;
          this.instance = {};
          this.api_errors = [];
          var data = this.router.getCurrentNavigation().extras.state;

          if (data != undefined && data != null) {
            this.instance = data.data;
            this.newEntry = false;
          }

          var pay_go_provider = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '' : this.instance.pay_go_provider, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var type = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '' : this.instance.type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '' : this.instance.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var deposit = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_a = this.instance.deposit) !== null && _a !== void 0 ? _a : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var daily_rate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_b = this.instance.daily_rate) !== null && _b !== void 0 ? _b : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var unlock_price = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_c = this.instance.unlock_price) !== null && _c !== void 0 ? _c : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var number_of_days = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_d = this.instance.number_of_days) !== null && _d !== void 0 ? _d : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var days_in_activation_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_e = this.instance.days_in_activation_amount) !== null && _e !== void 0 ? _e : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var min_activation_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '0' : (_f = this.instance.min_activation_amount) !== null && _f !== void 0 ? _f : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var cash_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '' : this.instance.cash_amount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          var description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.newEntry ? '' : this.instance.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
          this.product_config_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: name,
            description: description,
            type: type,
            deposit: deposit,
            unlock_price: unlock_price,
            daily_rate: daily_rate,
            number_of_days: number_of_days,
            days_in_activation_amount: days_in_activation_amount,
            min_activation_amount: min_activation_amount,
            cash_amount: cash_amount,
            pay_go_provider: pay_go_provider
          });
        }

        _createClass(_AddPriceGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDropdownValues();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            //reset API errors
            this.api_errors = [];
            var data = {
              url: this.newEntry == true ? "price-group-configs/" : "price-group-configs/".concat(this.instance.id, "/"),
              formData: this.product_config_form.value
            };
            console.log(data);

            this._formService.postForm(this.newEntry, data).subscribe(function (response) {
              console.log(response);

              _this5.product_config_form.reset();

              _this5.location.back();
            }, function (err) {
              _this5.api_errors = err.error;
            });
          }
        }, {
          key: "getDropdownValues",
          value: function getDropdownValues() {
            var _this6 = this;

            this._formService.getDropdownValues('pay-go-providers').subscribe(function (data) {
              _this6.pay_go_providers_loading = false;
              _this6.pay_go_providers = data.results;
            }, function (err) {
              _this6.pay_go_providers_loading = false;
            });
          }
        }, {
          key: "calculate",
          value: function calculate() {
            //get min activation
            var minAmount = this.product_config_form.controls['deposit'].value + this.product_config_form.controls['days_in_activation_amount'].value * this.product_config_form.controls['daily_rate'].value; //get unlock price

            var unlockPrice = this.product_config_form.controls['deposit'].value + this.product_config_form.controls['number_of_days'].value * this.product_config_form.controls['daily_rate'].value; //set values

            this.product_config_form.patchValue({
              min_activation_amount: minAmount,
              unlock_price: unlockPrice
            });
          } //Reset Form

        }, {
          key: "clearForm",
          value: function clearForm() {
            this.newEntry = false;
            this.product_config_form.reset();
          }
        }]);

        return _AddPriceGroupComponent;
      }();

      _AddPriceGroupComponent.ɵfac = function AddPriceGroupComponent_Factory(t) {
        return new (t || _AddPriceGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_0__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
      };

      _AddPriceGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddPriceGroupComponent,
        selectors: [["app-add-price-group"]],
        decls: 44,
        vars: 17,
        consts: [[1, "mb-2"], ["action", "form-group", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-start"], [1, "col-2"], ["class", "form-control mt-2 mt-2  opt-value", "formControlName", "pay_go_provider", 4, "ngIf"], ["class", "linear-background", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], ["formControlName", "type", 1, "form-control", "mt-2", "mt-2", "opt-value"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "name", "required", "", 1, "form-control", "mt-2", "mt-2", "opt-value"], ["class", "row justify-content-start mt-4", 4, "ngIf"], [1, "row", "justify-content-start", "mt-4"], ["type", "number", "formControlName", "cash_amount", 1, "form-control", "mt-2"], [1, "col-8"], ["name", "description", "formControlName", "description", "cols", "30", "rows", "5", 1, "form-control", "mt-2"], [1, "row", "justify-content-end"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], ["formControlName", "pay_go_provider", 1, "form-control", "mt-2", "mt-2", "opt-value"], ["required", "", 3, "value"], [1, "linear-background"], [1, "alert"], [1, "text-danger", "opt-value"], ["type", "number", "formControlName", "deposit", 1, "form-control", "mt-2", "mt-2", 3, "ngModelChange"], ["type", "number", "formControlName", "number_of_days", 1, "form-control", "mt-2", 3, "ngModelChange"], ["type", "number", "formControlName", "daily_rate", 1, "form-control", "mt-2", 3, "ngModelChange"], ["type", "number", "formControlName", "days_in_activation_amount", 1, "form-control", "mt-2", 3, "ngModelChange"], ["type", "number", "formControlName", "min_activation_amount", "readonly", "", 1, "form-control", "mt-2"], ["type", "number", "formControlName", "unlock_price", "readonly", "", 1, "form-control", "mt-2"]],
        template: function AddPriceGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "INVENTORY - ADD PRICE GROUPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddPriceGroupComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Pay Go Provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddPriceGroupComponent_select_8_Template, 2, 1, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddPriceGroupComponent_span_9_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddPriceGroupComponent_div_10_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddPriceGroupComponent_div_11_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddPriceGroupComponent_option_16_Template, 2, 2, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddPriceGroupComponent_div_17_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddPriceGroupComponent_div_18_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AddPriceGroupComponent_div_23_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AddPriceGroupComponent_div_24_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AddPriceGroupComponent_div_25_Template, 19, 6, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddPriceGroupComponent_div_26_Template, 19, 6, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cash Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddPriceGroupComponent_div_32_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddPriceGroupComponent_div_33_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AddPriceGroupComponent_div_39_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AddPriceGroupComponent_div_40_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "app-default-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function AddPriceGroupComponent_Template_app_default_button_action_42_listener() {
              return ctx.clearForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "app-default-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.product_config_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.pay_go_providers_loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pay_go_providers_loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["pay_go_provider"].invalid && (ctx.product_config_form.controls["pay_go_provider"].dirty || ctx.product_config_form.controls["pay_go_provider"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.api_errors.pay_go_provider);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["type"].invalid && (ctx.product_config_form.controls["type"].dirty || ctx.product_config_form.controls["type"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.api_errors.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["name"].invalid && (ctx.product_config_form.controls["name"].dirty || ctx.product_config_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["type"].value != "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["type"].value != "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["cash_amount"].invalid && (ctx.product_config_form.controls["cash_amount"].dirty || ctx.product_config_form.controls["cash_amount"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.api_errors.cash_amount);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_config_form.controls["description"].invalid && (ctx.product_config_form.controls["description"].dirty || ctx.product_config_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_2__.DefaultButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJpY2UtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    90942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PriceGroupComponent": function PriceGroupComponent() {
          return (
            /* binding */
            _PriceGroupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);

      var _PriceGroupComponent = /*#__PURE__*/function () {
        function _PriceGroupComponent(_router) {
          _classCallCheck(this, _PriceGroupComponent);

          this._router = _router;
          this.url = 'price-group-configs/';
          this.titles = [{
            title: 'DB ID',
            field: 'id'
          }, {
            title: 'Name',
            field: 'name'
          }, {
            title: 'Type',
            field: 'type'
          }, {
            title: 'Daily Rate',
            field: 'daily_rate'
          }, {
            title: 'Number of Days',
            field: 'number_of_days'
          }, {
            title: 'Min activation amount',
            field: 'min_activation_amount'
          }, {
            title: 'Description',
            field: 'description'
          }, {
            title: 'PayGo Provider Name',
            field: 'pay_go_provider_name'
          }];
        }

        _createClass(_PriceGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openAdd",
          value: function openAdd() {
            this._router.navigate(['/administration/inventory/add-price-group']);
          }
        }]);

        return _PriceGroupComponent;
      }();

      _PriceGroupComponent.ɵfac = function PriceGroupComponent_Factory(t) {
        return new (t || _PriceGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _PriceGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PriceGroupComponent,
        selectors: [["app-price-group"]],
        decls: 6,
        vars: 2,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"]],
        template: function PriceGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "PRICE GROUPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("action", function PriceGroupComponent_Template_app_default_button_action_4_listener() {
              return ctx.openAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-basic-table", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent, _shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88735: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductTypeComponent": function ProductTypeComponent() {
          return (
            /* binding */
            _ProductTypeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/ng-multi-select/multi-select.component */
      60515);

      function ProductTypeComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProductTypeComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductTypeComponent_div_15_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.add_product_type_form.controls["name"].errors.required);
        }
      }

      function ProductTypeComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function ProductTypeComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProductTypeComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductTypeComponent_div_21_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.add_product_type_form.controls["price_group"].errors.required);
        }
      }

      function ProductTypeComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.price_group, " ");
        }
      }

      function ProductTypeComponent_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProductTypeComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductTypeComponent_div_27_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.add_product_type_form.controls["boxes"].errors.required);
        }
      }

      function ProductTypeComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.api_errors.boxes, " ");
        }
      }

      function ProductTypeComponent_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProductTypeComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductTypeComponent_div_33_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.add_product_type_form.controls["date"].errors.required);
        }
      }

      function ProductTypeComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.api_errors.date, " ");
        }
      }

      function ProductTypeComponent_div_40_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProductTypeComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductTypeComponent_div_40_div_1_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.add_product_type_form.controls["description"].errors.required);
        }
      }

      function ProductTypeComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r9.api_errors.description, " ");
        }
      }

      var _ProductTypeComponent = /*#__PURE__*/function () {
        function _ProductTypeComponent(_formService, _modalService, _toastService, _modal) {
          _classCallCheck(this, _ProductTypeComponent);

          this._formService = _formService;
          this._modalService = _modalService;
          this._toastService = _toastService;
          this._modal = _modal;
          this.url = "";
          this.api_errors = [];
          this.data = [];
          this.titles = [{
            title: 'ID',
            field: 'id'
          }, {
            title: 'NAME',
            field: 'name'
          }, {
            title: 'PRICE GROUP',
            field: 'price_group'
          }, {
            title: 'Boxes',
            field: 'boxes'
          }, {
            title: 'DATE',
            field: 'date',
            date: true
          }, {
            title: 'Description',
            field: 'description'
          }, {
            title: "Actions",
            field: "",
            action: true,
            actions: ["EDIT", "ARCHIVE"]
          }];
          this.box_parameter = {
            "type": "field",
            "required": true,
            "read_only": false,
            "label": "Boxes",
            "display_name": "name",
            "value_field": "id",
            "multiple": true,
            "url": "box-configs/",
            "search_field": "name",
            "args": "users",
            "edit_source_field": "boxes",
            "edit_display_name": "box_name",
            "res_value_field": "box_config",
            "isMap": true
          };

          for (var i = 0; i < 20; i++) {
            this.data.push({
              id: 4,
              name: 'Tv Product',
              price_group: 'A',
              boxes: 'TV Box , Solar Box',
              date: '08-11-2020',
              description: 'Tv Product'
            });
          }

          this.add_product_type_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            price_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            boxes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
          });
        }

        _createClass(_ProductTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmitAdd",
          value: function onSubmitAdd() {
            console.log("VALUES");
            console.log(this.add_product_type_form.value);
          }
        }, {
          key: "openAdd",
          value: function openAdd() {
            this._modalService.open('add-product-type');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-product-type');
          }
        }]);

        return _ProductTypeComponent;
      }();

      _ProductTypeComponent.ɵfac = function ProductTypeComponent_Factory(t) {
        return new (t || _ProductTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
      };

      _ProductTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ProductTypeComponent,
        selectors: [["app-product-type"]],
        viewQuery: function ProductTypeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 45,
        vars: 16,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], [1, "row"], ["text", "Add New", 1, "mr-4", 3, "action"], ["text", "Bulk Actions", 1, "mr-4"], [3, "titles", "url", "data"], ["id", "add-product-type", "width", "25%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-3"], ["formControlName", "price_group", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "mt-4"], ["formControlName", "boxes", 1, "mt-2", 3, "parameter"], ["formControlName", "date", "type", "date", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["cols", "4", "rows", "8", "type", "description", "formControlName", "description", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit", 3, "action"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function ProductTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " PRODUCT CONFIGURATION ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-default-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ProductTypeComponent_Template_app_default_button_action_4_listener() {
              return ctx.openAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-default-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-basic-table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "jw-modal", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "ADD PRODUCT CONFIGURATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ProductTypeComponent_Template_form_ngSubmit_10_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ProductTypeComponent_div_15_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ProductTypeComponent_div_16_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "PRICE GROUP");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ProductTypeComponent_div_21_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ProductTypeComponent_div_22_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "BOXES");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-multi-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ProductTypeComponent_div_27_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ProductTypeComponent_div_28_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "DATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ProductTypeComponent_div_33_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ProductTypeComponent_div_34_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ProductTypeComponent_div_40_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ProductTypeComponent_div_41_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "app-default-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ProductTypeComponent_Template_app_default_button_action_43_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "app-default-button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ProductTypeComponent_Template_app_default_button_action_44_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url)("data", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.add_product_type_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_product_type_form.controls["name"].invalid && (ctx.add_product_type_form.controls["name"].dirty || ctx.add_product_type_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_product_type_form.controls["price_group"].invalid && (ctx.add_product_type_form.controls["price_group"].dirty || ctx.add_product_type_form.controls["price_group"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.price_group);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("parameter", ctx.box_parameter);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_product_type_form.controls["boxes"].invalid && (ctx.add_product_type_form.controls["boxes"].dirty || ctx.add_product_type_form.controls["boxes"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.boxes);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_product_type_form.controls["date"].invalid && (ctx.add_product_type_form.controls["date"].dirty || ctx.add_product_type_form.controls["date"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.add_product_type_form.controls["description"].invalid && (ctx.add_product_type_form.controls["description"].dirty || ctx.add_product_type_form.controls["description"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.api_errors.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.MultiSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    43994: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuppliersComponent": function SuppliersComponent() {
          return (
            /* binding */
            _SuppliersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/tables/basic-table/basic-table.component */
      81170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/modal/modal.service */
      19493);
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      25335);
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      85349);
      /* harmony import */


      var _shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/default-button/default-button.component */
      89825);
      /* harmony import */


      var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/modal/modal.component */
      73446);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function SuppliersComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SuppliersComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SuppliersComponent_div_14_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.add_supplier_form.controls["name"].errors.required);
        }
      }

      function SuppliersComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.api_errors.name, " ");
        }
      }

      function SuppliersComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SuppliersComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SuppliersComponent_div_20_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.add_supplier_form.controls["phone"].errors.required);
        }
      }

      function SuppliersComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.phone, " ");
        }
      }

      function SuppliersComponent_div_26_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SuppliersComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SuppliersComponent_div_26_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.add_supplier_form.controls["email"].errors.required);
        }
      }

      function SuppliersComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.api_errors.email, " ");
        }
      }

      function SuppliersComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SuppliersComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SuppliersComponent_div_32_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.add_supplier_form.controls["contact_person"].errors.required);
        }
      }

      function SuppliersComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.api_errors.contact_person, " ");
        }
      }

      function SuppliersComponent_div_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SuppliersComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SuppliersComponent_div_38_div_1_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.add_supplier_form.controls["contact_phone"].errors.required);
        }
      }

      function SuppliersComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.api_errors.contact_phone, " ");
        }
      }

      var _SuppliersComponent = /*#__PURE__*/function () {
        function _SuppliersComponent(_modalService, _formService, _toastService) {
          _classCallCheck(this, _SuppliersComponent);

          this._modalService = _modalService;
          this._formService = _formService;
          this._toastService = _toastService;
          this.url = "suppliers/";
          this.titles = [{
            title: "ID",
            field: "id"
          }, {
            title: "Supplier Name",
            field: "name"
          }, {
            title: "Phone",
            field: "phone"
          }, {
            title: "Email",
            field: "email"
          }, {
            title: "Contact Person",
            field: "contact_person"
          }, {
            title: "Contact Phone",
            field: "contact_phone"
          }];
          this.api_errors = [];
          this.add_supplier_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            contact_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            contact_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
          });
        }

        _createClass(_SuppliersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmitAdd",
          value: function onSubmitAdd() {
            var _this7 = this;

            //validate
            this.add_supplier_form.markAllAsTouched();
            if (this.add_supplier_form.invalid) return; //submit

            var data = {
              url: this.url,
              formData: this.add_supplier_form.value
            };

            this._formService.postForm(true, data).subscribe(function (response) {
              _this7.add_supplier_form.reset();

              _this7.cancel();

              _this7.table.getTableData();
            }, function (err) {
              _this7._toastService.showToast("An Error Ocurred", "danger");

              _this7.api_errors = err.error;
            });
          }
        }, {
          key: "openAdd",
          value: function openAdd() {
            this._modalService.open('add-supplier-form');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modalService.close('add-supplier-form');
          }
        }]);

        return _SuppliersComponent;
      }();

      _SuppliersComponent.ɵfac = function SuppliersComponent_Factory(t) {
        return new (t || _SuppliersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_2__.FormItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationsService));
      };

      _SuppliersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _SuppliersComponent,
        selectors: [["app-suppliers"]],
        viewQuery: function SuppliersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 43,
        vars: 14,
        consts: [[1, "row", "justify-content-between", "mb-2", "pl-4"], [1, "mb-2"], ["text", "Add New", 1, "mr-4", 3, "action"], [3, "titles", "url"], ["id", "add-supplier-form", "width", "30%"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], [1, "mt-2"], ["formControlName", "phone", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["formControlName", "email", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["formControlName", "contact_person", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], ["formControlName", "contact_phone", 1, "mt-2", "form-control", "form-control-sm", "opt-value"], [1, "row", "justify-content-end", "mt-4", "pr-3"], ["text", "Cancel", 1, "mr-4", 3, "outline", "action"], ["text", "Submit"], [1, "alert"], [1, "text-danger", "opt-value"]],
        template: function SuppliersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "SUPPLIERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-default-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function SuppliersComponent_Template_app_default_button_action_4_listener() {
              return ctx.openAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-basic-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "jw-modal", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "ADD SUPPLIER");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SuppliersComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmitAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SuppliersComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SuppliersComponent_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "PHONE");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SuppliersComponent_div_20_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SuppliersComponent_div_21_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "EMAIL");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SuppliersComponent_div_26_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SuppliersComponent_div_27_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "CONTACT PERSON");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SuppliersComponent_div_32_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SuppliersComponent_div_33_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "CONTACT PHONE");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SuppliersComponent_div_38_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SuppliersComponent_div_39_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "app-default-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function SuppliersComponent_Template_app_default_button_action_41_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "app-default-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titles", ctx.titles)("url", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.add_supplier_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_supplier_form.controls["name"].invalid && (ctx.add_supplier_form.controls["name"].dirty || ctx.add_supplier_form.controls["name"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_supplier_form.controls["phone"].invalid && (ctx.add_supplier_form.controls["phone"].dirty || ctx.add_supplier_form.controls["phone"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_supplier_form.controls["email"].invalid && (ctx.add_supplier_form.controls["email"].dirty || ctx.add_supplier_form.controls["email"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_supplier_form.controls["contact_person"].invalid && (ctx.add_supplier_form.controls["contact_person"].dirty || ctx.add_supplier_form.controls["contact_person"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.contact_person);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.add_supplier_form.controls["contact_phone"].invalid && (ctx.add_supplier_form.controls["contact_phone"].dirty || ctx.add_supplier_form.controls["contact_phone"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.api_errors.contact_phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("outline", true);
          }
        },
        directives: [_shared_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent, src_app_shared_tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_administration_inventory_inventory_module_ts-es5.js.map