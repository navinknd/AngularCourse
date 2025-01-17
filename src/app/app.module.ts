// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// component section
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';
import { TemplateRef2Component } from './components/template-ref2/template-ref2.component';
import { TemplateRef3Component } from './components/template-ref3/template-ref3.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CpeComponent } from './components/cpe/cpe.component';
import { ContainerComponent } from './components/container/container.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
// pipes
import { PipesComponent } from './components/pipes/pipes.component';
import { CapPipe } from './pipes/cap.pipe';
import { AnsPipe } from './pipes/ans.pipe';
import { PiceCalPipe } from './pipes/pice-cal.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
// directives
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    TemplateRefComponent,
    TemplateRef2Component,
    TemplateRef3Component,
    ParentComponent,
    ChildComponent,
    CpeComponent,
    ContainerComponent,
    LifecycleComponent,
    PipesComponent,
    CapPipe,
    AnsPipe,
    PiceCalPipe,
    DiscountPipe,
    HighlightDirective // import here components/directives/pipes
  ],
  imports: [
    BrowserModule, // importing other or required modules
    FormsModule
  ],
  providers: [], // injecting the services

  exports: [],// where you are going to share component/pipe/directives to other module
  
  bootstrap: [AppComponent]
})
export class AppModule { }
