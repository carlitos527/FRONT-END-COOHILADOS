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
                <v-text-field
                  v-model="detalleTemporal._id"
                  label="trabajador2 ID"
                ></v-text-field>
                <v-card-title>{{ detalleTemporal.nombre }}</v-card-title>
              </v-col>
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-col cols="12" sm="6" md="4">
                  <p label="Estado">Estado: {{ detalleTemporal.estado }}</p>
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
                        v-model="detalleTemporal.tipoPersona"
                        label="Tipo Persona"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.tipoDocumento"
                        label="Tipo de Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.documento"
                        label="Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.sexo"
                        label="Sexo"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.fechaNacimiento"
                        label="Fecha de Nacimineto"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.tipoContrato"
                        label="Tipo de contrato"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.fechaInicio"
                        label="Fecha de inicio del contrato"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.fechaFin"
                        label="Fecha de Finalización del contrato"
                      ></v-text-field>
                    </v-col><v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.cargo"
                        label="Cargo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.areaTrabajo"
                        label="Area de trabajo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.salario"
                        label="Salario"
                      ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.direccion"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.departamento"
                        label="Departamento"
                        >{
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.ciudad"
                        label="Ciudad"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.telefono"
                        label="Telefono"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.email"
                        label="E-mail"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.estado"
                        label="estado"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleTemporal.rol"
                        label="Rol"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text to="/AgregarTemporales">
                Regresar
              </v-btn>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="editarItem(detalleTemporal._id)"
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
  name: "PageInfoTemporal",

  data: () => ({
    detalleTemporal: [], 
  }),
  methods: {
    traerTemporal() {
      this.detalleTemporal = this.$store.state.datos;
      console.log(this.detalleTemporal);
    },
    editarItem(id) {
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/ayudaTemporal/${id}`, {
            tipoPersona: this.detalleTemporal.tipoPersona,
            tipoDocumento: this.detalleTemporal.tipoDocumento,
            documento: this.detalleTemporal.documento,
            sexo: this.detalleTemporal.sexo,
            nombre: this.detalleTemporal.nombre,
            fechaNacimiento: this.detalleTemporal.fechaNacimiento,
            tipoContrato: this.detalleTemporal.tipoContrato,
            fechaInicio: this.detalleTemporal.fechaInicio,
            fechaFin: this.detalleTemporal.fechaFin,
            cargo: this.detalleTemporal.cargo,
            areaTrabajo: this.detalleTemporal.areaTrabajo,
            salario: this.detalleTemporal.salario,
            direccion: this.detalleTemporal.direccion,
            departamento: this.detalleTemporal.departamento,
            ciudad: this.detalleTemporal.city,
            telefono: this.detalleTemporal.telefono,
            esatdo: this.detalleTemporal.estado,
            rol: this.detalleTemporal.rol,
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
    this.traerTemporal();
  },
};
</script>