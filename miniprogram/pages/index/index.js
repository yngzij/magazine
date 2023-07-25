// index.js
// const app = getApp()
const {envList} = require('../../envList.js');

Page({
    data: {
        isShowExpand: false,
        selected: 0,
        headerHeight: 0,
        statusHeight: 0,
        showUploadTip: false,
    },
    // 打开导航
    handleExpand() {
        this.setData({
            isShowExpand: !this.data.isShowExpand
        })
    },

    onLoad() {
        const statusBarHeight = getApp().globalData.statusBarHeight;
        this.setData({
            headerHeight: statusBarHeight + 44,
            statusBarHeight: statusBarHeight,
        })
    }
});
