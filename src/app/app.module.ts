import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TabComponent } from './components/tab/tab.component';
import { AboutComponent } from './components/about/about.component';
import { HowComponent } from './components/how/how.component';
import { StartupsComponent } from './components/startups/startups.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    TabComponent,
    AboutComponent,
    HowComponent,
    StartupsComponent,
    PlatformsComponent,
    PricingComponent,
    JoinComponent,
    FooterComponent,
    HeaderMobileComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
