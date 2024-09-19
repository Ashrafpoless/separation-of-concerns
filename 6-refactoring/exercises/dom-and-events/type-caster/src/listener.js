import  {castTheValue}  from './handler.js';

 export const eventListener = () => {

  document.getElementById('user-action').addEventListener('click', castTheValue);
};