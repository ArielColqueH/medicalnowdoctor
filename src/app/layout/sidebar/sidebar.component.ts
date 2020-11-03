import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = true;
  mylogo: string = "assets/images/Logo.png";
  message: String = "link";
  constructor(private router: Router) {}

  ngOnInit() {}
  irALink(link: string) {
    this.router.navigate(["/" + link + "/" + localStorage.getItem("userId")]);
  }
}
