import axios from "axios";

const getData = async (id) => {
    const { data: users } = await axios ("https://jsonplaceholder.typicode.com/users/" + id);

    const { data: posts } = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + id)

    const lastData = [users, ...posts]
    return lastData;
}

export default getData;