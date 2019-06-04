fetch('./js/testimonials.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let output = `
        <section id="testimonials" class="section-bg wow fadeInUp">
        <div class="container">

            <header class="section-header">
                <h3>Testimonials</h3>
            </header>

            <div class="owl-carousel testimonials-carousel">
            `;

        data.forEach(function (p) {
            output += `
            <div class="testimonial-item">
            <img src="img/testimonial-1.jpg" class="testimonial-img" alt="">
            <h3>${p.name}</h3>
            <h4>${p.category}</h4>
            <p>
              <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
            </p>
          </div>
                `;
        });
        output +=`
                </div>

             </div>
        `;

        document.getElementById('testimonials').innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });