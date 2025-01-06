window.addEventListener("load",function(){
    animation1.goToAndStop(0, true);
    let terryfic = this.document.querySelector(".terryfic")
    let terryfic_open = this.document.querySelector(".terryfic_open")
    let terryfic_inside = this.document.querySelector(".terryfic_inside")
    let btn_close = this.document.querySelector(".btn_close")
    let btn_info_project = this.document.querySelector(".btn_info_project")
    let project_popup = this.document.querySelector(".project_popup")
    let popup_btn_close = this.document.querySelector(".popup_btn_close")
    let project_select_array = this.document.querySelectorAll(".train_project>ul>li")
    let project_array = [
        {
            idx : 0,
            top : `./img/top1.svg`,
            class : `johnsons`,
            img : `./img/johnsons_hero.jpg`,
            logo : `./img/johnsons_logo.svg`,
            title : '존슨즈베이비 리디자인 프로젝트',
            txt : `존슨즈베이비 웹사이트를 리디자인하여 사용자 경험을 개선하고 따뜻하고 가족 친화적인 디자인을 구현했습니다. 브랜드의 정체성을 유지하면서도 현대적이고 직관적인 UI를 설계했습니다.`,
            publish : `http://johnsonsbaby.dothome.co.kr/`,
            figma : `https://www.figma.com/proto/r9Aj1mOlZS1i23byCh6fYV/%EC%9D%B4%EB%A6%AC%EC%95%88-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&p=f&viewport=402%2C904%2C0.19&t=9FPdLOPbFIVF44aA-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=66%3A10&show-proto-sidebar=1`
        },
        {
            idx : 1,
            top : `./img/top2.svg`,
            class : `cafeakku`,
            img : `./img/akku_hero.jpg`,
            logo : `./img/akku_logo.svg`,
            title : '카페아쿠 프로젝트',
            txt : `Cafe Akku는 커피 원두 로스팅의 전문성과 고객 소통, 비즈니스 상담까지 아우르는 컨셉 카페 프로젝트입니다. 이 프로젝트는 페어링 플랜트, 프랜차이즈 FAQ, 온라인 비즈니스 상담 페이지 등 카페의 개성을 살린 다양한 웹페이지를 통해 독창적인 브랜드 스토리를 전달합니다.`,
            publish : `http://cafeakku.dothome.co.kr/`,
            figma : `https://www.figma.com/proto/HflkAlECjR4GVHKMEM5Fvm/Cafe-Akku?node-id=0-1&p=f&viewport=253%2C960%2C0.1&t=Yk5GkEB9pbYvgAFs-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=34%3A25&show-proto-sidebar=1`
        },
        {
            idx : 2,
            top : `./img/top3.svg`,
            class : `pawpaw`,
            img : `./img/paw_hero.jpg`,
            logo : `./img/paw_logo.svg`,
            title : '포포아카데미 프로젝트',
            txt : `포포아카데미는 강아지 훈련과 행동 교정을 전문으로 하는 가상의 브랜드로, 반려견과 보호자 간의 유대감을 강화하는 데 중점을 둔 서비스를 제공합니다. 반려동물 산업에 대한 이해와 창의적인 웹 디자인 기술을 결합한 작품입니다.`,
            publish : `https://cherryjellyterry.github.io/pawpawacademy/`,
            figma : `https://www.figma.com/proto/CX8FDjUUFKX5AecvUrfGov/%ED%8F%AC%ED%8F%AC%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8?node-id=0-1&p=f&viewport=541%2C399%2C0.08&t=zAMh5hdieUK94R96-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A317&show-proto-sidebar=1`
        }
    ]
    let project_detail_array = [
        {
            idx : 0,
            content : `
                <ul class="project_detail pc">
                    <li><img src="./image/portfolio/pc_baby_1.jpg" alt="존슨즈베이비1"></li>
                    <li><img src="./image/portfolio/pc_baby_2.jpg" alt="존슨즈베이비2"></li>
                    <li><img src="./image/portfolio/pc_baby_6.jpg" alt="존슨즈베이비6"></li>
                </ul>
                <ul class="project_detail mo">
                    <li><img src="./image/portfolio/mo_baby_1.jpg" alt="존슨즈베이비1"></li>
                    <li><img src="./image/portfolio/mo_baby_2.jpg" alt="존슨즈베이비2"></li>
                    <li><img src="./image/portfolio/mo_baby_6.jpg" alt="존슨즈베이비6"></li>
                </ul>
                <div class="popup_btn_close">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `
        },
        {
            idx:1,
            content : `
                <ul class="project_detail pc">
                    <li><img src="./image/portfolio/pc_cafe_1.jpg" alt="카페아쿠1"></li>
                    <li><img src="./image/portfolio/pc_cafe_2.jpg" alt="카페아쿠2"></li>
                    <li><img src="./image/portfolio/pc_cafe_4.jpg" alt="카페아쿠4"></li>
                </ul>
                <ul class="project_detail mo">
                    <li><img src="./image/portfolio/mo_cafe_1.jpg" alt="카페아쿠1"></li>
                    <li><img src="./image/portfolio/mo_cafe_2.jpg" alt="카페아쿠2"></li>
                    <li><img src="./image/portfolio/mo_cafe_4.jpg" alt="카페아쿠4"></li>
                </ul>
                <div class="popup_btn_close">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `
        },
        {
            idx:2,
            content:`
                <ul class="project_detail pc">
                    <li><img src="./image/portfolio/pc_paw_1.jpg" alt="포포아카데미1"></li>
                    <li><img src="./image/portfolio/pc_paw_2.jpg" alt="포포아카데미2"></li>
                    <li><img src="./image/portfolio/pc_paw_4.jpg" alt="포포아카데미4"></li>
                </ul>
                <ul class="project_detail mo">
                    <li><img src="./image/portfolio/mo_paw_1.jpg" alt="포포아카데미1"></li>
                    <li><img src="./image/portfolio/mo_paw_2.jpg" alt="포포아카데미2"></li>
                    <li><img src="./image/portfolio/mo_paw_4.jpg" alt="포포아카데미4"></li>
                </ul>
                <div class="popup_btn_close">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `
        }
    ]
    let terryfic_hero = this.document.querySelector(".terryfic_hero")


    terryfic.addEventListener("click",function(){
        terryfic_open.classList.add("on")
        animation1.play()
        animation1.addEventListener('complete',function(){
            terryfic_open.classList.remove("on")
            animation1.goToAndStop(0, true)
            terryfic_inside.classList.add("on")
        })
    })

    btn_close.addEventListener("click",function(){
        terryfic_inside.classList.remove("on")
    })

    btn_info_project.addEventListener("click",function(){
        project_popup.classList.add("on")
    })

    popup_btn_close.addEventListener("click",function(){
        project_popup.classList.remove("on")
    })

    project_select_array.forEach(function(project,idx){
        project.addEventListener("click",function(){
            
            swiper5.slideTo(idx)
            project_popup.innerHTML =`
                ${project_detail_array[idx].content}
            `
            btn_info_project = document.querySelector(".btn_info_project")
            btn_info_project.addEventListener("click",function(){
                project_popup.classList.add("on")
            })
        
            popup_btn_close = document.querySelector(".popup_btn_close");
            popup_btn_close.addEventListener("click", function () {
                project_popup.classList.remove("on");
            });


        })
    })

    let btn_info_project_all = this.document.querySelectorAll(".btn_info_project")

    btn_info_project_all.forEach(function(btn,idx){
        btn.addEventListener("click",function(){
            project_popup.innerHTML =`
                ${project_detail_array[idx].content}
            `
            project_popup.classList.add("on")

            let popup_btn_close_all = document.querySelectorAll(".popup_btn_close");
            popup_btn_close_all.forEach(function(btn){
                btn.addEventListener("click", function(){
                    project_popup.classList.remove("on");
                });
            })
        })
    })



    let popup_popup_array = [
        {
            idx:0,
            img:`./image/popups/blackfriday_popup_1-13.jpg`,
            title:`블랙프라이데이 팝업`,
            desc:`이 팝업은 블랙프라이데이 마케팅을 염두에 두고 디자인하였습니다.<br>
                소비자의 관심을 끌기 위해 픽셀 폰트를 활용하여 키워드를 사선으로 4개 배치하였습니다. 이를 통해 역동적이면서도 트렌디한 분위기를 연출했습니다.<br>                
                검정색 배경에 그리드 포인트를 더해 시각적 균형을 잡으면서도 세련된 느낌을 주었고, 버튼 디자인을 통해 사용자 참여를 유도하는 동시에 아직 블랙프라이데이 행사가 시작되지 않았음을 효과적으로 전달했습니다.`,
            typo1:`던파 비트비트체 v2`,
            typo2:`여기어때 잘난체 고딕 TTF`,
            color1:`<span class="thumbColor color_000000"></span>#000000`,
            color2:`<span class="thumbColor color_ff2c2d"></span>#ff2c2d`
        },
        {
            idx:1,
            img:`./image/popups/christmas_popup_1.jpg`,
            title:`크리스마스 팝업`,
            desc:`이 팝업은 크리스마스 이벤트를 위한 디자인으로, 따뜻하고 즐거운    분위기를 연출하는 데에 중점을 두었습니다.<br>                
            크리스마스의 대표적인 이미지를 시각적으로 강화함과 동시에 메시지를 통해 사용자의 참여를 유도하며, 이벤트 내용을 직관적으로 표현했습니다.`,
            typo1:`Pretendard`,
            typo2:`여기어때 잘난체 고딕 TTF`,
            color1:`<span class="thumbColor color_a32f2f"></span>#A32F2F`,
            color2:`<span class="thumbColor color_009245"></span>#009245`
        },
        {
            idx:2,
            img:`./image/popups/goodbye_summer_popup.jpg`,
            title:`여름 이벤트 팝업`,
            desc:`이 팝업은 여름 시즌을 겨냥한 대규모 프로모션을 시각적으로 강조하는 데에 중점을 두고 제작하였습니다.<br>                
            주요 혜택을 팝업 중앙에 크게 배치하여 이벤트의 규모와 혜택을 직관적으로 전달하면서 배경과 작은 일러스트를 통해 여름철 분위기를 살렸습니다.`,
            typo1:`던파 비트비트체 v2`,
            typo2:`여기어때 잘난체 고딕 TTF`,
            color1:`<span class="thumbColor color_1982ff"></span>#1982FF`,
            color2:`<span class="thumbColor color_fb0607"></span>#FB0607`
        },
        {
            idx:3,
            img:`./image/popups/halloween.jpg`,
            title:`할로윈데이 팝업`,
            desc:`이 팝업은 할로윈 시즌과 관련된 유쾌한 이벤트를 시각적으로 풀어낸 디자인입니다.<br>                
            대표적인 할로윈 상징물들을 귀여운 일러스트로 배치해 할로윈 분위기를 살리면서도 공포보다는 즐겁고 활기찬 느낌을 강조했습니다.<br>
            이 팝업은 사용자 참여를 유도하는 동시에 시각적 즐거움을 더하는 것이 목표이며, 할로윈 특유의 분위기와 이벤트 요소를 결합한 디자인입니다.`,
            typo1:`여기어때 잘난체 고딕 TTF`,
            typo2:`Naughts (BRK) Regular`,
            color1:`<span class="thumbColor color_420d3e"></span>#420d3e`,
            color2:`<span class="thumbColor color_f7931e"></span>#f7931e`
        },
        {
            idx:4,
            img:`./image/popups/chuseok_final.jpg`,
            title:`추석연휴 배송안내 팝업`,
            desc:`이 팝업은 추석 연휴 동안의 배송 일정을 사전에 공지하는 용도로 제작되었습니다.<br>                
            토끼들이 직접 떡을 찧고 송편을 만드는 귀여운 일러스트를 팝업 카드형태로 배치하여, 추석의 전통적인 이미지를 담아내면서도 소비자에게 한가위 카드를 보내는 듯한 분위기를 연출했습니다.`,
            typo1:`단조`,
            typo2:`Pretendard`,
            color1:`<span class="thumbColor color_e9bf2f"></span>#e9bf2f`,
            color2:`<span class="thumbColor color_a29d4b"></span>#a29d4b`
        },
        {
            idx:5,
            img:`./image/popups/nike_after_1.jpg`,
            title:`나이키 이벤트 팝업`,
            desc:`이 팝업은 ‘나에게 맞는 러닝화’를 찾는 나이키 이벤트를 안내하는 목적으로 디자인하였습니다.<br>                
            ‘Find your running partner’라는 큰 제목과 함께 대표적인 나이키 러닝화를 배치하여, 소비자의 궁금증을 유발하면서도 직관적인 정보 전달이 가능하도록 구성했습니다.<br>
            나이키의 브랜드 이미지와 연계하여, 깔끔하면서도 강렬한 비주얼을 통해 소비자의 관심을 끌고 참여를 촉진하는 데에 중점을 두었습니다.`,
            typo1:`Futura`,
            typo2:`Pretendard`,
            color1:`<span class="thumbColor color_bf54b1"></span>#bf54b1`,
            color2:`<span class="thumbColor color_bcadba"></span>#bcadba`
        },
        {
            idx:6,
            img:`./image/popups/valentine_6.jpg`,
            title:`발렌타인데이 팝업`,
            desc:`따뜻하고 로맨틱한 분위기를 연출한 발렌타인데이 이벤트 팝업입니다.<br>                
            부드러운 핑크와 레드톤을 사용하여 사랑스러운 느낌을 강조하였고, 하트모양요소와 링, 은은한 반짝임 요소를 통해 생동감을 더했습니다.`,
            typo1:`페이퍼로지`,
            typo2:`Rockwell`,
            color1:`<span class="thumbColor color_f7546c"></span>#f7546c`,
            color2:`<span class="thumbColor color_d6223c"></span>#d6223c`
        },
        {
            idx:7,
            img:`./image/popups/seasonoff_1.jpg`,
            title:`시즌오프 팝업`,
            desc:`어두운 배경과 대비되는 핑크리본이 팝업의 핵심요소로 사용되었으며, 리본 속 텍스트의 반복을 통해 시각적 리듬감을 주면서 이벤트 메시지를 강조하였습니다.<br>                
            이벤트 내용을 하단에 배치하여 혜택을 쉽게 인지할 수 있도록 구성하였으며, 중요한 키워드를 큰 사이즈로 구성하여 시선을 즉각적으로 끌어내도록 디자인하였습니다.`,
            typo1:`페이퍼로지`,
            typo2:``,
            color1:`<span class="thumbColor color_d667a9"></span>#d667a9`,
            color2:`<span class="thumbColor color_843062"></span>#843062`
        },
        {
            idx:8,
            img:`./image/popups/luckybox_1.jpg`,
            title:`럭키박스 이벤트 팝업`,
            desc:`즐겁고 통통튀는 분위기를 연출한 럭키박스 이벤트 팝업입니다.<br>                
            귀여운 일러스트 요소를 사용해 유쾌하고 가벼운 분위기를 조성하면서도 시각적으로 친근한 인상을 주도록 구성하였습니다.<br>
            직관적으로 배치된 버튼을 통해 이벤트 참여로 쉽게 이어지게끔 설계하였습니다.`,
            typo1:`Pretendard`,
            typo2:``,
            color1:`<span class="thumbColor color_5aa0f6"></span>#5aa0f6`,
            color2:`<span class="thumbColor color_b4ed6c"></span>#b4ed6c`
        }
    ]
    
    

    let train_500_popup_array = this.document.querySelectorAll(".train_500_popup>ul>li")
    let popup_popup = this.document.querySelector(".popup_popup")
    

    train_500_popup_array.forEach(function(popup ,idx){
        popup.addEventListener("click",function(){



            popup_popup.innerHTML =`
                <section class="img500">
                    <img src="${popup_popup_array[idx].img}" alt="${popup_popup_array[idx].title}">
                </section>
                <section class="popup_desc">
                    <div class="top_popup">
                        <h5 class="popup_title">${popup_popup_array[idx].title}</h5>
                        <p>${popup_popup_array[idx].desc}</p>
                    </div>
                    
                    <div class="bottom_popup">
                        <div class="typography">
                            <h5>TYPOGRAPHY</h5>
                            <p>${popup_popup_array[idx].typo1}</p>
                            <p>${popup_popup_array[idx].typo2}</p>
                        </div>
                        <div class="color">
                            <h5>COLOR</h5>
                            <p>${popup_popup_array[idx].color1}</p>
                            <p>${popup_popup_array[idx].color2}</p>
                        </div>
                    </div>
                </section>
                <div class="popup_btn_close_2">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `

            let popup_btn_close_2 = document.querySelector(".popup_btn_close_2")
            let popup_modal = document.querySelector(".popup_modal")

            popup_modal.classList.add("on")
            popup_popup.classList.add("on")

            popup_btn_close_2.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                popup_popup.classList.remove("on")
            })
            popup_modal.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                popup_popup.classList.remove("on")
            })

            var target = document.querySelector('.img500 > img');  // 이미지 선택
            var zoom = 1.5;           // zoom 값 가져오기
            var img500 = document.querySelector(".img500");        // img500 div 선택
            
            // magnifier div 생성
            var magnifier = document.createElement("div");
            magnifier.classList.add("magnifier"); // magnifier 클래스 추가
            img500.appendChild(magnifier);        // img500 div에 magnifier div 추가
            
            // magnifier의 배경 이미지 설정
            magnifier.style.position = 'absolute'; // magnifier의 위치를 절대값으로 설정
            magnifier.style.display = 'none'; // 기본적으로 숨김
            magnifier.style.width = '200px';  // 돋보기 크기 설정
            magnifier.style.height = '200px'; // 돋보기 크기 설정
            // magnifier.style.border = '2px solid #ccc'; // 경계선 추가 (선택 사항)
            magnifier.style.borderRadius = '50%'; // 원형 돋보기
            magnifier.style.cursor = 'none'; // 커서를 숨김
        
            // magnifier의 배경 이미지 크기 설정
            magnifier.style.backgroundImage = "url('" + target.src + "')";
            magnifier.style.backgroundSize = target.width * zoom + "px " + target.height * zoom + "px";
        
            
            // 마우스 이동 시 확대 효과
            img500.addEventListener('mousemove', magnify);
        
            function magnify(e) {
                var wrapRect = img500.getBoundingClientRect(); // wrap 영역의 위치와 크기
                var mouseX = e.pageX - wrapRect.left;         // 마우스 X 좌표
                var mouseY = e.pageY - wrapRect.top;          // 마우스 Y 좌표
                var sensor = 10
        
                // 마우스가 wrap 내에 있을 때만 돋보기를 표시
                if (mouseX < img500.offsetWidth - sensor && mouseY < img500.offsetHeight - sensor && mouseX > sensor && mouseY > sensor) {
                    magnifier.style.display = "block";  // 돋보기 표시
                } else {
                    magnifier.style.display = "none";  // wrap 밖으로 벗어나면 돋보기 숨기기
                }
        
                // 돋보기가 표시될 때
                if (magnifier.style.display === "block") {
                    // 배경 이미지의 위치 계산
                    var rx = -(mouseX * zoom - magnifier.offsetWidth / 2);
                    var ry = -(mouseY * zoom - magnifier.offsetHeight / 2);
        
                    // 돋보기를 마우스 위치로 이동
                    var px = mouseX - magnifier.offsetWidth / 2;
                    var py = mouseY - magnifier.offsetHeight / 2;
        
                    // 돋보기를 움직이고 배경 위치를 설정
                    magnifier.style.left = px + 'px';
                    magnifier.style.top = py + 'px';
                    magnifier.style.backgroundPosition = rx + 'px ' + ry + 'px';
                }
            }
            
                        
        })

    })


    let popup_700_popup = this.document.querySelector(".popup_700_popup")
    let popup_700_array = [
        {
            idx:0,
            img:`./image/popups/adidas_1_2.jpg`,
            title:`아디다스 팝업`,
            desc:`그레이톤의 구름 배경 위에 검은색 SUPERNOVA 운동화를 중앙에 배치하여 제품의 강렬한 존재감을 강조했습니다.<br>
            특히 배경에 아디다스의 상징적인 삼선 디자인을 운동화의 삼선과 자연스럽게 연결되도록 배치함으로써 브랜드 아이덴티티를 효과적으로 부각시켰습니다.`,
            typo1:`Alfa Slab One`,
            typo2:`페이퍼로지`,
            color1:`<span class="thumbColor color_747474"></span>#747474`,
            color2:`<span class="thumbColor color_0d0d0d"></span>#0d0d0d`
        },
        {
            idx:1,
            img:`./image/popups/adidas_2_2.jpg`,
            title:`아디다스 팝업`,
            desc:`세로로 배치된 각각 다른 색상의 슈퍼노바 운동화 3개가 컬렉션의 다양한 스타일을 제시했습니다.<br>
            그 위에 엇갈리게 배치된 슈퍼노바 모양 오브젝트에 침대 위를 나는 남자의 이미지를 담아내어 ‘꿈처럼 편안한 운동화’라는 슬로건을 감각적이고 직관적으로 전달했습니다.`,
            typo1:`Georgia`,
            typo2:`Pretendard`,
            color1:`<span class="thumbColor color_000000"></span>#000000`,
            color2:`<span class="thumbColor color_767676"></span>#767676`
        },
        {
            idx:2,
            img:`./image/popups/springsale_2.jpg`,
            title:`봄맞이 세일 팝업`,
            desc:`핑크와 옐로우 톤을 조화롭게 사용하여 봄의 따뜻함과 생동감을 표현한 봄맞이 세일 팝업입니다.<br>
            ‘SALE’ 타이포그래피를 세로로 3개 나열하여 메시지를 강조하였고, 가방과 화장품 등 세일 품목 이미지를 중간중간 배치하여 시각적 흥미와 홍보효과를 더했습니다.`,
            typo1:`Adelle`,
            typo2:`롯데리아 딱붙어체`,
            color1:`<span class="thumbColor color_ff59aa"></span>#ff59aa`,
            color2:`<span class="thumbColor color_fadc60"></span>#fadc60`
        },
        {
            idx:3,
            img:`./image/popups/seol_1.jpg`,
            title:`설날 팝업`,
            desc:`설날의 따뜻한 분위기를 담은 ‘행운의 복주머니’ 팝업입니다.<br>
            복주머니 위로 귀여운 토끼가 얼굴을 내밀며 귀여운 느낌을 더했습니다. 오렌지 톤의 배경은 따뜻하면서도 활기찬 느낌을 표현했고, 날아다니는 코인은 행운이 쏟아지는 듯한 시각적 효과를 연출하였습니다.<br>
            전체적인 텍스처 추가를 통해 입체감과 고급스러움을 더하며 전통적인 요소와 현대적인 디자인을 조화롭게 표현하였습니다.`,
            typo1:`여기어때 잘난체 2 TTF`,
            typo2:`Pretendard`,
            color1:`<span class="thumbColor color_d86435"></span>#d86435`,
            color2:`<span class="thumbColor color_5bb3e5"></span>#5bb3e5`
        },
        {
            idx:4,
            img:`./image/popups/blackfriday_popup_2.jpg`,
            title:`블랙프라이데이 팝업`,
            desc:`우주적인 요소와 입체적 배경감을 조합하여 신비로운 분위기를 연출하였습니다.<br>
            검은 배경에 그리드 패턴을 더해 입체감을 부여하고, 별을 통해  우주와 같은 신비로운 느낌을 표현했습니다. 행성을 연상시키는 원형 오브젝트 주위를 이벤트 내용과 관련된 문구가 위성처럼 감싸도록 디자인했습니다.`,
            typo1:`Pretendard`,
            typo2:``,
            color1:`<span class="thumbColor color_f15a22"></span>#f15a22`,
            color2:`<span class="thumbColor color_b5ffeb"></span>#b5ffeb`
        },
        {
            idx:5,
            img:`./image/popups/check_1.jpg`,
            title:`출석체크 이벤트 팝업`,
            desc:`트랙을 연상시키는 둥근 오브젝트를 세로로 배치하여 출석 체크의 진행과정을 시각적으로 표현했습니다.<br>
            하단에는 깃발을 배치하여 단계별 이벤트 참여를 강조하였고, 상단에는 도장 일러스트를 통해 이벤트의 핵심메시지를 전달하였습니다.<br>
            문구를 통해 꾸준히 참여하도록 유도하여 출석챌린지의 재미와 혜택을 강조한 이벤트 팝업입니다.`,
            typo1:`페이퍼로지`,
            typo2:``,
            color1:`<span class="thumbColor color_5cc1f7"></span>#5cc1f7`,
            color2:`<span class="thumbColor color_ff5555"></span>#ff5555`
        },
    ]

    let train_700_popup_array = this.document.querySelectorAll(".train_700_popup>ul>li")
    train_700_popup_array.forEach(function(popup ,idx){
        popup.addEventListener("click",function(){

            popup_700_popup.innerHTML =`
                <section class="img700">
                    <img src="${popup_700_array[idx].img}" alt="${popup_700_array[idx].title}">
                </section>
                <section class="popup_desc">
                    <div class="top_popup">
                        <h5 class="popup_title">${popup_700_array[idx].title}</h5>
                        <p>${popup_700_array[idx].desc}</p>
                    </div>
                    
                    <div class="bottom_popup">
                        <div class="typography">
                            <h5>TYPOGRAPHY</h5>
                            <p>${popup_700_array[idx].typo1}</p>
                            <p>${popup_700_array[idx].typo2}</p>
                        </div>
                        <div class="color">
                            <h5>COLOR</h5>
                            <p>${popup_700_array[idx].color1}</p>
                            <p>${popup_700_array[idx].color2}</p>
                        </div>
                    </div>
                </section>
                <div class="popup_btn_close_3">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `

            let popup_btn_close_3 = document.querySelector(".popup_btn_close_3")
            let popup_modal = document.querySelector(".popup_modal")

            popup_modal.classList.add("on")
            popup_700_popup.classList.add("on")

            popup_btn_close_3.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                popup_700_popup.classList.remove("on")
            })
            popup_modal.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                popup_700_popup.classList.remove("on")
            })

            var target = document.querySelector('.img700 > img');  // 이미지 선택
            var zoom = 1.5;           // zoom 값 가져오기
            var img700 = document.querySelector(".img700");        // img500 div 선택
            
            // magnifier div 생성
            var magnifier = document.createElement("div");
            magnifier.classList.add("magnifier"); // magnifier 클래스 추가
            img700.appendChild(magnifier);        // img500 div에 magnifier div 추가
            
            // magnifier의 배경 이미지 설정
            magnifier.style.position = 'absolute'; // magnifier의 위치를 절대값으로 설정
            magnifier.style.display = 'none'; // 기본적으로 숨김
            magnifier.style.width = '200px';  // 돋보기 크기 설정
            magnifier.style.height = '200px'; // 돋보기 크기 설정
            // magnifier.style.border = '2px solid #ccc'; // 경계선 추가 (선택 사항)
            magnifier.style.borderRadius = '50%'; // 원형 돋보기
            magnifier.style.cursor = 'none'; // 커서를 숨김
        
            // magnifier의 배경 이미지 크기 설정
            magnifier.style.backgroundImage = "url('" + target.src + "')";
            magnifier.style.backgroundSize = target.width * zoom + "px " + target.height * zoom + "px";
        
            
            // 마우스 이동 시 확대 효과
            img700.addEventListener('mousemove', magnify);
        
            function magnify(e) {
                var wrapRect = img700.getBoundingClientRect(); // wrap 영역의 위치와 크기
                var mouseX = e.pageX - wrapRect.left;         // 마우스 X 좌표
                var mouseY = e.pageY - wrapRect.top;          // 마우스 Y 좌표
                var sensor = 10
        
                // 마우스가 wrap 내에 있을 때만 돋보기를 표시
                if (mouseX < img700.offsetWidth - sensor && mouseY < img700.offsetHeight - sensor && mouseX > sensor && mouseY > sensor) {
                    magnifier.style.display = "block";  // 돋보기 표시
                } else {
                    magnifier.style.display = "none";  // wrap 밖으로 벗어나면 돋보기 숨기기
                }
        
                // 돋보기가 표시될 때
                if (magnifier.style.display === "block") {
                    // 배경 이미지의 위치 계산
                    var rx = -(mouseX * zoom - magnifier.offsetWidth / 2);
                    var ry = -(mouseY * zoom - magnifier.offsetHeight / 2);
        
                    // 돋보기를 마우스 위치로 이동
                    var px = mouseX - magnifier.offsetWidth / 2;
                    var py = mouseY - magnifier.offsetHeight / 2;
        
                    // 돋보기를 움직이고 배경 위치를 설정
                    magnifier.style.left = px + 'px';
                    magnifier.style.top = py + 'px';
                    magnifier.style.backgroundPosition = rx + 'px ' + ry + 'px';
                }
            }
        })

    })

    let banner_popup_array = [
        {
            idx:0,
            img:`./image/banners/blackfriday_1.jpg`,
            title:`블랙프라이데이 배너`,
            desc:`검은 배경에 "BLACK FRIDAY SALE"이라는 텍스트를 배치하여 강렬한 비주얼 효과를 주었으며, #BLACK SALE 이라는 큰 제목을 사용해 트렌디한 해시태그 스타일을 적용했습니다.<br>
            특히 "b"와 "l"의 일부를 숫자 11처럼 보이도록 색상 처리를 하여, 11월 29일 단 하루 진행되는 세일임을 강조했습니다.`,
            typo1:`Pretendard`,
            typo2:`Fino`,
            color1:`<span class="thumbColor color_9bff00"></span>#9bff00`,
            color2:`<span class="thumbColor color_000000"></span>#000000`
        },
        {
            idx:1,
            img:`./image/banners/blackfriday_2_6.jpg`,
            title:`블랙프라이데이 배너`,
            desc:`검은 배경 위에 “SALE”을 다양한 색깔로 배치하여 화려하면서도 세련된 느낌을 더했습니다.<br>
            중앙부를 어둡게 처리하고, BLACK FRIDAY라는 텍스트를 잘려나간 듯 어긋나게 배치함으로써 속도감과 움직임을 느낄 수 있게 디자인했습니다. 블랙프라이데이의 긴장감과 다이나믹한 분위기를 시각적으로 표현하였습니다.`,
            typo1:`Acumin Variable Concept`,
            typo2:``,
            color1:`<span class="thumbColor color_e70399"></span>#e70399`,
            color2:`<span class="thumbColor color_0dfffe"></span>#0dfffe`
        },
        {
            idx:2,
            img:`./image/banners/summer_2.jpg`,
            title:`여름 이벤트 배너`,
            desc:`여름을 맞아 특별한 혜택을 담은 썸머 이벤트 배너를 디자인했습니다.<br>
            여름의 시원한 느낌을 강조하면서 타이포그래피를 통해 활기차고 경쾌한 분위기를 연출했습니다. 기간과 혜택을 명시함을 통해 고객들의 시선을 끌고, 기대감을 높이도록 하였습니다.`,
            typo1:`Unlock Regular`,
            typo2:`Pretendard`,
            color1:`<span class="thumbColor color_1c5acf"></span>#1c5acf`,
            color2:`<span class="thumbColor color_b4d0e5"></span>#b4d0e5`
        },
        {
            idx:3,
            img:`./image/banners/nike_1.jpg`,
            title:`나이키 배너`,
            desc:`나이키 러닝화 이벤트에 대한 배너입니다. 중앙에 나이키 러닝화를 배치하고, Run이라는 글자를 사선으로 배치하여 특징을 강조했습니다.<br>
            상단에는 이벤트 내용을 간략히 기재하고, 하단에는 버튼을 배치해 참여를 유도하며 나이키의 역동적인 분위기와 브랜드 아이덴티티를 살리고자 하였습니다.`,
            typo1:`Acumin Variable Concept`,
            typo2:`페이퍼로지`,
            color1:`<span class="thumbColor color_f74f01"></span>#f74f01`,
            color2:`<span class="thumbColor color_f9b214"></span>#f9b214`
        },
        {
            idx:4,
            img:`./image/banners/dyson_1.jpg`,
            title:`다이슨 배너`,
            desc:`이 배너는 Dyson의 V15s Detect Submarine 청소기 모델을 강조한 디자인입니다. 배너 양쪽에는 제품 이미지가 배치되어 제품의 혁신적인 디자인을 부각하며, 중앙의 'A New Era Begins'라는 문구는 새로운 기술이 가져오는 청소의 변화를 상징합니다. 깔끔하면서도 강렬한 레이아웃을 통해 Dyson의 기술적 우수성과 차세대 청소기의 도래를 직관적으로 전달하였습니다. `,
            typo1:`Blinker`,
            typo2:`Dyson Sans Modern`,
            color1:`<span class="thumbColor color_551a8b"></span>#551a8b`,
            color2:`<span class="thumbColor color_0187f5"></span>#0187f5`
        },
        {
            idx:5,
            img:`./image/banners/nespresso_2.jpg`,
            title:`네스프레소 배너`,
            desc:`Nespresso Vertuo 모델에 대한 배너입니다. 상단에는 'Easy to Use'라는 문구를 넣어 누구나 쉽게 사용할 수 있는 직관적인 조작법을, 하단에는 'But Professional'을 배치해 전문적인 커피 맛을 즐길 수 있다는 메시지를 전달했습니다. 단순함과 전문성을 동시에 담아, 사용자의 편리함과 고품질의 커피 경험을 모두 제공하는 Vertuo의 매력을 시각적으로 강조하였습니다.`,
            typo1:`Blinker`,
            typo2:`Current`,
            color1:`<span class="thumbColor color_a5876b"></span>#a5876b`,
            color2:`<span class="thumbColor color_282828"></span>#282828`
        },
        {
            idx:6,
            img:`./image/banners/genesis_1.jpg`,
            title:`제네시스 배너`,
            desc:`이 배너는 제네시스 G90 차량을 강조한 디자인으로, 고급스러운 블랙 컬러의 차량이 배너의 중심을 차지하고 있습니다. 차량이 역동적으로 전진하는 느낌을 주는 배경과 함께 문구를 배치하여 고급스러운 차량의 느낌을 강조하였습니다.<br>
            제네시스 G90의 품격과 성능을 전달하며, 미래지향적이고 강렬한 이미지를 통해 차량의 존재감을 부각시켰습니다.`,
            typo1:`제네시스산스 Text OTF`,
            typo2:`Inter`,
            color1:`<span class="thumbColor color_28292d"></span>#28292d`,
            color2:`<span class="thumbColor color_000000"></span>#000000`
        },
        {
            idx:7,
            img:`./image/banners/cafe_banner_1_3.jpg`,
            title:`카페 바닐라라떼 배너`,
            desc:`이 배너는 라이트 바닐라 라떼를 강조한 카페 음료 프로모션 디자인입니다. 배경에는 구름이 펼쳐진 하늘이 배치되어 있어 음료의 상쾌하고 가벼운 느낌을 시각적으로 표현하고 있습니다. 배너의 왼쪽에는 "부드러운 바닐라 향이 어우러진 건강한 즐거움"이라는 문구가, 오른쪽에는 아이스 바닐라 라떼 이미지가 크게 배치되어 있어 음료의 신선함을 돋보이게 합니다. 또한 "당류 2.5g"이라는 표시가 들어가 있어 건강함과 저당량을 강조하며, 소비자들에게 가볍고 건강한 선택을 제안하는 메시지를 전달합니다. `,
            typo1:`여기어때 잘난체 고딕`,
            typo2:`자이언츠`,
            color1:`<span class="thumbColor color_004192"></span>#004192`,
            color2:`<span class="thumbColor color_fdf7d4"></span>#fdf7d4`
        },
        {
            idx:8,
            img:`./image/banners/cafe_banner_2_6.jpg`,
            title:`카페 샌드위치 배너`,
            desc:`이 배너는 치킨&샐러드 샌드위치를 주제로 한 프로모션 디자인입니다. 신선한 재료를 강조하기 위해 배경은 신선한 느낌의 녹색으로 구성되었으며, 상추, 토마토, 적양파 등 샌드위치에 사용된 재료들이 함께 배치되어 시각적으로 건강하고 풍성한 샌드위치임을 표현하고 있습니다. 중앙에는 'Daily Handmade'라는 문구와 함께 샌드위치 이미지가 크게 들어가, 갓 만든 신선한 샌드위치의 맛을 강조합니다. 밝은 노란색과 강렬한 녹색 텍스트가 조화롭게 어우러져 시선을 사로잡도록 하였습니다.`,
            typo1:`Alfa Slab One`,
            typo2:`BaskOldFace`,
            color1:`<span class="thumbColor color_137100"></span>#137100`,
            color2:`<span class="thumbColor color_ffd200"></span>#ffd200`
        },
        {
            idx:9,
            img:`./image/banners/cafe_banner_3_6.jpg`,
            title:`카페 딸기음료 배너`,
            desc:`각각의 음료에 쥬시한 딸기의 이미지를 합성해 신선함을 강조했으며, 특히 쿠키딸기프라페는 쿠키, 우유, 딸기가 부딪히면서 과즙이 튀는 듯한 배경을 넣어 음료의 특별함을 부각시켰습니다. 뒤에는 'Strawberry'라는 글자를 투명도를 줘서 반복 배치해 입체감을 더했고, 중앙 상단에는 붉은 색 글씨로 'BERRY SWEET'을 배치해 딸기 음료임을 명확히 알리고 있습니다.`,
            typo1:`Blinker`,
            typo2:`SUIT`,
            color1:`<span class="thumbColor color_ffe1e2"></span>#ffe1e2`,
            color2:`<span class="thumbColor color_c6000a"></span>#c6000a`
        },
    ]
    
    let train_banner_array = this.document.querySelectorAll(".train_banner>ul>li")
    let banner_popup = this.document.querySelector(".banner_popup")
    train_banner_array.forEach(function(popup ,idx){
        popup.addEventListener("click",function(){

            banner_popup.innerHTML =`
                <section class="banner_img">
                    <img src="${banner_popup_array[idx].img}" alt="${banner_popup_array[idx].title}">
                </section>
                <section class="popup_desc">
                    <div class="top_popup">
                        <h5 class="popup_title">${banner_popup_array[idx].title}</h5>
                        <p>${banner_popup_array[idx].desc}</p>
                    </div>
                    
                    <div class="bottom_popup">
                        <div class="typography">
                            <h5>TYPOGRAPHY</h5>
                            <p>${banner_popup_array[idx].typo1}</p>
                            <p>${banner_popup_array[idx].typo2}</p>
                        </div>
                        <div class="color">
                            <h5>COLOR</h5>
                            <p>${banner_popup_array[idx].color1}</p>
                            <p>${banner_popup_array[idx].color2}</p>
                        </div>
                    </div>
                </section>
                <div class="popup_btn_close_4">
                    <img src="./img/close_btn.svg" alt="닫기버튼">
                </div>
            `

            let popup_btn_close_4 = document.querySelector(".popup_btn_close_4")
            let popup_modal = document.querySelector(".popup_modal")

            popup_modal.classList.add("on")
            banner_popup.classList.add("on")

            popup_btn_close_4.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                banner_popup.classList.remove("on")
            })
            popup_modal.addEventListener("click",function(){
                popup_modal.classList.remove("on")
                banner_popup.classList.remove("on")
            })

            b()

            

        })

    })

    // window.addEventListener("popstate",function(){
    //     if(terryfic_inside.classList.contains("on")){
    //         terryfic_inside.classList.remove("on")
    //     }
    // })

    let popup_alert = this.document.querySelector(".popup_alert")
    let profile_page = this.document.querySelector(".profile_page")

    let popup_alert_array = [
        {
            content : `<h4>TERRYFIC</h4>
        <p>제 이름 Terry와 '훌륭한'을 뜻하는 Terrific을 결합한 제목으로, 넷플릭스 스타일의 프로필 페이지를 제작했습니다.</p>`,
        },
        {
            content : `<h4>안태리의 프로필페이지</h4>
            <p>저를 소개하는 프로필 페이지로, 일반적인 레이아웃을 통해 제 이야기를 담았습니다. <br>또한, 이력서와 제가 제작한 팝업, 배너 등을 pdf, psd와 ai 파일로 다운로드할 수 있는 기능도 제공합니다.</p>`
        }
    ]
    
    terryfic.addEventListener("mouseover",function(){
        popup_alert.innerHTML = `
            ${popup_alert_array[0].content}
        `
        popup_alert.classList.add("on")
    })
    terryfic.addEventListener("mouseout",function(){
        popup_alert.classList.remove("on")
    })

    profile_page.addEventListener("mouseover",function(){
        popup_alert.innerHTML = `
            ${popup_alert_array[1].content}
        `
        popup_alert.classList.add("on")
    })
    profile_page.addEventListener("mouseout",function(){
        popup_alert.classList.remove("on")
    })




})

