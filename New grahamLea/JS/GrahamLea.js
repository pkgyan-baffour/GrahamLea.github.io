var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 0,
      //loop: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false,
      slidesPerView: 4,
      coverflow: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    });
    //# sourceURL=pen.js
  
  function myMap() {
        var myCenter = new google.maps.LatLng(53.7635897, -2.709766899999977);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
          center: myCenter,
          zoom: 5
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
          position: myCenter,
          animation: google.maps.Animation.BOUNCE
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
          content: "<strong>FIND US</strong><br>Graham Lea Architecture <br>63 Waterloo Road Preston<br> Lancashire."
        });
        infowindow.open(map, marker);
      }
      <script src="https://maps.googleapis.com/maps/api/js?key=&callback=myMap"></script>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
      var scrolled = 400;
      $(window).scroll(function() {
        if ($(window).scrollTop() > scrolled) {
          $('a.btt').fadeIn('slow');
        } else {
          $('a.btt').fadeOut('slow');
        }
      });
      $('a.btt').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 700);
        return false;
      });
    

      // When the DOM is ready, run this function
      $(document).ready(function() {
        //Set the carousel options
        $('#quote-carousel').carousel({
          pause: true,
          interval: 4000,
        });
      });
   // When the DOM is ready, run this function
      $(document).ready(function() {
        //Set the carousel options
        $('#quote-carousel').carousel({
          pause: true,
          interval: 4000,
        });
      });

      //gallery with filtering/
        var scrolled = 400;
  $(window).scroll(function() {
    if ($(window).scrollTop() > scrolled) {
      $('a.btt').fadeIn('slow');
    } else {
      $('a.btt').fadeOut('slow');
    }
  });
</script>

<script>
  $('a.btt').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
</script>
