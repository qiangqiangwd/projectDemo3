/**
 * Created by qiang on 2015/11/17.
 */



(function(mapDiv){
    var services_Map = getId(mapDiv);
    var map1;
    var lat //地理位置维度
    var long //地理位置经度
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    //右上角，仅包含平移和缩放按钮
    var baiduMap = {
        //获取用户地理位置信息
        getLocation:function(){
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var cords = position.coords;
                    lat = coords.latitude;
                    long = coords.longitude;
                    //return {lat:coords.latitude,long: coords.longitude}
                    //地理位置维度
                    //地理位置经度
                },function(error){
                    alert('error')
                },{
                    maximumAge:60*100*2,
                    timeout:500
                })
        },
        //引入
        createMap:function(){
            var map = new BMap.Map('services_Map');  //在指定容器中创建一个百度地图
            var point = new BMap.Point(104.077245,30.555122); //定义一个中心点，分别为经度和维度
            map.centerAndZoom(point,17); //设定地图中心坐标并将其显示在容器中
            //第二个参数为地图级别：4-国，8-省，12-市，18-街道
            map1 = map; //将map扔出，
        },
        //添加地图事件
        setMapEvent:function(){
            map1.enableDragging();//启用拖拽事件（默认启用）
            map1.enableScrollWheelZoom(); //启用地图滚轮放大缩小
            map1.enableDoubleClickZoom();//鼠标双击放大（默认启用）
            map1.enableKeyboard(); //启用键盘，上下键移动地图
            //控件和比例尺
            map1.addControl(top_left_control);
            map1.addControl(top_left_navigation);
            map1.addControl(top_right_navigation);
        },
        //移除控件和比例尺
        delete_control:function(){
            map1.removeControl(top_left_control);
            map1.removeControl(top_left_navigation);
            map1.removeControl(top_right_navigation);
        }
    }

    window.baiduMap = baiduMap;
})('services_Map')
//baiduMap.getLocation();
baiduMap.createMap();
baiduMap.setMapEvent();
//baiduMap.delete_control();
