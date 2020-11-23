import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ChatDoctorService } from "src/app/core/http/services/chat-doctor.service";
import { ChatDoctorJson } from "src/app/models/ChatDoctorJson";

@Component({
  selector: "app-mini-chat",
  templateUrl: "./mini-chat.component.html",
  styleUrls: ["./mini-chat.component.scss"],
})
export class MiniChatComponent implements OnInit {
  chat = new ChatDoctorJson();
  aux = this.data.prescriptionId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,

    private _route: ActivatedRoute,
    private httpClient: HttpClient,
    private _service: ChatDoctorService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos() {
    this._service.listChat(this.aux).subscribe((data) => (this.chat = data));
  }
}
