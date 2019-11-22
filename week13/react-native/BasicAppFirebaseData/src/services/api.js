/*
* api.js - BasicAppFirebase1
* - central config and initialisation for APIs and services...
*/

// import initialisation settings &c. for firebase...
import { setListener, initialize } from './firebase';

// initialise api for working with firebase...
export const initApi = () => initialize();

// get cards from current firebase database
export const getCards = (updaterFn) => setListener('egypt/ancient_sites', updaterFn);
