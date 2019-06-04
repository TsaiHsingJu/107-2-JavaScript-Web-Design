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