import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { MessageModel } from "src/app/models/message-model";

@Injectable({
  providedIn: "root",
})
export class ChatMensajeService {
  constructor(private _http: HttpClient) {}
  sendMenssage(doctorMessage: MessageModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/chat/send/message/` + localStorage.getItem("userId"),
      doctorMessage,
      {
        headers: reqHeader,
      }
    );
  }
}
