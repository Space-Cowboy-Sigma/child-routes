import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOneComponent } from './routes/route-one/route-one.component';
import { RouteThreeComponent } from './routes/route-three/route-three.component';
import { ChildOneComponent } from './routes/route-two/child-routes/child-one/child-one.component';
import { ChildTwoComponent } from './routes/route-two/child-routes/child-two/child-two.component';
import { RouteTwoComponent } from './routes/route-two/route-two.component';

const routes: Routes = [
  { path: 'route-one', component: RouteOneComponent },
  {
    path: 'route-two', component: RouteTwoComponent, children: [
      {
        path: '',
        redirectTo: 'child-one',
        pathMatch: 'full'
      },
      {
        path: 'child-one',
        component: ChildOneComponent
      },
      {
        path: 'child-two',
        component: ChildTwoComponent
      },
    ],
  },
  { path: 'route-three', component: RouteThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
