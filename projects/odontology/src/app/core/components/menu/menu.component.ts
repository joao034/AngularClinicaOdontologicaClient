import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from '../../../helpers/services/menu.service';

@Component({
  selector: 'odonto-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[]
  expanded = true

  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  constructor(private menuService: MenuService){ 
    this.listMenu = menuService.getMenu();
  }

  ngOnInit(): void {
  }

  toggleExpanded(){
    this.expanded = !this.expanded;
    //Emite la respuesta del expanded
    this.onToggleExpanded.emit(this.expanded)
  }

}
