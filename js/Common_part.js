/**
 * Created by qiang on 2015/11/17.
 */


        //�������ֵ�js--------------------
var menu = getId('menu');
var menu_li = menu.getElementsByTagName('li');

//�ı䵼������ʾ
window.onload=function(){
    var urlNum = location.href.slice(location.href.indexOf("?")+1);
    //console.log(urlNum);
    for(var i=0;i<menu_li.length;i++){
        menu_li[i].className='';
    }
    if(urlNum==1||urlNum==2||urlNum==3||urlNum==4||urlNum==5){
        menu_li[urlNum].className='menu_li_choose';
    }else{
        menu_li[0].className='menu_li_choose';
    }
}



        //����Ϊ�ʴ𲿷ֵ�js-----------------------
var Ques_Ans_R_li = document.getElementsByClassName('Ques_Ans_R_li');
var Ques_Ans_R = getId('Ques_Ans_R');
var Ques_Ans_R_h5 = Ques_Ans_R.getElementsByTagName('h5');

/*
 *
 * �ʴ𲿷�������js�����趨
 * QAListHeight:�������и�Ԫ�صĸ߶�
 * QAListChildHeight:�����������ݵĸ߶�
 * */

var QAList = function(QAListHeight,QAListChildHeight){
    var num11 = -1;
    for(var i=0;i<Ques_Ans_R_li.length;i++){
        Ques_Ans_R_li[i].style.transition = 'all linear .25s';
        Ques_Ans_R_li[i].onclick=function(){
            var e = window.event||arguments[0];
            for(var i=0;i<Ques_Ans_R_li.length;i++){
                Ques_Ans_R_li[i].style.height = '';
                if(e.target == Ques_Ans_R_h5[i]){
                    Ques_Ans_R_li[i].style.height = (QAListHeight+QAListChildHeight)+'px';
                    if(num11==i){
                        Ques_Ans_R_li[i].style.height = QAListHeight+'px';
                        num11=-1;
                    }else{
                        num11 = i;
                    }
                }
            }
        }
    }
}

QAList(48,107);//����

        //����
function getId(a) {
    return document.getElementById(a);
}