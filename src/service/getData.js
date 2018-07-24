// import fetch from '../config/fetch'

/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = () => fetch('../data/sliderData.json', {})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })