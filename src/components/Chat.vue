<template>
    <h1 class="text-center">Chats</h1>

    <v-card
    v-for="item of messages"
    theme="dark"
    width="300"
    class="mb-3"
    :key="item.id"
    :subtitle="item.displayName"
    :text="item.text"
    :class="item.uid === userChat.uid && 'ml-auto'"
    :color="item.uid === userChat.uid ? 'lime' : '#555'"
    ></v-card>

</template>

<script setup>

    import { ref } from 'vue';

    const userChat = ref({
        uid:"002"
    })

    const messages = ref ([
        {
            id: 1,
            text: "este es el mensaje",
            uid: '001',
            time: Date.now(),
            displayName: 'usuario'
        },
        {
            id: 2,
            text: "este es el mensaje2",
            uid: '002',
            time: Date.now(),
            displayName: 'usuario2'
        },
        {
            id: 2,
            text: "este es el mensaje3",
            uid: '002',
            time: Date.now(),
            displayName: 'usuario2'
        }

        ])

</script>