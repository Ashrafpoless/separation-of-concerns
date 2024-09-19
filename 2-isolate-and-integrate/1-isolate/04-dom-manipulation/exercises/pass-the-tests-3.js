'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
divEl.children[0].children[0].children[0].innerHTML = 'a';
divEl.children[0].children[0].children[1].innerHTML = 'b';
const secondTable = divEl.children[0].cloneNode(true);
divEl.appendChild(secondTable);
divEl.children[1].children[0].children[0].innerHTML = 'c';
divEl.children[1].children[0].children[1].innerHTML = 'd';
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));
debugger;
const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
