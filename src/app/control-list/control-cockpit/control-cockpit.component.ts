import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/service/control.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomForm } from 'src/app/service/customForm.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-control-cockpit',
  templateUrl: './control-cockpit.component.html',
  styleUrls: ['./control-cockpit.component.css']
})
export class ControlCockpitComponent implements OnInit {
  formName = "";
  editing = false;
Id = "";
  constructor(private controlSrv: ControlService, private formSrv: CustomForm, private route: ActivatedRoute,
    private _location: Location, private router: Router) {
    this.route.params.subscribe(data=>{
      this.Id = (data.id - 1).toString();
      if (this.formSrv.forms[data.id - 1]) {
        this.formName = this.formSrv.forms[data.id - 1].name;
      } else {
        this.router.navigate(["/Design"]);
      }
    });
    

  }

  ngOnInit() {
  }


  onAddElement(id: String, oControlType: String) {
    this.controlSrv.addControl(id, oControlType);
  }
  onMenuSelect(event: Event) {
    let id = this.route.snapshot.params.id;
    this.onAddElement((id - 1).toString(), (<HTMLElement>event.target).innerText);
  }
  backClicked() {
    this._location.back();
  }
  onEdit() {
    this.editing = true;
  }
  onDone(data) {
    this.formName = data;
    this.formSrv.forms[this.Id].name = data
    this.editing = false;
  }
  onCancel() {
    this.editing = false;
  }

}
