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


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tmps = [
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满阳光和快乐！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的笑容永远灿烂如初！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您健康快乐，幸福美满！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满温馨和幸福！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您一切顺利，事事如意！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满正能量！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您心想事成，梦想成真！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满美好的惊喜！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满快乐和笑声！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您生活美满，幸福永远！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您健康长寿，幸福永远！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满希望和信心！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您一切顺利，心想事成！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满美好的惊喜和喜悦！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满阳光和笑容！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您生活幸福美满，快乐无限！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满爱和温馨！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满阳光和温暖！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一个愿望都能实现！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您心想事成，万事如意！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满希望和幸福！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满美好的惊喜和温馨！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您幸福安康，事业蒸蒸日上！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满阳光和笑声！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一个愿望都能如愿以偿！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您心想事成，万事顺心！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满爱和温暖！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您健康快乐，幸福永远！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的每一天都充满希望和喜悦！",
    "感谢【USERNAME】点亮了一颗小爱心，愿您的生活充满美好的惊喜和幸福！",
    "感谢【USERNAME】点亮了一颗小爱心，祝您幸福安康，事业有成！"
]

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
        'bottom:' + numberRandom(-20, -50) + 'vw;' +
        'transform: scale(' + numberRandom(1.5,0.5)+');' +
        'animation: FlyFour ' + numberRandom(50, 15) + 's linear infinite;' +
        'animation-delay:' + numberRandom(1, 1) + 's;';

    kongMing.appendChild(left);
    kongMing.appendChild(right);
    kongMing.appendChild(bottom);
    kongMing.appendChild(line);
    kongMing.appendChild(text);
    document.getElementById('kmd').appendChild(kongMing);
    kongMing.addEventListener('animationend', function () {
        // this.remove();
    });
}

$(function () {
    const ws = new WebSocket('ws://' + location.host);
    ws.onmessage = function (event) {
        try {
            
            console.log("🚀 ~ event:", event);
            let data = JSON.parse(event.data);
            let comment = data.comment.replace(/\s/g, "");
            let nickName = data.nickName;

            if (comment && comment.length > 2) {
                if(/^\#.*?\#$/.test(comment)){
                    comment = comment.replace(/#/g,"")?.replace(/[^\u4e00-\u9fa5\d，,。 ！!:：]/g, '');
                    addUserKMD(comment);
                }

                if(comment === "点亮了"){
                    comment = tmps[getRandomInt(0, tmps.length - 1)].replace(/USERNAME/, nickName);
                    addUserKMD(comment);
                }
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


    for (let index1 = 0; index1 < 15; index1++) {
        let left1 = document.createElement('div');
        left1.className = 'kmdleft';

        let right1 = document.createElement('div');
        right1.className = 'kmdright';

        let bottom1 = document.createElement('div');
        bottom1.className = 'kmdbottom';

        let kongMing1 = document.createElement('div');
        kongMing1.className = 'kongmingdeng-little';

        kongMing1.style =
            'left:' + numberRandom(100, 0) + 'vw;' +
            'bottom:' + numberRandom(-50, -150) + 'vw;' +
            'zoom:' + numberRandom(2, 1) + ";" +
            'animation: FlyThree ' + numberRandom(50, 15) + 's linear infinite;' +
            'animation-delay:' + numberRandom(15, 1) + 's;';

        kongMing1.appendChild(left1);
        kongMing1.appendChild(right1);
        kongMing1.appendChild(bottom1);
        document.getElementById('kmd').appendChild(kongMing1);
    }
})