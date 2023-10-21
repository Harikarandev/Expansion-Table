
import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../model/datamodel';

@Component({
  selector: 'app-childexpansion',
  templateUrl: './childexpansion.component.html',
  styleUrls: ['./childexpansion.component.css']
})
export class ChildExpansionComponent {
  @Input() items!: any[];
  activeId: string = '';

  constructor() { }

  setActive(id: string) {
    this.activeId = id;
  }

  toggle(id: string) {
    this.activeId = this.activeId === id ? '' : id;
  }

  isParentActive(id: string): boolean {
    return this.activeId === id;
  }
}