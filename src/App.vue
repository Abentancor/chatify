<template>
  <v-app>
    <v-app-bar color="lime">
      <v-app-bar-title>Chatify</v-app-bar-title>
      <v-btn
      prepend-icon="mdi-login"
      color="white"
      @click="googleAcces"
      v-if="!userGoogle"
      >acceder</v-btn>
      <v-btn
      prepend-icon="mdi-logout"
      color="white"
      @click="logout"
      v-if="userGoogle"
      >Salir</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Chat v-if="userGoogle"/>
        <div v-else>
          <h1 class="text-center mt-4">Inicia sesión para chatear</h1>
        </div>
      </v-container>
    </v-main>

    <v-footer>
      <FormAdd/>
    </v-footer>
  </v-app>
</template>

<script setup>
  import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "@firebase/auth";
import { auth } from "../Firebase";
import Chat from "./components/Chat.vue";
import FormAdd from "./components/FormAdd.vue";
import { ref } from 'vue';

const userGoogle = ref(false)

const googleAcces = async()=>{
  try {
      const provider = new GoogleAuthProvider()
      const  {user} = await signInWithPopup(auth, provider)
      console.log(user)
  } catch (error) {
    
  }
}
const logout = async() =>{
  await signOut(auth)
}

onAuthStateChanged(auth, (user) => {
     console.log("desde onAuthStateChanged: ", user);
    userGoogle.value = user;
})
</script>