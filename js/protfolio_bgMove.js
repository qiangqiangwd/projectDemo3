/**
 * Created by qiang on 2015/11/19.
 */

//作品展示

var moveImgSrc = ["../img/item1.jpg","../img/item2.jpg",
    "../img/item3.jpg","../img/item4.jpg","../img/item5.jpg",
    "../img/item6.jpg","../img/bg1.jpg","../img/bg2.jpg",
    "../img/item9.jpg"];
//var moveImgSrc1 = ["img/item1.jpg","img/item2.jpg",
//    "img/bg1.jpg","img/bg2.jpg",
//    "img/item9.jpg"];
//var moveImgSrc2 = [
//    "img/bg1.jpg","img/bg2.jpg",
//    "img/item9.jpg"];
//var moveImgSrc3 = ["img/item1.jpg","img/bg2.jpg",
//    "img/bg1.jpg","img/bg2.jpg",
//    "img/item9.jpg"];

(function(protfolioimg){
    var Imgnum=[];
    var moveBg1 = {
        //生成图片
        createImgLi:function(moveImgSrc){
            for(var i = 0;i<moveImgSrc.length;i++){
                $(protfolioimg).append('<li>' +
                '<img src="'+moveImgSrc[i]+'" alt="'+i+'" width="360px" height="240px"  />' +
                '<span></span>'+
                '</li>')
            }
            $(protfolioimg+' li').wrapAll('<ul></ul>')
        },

        //移入效果
        changBg:function(){
            $(protfolioimg+' ul li').each(function(index){
                $(protfolioimg+' ul li').get(index).onmouseover = function(){
                    $(protfolioimg+' ul li span').get(index).className = 'spanMoveToR';
                }
            });

            $(protfolioimg+' ul li').each(function(index){
                $(protfolioimg+' ul li').get(index).onmouseout = function(){
                    $(protfolioimg+' ul li span').get(index).className = 'spanMoveOutR';
                }
            });
        },

        //点击按钮效果
        Btnclick:function(){
            $('.protfolioBtn ul li').click(function(){
                var that = this;
                $('.protfolioBtn ul li').each(function(index){
                    $('.protfolioBtn ul li').get(index).className='';
                    if(that == $('.protfolioBtn ul li').get(index)){

                        Imgnum.length = 0;

                        if(index == 0){
                            $(protfolioimg+' li').each(function(numkk){
                                $(protfolioimg+' ul li').eq(numkk).show(250);
                            })
                        }else if(index == 1){
                            $(protfolioimg+' li').each(function(numkk){
                                $(protfolioimg+' ul li').eq(numkk).show();

                                if($(protfolioimg+' ul li img').eq(numkk).attr('alt')%2==0){
                                    Imgnum.push(numkk);
                                }

                            });
                        }else if(index == 2){
                            $(protfolioimg+' li').each(function(numkk){
                                $(protfolioimg+' ul li').eq(numkk).show();

                                if($(protfolioimg+' ul li img').eq(numkk).attr('alt')%3==0) Imgnum.push(numkk);

                            });
                        }else if(index == 3){
                            $(protfolioimg+' li').each(function(numkk){
                                $(protfolioimg+' ul li').eq(numkk).show();

                                //if($(protfolioimg+' ul li img').eq(numkk).attr('alt')%4==0) Imgnum.push(numkk);
                                Imgnum=[0,1,5,6,7,4]
                            });
                        }
                        console.log(Imgnum);
                        for(var i =0;i<Imgnum.length;i++){
                            $(protfolioimg+' ul li').eq(Imgnum[i]).hide(250);
                        }
                        //console.log(index);
                    }
                });
                this.className='liBgColor';
            });
        }
    }
    window.moveBg1 = moveBg1;
})("#protfolio_img");

moveBg1.createImgLi(moveImgSrc);
moveBg1.changBg();
moveBg1.Btnclick();








//未完成版

