import { take } from "rxjs/operators";

export function tableHandleActionsMixin(BaseClass: any) {
  return class extends BaseClass {
    handleTableActions(action: any, url: string, apiUrl: string) {
      // console.log(action)
      switch (action.name) {
        case "edit":
          this._router.navigate([url], { queryParams: action.data });
          break;
        case "delete":
          const _this = this;
          this._modalService.confirm(
            "Are you sure you want to delete?",
            function () {
              console.log('PROMPT CONFIRM', action);
              _this._tableService.delete(action.data, apiUrl)
                .pipe(take(1))
                .subscribe(() => { })
            },
            function () {
              console.info('PROMPT DELETE CANCELLED');
            }
          )
          break;
        case "view":
          this._router.navigate([url], { queryParams: action.data });
          break;
        default:
          break;
      }
    }
  }
}