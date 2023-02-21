<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-img
            src="https://pbs.twimg.com/media/Cgl1KZDW4AA1G-9?format=jpg&name=4096x4096"
          >
            <v-row>
              <v-col class="text-center">
                <v-template>
                  <v-toolbar class="amber accent-2">
                    <v-toolbar-title>Trabajadores Temporales</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <template>
                      <div class="text-center">
                        <v-dialog max-width="800px" v-model="dialog">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              class="mb-2 red darken-4"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Nuevo Temporal
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="text-h5"
                              >Ingrese nuevo Trabajador Temporal</v-card-title
                            >
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-select
                                    v-model="tipoPersona"
                                    :items="tipoPersona"
                                    label="Tipo Persona"
                                    required
                                  >
                                  </v-select>

                                  <v-select
                                    v-model="tipoDocumento"
                                    :items="tipoDocumento"
                                    label="Tipo de Documento"
                                    required
                                  ></v-select>

                                  <v-text-field
                                    v-model="documento"
                                    label="Documento"
                                    required
                                  ></v-text-field>

                                  <v-select
                                    v-model="sexo"
                                    :items="sexo"
                                    label="Sexo"
                                    required
                                  ></v-select>

                                  <v-text-field
                                    v-model="nombre"
                                    label="Nombre y Apellidos"
                                    required
                                  ></v-text-field>

                                  <v-text-field
                                    v-model="fechaNacimiento"
                                    label="Fecha de Nacimineto"
                                    required
                                  ></v-text-field>

                                  <v-text-field
                                    v-model="barrio"
                                    label="dirección"
                                    required
                                  ></v-text-field>
                                  <v-select
                                    :items="cities"
                                    v-model="departamento"
                                    label="Departamento"
                                    @change="traerCiudades()"
                                  ></v-select>
                                  <v-select
                                    :items="town"
                                    v-model="city"
                                    item-text="Ciudad"
                                    label="Ciudad"
                                  ></v-select>

                                  <v-text-field
                                    v-model="telefono"
                                    label="Telefono"
                                    required
                                  ></v-text-field>
                                  <v-text-field
                                    v-model="email"
                                    label="E-mail"
                                    required
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="tipoContrato"
                                    label="Tipo de contrato del trabajador"
                                    required
                                  ></v-text-field>
                                  <v-text-field
                                    v-model="fechaInicio"
                                    label="Fecha de inicio del contrato"
                                    required
                                  ></v-text-field>

                                  <v-text-field
                                    v-model="fechaFin"
                                    label="Fecha de finalización del contrato"
                                    required
                                  ></v-text-field>


                                  <v-text-field
                                    v-model="salario"
                                    label="Salario"
                                    required
                                  ></v-text-field>

                                  <v-select
                                    :items="area"
                                    v-model="areaTrabajo"
                                    label="Área de trabajo"
                                    @change="traerAreaTrabajo()"
                                  ></v-select>


                                  <v-text-field
                                    v-model="cargo"
                                    label="Rol"
                                  ></v-text-field>

                                </v-col>
                              </v-row>
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="close()"
                                >Cancel</v-btn
                              >
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="agregar()"
                                >Guardar</v-btn
                              >
                              <v-spacer></v-spacer>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </div>
                    </template>
                  </v-toolbar>
                </v-template>

                <!--   informacion de todos los tranbajadores -->
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="temporales"
                    sort-by="nombre"
                    class="elevation-1 amber lighten-3"
                  >
                    <template>
                      <v-toolbar flat>
                        <v-card>
                          <v-card-title> </v-card-title>
                          <v-card-text>
                            <v-container
                              v-for="item in temporales"
                              :key="item._id"
                            >
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="nombre"
                                    label="Nombre"
                                    >{{ item.nombre }}</v-text-field
                                  >
                                </v-col>
                                <v-col>
                                  <v-text-field
                                    v-model="tipoDocumento"
                                    label="Tipo de Documento"
                                    >{{ item.tipoDocumento }}
                                  </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="documento"
                                    label="Documento"
                                    >{{ item.documento }}</v-text-field
                                  >
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="rol" label="Rol">{{
                                    item.rol
                                  }}</v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="estado"
                                    label="Estado"
                                    >{{ item.estado }}</v-text-field
                                  >
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-toolbar>
                    </template>

                    <!-- estado -->

                    <template v-slot:[`item.actions`]="{ item }">
                      <div v-show=" item.estado==3">
                        <v-btn
                          color="green"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-check" />
                        </v-btn>
                      </div>
                      <div v-show="item.estado == 1">
                        <v-btn
                          color="red"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-ban" />
                        </v-btn>
                      </div>
                      <div v-show="item.estado == 2">
                        <v-btn
                          color="orange"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-plane" />
                        </v-btn>
                      </div>

                      <v-btn
                        color="green"
                        icon
                        dark
                        class="mb-2"
                        @click="detalleDirecto(item)"
                      >
                        <font-awesome-icon icon="fa-solid fa-eye" />
                      </v-btn>
                      <v-btn
                        color="primary"
                        icon
                        dark
                        class="mb-2"
                        @click="detalleDirecto(item)"
                      >
                        <font-awesome-icon icon="fa-solid fa-pencil" />
                      </v-btn>
                    </template>

                    <!-- cambiar estados -->
                    <template v-slot:[`item.estado`]="{ item }">
                      <div v-show="item.estado == 1">
                        <span class="green--text"> Activo </span>
                      </div>
                      <div v-show="item.estado == 2">
                        <span class="red--text"> Inactivo </span>
                      </div>
                      <div v-show="item.estado == 3">
                        <span class="blue--text"> Vacaciones </span>
                      </div>
                    </template>
                  </v-data-table>
                </template>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "PagesAgregarTemporales",
  data: () => ({
    dialog: false,
    dialogEdit: false,
    headers: [
      { text: "Tipo Documento", value: "tipoDocumento" },
      { text: "Documento", value: "documento" },
      { text: "Nombre", value: "nombre" },
      { text: "Sexo", value: "sexo" },
      { text: "Cumpleaños", value: "fechaNacimiento" },
      { text: "Inicio Cotrato", value: "fechaInicio" },
      { text: "Fin Cotrato", value: "fechaFin" },
      { text: "Tiempo", value: "tiempoLaborado" },
      { text: "Cargo", value: "cargo" },
      { text: "Area de Trabajo", value: "areaTrabajo.nombre" },
      { text: "Salario", value: "salario" },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    tipoPersona: ["Persona Natural", "Persona Juridica"],
    nombre: "",
    tipoDocumento: [
      "C.C",
      "C.Extranjeria",
      "Pasaporte",
      "Numero de Identificacion tributaria",
    ],

    documento: "",
    sexo: ["M", "F"],
    fechaNacimiento: "",
    tipoContrato: "",
    fechaInicio: "",
    fechaFin: "",
    tiempoLaborado: "",
    cargo: "",
    areaTrabajo: "",
    lugar: "",
    salario: "",
    barrio: "",
    departamento: "",
    city: "",
    telefono: "",
    email: "",
    rol: "",
    area: [],
    cities: [],
    town: [],
    temporales: [],
  }),
  methods: {
    detalleTemporal(item) {
      this.$router.push("/Infotemporal");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
    close() {
      this.dialog = false;
    },

    traerTemporal() {
      axios
        .get("https://back-coohilados.vercel.app/api/ayudaTemporal")
        .then((response) => {
          this.temporales = response.data.temporal;
          console.log(this.temporales);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    traerDepartamentos() {
      axios
        .get("https://back-coohilados.vercel.app/api/ciudad/departamento/get")
        .then((response) => {
          // response.data.ciudad.reduce((obj, item) => (obj[item.Departamento] = true, obj), {});
          this.cities = response.data.departamentos;
          console.log(this.cities);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerCiudades(depart) {
      depart = this.departamento;
      console.log(depart);
      axios
        .get(`https://back-coohilados.vercel.app/api/ciudad/ciudad/get/${depart}`)
        .then((response) => {
          //this.town = response.data.city.reduce((obj, item) => (obj[item.Ciudad] = true, obj), {});
          //this.ciudad = response.data.city.filter(c => { return c.Ciudad.length > 3})
          this.town = response.data.city;

          console.log(this.town);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    traerAreaTrabajo() {
      axios
        .get("https://back-coohilados.vercel.app/api/areaTrabajo")
        .then((response) => {
          // response.data.ciudad.reduce((obj, item) => (obj[item.Departamento] = true, obj), {});
          this.area = response.data.lugar;
          console.log("hola: " + this.area);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    cambiarEstado(item) {
      if (item.estado == 1) {
        axios
          .put(`https://back-coohilados.vercel.app/api/ayudaTemporal/desactivar/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }if (item.estado ==3) {
        axios
          .put(`https://back-coohilados.vercel.app/api/ayudaTemporal/activar/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } if(item.estado==2) {
        axios
          .put(`https://back-coohilados.vercel.app/api/ayudaTemporal/vacaciones/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.traerTemporal();
    },
    desactivar(id) {
      console.log(id);
      if (id) {
        axios
          .put(
            `https://back-coohilados.vercel.app/api/trabajadorDirecto/desactivar/desactivar/${id}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    activar(id) {
      console.log(id);
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/trabajadorDirecto/activar/${id}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    agregar() {
      let header = { headers: { "x-token": this.$store.state.token } };
      console.log(header);
      axios
        .post(
          "https://back-coohilados.vercel.app/api/ayudaTemporal/agregar",
          {
            tipoPersona: this.tipoPersona,
            tipoDocumento: this.tipoDocumento,
            documento: this.documento,
            sexo: this.sexo,
            nombre: this.nombre,
            fechaNacimiento: this.fechaNacimiento,
            tipoContrato: this.tipoContrato,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            cargo: this.cargo,
            areaTrabajo: this.areaTrabajo,
            salario: this.salario,
            barrio: this.barrio,
            departamento: this.departamento,
            ciudad: this.city,
            telefono: this.telefono,
            email: this.email,
            estado: this.estado,
            rol: this.rol,
          },
          header
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.traerDepartamentos();
    this.traerTemporal();
    this.traerAreaTrabajo();
  },
};
</script>