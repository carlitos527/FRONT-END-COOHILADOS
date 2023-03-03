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
                    <v-toolbar-title>Trabajadores </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                </v-template>

                <!--   informacion de todos los tranbajadores -->
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="directos"
                    sort-by="nombre"
                    class="elevation-1 amber lighten-3"
                  >
                    <template>
                      <v-toolbar flat>
                        <v-card>
                          <v-card-title> </v-card-title>
                          <v-card-text>
                            <v-container
                              v-for="item in directos"
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
                          @click="detalleTrabajador(item),detalleDirecto(item)"
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
                          @click="detalleTrabajador(item),detalleDirecto(item)"
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
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "PagesTrabajadores",
  data: () => ({
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

    nombre: "",
    tipoDocumento: [
      "Cedula de Ciudadania",
      "Cedula de Extranjeria",
      "Pasaporte",
      "Numero de Identificacion tributaria",
    ],
    documento: "",
    sexo: ["M", "F"],
    tiempoLaborado: "",
    cargo: "",
    areaTrabajo: "",
    salario: "",
    direccion: "",
    departamento: "",
    city: "",
    telefono: "",
    email: "",
    rol: "",
    area: [],
    cities: [],
    town: [],
    directos: [],
  }),
  methods: {
    detalleTrabajador(item) {
      this.$router.push("/Infotrabajador");
      this.$router.push("/Infotemporal");
      this.$router.push("/Infodirecto");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
    close2() {
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

    detalleDirecto(item) {
      this.$router.push("/Infodirecto");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
    close1() {
      this.dialog = false;
    },

    prueba() {
      console.log("ciudad: " + this.city);
    },

    traerDirecto() {
      axios
        .get("https://back-coohilados.vercel.app/api/trabajadorDirecto")
        .then((response) => {
          this.directos = response.data.trabajador2;
          console.log(this.directos);
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
            `https://back-coohilados.vercel.app/api/trabajadorDirecto/desactivar/${item._id}`
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
            `https://back-coohilados.vercel.app/api/trabajadorDirecto/activar/${item._id}`
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
            `https://back-coohilados.vercel.app/api/trabajadorDirecto/vacaciones/${item._id}`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.traerDirecto();
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
          .put(
            `https://back-coohilados.vercel.app/api/trabajadorDirecto/activar/${id}`
          )
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
          "https://back-coohilados.vercel.app/api/trabajadorDirecto",
          {
            tipoDocumento: this.tipoDocumento,
            documento: this.documento,
            sexo: this.sexo,
            nombre: this.nombre,
            fechaNacimiento: this.fechaNacimiento,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            areaTrabajo: this.areaTrabajo,
            salario: this.salario,
            barrio: this.barrio,
            departamento: this.departamento,
            ciudad: this.city,
            telefono: this.telefono,
            email: this.email,
            cargo: this.rol,
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

    fecha(r) {
      let d = new Date(r);
      let f = d.toISOString();
      return f.split("T")[0].replace(/-/g, "/");
    },
  },

  created() {
    this.traerDepartamentos();

    this.traerAreaTrabajo();

    this.traerDirecto();
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