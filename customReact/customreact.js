function customRender(reactEle, mainCont){
    const aTag = document.createElement(reactEle.type)
    aTag.textContent = reactEle.children
    for(let prop in reactEle.props){
        if(prop === 'children') continue;
        aTag.setAttribute(prop, reactEle.props[prop])
    }
    mainCont.appendChild(aTag)
}

const reactEle = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : "Click Me to visit Google"
}

const mainCont = document.getElementById("root");

customRender(reactEle , mainCont)

