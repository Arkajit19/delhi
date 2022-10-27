import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutemployeeComponent } from './aboutemployee/aboutemployee.component';
import { HomeComponent } from './home/home.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: UserComponent,
    path: 'user/:id',
  },
  {
    component: AboutComponent,
    path: 'about',
    children: [
      {
        path: 'company',
        component: AboutcompanyComponent,
      },

      {
        path: 'employee',
        component: AboutemployeeComponent,
      },
    ],
  },
  {
    component: InvalidpageComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
