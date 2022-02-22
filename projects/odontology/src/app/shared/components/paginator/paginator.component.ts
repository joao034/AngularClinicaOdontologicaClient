import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() length!: number;
  @Output() onNextPage:EventEmitter<number[]> = new EventEmitter<number[]>()

  OnPageChange(event: PageEvent){
    this.onNextPage.emit([event.pageIndex, event.pageSize])
  } 
}
