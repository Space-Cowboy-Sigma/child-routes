import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteOneComponent } from './routes/route-one/route-one.component';
import { RouteTwoComponent } from './routes/route-two/route-two.component';
import { RouteThreeComponent } from './routes/route-three/route-three.component';
import { ChildOneComponent } from './routes/route-two/child-routes/child-one/child-one.component';
import { ChildTwoComponent } from './routes/route-two/child-routes/child-two/child-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
