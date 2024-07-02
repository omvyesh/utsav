let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
let commentIndex = 0;
showComments();

function showComments() {
    let i;
    let comments = document.getElementsByClassName("myComments");
    for (i = 0; i < comments.length; i++) {
        comments[i].style.display = "none";
    }
    commentIndex++;
    if (commentIndex > comments.length) {
        commentIndex = 1;
    }
    comments[commentIndex - 1].style.display = "block";
    setTimeout(showComments, 3000); // Change image every 3 seconds
}




        let currentIndex = 0;
        const images = document.querySelectorAll('.gallery img');

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }

        showImage(currentIndex);
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('mouseover', () => {
                    card.classList.add('hover');
                });
                
                card.addEventListener('mouseout', () => {
                    card.classList.remove('hover');
                });
            });
        });
        
      


      const courseBtn = document.getElementById('courses-btn');
const courses = document.querySelector('.courses');
courseBtn.addEventListener('click' , function() {
    
    courses.classList.toggle('hide');
    courseBtn.classList.toggle('show');
 
  
})
