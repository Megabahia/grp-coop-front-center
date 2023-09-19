import { NgModule } from '@angular/core';
import {
  SolicitudesEmpleadosCenterAutomotrizDigitalComponent
} from './empleados/solicitudes-empleados-center-automotriz-digital.component';
import {
  NegocioPropioCenterAutomotrizDigitalComponent
} from './negocio-propio/negocio-propio-center-automotriz-digital.component';
import {
  NegocioPropioPreaprovadosCenterAutomotrizDigitalComponent
} from './negocio-propio-preaprovados/negocio-propio-preaprovados-center-automotriz-digital.component';
import {
  EmpleadosPreaprovadosCenterAutomotrizDigitalComponent
} from './empleados-preaprovados/empleados-preaprovados-center-automotriz-digital.component';
import {AlfaCenterAutomotrizDigitalComponent} from './alfa/alfa-center-automotriz-digital.component';
import {
  RevisionDocumentosAutomotrizDigitalComponent
} from './revision-documentos/revision-documentos-automotriz-digital.component';
import {CoreCommonModule} from '../../../../../../@core/common.module';
import {RouterModule} from '@angular/router';
import {ContentHeaderModule} from '../../../../../layout/components/content-header/content-header.module';
import {TranslateModule} from '@ngx-translate/core';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FormsModule} from '@angular/forms';
import {CoreTouchspinModule} from '../../../../../../@core/components/core-touchspin/core-touchspin.module';
import {CoreSidebarModule} from '../../../../../../@core/components';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {CardSnippetModule} from '../../../../../../@core/components/card-snippet/card-snippet.module';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {QRCodeModule} from 'angularx-qrcode';
import {FlatpickrModule} from 'angularx-flatpickr';
import {MatTreeModule} from '@angular/material/tree';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {AuthGuard} from '../../../../../auth/helpers/auth.guards';

const routes = [
  {path: '', redirectTo: 'empleados-center-digital', pathMatch: 'full'},
  {
    path: 'empleados-center-digital',
    component: SolicitudesEmpleadosCenterAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'negocios-propio-center-digital',
    component: NegocioPropioCenterAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'negocios-propios-pre-aprobados-center-digital',
    component: NegocioPropioPreaprovadosCenterAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empelados-pre-aprobados-center-digital',
    component: EmpleadosPreaprovadosCenterAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alfa-center-digital',
    component: AlfaCenterAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    AlfaCenterAutomotrizDigitalComponent,
    SolicitudesEmpleadosCenterAutomotrizDigitalComponent,
    NegocioPropioCenterAutomotrizDigitalComponent,
    NegocioPropioPreaprovadosCenterAutomotrizDigitalComponent,
    EmpleadosPreaprovadosCenterAutomotrizDigitalComponent,
    RevisionDocumentosAutomotrizDigitalComponent,
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
  ]
})
export class SolicitudesCreditosAutomotrizDigitalesLocalModule { }
