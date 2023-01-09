/*
const animal = {
    name: "",
    kind: "",
   speak:"Dog says: Hey broo",
   
    printFullName() {
      console.log(` ${this.speak}`);
    },
  };
 
animal.printFullName();
*/
const book = {
    title: "The Robots of dawn ",
    author:"Isaac Asimov ",
    readingStatus: true,
};

const bookTwo = {
    titleTwo: "the final book of the hungar games",
    authorTwo:"Suzaanne Collins",
    readingStatuss: false
};

function calling( ){
    if(readingStatus === true) {
console.log(book)
    }
    else(readingStatuss === false){
        console.log(bookTwo)
    }
}
calling(true);

//Zaglaviv tuka mi dava greska "Unexpected token "{" nikako nemozam da trgnam nataka 
//no mislam deka delumno e tocen kodot, dokolku ne e popravete me :)