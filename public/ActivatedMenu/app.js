const eventNames = {
    click: 'click',
    dOMContentLoaded: 'DOMContentLoaded'
}
const ROOT_ID = 'sideNav';
const ACTIVE_CLASS = 'active';
const STORAGE_CONFIGS = {
    storageName: 'activate-menu',
    index: 0,
    visitedLinks: [],
    storageMode: 1,
    storageInfoes: {},
    text: '',
    tagName: ''
}
function OpenMenu() {

}

function anchorsWithHashEventHandler(anchorsWithHash = []) {
    anchorsWithHash.forEach(function (_, i) {
        _.anchor.addEventListener(eventNames.click, function (e) {
            const s = STORAGE_CONFIGS;
            let nextElem = _.anchor.nextElementSibling;
            let tagName = nextElem.tagName.trim().toLowerCase();
            if (nextElem && tagName === 'ul') {
                nextElem.classList.add('active');
                s.index = i;
                s.text = _.text;
                s.tagName = tagName;
                if(s.storageMode === 1){
                    localStorage.setItem(s.storageName, JSON.stringify(s));
                }else{
                    sessionStorage.setItem(s.storageName, JSON.stringify(s));
                }
            }
        })
    });
}

function getActivateMenuCreds() {
    const anchors = document.querySelectorAll('#sideNav li a');
    let anchorsWithHash = [];
    anchors.forEach(anchor => {
        let hrefAttr = anchor.getAttribute('href');
        let is1 = (anchor.hasAttribute('href') && hrefAttr === '#');
        if (is1) {
            anchorsWithHash.push({ anchor, text: anchor.textContent.trim().toLowerCase() });
        }
    });

    return {
        anchorsWithHash
    };
}

document.addEventListener(eventNames.dOMContentLoaded, function () {
    const creds = getActivateMenuCreds();
    let anchorsWithHash = creds.anchorsWithHash;
    setTimeout(() => {
        if (anchorsWithHash.length > 0) {
            anchorsWithHashEventHandler(anchorsWithHash);
        }
        activateMenuHandler();
    }, 1000);
});

function activateMenuHandler(){
    const s = STORAGE_CONFIGS;
    let infoes = null;
    if(s.storageMode === 1){
        infoes = JSON.parse(localStorage.getItem(s.storageName));
        if(infoes){
            const anchors = document.querySelectorAll('#sideNav li a');
            anchors.forEach(anchor => {
                let hrefAttr = anchor.getAttribute('href');
                let textContent = anchor.textContent.trim().toLowerCase();
                let is1 = (anchor.hasAttribute('href') && hrefAttr === '#' && textContent === infoes.text);
                if(is1){
                    let nextElem = anchor.nextElementSibling;
                    let prevElem = anchor.parentElement;
                    if (prevElem) {
                        let pp = prevElem.parentElement;
                        if (pp) {
                            let t = getTagLower(pp);
                            if (!(pp.getAttribute('id') === ROOT_ID)){
                                addActiveClass(pp);
                            }
                        }
                    }
                    if (nextElem) {
                        nextElem.classList.add('active');
                        let t = getTagLower(nextElem);
                        console.log(nextElem);
                        console.log(t);
                        // console.log();
                        getParent(getParent(nextElem)).classList.add(ACTIVE_CLASS)
                        getParent(getParent(getParent(getParent(nextElem)))).classList.add(ACTIVE_CLASS);
                        console.log(
                            getTagLower(
                                getParent(
                                    getParent(
                                        getParent(
                                            getParent(
                                                getParent(
                                                    getParent(
                                                        getParent(nextElem)
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    }
                }
            });
        }
    }
}

function getTagLower(x) {
    return x.tagName.toLocaleLowerCase();
}
function getParent(parent) {
    return parent.parentElement
}

function addActiveClass(x) {
    x.classList.add(ACTIVE_CLASS)
}
