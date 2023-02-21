import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        token: localStorage.token, 
        datos:{},
        
        usuarios:[],
        city:[],
        town:[],
        encargado:[]
    },
    mutations:{
        setToken(state, value){
            state.token=value
            localStorage.token =value
        },
        setDatos(state, value){
            state.datos=value
        },
        setDatosUsuario(state,v){
            state.usuarios=v
        },
        setCity(state,v){
            state.city=v
        },
        setTown(state,v){
            state.town=v
        },
        setEncargado(state, v){
            state.encargado=v
        }
    },
    actions:{
        setToken(context, value){
            context.commit("setToken", value)
        },
        setDatos(context,value){
            context.commit("setDatos", value)
        },
        setDatosUsuario(context,value){
            context.commit("setDatosUsuario",value)
        }

    }
})