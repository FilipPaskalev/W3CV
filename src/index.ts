import { DETAILS } from './components/details';

const FULL_NAME: string = DETAILS.PERSONAL.NAME.FIRST + ' ' + DETAILS.PERSONAL.NAME.FAMILY;
console.log('🚀 ~ file: index.ts ~ line 3 ~ FULL_NAME', FULL_NAME);

let sloganNN = document.createTextNode('This just got added');
document.getElementById('slogan')!.appendChild(sloganNN);
document.getElementById('slogan')!.textContent = 'New Heading';
