const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

const server = require('../index.js');

chai.use(chaiHttp);

describe('Stack tests', () => {
  describe('Add to stack', () => {
    it('Add "Hello"', (done) => {
      chai.request(server)
        .post('/stack/add')
        .send({
          value: "Hello"
        })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('Successfully added');
          done();
        });
    });
    it('Add "World"', (done) => {
      chai.request(server)
        .post('/stack/add')
        .send({
          value: "World"
        })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('Successfully added');
          done();
        });
    });
    it('Add "Again"', (done) => {
      chai.request(server)
        .post('/stack/add')
        .send({
          value: "Again"
        })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('Successfully added');
          done();
        });
    });
    it('No Value in request', function(done) {
      chai.request(server)
        .post('/stack/add')
        .send({})
        .end(function(err, res) {
          expect(res).to.have.status(502);
          res.text.should.be.eql('Please add value');
          done();
        });
    });
  });
  describe('Get from stack', () => {
    it('Get "Again"', (done) => {
      chai.request(server)
        .get('/stack/get')
        .send()
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('Again')
          done();
        });
    })
    it('Get "World"', (done) => {
      chai.request(server)
        .get('/stack/get')
        .send()
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('World')
          done();
        });
    })
    it('Get "Hello"', (done) => {
      chai.request(server)
        .get('/stack/get')
        .send()
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('Hello')
          done();
        });
    })
    it('Stack is empty', (done) => {
      chai.request(server)
        .get('/stack/get')
        .send()
        .end(function(err, res) {
          expect(res).to.have.status(200);
          res.text.should.be.eql('')
          done();
        });
    })
  })
})
