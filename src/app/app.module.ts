import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
