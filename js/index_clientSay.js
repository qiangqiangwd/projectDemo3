/**
 * Created by qiang on 2016/11/15.
 */

//    客户说部分的js---------------------------------


//节点
var clientSay_ban = getId('clientSay_ban');
var clientSay_ban_ul = clientSay_ban.getElementsByTagName('ul');
var clientSay_ban_btn = document.getElementsByClassName('clientSay_ban_btn');
//参数
var clientSayNum = 0;
var clientSayWidth = 850;

/*
*
* 轮播参数设定
* clientSayWidth：每个内容的宽度（必填）
* clientSayTime：轮播变换间隔（默认为3000ms）
*clientSayNum：当前所在的条数（默认为0）
*
* */
var clientSay_LunBo = function(clientSayWidth,clientSayTime,clientSayNum){
    clientSayTime = clientSayTime || 3000;
    clientSayNum = clientSayNum || '0' ;

    var clientSay_bannerTime = setInterval(clientSay_banner,clientSayTime);  //设置轮播变换间隔时间

    clientSay_banner(); //根据设定的clientSayNum值进行初始化

    //内容的轮播
    function clientSay_banner(){
        for(var i=0;i<clientSay_ban_btn.length;i++){
            clientSay_ban_btn[i].style.backgroundColor='';
        }
        clientSay_ban_ul[0].style.transition ='all linear .5s';
        clientSay_ban_ul[0].style.marginLeft = -(clientSayNum*clientSayWidth) + 'px';
        clientSay_ban_btn[clientSayNum].style.backgroundColor='rgb(252, 162, 19)'; //按钮的颜色
        clientSayNum++;
        if(clientSayNum>(clientSay_ban_btn.length-1))clientSayNum=0;
    }

    //变换按钮的颜色
    for(var i=0;i<clientSay_ban_btn.length;i++){
        clientSay_ban_btn[i].onclick=function(){
            var e= window.event||arguments[0];
            for(var i=0;i<clientSay_ban_btn.length;i++){
                if(e.target ==clientSay_ban_btn[i]){
                    clientSayNum=i;
                    clientSay_banner();
                    clearInterval(clientSay_bannerTime);
                    clientSay_bannerTime = setInterval(clientSay_banner,clientSayTime);
                }
            }
        }
    }

}

var clientSay_Banner = clientSay_LunBo(clientSayWidth,3000);



