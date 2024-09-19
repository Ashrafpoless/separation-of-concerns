/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
  const myTable = document.createElement('table'); 
  
  for (let i = 0; i < arrayOfArrays.length; i++){
    const myTr = document.createElement('tr');
    for (let j = 0; j < arrayOfArrays[i].length; j++){
      const myTd = document.createElement('td');
      myTd.innerText = arrayOfArrays[i][j];
      myTr.append(myTd);
    }
    myTable.append(myTr);
  }

   

  return myTable;
};
