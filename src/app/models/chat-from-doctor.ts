import { ConversationModel } from "./ConversationModel";
import { PatientNameModel } from "./patient-name-model";

export class ChatFromDoctor {
  patientInfo: PatientNameModel = new PatientNameModel();
  content: ConversationModel[] = [];
}
