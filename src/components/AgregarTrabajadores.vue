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
                    <v-toolbar-title>Trabajadores Asociados</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-text-field
                    v-model="busqueda"
                    append-icon="mdi-magnify"
                    label="buscar"
                    single-line
                    hide-details
                  >
                  </v-text-field>
                    <v-spacer></v-spacer>
                    <template>
                      <div class="text-center">
                        <v-dialog
                          max-width="1600px"
                          v-model="dialog"
                          persistent
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              class="mb-2 red darken-4"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Nuevo Trabajador
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="text-h5"
                              >Ingrese nuevo Trabajador Asociado</v-card-title
                            >
                            <v-card-text>
                              <v-row>
                                <v-col>
                                  <v-select
                                    v-model="tipoDocumento"
                                    :items="tipoDocumento"
                                    label="Tipo de Documento"
                                    required
                                  ></v-select>

                                  <v-text-field
                                    v-model="documento"
                                    :rules="documentoRules"
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
                                    :rules="nombreRules"
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
                                        v-model="fechaNacimiento"
                                        label="Escoja la Fecha de Nacimiento"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                      ></v-text-field>
                                    </template>
                                    <v-date-picker
                                      v-model="fechaNacimiento"
                                      @input="menu2 = false"
                                    ></v-date-picker>
                                  </v-menu>

                                  <v-text-field
                                    v-model="barrio"
                                    :rules="barrioRules"
                                    label="direcci??n"
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
                                    item-value="_id"
                                    label="Ciudad"
                                    @change="prueba()"
                                  ></v-select>
                                </v-col>

                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="telefono"
                                    :rules="telefonoRules"
                                    label="Telefono"
                                    required
                                  ></v-text-field>
                                  <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                  ></v-text-field>

                                  <v-text-field
                                    v-model="tipoContrato"
                                    :rules="tipoContratoRules"
                                    label="Tipo de contrato del trabajador"
                                    required
                                  ></v-text-field>

                                  <v-menu
                                    v-model="menu3"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-text-field
                                        v-model="fechaInicio"
                                        label="Escoja la Fecha de inicio de contrato"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                      ></v-text-field>
                                    </template>
                                    <v-date-picker
                                      v-model="fechaInicio"
                                      @input="menu3 = false"
                                    ></v-date-picker>
                                  </v-menu>
                                  <v-menu
                                    v-model="menu4"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-text-field
                                        v-model="fechaFin"
                                        label="Escoja la Fecha de finalizaci??n de contrato"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                      ></v-text-field>
                                    </template>
                                    <v-date-picker
                                      v-model="fechaFin"
                                      @input="menu4 = false"
                                    ></v-date-picker>
                                  </v-menu>

                                  <v-text-field
                                    v-model="salario"
                                    :rules="salarioRules"
                                    label="Salario"
                                    required
                                  ></v-text-field>

                                  <v-select
                                    :items="area"
                                    v-model="areaTrabajo"
                                    label="??rea de trabajo"
                                    item-text="nombre"
                                    item-value="_id"
                                  ></v-select>

                                  <v-text-field
                                    v-model="rol"
                                    :rules="rolRules"
                                    label="Cargo"
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
                    :items="trabajadores"
                    :search="busqueda"
                    sort-by="nombre"
                    class="elevation-1 amber lighten-3"
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
                                    label="Documento"
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
                    <template v-slot:[`item.fechaNacimiento`]="{ item }">
                      <span>
                        {{ fecha(item.fechaNacimiento) }}
                      </span>
                    </template>
                    <template v-slot:[`item.fechaInicio`]="{ item }">
                      <span>
                        {{ fecha(item.fechaInicio) }}
                      </span>
                    </template>
                    <template v-slot:[`item.fechaFin`]="{ item }">
                      <span>
                        {{ fecha(item.fechaFin) }}
                      </span>
                    </template>
                  </v-data-table>
                </template>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col>
          <v-overlay :value="loading">
            <v-progress-circular
              v-show="loading == true"
              :size="70"
              :width="7"
              color="black"
              indeterminate
            ></v-progress-circular>
          </v-overlay>
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
    loading: false,
    fechaInicio: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    fechaFin: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    fechaNacimiento: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    menu3: false,
    menu4: false,
    menu2: false,
    dialog: false,
    dialogEdit: false,
    headers: [
      { text: "Tipo Documento", value: "tipoDocumento" },
      { text: "Documento", value: "documento" },
      { text: "Nombre", value: "nombre" },
      { text: "Sexo", value: "sexo" },
      { text: "Cumplea??os", value: "fechaNacimiento" },
      { text: "Direccion", value: "barrio" },
      { text: "Tipo de contrato", value: "tipoContrato" },
      { text: "Inicio Cotrato", value: "fechaInicio" },
      { text: "Fin Cotrato", value: "fechaFin" },
      { text: "Tiempo", value: "tiempoLaborado" },
      { text: "Area de Trabajo", value: "areaTrabajo.nombre" },
      { text: "Salario", value: "salario" },
      { text: "Cargo", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    valid4: true,
    nombre: "",
    nombreRules: [
      (n) => !!n || " Nombre y Apellidos son requerido ???",
      (n) => (n && n.length <= 50) || " El Nombre solo puede tener 50 caracteres",
    ],

    tipoDocumento: ["C.C", "Cedula de Extranjeria"],
    valid: true,
    documento: "",
    documentoRules: [
      (d) => !!d || " Documento es requerido ??? ",
      (d) => (d && d.length <= 15) || " Cedula solo puede tener 15 caracteres",
    ],
    sexo: ["M", "F"],
    valid2: true,
    tipoContrato: "",
    tipoContratoRules: [
      (c) => !!c || " Documento es requerido ???",
      (c) =>
        (c && c.length <= 50) ||
        " EL tipo de contrato solo puede tener 50 caracteres",
    ],

    tiempoLaborado: "",
    areaTrabajo: "",

    valid3: true,
    salario: "",
    salarioRules: [
      (s) => !!s || " El salario es requerido ???",
      (s) =>
        (s && s.length <= 15) || " EL Salario solo puede tener 15 caracteres",
    ],

    valid5: true,
    barrio: "",
    barrioRules: [
      (b) => !!b || " Direcions requerido ???",
      (b) =>
        (b && b.length <= 50) || " EL Barrio Solo puede tener 50 caracteres",
    ],
    departamento: "",
    city: "",

    valid6: true,
    telefono: "",
    telefonoRules: [
      (t) => !!t || " Telefono es requerido ???",
      (t) =>
        (t && t.length <= 30) || " EL Telefono Solo puede tener 30 caracteres",
    ],

    valid7: true,
    email: "",
    emailRules: [
      (e) => !!e || " Email es requerido ???",
      (e) =>
        (e && e.length <= 30) || " EL Email Solo puede tener 30 caracteres",
    ],

    valid8: true,
    rol: "",
    rolRules: [
      (r) => !!r || "El Cargoes requerido ???",
      (r) => (r && r.length <= 50) || " EL Rol Solo puede tener 50 caracteres",
    ],
    area: [],
    cities: [],
    town: [],
    trabajadores: [],
    busqueda: "",
  }),
  computed: {
    buscar() {
      return this.trabajadores.filter((user) => {
        const identificacion = user.tipoDocumento.toLowerCase();
        const nombre = user.nombre.toLowerCase();
        const busqueda = this.busqueda.toLowerCase();
        return identificacion.includes(busqueda) || nombre.includes(busqueda);
      });
    },
  },
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    traerCiudades() {
      axios
        .get(
          `https://back-coohilados.vercel.app/api/ciudad/ciudad/get/${this.departamento}`
        )
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
          .put(
            `https://back-coohilados.vercel.app/api/servicio/desactivar/${item._id}`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (item.estado == 3) {
        axios
          .put(
            `https://back-coohilados.vercel.app/api/servicio/activar/${item._id}`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (item.estado == 2) {
        axios
          .put(
            `https://back-coohilados.vercel.app/api/servicio/vacaciones/${item._id}`
          )
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
      this.loading = true;
      let header = { headers: { "x-token": this.$store.state.token } };
      console.log(header);
      axios
        .post(
          "https://back-coohilados.vercel.app/api/servicio/agregar",
          {
            tipoDocumento: this.tipoDocumento,
            documento: this.documento,
            sexo: this.sexo,
            nombre: this.nombre,
            fechaNacimiento: this.fechaNacimiento,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            areaTrabajo: this.areaTrabajo,
            tipoContrato: this.tipoContrato,
            salario: this.salario,
            barrio: this.barrio,
            departamento: this.departamento,
            ciudad: this.city,
            telefono: this.telefono,
            email: this.email,
            rol: this.rol,
          },
          header
        )
        .then((response) => {
          this.traerTrabajador();
          this.dialog = false;
          console.log(response);
          this.$store.dispatch("setDatos", response.data.item);
          this.$router.push("/AgregarTrabajadores");
          this.loading = false;

          this.$swal({
            icon: "success",
            title: "El trabajador se agrego correctamente",
          });
        })
        .catch((error) => {
          console.log(error);
          this.dialog = false;
          this.loading = false;
          this.$swal({
            icon: "error",
            title: "Error al guardar el trabajador",
          });
        });
    },
    fecha(r) {
      let d = new Date(r);
      let f = d.toISOString();
      return f.split("T")[0].replace(/-/g, "/");
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
  border-radius: 10px;
}

.boton:hover .texto {
  visibility: visible;
}
</style>