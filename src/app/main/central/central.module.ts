import {NgModule} from '@angular/core';
import {PrincipalComponent} from './vistas/principal/principal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreCommonModule} from '@core/common.module';
import {RouterModule} from '@angular/router';
import {ContentHeaderModule} from 'app/layout/components/content-header/content-header.module';
import {TranslateModule} from '@ngx-translate/core';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FormsModule} from '@angular/forms';
import {CoreTouchspinModule} from '@core/components/core-touchspin/core-touchspin.module';
import {CoreSidebarModule} from '@core/components';
import {AuthGuard} from '../../auth/helpers';
import 'flatpickr/dist/flatpickr.css'; // you may need to adjust the css import depending on your build tool
import {FlatpickrModule} from 'angularx-flatpickr';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {CardSnippetModule} from '../../../@core/components/card-snippet/card-snippet.module';
import {PerfilUsuarioComponent} from '../center/perfil-usuario/perfil-usuario.component';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {QRCodeModule} from 'angularx-qrcode';
import {ListarComponent as EmpresasComponent} from './vistas/corp/empresas/listar/listar.component';
import {ListarComponent as EmpleadosCorp1} from './vistas/corp/empleados/listar/listar.component';
import {ListarComponent as UsuariosCorpComponent} from './vistas/corp/usuarios/listar/listar.component';
import {ListarComponent as RolesCorpComponent} from './vistas/corp/roles/listar/listar.component';
import {ListarComponent as UsuariosCenterComponent} from './vistas/center/usuarios/listar/listar.component';
import {ListarComponent as RolesCenterComponent} from './vistas/center/roles/listar/listar.component';
import {ListarComponent as ParametrizacionesCenterComponent} from './vistas/center/parametrizaciones/listar/listar.component';
import {ListarComponent as ProductosCenterComponent} from './vistas/center/productos/listar/listar.component';
import {ListarComponent as CargarSuperMonedasCorpComponent} from './vistas/corp/cargarSuperMonedas/listar/listar.component';
import {ListarComponent as PublicacionesListar} from './vistas/center/publicaciones/listar/listar.component';
import {UploadComponent} from './vistas/corp/cargarCreditosEmpleados/vistas/upload/upload.component';
import {ListarComponent as ProductosBienvenidaListar} from './vistas/center/productos-bienvenida-sm/listar/listar.component';
import {ListarComponent as ProductosMensajeListar} from './vistas/center/productos-mensaje-sm/listar/listar.component';
import {ListarComponent as ProductosNuestraFamiliaListar} from './vistas/center/productos-nuestra-familia-sm/listar/listar.component';
import {ListarComponent as CorreosLandingListar} from './vistas/center/Correos-landing/listar/listar.component';
import {ConsumoCreditosComponent} from './vistas/center/consumo-creditos/consumo-creditos.component';
import {EmpleadosComponent} from './vistas/center/solicitudes-creditos/empleados/empleados.component';
import {RevisionDocumentosComponent} from './vistas/center/solicitudes-creditos/revision-documentos/revision-documentos.component';
import {NegocioPropioComponent} from './vistas/center/solicitudes-creditos/negocio-propio/negocio-propio.component';
import {ValoresProcesoComponent} from './vistas/center/solicitudes-creditos/valores-proceso/valores-proceso.component';
import {ResumenComponent} from './vistas/center/solicitudes-creditos/resumen/resumen.component';
import {
    NegocioPropioPreaprovaodsComponent
} from './vistas/center/solicitudes-creditos/negocio-propio-preaprovaods/negocio-propio-preaprovaods.component';
import {EmpleadosPreaprovaodsComponent} from './vistas/center/solicitudes-creditos/empleados-preaprovaods/empleados-preaprovaods.component';
import {
    MicrocreditosPreAprovadosComponent
} from './vistas/center/solicitudes-creditos/microcreditos-pre-aprovados/microcreditos-pre-aprovados.component';
import {MicrocreditosNormalesComponent} from './vistas/center/solicitudes-creditos/microcreditos-normales/microcreditos-normales.component';
import {SolicitudesPagoProveedoresComponent} from './vistas/center/solicitudes-pago-proveedores/solicitudes-pago-proveedores.component';
import {
    SolicitudesPagoCasasComercialComponent
} from './vistas/center/solicitudes-pago-casas-comercial/solicitudes-pago-casas-comercial.component';
import {EmpleadosComponent as EmpleadosCorp} from './vistas/corp/empleados/empleados/empleados.component';
import {
    SolicitudPagoCasasComercialesComponent
} from './vistas/center/solicitud-pago-casas-comerciales/solicitud-pago-casas-comerciales.component';
import {
    UploadLineasCreditosComponent
} from './vistas/corp/cargarLineasCreditos/vistas/upload/upload-lineas-creditos.component';
import {ViewFileComponent} from './vistas/corp/cargarLineasCreditos/vistas/view-file/view-file.component';
import {
    IfisEmpleadosPreaprovaodsComponent
} from './vistas/center/solicitudes-creditos/ifis/empleados-preaprovaods/ifis-empleados-preaprovaods.component';
import {
    IfisNegocioPropioPreaprovaodsComponent
} from './vistas/center/solicitudes-creditos/ifis/negocio-propio-preaprovaods/ifis-negocio-propio-preaprovaods.component';
import {
    IfisMicrocreditosPreAprovadosComponent
} from './vistas/center/solicitudes-creditos/ifis/microcreditos-pre-aprovados/ifis-microcreditos-pre-aprovados.component';
import {MatTreeModule} from '@angular/material/tree';
import {AlfaComponent} from './vistas/center/solicitudes-creditos/alfa/alfa.component';
import {SolicitudesPagoEmpleadosComponent} from './vistas/center/solicitudes-pago-empleados/solicitudes-pago-empleados.component';
import {RecargarLineasCreditos} from './vistas/corp/recargarLineasCreditos/vistas/upload/recargar-lineas-creditos.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {
    ConfirmacionRecargarLineasCreditos
} from './vistas/corp/recargarLineasCreditos/vistas/confirmacion/confirmar-recarga-lineas-creditos.component';
import {
    SolicitudesCreditosAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/solicitudes-creditos-automotriz.component';
import {
    ValoresProcesoAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/valores-proceso-automotriz/valores-proceso-automotriz.component';
import {
    RevisionDocumentosAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/revision-documentos-automotriz/revision-documentos-automotriz.component';
import {ResumenAutomotrizComponent} from './vistas/center/automotriz-solicitudes-creditos/resumen-automotriz/resumen-automotriz.component';
import {
    NegocioPropioPreaprovaodsAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/negocio-propio-preaprovaods-automotriz/negocio-propio-preaprovaods-automotriz.component';
import {
    NegocioPropioAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/negocio-propio-automotriz/negocio-propio-automotriz.component';
import {
    MicrocreditosPreAprovadosAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/microcreditos-pre-aprovados-automotriz/microcreditos-pre-aprovados-automotriz.component';
import {
    MicrocreditosNormalesAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/microcreditos-normales-automotriz/microcreditos-normales-automotriz.component';
import {
    IfisNegocioPropioPreaprovaodsAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/ifis-automotriz/negocio-propio-preaprovaods-automotriz/ifis-negocio-propio-preaprovaods-automotriz.component';
import {
    IfisMicrocreditosPreAprovadosAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/ifis-automotriz/microcreditos-pre-aprovados-automotriz/ifis-microcreditos-pre-aprovados-automotriz.component';
import {
    IfisEmpleadosPreaprovaodsAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/ifis-automotriz/empleados-preaprovaods-automotriz/ifis-empleados-preaprovaods-automotriz.component';
import {
    EmpleadosPreaprovaodsAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/empleados-preaprovaods-automotriz/empleados-preaprovaods-automotriz.component';
import {
    EmpleadosAutomotrizComponent
} from './vistas/center/automotriz-solicitudes-creditos/empleados-automotriz/empleados-automotriz.component';
import {AlfaAutomotrizComponent} from './vistas/center/automotriz-solicitudes-creditos/alfa-automotriz/alfa-automotriz.component';
import {UploadAutomotrizComponent} from './vistas/corp/cargarCreditosAutomotriz/vistas/upload/upload-automotriz.component';
import {
    SolicitudesEmpleadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/empleados-digital/solicitudes-empleados-center-digital.component';
import {
    EmpleadosPreaprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/empleados-preaprovados-digital/empleados-preaprovados-center-digital.component';
import {
    IfisEmpleadosPreaprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/ifis-digital/empleados-preaprovados-digital/ifis-empleados-preaprovados-center-digital.component';
import {
    IfisMicrocreditosPreAprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/ifis-digital/microcreditos-pre-aprovados-digital/ifis-microcreditos-pre-aprovados-center-digital.component';
import {
    IfisNegocioPropioPreaprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/ifis-digital/negocio-propio-preaprovados-digital/ifis-negocio-propio-preaprovados-center-digital.component';
import {
    MicrocreditosNormalesCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/microcreditos-normales-digital/microcreditos-normales-center-digital.component';
import {
    MicrocreditosPreAprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/microcreditos-pre-aprovados-digital/microcreditos-pre-aprovados-center-digital.component';
import {
    NegocioPropioCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/negocio-propio-digital/negocio-propio-center-digital.component';
import {
    NegocioPropioPreaprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/negocio-propio-preaprovados-digital/negocio-propio-preaprovados-center-digital.component';
import {
    RevisionDocumentosDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/revision-documentos-digital/revision-documentos-digital.component';
import {EmpleadosDigitalComponent} from './vistas/center/solicitudes-creditos-digitales/empleados-digital/empleados-digital.component';
import {
    NegocioPropioDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/negocio-propio-digital/negocio-propio-digital.component';
import {
    NegocioPropioPreaprovaodsDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/negocio-propio-preaprovaods-digital/negocio-propio-preaprovaods-digital.component';
import {
    EmpleadosPreaprovaodsDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/empleados-preaprovaods-digital/empleados-preaprovaods-digital.component';
import {
    MicrocreditosPreAprovadosDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/microcreditos-pre-aprovados-digital/microcreditos-pre-aprovados-digital.component';
import {
    MicrocreditosNormalesDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/microcreditos-normales-digital/microcreditos-normales-digital.component';
import {
    IfisNegocioPropioPreaprovaodsDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/ifis-digital/negocio-propio-preaprovaods-digital/ifis-negocio-propio-preaprovaods-digital.component';
import {
    IfisEmpleadosPreaprovaodsDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/ifis-digital/empleados-preaprovaods-digital/ifis-empleados-preaprovaods-digital.component';
import {
    IfisMicrocreditosPreAprovadosDigitalComponent
} from './vistas/center/solicitudes-creditos-digitales/ifis-digital/microcreditos-pre-aprovados-digital/ifis-microcreditos-pre-aprovados-digital.component';
import {AlfaDigitalComponent} from './vistas/center/solicitudes-creditos-digitales/alfa-digital/alfa-digital.component';
import {UploadDigitalesComponent} from './vistas/corp/cargarCreditosDigitales/vistas/upload/upload-digitales.component';
import {
    AlfaPreaprovadosCenterDigitalComponent
} from './vistas/center/solicitudes-creditos-local-digital/alfa-preaprovados-digital/alfa-preaprovados-center-digital.component';
import {
    UploadAutomotrizDigitalComponent
} from './vistas/corp/cargarCreditosAutomotrizDigital/vistas/upload/upload-automotriz-digital.component';
import {
    UploadLineasCreditosDigitalComponent
} from './vistas/corp/cargarLineasCreditosDigital/vistas/upload/upload-lineas-creditos-digital.component';
import {ViewFileDigitalComponent} from './vistas/corp/cargarLineasCreditosDigital/vistas/view-file/view-file-digital.component';
import {NgSelectModule} from '@ng-select/ng-select';


const routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {
        path: 'inicio',
        component: PrincipalComponent,
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
    },
    {
        path: 'corp', children: [
            {
                path: '', redirectTo: 'cargar_empleados', pathMatch: 'full'
            },
            {
                path: 'empresas', component: EmpresasComponent, canActivate: [AuthGuard]
            },
            {
                path: 'empleados', component: EmpleadosCorp1, canActivate: [AuthGuard]
            },
            {
                path: 'cargar_empleados', component: EmpleadosCorp, canActivate: [AuthGuard]
            },
            {
                path: 'usuarios', component: UsuariosCorpComponent, canActivate: [AuthGuard]
            },
            {
                path: 'roles', component: RolesCorpComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarBig-Puntos', component: CargarSuperMonedasCorpComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosdeConsumo', component: UploadComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosdeConsumoDigitales', component: UploadDigitalesComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosAutomotriz', component: UploadAutomotrizComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosAutomotrizDigital', component: UploadAutomotrizDigitalComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosNegocios', component: UploadLineasCreditosComponent, canActivate: [AuthGuard]
            },
            {
                path: 'cargarCreditosNegociosDigitales', component: UploadLineasCreditosDigitalComponent, canActivate: [AuthGuard]
            },
            {
                path: 'recargarLineasCreditos', component: RecargarLineasCreditos, canActivate: [AuthGuard]
            },
            {
                path: 'confirmacionRecargarLineasCreditos', component: ConfirmacionRecargarLineasCreditos, canActivate: [AuthGuard]
            },
            {
                path: 'archivo/:archivoId', component: ViewFileComponent, canActivate: [AuthGuard]
            },
        ],
    },
    {
        path: 'center', children: [
            {
                path: '', redirectTo: 'usuarios', pathMatch: 'full'
            },
            {
                path: 'usuarios', component: UsuariosCenterComponent, canActivate: [AuthGuard]
            },
            {
                path: 'roles', component: RolesCenterComponent, canActivate: [AuthGuard]
            },
            {
                path: 'parametrizaciones', component: ParametrizacionesCenterComponent, canActivate: [AuthGuard]
            },
            {
                path: 'productos', component: ProductosCenterComponent, canActivate: [AuthGuard]
            },
            {
                path: 'productos-bienvenido-sm', component: ProductosBienvenidaListar, canActivate: [AuthGuard]
            },
            {
                path: 'productos-mensaje-sm', component: ProductosMensajeListar, canActivate: [AuthGuard]
            },
            {
                path: 'productos-nuestra-familia-sm', component: ProductosNuestraFamiliaListar, canActivate: [AuthGuard]
            },
            {
                path: 'reporte-correos-landing', component: CorreosLandingListar, canActivate: [AuthGuard]
            },
            // visado solicitud de créditos
            {
                path: 'visado-creditos-local',
                loadChildren: () =>
                    import('./vistas/center/visado-creditos-local/visado-creditos-local.module').then((m) => m.VisadoCreditosLocalModule)
            },
            // fin visado solicitud de créditos

            // visado solicitud de créditos digitales
            {
                path: 'visado-creditos-local-digital',
                children: [
                    {path: '', redirectTo: 'empleados-center-digital', pathMatch: 'full'},
                    {
                        path: 'empleados-center-digital',
                        component: SolicitudesEmpleadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-propio-center-digital',
                        component: NegocioPropioCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-propios-pre-aprobados-center-digital',
                        component: NegocioPropioPreaprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'empelados-pre-aprobados-center-digital',
                        component: EmpleadosPreaprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'empelados-pre-aprobados-center-digital-alfa',
                        component: AlfaPreaprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditpreaprobado-center-digital',
                        component: MicrocreditosPreAprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditsolicitud-center-digital',
                        component: MicrocreditosNormalesCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/negocios-propios-pre-aprobados-center-digital',
                        component: IfisNegocioPropioPreaprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/empelados-pre-aprobados-center-digital',
                        component: IfisEmpleadosPreaprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/microcreditpreaprobado-center-digital',
                        component: IfisMicrocreditosPreAprovadosCenterDigitalComponent,
                        canActivate: [AuthGuard]
                    },
                ]
            },
            // fin visado solicitud de créditos digitales
            // visado solicitud de créditos automotriz digitales
            {
                path: 'solicitudes-creditos-automotriz-digital-local',
                loadChildren: () =>
                    import('./vistas/center/solicitudes-creditos-automotriz-digitales-local/solicitudes-creditos-automotriz-digitales-local.module').then((m) => m.SolicitudesCreditosAutomotrizDigitalesLocalModule)
            },
            // fin visado solicitud de créditos digitales

            // solicitudes créditos
            {
                path: 'solicitudes-creditos',
                children: [
                    {path: '', redirectTo: 'empleados', pathMatch: 'full'},
                    {
                        path: 'empleados',
                        component: EmpleadosComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios',
                        component: NegocioPropioComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-propios-pre-aprobados',
                        component: NegocioPropioPreaprovaodsComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'empelados-pre-aprobados',
                        component: EmpleadosPreaprovaodsComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditPreAprovado',
                        component: MicrocreditosPreAprovadosComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditNormales',
                        component: MicrocreditosNormalesComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/negocios-propios-pre-aprobados',
                        component: IfisNegocioPropioPreaprovaodsComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/empelados-pre-aprobados',
                        component: IfisEmpleadosPreaprovaodsComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/microcreditPreAprovado',
                        component: IfisMicrocreditosPreAprovadosComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'alfa',
                        component: AlfaComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                ]
            },
            // fin solicitudes créditos
            // solicitudes créditos digitales
            {
                path: 'solicitudes-creditos-digital',
                children: [
                    {path: '', redirectTo: 'empleados-digital', pathMatch: 'full'},
                    {
                        path: 'empleados-digital',
                        component: EmpleadosDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-digital',
                        component: NegocioPropioDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-propios-pre-aprobados-digital',
                        component: NegocioPropioPreaprovaodsDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'empelados-pre-aprobados-digital',
                        component: EmpleadosPreaprovaodsDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditPreAprovado-digital',
                        component: MicrocreditosPreAprovadosDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditNormales-digital',
                        component: MicrocreditosNormalesDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/negocios-propios-pre-aprobados-digital',
                        component: IfisNegocioPropioPreaprovaodsDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/empelados-pre-aprobados-digital',
                        component: IfisEmpleadosPreaprovaodsDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/microcreditPreAprovado-digital',
                        component: IfisMicrocreditosPreAprovadosDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'alfa-digital',
                        component: AlfaDigitalComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                ]
            },
            // fin solicitudes créditos digital
            {
                path: 'solicitudes-creditos-automotriz',
                children: [
                    {path: '', redirectTo: 'empleados', pathMatch: 'full'},
                    {
                        path: 'empleados-automotriz',
                        component: EmpleadosAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-automotriz',
                        component: NegocioPropioAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'negocios-propios-pre-aprobados-automotriz',
                        component: NegocioPropioPreaprovaodsAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'empelados-pre-aprobados-automotriz',
                        component: EmpleadosPreaprovaodsAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditPreAprovado-automotriz',
                        component: MicrocreditosPreAprovadosAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'microcreditNormales-automotriz',
                        component: MicrocreditosNormalesAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/negocios-propios-pre-aprobados-automotriz',
                        component: IfisNegocioPropioPreaprovaodsAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/empelados-pre-aprobados-automotriz',
                        component: IfisEmpleadosPreaprovaodsAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'ifis/microcreditPreAprovado-automotriz',
                        component: IfisMicrocreditosPreAprovadosAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'alfa-automotriz',
                        component: AlfaAutomotrizComponent,
                        // data: {roles: [Role.BigPuntos]},
                        canActivate: [AuthGuard]
                    },
                ]
            },
            {
                path: 'solicitudes-creditos-automotriz-digital-revision',
                loadChildren: () =>
                    import('./vistas/center/solicitudes-creditos-automotriz-digital/solicitudes-creditos-automotriz-digital.module')
                        .then((m) => m.SolicitudesCreditosAutomotrizDigitalModule)
            },
            {
                path: 'solicitud-pago-proveedores', component: SolicitudesPagoProveedoresComponent, canActivate: [AuthGuard]
            },
            {
                path: 'solicitud-pago-empleados', component: SolicitudesPagoEmpleadosComponent, canActivate: [AuthGuard]
            },
            {
                path: 'solicitud-pago-casas-comerciales-XYZ', component: SolicitudesPagoCasasComercialComponent, canActivate: [AuthGuard]
            },
            {
                path: 'solicitud-pago-locales-comerciales', component: SolicitudPagoCasasComercialesComponent, canActivate: [AuthGuard]
            },
            {
                path: 'consumosCreditos', component: ConsumoCreditosComponent, canActivate: [AuthGuard]
            },
            {
                path: 'publicaciones', component: PublicacionesListar, canActivate: [AuthGuard]
            },
        ]
    }


];

@NgModule({
    declarations: [
        PrincipalComponent,
        PerfilUsuarioComponent,
        EmpresasComponent,
        EmpleadosCorp1,
        UsuariosCorpComponent,
        RolesCorpComponent,
        UsuariosCenterComponent,
        RolesCenterComponent,
        ParametrizacionesCenterComponent,
        ProductosCenterComponent,
        CargarSuperMonedasCorpComponent,
        // SolicitudesCreditosComponent,
        PublicacionesListar,
        UploadComponent,
        UploadAutomotrizDigitalComponent,
        UploadDigitalesComponent,
        ProductosBienvenidaListar,
        ProductosMensajeListar,
        ProductosNuestraFamiliaListar,
        CorreosLandingListar,
        ConsumoCreditosComponent,
        EmpleadosComponent,
        RevisionDocumentosComponent,
        NegocioPropioComponent,
        ValoresProcesoComponent,
        ResumenComponent,
        NegocioPropioPreaprovaodsComponent,
        EmpleadosPreaprovaodsComponent,
        MicrocreditosPreAprovadosComponent,
        MicrocreditosNormalesComponent,
        SolicitudesPagoProveedoresComponent,
        SolicitudesPagoCasasComercialComponent,
        EmpleadosCorp,
        SolicitudPagoCasasComercialesComponent,
        UploadLineasCreditosComponent,
        ViewFileComponent,
        IfisEmpleadosPreaprovaodsComponent,
        IfisNegocioPropioPreaprovaodsComponent,
        IfisMicrocreditosPreAprovadosComponent,
        // Solicitudes creditos digitales
        EmpleadosDigitalComponent,
        NegocioPropioDigitalComponent,
        NegocioPropioPreaprovaodsDigitalComponent,
        EmpleadosPreaprovaodsDigitalComponent,
        MicrocreditosPreAprovadosDigitalComponent,
        MicrocreditosNormalesDigitalComponent,
        IfisNegocioPropioPreaprovaodsDigitalComponent,
        IfisEmpleadosPreaprovaodsDigitalComponent,
        IfisMicrocreditosPreAprovadosDigitalComponent,
        AlfaDigitalComponent,
        // Fin Solicitudes creditos digitales


        // Visado solicitud creditos digitales
        SolicitudesEmpleadosCenterDigitalComponent,
        EmpleadosPreaprovadosCenterDigitalComponent,
        AlfaPreaprovadosCenterDigitalComponent,
        IfisEmpleadosPreaprovadosCenterDigitalComponent,
        IfisMicrocreditosPreAprovadosCenterDigitalComponent,
        IfisNegocioPropioPreaprovadosCenterDigitalComponent,
        MicrocreditosNormalesCenterDigitalComponent,
        MicrocreditosPreAprovadosCenterDigitalComponent,
        NegocioPropioCenterDigitalComponent,
        NegocioPropioPreaprovadosCenterDigitalComponent,
        RevisionDocumentosDigitalComponent,
        AlfaComponent,
        SolicitudesPagoEmpleadosComponent,
        RecargarLineasCreditos,
        ConfirmacionRecargarLineasCreditos,
        // creéditos automotriz
        ValoresProcesoAutomotrizComponent,
        RevisionDocumentosAutomotrizComponent,
        ResumenAutomotrizComponent,
        NegocioPropioPreaprovaodsAutomotrizComponent,
        NegocioPropioAutomotrizComponent,
        MicrocreditosPreAprovadosAutomotrizComponent,
        MicrocreditosNormalesAutomotrizComponent,
        IfisNegocioPropioPreaprovaodsAutomotrizComponent,
        IfisMicrocreditosPreAprovadosAutomotrizComponent,
        IfisEmpleadosPreaprovaodsAutomotrizComponent,
        EmpleadosPreaprovaodsAutomotrizComponent,
        EmpleadosAutomotrizComponent,
        AlfaAutomotrizComponent,
        SolicitudesCreditosAutomotrizComponent,
        //
        UploadAutomotrizComponent,
        // microcreditos digitales
        UploadLineasCreditosDigitalComponent,
        ViewFileDigitalComponent,
        UploadAutomotrizComponent,

    ],
    imports: [
        CoreCommonModule,
        RouterModule.forChild(routes),
        ContentHeaderModule,
        TranslateModule,
        SwiperModule,
        FormsModule,
        CoreTouchspinModule,
        CoreSidebarModule,
        NgbModule,
        Ng2FlatpickrModule,
        CardSnippetModule,
        ShareIconsModule,
        ShareButtonsModule,
        QRCodeModule,
        FlatpickrModule.forRoot(),
        MatTreeModule,
        SweetAlert2Module,
        NgSelectModule,
    ],
    exports: [

        PrincipalComponent,
        PerfilUsuarioComponent,
        EmpresasComponent,
        UsuariosCorpComponent,
        RolesCorpComponent,
        UsuariosCenterComponent,
        RolesCenterComponent,
        ParametrizacionesCenterComponent,
        ProductosCenterComponent,
        CargarSuperMonedasCorpComponent,
        PublicacionesListar,
        UploadComponent,
        ProductosBienvenidaListar,
        ProductosMensajeListar,
        ProductosNuestraFamiliaListar,
        CorreosLandingListar,
    ]
})
export class CentralModule {
}
