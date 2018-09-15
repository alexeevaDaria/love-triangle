/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var counter=0;

  for(i=1;i<=preferences.length;i++){
    if(preferences[i-1]!=0 && preferences[i-1]!=i){
      if(preferences[preferences[i-1]-1]!=0 && preferences[preferences[i-1]-1]!=i){
        if(preferences[preferences[preferences[i-1]-1]-1]==i){
          counter++;
          preferences[i-1]=preferences[preferences[i-1]-1]
             =preferences[preferences[preferences[i-1]-1]-1]=0;
        }
      }
    }
  }
  return counter;
  // your implementation

};
