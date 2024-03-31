import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
