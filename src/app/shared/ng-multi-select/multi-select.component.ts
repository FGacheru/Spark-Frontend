import { Component, OnInit, Output, Input, forwardRef } from '@angular/core'
import { FormControl, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { MultiSelectService } from './multi-select.service'

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }]
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {
  onChange: any = () => { }
  onTouch: any = () => { }

  /**
   * It should dissapper after some time
   * Define default args
   */
  public focus: boolean = false
  public loader: boolean = false
  public categories: any = []
  public selection: any = []
  public pre_selection: any = []
  public pre_select_values:any = [];
  public selected_values : any = [];
  public pre_selection_status: number[] = [];

  private subject: Subject<string> = new Subject()



  faMinusCircle = faMinusCircle;

  @Input()
  pageSize: number = 3

  formGroupSearch = new FormGroup({
    search: new FormControl('')
  })

  // formGroupCount = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   count: new FormControl('', Validators.required)
  // })

  constructor(private multiServ: MultiSelectService) { }

  selectSe() {

  }

  @Input()
  parameter: any = {
    "type": "field",
    "required": true,
    "read_only": false,
    "label": "Items",
    "display_name": "name",
    "value_field": "id",
    "multiple": true,
    "url": `item-configs/`,
    "search_field": "name",
    "args": "users",
    "edit_source_field": "items_details",
    "edit_display_name": "item_name",
    "res_value_field": "item_config",
    "isMap" : true,
    "count" : true
  }

  ngOnInit(): void {
    this.subject.pipe(
      debounceTime(500)
    ).subscribe(search => {
      this.focus = true
      this.searchingFunc(search)
    })
  }

  //my
  setValue(e : any,id : any){
   this.pre_select_values[id] = e.target.value;
  } 
  //end of my

  writeValue(value: any[]): void {

    if (value) {
      this.parseWriteData(value)
    } else {
      this.selection = []
    }
  }
  parseWriteData(value: any[]) {
    this.selection = value.map(ele => {
      var sel: any = {}
      sel.count = ele.count
      sel.id = ele[this.responseValueFieldName]
      sel.name = this.getObjValue(ele, this.editSourceDisplayFieldName)
      return sel
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  clearSelection() {
    this.pre_selection = []
  }

  onKeyUp() {
    const search_text = this.formGroupSearch.controls['search'].value
    this.subject.next(search_text)
  }

  chooseSelection(event:any,se: any,is_update : boolean = false) {
    event.preventDefault();

    if(!this.parameter["multiple"] && this.selection.length >= 1 && (!is_update)){
      return;
    }

    const choice =  {
      id: se.id,
      name: se.name,
      count: this.pre_select_values[se.id],
    }

    for (let i in this.selection) {
      if (this.selection[i].id == se.id) {
        this.selection[i].count = this.pre_select_values[se.id]
        is_update = true
        this.hasChanged()
        break
      }
    }

    if (!is_update) {
      this.selection.push(choice)
      this.hasChanged()
    }
    

    this.pre_selection_status.includes(se.id) ? true : this.pre_selection_status.push(se.id)

  }
  hasChanged() {
    this.onChange(this.mapResponseValue(this.selection))
  }

  mapResponseValue(selection: any[]) {
    return selection.map(ele => {
      let res: any = {}
      res[this.responseValueFieldName] = ele.id
      return { ...res, ...ele }
    })
  }

  removeSelection(se: any) {
    const index = this.selection.indexOf(se)
    this.selection.splice(index, 1)
    const status_idx = this.pre_selection_status.indexOf(se.id)
    this.pre_selection_status.splice(status_idx, 1)
    this.hasChanged()
  }

  get searchArgs() {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("args"))
        return this.parameter.args
    }
    return ""
  }

  hideSearchResult(event:any) {
    event.preventDefault();
    this.focus = false;
  }

  searchingFunc(search: string) {
    this.loader = true
    if (!search) {
      this.pre_selection = []
      this.loader = false
      return
    }
    const count = search.length
    var searchArgs = `${this.searchArgs}&${this.searchFieldName}=${search}`

    if (!this.isOfflineSearch) {
      this.multiServ.search(this.url, this.pageSize, searchArgs).subscribe(res => {
        this.loader = false
        console.log(res)
        this.mapPreselectionData(res.results)
      }, error => {
        console.log("Failed to search http")
        this.loader = false
        console.log(error)
      })
    } else {
      console.log("Offline search")
      this.mapPreselectionData(this.parameter.data)
      this.loader = false
    }
  }

  mapPreselectionData(data: any[]) {
    // Check the data for the source and the display_name
    if (data.length < 1) return
    this.pre_selection = data.map(elem => {
      let preSelect: any = {}
      preSelect.id = this.getObjValue(elem, this.valueFieldName)
      preSelect.name = this.getObjValue(elem, this.displayFieldName)
      if(!this.parameter["count"])this.pre_select_values[elem.id] = 1
      return preSelect
    })
  }

  get displayFieldName(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("display_name"))
        return this.parameter.display_name
      return this.parameter.label
    }
    return this.parameter
  }
  get editSourceDisplayFieldName() {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("edit_display_name")) {
        return this.parameter.edit_display_name
      }
      return "name"
    }
    return "name"
  }

  get editSourceFieldName(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("edit_source_field"))
        return this.parameter.edit_source_field
      return this.parameter.label
    }
    return this.parameter
  }

  get valueFieldName(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("value_field"))
        return this.parameter.value_field
      return this.parameter.label
    }
    return this.parameter
  }

  get responseValueFieldName(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("res_value_field"))
        return this.parameter.res_value_field
      return this.parameter.label
    }
    return "id"
  }

  get url(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("url"))
        return this.parameter.url
    }
    return ""
  }
  getObjValue(rawData: any, source: string): any {
    const parts = source.split(".")
    let value = `Incorrect Data Source ${source} `;
    let tempValue = rawData;
    // Check if data hardcoded
    for (let index in parts) {
      const key = parts[index]
      if (tempValue.hasOwnProperty(key)) {
        tempValue = tempValue[key]
        value = tempValue
      }
    }
    return value
  }

  get searchFieldName(): string {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("search_field"))
        return this.parameter.search_field
      return this.parameter.label
    }
    return this.parameter
  }

  get paramType() {
    return typeof this.parameter
  }

  /**
   * Check if the paramer has a data object
   * If exists no api call is required
   */
  get isOfflineSearch() {
    if (this.paramType == "object") {
      if (this.parameter.hasOwnProperty("data")) {
        return true
      }
      return false
    }
    return false
  }

}
