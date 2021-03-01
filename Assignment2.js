
class books{


}
var Bookmanagement = [ 
    {
        title: 'test',
        author: 'Ahead',
        price: 100,
        rating:10
    },
    {
        title: 'legend of blue sea',
        author: 'jhon',
        price: 300,
        rating:4
    },
    {
        title: 'life',
        author: 'nick',
        price:5100,
        rating:10
    }];

for (var i = 0; i < Bookmanagement.length; i++) 
   {
    var book = "'" + Bookmanagement[i].title + "'" + ' by ' + Bookmanagement[i].author + ".";
    var bb = "'" + Bookmanagement[i].price + "'" + ' by ' + Bookmanagement[i].author + ".";
  
      console.log("list of books by price " + bb);
      console.log("list of books by author name"+book)
    
   }

   Bookmanagement.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});



// console.log(Bookmanagement.sort(a, b));
// let b1=new books();
// //console.log(b1.sort(100,200));