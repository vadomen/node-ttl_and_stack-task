const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

const server = require('../index.js');

chai.use(chaiHttp);

describe('Store tests', () => {
  it('Set name John', (done) => {
    chai.request(server)
      .post('/store/add')
      .send({
        key: 'name',
        value: "John"
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('Successfully added');
        done();
      });
  });
  it('Get name', (done) => {
    chai.request(server)
      .get('/store/get?key=name')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('John');
        done();
      });
  });
  it('Get age', (done) => {
    chai.request(server)
      .get('/store/get?key=age')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('');
        done();
      });
  });
  it('Set name Larry with 5 sec ttl', (done) => {
  chai.request(server)
    .post('/store/add')
    .send({
      key: 'name',
      value: "Larry",
      ttl: 5000
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      res.text.should.be.eql('Successfully added');
      done();
    });
  });
  it('Get name within 5 secconds', (done) => {
    chai.request(server)
      .get('/store/get?key=name')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('Larry');
        done();
      });
  });

  it('Delete age key from store', (done) => {
    chai.request(server)
      .delete('/store/delete?key=age')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('Successfully deleted');
        done();
      });
  });
  it('Get deleted key', (done) => {
    chai.request(server)
      .get('/store/get?key=age')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('');
        done();
      });
  });
  it('Get without required fields', (done) => {
    chai.request(server)
      .get('/store/get')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(502);
        res.text.should.be.eql('Please add required fields');
        done();
      });
  });
  it('Set without required fields', (done) => {
    chai.request(server)
      .post('/store/add')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(502);
        res.text.should.be.eql('Please add required fields');
        done();
      });
  });
  it('Delete without required fields', (done) => {
    chai.request(server)
      .delete('/store/delete')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(502);
        res.text.should.be.eql('Please add required fields');
        done();
      });
  });

  it('Get name after 6 secconds', (done) => {
    setTimeout(()=>{
    chai.request(server)
      .get('/store/get?key=name')
      .send()
      .end(function(err, res) {
        expect(res).to.have.status(200);
        res.text.should.be.eql('Larry');
        done();
      });
    }, 6000);
  });
});
