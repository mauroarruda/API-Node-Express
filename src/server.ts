import express from 'express';

const api = express();

api.listen(3000, () => {
    console.log('Server Is Running!');
});

api.post('/', (request, response) => {

});

api.get('/', (request, response) => {
    return response.json('Requisição GET');
});

api.put('/', (request, response) => {
    
});

api.delete('/', (request, response) => {
    
});
