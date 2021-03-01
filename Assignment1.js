class book{
    constructor(isbn,title,author,price,rating){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

// function getlist(){
//     console.log("list of ",b1 ,'\n',"  ",b2);
// }
getlistprice(price){ 
    return `${this.price} ${price}`; 
};

}
let b1=new book(1,"abc","xyz",100,5);
let b2=new book(2,"pqr","jhon",200,3);

console.log("list of ",b1 ,'\n',"  ",b2);
console.log("list of book by price ",b1.getlistprice(100),b2.getlistprice(200));



for (var i = 0; i < book.length; i++) 
   {
    var bb = "'" + book[i].price + "'" + ' by ' + book[i].author + ".";
    if (book[i].readingStatus) {
      console.log("Already read " + bb);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

// class bookManager extends book{

    
// }
// let m1=new bookManager();
// m1.add(new book(3,"test","nick",250,4));
// m2.add(new book(4,"peter","test1",350,8));

// console.log("list of ",b1 ,'\n',"  ",b2,'\n',m1, '\n'," ",m2);



