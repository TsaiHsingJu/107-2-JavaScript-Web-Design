let json_prodFeatured = document.getElementById('json_prodFeatured');
if(json_prodFeatured != null)
    json_prodFeatured.addEventListener('click',getprodFeatured());

let json_prodInspired = document.getElementById('json_prodInspired');
if(json_prodInspired != null)
    json_prodInspired.addEventListener('click',prodInspired());

let json_combined = document.getElementById('json_combined');
if(json_combined != null)
    json_combined.addEventListener('click',getCombined());

async function getCombined(){
    if(document.getElementById('prodFeatured') != null) await getprodFeatured();
    if(document.getElementById('prodInspired') != null) await getprodInspired();
}

getCombined();

function getprodFeatured(){
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
}

function getprodInspired(){
    fetch('./js/prodInspired.json')
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
                        <h2><span>Inspired products</span></h2>
                        <p>Bring called seed first of third give itself now ment</p>
                    </div>
                </div>
            </div>
  
            <div class="row">
        `;

    data.forEach(function(p){
        output +=`
            <div class="col-lg-3 col-md-6">
                <div class="single-product">
                    <div class="product-img">
                        <img class="img-fluid w-100" src="img/product/inspired-product/${p.pic}" alt="" />
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
        document.getElementById('prodInspired').innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });
    】