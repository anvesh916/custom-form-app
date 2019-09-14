import { Component, OnInit } from '@angular/core';
import { CustomForm } from 'src/app/service/customForm.service';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/service/control.service';

@Component({
  selector: 'app-form-control-display',
  templateUrl: './form-control-display.component.html',
  styleUrls: ['./form-control-display.component.css']
})
export class FormControlDisplayComponent implements OnInit {
  formControls = [];
  constructor(private controlSrv:ControlService,private formSrv:CustomForm, private route:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.route.params.subscribe((data) =>{
      this.formControls = this.controlSrv.getControlByFormId(data.id - 1);
    })
    this.formSrv.formDisplayed.emit();
  }

}
