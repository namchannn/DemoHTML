var data = `{
    "id":1,
    "title":"iPhone 9",
    "description":"An apple mobile which is nothing like apple",
    "price":549,
    "discountPercentage":12.96,
    "rating":4.69,
    "stock":94,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
}`;
console.log(data);
data = JSON.parse(data);
console.log(data);

var ct = document.getElementById("p-title");
ct.innerText = data.title;
var pthumb = document.getElementById("p-thumb");
pthumb.src = data.thumbnail;
var pdesc = document.getElementById("p-desc");
pdesc.innerText = data.description;

var pimgs = document.getElementById("p-imgs");
// for(var i = 0; i < data.images.length; i++) {
//     var li_item = `<li><img width="80" src="${data.images[i]}"></li>`;
//     pimgs.innerHTML += li_item;
// }

data.images.forEach (e => { // kiểu mảng
    var li_item = `<li><img width="80" src="${e}"></li>`;
    pimgs.innerHTML += li_item;
});