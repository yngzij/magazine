// index.js
// const app = getApp()
const {envList} = require('../../envList.js');

Page({
    data: {
        isShowExpand: false,
        selected: 0,
        statusBarHeight: 0,
        headerHeight: 0,
        statusHeight: 0,
        showUploadTip: false,
        topic: {}
    },
    onModalClick(e) {
        console.log(e)
    },
    // 打开导航
    handleExpand() {
        this.setData({
            isShowExpand: !this.data.isShowExpand
        })
    },

    onLoad(options) {
        console.log(options.id)
        const db = wx.cloud.database();
        db.collection('topics').doc(options.id).get().then(res => {
            console.log(res)
            this.setData({
                topic: res.data
            })
        })


        const statusBarHeight = getApp().globalData.statusBarHeight;
        this.setData({
            headerHeight: statusBarHeight + 44,
            statusBarHeight: statusBarHeight,
        })
    }
});
