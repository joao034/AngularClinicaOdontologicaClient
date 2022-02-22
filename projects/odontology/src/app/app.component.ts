import { Component } from '@angular/core';

@Component({
  selector: 'odonto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odontology';
  expanded = true
  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }



}
