import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {path: '', component:
        FrontPageComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
