/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Comment, conn } = require('../../src/db.js');

const agent = session(app);

const comment = {
  rating: 4,
  comment: 'This is a test comment',
  imdbID: 'tt0111257',
  userId: '16cae170-e111-4fbf-8366-f0ff5418ed1b'
};

const movieId = 'tt0111257'
const user = {
    email: 'user@user.com',
    password: 'user123',
    userType: 'USER'
}

describe('Comment routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Comment.sync({ force: true })
    .then(() => Comment.create(comment)));
  describe('GET /comments/:movieID', () => {
    it('should get 200', () =>
      agent.get(`/comments/${movieId}`).expect(200)
    );
  });
//   describe('POST /comments/:movieID',()=>{
//     it('should get 403 no user token',()=>
//     agent.post(`/comments/${movieId}`).expect(403))
//   });
//   describe('POST /comments/:movieID',()=>{
//     it('should get 200',()=> {
//             agent.post('/auth/register', )
//             agent.post(`/comments/${movieId}`, headers).expect(200)
//         }
//     )
//   });
});