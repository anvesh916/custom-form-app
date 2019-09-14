import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from 'src/app/model/control.model';
import { ControlService } from 'src/app/service/control.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-list-item',
  templateUrl: './control-list-item.component.html',
  styleUrls: ['./control-list-item.component.css']
})
export class ControlListItemComponent implements OnInit {
  @Input() controlData: Control;
  
  constructor(private controlSrv:ControlService, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onEditControl(event : Event) {
    this.controlSrv.controlEditStarted.emit(this.controlData);
    }
    onDelete(index) {
      let id = this.route.snapshot.params.id;
      this.controlSrv.deleteControl(id - 1, index);
    }

}
