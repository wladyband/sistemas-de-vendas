import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AdminModule } from './admin/admin.module';
import { CoreadminModule } from './admin/coreadmin/coreadmin.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './restaurant/routes/app.routes';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    RouterModule,
    RestaurantModule,
    AdminModule,
    
    CoreadminModule,
    CoreModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
