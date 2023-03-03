<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col class="text-center">
          <v-template>
            <v-toolbar>
              <v-toolbar-title>Usuarios</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <template>
                <div class="text-center">
                  <v-dialog max-width="800px" v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        dark
                        class="mb-2 green lighten-3"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Nuevo Usuario
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5"
                        >Ingrese nuevo usuario</v-card-title
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
                            <v-text-field
                              v-model="nombre"
                              label="Nombre"
                              required
                            ></v-text-field>
                            <v-select
                              v-model="tipoDocumento"
                              :items="tipoDocumento"
                              label="Tipo de Documento"
                              required
                            >
                            </v-select>
                            <v-text-field
                              v-model="documento"
                              label="Documento"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="direccion"
                              label="Direccion"
                              required
                            ></v-text-field>
                            <v-select
                              :items="cities"
                              v-model="departamento"
                              label="Departamento"
                              @change="traerCiudades()"
                            ></v-select>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-select
                              :items="town"
                              v-model="city"
                              item-text="Ciudad"
                              label="Ciudad"
                            ></v-select>
                            <v-text-field
                              v-model="contacto"
                              label="Contacto"
                            ></v-text-field>
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
                            <v-text-field
                              v-model="rol"
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
                        <v-btn color="blue darken-1" text @click="agregar()"
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
              :items="usuarios"
              sort-by="nombre"
              class="elevation-1"
            >
              <template>
                <v-toolbar flat>
                  <v-card>
                    <v-card-title> </v-card-title>
                    <v-card-text>
                      <v-container v-for="item in usuarios" :key="item._id">
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="nombre" label="Nombre">{{
                              item.nombre
                            }}</v-text-field>
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
                            <v-text-field v-model="telefono" label="Telefono">{{
                              item.telefono
                            }}</v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="email" label="E-mail">{{
                              item.email
                            }}</v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="rol" label="Rol">{{
                              item.rol
                            }}</v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="estado" label="Estado">{{
                              item.estado
                            }}</v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-toolbar>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                  color="green"
                  icon
                  dark
                  class="mb-2"
                  @click="detalleUsuario(item)"
                >
                  <font-awesome-icon icon="fa-solid fa-eye" />
                </v-btn>

                <v-btn
                  color="primary"
                  icon
                  dark
                  class="mb-2"
                  @click="detalleUsuario(item)"
                >
                  <font-awesome-icon icon="fa-solid fa-pencil" />
                </v-btn>

                <v-btn
                  color="red"
                  icon
                  @click="desactivar(item._id)"
                  v-show="item.estado === 'Activo'"
                >
                  <font-awesome-icon icon="fa-solid fa-ban" />
                </v-btn>
                <v-btn
                  color="green"
                  icon
                  @click="activar(item._id)"
                  v-show="item.estado === 'Inactivo'"
                >
                  <font-awesome-icon icon="fa-solid fa-check" />
                </v-btn>
              </template>
            </v-data-table>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "PagesAgregarusuario",
  data: () => ({
    dialog: false,
    dialogEdit: false,
    headers: [
      { text: "Nombre", value: "nombre" },
      { text: "TipoDocumento", value: "tipoDocumento" },
      { text: "Documento", value: "documento" },
      { text: "Telefono", value: "telefono" },
      { text: "Email", value: "email" },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    tipoPersona: ["Persona Natural", "Persona Juridica"],
    nombre: "",
    tipoDocumento: [
      "Cedula de Ciudadania",
      "Cedula de Extranjeria",
      "Pasaporte",
      "Numero de Identificacion tributaria",
    ],
    documento: "",
    direccion: "",
    departamento: "",
    city: "",
    contacto: "",
    telefono: "",
    email: "",
    password: "",
    rol: "",
    cities: [],
    town: [],
    usuarios: [],
  }),
  methods: {
    detalleUsuario(item) {
      this.$router.push("/Infousuario");
      this.$store.dispatch("setDatos", item);
      console.log(this.$store.state.datos);
    },
    close() {
      this.dialog = false;
    },

    traerUsuarios() {
      axios
        .get("https://back-coohilados.vercel.app/api/usuario")
        .then((response) => {
          this.usuarios = response.data.usuario;
          console.log(this.usuarios);
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
    desactivar(id) {
      console.log(id);
      if (id) {
        axios
          .put(`https://back-coohilados.vercel.app/api/usuario//desactivar/desactivar/${id}`)
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
          .put(`https://back-coohilados.vercel.app/api/usuario/activar/${id}`)
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
          "https://back-coohilados.vercel.app/api/usuario",
          {
            tipoPersona: this.tipoPersona,
            tipoDocumento: this.tipoDocumento,
            documento: this.documento,
            nombre: this.nombre,
            direccion: this.direccion,
            departamento: this.departamento,
            ciudad: this.city,
            contacto: this.contacto,
            telefono: this.telefono,
            email: this.email,
            password: this.password,
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
    //this.traerCiudades()
    //this.agregar()
    this.traerUsuarios();
  },
};
</script>