const admin = require('firebase-admin');
const serviceAccount = require('../segunda-entrega-d2c67-firebase-adminsdk-3vy4j-84da86b190.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const { getFirestore, doc, getDoc } = require('firebase-admin/firestore');

class Container {
	constructor() {
		this.db = getFirestore();
	}
	save(obj) {
		try {
			return this.db.collection('products').add(obj);
		} catch (err) {
			console.log(err);
		}
	}
	getById(id) {
		try {
			const data = this.db.doc(`/products/${id}`).get();
			return data;
		} catch (err) {
			console.log(err);
		}
	}
	getAll() {
		try {
			return this.model.find();
		} catch (err) {
			console.log(err);
		}
	}
	deleteById(id) {
		try {
			return this.model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Container;