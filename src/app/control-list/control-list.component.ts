import { Component,  AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Control } from '../model/control.model';
import { ControlService } from '../service/control.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { CustomForm } from '../service/customForm.service';

declare var $: any;
@Component({
    selector: 'app-control-list',
    templateUrl: './control-list.component.html',
    styleUrls: ['./control-list.component.css']
})

export class ControlListComponent implements  AfterViewInit, OnInit {
    controls: Control[] = [ ];
    dummylink:Boolean = false;

    constructor(private formSrv:CustomForm, private router:Router, private route:ActivatedRoute) {
       
    }
    ngOnInit() {
        let id = this.route.params.subscribe(data=> {
            if(!data.id) {
                this.dummylink = true;
            } else {
                this.controls = this.formSrv.getControlsByFormId(data.id-1);
            }
        });
       
        
    }
    ngAfterViewInit() {
       
    }
    onCreateNewForm() {
       let id = this.formSrv.create();
        this.router.navigate(["" + id ],{relativeTo: this.route});
      }

}