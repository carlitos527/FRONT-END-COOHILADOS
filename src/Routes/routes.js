import home from "../components/Home.vue"
import login from "../components/Login.vue"

import tipoTrabajador from "../components/TiposTrabajadores.vue"
import bitacora from "../components/Bitacora.vue"
import setup from "../components/setup.vue"

import agregartemporal from "../components/AgregarTemporales.vue"
import infotemporal from "../components/Infotemporal.vue"

import infotrabajador from "../components/Infotrabajador.vue"
import agregartrabajadores from "../components/AgregarTrabajadores.vue"

import infodirecto from "../components/Infodirecto.vue"
import agregardirectos from "../components/AgregarDirecto.vue"

import infousuario from "../components/Infousuario.vue"
import agregarusuario from "../components/Agregarusuario.vue"

import trabajadores from "../components/Trabajadores.vue"

export const routes =[

    {path:"/Home", component:home},
    {path:"/", component:login},
    
    {path:"/TiposTrabajadores", component:tipoTrabajador},
    {path:"/Bitacora", component:bitacora},
    {path:"/setup", component:setup},

    {path: "/AgregarTemporales", component:agregartemporal},
    {path: "/Infotemporal", component:infotemporal},

    {path: "/Infotrabajador", component:infotrabajador},
    {path: "/AgregarTrabajadores", component:agregartrabajadores},

    {path: "/Infodirecto", component:infodirecto},
    {path: "/AgregarDirecto", component:agregardirectos},

    {path: "/Infousuario", component:infousuario},
    {path: "/Agregarusuario", component:agregarusuario},

    {path: "/Trabajadores", component:trabajadores},
   
]