import { Component, Input, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-checked-table',
  templateUrl: './checked-table.component.html',
  styleUrls: ['./checked-table.component.scss']
})
export class CheckedTableComponent implements OnInit {

  @Input()
  titles : any[] = [];

  @Input()
  url :  string = "";


  @Input()
  data : any;

  @Input()
  page_size: number = 18;
  page: number = 1;
  resultsMeta: any;
  results : any;

  loading : boolean = true;

  selectedFiltersSubscriber : any;
  selectedFilterOptions:any;

  filters: any[] = [];

  constructor(private _tableService : TableServiceService) { }

  ngOnInit(): void {

    this.getTableData()

    this.selectedFiltersSubscriber = this._tableService.getFilters$.subscribe((data:any) => {
      this.selectedFilterOptions = this.getFilteredOptions(data);
      this.getTableData({ load : false})
    })
  }
  getFilteredOptions(filter: any): any {
    let filterTmp :any = [];

    this.filters= this.filters.filter(item => item.field != filter.field);
    this.filters  = this.filters.filter(item => item.value.trim() != "");
    this.filters.push(filter);

    this.filters.map((item:any) => {
      if(item.value != ""){
        let arr = {}
        let filterItem = `${item.field}=${item.value}`
        arr = filterItem;
        filterTmp.push(arr);
      }
    });

    let data = filterTmp.join("&");
    return data;
  }

  onPageSelect(page: number) {
    this.page = page
    this.getTableData()
  }

  setLoaderStatus(status: boolean): void {
    this.loading = status
  }

  tableMetaData(meta: any): void {
    if (meta.hasOwnProperty("next")) {
      this.resultsMeta = {
        next: meta.next,
        prev: meta.previous,
        count: meta.count
      }
    }
  }

  getTableData(data: any = '') {
    if(this.data != null){
      this.results = this.data;
    }
    if(!(data instanceof Object)) this.setLoaderStatus(true)
    this._tableService.getList(this.url, this.page_size, this.page, this.selectedFilterOptions, data,false)
      .pipe(take(1))
      .subscribe((res:any) => {

        this.setLoaderStatus(false)
        this.results = res.results
        this.tableMetaData(res)

      }, error => {
        this.setLoaderStatus(false)
      })
  }

  ngOnDestroy() {
    const subscriptions = [this.selectedFiltersSubscriber] //other subsciptions this.actionsSubscription, this.deleteSubscription,
    subscriptions.forEach(subs => {
      if (subs) {
        subs.unsubscribe()
      }
    })
  }

}
