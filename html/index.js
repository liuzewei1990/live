$(document).ready(function () {
    var stars = 800;
    var $stars = $(".stars");
    var r = 800;
    for (var i = 0; i < stars; i++) {
        var $star = $("<div />").addClass("star");
        $stars.append($star);
    }
    $(".star").each(function () {
        var cur = $(this);
        var s = 0.2 + (Math.random() * 1);
        var curR = r + (Math.random() * 300);
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"
        })
    })
})

function numberRandom(max, min) {
    var num = (Math.random() * (max - min) + min).toFixed(2)
    return num;
}


function addUserKMD(textValue) {

    let left = document.createElement('div');
    left.className = 'kmdleft';

    let right = document.createElement('div');
    right.className = 'kmdright';

    let bottom = document.createElement('div');
    bottom.className = 'kmdbottom';

    let line = document.createElement('div');
    line.className = 'kmdline';

    let text = document.createElement('div');
    text.className = 'kmdtext';
    text.innerHTML = textValue;

    let kongMing = document.createElement('div');

    kongMing.className = 'kongmingdeng';
    kongMing.style =
        'width:' + numberRandom() + '%;' +
        'left:' + numberRandom(90, 10) + 'vw;' +
        'bottom:' + numberRandom(-4, -15) + 'vw;' +
        // 'transform: scale('+numberRandom(20,5)+');'
        'animation: FlyFour ' + numberRandom(50, 15) + 's linear;' +
        'animation-delay:' + numberRandom(1, 1) + 's;';

    kongMing.appendChild(left);
    kongMing.appendChild(right);
    kongMing.appendChild(bottom);
    kongMing.appendChild(line);
    kongMing.appendChild(text);
    document.getElementById('kmd').appendChild(kongMing);
    kongMing.addEventListener('animationend', function () {
        this.remove();
    });
}

$(function () {
    const ws = new WebSocket('ws://' + location.host);
    ws.onmessage = function (event) {
        try {
            
            console.log("🚀 ~ event:", event);
            let data = JSON.parse(event.data);
            if (data.comment) {
                addUserKMD(data.comment);
                // addUserKMD(data.comment?.replace(/[^\u4e00-\u9fa5\d]/g, '')?.slice(0, 10));
            }
        } catch (error) {

        }

    };
    for (let index = 0; index < 12; index++) {
        // addUserKMD()
    }
})

$(function () {
    function numberRandom(max, min) {
        var num = (Math.random() * (max - min) + min).toFixed(2)
        return num;
    }


    for (let index1 = 0; index1 < 25; index1++) {
        let left1 = document.createElement('div');
        left1.className = 'kmdleft';

        let right1 = document.createElement('div');
        right1.className = 'kmdright';

        let bottom1 = document.createElement('div');
        bottom1.className = 'kmdbottom';

        let kongMing1 = document.createElement('div');
        kongMing1.className = 'kongmingdeng-little';

        kongMing1.style =
            'left:' + numberRandom(150, 0) + 'vw;' +
            'bottom:' + numberRandom(-40, -105) + 'vw;' +
            'zoom:' + numberRandom(2, 0.5) + ";" +
            'animation: FlyThree ' + numberRandom(50, 15) + 's linear infinite;' +
            'animation-delay:' + numberRandom(15, 1) + 's;';

        kongMing1.appendChild(left1);
        kongMing1.appendChild(right1);
        kongMing1.appendChild(bottom1);
        document.getElementById('kmd').appendChild(kongMing1);
    }
})