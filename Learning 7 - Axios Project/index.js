const axios = require('axios')

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Example API URL, you can replace it with any other API
axios.get(apiUrl).then(response=>{
    console.log('Data fetched succesfully');
    console.log(response.data);
})
.catch(error=>{
    console.error('Error fetching data: ', error.message);
});
