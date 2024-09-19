'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---
ulEl.children[1].remove();
ulEl.children[2].remove();

ulEl.children[0].innerHTML = ulEl.children[0].innerHTML.trim();
const lEl = document.createElement('li');
lEl.innerHTML = 'frog';
ulEl.appendChild(lEl)
const salamander = ulEl.children[1];
ulEl.insertBefore(lEl, salamander);
// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(
  ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3',
);

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI', `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(
    actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`,
  );
}
