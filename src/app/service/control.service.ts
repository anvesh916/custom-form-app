import { Control } from '../model/control.model';
import { EventEmitter } from '@angular/core';
import { CustomForm } from './customForm.service';

export class ControlService {
    controlEditStarted = new EventEmitter();
    controls: Control[] = [];
    constructor(private customFormSrv:CustomForm) {

    }
    addControl(id:String, element: String) {
        let newControl;
        switch (element) {
          case "Input":
            newControl = new Control("Sample input", "Input", "Enter value...");
            break;
          case "CheckBox":
            newControl = new Control("Sample checkbox", "checkBox", "");
            break;
          case "Date":
            newControl = new Control("Sample Date", "date", "Enter value...");
            break;
          case "File":
            newControl = new Control("Sample File", "file", "Select file");
            break;
          case "Password":
            newControl = new Control("Sample Password", "password", "Enter password...");
            break;
        }
        this.customFormSrv.addControl(id, newControl);
    }
    deleteControl(id, ctrlId) {
        this.customFormSrv.removeControl(id, ctrlId);
    }
    getControlByFormId(id) {
      return this.customFormSrv.getControlsByFormId(id);
    }
}