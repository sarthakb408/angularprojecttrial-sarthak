import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { CoffeeheaderComponent } from './coffeeheader/coffeeheader.component';
import { CoffeefooterComponent } from './coffeefooter/coffeefooter.component';
import { CoffeecontentComponent } from './coffeecontent/coffeecontent.component';
import { LogoComponent } from './coffeeheader/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    CoffeeheaderComponent,
    CoffeefooterComponent,
    CoffeecontentComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
