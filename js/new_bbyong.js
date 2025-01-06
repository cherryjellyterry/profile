function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}
function getLineCount(element) {
    // 요소의 스타일을 가져오기 위해 getComputedStyle 사용
    const style = window.getComputedStyle(element);
    
    // 한 줄의 높이를 구합니다.
    const lineHeight = parseFloat(style.lineHeight);
    
    // 요소의 전체 높이를 가져옵니다.
    const elementHeight = element.clientHeight;
    
    // 요소 높이를 한 줄 높이로 나누어 현재 줄 수를 계산합니다.
    const lineCount = Math.ceil(elementHeight / lineHeight);
    
    return lineCount;
  }
  

function getContentByBr(element) {
    const style = window.getComputedStyle(element);
    const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const containerWidth = element.clientWidth;
  
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
  
    const lines = [];
    let currentLine = document.createElement('div'); // 새로운 줄을 위한 컨테이너
    lines.push(currentLine);
  
    // Helper 함수: 현재 줄의 너비 계산
    const calculateWidth = () => {
      const tempDiv = document.createElement('div');
      tempDiv.style.display = 'inline-block';
      tempDiv.style.visibility = 'hidden';
      tempDiv.appendChild(currentLine.cloneNode(true));
      document.body.appendChild(tempDiv);
      const width = tempDiv.getBoundingClientRect().width;
      tempDiv.remove();
      return width;
    };
  
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        const nodeClone = node.cloneNode(true); // 요소 또는 텍스트 노드 복사
  
        if (node.nodeType === Node.TEXT_NODE) {
          // 텍스트 노드 처리
          const words = node.textContent.split(/\s+/);
          words.forEach(word => {
            const testNode = document.createTextNode((currentLine.textContent ? ' ' : '') + word);
            currentLine.appendChild(testNode);
  
            if (calculateWidth() > containerWidth) {
              // 줄을 넘어가면 새 줄 생성
              currentLine.removeChild(testNode); // 마지막 단어 제거
              currentLine = document.createElement('div');
              currentLine.appendChild(document.createTextNode(word)); // 새로운 줄에 단어 추가
              lines.push(currentLine);
            }
          });
        } else {
          // 요소 노드 처리 (<b>, <strong> 등)
          currentLine.appendChild(nodeClone);
  
          if (calculateWidth() > containerWidth) {
            // 줄을 넘어가면 새 줄 생성
            currentLine.removeChild(nodeClone); // 마지막 요소 제거
            currentLine = document.createElement('div');
            currentLine.appendChild(nodeClone); // 새로운 줄에 요소 추가
            lines.push(currentLine);
          }
        }
  
        // <br> 태그 처리
        if (node.nodeName === 'BR') {
          currentLine = document.createElement('div');
          lines.push(currentLine);
        }
      }
    });
  
    // 최종 줄 텍스트 확인
    return lines.map(line => line.innerHTML);
}

function getContentByBrAndLineBreak(element) {
    const content = element.innerText; // 줄바꿈 포함 텍스트 가져오기
    const contentArray = content
      .split(/\r?\n/) // 줄바꿈 문자 (\n, \r\n)로 분리
      .map(line => line.trim()) // 각 줄에서 공백 제거
      .filter(line => line); // 빈 줄 제거
    return contentArray;
  }
  
  
  

function getFontStyles(element) {
  
    // 계산된 스타일 가져오기
    const computedStyle = window.getComputedStyle(element);
  
    // font-size와 line-height 값 가져오기
    let fontSize = computedStyle.fontSize;
    let lineHeight = computedStyle.lineHeight;
    let height = computedStyle.height
  
    // line-height가 'normal'일 경우 계산 (대략적으로 1.2 배율로 가정)
    if (lineHeight === 'normal') {
      const fontSizeValue = parseFloat(fontSize); // '16px' -> 16
      lineHeight = `${fontSizeValue * 1.2}px`; // 기본적으로 1.2 배율로 계산
    }
  
    return { fontSize, lineHeight, height };
}

document.addEventListener("DOMContentLoaded",function(){
    
    let tags = document.querySelectorAll(".bbyong")
    if(tags.length){
        tags.forEach(function(tag,index){
            let resultContent = ""
            let textarray = getContentByBr(tag)
            console.log(textarray)
            let originalStyles = getFontStyles(tag)

            let defaultStyles = {
                display:'inline-block',
                overflow:'hidden',
                maxHeight:originalStyles.lineHeight,
                boxSizing:'border-box',
                paddingTop:originalStyles.lineHeight
            }

            // let showStyles = {
            //     maxHeight:originalStyles.lineHeight
            // }

            for(let i=0 ; i<textarray.length ; i++){
                resultContent += `<span style="transition:all 1s ease ${0.1*i}s">${textarray[i]}</span>`
                if(i!==textarray.length-1){
                    resultContent += `<br>`
                }
            }
            tag.innerHTML = resultContent
            Array.from(tag.children).forEach(child => {
                Object.assign(child.style, defaultStyles)
            });
        })
    }

    tags.forEach(function(tag,index){
        let originalStyles = getFontStyles(tag)
        console.log(originalStyles)
        // tag.style.fontSize=0
        Array.from(tag.children).forEach(function (child, index) {
            // child.style.fontSize = originalStyles.fontSize // 원래 글씨 크기 적용
        });
    })

    // IntersectionObserver 설정
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 화면에 보일 때 span 태그 스타일 변경
                Array.from(entry.target.children).forEach(child => {
                    const computedStyle = getComputedStyle(child);
                    let lineHeight = computedStyle.lineHeight;
                    Object.assign(child.style, {
                         paddingTop:0,
                         maxHeight:lineHeight
                    });
                });
            } else {
                // 화면에서 사라질 때 기본 스타일로 되돌림
                Array.from(entry.target.children).forEach(child => {
                    const computedStyle = getComputedStyle(child);
                    let lineHeight = computedStyle.lineHeight;
    
                    // "normal"인 경우 계산
                    if (lineHeight === "normal") {
                        const fontSize = parseFloat(computedStyle.fontSize); // font-size 가져오기
                        const defaultLineHeightRatio = 1.2; // 일반적인 비율(조정 가능)
                        lineHeight = `${fontSize * defaultLineHeightRatio}px`;
                    }
    
                    Object.assign(child.style, {
                        paddingTop: lineHeight, // 계산된 line-height 적용
                    });
                });
            }
        })
    }, { threshold: 1 }) // 요소가 100% 화면에 보이면 트리거

    // 각 요소에 대해 observer 적용
    tags.forEach(element => {
       observer.observe(element);
    });


})