function b(){
    var target = document.querySelector('.banner_img > img');  // 이미지 선택
    var zoom = 1.5;  // zoom 값 설정
    var banner_img = document.querySelector(".banner_img");  // banner_img div 선택

    // magnifier div 생성
    var magnifier = document.createElement("div");
    magnifier.classList.add("magnifier");  // magnifier 클래스 추가
    banner_img.appendChild(magnifier);     // banner_img div에 magnifier div 추가

    // magnifier의 스타일 설정
    magnifier.style.position = 'absolute';  // magnifier의 위치를 절대값으로 설정
    magnifier.style.display = 'none';  // 기본적으로 숨김
    magnifier.style.width = '200px';   // 돋보기 크기 설정
    magnifier.style.height = '200px';  // 돋보기 크기 설정
    magnifier.style.borderRadius = '50%';  // 원형 돋보기
    magnifier.style.cursor = 'none';  // 커서를 숨김

    // magnifier의 배경 이미지 크기 설정
    magnifier.style.backgroundImage = "url('" + target.src + "')";
    magnifier.style.backgroundSize = target.width * zoom + "px " + target.height * zoom + "px";

    // 마우스 이동 시 확대 효과
    banner_img.addEventListener('mousemove', magnify);

    function magnify(e) {
        var wrapRect = banner_img.getBoundingClientRect(); // banner_img 영역의 위치와 크기
        var mouseX = e.pageX - wrapRect.left;  // 마우스 X 좌표
        var mouseY = e.pageY - wrapRect.top;   // 마우스 Y 좌표
        var sensor = 10
        // 마우스가 banner_img 내에 있을 때만 돋보기를 표시
        if (mouseX <= banner_img.offsetWidth - sensor && mouseY <= banner_img.offsetHeight - sensor && mouseX >= sensor && mouseY >= sensor) {
            console.log(mouseY,banner_img.offsetHeight)
            magnifier.style.display = "block";  // 돋보기 표시
        } else {
            magnifier.style.display = "none";  // 마우스가 영역 밖으로 나가면 돋보기를 숨김
        }

        // 돋보기가 표시될 때
        if (magnifier.style.display === "block") {
            // 배경 이미지의 위치 계산
            var rx = -(mouseX * zoom - magnifier.offsetWidth / 2);
            var ry = -(mouseY * zoom - magnifier.offsetHeight / 2);

            // 돋보기를 마우스 위치로 이동
            var px = mouseX - magnifier.offsetWidth / 2;
            var py = mouseY - magnifier.offsetHeight / 2;

            // 돋보기를 이동하고 배경 위치 설정
            magnifier.style.left = px + 'px';
            magnifier.style.top = py + 'px';
            magnifier.style.backgroundPosition = rx + 'px ' + ry + 'px';
        }
    }
}

