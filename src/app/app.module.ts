import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChequeslistComponent } from './chequeslist/chequeslist.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { TestComponent } from './test/test.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'cheques', component: ChequeslistComponent },
  { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
{ path: 'cart', component: CartComponent },
{ path: 'Search', component: SearchComponent }

];
//

@NgModule({
  declarations: [
    AppComponent,
    ChequeslistComponent,
    DashboardComponent,
    HomeComponent,
    TestComponent,
    AccountComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
OwlModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
