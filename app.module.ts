import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SohoComponentsModule, SohoRenderLoopService } from 'ids-enterprise-ng';

import { AboutDemoComponent } from './about/about.demo';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routes';
import { ApplicationMenuLazyService } from './application-menu/application-menu-lazy-service.demo';

import { ApplicationMenuDemoComponent } from './application-menu/application-menu.demo';
import { SohoHeaderDynamicDemoComponent } from './header/header-dynamic.demo';

import { HeaderTabsDemoComponent } from './header/header-tabs.demo';
import { HeaderToggleButtonsDemoComponent } from './header/header-toggle-buttons.demo';
import { HeaderToolbarAndTabsDemoComponent } from './header/header-toolbar-and-tabs.demo';
import { HeaderToolbarDemoComponent } from './header/header-toolbar.demo';

import { HomePageDemoComponent } from './homepage/homepage.demo';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { SohoMastheadDemoComponent } from './masthead/masthead.demo';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { StatisticsModule } from './statistics/statistics.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutDemoComponent,
    HeaderTabsDemoComponent,
    HeaderToggleButtonsDemoComponent,
    HeaderToolbarAndTabsDemoComponent,
    HeaderToolbarDemoComponent,
    SohoHeaderDynamicDemoComponent,
    ApplicationMenuDemoComponent,
    SohoMastheadDemoComponent,
    PersonalizeMenuComponent,
    HomePageDemoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    StatisticsModule,
  ],
  providers: [
    ApplicationMenuLazyService,
    SohoRenderLoopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
