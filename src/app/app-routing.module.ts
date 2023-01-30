import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'requirement', loadChildren: () => import('./modules/requirement/requirement.module').then(m => m.RequirementModule) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
