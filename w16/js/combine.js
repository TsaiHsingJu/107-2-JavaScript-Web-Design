//Process portfolio data
fetch('./js/portfolio.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let output = `
        <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
            `;

        data.forEach(function (p) {
            output += `
            <div class="col-lg-4 col-md-6 portfolio-item filter-${(p.category).toLowerCase()} wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/portfolio/${p.pic}" class="img-fluid" alt="">
                <a href="img/portfolio/${p.pic}" data-lightbox="portfolio" data-title="App 1" class="link-preview"
                  title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">${p.name}</a></h4>
                <p>${p.category}</p>
              </div>
            </div>
          </div>
                `;
        });
        output +=`
                </div>

             </div>
        `;

        document.getElementById('portfolio').innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });

//Process team data
fetch('./js/team.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let output = `
                <div class="container">
                    <div class="section-header wow fadeInUp">
                        <h3>Team</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
      
                    <div class="row">
            `;

        data.forEach(function (p) {
            output += `
                <div class="col-lg-3 col-md-6 wow fadeInUp">
                    <div class="member">
                        <img src="img/${p.pic}" class="img-fluid" alt="">
                        <div class="member-info">
                            <div class="member-info-content">
                                <h4>${p.name}</h4>
                                <span>${p.title}</span>
                                <div class="social">
                                    <a href=""><i class="fa fa-twitter"></i></a>
                                    <a href=""><i class="fa fa-facebook"></i></a>
                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                </div>
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

        document.getElementById('team').innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });