window.addEventListener("load",function(){
    document.querySelector(".btnMoGnb").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.add("on")
        return false
    })
    document.querySelector(".btnClose").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.remove("on")
    })

    let moGnba = document.querySelectorAll(".moGnb a")
    for(let i=0 ; i<moGnba.length ; i++){
        moGnba[i].addEventListener("click",function(){
            document.querySelector("nav.mo").classList.remove("on")
        })
    }


    // 배너슬라이드 기능
    // let btn_pagi = document.querySelectorAll(".pagination>span")
    // let banner_train = document.querySelector(".train")

    // function moveTrain(count){
    //     banner_train.style.transform = `translateX(${(100/btn_pagi.length)*-1* count}%)`
    // }

    // function pagination(count){
    //     btn_pagi.forEach(function(btn){
    //         btn.classList.remove("on")
    //     })
    //     btn_pagi[count].classList.add("on")
    // }

    // btn_pagi.forEach(function(btnpagi,index){
    //     btnpagi.addEventListener("click", function(){
    //         moveTrain(index)
    //         pagination(index)
    //     })
    // })

    var swiper = new Swiper(".slideStation", {
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed : 1000,
        autoHeight: true,
    });

    let pc_header_btn = this.document.querySelector("#pc_header_btn")
    pc_header_btn.addEventListener("mouseenter",function(){
        pc_header_btn.innerHTML=`<a class="pc_header_btn_resume" href="./psd/새싹처럼 발전하는 웹퍼블리셔 안태리입니다.pdf"><img src="./image/resume.png" alt="이력서다운로드"></a>`
    })
    pc_header_btn.addEventListener("mouseleave",function(){
        pc_header_btn.innerHTML=`<img src="./image/gnb_logo.png" alt="지앤비로고">`
    })
    

    // IntersectionObserver 설정
    const swiperSection = document.querySelector('.con5'); // swiper가 있는 섹션

    // IntersectionObserver 생성
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // 섹션이 뷰포트에 보이면 autoplay 시작
        swiper.autoplay.start();
        } else {
        // 섹션이 뷰포트에서 벗어나면 autoplay 멈추기
        swiper.autoplay.stop();
        }
    });
    }, { threshold: 0.5 }); // 섹션의 50%가 보일 때 감지

    // 감지할 요소 설정
    observer.observe(swiperSection);

    const content = "Terry An \n Web Designer & Publisher";
    const text = document.querySelector(".text");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)


})
   
