// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// component section
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
import { ServicesComponent } from './components/services/services.component';
import { Services1Component } from './components/services1/services1.component';
import { Services2Component } from './components/services2/services2.component';
import { UserComponent } from './DI/user/user.component';
import { AddUserComponent } from './DI/add-user/add-user.component';
import { DiUserService } from './DI/di-user.service';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
const route: Routes = [
  {
    path: "",
    component: TemplateRefComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "pipe",
    component: PipesComponent
  },
  {
    path: "user/:userId",
    component: UserComponent
  },
  {
    path: "parent",
    component: ParentComponent,
    children: [
      {
        path: "child",
        component: ChildComponent
      }
    ]
  }, {
    path: "rxjs",
    component: RxjsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
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
    HighlightDirective,
    ServicesComponent,
    Services1Component,
    AddUserComponent,
    UserComponent,
    Services2Component,
    RxjsComponent,
    RegisterComponent,
    ReactiveFormComponent,
    SignupComponent // import here components/directives/pipes
  ],
  imports: [
    BrowserModule, // importing other or required modules
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [DiUserService], // injecting the services

  exports: [],// where you are going to share component/pipe/directives to other module

  bootstrap: [AppComponent]
})
export class AppModule { }
