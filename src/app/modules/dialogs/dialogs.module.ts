import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MensajeAEspecialistaComponent } from "./mensaje-a-especialista/mensaje-a-especialista.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [MensajeAEspecialistaComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [MensajeAEspecialistaComponent],
})
export class DialogsModule {}
