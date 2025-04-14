import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chamada-capital',
  templateUrl: './chamada-capital.component.html',
  styleUrls: ['./chamada-capital.component.scss']
})
export class ChamadaCapitalComponent {
  @Input() name: string = '';

  @Output() triggerEmit = new EventEmitter();

  public trigger() {
    this.triggerEmit.emit();
  }
}
