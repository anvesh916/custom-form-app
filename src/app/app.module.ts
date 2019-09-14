import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlListComponent } from './control-list/control-list.component';
import { ControlListItemComponent } from './control-list/control-list-item/control-list-item.component';
import { ControlCockpitComponent } from './control-list/control-cockpit/control-cockpit.component';
import { HeaderComponent } from './header/header.component';
import { ControlHilightDirective } from './directives/control-hilight.directive';
import { MousePointer } from './directives/mouse-pointer.directive';
import { ControlEditItemComponent } from './control-list/control-edit-item/control-edit-item.component';
import { HomeComponent } from './home/home.component';
import { FormDisplayComponent } from './form-display/form-display.component';
import { AuthComponent } from './auth/auth.component';
import { FormControlDisplayComponent } from './form-display/form-control-display/form-control-display.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },

  {path: 'Display', component: FormDisplayComponent , children:[
    {path: ':id', component: FormControlDisplayComponent}
  ]},
  {path: 'Design', component: ControlListComponent },
  {path: 'Design/:id', component: ControlListComponent },
  {path: 'Sign-In', component: AuthComponent },
  {path: 'Sign-Up', component: AuthComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ControlListComponent,
    ControlListItemComponent,
    ControlCockpitComponent,
    HeaderComponent,
    ControlHilightDirective,
    MousePointer,
    ControlEditItemComponent,
    HomeComponent,
    FormDisplayComponent,
    AuthComponent,
    FormControlDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
