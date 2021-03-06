import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { CoffeeheaderComponent } from './coffeeheader/coffeeheader.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';
import { CoffeecontentComponent } from './coffeecontent/coffeecontent.component';
import { LogoComponent } from './coffeeheader/logo/logo.component';
import { ProductsComponent } from './header/products/products.component';
import { ProductdetailsComponent } from './header/products/productdetails/productdetails.component';
import { DatetimeService } from './datetime.service'
import { UserInformationService } from './user-information.service';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    CoffeeheaderComponent,
    CoffeefooterComponent,
    CoffeecontentComponent,
    LogoComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ReactiveformsComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ DatetimeService, UserInformationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
