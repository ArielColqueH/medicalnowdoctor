import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = true;
  mylogo: string = "assets/images/Logo.png";
  message: String = "link";
  constructor() {}

  ngOnInit() {}
}
