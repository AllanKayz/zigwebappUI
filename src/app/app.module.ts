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
import { AboutUsComponent } from './about-us/about-us.component';
import { GeochatComponent } from './geochat/geochat.component';
import { GeohubComponent } from './geohub/geohub.component';



@NgModule({
  declarations: [
    AppComponent,
    ZigComponent,
    ZigynComponent,
    LoginComponent,
    RegisterComponent,
    FinishSignUpDialogComponent,
    FooterComponent,
    AboutUsComponent,
    GeochatComponent,
    GeohubComponent
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
      apiKey: 'AIzaSyCNkuX7l7LXwNcTZCOLdmex4T4Kfnu_W3I'
    })
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
