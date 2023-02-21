<template>
  <v-app>
    <v-container class="amber" fluid>
      <v-row>
        <v-col>
          <v-img
            src="https://www.coohilados.com.co/gestion/uploads/product/69/picture.jpg"
          >
            <v-row>
              <v-col class="yellow lighten-3 text-center">
                <v-template>
                  <v-toolbar class="amber lighten-3">
                    <v-toolbar-title>Trabajadores Asociados</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <template>
                      <div class="text-center">
                        <v-dialog max-width="800px" v-model="dialog">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              class="mb-2 light-green"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Nuevo Trabajador
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="text-h5"
                              >Ingrese un nuevo Trabajador</v-card-title
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

                                  <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-text-field
                                        v-model="date"
                                        label="Picker without buttons"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                      ></v-text-field>
                                    </template>
                                    <v-date-picker
                                      v-model="date"
                                      @input="menu2 = false"
                                    ></v-date-picker>
                                  </v-menu>

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
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="trabajadores"
                    sort-by="nombre"
                    class="elevation-1 deep-orange lighten-5"
                  >
                    <template>
                      <v-toolbar flat>
                        <v-card>
                          <v-card-title> </v-card-title>
                          <v-card-text>
                            <v-container
                              v-for="item in trabajadores"
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
                                  <v-text-field
                                    v-model="telefono"
                                    label="Telefono"
                                    >{{ item.telefono }}</v-text-field
                                  >
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="email"
                                    label="E-mail"
                                    >{{ item.email }}</v-text-field
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
                    <!-- estados -->

                    <template v-slot:[`item.actions`]="{ item }">
                      <div v-show="item.estado == 3" class="boton">
                        <v-btn
                          color="green"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-check" />
                          <div class="texto">
                            <h5>activar</h5>
                          </div>
                        </v-btn>
                      </div>
                      <div v-show="item.estado == 1" class="boton">
                        <v-btn
                          color="red"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-ban" />
                          <div class="texto">
                            <h5>inhabilitar</h5>
                          </div>
                        </v-btn>
                      </div>
                      <div v-show="item.estado == 2" class="boton">
                        <v-btn
                          color="orange"
                          icon
                          dark
                          class="mb-2"
                          @click="cambiarEstado(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-plane" />
                          <div class="texto">
                            <h5>vacaciones</h5>
                          </div>
                        </v-btn>
                      </div>
                      <div class="boton">
                        <v-btn
                          color="green"
                          icon
                          dark
                          class="mb-2"
                          @click="detalleTrabajador(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-eye" />
                          <div class="texto">
                            <h5>ver</h5>
                          </div>
                        </v-btn>
                      </div>
                      <article class="boton">
                        <v-btn
                          color="primary"
                          icon
                          dark
                          class="mb-2"
                          @click="detalleTrabajador(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-pencil" />
                          <div class="texto">
                            <h5>editar</h5>
                          </div>
                        </v-btn>
                      </article>
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
  name: "PagesAgregarTrabajadores",
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu2:false,
    dialog: false,
    dialogEdit: false,
    headers: [
      { text: "Tipo Documento", value: "tipoDocumento" },
      { text: "Documento", value: "documento" },
      { text: "Nombre", value: "nombre" },
      { text: "Sexo", value: "sexo" },
      { text: "direccion", value: "barrio" },
      { text: "Cumpleaños", value: "fechaNacimiento" },
      { text: "Tipo de contrato", value: "tipoContrato" },
      { text: "Inicio Cotrato", value: "fechaInicio" },
      { text: "Fin Cotrato", value: "fechaFin" },
      { text: "Tiempo", value: "tiempoLaborado" },
      { text: "Cargo", value: "cargo" },
      { text: "Procesos", value: "areaTrabajo.nombre" },
      { text: "Salario", value: "salario" },
      { text: "Rol", value: "rol" },
      { text: "Estado Actual", value: "estado" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    tipoPersona: ["Persona Natural", "Persona Juridica"],
    nombre: "",
    tipoDocumento: [
      "C.C",
      "Cedula de Extranjeria",
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
    trabajadores: [],
  }),
  methods: {
    detalleTrabajador(item) {
      this.$router.push("/Infotrabajador");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
    close() {
      this.dialog = false;
    },
    traerTrabajador() {
      axios
        .get("https://back-coohilados.vercel.app/api/servicio")
        .then((response) => {
          this.trabajadores = response.data.trabajador;
          console.log(this.trabajadores);
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
          console.log(this.area);
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
    cambiarEstado(item) {
      if (item.estado == 1) {
        axios
          .put(`https://back-coohilados.vercel.app/api/servicio/desactivar/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (item.estado == 3) {
        axios
          .put(`https://back-coohilados.vercel.app/api/servicio/activar/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (item.estado == 2) {
        axios
          .put(`https://back-coohilados.vercel.app/api/servicio/vacaciones/${item._id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.traerTrabajador();
    },
    agregar() {
      let header = { headers: { "x-token": this.$store.state.token } };
      console.log(header);
      axios
        .post(
          "https://back-coohilados.vercel.app/api/servicio/agregar",
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
    this.traerAreaTrabajo();
    this.traerDepartamentos();
    //this.traerCiudades()
    //this.agregar()
    this.traerTrabajador();
  },
};
</script>

<style scoped>
.boton {
  position: relative;
}

.texto {
  position: absolute;
  top: -30px;
  font-size: 12px;
  background: rgb(220, 216, 216);
  color: black;
  padding: 8px;
  visibility: hidden;
  transition: hover 0.6s ease;
}

.boton:hover .texto {
  visibility: visible;
}
</style>