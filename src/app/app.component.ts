import { Component } from '@angular/core';
import { ControlService } from './service/control.service';
import { CustomForm } from './service/customForm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ControlService, CustomForm]
})
export class AppComponent {
  title = 'Custom-Forms';
  IsFormEnabled: Boolean = true;
  enableForm(data: Boolean){
    this.IsFormEnabled = data;
  }
}
