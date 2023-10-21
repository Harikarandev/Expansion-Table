
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../model/datamodel';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  public rows: Data[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRows().subscribe(data => {
      this.rows = data;
      console.log(this.rows);
    });
  }
}