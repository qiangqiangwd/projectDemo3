/**
 * Created by qiang on 2016/11/15.
 */

//图片的地址
var newImgArr=['img/bigItem1.jpg',"img/bigItem2.jpg","img/bigItem3.jpg","img/bigItem4.jpg","img/bigItem5.jpg","img/bigItem6.jpg"];

/*
*
* recentWorks：将创建的ul的id传进去；
* newImgArr：图片的地址数组；
*
* */
(function(recentWorks,newImgArr){
    var newNum;  //当前所在的图片
    var mosScrNum = 1 ;//鼠标滚动初始倍数
    var showImg={
        //生成图片
        createUl:function(){
            //生成小图
            for(var i=0;i<newImgArr.length;i++){
                $('#'+recentWorks).append('<li>' +
                '<img src="'+newImgArr[i]+'" alt="" />'+
                '</li>');
            }
            //生成大图
            for(var i=0;i<newImgArr.length;i++){
                $('#'+recentWorks).append(
                    '<div class="showBigImg_inImg"><img src="'+newImgArr[i]+'" alt="" /></div>'
                );
            }

            //让图片居中！！！！！！！！！！！！！
            //($('#'+recentWorks +'>div>img').get(0).naturalWidth)?console.log('in'):location.reload();  //如果未检测到图片的宽度，在刷新一次
            $(window).load(function(){
                //console.log($('.showBigImg_inImg>img').get(0).naturalWidth)
                //console.log(newImgArr.length)
                for(var i=0;i<newImgArr.length;i++){
                    $('.showBigImg_inImg').get(i).style.marginLeft = "-"+($('.showBigImg_inImg>img').get(i).naturalWidth/2)+"px";
                    $('.showBigImg_inImg').get(i).style.marginTop = "-"+($('.showBigImg_inImg>img').get(i).naturalHeight/2)+"px";
                }
            });

            //生成向左、向右和关闭按钮
            $('#'+recentWorks).append('<div id="showBigImg_L">&lt;</div>'+
            '<div id="showBigImg_R">&gt;</div>'+
            '<div id="showBigImg_C">X</div>');
            $('#'+recentWorks +'>div').wrapAll('<div id="showBigImg"></div>');  //用一个div把大图包裹起来

            $('#'+recentWorks +' li img').addClass('imgStyle'); //给小图设定指定宽高
            $('#'+recentWorks +' div div img').addClass('showBigImg1');//大图的css
        },

        //点击图片
        clickBigImg:function clickBigImg(){
            //循环给每个图片添加点击事件
            $('#'+recentWorks +' li img').click(function(){
                var that = $(this);

                $('#'+recentWorks +' li img').each(function(index){
                    //先将所有的大图进行隐藏
                    $('#'+recentWorks +' div img').get(index).style.display = 'none';
                    if( that.get(0) == $('#'+recentWorks +' li img').get(index)) {
                        $('#' + recentWorks + ' div img').get(index).style.display = 'block';//将想要显示的图片显示
                        newNum = index;  //记住当前的图片数
                    }
                });

                $('#showBigImg').show(250);
                $('#showBigImg img').addClass('imgMove1'); //出现动画
                $('body').addClass('stopScroll');

            });
            //点击大图关闭大图
            $('#showBigImg img').click(function(){
                $('#showBigImg').hide(250);
                mosScrNum = 1; //使放大的图片恢复原样
                $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
                $('body').removeClass('stopScroll');
            });
        },

        //按钮点击事件
        btnClick:function(){
            //关闭按钮
            $('#showBigImg_C').click(function(){
                $('#showBigImg').hide(250);
                mosScrNum = 1; //使放大的图片恢复原样
                $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
                $('body').removeClass('stopScroll');
            });
            //下一张按钮
            $('#showBigImg_R').click(function(){
                newNum+=1;//当前图片数加一
               (newNum>newImgArr.length-1)?newNum = 0:true; //

                $('#'+recentWorks +' li img').each(function(index){
                    //先将所有的大图进行隐藏
                    $('#'+recentWorks +' div img').get(index).style.display = 'none';
                });
                $('#' + recentWorks + ' div img').get(newNum).style.display = 'block';//将想要显示的图片显示

                mosScrNum = 1; //使放大的图片恢复原样
                $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
            });
            //上一张按钮
            $('#showBigImg_L').click(function(){
                newNum-=1;//当前图片数减一
                (newNum<0)?newNum = 5:true; //

                $('#'+recentWorks +' li img').each(function(index){
                    //先将所有的大图进行隐藏
                    $('#'+recentWorks +' div img').get(index).style.display = 'none';
                });
                $('#' + recentWorks + ' div img').get(newNum).style.display = 'block';//将想要显示的图片显示

                mosScrNum = 1; //使放大的图片恢复原样
                $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
            });
        },

        //鼠标滚动放大缩小事件
        mouseScroll:function(){
            //暂未考虑兼容性问题。。。
            window.onmousewheel = function(){
                var e = window.event || arguments[0];
                (($('#showBigImg:hidden').length==1)?function(){
                   return;
                }:function(){
                    if(e.wheelDelta>0){
                        $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
                        (mosScrNum>=1.8)?mosScrNum=1.8:mosScrNum+=.1;

                    }else{
                        $('.showBigImg_inImg').get(newNum).style.transform='scale('+mosScrNum+')';
                        (mosScrNum<=.2)?mosScrNum=.2:mosScrNum-=.1;
                    }
                    //console.log( $('.showBigImg_inImg').get(newNum))
                    //console.log(e.wheelDelta)
                    //console.log($('#showBigImg:hidden').length);
                })();
            }
        }
    }

    window.showImg = showImg; //放出接口
})('recentWorks_ul',newImgArr);

//将传进来的图片进行生成
    showImg.createUl();
//启用鼠标滚动放大缩小事件
    showImg.mouseScroll();
//设置点击事件
    showImg.clickBigImg();
    showImg.btnClick();





