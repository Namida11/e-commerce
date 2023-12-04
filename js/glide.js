const products_list1=document.querySelector("#product-list1");
const products_list2=document.querySelector("#product-list2");

 export function product1(){
    const config={
        startAt:0,
        perView:4,
        gap:20,
        bound:true,
        autoplay:3000,
        breakpoints:{
            992:{
                perView:3,
            },
            768:{
                perView:2,
            },
            576:{
                perView:1
            }

        }
    }

    products_list1 && new Glide('.product-carousel1',config).mount()
 }

export function  product2(){
 const config2={
    startAt:0,
    perView:4,
    gap:20,
    bound:true,
    autoplay:3000,
    breakpoints:{
        992:{
            perView:3,
        },
        768:{
            perView:2,
        },
        576:{
            perView:1
        }

    }
}
 products_list2 && new Glide('.product-carousel2',config2).mount()
}

//  const config3={
//     startAt:0,
//     perView:4,
//     gap:20,
//     bound:true,
//     autoplay:3000,
//     breakpoints:{
//         992:{
//             perView:3,
//         },
//         768:{
//             perView:2,
//         },
//         576:{
//             perView:1
//         }

//     }
//  }
// new Glide('.product-thumb',config3).mount()

 export function singleProduct(){
  var sliders = document.querySelectorAll('.product-thumb');

  for (var i = 0; i < sliders.length; i++) {
    var hello = new Glide(sliders[i], {
  perView: 5,
    breakpoints: {
      992: {
        perView: 4,
      },
    },
    });

    hello.mount()
  }
}


