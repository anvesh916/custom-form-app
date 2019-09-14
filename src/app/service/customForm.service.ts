import { Control } from '../model/control.model';
import { EventEmitter } from '@angular/core';

export class CustomForm {
    formDisplayed= new EventEmitter();
    forms = [
        {
            name: "Campaign Header Form",
            createdBy: "Anvesh Kumar voona",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Active",
            controls: [
                new Control("Name", "input", "Enter name...")
            ]
        },
        {
            name: "Campaign Header Form 2",
            createdBy: "Anvesh Kumar voona",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Inactive",
            controls: [
                new Control("Name", "input", "Enter name..."),
                new Control("Date of birth", "date", "Enter message..."),

            ]
        },
        {
            name: "Export Definition",
            createdBy: "Anantha Padmanabhan",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Inactive",
            controls: [new Control("Are you an Indian ?", "checkbox", "Enter name..."),
            new Control("Date of birth", "date", "Enter message..."),
            new Control("Upload File", "file", ""),
            new Control("Password", "password", "Enter password here..")
            ]
        },
        {
            name: "Email Form",
            createdBy: "Anantha Padmanabhan",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Active",
            controls: [new Control("Upload File", "file", ""),
            
        ]
        },
        {
            name: "Email Form",
            createdBy: "Abishek S O",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Active",
            controls: [new Control("Password", "password", "Enter password here..")]
        }
    ]
    delete(i) {
        this.forms.splice(i, 1);
    }
    create() {
        this.forms.push({
            name: "New custom form",
            createdBy: "Abishek S O",
            createdOn: new Date(),
            allowEdit: true,
            allowDelete: true,
            status: "Inactive",
            controls: []
        })
        return this.forms.length;
    }
    getControlsByFormId(id) {
        if(!this.forms[id]) {
            return [];
        }
        return this.forms[id].controls;
    }
    addControl(id, control: Control) {
        this.forms[id].controls.push(control);
    }
    removeControl(id, ctrlId) {
        this.forms[id].controls.splice(ctrlId, 1);
    }
}