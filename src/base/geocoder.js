export const transcoding = (lng, lat) => {
    return new Promise((resolve, reject) => {
        AMap.service('AMap.Geocoder',function(){//回调函数
            //实例化Geocoder
            let geocoder = new AMap.Geocoder({
                city: "010"//城市，默认：“全国”
            });
            //TODO: 使用geocoder 对象完成相关功能

            let lnglatXY=[];//地图上所标点的坐标
            lnglatXY.push(lng, lat)
            geocoder.getAddress(lnglatXY, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    resolve(result.regeocode.formattedAddress)
                    //获得了有效的地址信息:
                    //即，result.regeocode.formattedAddress
                }else{
                    //获取地址失败
                    reject(result)
                }
            }); 
        })
    })
}