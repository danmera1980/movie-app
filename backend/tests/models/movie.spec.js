const { Favorite, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Favorite model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Favorite.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if imdbID is null', (done) => {
        Favorite.create({})
          .then(() => done(new Error('It requires a valid imdbID')))
          .catch(() => done());
      });
      it('should work when its a valid imdbID', () => {
        Favorite.create({ imdbID: 'tt0111257' });
      });
    });
  });
});