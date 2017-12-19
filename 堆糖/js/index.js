/**
 * Created by Administrator on 2017/10/1.
 */
// 导航
    //分类
var fication = document.getElementsByClassName("fication")[0];
var fication1 = document.getElementsByClassName("fication1")[0];
var ficImg = fication.getElementsByTagName("img")[0];
addEventListener(fication, "mouseover", function () {
    fication1.style.display = "block";
    this.style.height = "38px";
    this.style.borderBottom = "5px solid #fff";
    ficImg.style.transform = "rotateZ(-180deg)"
});
addEventListener(fication, "mouseout", function () {
    fication1.style.display = "none";
    this.style.height = "28px";
    this.style.borderBottom = "1px solid #c5c5c5";
    ficImg.style.transform = "rotateZ(0deg)"
});
addEventListener(fication1, "mouseover", function () {
    this.style.display = "block";
    fication.style.height = "38px";
    fication.style.borderBottom = "5px solid #fff";
    ficImg.style.transform = "rotateZ(-180deg)"
});
addEventListener(fication1, "mouseout", function () {
    this.style.display = "none";
    fication.style.height = "28px";
    fication.style.borderBottom = "1px solid #c5c5c5";
    ficImg.style.transform = "rotateZ(0deg)"
});
//手机版
var phone = document.getElementsByClassName("phone")[0];
var phone_pic = document.getElementsByClassName("phone_pic")[0];
var p_tob = document.getElementsByClassName("p_tob")[0];
addEventListener(phone, "mouseover", function () {
    p_tob.style.display = "block";
    phone_pic.style.transform = "rotateZ(-180deg)";
});
addEventListener(phone, "mouseout", function () {
    p_tob.style.display = "none";
    phone_pic.style.transform = "rotateZ(0deg)";
});
addEventListener(p_tob, "mouseover", function () {
    p_tob.style.display = "block";
    phone_pic.style.transform = "rotateZ(-180deg)";
});
addEventListener(p_tob, "mouseout", function () {
    p_tob.style.display = "none";
    phone_pic.style.transform = "rotateZ(0deg)";
});

//头部
var header_l = document.getElementsByClassName("header_l")[0];
var imgWidth = header_l.offsetWidth;
var ulObj = header_l.children[0];
var list = ulObj.children;
var array = header_l.children[1];
var dot = document.getElementsByClassName("dot")[0];
var pic = 0;
//点击显示小箭头
addEventListener(header_l, "mouseover", function () {
    array.style.display = "block";
});
addEventListener(header_l, "mouseout", function () {
    array.style.display = "none";
});
//点击小圆圈移动
for (var i = 0; i < list.length; i++) {
    //创建span
    var span = document.createElement("span");
    dot.appendChild(span);
    span.index = i;
    span.onmouseover = function () {
        this.style.background = 'url("images/1.png") -640px -243px';
        pic = this.index;
        console.log(pic);
        animate(ulObj, -pic * imgWidth)
    };
    span.onmouseout = function () {
        this.style.background = 'url("images/1.png") -620px -243px';
    };
}
//克隆第一个li，显示到最后
ulObj.appendChild(ulObj.children[0].cloneNode(true));
console.log(header_l.offsetWidth);
//自动播放
var timer = setInterval(function () {
    click_r();
}, 3000);
//移上显示小箭头
addEventListener(header_l, "mouseover", function () {
    array.style.display = "block";
    clearInterval(timer);
});
addEventListener(header_l, "mouseout", function () {
    array.style.display = "none";
    timer = setInterval(function () {
        click_r();
    }, 3000);
});
//点击右侧小箭头
my$("right").onclick = click_r;
function click_r() {
    if (pic == list.length - 1) {
        pic = 0;
        ulObj.style.left = 0 + "px";
    }
    pic++;
    animate(ulObj, -pic * imgWidth);
//显示第6张图，第一个小按钮亮
    if (pic == list.length - 1) {
        dot.children[dot.children.length - 1].style.background = 'url("images/1.png") -620px -243px';
        dot.children[0].style.background = 'url("images/1.png") -640px -243px';
    } else {
        for (var j = 0; j < dot.children.length; j++) {
            dot.children[j].style.background = 'url("images/1.png") -620px -243px';
        }
        dot.children[pic].style.background = 'url("images/1.png") -640px -243px';
    }
}
//点击左侧小箭头
my$("left").onclick = click_l;
function click_l() {
    if (pic == 0) {
        pic = list.length - 1;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, -pic * imgWidth);
    for (var j = 0; j < dot.children.length; j++) {
        dot.children[j].style.background = 'url("images/1.png") -620px -243px';
    }
    dot.children[pic].style.background = 'url("images/1.png") -640px -243px';
}

