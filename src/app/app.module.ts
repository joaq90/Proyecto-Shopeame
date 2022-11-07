import { ErrorComponent } from './shared/components/error/error.component';
import { ProductsComponent } from './pages/products/products.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoShopeameComponent } from './shared/components/logo-shopeame/logo-shopeame.component';
import { ProductoComponent } from './shared/components/producto/producto.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestionComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    LogoShopeameComponent,
    ProductoComponent,
    TabComponent,
    ErrorComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
