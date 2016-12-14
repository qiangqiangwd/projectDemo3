/*Created by qiang on 2015/11/14.*/
//轮播部分js
/*
 *------轮播的参数配置---------
 *
 * imgArr:图片路径的数组；
 * bannerCntArr：文字内容的数组；
 * ImgMovTime：图片运动的时间间隔
 * ZiMoveTime：字体刷新时想要出现的时间
 * DomNode：各个节点
 * num1：图片起始运动时的数字（默认为0，（不超过图片数量-1））；
 * flag1：判断当前是上层图层还是下层图层（默认为true）；
 *
 * */
var LunBoMove = function (imgArr, bannerCntArr, ImgMovTime, ZiMoveTime, DomNode, num1, flag1) {

    //console.log(arguments);

    if(num1==undefined)num=0; else num=num1;
    flag = flag1 || true;

    var changeImgRTime = setInterval(changeImgR, ImgMovTime);  //创建轮播播放时间间隔
    var changZiMoveTopTime;                                 //接收字体向上运动的时间间隔
    var changZiMoveDownTime = setTimeout(changZiMoveDown, (ImgMovTime - ZiMoveTime));//接收字体向下运动的时间间隔
    changZiMoveTop();//刷新页面时让字体向上运动一次

    //设置图片
    DomNode.banner_Down.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
    DomNode.banner_Top.innerHTML = '<img src="' + imgArr[num + 1] + '" width="1349px" height="470px"/>';
    //设置文字
    DomNode.banner_cnt.innerHTML = bannerCntArr[num];

//按动左键时的函数
    DomNode.btn_left.onclick = function () {
        clearInterval(changeImgRTime);
        changeImgRTime = setInterval(changeImgR, ImgMovTime);
        changeImgR("left");
    };

//按动右键时的函数
    DomNode.btn_right.onclick = function () {
        clearInterval(changeImgRTime);
        changeImgRTime = setInterval(changeImgR, ImgMovTime);
        changeImgR("right");
    };

    //点击时图片的轮流转换
    function changeImgR(pan) {
        DomNode.banner_cnt.className = 'banner_Move6';
        bannerImgMove(pan);
        DomNode.banner_cnt.innerHTML = bannerCntArr[num];
        if (pan == undefined) {
            changZiMoveTopTime = setTimeout(changZiMoveTop, ZiMoveTime);
            changZiMoveDownTime = setTimeout(changZiMoveDown, (ImgMovTime - ZiMoveTime));
        } else {
            clearTimeout(changZiMoveTopTime);
            clearTimeout(changZiMoveDownTime);
            changZiMoveDown2();
            setTimeout(changZiMoveTop, ZiMoveTime);
        }
    }

    function bannerImgMove(pan) {
        if (flag) {
            DomNode.banner_Top.className = '';
            DomNode.banner_Down.className = '';
            DomNode.banner_Down.style.zIndex = 2;
            DomNode.banner_Top.style.zIndex = 1;
            if (pan == "right" || (flag == true && pan != "left")) {
                DomNode.banner_Down.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                num++;
                if (num > (imgArr.length - 1))num = 0;
                DomNode.banner_Top.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                DomNode.banner_Down.className = 'banner_Move';
                DomNode.banner_Top.className = 'banner_Move1';
            } else if (pan == "left") {
                DomNode.banner_Top.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                num--;
                if (num < 0)num = (imgArr.length - 1);
                DomNode.banner_Down.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                DomNode.banner_Down.className = 'banner_Move2';
                DomNode.banner_Top.className = 'banner_Move3';
            }
            flag = false;
        } else {
            DomNode.banner_Top.className = '';
            DomNode.banner_Down.className = '';
            DomNode.banner_Down.style.zIndex = 1;
            DomNode.banner_Top.style.zIndex = 2;
            if (pan == "right" || (flag == false && pan != "left")) {
                DomNode.banner_Top.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                num++;
                if (num > (imgArr.length - 1))num = 0;
                DomNode.banner_Down.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                DomNode.banner_Top.className = 'banner_Move';
                DomNode.banner_Down.className = 'banner_Move1';
            } else if (pan == "left") {
                DomNode.banner_Down.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                num--;
                if (num < 0)num = (imgArr.length - 1);
                DomNode.banner_Top.innerHTML = '<img src="' + imgArr[num] + '" width="1349px" height="470px"/>';
                DomNode.banner_Top.className = 'banner_Move2';
                DomNode.banner_Down.className = 'banner_Move3';
            }
            flag = true;
        }
    }

//上升
    function changZiMoveTop() {
        DomNode.banner_cnt.className = 'banner_Move4';
    }

//下降
    function changZiMoveDown() {
        DomNode.banner_cnt.className = 'banner_Move5';
    }

//消失
    function changZiMoveDown2() {
        DomNode.banner_cnt.className = 'banner_Move6';
    }

    //返回的函数。。。
    return {ImgChange: changeImgR, ZiTopMove: changZiMoveTop, ZiDownMove: changZiMoveDown}
};


//轮播获取的参数
var banner_Top = getId('banner_Top');
var banner_Down = getId('banner_Down');
var btn_left = getId('btn_left');
var btn_right = getId('btn_right');
var banner_cnt = getId('banner_cnt'); //字体内容部分

//图片
var imgArr = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg'];
//内容
var bannerCntArr = ["<h3>欢迎来到Fabrica</h3>" +
"<p>你的创意商业伙伴</p>" +
"<div class='banner_btn'>了解更多</div>",
    "<h3>您个人的设计师</h3>" +
    "<p>我们随时准备为您准备着</p>" +
    "<div class='banner_btn'>了解更多</div>",
    "<h3>专业团队、易于定制</h3>" +
    "<p>为您进行最精心的组合</p>" +
    "<div class='banner_btn'>了解更多</div>"];
var num1 = 0;
var flag1 = true;
var DomNode = {
    banner_Top: banner_Top,
    banner_Down: banner_Down,
    btn_left: btn_left,
    btn_right: btn_right,
    banner_cnt: banner_cnt
};//将各节点写作对象


//设置参数
var LunBo = LunBoMove(imgArr, bannerCntArr, 5000, 500, DomNode,0);


function getId(a) {
    return document.getElementById(a);
}