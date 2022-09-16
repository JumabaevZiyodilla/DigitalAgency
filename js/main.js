// $(document).ready(function () {
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//             breakpoints: 300,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 3
//             }
//         }
//     ]
//     });
// });

$('.slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });