    //header-사이드메뉴
    document.querySelector('.menu').addEventListener('click', function() {
        document.querySelector('nav').style.display = 'block'; 
        document.querySelector('nav').classList.add('show'); 
        document.querySelector('.dim').classList.add('show');
        document.querySelector('.menu').style.display = 'none'; 
        document.querySelector('.close-menu').style.display = 'block'; 
    });

    document.querySelector('.dim').addEventListener('click', function() {
        document.querySelector('nav').classList.remove('show');
        document.querySelector('.dim').classList.remove('show');
        document.querySelector('.menu').style.display = 'block'; 
        document.querySelector('.close-menu').style.display = 'none';
        document.querySelector('nav').style.display = 'none'; 
    });

    document.querySelector('.close-menu').addEventListener('click', function() {
        document.querySelector('nav').classList.remove('show');
        document.querySelector('.dim').classList.remove('show');
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.close-menu').style.display = 'none';
        document.querySelector('nav').style.display = 'none'; 
    });

    // 퍼블리싱 슬라이드
    const swiper = new Swiper('.swiper_publishing', {
        loop: true, 
        autoplay: {
            delay: 10000, 
            disableOnInteraction: false,
        },
        slidesPerView: 1, 
        spaceBetween: 0,
        speed: 3000, 
    });

    //home-intro,slogan 
    document.addEventListener('DOMContentLoaded', () => {
    const slogan = document.querySelector('.slogan');
    const intro = document.querySelector('.intro');

    // 10초 후에 실행
    setTimeout(() => {
        slogan.style.opacity = '0';

        setTimeout(() => {
            slogan.style.display = 'none'; 
            intro.style.display = 'block';
            intro.classList.add('on');
        }, 1000); 
    }, 3000);


    /* mouse-icon 상하 움직이기 */
    const movieElement = document.querySelector('#home .movie');
    let position = 5;
    const step = 0.05; 
    let direction = 1; 

    // 마우스 아이콘 애니메이션
    function animate() {
        position += step * direction;
        
        // 경계 설정
        if (position >= 10 || position <= 5) { 
            direction *= -1; 
        }

        // ::after의 위치 조정
        movieElement.style.setProperty('--mouse-bottom', `${position}%`);

        // 다음 애니메이션 프레임 요청
        requestAnimationFrame(animate); 
    }
    animate();


    // 포트폴리오 갤러리 코드
    const mainImage = document.querySelector(".portfolio_design img");
    const thumbImages = document.querySelectorAll(".design_thumbnails img");

    thumbImages.forEach((thumbImage) => {
        thumbImage.addEventListener("mouseover", (event) => {
            mainImage.src = event.target.src;
            mainImage.animate({ opacity: [0, 1] }, 500);
        });
    });

    const animateFade = (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); 
            }
        });
    };

    // portfolio_D li
    const fadeObserver = new IntersectionObserver(animateFade);
    const fadeElements = document.querySelectorAll('.fadeIn');
    fadeElements.forEach((fadeElement) => {
        fadeObserver.observe(fadeElement);
    });

    // 프로필-스킬 카드 뒤집기
    $(".card").on('click', function() {
        $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
        $(this).addClass("cardRotate").removeClass("backRotate");
    });


    // 모달 요소
    const modal = document.getElementById("popupModal");
    const modalImg = document.getElementById("popupImg");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // 이미지 클릭 시 모달 열기
    const images = document.querySelectorAll('.popup-trigger');
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block"; 
            modalImg.src = this.src; 
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; 
        }
    };

    
});

