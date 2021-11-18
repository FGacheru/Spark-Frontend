import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-collect-at-storre',
  templateUrl: './collect-at-storre.component.html',
  styleUrls: ['./collect-at-storre.component.scss']
})
export class CollectAtStorreComponent implements OnInit {
  faSearch = faSearch;

  boxes: any[] = [];
  boxes_loading: any = [];
  no_boxes: boolean = false;

  conditions: any[] = [
    {
      name: "Good",
      id: 1
    },
    {
      name: "Damaged",
      id: 2
    }
  ];

  types: any[] = [
    'Repair',
    'Repossession'
  ]

  repair_form: FormGroup;


  api_errors: any = [];

  actionSubscribe : any;
  current_item : any;

  @Input()
  customers: any[] = [];
  customers_loading = true;


  constructor(private _formService: FormItemService, private _toastService: ToastNotificationsService) {
    this.repair_form = new FormGroup({
      type: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      customer_name: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      customer_number: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      boxs: new FormBuilder().array([]),

    });



  }

  ngOnInit(): void {
    this.loadFields();
  }


  loadFields() {
    //get customers
    this._formService.getDropdownValues(`customers`).subscribe(
      response => {
        this.customers_loading = false;
        this.customers = response.results;
        console.log(this.customers.length)
      },
      err => {
        this.customers_loading = false;
      }
    );
  }

  get boxs() : FormArray {
    return this.repair_form.get("boxs") as FormArray
  }

  addBox(){
    const boxForm = new FormGroup({
      box: new FormControl(''),
      item: new FormControl(),
      condition: new FormControl(''),
      description: new FormControl('')
    })
    this.boxs.push(boxForm)
  }

  fetchCustomerBox(id:any){
    this._formService.getDropdownValues(`customers/customer/boxes/`+id).subscribe(
      response => {
        this.customers_loading = false;
        this.customers = response.results;
      },
      err => {
        this.customers_loading = false;
      }
    );
  }

  changeCustomer(){
    let id = this.repair_form.get('customer')?.value;
    this.no_boxes= false;
    this._formService.getDropdownValues(`customers/customer/boxes/`+id).subscribe(
      response => {
        this.boxes_loading = false;
        this.boxes = response.results;
        if(this.boxes.length == 0){
          this.no_boxes = true;
        }
        this.boxes.forEach(box => {
          this.addBox();
        })
      },
      err => {
        this.boxes_loading = false;
      }
    );



    this.customers.forEach((customer)=>{
      if(customer['id'] === this.repair_form.get('customer')?.value){
        console.log(customer)
        this.repair_form.get('customer_name')?.setValue(customer['name']);
        this.repair_form.get('phone_number')?.setValue(customer['primary_phone']);
        this.repair_form.get('id')?.setValue(customer['id_number']);
        this.repair_form.get('customer_number')?.setValue(customer['id']);
        this.repair_form.get('boxes')?.setValue(this.boxes)
      }
    })

  }

  submitForm(){

    if(this.repair_form.invalid){
      console.log(this.repair_form.errors);
    }

    console.log(this.repair_form.value);
    let data : any = {
      url : 'operations/',
      formData : this.repair_form.value
    };

    this._formService.postForm(true,data).subscribe(
      response => {

        this._toastService.showToast(" CREATED SUCCESSFULLY!", "success");

      },
      (err: HttpErrorResponse) => {
        this._toastService.showToast("An Error Ocurred", "danger");
      }
    );
  }

}

