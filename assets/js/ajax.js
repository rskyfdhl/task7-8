const testimonialPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '', true)

    xhr.onload = function () {
        // 200: ok
        if (xhr.status === = 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject.('Error Loading data!')
        }

    }
    xhr.onerror = function () {
        reject('Network Error')
    }
    xhr.send()
})

async function getTesmonialsData() {
    const testimonial = await.testimonialPromise
    console.log(testimonial)
}

// getTesmonialsData()



async function getFilteredTestimonials(rating) {
    const responseFilter = await testimonialPromise

    let testimonialHTML = '';

    const testimonialFiltered = responseFilter.filter((item) => {
        return item.rating === rating
    })
    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-regular fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}
get