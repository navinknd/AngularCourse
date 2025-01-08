import { Component, OnInit, ViewChild } from '@angular/core';
import { TUser } from './components/user/user.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';

// type ClassObj = { [key: string]: boolean }

// type Classs = "active" | "highlight" | "inActive"

// type TUserType = "Admin" | "Editor" | "Viewer" | "Guest"

// type ClassObj = Record<Classs, boolean>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // isHightlight: boolean = true
  // isActive: boolean = true
  // colorValue: string = 'blue'
  // bgColor: string = 'lightgray'
  // display: string = "block"
  // isStructuralDirective: boolean = true;

  // items: string[] = ["item1", "item2", "item3", "item4", "item5"]

  // userRole: TUserType = "Guest"

  // constructor() {
  //   setTimeout(() => {
  //     this.bgColor = 'red'
  //   }, 3000);
  //   setTimeout(() => {
  //     this.display = 'none'
  //   }, 4000);
  // }
  // getClassNames(): ClassObj {
  //   return {
  //     'active': this.isActive, 'highlight': this.isHightlight,
  //     'inActive': true
  //   }
  // }

  // getStyles() {
  //   return {
  //     color: this.colorValue,
  //     'background-color': this.bgColor,
  //     display: this.display,
  //     border: this.display !== 'none' ? "1px solid green" : "none"
  //   }
  // }

  // switchFunction() {
  //   switch (this.userRole) {
  //     case "Admin":
  //       // conditions
  //       break;
  //     case "Editor":
  //       // code
  //       break;
  //     case "Viewer":
  //       // code

  //       break;

  //     default:

  //       break;
  //   }
  // }

  // userName: string = "";
  // userList: string[] = [];
  // myDate: Date = new Date();

  // @ViewChild("templeteRef") getTempleteRef!: TemplateRefComponent
  // @ViewChild(TemplateRefComponent) getTempleteRef!: TemplateRefComponent

  // addUser(): void {
  //   this.userList.push(this.userName);
  //   this.userName = ""

  //   console.log(this.userList, "here.....");

  // }

  // getDateFromCHild(data: TUser) {
  //   this.userList.push(data.name)
  //   this.userName = data.name;
  //   console.log(data, "check here..........", this.userList);
  // }

  // ngAfterViewInit(): void {

  //   console.log(this.getTempleteRef, "*************getTempleteRef*******************");

  // }

  email: string = ""

  getValue(){
    console.log("getValue called");
    
  }
}
