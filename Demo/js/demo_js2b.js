async function getData(x) {
    var data = await fetch(`https://dummyjson.com/products/${x}`)
    data = await data.json();
    var ct = document.getElementById("p-title");
    ct.innerText = data.title;
    var pthumb = document.getElementById("p-thumb");
    pthumb.src = data.thumbnail;
    var pdesc = document.getElementById("p-desc");
    pdesc.innerText = data.description;

    var pimgs = document.getElementById("p-imgs");
    data.images.forEach (e => { // kiểu mảng
        var li_item = `<li><img width="80" src="${e}"></li>`;
        pimgs.innerHTML += li_item;
    });
}
getData(6);