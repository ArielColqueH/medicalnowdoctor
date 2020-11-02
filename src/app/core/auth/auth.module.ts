import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "src/app/modules/home/pages/login/login.component";
import { AuthService } from "./auth.service";
import { TokenInterceptor } from "./toke.interceptor";
import { RandomGuard } from "./guards/random.guard";

@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    RandomGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AuthModule {}
