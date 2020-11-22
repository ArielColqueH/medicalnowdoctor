import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth.guard";
import { MainComponent } from "./layout/main/main.component";
import { ArchivadasBaseComponent } from "./modules/home/pages/home/archivadas-base/archivadas-base.component";
import { ListaArchivadasComponent } from "./modules/home/pages/home/archivadas-base/lista-archivadas/lista-archivadas.component";
import { AsistenciaBaseComponent } from "./modules/home/pages/home/asistencia-base/asistencia-base.component";
import { AsistenciaMedicaComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/asistencia-medica.component";
import { ListaEspecialidadesComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialistas/lista-especialistas.component";

import { ConfiguracionesComponent } from "./modules/home/pages/home/configuraciones/configuraciones.component";
import { ConsultasBaseComponent } from "./modules/home/pages/home/consultas-base/consultas-base.component";
import { ConsultaIndividualComponent } from "./modules/home/pages/home/consultas-base/consultas-lista/consulta-individual/consulta-individual.component";
import { ConsultasListaComponent } from "./modules/home/pages/home/consultas-base/consultas-lista/consultas-lista.component";
import { HistorialBaseComponent } from "./modules/home/pages/home/historial-base/historial-base.component";
import { HistorialCompletoComponent } from "./modules/home/pages/home/historial-base/historial-lista/historial-lista-detalle/historial-completo/historial-completo.component";

import { HistorialListaDetalleComponent } from "./modules/home/pages/home/historial-base/historial-lista/historial-lista-detalle/historial-lista-detalle.component";
import { HistorialListaComponent } from "./modules/home/pages/home/historial-base/historial-lista/historial-lista.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { LaboratoriosComponent } from "./modules/home/pages/home/laboratorios/laboratorios.component";
import { PrescripcionesBaseComponent } from "./modules/home/pages/home/prescripciones-base/prescripciones-base.component";
import { PrescripcionesDetalleComponent } from "./modules/home/pages/home/prescripciones-base/prescripciones/prescripciones-detalle/prescripciones-detalle.component";
import { PrescripcionesComponent } from "./modules/home/pages/home/prescripciones-base/prescripciones/prescripciones.component";

import { LoginComponent } from "./modules/home/pages/login/login.component";
import { RegistroComponent } from "./modules/home/pages/registro/registro.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registro",
    component: RegistroComponent,
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "consultas/:id",
        component: ConsultasBaseComponent,
        children: [
          {
            path: "",
            component: ConsultasListaComponent,
          },
          {
            path: "consulta-individual/:id",
            children: [
              {
                path: "",
                component: ConsultaIndividualComponent,
              },
            ],
          },
        ],
      },
      // {
      //   path: "asistencia-medica/:id",
      //   component: AsistenciaBaseComponent,
      //   children: [
      //     {
      //       path: "",
      //       component: AsistenciaMedicaComponent,
      //     },
      //     {
      //       path: "lista-especialidades",
      //       children: [
      //         {
      //           path: "",
      //           component: ListaEspecialidadesComponent,
      //         },
      //         {
      //           path: "lista-especialistas/:id",
      //           component: ListaEspecialistasComponent,
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        path: "prescripciones/:id",
        component: PrescripcionesBaseComponent,
        children: [
          {
            path: "",
            component: PrescripcionesComponent,
          },
          {
            path: "prescripcion-detalle",
            children: [
              {
                path: "",
                component: PrescripcionesDetalleComponent,
              },
            ],
          },
        ],
      },
      // {
      //   path: "historial/:id",
      //   component: HistorialListaComponent,
      // },
      {
        path: "historial/:id",
        component: HistorialBaseComponent,
        children: [
          {
            path: "",
            component: HistorialListaComponent,
          },
          {
            path: "historial-lista-detalle/:id",
            children: [
              {
                path: "",
                component: HistorialListaDetalleComponent,
              },
              {
                path: "historial-completo/:id",
                children: [
                  {
                    path: "",
                    component: HistorialCompletoComponent,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "archivadas/:id",
        component: ArchivadasBaseComponent,
        children: [
          {
            path: "",
            component: ListaArchivadasComponent,
          },
          // {
          //   path: "historial-completo",
          //   children: [
          //     {
          //       path: "",
          //       component: HistorialCompletoComponent,
          //     },
          //   ],
          // },
        ],
      },

      {
        path: "laboratorios/:id",
        component: LaboratoriosComponent,
      },
      {
        path: "configuraciones/:id",
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
