/**
 * Created by qiang on 2016/11/15.
 */

//    �ͻ�˵���ֵ�js---------------------------------


//�ڵ�
var clientSay_ban = getId('clientSay_ban');
var clientSay_ban_ul = clientSay_ban.getElementsByTagName('ul');
var clientSay_ban_btn = document.getElementsByClassName('clientSay_ban_btn');
//����
var clientSayNum = 0;
var clientSayWidth = 850;

/*
*
* �ֲ������趨
* clientSayWidth��ÿ�����ݵĿ�ȣ����
* clientSayTime���ֲ��任�����Ĭ��Ϊ3000ms��
*clientSayNum����ǰ���ڵ�������Ĭ��Ϊ0��
*
* */
var clientSay_LunBo = function(clientSayWidth,clientSayTime,clientSayNum){
    clientSayTime = clientSayTime || 3000;
    clientSayNum = clientSayNum || '0' ;

    var clientSay_bannerTime = setInterval(clientSay_banner,clientSayTime);  //�����ֲ��任���ʱ��

    clientSay_banner(); //�����趨��clientSayNumֵ���г�ʼ��

    //���ݵ��ֲ�
    function clientSay_banner(){
        for(var i=0;i<clientSay_ban_btn.length;i++){
            clientSay_ban_btn[i].style.backgroundColor='';
        }
        clientSay_ban_ul[0].style.transition ='all linear .5s';
        clientSay_ban_ul[0].style.marginLeft = -(clientSayNum*clientSayWidth) + 'px';
        clientSay_ban_btn[clientSayNum].style.backgroundColor='rgb(252, 162, 19)'; //��ť����ɫ
        clientSayNum++;
        if(clientSayNum>(clientSay_ban_btn.length-1))clientSayNum=0;
    }

    //�任��ť����ɫ
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



