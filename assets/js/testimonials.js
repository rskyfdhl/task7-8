let rating = []

const ratingStars = [...document.getElementsByClassName("rating__star")]
const testimonialData = [{
        author: "Dhanu",
        quote: "Keren banget jasanya!",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 5
    },
    {
        author: "Sukijan",
        quote: "Tidak Memuaskan",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 1
    },
    {
        author: "Nani",
        quote: "Omae wa moshinderu..",
        image: "https://img.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg?w=996&t=st=1677853400~exp=1677854000~hmac=d3a6f96f708b03c2183e4ec80116df4d43cebd4b9bc9032169340a72aa4ce6e6",
        rating: 3
    },
    {
        author: "Ekono",
        quote: "keren dan keren biasa lah",
        image: "https://img.freepik.com/free-photo/smiling-businessman-standing-with-arms-folded-isolated-white_231208-13007.jpg?w=996&t=st=1677853314~exp=1677853914~hmac=991a2bd2f6163cc90abd28bf80d64fef6a4c987c8e2948fcf40446c123999e78",
        rating: 4
    },
    {
        author: "Mi",
        quote: "Good Jobs Men!",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1677853168~exp=1677853768~hmac=aeafb56cbbd48f24d3526d875150ecc81d7e276ae28451ae19bfa780fea08868",
        rating: 4
    }
]

function filterTestimonials(rating) {
    let testimonialHTML = '';
    // console.log(!!1)
    let testimonialFiltered = testimonialData //nilai default
    if (rating) //jika pemanggilan fungsi filter testimoninal menggunakan rating
        testimonialFiltered = testimonialData.filter((item) => { //ubah nilai testimonial filtered dengan data ratingnya sama
            return item.rating === rating
        })
    //ternary operator
    // const testimonialFiltered = rating ? testimonialData.filter((item) => {
    //     return item.rating === rating
    // }) : testimonialData

    if (!rating) {
        ratingStars.map((item) =>
            item.classList = "rating__star far fa-star"
        )
    }
    if (!testimonialFiltered.length) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            // `template literal`
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-sharp fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length
    let i
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star)
            console.log(i);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i)
                    if (!!stars[i + 1]) stars[i + 1].className = starClassInactive;
            }
            filterTestimonials(stars.indexOf(star) + 1)
        }
    })
}
executeRating(ratingStars);
filterTestimonials()




// // function allTestimonials() {
// //     let testimonialHTML = '';
// //     const starClassInactive = "rating__star far fa-star";
// //     ratingStars.map((item) => {
// //         item.classList = starClassInactive
// //     })
//     testimonialData.forEach((item) => {
//         testimonialHTML += `<div class="testimonial">
//                      <img src="${item.image}" class="profile-testimonial" />
//                      <p class="quote">"${item.quote}"</p>
//                      <p class="author">- ${item.author}</p>
//                      <p class="author">${item.rating} <i class="fa-sharp fa-solid fa-star"></i></p>
//                  </div>`
//     })

//     document.getElementById('testimonials').innerHTML = testimonialHTML;
// }

filterTestimonials()



function toggleShowNav() {
    const navSm = document.getElementById("nav-sm")

    if ([...navSm.classList].includes("d-none")) {
        document.getElementById("toggleShowNavBar").classList = "fas fa-close"
        navSm.classList = "transition d-none"
        setTimeout(() => navSm.classList = "d-show transition", 300)
    } else {
        document.getElementById("toggleShowNavBar").classList = "fa fa-bars"
        let classes = ["d-none", "transition"]
        navSm.classList = classes.join(' ')
        classes.push('hide')
        setTimeout(() => navSm.classList = classes.join(' '), 300)
    }
}