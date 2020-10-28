import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatSidenavModule } from "@angular/material";
import { HeaderComponent } from "./../../layout/header/header.component";
import { FooterComponent } from "./../../layout/footer/footer.component";
import { DialogsComponent } from "./../../modules/dialogs/dialogs.component";
import { LoginComponent } from "./../../modules/home/pages/login/login.component";
import { HomeComponent } from "./../../modules/home/pages/home/home.component";
import { LayoutComponent } from "./../../layout/layout.component";
import { MainComponent } from "./../../layout/main/main.component";
import { SidebarComponent } from "./../../layout/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { RecetasComponent } from "./pages/home/recetas/recetas.component";
import { HistorialComponent } from "./pages/home/historial/historial.component";
import { LaboratoriosComponent } from "./pages/home/laboratorios/laboratorios.component";
import { ConfiguracionesComponent } from "./pages/home/configuraciones/configuraciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AsistenciaBaseComponent } from "./pages/home/asistencia-base/asistencia-base.component";
import { AsistenciaComponent } from "./pages/home/asistencia-base/asistencia/asistencia.component";
import { ListaEspecialidadesComponent } from "./pages/home/asistencia-base/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./pages/home/asistencia-base/lista-especialistas/lista-especialistas.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DialogsComponent,
    LoginComponent,
    LayoutComponent,
    MainComponent,
    SidebarComponent,
    AsistenciaComponent,
    RecetasComponent,
    HistorialComponent,
    LaboratoriosComponent,
    ConfiguracionesComponent,
    AsistenciaBaseComponent,
    ListaEspecialidadesComponent,
    ListaEspecialistasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class HomeModule {}
