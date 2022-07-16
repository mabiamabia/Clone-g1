import axios from "axios";

/* `http://localhost:${port}/feed/page/${page}` */

const ApiBlog = axios.create({
    baseURL: "http://localhost:3000"
});

export default ApiBlog;