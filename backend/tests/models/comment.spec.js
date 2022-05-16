const { Comment, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Comment model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Comment.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if comment is null', (done) => {
        Comment.create({})
          .then(() => done(new Error('It requires a valid comment')))
          .catch(() => done());
      });
      it('should work when its a valid comment', () => {
        Comment.create({ comment: 'This is a test comment' });
      });
    });
  });
});