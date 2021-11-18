import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mypagination',
  templateUrl: './mypagination.component.html',
  styleUrls: ['./mypagination.component.scss']
})
export class MypaginationComponent implements OnInit {

  @Input()
  resultsMeta: any
  @Input()
  selectedPage: number = 5

  @Input()
  pageSize: number = 10;

  @Input()
  totalDisplayedPAges = 9

  @Output()
  onPageSelect: EventEmitter<number> = new EventEmitter()

  constructor() { }
  ngOnInit(): void {
  }
  get isAtEnd() {
    return (this.totalDisplayedPAges - this.selectedPage) <= Math.round(this.totalDisplayedPAges / 2)
  }
  get isAtStart() {
    // 5 -2
    return (this.selectedPage - 2) <= 3
  }
  get moreAtStart() {
    return this.isAtEnd && this.hideSomePages
  }
  get moreAtEnd() {
    return this.isAtStart && this.hideSomePages
  }
  get hideSomePages() {
    // console.log((this.totalPages - 2) >= this.totalDisplayedPAges)
    return (this.totalPages - 2) >= this.totalDisplayedPAges
  }
  get pages() {
    if (!this.isPaginatable) return []
    let pages: any[] = []
    const totalPages = this.totalPages
    const excluded = [1, this.totalPages]
    const remPages = totalPages - 2
    let addFactor = 2
    // 6 7 8 9 10 11
    if (this.hideSomePages) {
      let tempAddFactor = this.selectedPage - 1
      // Less than 3 because , less than that means use 2 
      if (this.isAtStart) {
        tempAddFactor = 2
      } else if (this.isAtEnd) {
        tempAddFactor = 6
      }
      addFactor = tempAddFactor
    }

    for (let i = 0; i < (this.hideSomePages ? 5 : remPages); i++) {
      const newPage = (i + addFactor)
      if (!pages.includes(newPage) && !excluded.includes(newPage)) {
        pages.push(newPage)
      }
    }
    pages.sort((a, b) => a - b)
    return pages
  }

  get totalItems() {
    if (!this.isPaginatable) return 1
    return this.resultsMeta.count;
  }

  scrollPage(addPage: number) {
    let tempvalue = addPage + this.selectedPage;
    if (tempvalue > this.totalPages) {
      tempvalue = this.totalPages
    } else if (tempvalue < 1) {
      tempvalue = 1
    }
    this.selectPage(tempvalue)
  }

  get totalPages() {
    if (!this.isPaginatable) return 1
    return Math.ceil(this.resultsMeta.count / this.pageSize)
  }
  get isPaginationActive() {
    if (!this.isPaginatable) return false
    // return 
    return this.hasNext || this.hasPrev
  }
  get hasNext() {
    if (!this.isPaginatable) return false
    return this.resultsMeta.next != undefined
  }
  get hasPrev() {
    if (!this.isPaginatable) return false
    return this.resultsMeta.prev != undefined
  }
  get isPaginatable() {
    if (!this.resultsMeta)
      return false
    return this.resultsMeta.hasOwnProperty("next") || this.resultsMeta.hasOwnProperty("prev")
  }
  selectPage(page: number) {
    if (this.selectedPage == page) return
    this.onPageSelect.emit(page)
    // this.selectedPage = page
    // console.log(`Selected page ${page}`)
  }
  checkIsSelected(page: number): boolean {
    return this.selectedPage == page
  }
}
