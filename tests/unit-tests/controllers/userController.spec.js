require('should');
require('should-sinon');
require('../helper');
const authorizationType = require('../../../app/data/enums/authorizationType');
const userService = require('../../../app/services/userService')
const userController = require('../../../app/controllers/userController')
const  bcrypt = require('bcrypt');

describe('registration', function () {
	it('should be success registered', async function () {
		const name = 'Mike';
		const email  = 'mike@gmail.com';
		const password = '132132132';
		const type = authorizationType.EMAIL;

		this.sandbox.stub(userService,'findUserByEmail').returns(null);
		this.sandbox.stub(userService,'create').returns({
			name:'Mike',
			email:'mike@gmail.com'
		});
		 await userController.registration(name,email,password,type);
		 userService.findUserByEmail.should.be.calledOnce();
	});
	it('should be throw exception (no name) ', async function () {
		const name = null;
		const email  = 'mike@gmail.com';
		const password = '132132132';
		const type = authorizationType.EMAIL;

		this.sandbox.stub(userService,'findUserByEmail').returns(null);
		this.sandbox.stub(userService,'create').returns({
			name:'Mike',
			email:'mike@gmail.com'
		});
		await userController.registration(name,email,password,type).catch(function (err) {
			err.message.should.be.equal('Name or Email not exist');
			err.status.should.be.equal(401);
		});
	});
	it('should be throw exception (already exist ', async function () {
		const name = 'Mike';
		const email  = 'mike@gmail.com';
		const password = '132132132';
		const type = authorizationType.EMAIL;

		this.sandbox.stub(userService,'findUserByEmail').returns(true);
		this.sandbox.stub(userService,'create').returns({
			name:'Mike',
			email:'mike@gmail.com'
		});
		await userController.registration(name,email,password,type).catch(function (err) {
			err.message.should.be.equal('This email already registered');
			err.status.should.be.equal(401);
		});
	});
	it('should be throw exception (password not exist ', async function () {
		const name = 'Mike';
		const email  = 'mike@gmail.com';
		const password = null;
		const type = authorizationType.EMAIL;

		this.sandbox.stub(userService,'findUserByEmail').returns(false);
		this.sandbox.stub(userService,'create').returns({
			name:'Mike',
			email:'mike@gmail.com'
		});
		await userController.registration(name,email,password,type).catch(function (err) {
			err.message.should.be.equal('Password not exist');
			err.status.should.be.equal(401);
		});
	});
});
describe('login', function () {
	it('should success login', async function () {
		const name = 'Mike';
		const password = '132132132';
		const email  = 'mike@gmail.com';
		const type = authorizationType.EMAIL;
		this.sandbox.stub(userService,'findUserByEmail').returns({
			dataValues: {
				name: 'Mike',
				password: '132132132'
			}
		});
		this.sandbox.stub(bcrypt,'compareSync').returns(true);

		const  result = await  userController.login(email,password,type);


		result.dataValues.name.should.be.equal(name);
	});
	it('should throw exception (email not exist)', async function () {
		const name = 'Mike';
		const password = '132132132';
		const email  = null;
		const type = authorizationType.EMAIL;
		this.sandbox.stub(userService,'findUserByEmail').returns({
			dataValues: {
				name: 'Mike',
				password: '132132132'
			}
		});
		this.sandbox.stub(bcrypt,'compareSync').returns(true);

		 await  userController.login(email,password,type).catch(function (err) {
			err.message.should.be.equal('No email exist');
			err.status.should.be.equal(401);
		});
	});
	it('should throw exception (not registered)', async function () {
		const name = 'Mike';
		const password = '132132132';
		const email  = 'mike@gmail.com';
		const type = authorizationType.EMAIL;
		this.sandbox.stub(userService,'findUserByEmail').returns(false);
		this.sandbox.stub(bcrypt,'compareSync').returns(true);

		 await  userController.login(email,password,type).catch(function (err) {
			err.message.should.be.equal('User not registered');
			err.status.should.be.equal(401);
		});
	});
	it('should throw exception (not login)', async function () {
		const password = '132132132';
		const email  = 'mike@gmail.com';
		const type = authorizationType.EMAIL;
		this.sandbox.stub(userService,'findUserByEmail').returns({
			dataValues: {
				name: 'Mike',
				password: '132132132'
			}
		});
		this.sandbox.stub(bcrypt,'compareSync').returns(false);

		await  userController.login(email,password,type).catch(function (err) {
			err.message.should.be.equal('Combination login and password not finded');
			err.status.should.be.equal(401);
		});
	});
})