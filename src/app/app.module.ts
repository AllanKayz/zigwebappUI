import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZigComponent } from './zig/zig.component';
import { ZigynComponent } from './zigyn/zigyn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FinishSignUpDialogComponent } from './finish-sign-up-dialog/finish-sign-up-dialog.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ZigComponent,
    ZigynComponent,
    LoginComponent,
    RegisterComponent,
    FinishSignUpDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: "your API Key"
    }) 
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
