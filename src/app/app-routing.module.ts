import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZigComponent } from './zig/zig.component';
import { ZigynComponent } from './zigyn/zigyn.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  { path: '', redirectTo: '/ZIG', pathMatch: 'full' },
  { path: 'ZIG', component: ZigComponent, data: { title: 'ZIG' }},
  { path: 'ZIGYN', component: ZigynComponent, data: { title: 'ZIGYN' } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
