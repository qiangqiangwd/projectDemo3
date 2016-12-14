/**
 * Created by qiang on 2015/11/17.
 */



(function(mapDiv){
    var services_Map = getId(mapDiv);
    var map1;
    var lat //����λ��ά��
    var long //����λ�þ���
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// ���Ͻǣ���ӱ�����
    var top_left_navigation = new BMap.NavigationControl();  //���Ͻǣ����Ĭ������ƽ�ƿؼ�
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    //���Ͻǣ�������ƽ�ƺ����Ű�ť
    var baiduMap = {
        //��ȡ�û�����λ����Ϣ
        getLocation:function(){
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var cords = position.coords;
                    lat = coords.latitude;
                    long = coords.longitude;
                    //return {lat:coords.latitude,long: coords.longitude}
                    //����λ��ά��
                    //����λ�þ���
                },function(error){
                    alert('error')
                },{
                    maximumAge:60*100*2,
                    timeout:500
                })
        },
        //����
        createMap:function(){
            var map = new BMap.Map('services_Map');  //��ָ�������д���һ���ٶȵ�ͼ
            var point = new BMap.Point(104.077245,30.555122); //����һ�����ĵ㣬�ֱ�Ϊ���Ⱥ�ά��
            map.centerAndZoom(point,17); //�趨��ͼ�������겢������ʾ��������
            //�ڶ�������Ϊ��ͼ����4-����8-ʡ��12-�У�18-�ֵ�
            map1 = map; //��map�ӳ���
        },
        //��ӵ�ͼ�¼�
        setMapEvent:function(){
            map1.enableDragging();//������ק�¼���Ĭ�����ã�
            map1.enableScrollWheelZoom(); //���õ�ͼ���ַŴ���С
            map1.enableDoubleClickZoom();//���˫���Ŵ�Ĭ�����ã�
            map1.enableKeyboard(); //���ü��̣����¼��ƶ���ͼ
            //�ؼ��ͱ�����
            map1.addControl(top_left_control);
            map1.addControl(top_left_navigation);
            map1.addControl(top_right_navigation);
        },
        //�Ƴ��ؼ��ͱ�����
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
