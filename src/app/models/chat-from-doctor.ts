import { ChatModel } from "./ChatModel";
import { PatientNameModel } from "./patient-name-model";

export class ChatFromDoctor {
  patientInfo: PatientNameModel = new PatientNameModel();
  content: ChatModel[] = [];
}
