import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutDemoComponent } from './about/about.demo';

import { HomePageDemoComponent } from './homepage/homepage.demo';
import { OccupancyComponent } from './statistics/occupancy/occupancy.component';



export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // default  
  { path: 'about', component: AboutDemoComponent },
  { path: 'homepage', component: HomePageDemoComponent },
  { path: 'statistics', component: OccupancyComponent },

];

/**
 * To test the application using the hashing routing strategy, swap the two lines below.
 */
// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
