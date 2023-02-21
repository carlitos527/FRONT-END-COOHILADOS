<template>
  <v-card class="mx-auto my-12" max-width="500">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title justify-right>
      <v-col cols="12" sm="6" md="6" justify="right">
        <v-text-field
          v-model="detalleUsuario._id"
          label="Usuario ID"
        ></v-text-field>
      </v-col>
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-col cols="12" sm="6" md="4">
          <p label="Estado">Estado: {{ detalleUsuario.estado }}</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>{{ detalleUsuario.nombre }}</v-card-title>

    <v-card-text>
      <template>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.tipoPersona"
                label="Tipo Persona"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.tipoDocumento"
                label="Tipo de Documento"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.documento"
                label="Documento"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.direccion"
                label="Direccion"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.departamento"
                label="Departamento"
                >{
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.ciudad"
                label="Ciudad"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.contacto"
                label="Contacto"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.telefono"
                label="Telefono"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.email"
                label="E-mail"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="detalleUsuario.rol"
                label="Rol"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text to="/Agregarusuario">
        Regresar
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text 
        @click="editarItem(detalleUsuario._id)"
      >
        Guardar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "PageInfousuario",

  data: () => ({
    detalleUsuario: [],
  }),
  methods: {
    traerUsuario() {
      this.detalleUsuario = this.$store.state.datos;
      console.log(this.detalleUsuario);
    },
    editarItem(id) {
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/usuario/${id}`, {
            tipoPersona: this.detalleUsuario.tipoPersona,
            tipoDocumento: this.detalleUsuario.tipoDocumento,
            documento: this.detalleUsuario.documento,
            nombre: this.detalleUsuario.nombre,
            direccion: this.detalleUsuario.direccion,
            departamento: this.detalleUsuario.departamento,
            ciudad: this.detalleUsuario.city,
            contacto: this.detalleUsuario.contacto,
            telefono: this.detalleUsuario.telefono,
            email: this.detalleUsuario.email,
            password: this.detalleUsuario.password,
            rol: this.detalleUsuario.rol,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    this.traerUsuario();
  },
};
</script>