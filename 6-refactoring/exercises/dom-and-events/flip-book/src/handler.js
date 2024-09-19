import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = (input) => {
    // const input = document.getElementById('input').innerText;
    //const input = event.target.value;
    const reversed = reverseAndUpper(input);
    const output =  document.getElementById('output');
    output.innerHTML = reversed;
    return output;
}


