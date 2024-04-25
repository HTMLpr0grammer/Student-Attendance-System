import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentInfoComponent } from './student-info/student-info.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePage, FrontPageComponent, MenuContentComponent, LoginPageComponent, StudentInfoComponent]
})
export class HomePageModule {}
