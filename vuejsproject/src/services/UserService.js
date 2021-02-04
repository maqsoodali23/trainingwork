import axios from 'axios';
export default {
    async signup(data) {
      let res = await axios.post("http://127.0.0.1:3000/users/signup", data);
      return res.data;
    },
    async login(data) {
      let res = await axios.post("http://127.0.0.1:3000/users/login", data);
      return res.data;
    }
}