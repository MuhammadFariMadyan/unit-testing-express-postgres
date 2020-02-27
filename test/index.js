const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app.js');
const helpers = require('./helpers');

describe('Server', () => {
  it('GET /', async () => {
    const response = await request(app)
      .get('/');
    
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Welcome to Backend API');    
  });
});

describe('User API Endpoint Tests', () => {
  context('GET /users', () => {
    it('GET /api/v1/users', async () => {
      const response = await request(app)
        .get('/api/v1/users/all');
      // console.log(response);
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('read all user');
      expect(response.body).to.have.property('user');
    });

    it('GET /api/v1/users/find/:idUser', async () => {
      const user = await helpers.createUser();

      const response = await request(app)
        .get(`/api/v1/users/find/${user.user.id}`);
      
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('success read single user');
      expect(response.body).to.have.property('user');
    });
  });

  context('POST /users', () => {
    it('POST /api/v1/users', async () => {
      let user = {
        name: 'Elfin',
        email: 'elfin@gmail.com',
        password: '123456'
      };

      const response = await request(app)
        .post('/api/v1/users')
        .send(user);
      
      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('success create user');
      expect(response.body).to.have.property('user');
    });
    
    it('POST /api/v1/users/login Success login', async () => {
      let user = {        
        email: 'elfin@gmail.com',
        password: '123456'
      };

      const response = await request(app)
        .post('/api/v1/users/login')
        .send(user);
      
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('success login');
      expect(response.body).to.have.property('checkUser');
    });
    
    it('POST /api/v1/users/login Failed login', async () => {
      let user = {        
        email: 'elfin@gmail.com',
        password: 'xxxxxx'
      };

      const response = await request(app)
        .post('/api/v1/users/login')
        .send(user);
      
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('Invalid login');      
    });
    
    it('POST /api/v1/users/login Failed login user not found', async () => {
      let user = {        
        email: 'siska@gmail.com',
        password: 'xxxxxx'
      };

      const response = await request(app)
        .post('/api/v1/users/login')
        .send(user);
      
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('User not found');      
    });
  });

  context('PUT /users', () => {
    it('PUT /api/v1/users/update:idUser Success update user', async () => {
      const userNew = {
        name: 'testUserUpdate',
        email: 'testUserUpdate@gmail'
      }
      
      const user = await helpers.createUser();

      const response = await request(app)
        .put(`/api/v1/users/update/${user.user.id}`)
        .send(userNew);

      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('update user');
      expect(response.body).to.have.property('user');
    });
    
    it('PUT /api/v1/users/update:idUser Failed update, user not found', async () => {
      const userNew = {
        name: 'testUserUpdate',
        email: 'testUserUpdate@gmail'
      }

      const idUserFake = 10000;
      
      await helpers.createUser();

      const response = await request(app)
        .put(`/api/v1/users/update/${idUserFake}`)
        .send(userNew);

      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('User not found');      
    });
  });
  
  context('DELETE /users', () => {
    it('DELETE /api/v1/users/:idUser Success delete user', async () => {
      const user = await helpers.createUser();

      const response = await request(app)
        .delete(`/api/v1/users/delete/${user.user.id}`);              
      
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('delete user');
      expect(response.body).to.have.property('user');
    });
    
    it('DELETE /api/v1/users/:idUser Failed delete, user not found', async () => {
      await helpers.createUser();

      const idUserFake = 10000;

      const response = await request(app)
        .delete(`/api/v1/users/delete/${idUserFake}`);              
      
      expect(response.statusCode).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('User not found');      
    });
  });
});
