function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

function calculateLineCountForSpans(child) {
    const computedStyle = window.getComputedStyle(child);
    const lineHeight = parseFloat(computedStyle.lineHeight);  // line-height 값을 얻기
    const rect = child.getBoundingClientRect();  // 요소의 크기 및 위치를 가져오기

    // 요소의 전체 높이 계산
    const height = rect.height;  

    // 줄 수를 계산 (전체 높이를 line-height로 나누기)
    const lineCount = Math.round(height / lineHeight);
    return lineCount;
}


function getContentByBr(element) {
    const contentArray = element.innerHTML
      .split(/<br\s*\/?>/i)
      .map(item => item.trim())
      .filter(item => item)
    return contentArray;
}

function getFontStyles(element) {
  
    // 계산된 스타일 가져오기
    const computedStyle = window.getComputedStyle(element);
  
    // font-size와 line-height 값 가져오기
    let fontSize = computedStyle.fontSize;
    let lineHeight = computedStyle.lineHeight;
  
    // line-height가 'normal'일 경우 계산 (대략적으로 1.2 배율로 가정)
    if (lineHeight === 'normal') {
      const fontSizeValue = parseFloat(fontSize); // '16px' -> 16
      lineHeight = `${fontSizeValue * 1.2}px`; // 기본적으로 1.2 배율로 계산
    }
  
    return { fontSize, lineHeight };
}
document.addEventListener("DOMContentLoaded", function () {
    let tags = document.querySelectorAll(".bbyong");
    if (tags.length) {
        tags.forEach(function (tag, index) {
            let resultContent = "";
            let textarray = getContentByBr(tag);
            let originalStyles = getFontStyles(tag);

            for (let i = 0; i < textarray.length; i++) {
                resultContent += `<span style="display: inline-block; transition:all 1s ease ${0.1 * i}s">${textarray[i]}</span>`;
                if (i !== textarray.length - 1) {
                    resultContent += `<br>`;
                }
            }
            tag.innerHTML = resultContent;
            let tag_spans = tag.querySelectorAll('span');

            tag_spans.forEach(function (tag_span) {
                let lineCount = calculateLineCountForSpans(tag_span);
                let lineHeight = parseFloat(originalStyles.lineHeight);
                let paddingTop = lineCount * lineHeight;

                // console.log(`Span content: "${tag_span.textContent}"`);
                // console.log(`Line Count: ${lineCount}`);
                // console.log(`Padding Top: ${paddingTop}px`);

                let defaultStyles = {
                    display: 'inline-block',
                    overflow: 'hidden',
                    height: `${paddingTop}px`,
                    boxSizing: 'border-box',
                    paddingTop: `${paddingTop}px`
                };

                // 개별 span 태그에 스타일 적용
                Object.assign(tag_span.style, defaultStyles);
            });
        });
    }



tags.forEach(function(tag,index){
    let originalStyles = getFontStyles(tag)
    // console.log(originalStyles)
    tag.style.fontSize=0
    Array.from(tag.children).forEach(function (child, index) {
        child.style.fontSize = originalStyles.fontSize // 원래 글씨 크기 적용
    });
})

// IntersectionObserver 설정
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 요소가 화면에 보일 때 span 태그 스타일 변경
            Array.from(entry.target.children).forEach(child => {
                Object.assign(child.style, {
                     paddingTop:0,
                });
            });
        } else {
            // 화면에서 사라질 때 기본 스타일로 되돌림
            Array.from(entry.target.children).forEach(child => {
                const computedStyle = getComputedStyle(child);

                let lineCount = calculateLineCountForSpans(child);
                let lineHeight =  parseFloat(computedStyle.lineHeight)
                let paddingTop = lineCount*lineHeight

                // console.log(lineCount)
                // console.log(paddingTop)


                Object.assign(child.style, {
                    paddingTop: `${paddingTop}px` , // 계산된 line-height 적용
                });
            });
        }
    })
}, { threshold: 1 }) // 요소가 100% 화면에 보이면 트리거

// 각 요소에 대해 observer 적용
tags.forEach(element => {
   observer.observe(element);
});

});

let initialWidth = window.innerWidth; // 초기 화면 너비 저장
let resizeTimer;

window.addEventListener("resize", function () {
    clearTimeout(resizeTimer); // 이전 타이머를 초기화
    resizeTimer = setTimeout(function () {
        if (window.innerWidth !== initialWidth) {
            location.reload(); // 화면 크기가 변경되었을 때 새로고침
        }
    }, 300); // 300ms 동안 리사이즈 이벤트가 없으면 새로고침 실행
});
