<template>
  <v-app>
    <v-container fluid no-gutters>
      <v-row>
        <br /><br />
        <br /><br />
        <v-row>
          <v-col></v-col>
          <v-col class="9">
            <v-card
              class="mt-20 text-center red text-no-wrap"
              max-width="300"
              height="150"
              id=""
            >
              <v-card height="250" id="tarjeta1">
                <br />
                <v-card-title class="white--text"
                  ><h4>Trabajadores COOHILADOS</h4> </v-card-title
                ><br />
                <v-card-text
                  ><v-icon color="yellow">mdi-folder-multiple-outline</v-icon>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    rounded
                    class="text-center"
                    outlined
                    color="orange darken-1"
                    to="/TiposTrabajadores"
                  >
                    Acceder
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>

          <v-col> </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "pagesHome",
  data: () => ({
    items: ["Configuracion", "Reportes", "Nuevos Usuarios"],
  }),
};
</script>
<style>
#tarjeta1 {
  border-radius: 0px 130px 0px 0px;
}
#tarjeta2 {
  border-radius: 0px 120px 0px 0px;

  top: 80px;
}
</style>