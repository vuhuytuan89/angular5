import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HocsinhComponent } from './Components/Hocsinh/Hocsinh.component';
import { KhoahocComponent } from './Components/Khoahoc/Khoahoc.component';
import { NhanvienComponent } from './Components/Nhanvien/nhanvien.component';
import { BaihatComponent } from './Components/baihat/baihat.component';
import { Bai1Component } from './Components/Bai1/bai1.component';
import { UserInputComponent } from './Components/user-input/user-input.component';
import { StructComponent } from './Components/struct/struct.component';
import { PersonComponent } from './components/person/person.component';
import { ListPersionComponent } from './components/list-persion/list-persion.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';
import { PicesComponent } from './components/pices/pices.component'

@NgModule({
  declarations: [
      AppComponent,
      HocsinhComponent,
      KhoahocComponent,
      NhanvienComponent,
      BaihatComponent,
      Bai1Component,
      UserInputComponent,
      StructComponent,
      PersonComponent,
      ListPersionComponent,
      NgComponentComponent,
      PicesComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
