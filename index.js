function theBeatlesPlay(musicians, instruments){
  var array = []
<<<<<<< HEAD
  for(var i= 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0;
  var array = []
  while(facts.length > i){
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number ++
  }while(number < 15)
  return array
=======
  for(var i= 0; i < musicians.length-1; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
>>>>>>> a208babc75c748db4cc223043e6528f2da70ee16
}