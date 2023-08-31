import { AuthModule as Auth0Module } from "@auth0/auth0-angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { environment } from "../../../environments/environment";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Auth0Module.forRoot({
      domain: environment.auth0domain,
      clientId: environment.auth0clientId,
      authorizationParams: {
        redirect_uri: environment.appUrl,
      },
    })
  ],
})
export class AuthModule {}