//$(document).bind('mousemove',function(e){
//    $("#protfolio_img ul li").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
//});
//(function(){
//    var bgMoveNumL;
//    var offset = [];
//    var bg_move_flag = 'in';
//    $('#protfolio_img ul li img').each(function(index){
//        offset.push($('#protfolio_img ul li img').eq(index).offset());
//    });
//    var bgMove = {
//        //判断是由哪个位置进入
//        decideIn:function(){
//            $('#protfolio_img ul').mousemove(function(){
//                var e = window.event || arguments[0];
//                //console.log(e.pageX);
//                $('#protfolio_img ul .Top').get(0).style.top = e.pageY+'px';
//                $('#protfolio_img ul .Top').get(0).style.left = e.pageX+'px';
//                //从左边进入
//
//                for(var i = 0;i<offset.length;i++){
//                    bgMoveNumL = i;
//                    if(e.pageX-offset[i].left>0&&e.pageX<offset[i].left+5){
//                        //console.log('in:' +bgMoveNumL);
//                    }
//                   else if(e.pageX-offset[i].left<0&&e.pageX>offset[i].left-5){
//                        //console.log('out:'+bgMoveNumL);9
//                    }
//                }
//
//                for(var i = 0;i<offset.length;i++){
//                    if((e.pageX<offset[i].left&&e.pageX>(offset[i].left-15))&&(e.pageY>offset[i].top&&e.pageY<(offset[i].top+240))){
                        //console.log('left')
                        //bgMoveNumL = i;
                        //$('#protfolio_img ul li img').eq(i).mouseover(function(){
                        //    if(bg_move_flag=='in'){
                        //        $('#protfolio_img ul li div span').get(bgMoveNumL-1).className='spanMoveOutR';
                        //        $('#protfolio_img ul li div span').get(bgMoveNumL).className='spanMoveToR';
                        //        console.log('in'+bgMoveNumL)
                        //        bg_move_flag='out'
                        //    }
                        //});
                        //$('#protfolio_img ul li img').eq(i).mouseout(function(){
                        //    if(bg_move_flag='out'){
                        //        //$('#protfolio_img ul li div span').get(bgMoveNumL).className='spanMoveOutR';
                        //        console.log('out'+bgMoveNumL)
                        //        bg_move_flag='in'
                        //    }
                        //});
                        //(function(){
                        //    //if(bg_move_flag){
                        //    if(e.pageX>offset[bgMoveNumL].left-15&&e.pageX<offset[bgMoveNumL].left+360){
                        //        $('#protfolio_img ul li div span').get(bgMoveNumL-1).className='spanMoveOutR';
                        //        $('#protfolio_img ul li div span').get(bgMoveNumL).className='spanMoveToR';
                        //        console.log('left_in:'+bgMoveNumL);
                        //        //bg_move_flag = false;
                        //    }else{
                        //        console.log('left_out:'+(bgMoveNumL));
                        //    }
                        //})();
                //    }
                //}
                ////从右边进入
                //for(var i = 0;i<offset.length;i++){
                //    if((e.pageX<offset[i].left+375&&e.pageX>(offset[i].left+360))&&(e.pageY>offset[i].top&&e.pageY<(offset[i].top+240))){
                //        //console.log('right:'+i);
                //    }
                //}
                ////从上边进入
                //for(var i = 0;i<offset.length;i++){
                //    if((e.pageX<offset[i].left+375&&e.pageX>offset[i].left)&&(e.pageY>offset[i].top-15&&e.pageY<(offset[i].top))){
                //        //console.log('top:'+i);
                //    }
                //}
                ////从下边进入
                //for(var i = 0;i<offset.length;i++){
                //    if((e.pageX<offset[i].left+375&&e.pageX>offset[i].left)&&(e.pageY>offset[i].top+240&&e.pageY<(offset[i].top+240+15))){
                //        //console.log('down:'+i);
                //    }
                //}
                //var offset = $('#protfolio_img ul li img').eq(0).offset();//获取其离父元素的坐标
                //var offset1 = $('#protfolio_img ul li img').eq(1).offset();//获取其离父元素的坐标
                //var offset2 = $('#protfolio_img ul li img').eq(2).offset();//获取其离父元素的坐标
                //if((e.pageX<offset.left&&e.pageX>offset.left-15)&&(e.pageY>offset.top&&e.pageY<offset.top+240)){
                //    (bgMoveNum!=undefined)?$('#protfolio_img ul li span').get(bgMoveNum).className='spanMoveOutR':true;
                //    $('#protfolio_img ul li div span').get(0).className='spanMoveToR';
                //    bgMoveNum = 0;
                //}else if((e.pageX<offset1.left&&e.pageX>offset1.left-15)&&(e.pageY>offset1.top&&e.pageY<offset1.top+240)){
                //    (bgMoveNum!=undefined)?$('#protfolio_img ul li span').get(bgMoveNum).className='spanMoveOutR':true;
                //    $('#protfolio_img ul li div span').get(1).className='spanMoveToR';
                //    bgMoveNum = 1;
                //}else if((e.pageX<offset2.left&&e.pageX>offset2.left-15)&&(e.pageY>offset2.top&&e.pageY<offset2.top+240)){
                //    (bgMoveNum!=undefined)?$('#protfolio_img ul li span').get(bgMoveNum).className='spanMoveOutR':true;
                //    $('#protfolio_img ul li div span').get(2).className='spanMoveToR';
                //    bgMoveNum = 2;
                //}
                //$('#protfolio_img ul li').mouseover(function(){
                //    var that = this;  //判断当前移入的谁
                //    $('#protfolio_img ul li span').each(function(index){
                //         //$('#protfolio_img ul li span').get(index).className='';
                //          if($('#protfolio_img ul li').get(index)==that){
                //              //console.log(index)
                //              var offset = $('#protfolio_img ul li img').eq(index).offset();//获取其离父元素的坐标
                //              if((e.pageX<offset.left)&&(e.pageY>offset.top&&e.pageY<offset.top+240)){
                //                  //$('#protfolio_img ul li span').get(index).className='';
                //                  $('#protfolio_img ul li span').get(index).className='spanMoveToR';
                //                  //console.log('left')
                //              }
                //          }
                //    });
                //})
            //});
            //$('#protfolio_img ul li .Left').mouseover(function(){
            //    $('#protfolio_img ul li img').mouseover(function(){
            //        console.log('left');
            //    });
            //});
            //$('#protfolio_img ul li .Right').mouseover(function(){
            //    $('#protfolio_img ul li img').mouseover(function(){
            //        console.log('right');
            //    });
            //});
    //    }
    //}
    //window.bgMove = bgMove;
//})()
//bgMove.decideIn();