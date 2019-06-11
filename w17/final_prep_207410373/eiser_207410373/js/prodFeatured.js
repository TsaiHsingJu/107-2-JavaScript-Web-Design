fetch('./js/prodFeatured.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output =`
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="main_title">
                            <h2><span>Featured product</span></h2>
                            <p>Bring called seed first of third give itself now ment</p>
                        </div>
                    </div>
                </div>

                <div class="row">
        `;

    data.forEach(function(p){
        output +=`
                    <div class="col-lg-4 col-md-6">
                        <div class="single-product">
                            <div class="product-img">
                                <img class="img-fluid w-100" src="img/product/feature-product/${p.pic}" alt="" />
                                <div class="p_icon">
                                    <a href="#">
                                        <i class="ti-eye"></i>
                                    </a>
                                    <a href="#">
                                        <i class="ti-heart"></i>
                                    </a>
                                    <a href="#">
                                        <i class="ti-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="product-btm">
                                <a href="#" class="d-block">
                                    <h4>${p.name}</h4>
                                </a>
                                <div class="mt-3">
                                    <span class="mr-4">${p.lastPrice}</span>
                                    <del>${p.origionalPrice}</del>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    });

    output +=`
                </div>
            </div>
        `;
        document.getElementById('prodFeatured').innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });

