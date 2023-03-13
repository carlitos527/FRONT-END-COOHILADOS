<template>
  <v-app>
    <v-container fluid>
      
      <v-row>
        <v-col class="text-center">
          <v-card>
            <v-card-title class="text-h5">Ingrese nuevo usuario</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="tipoDocumento"
                    :items="tipoDocumento"
                    label="Tipo de Documento"
                    required
                  >
                  </v-select>

                  <v-text-field
                    v-model="documento"
                    :rules="documentoRules"
                    label="Documento"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="nombre"
                    label="Nombre y Apellidos"
                    :rules="nombreRules"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="direccion"
                    label="Direccion"
                    :rules="direccionRules"
                    required
                  ></v-text-field>
                  <v-select
                    :items="cities"
                    v-model="departamento"
                    label="Departamento De Nacimiento"
                    @change="traerCiudades()"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-select
                    :items="town"
                    v-model="city"
                    item-text="Ciudad"
                    item-value="_id"
                    label="Ciudad de Nacimiento"
                    @change="prueba()"
                  ></v-select>

                  <v-text-field
                    v-model="telefono"
                    label="Telefono"
                    :rules="telefonoRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Escriba una Contraseña"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-text-field 
                  v-model="rol"
                   label="Rol"
                   :rules="rolRules"
                   ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="agregar()"
                >Guardar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
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
    loading: false,
    dialog: false,
    dialogEdit: false,

    valid:true,
    nombre: "",
    nombreRules: [
      (n) => !!n || " Nombre y Apellidos son requerido ❌",
      (n) => (n && n.length <= 50) || " EL Nombre solo puede tener 50 caracteres",
    ],
    
    tipoDocumento: ["Cedula de Ciudadania", "Cedula de Extranjeria"],

    vali2:true,
    documento: "",
     documentoRules: [
      (d) => !!d || " EL numero del Documento es requerido ❌",
      (d) => (d && d.length <= 17) || " Cedula No puede tener menos de 6 caracteres",
    ],
    valid3:true,
    direccion: "",
    direccionRules: [
      (di) => !!di || " La Direccion  es requerido ❌",
      (di) => (di && di.length <= 20) || " Direcion solo puede tener 20 caracteres",
    ],
    departamento: "",
    city: "",
    valid4:true,
    telefono: "",
    telefonoRules: [
      (t) => !!t || " EL numero de telefono es requerido ❌",
      (t) => (t && t.length <= 30) || " Telefono solo puede tener 30 caracteres",
    ],
    vali5:true,
    email: "",
    emailRules: [
      (e) => !!e || " EL E-mail es requerido ❌",
      (e) => (e && e.length <= 30) || " el email  solo puede tener menos de  30 caracteres",
    ],
    valid6:true,
    password: "",
    passwordlRules: [
      (p) => !!p || " La contraseña es requerido ❌",
      (p) => (p && p.length <= 8) || " La contraseña  no puede tener menos de 8 caracteres",
    ],
    valid7:true,
    rol: "",
    rolRules: [
      (r) => !!r || " EL Rol es requerido ❌",
      (r) => (r && r.length <= 20) || " el Rol solo puede tener menos de  20 caracteres",
    ],
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
    desactivar(id) {
      console.log(id);
      if (id) {
        axios
          .put(
            `https://back-coohilados.vercel.app/api/usuario//desactivar/desactivar/${id}`
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
      this.loading = true;
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
          this.dialog = false;
          console.log(response);
          this.$store.dispatch("setDatos", response.data.item);
          this.$router.push("/Home");
          this.loading = false;

          this.$swal({
            icon: "success",
            title: "Se creo el Usuario  correctamente",
          });
        })
        .catch((error) => {
          console.log(error);
          this.dialog = false;
          this.loading = false;
          this.$swal({
            icon: "error",
            title: "Error al guardar el Usuario",
          });
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