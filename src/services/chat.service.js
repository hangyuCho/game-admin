import axios from 'axios';
import authHeader from './auth-header';

const API_URL = `http://${process.env.APP_DATA_API_PATH}/roomMessage`;

class UserService {
  getAllChatList() {
    return axios.get(API_URL);
  }

  getChatListByRoom(chat) {
    return axios.get(API_URL, { headers: authHeader() }, 
    {
      room: chat.room
    });
  }
}

export default new UserService();
