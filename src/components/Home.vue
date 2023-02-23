<template>
  <v-app id="inspire">
    <v-container fluid no-gutters>
      <v-row class="" align="center">
        <v-col></v-col>
        <v-col class="9">
          <v-card
            class="mt-20 text-center text-no-wrap"
            color="#3FA343"
            max-width="300"
            height="150"
            id=""
          >
            <v-card height="250" id="tarjeta1">
              <br />
              <v-card-title class="black--text"
                ><h4>Trabajadores COOHILADOS</h4> </v-card-title
              ><br />
              <v-card-text
                ><v-icon color="#3FA343">mdi-folder-multiple-outline</v-icon>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="mt-20 text-center text-no-wrap"
                  color="#3FA343"
                  rounded
                  outlined
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