import { range as observableRange, Observable } from "rxjs";

import { toArray, filter, map } from "rxjs/operators";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-custom-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() offset = 1;
  @Input() limit = 10;
  @Input() size = 1;
  @Input() range = 3;
  @Input() isJumpingEnable = true;
  currentPage: number;
  totalPages: number;
  pages: Observable<number[]>;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    // console.log(this.offset, this.limit, this.size, "here is");
    this.getPages(this.offset, this.limit, this.size);
  }
 
  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = observableRange(-this.range, this.range * 2 + 1).pipe(
      map(offset => this.currentPage + offset),
      filter(page => this.isValidPageNumber(page, this.totalPages)),
      toArray()
    );
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number) {
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }

  cancelEvent(evnent: any) {
    evnent.stopPropagation();
  }
}
