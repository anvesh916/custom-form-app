import { Component, OnInit, ElementRef } from '@angular/core';
import { CustomForm } from '../service/customForm.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {
 forms = [];
 showSideContent = false;
  constructor(private customFormsrv: CustomForm, private route:ActivatedRoute) {
    this.customFormsrv.formDisplayed.subscribe((data) =>{
      this.showSideContent = true;
    });
   }
 
  
  ngOnInit() {
    this.forms = this.customFormsrv.forms;
    this.showSideContent = false;
  }
  
  statusFormatter(form) {
    return  (form.status === 'Active') ? 'bg-success' : 'bg-danger' ;
  }
  deleteForm(index) {
    this.customFormsrv.delete(index);
  }
  onCreateNewForm() {
    this.customFormsrv.create();
  }
  onSearch(data) {
    this.forms = this.customFormsrv.forms.filter((o) => {
      return o.name.toLocaleLowerCase().includes(data);
    });
  }
  onView() {
    this.showSideContent = true;
  }
  toDateString(data) {
    return data.toDateString();
  }
  onDeactive() {
    this.showSideContent = false;
  }

}
