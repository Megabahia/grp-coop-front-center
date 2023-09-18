import { NgModule } from '@angular/core';
import {CoreCommonModule} from '../../../../../../@core/common.module';
import {RouterModule} from '@angular/router';
import {ContentHeaderModule} from '../../../../../layout/components/content-header/content-header.module';
import {TranslateModule} from '@ngx-translate/core';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {AlfaAutomotrizDigitalComponent} from './alfa/alfa-automotriz-digital.component';
import {EmpleadosAutomotrizDigitalComponent} from './empleados/empleados-automotriz-digital.component';
import {
  EmpleadosPreaprovaodsAutomotrizDigitalComponent
} from './empleados-preaprovaods/empleados-preaprovaods-automotriz-digital.component';
import {NegocioPropioAutomotrizDigitalComponent} from './negocio-propio/negocio-propio-automotriz-digital.component';
import {
  NegocioPropioPreaprovaodsAutomotrizDigitalComponent
} from './negocio-propio-preaprovaods/negocio-propio-preaprovaods-automotriz-digital.component';
import {ResumenAutomotrizDigitalComponent} from './resumen/resumen-automotriz-digital.component';
import {
  RevisionAutomotrizDigitalDocumentosComponent
} from './revision-documentos/revision-automotriz-digital-documentos.component';
import {ValoresProcesoAutomotrizDigitalComponent} from './valores-proceso/valores-proceso-automotriz-digital.component';
import {AuthGuard} from '../../../../../auth/helpers/auth.guards';

const routes = [
  {path: '', redirectTo: 'empleados-center-digital', pathMatch: 'full'},
  {
    path: 'empleados-center-digital',
    component: EmpleadosAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'negocios-propio-center-digital',
    component: NegocioPropioAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'negocios-propios-pre-aprobados-center-digital',
    component: NegocioPropioPreaprovaodsAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empelados-pre-aprobados-center-digital',
    component: EmpleadosPreaprovaodsAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alfa-center-digital',
    component: AlfaAutomotrizDigitalComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    AlfaAutomotrizDigitalComponent,
    EmpleadosAutomotrizDigitalComponent,
    EmpleadosPreaprovaodsAutomotrizDigitalComponent,
    NegocioPropioAutomotrizDigitalComponent,
    NegocioPropioPreaprovaodsAutomotrizDigitalComponent,
    ResumenAutomotrizDigitalComponent,
    RevisionAutomotrizDigitalDocumentosComponent,
    ValoresProcesoAutomotrizDigitalComponent,
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
    ReactiveFormsModule,
  ]
})
export class SolicitudesCreditosAutomotrizDigitalModule { }
