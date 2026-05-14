import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBPsg_y18RVEsxti2qLbGLXchsw0gGtMts',
	authDomain: 'mockly-261e5.firebaseapp.com',
	projectId: 'mockly-261e5',
	storageBucket: 'mockly-261e5.firebasestorage.app',
	messagingSenderId: '1069227753247',
	appId: '1:1069227753247:web:7a660a5807ba620958ba2a',
	measurementId: 'G-NZQZQH456R',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
