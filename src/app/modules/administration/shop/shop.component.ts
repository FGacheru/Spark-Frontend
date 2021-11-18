import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import { TableServiceService } from '../../../shared/tables/table-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  url: string = 'shop/';
  api_errors: any = [];

  add_shop_form: FormGroup;

  data: any[] = [];

  @Output()
  closeAction: EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction: EventEmitter<any> = new EventEmitter();

  current_item: any;

  titles: any[] = [
    {
      title: 'SHOP NAME',
      field: 'name'
    },
    {
      title: 'ZONE',
      field: 'zone'
    },
    {
      title: 'COUNTY',
      field: 'county'
    },
    {
      title: 'TEAM LEADER',
      field: 'team_leader'
    },
    {
      title: 'STATUS',
      field: 'status'
    },
    {
      title: 'OPEN DATE',
      field: 'open_date'
    },
    {
      title: 'CLOSE DATE',
      field: 'close_date'
    },
    {
      title: 'CURRENT MONTH`S CUSTOMER',
      field: 'month_customers'
    },
    {
      title: 'TOTAL CUSTOMERS',
      field: 'total_customers'
    },
    {
      title: 'PHI',
      field: 'phi'
    },
    {
      title: 'Actions',
      field: '',
      action: true,
      actions: [
        'EDIT',
        'DEACTIVATE'
      ]
    }
  ];

  users: any[] = [];

  status: any[] = ['ACTIVE', 'CLOSED'];

  zones: any[] = ['Zone 1', 'Zone 2', 'Zone 3'];

  counties: any[] = [
    'VIHIGA',
    'WAJIR',
    'MAKUENI',
    'SAMBURU',
    'BARINGO',
    'NYAMIRA',
    'LAMU',
    'KIAMBU',
    'TURKANA',
    'TRANS NZOIA',
    'NAROK',
    'KISUMU',
    'SIAYA',
    'NAIROBI',
    'MOMBASA',
    'ISIOLO',
    'MERU',
    'NAKURU',
    'KWALE',
    'KILIFI',
    'TANA RIVER',
    'TAITA TAVETA',
    'GARISSA',
    'MANDERA',
    'MARSABIT',
    'THARAKA NITHI',
    'EMBU',
    'KITUI',
    'MACHAKOS',
    'NYANDARUA',
    'NYERI',
    'KIRINYAGA',
    'MURANG\'A',
    'WEST POKOT',
    'UASIN GISHU',
    'ELGEYO MARAKWET',
    'NANDI',
    'LAIKIPIA',
    'KAJIADO',
    'KERICHO',
    'BOMET',
    'KAKAMEGA',
    'BUNGOMA',
    'BUSIA',
    'HOMA BAY',
    'MIGORI',
    'KISII'
  ];

  users_loading = true;
  actionSubscribe: any;

  @ViewChild(BasicTableComponent)
  table: BasicTableComponent;


  constructor(private _formService: FormItemService,
              private _tableService: TableServiceService,
              private _modalService: ModalService, private _toastService: ToastNotificationsService,
              private _modal: ModalService) {

    this.add_shop_form = new FormGroup({
      name: new FormControl('', Validators.required),
      zone: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      team_leader: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      close_date: new FormControl(''),
      open_date: new FormControl(''),
      month_customers: new FormControl(''),
      total_customers: new FormControl(''),
      phi: new FormControl('')
    });

    //get suppliers
    this._formService.getDropdownValues(`users/`).subscribe(
      response => {
        this.users_loading = false;
        this.users = response.results;
      },
      err => {
        this.users_loading = false;
      }
    );

    this.actionSubscribe = _tableService.actionListeners.subscribe((data: any) => {
      this.current_item = data.data;
      switch (data.action) {
        case 'EDIT':
          this._modalService.open('add-spare-part');
          this.setValues();
          break;
        case 'ARCHIVE':
          this._modalService.open('archive-box');
          break;
      }
    });
  }

  ngOnInit(): void {

  }

  onSubmitAdd() {
    if (this.current_item != undefined) {
      // send an edit and return
      console.log(this.current_item);
      let data = {
        url: `shop/${this.current_item.id}/`,
        formData: this.add_shop_form.value
      };


      this._formService.postForm(false, data).subscribe(
        response => {
          this.cancel();
          this.table.getTableData();
          this._toastService.showToast('SHOP UPDATED SUCCESSFULLY!', 'success');
        },
        (err: HttpErrorResponse) => {
          this.api_errors = err.error;
          this._toastService.showToast('AN ERROR OCCURRED', 'danger');
        }
      );
    } else {
      this.add_shop_form.get('month_customers')?.disable;

      if (this.add_shop_form.invalid) {
        console.log(this.add_shop_form.errors);
      }

      console.log(this.add_shop_form.value);
      let data: any = {
        url: 'shop/',
        formData: this.add_shop_form.value
      };

      this._formService.postForm(true, data).subscribe(
        response => {
          this.cancel();
          this._toastService.showToast('SHOP ADDED SUCCESSFULLY!', 'success');
          this.table.getTableData();
        },
        (err: HttpErrorResponse) => {
          this._toastService.showToast('An Error Occurred', 'danger');
        }
      );
    }
  }


  openAdd() {
    this._modalService.open('add-spare-part');
  }

  cancel() {
    this._modalService.close('add-spare-part');
  }

  setValues() {
    if (this.current_item != undefined) {
      this.add_shop_form.get('name')?.setValue(this.current_item.name);
      this.add_shop_form.get('zone')?.setValue(this.current_item.zone);
      this.add_shop_form.get('county')?.setValue(this.current_item.county);
      this.add_shop_form.get('team_leader')?.setValue(this.current_item.team_leader);
      this.add_shop_form.get('status')?.setValue(this.current_item.status);
      this.add_shop_form.get('close_date')?.setValue(moment(this.current_item.close_date).format('YYYY-MM-DD'));
      this.add_shop_form.get('open_date')?.setValue(moment(this.current_item.open_date).format('YYYY-MM-DD'));
      this.add_shop_form.get('month_customers')?.setValue(this.current_item.month_customers);
      this.add_shop_form.get('total_customers')?.setValue(this.current_item.total_customers);
      this.add_shop_form.get('phi')?.setValue(this.current_item.phi);
    }
  }


}
