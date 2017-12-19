//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
function me$(tag){
    return document.getElementsByTagName(tag);
}
function mc$(x){
    return document.getElementsByClassName(x);
}
/*
* element---任意的元素
* attr---属性
* */
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

/*
* element----要移动的元素
* target----移动的目标
* 初级版本
* */
/*
* 终极版本的动画函数---有bug
*
* */
function animation (element,json,speed,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//假设都达到了目标
        for(var attr in json){
            if(attr=="opacity"){//判断属性是不是opacity
                var current= getAttrValue(element,attr)*100;
                //每次移动多少步
                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//判断属性是不是zIndex
                element.style[attr]=json[attr];
            }else{//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current= parseInt(getAttrValue(element,attr))||0;
                //每次移动多少步
                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//如果没到目标结果就为false
            }
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        // console.log("target:"+target+"current:"+current+"step:"+step);
    },(speed||10));
}
// function animation (element,json,fn) {
//     clearInterval(element.timeId);
//     element.timeId=setInterval(function () {
//         var flag=true;//假设都达到了目标
//         for(var attr in json){
//             if(attr=="opacity"){//判断属性是不是opacity
//                 var current= getAttrValue(element,attr)*100;
//                 //每次移动多少步
//                 var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
//                 var step=(target-current)/10;//(目标-当前)/10
//                 step=step>0?Math.ceil(step):Math.floor(step);
//                 current=current+step;
//                 element.style[attr]=current/100;
//             }else if(attr=="zIndex"){//判断属性是不是zIndex
//                 element.style[attr]=json[attr];
//             }else{//普通的属性
//
//                 //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
//                 var current= parseInt(getAttrValue(element,attr))||0;
//                 //每次移动多少步
//                 var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
//                 var step=(target-current)/10;//(目标-当前)/10
//                 step=step>0?Math.ceil(step):Math.floor(step);
//                 current=current+step;
//                 element.style[attr]=current+"px";
//             }
//             if(current!=target){
//                 flag=false;//如果没到目标结果就为false
//             }
//         }
//         if(flag){//结果为true
//             clearInterval(element.timeId);
//             if(fn){//如果用户传入了回调的函数
//                 fn(); //就直接的调用,
//             }
//         }
//         // console.log("target:"+target+"current:"+current+"step:"+step);
//     },10);
// }

// 获取任意一个元素对应的属性值

function getStyle(element,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}



// 超级兼容
var evt = {
    getEvent: function (evt) {
        return window.event || evt;
    },
    getClientX: function (evt) {
        return this.getEvent(evt).clientX;
    },
    getClientY: function (evt) {
        return this.getEvent(evt).clientY;
    },
    getScrollLeft: function () {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    },
    getScrollTop: function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    },
    getPageX: function (evt) {
        return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getEvent(evt).getClientX(evt) + this.getEvent(evt).getScrollLeft();
    },
    getPageY: function (evt) {
        return this.getEvent(evt).pageY ? this.getEvent(evt).pageY : this.getEvent(evt).getClientY(evt) + this.getEvent(evt).getScrollTop();
    }
};
// document.onmousemove = function (e) {
//     my$("im").style.left = evt.getPageX(e) + "px";
//     my$("im").style.top = evt.getPageY(e) + "px";
// };
function animate(element, target, step) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = step|| 10;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 10);
}