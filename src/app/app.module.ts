import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';
import { TemplateRef2Component } from './components/template-ref2/template-ref2.component';
import { TemplateRef3Component } from './components/template-ref3/template-ref3.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    TemplateRefComponent,
    TemplateRef2Component,
    TemplateRef3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
