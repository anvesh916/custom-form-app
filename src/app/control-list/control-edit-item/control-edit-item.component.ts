import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Control } from 'src/app/model/control.model';
import { ControlService } from 'src/app/service/control.service';
declare var $: any;
@Component({
  selector: 'app-control-edit-item',
  templateUrl: './control-edit-item.component.html',
  styleUrls: ['./control-edit-item.component.css']
})
export class ControlEditItemComponent implements OnInit {
  controlData: Control = new Control("", "", "");
  constructor(private controlSrv: ControlService) {
    this.controlSrv.controlEditStarted.subscribe(this.openModal.bind(this));
  }

  ngOnInit() {
  }

  openModal(data) {
    this.controlData = data;
    $('#exampleModalCenter').modal();
  }

}
