import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-asistencia",
  templateUrl: "./asistencia.component.html",
  styleUrls: ["./asistencia.component.scss"],
})
export class AsistenciaComponent implements OnInit {
  //title = "flex-tutorial";
  //mediaSib: Subscription;
  constructor() {}

  ngOnInit() {
    // this.mediaSib = this.mediaObserver.media$.subscribe(
    //   (result: MediaChange) => {
    //     console.log(result.mqAlias);
    //   }
    // );
  }
  // ngOnDestroy(): void {
  //   this.mediaSib.unsubscribe();
  // }
}
