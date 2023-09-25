import {CoreMenu} from '@core/types';
import {Role} from '../auth/models/role';

export const menu: CoreMenu[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'home',
    url: 'central/inicio',
  },
  {
    id: 'apps',
    type: 'section',
    title: 'Administración de CORP',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'empresasCorp',
        title: 'Empresas',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'item',
        icon: 'briefcase',
        url: 'central/corp/empresas',
      },
      {
        id: 'empleadosEmpresas',
        title: 'EMPLEADOS DE EMPRESAS',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'item',
        icon: 'briefcase',
        url: 'central/corp/empleados',
      },
      {
        id: 'cargarEmpleados',
        title: 'Cargar Empleados IFIS',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'briefcase',
        url: 'central/corp/cargar_empleados',
      },
      {
        id: 'usuariosCorp',
        title: 'Usuarios',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'central/corp/usuarios',
      },
      {
        id: 'rolesCorp',
        title: 'Roles',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'clipboard',
        url: 'central/corp/roles',
      },
      {
        id: 'superMonedasCord',
        title: 'Cargar Big Puntos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarBig-Puntos',
      },
      {
        id: 'creditosEmpleados',
        title: 'Cargar Créditos de Consumo',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosdeConsumo',
      },
      {
        id: 'creditosEmpleados',
        title: 'Cargar C.D. Automotriz',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosAutomotrizDigital',
      },
      {
        id: 'creditosDigitales',
        title: 'Cargar Créditos Digitales',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosdeConsumoDigitales',
      },

      {
        id: 'creditosEmpleados',
        title: 'Cargar Líneas de Crédito',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosNegocios',
      },
      {
        id: 'creditosEmpleados',
        title: 'Cargar Líneas D. de Crédito',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosNegociosDigitales',
      },
      {
        id: 'recargarLineasCredito',
        title: 'Recargar Cupo de Líneas de Crédito',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/recargarLineasCreditos',
      },
      {
        id: 'confirmacionRecargarLineasCredito',
        title: 'Confirmación de recargas de Líneas de crédito',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/confirmacionRecargarLineasCreditos',
      },
      {
        id: 'creditosAutomotriz',
        title: 'Cargar Créditos Automotriz',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'dollar-sign',
        url: 'central/corp/cargarCreditosAutomotriz',
      },
    ]
  },
  {
    id: 'apps',
    type: 'section',
    title: 'Administración de Center',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'usuariosCenter',
        title: 'Usuarios',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'central/center/usuarios',
      },
      {
        id: 'rolesCenter',
        title: 'Roles',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'clipboard',
        url: 'central/center/roles',
      },
      {
        id: 'parametrizaciones',
        title: 'Parametrizaciones',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/parametrizaciones',
      },
      {
        id: 'productos',
        title: 'Productos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/productos',
      },
      {
        id: 'productosBienvenida',
        title: 'Configurar Productos SM Bienvenido',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/productos-bienvenido-sm',
      },
      {
        id: 'productosMensajeSM',
        title: 'Configurar Productos SM Mensaje Productos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/productos-mensaje-sm',
      },
      {
        id: 'productosNuestraFamiliaSM',
        title: 'Configurar Productos SM Nuestra Familia',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/productos-nuestra-familia-sm',
      },
      {
        id: 'correosLanding',
        title: 'Reporte de Correos de Landing Page SM',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/reporte-correos-landing',
      },
      {
        id: 'solicitudesCreditosLocal',
        title: 'Visado de documentos preliminar',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoComsumoLocal',
            title: 'Créditos de consumo',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleadosLocal',
                title: 'Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/empleados-center'
              },
              {
                id: 'negocios',
                title: 'Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/negocios-propio-center'
              },
              {
                id: 'propios-pre-aprovados',
                title: 'Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/negocios-propios-pre-aprobados-center'
              },
              {
                id: 'empelados-pre-aprovados',
                title: 'Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/empelados-pre-aprobados-center'
              },
              {
                id: 'ifisPreaprobados',
                title: 'IFIS Preaprobados',
                type: 'collapsible',
                icon: 'credit-card',
                children: [
                  {
                    id: 'propios-pre-aprovados',
                    title: 'Pre aprobados negocios propios',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-local/ifis/negocios-propios-pre-aprobados-center'
                  },
                  {
                    id: 'empelados-pre-aprovados',
                    title: 'Pre aprobados empelados',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-local/ifis/empelados-pre-aprobados-center'
                  },
                ],
              },
            ]
          },
          {
            id: 'lineasCredito',
            title: 'Líneas de crédito',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'microcreditpreaprobado',
                title: 'PYMES pre-aprobados ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/microcreditpreaprobado-center'
              },
              {
                id: 'microcreditsolicitud',
                title: 'PYMES Normales ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/microcreditsolicitud-center'
              },
              {
                id: 'pymesIfis',
                title: 'Pymes Ifis',
                type: 'collapsible',
                icon: 'credit-card',
                children: [
                  {
                    id: 'microcreditpreaprobado',
                    title: 'PYMES pre-aprobados ',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-local/ifis/microcreditpreaprobado-center'
                  },
                ]
              }
            ]
          },
          {
            id: 'creditoAutomotrizLocal',
            title: 'Créditos automotriz',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleadosAutomotrizLocal',
                title: 'Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/automotriz-local/empleados-center'
              },
              {
                id: 'negocios',
                title: 'Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/automotriz-local/negocios-propio-center'
              },
              {
                id: 'propios-pre-aprovados',
                title: 'Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/automotriz-local/negocios-propios-pre-aprobados-center'
              },
              {
                id: 'empelados-pre-aprovados',
                title: 'Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local/automotriz-local/empelados-pre-aprobados-center'
              },
            ]
          },
        ]
      },
      {
        id: 'solicitudesCreditosAutomotrizDigitalLocal',
        title: 'Visado D. Automotriz Digital',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoAutomotrizDigitalLocal',
            title: 'Créditos de consumo',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleadosLocal',
                title: 'Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-local/empleados-center-digital'
              },
              {
                id: 'negocios',
                title: 'Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-local/negocios-propio-center-digital'
              },
              {
                id: 'propios-pre-aprovados',
                title: 'Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-local/negocios-propios-pre-aprobados-center-digital'
              },
              {
                id: 'empelados-pre-aprovados',
                title: 'Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-local/empelados-pre-aprobados-center-digital'
              },
              {
                id: 'alfa-automotriz-digital',
                title: 'Alfa',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-local/alfa-center-digital'
              },
            ]
          }
        ]
      },
      {
        id: 'solicitudesCreditosLocalDigital',
        title: 'Visado D. de documentos preliminar',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoComsumoLocalDigital',
            title: 'D. Créditos de consumo',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleadosLocalDigital',
                title: 'D. Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/empleados-center-digital'
              },
              {
                id: 'negociosDigital',
                title: 'D. Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/negocios-propio-center-digital'
              },
              {
                id: 'propios-pre-aprovadosDigital',
                title: 'D. Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/negocios-propios-pre-aprobados-center-digital'
              },
              {
                id: 'empelados-pre-aprovadosDigital',
                title: 'D. Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/empelados-pre-aprobados-center-digital'
              },
              {
                id: 'alfa-pre-aprovadosDigital',
                title: 'Alfa D. Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/empelados-pre-aprobados-center-digital-alfa'
              },
              // {
              //   id: 'ifisPreaprobadosDigital',
              //   title: 'D. IFIS Preaprobados',
              //   type: 'collapsible',
              //   icon: 'credit-card',
              //   children: [
              //     {
              //       id: 'propios-pre-aprovadosDigital',
              //       title: 'D. Pre aprobados negocios propios',
              //       // translate: 'MENU.APPS.EMAIL',
              //       type: 'item',
              //       icon: 'circle',
              //       url: 'central/center/solicitudes-creditos-local-digital/ifis/negocios-propios-pre-aprobados-center-digital'
              //     },
              //     {
              //       id: 'empelados-pre-aprovadosDigital',
              //       title: 'D. Pre aprobados empelados',
              //       // translate: 'MENU.APPS.EMAIL',
              //       type: 'item',
              //       icon: 'circle',
              //       url: 'central/center/solicitudes-creditos-local-digital/ifis/empelados-pre-aprobados-center-digital'
              //     },
              //   ],
              // },
            ]
          },
          {
            id: 'lineasCreditoDigital',
            title: 'D. Líneas de crédito',
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'microcreditpreaprobadoDigital',
                title: 'D. PYMES pre-aprobados ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/microcreditpreaprobado-center-digital'
              },
              {
                id: 'microcreditsolicitudDigital',
                title: 'D. PYMES Normales ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-local-digital/microcreditsolicitud-center-digital'
              },
            ]
          },
        ]
      },
      {
        id: 'solicitudesCreditos',
        title: 'Solicitudes de créditos',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoComsumo',
            title: 'Créditos de consumo',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleados',
                title: 'Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/empleados'
              },
              {
                id: 'negocios',
                title: 'Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/negocios'
              },
              {
                id: 'propios-pre-aprovados',
                title: 'Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/negocios-propios-pre-aprobados'
              },
              {
                id: 'empelados-pre-aprovados',
                title: 'Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/empelados-pre-aprobados'
              },
              {
                id: 'creditoComsumoIFI',
                title: 'IFIS Preaprobados',
                // translate: 'MENU.HOME',
                // role: [Role.BigPuntos],
                type: 'collapsible',
                icon: 'credit-card',
                children: [
                  {
                    id: 'preaprobado-negociosPropiosIFI',
                    title: 'Negocios propios',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos/ifis/negocios-propios-pre-aprobados'
                  },
                  {
                    id: 'preaprobado-empleadosIFI',
                    title: 'Empleados',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos/ifis/empelados-pre-aprobados'
                  },
                ]
              },

            ]
          },
          {
            id: 'solicitudesAutomotriz',
            title: 'S. Créditos Automotriz',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'creditoComsumoAutomotriz',
                title: 'Créditos de consumo',
                // translate: 'MENU.HOME',
                // role: [Role.BigPuntos],
                type: 'collapsible',
                icon: 'credit-card',
                children: [
                  {
                    id: 'empleadosAutomotriz',
                    title: 'Créditos empleados',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-automotriz/empleados-automotriz'
                  },
                  {
                    id: 'negociosAutomotriz',
                    title: 'Créditos negocios',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-automotriz/negocios-automotriz'
                  },
                  {
                    id: 'propios-pre-aprovadosAutomotriz',
                    title: 'Pre aprobados negocios propios',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-automotriz/negocios-propios-pre-aprobados-automotriz'
                  },
                  {
                    id: 'empelados-pre-aprovadosAutomotriz',
                    title: 'Pre aprobados empelados',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos-automotriz/empelados-pre-aprobados-automotriz'
                  },
                  // {
                  //   id: 'creditoComsumoIFIAutomotriz',
                  //   title: 'IFIS Preaprobados',
                  //   // translate: 'MENU.HOME',
                  //   // role: [Role.BigPuntos],
                  //   type: 'collapsible',
                  //   icon: 'credit-card',
                  //   children: [
                  //     {
                  //       id: 'preaprobado-negociosPropiosIFIAutomotriz',
                  //       title: 'Negocios propios',
                  //       // translate: 'MENU.APPS.EMAIL',
                  //       type: 'item',
                  //       icon: 'circle',
                  //       url: 'central/center/solicitudes-creditos-automotriz/ifis/negocios-propios-pre-aprobados-automotriz'
                  //     },
                  //     {
                  //       id: 'preaprobado-empleadosIFIAutomotriz',
                  //       title: 'Empleados',
                  //       // translate: 'MENU.APPS.EMAIL',
                  //       type: 'item',
                  //       icon: 'circle',
                  //       url: 'central/center/solicitudes-creditos-automotriz/ifis/empelados-pre-aprobados-automotriz'
                  //     },
                  //   ]
                  // }
                ]
              },
              // {
              //   id: 'lineasCredito',
              //   title: 'Líneas de crédito',
              //   // translate: 'MENU.HOME',
              //   // role: [Role.BigPuntos],
              //   type: 'collapsible',
              //   icon: 'credit-card',
              //   children: [
              //     {
              //       id: 'microcreditPreAprovado',
              //       title: 'PYMES pre-aprobados ',
              //       // translate: 'MENU.APPS.EMAIL',
              //       type: 'item',
              //       icon: 'circle',
              //       url: 'central/center/solicitudes-creditos-automotriz/microcreditPreAprovado-automotriz'
              //     },
              //     {
              //       id: 'microcreditNormales',
              //       title: 'PYMES Normales ',
              //       // translate: 'MENU.APPS.EMAIL',
              //       type: 'item',
              //       icon: 'circle',
              //       url: 'central/center/solicitudes-creditos-automotriz/microcreditNormales-automotriz'
              //     },
              //     {
              //       id: 'microcreditNormalesIFI',
              //       title: 'Pymes Ifis',
              //       // translate: 'MENU.HOME',
              //       // role: [Role.BigPuntos],
              //       type: 'collapsible',
              //       icon: 'credit-card',
              //       children: [
              //         {
              //           id: 'preaprobado-negociosPropiosIFI',
              //           title: 'PYMES IFIs',
              //           // translate: 'MENU.APPS.EMAIL',
              //           type: 'item',
              //           icon: 'circle',
              //           url: 'central/center/solicitudes-creditos-automotriz/ifis/microcreditPreAprovado-automotriz'
              //         },
              //       ]
              //     }
              //   ]
              // },
              // {
              //   id: 'creditoAlfa',
              //   title: 'Créditos Alfa',
              //   // translate: 'MENU.HOME',
              //   // role: [Role.BigPuntos],
              //   type: 'collapsible',
              //   icon: 'credit-card',
              //   children: [
              //     {
              //       id: 'alfa',
              //       title: 'Credito Alfa',
              //       // translate: 'MENU.APPS.EMAIL',
              //       type: 'item',
              //       icon: 'circle',
              //       url: 'central/center/solicitudes-creditos-automotriz/alfa-automotriz'
              //     },
              //   ]
              // }
            ]
          },
          {
            id: 'lineasCredito',
            title: 'Líneas de crédito',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'microcreditPreAprovado',
                title: 'PYMES pre-aprobados ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/microcreditPreAprovado'
              },
              {
                id: 'microcreditNormales',
                title: 'PYMES Normales ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/microcreditNormales'
              },
              {
                id: 'microcreditNormalesIFI',
                title: 'Pymes Ifis',
                // translate: 'MENU.HOME',
                // role: [Role.BigPuntos],
                type: 'collapsible',
                icon: 'credit-card',
                children: [
                  {
                    id: 'preaprobado-negociosPropiosIFI',
                    title: 'PYMES IFIs',
                    // translate: 'MENU.APPS.EMAIL',
                    type: 'item',
                    icon: 'circle',
                    url: 'central/center/solicitudes-creditos/ifis/microcreditPreAprovado'
                  },
                ]
              }
            ]
          },
          {
            id: 'creditoAlfa',
            title: 'Créditos Alfa',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'alfa',
                title: 'Credito Alfa',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos/alfa'
              },
            ]
          }
        ]
      },
      {
        id: 'solicitudesCreditosDigital',
        title: 'Solicitudes D. de créditos',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoComsumo-digital',
            title: 'Créditos D. de consumo',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleados-digital',
                title: 'D. Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/empleados-digital'
              },
              {
                id: 'negocios-digital',
                title: 'D. Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/negocios-digital'
              },
              {
                id: 'propios-pre-aprovados-digital',
                title: 'D. Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/negocios-propios-pre-aprobados-digital'
              },
              {
                id: 'empelados-pre-aprovados-digital',
                title: 'D. Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/empelados-pre-aprobados-digital'
              },
            ]
          },
          {
            id: 'lineasCredito',
            title: 'D. Líneas de crédito',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'microcreditPreAprovado',
                title: 'D. PYMES pre-aprobados ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/microcreditPreAprovado-digital'
              },
              {
                id: 'microcreditNormales',
                title: 'D. PYMES Normales ',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/microcreditNormales-digital'
              },
            ]
          },
          {
            id: 'creditoAlfa-digital',
            title: 'D. Créditos Alfa',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'alfa-digital',
                title: 'D. Credito Alfa',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-digital/alfa-digital'
              },
            ]
          }
        ]
      },
      // Revision solicitudes creditos automotriz
      {
        id: 'solicitudesCreditosAutomotrizDigital',
        title: 'Solicitudes C. Automotriz Digital',
        // translate: 'MENU.HOME',
        // role: [Role.BigPuntos],
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'creditoComsumo',
            title: 'Créditos de consumo',
            // translate: 'MENU.HOME',
            // role: [Role.BigPuntos],
            type: 'collapsible',
            icon: 'credit-card',
            children: [
              {
                id: 'empleados',
                title: 'Créditos empleados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-revision/empleados-center-digital'
              },
              {
                id: 'negocios',
                title: 'Créditos negocios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-revision/negocios-propio-center-digital'
              },
              {
                id: 'propios-pre-aprovados',
                title: 'Pre aprobados negocios propios',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-revision/negocios-propios-pre-aprobados-center-digital'
              },
              {
                id: 'empelados-pre-aprovados',
                title: 'Pre aprobados empelados',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-revision/empelados-pre-aprobados-center-digital'
              },
              {
                id: 'alfa-center-preaprovados',
                title: 'Alfa',
                // translate: 'MENU.APPS.EMAIL',
                type: 'item',
                icon: 'circle',
                url: 'central/center/solicitudes-creditos-automotriz-digital-revision/alfa-center-digital'
              },
            ]
          },
        ]
      },
      {
        id: 'consumoCreditos',
        title: 'Solicitudes de Pago a proveedores',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/solicitud-pago-proveedores',
      },
      {
        id: 'pagoEmpleados',
        title: 'Solicitudes de Pago a empleados',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/solicitud-pago-empleados',
      },
      // {
      //   id: 'pagoCasasComerciales',
      //   title: 'Solicitudes de Pago Casas Comerciales',
      //   // translate: 'MENU.HOME',
      //   // role: [Role.SuperMonedas],
      //   type: 'item',
      //   icon: 'package',
      //   url: 'central/center/solicitud-pago-casas-comerciales-XYZ',
      // },
      {
        id: 'pagoCasasComerciales',
        title: 'Solicitudes de Pago Empleados',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/solicitud-pago-locales-comerciales',
      },
      {
        id: 'consumoCreditos',
        title: 'Consumos de créditos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/consumosCreditos',
      },
      {
        id: 'publicaciones',
        title: 'Publicaciones',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'package',
        url: 'central/center/publicaciones',
      },
    ]
  },
];
