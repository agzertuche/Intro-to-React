import firebase from 'firebase';
import { config } from './config';

const app = firebase.initializeApp(config);
const database = firebase.database(app);

export const firebaseAuth = firebase.auth();
export default database;