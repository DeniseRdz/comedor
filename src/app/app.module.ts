import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HistorialComponent } from './historial/historial.component';
import { RegisterComponent } from './register/register.component';
import { PlatilloComponent } from './platillo/platillo.component';
import { NavbarComponent } from './navbar/navbar.component';
const appRoutes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shoppingcart', component: CartComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    AboutComponent,
    CartComponent,
    HistorialComponent,
    RegisterComponent,
    PlatilloComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
