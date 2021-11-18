import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../services/forms/form-item.service';
import { ToastNotificationsService } from '../../../../shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bulk-actions',
  templateUrl: './bulk-actions.component.html',
  styleUrls: ['./bulk-actions.component.scss']
})
export class BulkActionsComponent implements OnInit {



  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  import_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_store : any;

  stores : any[] = [];
  store_loading = true;


  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { }

  ngOnInit(): void {

    this.import_form = new FormGroup({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });

    //get stores
    this._formService.getDropdownValues(`stores`).subscribe(
      response => {
        this.store_loading = false;
        this.stores = response.results;
      },
      err => {
        this.store_loading = false;
      }
    );
  }

  cancel(){
    this.closeAction.emit('close');
  }

  get f(){

    return this.import_form.controls;

  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.import_form.patchValue({

        fileSource: file

      });

    }
  }



  submitForm(){

    const formData = new FormData();

    formData.append('myfile', this.import_form.get('fileSource').value);



    let data : any = {
      url : 'imports/inventory/',
      formData : formData
    };

    this._formService.postForm(true,data).subscribe(
      response => {
        this.cancel();
        this._toastService.showToast("MOVED SUCCESSFULLY!", "success");
        this.tableAction.emit();
      },
      (err: HttpErrorResponse) => {
        this._toastService.showToast("An Error Occurred", "danger");
      }
    );

  }

}
