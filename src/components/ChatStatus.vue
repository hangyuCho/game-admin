<template>
  <div class="container">
    <header class="jumbotron">
      <!-- <h3>{{ content }}</h3> -->
      <table>
        <tr>
          <th>
            
          </th>
        </tr>
        <tr v-for="room in content" v-bind:key="room" style="border:solid 1px #000000">
          <td style="border:solid 1px #000000">{{room.room}}</td>
          <td style="border:solid 1px #000000">{{room.message}}</td>
          <td style="border:solid 1px #000000">{{room.sender}}</td>
          <td style="border:solid 1px #000000">{{room.create_at}}</td>
        </tr>
      </table>
    </header>
  </div>
</template>

<script>
import ChatService from "../services/chat.service";

export default {
  name: "Chat",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    ChatService.getAllChatList().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
