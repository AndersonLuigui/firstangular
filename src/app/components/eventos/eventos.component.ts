import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean=false;
  showother: boolean=false;

  showMessage(): void {
    this.show = !this.show; // toggle
  }

  showOther(): void {
    this.showother = !this.showother;
  }

}
