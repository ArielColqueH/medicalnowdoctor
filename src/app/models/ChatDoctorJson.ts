import { ConversationModel } from "./ConversationModel";
import { DoctorNameModel } from "./DoctorNameModel";

export class ChatDoctorJson {
  doctorInfo: DoctorNameModel = new DoctorNameModel();
  content: ConversationModel[] = [];
}
