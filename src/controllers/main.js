var productService = new ProductService();

function getEle(id) {
    return document.getElementById(id);
}

function getListProducts() {
    var promise = productService.getListProductApi();
    // Loading
    getEle("loader").style.display = "block";

    promise
        .then(function (res) {
            // Resolve(Thành công)
            // console.log(res.data);
            getEle("loader").style.display = "none";
            renderHTML(res.data);

        })
        .catch(function (error) {
            // Reject(Thất bại)

            getEle("loader").style.display = "none";
            console.log(error);
        });
    // console.log(productService.arr);
}

getListProducts();

function renderHTML(data) {
    var content = "";

    // for (var i = 0; i < data.length; i++) {
    //     var product = date[i];
    // }

    data.forEach(function (product) {
        content += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card cardPhone">
                        <img src="./img/${product.hinhAnh}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                                    <p class="cardPhone__text">${product.moTa}</p>
                                </div>
                                <div>
                                    <h3 class="cardPhone__title">${product.gia}</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="cardPhone__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div>
                                    <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
`
    });

    getEle("productItems").innerHTML = content;
}

// setTimeout(function () {
//     console.log(123);
// }, 3000);