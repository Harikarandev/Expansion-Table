import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Row } from '../../model/model';

@Component({
  selector: 'app-mat-expansion',
  templateUrl: './mat-expansion.component.html',
  styleUrls: ['./mat-expansion.component.css']
})
export class MatExpansionComponent implements OnInit{
  rows: Row[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRows().subscribe(data => {
      this.rows = data;
    });
  }

  toggleSelection(row: Row) {
    row.selected = !row.selected;
  }
}
