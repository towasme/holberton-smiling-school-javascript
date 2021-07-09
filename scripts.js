function createQuotes(pic_url, name, title, text){
  $('body').append(`
    <!--Inner-->
    <div class="carousel-inner slide">
      <div class="carousel-item active d-flex justify-content-center">
        <div class="row pl-3 pr-3 justify-content-center">
          <div class="col-lg-1 col-md-1 col-sm-1"></div>
          <div class="col-lg-4 col-md-4 col-sm-6 align-self-center">
            <img
              src="${pic_url}"
              class="imag rounded-circle"
              width="60%"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <p class="text-white">${text}</p>
            <div class="w-100"></div>
            <p class="text-white font-weight-bold">${name}</p>
            <div class="w-100"></div>
            <p class="text-white font-italic">${title}</p>
          </div>
        </div>
      </div>
    </div>`);
};

function callQuotes() {
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    success: function(data){
      data.forEach(({id, pic_url, name, title, text}) => {
        createQueotes(id, pic_url, name, title, text)
      });
    },
    error: function(error){console.log(error)}
  })

  //$('#load').hide();
};

function createTutorials(id, title, sub_title, thumb_url, author, author_pic_url, star, duration){};

function callTutorials(){
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    success: function(data){
      createTutorials();
    },
    error: function(error){console.log(error)}
  })
};

function createVideos(id, title, sub_title, thumb_url, author, author_pic_url, star, duration){};

function callVideos(){
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/latest-videos',
    success: function(id, title, sub_title, thumb_url, author, author_pic_url, star, duration){},
    error: function(error){console.log(error)}
  });
};

function pricingQuotes(pic_url, name, title, text){
  $('body').append(`
    <!--Inner-->
    <div class="carousel-inner slide">
      <div class="carousel-item active d-flex justify-content-center">
        <div class="row pl-3 pr-3 justify-content-center">
          <div class="col-lg-1 col-md-1 col-sm-1"></div>
          <div class="col-lg-4 col-md-4 col-sm-6 align-self-center">
            <img src="${pic_url}" class="imag rounded-circle" width="60%"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <p class="text-white">${text}</p>
            <div class="w-100"></div>
            <p class="text-white font-weight-bold">${name}</p>
            <div class="w-100"></div>
            <p class="text-white font-italic">${title}</p>
          </div>
        </div>
      </div>
    </div>
  `);
}

function callPricing(){
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    success: function(data){
      data.forEach(({pic_url, name, title, text}) => {
        createQueotes(id, pic_url, name, title, text)
      });
    },
    error: function(error){console.log(error)}
  })

  //$('#load').hide();
};

function courses(){};

function callCourses(){
  $.get('https://smileschool-api.hbtn.info/courses', function(q, topic, sort){})
};

callQuotes();
callTutorials();
callPricing();
callCourses();
