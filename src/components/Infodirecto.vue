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
                
                <v-card-title>{{ detalleDirecto.nombre }}</v-card-title>
              </v-col>
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-col cols="12" sm="6" md="4">
                  <p label="Estado">Estado: {{ detalleDirecto.estado }}</p>
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
                        v-model="detalleDirecto.tipoPersona"
                        label="Tipo Persona"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.tipoDocumento"
                        label="Tipo de Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.documento"
                        label="Documento"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.sexo"
                        label="Sexo"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.fechaNacimiento"
                        label="Fecha de Nacimineto"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.tipoContrato"
                        label="Tipo de contrato"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.fechaInicio"
                        label="Fecha de inicio del contrato"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.fechaFin"
                        label="Fecha de Finalización del contrato"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.areaTrabajo"
                        label="Area de trabajo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.salario"
                        label="Salario"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.barrio"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.departamento"
                        label="Departamento"
                        >{
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.ciudad"
                        label="Ciudad"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.telefono"
                        label="Telefono"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.email"
                        label="E-mail"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.estado"
                        label="estado"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="detalleDirecto.rol"
                        label="Rol"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text to="/AgregarDirecto">
                Regresar
              </v-btn>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="editarItem(detalleDirecto._id)"
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
  name: "PagesInfodirecto",

  data: () => ({
    detalleDirecto: [],
  }),
  methods: {
    traerDirecto() {
      this.detalleDirecto = this.$store.state.datos;
      console.log(this.detalleDirecto);
    },
    editarItem(id) {
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/trabajadorDirecto/${id}`, {
            tipoDocumento: this.detalleDirecto.tipoDocumento,
            documento: this.detalleDirecto.documento,
            sexo: this.detalleDirecto.sexo,
            nombre: this.detalleDirecto.nombre,  
            fechaNacimiento: this.detalleDirecto.fechaNacimiento,
            tipoContrato: this.detalleDirecto.tipoContrato,
            fechaInicio: this.detalleDirecto.fechaInicio,
            fechaFin: this.detalleDirecto.fechaFin,
            areaTrabajo: this.detalleDirecto.areaTrabajo,
            salario: this.detalleDirecto.salario,         
            barrio: this.detalleDirecto.barrio,
            departamento: this.detalleDirecto.departamento,
            ciudad: this.detalleDirecto.city,
            telefono: this.detalleDirecto.telefono,
            esatdo: this.detalleDirecto.estado,
            rol: this.detalleDirecto.rol,
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
    this.traerDirecto();
  },
};
</script>