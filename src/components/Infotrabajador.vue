<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-img
          src="https://www.coohilados.com.co/gestion/uploads/product/69/picture.jpg"
        >
          <v-card class="mx-auto my-12 yellow lighten-4" max-width="500">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <!-- inicio de la cart del usuario a editar -->
            <v-card-title justify-right>
              <v-col cols="12" sm="6" md="6" justify="right">
                
                <v-card-title>{{ detalleTrabajador.nombre }}</v-card-title>
              </v-col>
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-col cols="12" sm="6" md="4">
                  <p label="Estado" v-if="detalleTrabajador.estado==1">Estado: Activo</p>
                  <p label="Estado" v-if="detalleTrabajador.estado==2">Estado: Inactivo</p>
                  <p label="Estado" v-if="detalleTrabajador.estado==3">Estado: De vacaciones</p>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <template>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.tipoPersona"
                        label="Tipo Persona"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.tipoDocumento"
                        label="Tipo de Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.documento"
                        label="Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.sexo"
                        label="Sexo"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.fechaNacimiento"
                        label="Fecha de Nacimineto"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.tipoContrato"
                        label="Tipo de contrato"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.fechaInicio"
                        label="Fecha de inicio del contrato"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.fechaFin"
                        label="Fecha de Finalización del contrato"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.areaTrabajo.nombre"
                        label="Area de trabajo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.salario"
                        label="Salario"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.barrio"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.departamento"
                        label="Departamento"
                        >{
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.ciudad"
                        label="Ciudad"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.telefono"
                        label="Telefono"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.email"
                        label="E-mail"
                      ></v-text-field>
                    </v-col>

                     <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.estado"
                        label="estado"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTrabajador.rol"
                        label="Cargo"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text to="/AgregarTrabajadores">
                Regresar
              </v-btn>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="editarItem(detalleTrabajador._id)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "PageInfotrabajador",

  data: () => ({
    detalleTrabajador: {},
  }),
  computed: {
    
  },
  methods: {
    traerTrabajador() {
      this.detalleTrabajador = this.$store.state.datos;
      console.log(this.detalleTrabajador);
    },
    editarItem(id) {
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/servicio/${id}`, {
            tipoPersona: this.detalleTrabajador.tipoPersona,
            tipoDocumento: this.detalleTrabajador.tipoDocumento,
            documento: this.detalleTrabajador.documento,
            sexo: this.detalleTrabajador.sexo,
            nombre: this.detalleTrabajador.nombre,
            fechaNacimiento: this.detalleTrabajador.fechaNacimiento,
            tipoContrato: this.detalleTrabajador.tipoContrato,
            fechaInicio: this.detalleTrabajador.fechaInicio,
            fechaFin: this.detalleTrabajador.fechaFin,
            cargo: this.detalleTrabajador.cargo,
            areaTrabajo: this.detalleTrabajador.areaTrabajo,
            salario: this.detalleTrabajador.salario,
            direccion: this.detalleTrabajador.direccion,
            departamento: this.detalleTrabajador.departamento,
            ciudad: this.detalleTrabajador.city,
            telefono: this.detalleTrabajador.telefono,
            email: this.detalleTrabajador.email,
            estado: this.detalleTrabajador.estado,
            rol: this.detalleTrabajador.rol,
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
    this.traerTrabajador();
  },
};
</script>