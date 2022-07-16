<template>
<v-form
class="w-100"
@submit.prevent="sendMessage"
>
    <v-text-field
    color="succes"
    label="ingresa el mensaje"
    hide-details
    append-icon="mdi-send"
    @click:append="sendMessage"
    v-model="message">
    </v-text-field>
</v-form>

</template>

<script setup>
import { ref } from 'vue';


const message = ref('')

const sendMessage= () =>{
    console.log("enviando mensaje" + message.value )

    message.value('')
}

</script>