/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
     let obj = {}, obj2 = {};
     for(const x of ransomNote) {
         obj[x] = (obj[x] || 0) + 1;
     }

     for(const x of magazine) {
        obj2[x] = (obj2[x] || 0) + 1;
     }

     for(const k of Object.keys(obj)) {
         if(obj[k] > obj2[k]) return false;
         if(!obj2[k]) return false;
     }
     
     return true;
};

console.log(canConstruct('aa', 'aab'));