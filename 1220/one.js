/**
 * @param {number[][]} rectangle
 */
 var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for(let i=row1; i<=row2; i++) {
        for(let j=col1; j<=col2; j++) {
            this.rectangle[i][j] = newValue;
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
let m = ["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
let n = [[[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]],[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]

let m2 = ["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue"];
let n2 = [[[[1,1,1],[2,2,2],[3,3,3]]],[0,0],[0,0,2,2,100],[0,0],[2,2],[1,1,2,2,20],[2,2]];

var obj = new SubrectangleQueries(n[0])
for(let i = 1; i<m2.length; i++) {
    if(m2[i] === 'getValue') {
        const [row,col] = n2[i];
        var param_2 = obj.getValue(row,col); 
        console.log(param_2);
    } else if(m2[i] === 'updateSubrectangle') {
        const [row1,col1,row2,col2,newValue] = n2[i];
        obj.updateSubrectangle(row1,col1,row2,col2,newValue)
        console.log(obj);
    }
}
