import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layout/main/main.component";
import { AsistenciaBaseComponent } from "./modules/home/pages/home/asistencia-base/asistencia-base.component";
import { ListaEspecialidadesComponent } from "./modules/home/pages/home/asistencia-base/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./modules/home/pages/home/asistencia-base/lista-especialistas/lista-especialistas.component";
import { AsistenciaComponent } from "./modules/home/pages/home/asistencia-base/asistencia/asistencia.component";
import { ConfiguracionesComponent } from "./modules/home/pages/home/configuraciones/configuraciones.component";
import { HistorialComponent } from "./modules/home/pages/home/historial/historial.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { LaboratoriosComponent } from "./modules/home/pages/home/laboratorios/laboratorios.component";
import { RecetasComponent } from "./modules/home/pages/home/recetas/recetas.component";
import { LoginComponent } from "./modules/home/pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "asistencia",
        component: AsistenciaBaseComponent,
        children: [
          {
            path: "",
            component: AsistenciaComponent,
          },
          {
            path: "lista-especialidades",
            component: ListaEspecialidadesComponent,
          },
          {
            path: "lista-especialistas",
            component: ListaEspecialistasComponent,
          },
        ],
      },
      {
        path: "recetas",
        component: RecetasComponent,
      },
      {
        path: "historial",
        component: HistorialComponent,
      },
      {
        path: "laboratorios",
        component: LaboratoriosComponent,
      },
      {
        path: "configuraciones",
        component: ConfiguracionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
