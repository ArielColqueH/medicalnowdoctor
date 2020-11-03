import { Component, OnInit } from "@angular/core";
import { Prescription } from "src/app/models/prescription";

@Component({
  selector: "app-detalle-prescripcion",
  templateUrl: "./detalle-prescripcion.component.html",
  styleUrls: ["./detalle-prescripcion.component.scss"],
})
export class DetallePrescripcionComponent implements OnInit {
  prescriptionList: Prescription[] = [
    {
      prescriptionId: 1,
      prescriptionName: "Vitagripin",
      prescriptionDetail: "5 pastillas diarias",
      prescriptionQuantity: 10,
    },
    {
      prescriptionId: 2,
      prescriptionName: "Alikal LCH",
      prescriptionDetail: "4 pastillas diarias",
      prescriptionQuantity: 15,
    },
  ];

  constructor() {}

  ngOnInit() {}
}