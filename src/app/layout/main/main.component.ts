import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  isSidebarOpen2: boolean = true;
  contentMargin = 25;
  constructor(
    private _location: Location,
    private _router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {}
  receiveOpen(event) {
    this.isSidebarOpen2 = event;
  }

  signout(): void {
    this.authService.doLogoutUser();
    this._router.navigate(["/login"]);
  }
}