//所有浅蓝按钮变蓝
var tit = document.getElementsByClassName("tit")[0];
var tit1 = document.getElementsByClassName("tit")[1];
var blspan = tit.getElementsByTagName("span")[0];
var blspan1 = tit1.getElementsByTagName("span")[0];
var more = document.getElementsByClassName("more")[0];
addEventListener(blspan, "mouseover", function () {
    this.style.backgroundColor = "#1E9ED8";
});
addEventListener(blspan, "mouseout", function () {
    this.style.backgroundColor = "#22b4f6";
});
addEventListener(blspan1, "mouseover", function () {
    this.style.backgroundColor = "#1E9ED8";
});
addEventListener(blspan1, "mouseout", function () {
    this.style.backgroundColor = "#22b4f6";
});
addEventListener(more, "mouseover", function () {
    this.style.backgroundColor = "#1E9ED8";
});
addEventListener(more, "mouseout", function () {
    this.style.backgroundColor = "#22b4f6";
});

//专辑精选
var album = document.getElementsByClassName("album")[0];
var album_list = album.getElementsByTagName("li");
for (var i = 0; i < album_list.length; i++) {
    addEventListener(album_list[i], "mouseover", albumListMouseover);
    addEventListener(album_list[i], "mouseout", albumListMouseout);
}
function albumListMouseover() {
    this.children[1].style.display = "block";
}
function albumListMouseout() {
    this.children[1].style.display = "none";
}

//单品推荐
var bill = document.getElementsByClassName("bill")[0];
var bill_list = bill.getElementsByTagName("li");
for (var i = 0; i < bill_list.length; i++) {
    addEventListener(bill_list[i], "mouseover", billListMouseover);
    addEventListener(bill_list[i], "mouseout", billListMouseout);
}
function billListMouseover() {
    this.children[1].style.display = "block";
}
function billListMouseout() {
    this.children[1].style.display = "none";
}

//逛
var visit = document.getElementsByClassName("visit")[0];
var visit_list = visit.getElementsByTagName("li");
var div = null;
for (var i = 0; i < visit_list.length; i++) {
    addEventListener(visit_list[i], "mouseover", visitListMouseover)
    addEventListener(visit_list[i], "mouseout", visitListMouseout)
}
function visitListMouseover() {
    div = document.createElement("div");
    div.id = "dv";
    div.style.width = this.children[0].offsetWidth + "px";
    div.style.height = this.children[0].offsetHeight + "px";
    div.style.backgroundColor = "rgba(0,0,0,.1)";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.zIndex = "2";
    this.appendChild(div);
    this.children[1].style.display = "block";
}
function visitListMouseout() {
    this.removeChild(div);
    this.children[1].style.display = "none";
}

//底部
//微信
var weixin = document.getElementsByClassName("weixin")[0];
var wx_erweima = document.getElementsByClassName("wx_erweima")[0];
addEventListener(weixin,"mouseover", function () {
    animate1(wx_erweima,{"opacity":1});
});
addEventListener(weixin,"mouseout", function () {
    animate1(wx_erweima,{"opacity":0});
});

//侧边固定栏
//回到顶部
var sidebar = document.getElementsByClassName("sidebar")[0];
var sidebarSpan = sidebar.children[0];
window.onscroll = function () {
    if (getScroll().top > 1000) {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
    leared = getScroll().top;
};
var timer = null;
var target = 0;
var leared = 0;
sidebarSpan.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var spent = (target - leared) / 10;
        spent = spent > 0 ? Math.ceil(spent) : Math.floor(spent);
        leared = leared + spent;
        window.scrollTo(0, leared);
        if (leared === 0) {
            window.scrollTo(0, target);
            clearInterval(timer)
        }
    }, 30)
};





