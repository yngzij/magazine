// index.js
const {envList} = require('../../envList.js');

Page({
    data: {
        isShowExpand: false,
        selected: 0,
        headerHeight: 0,
        statusHeight: 0,
        page: 1,
        pageSize: 10,
        tags: [],
        topics: [],
    },
    // 点击切换
    selectedCategory(e) {
        const tagId = e.currentTarget.dataset.id;
        const db = wx.cloud.database();
        const $ = db.command.aggregate

        db.collection('topics').aggregate()

    },

    getData(id = 1) {

    },
    loadMore() {

    },

    //下拉刷新
    onPullDownRefresh() {
        wx.showNavigationBarLoading();
        setTimeout(() => {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },

    // 打开导航
    handleExpand(e) {
        this.setData({
            isShowExpand: !this.data.isShowExpand
        })
    },
    onModalClick(e) {
        //点击事件不传递到父元素
        return false

    },
    onScroll: function (event) {
        if (this.data.isShowExpand) {
            //禁止滚动
            return false
        }
    },

    goToDetailPage(e) {

        const itemId = e.currentTarget.dataset.id; // 获取点击的列表项的ID
        console.log(itemId)
        wx.navigateTo({
            url: '/pages/details/index?id=' + itemId, // 跳转到详情页面，并传递ID参数
        });
    },

    onLoad() {
        const statusBarHeight = getApp().globalData.statusBarHeight;
        const db = wx.cloud.database();

        let topicsPromise = new Promise((resolve, reject) => {
            db.collection('topics').get({
                success: res => {
                    resolve(res.data);
                },
                fail: err => {
                    reject(err);
                }
            });
        });

        let tagsPromise = new Promise((resolve, reject) => {
            db.collection('tags').get({
                success: res => {
                    resolve(res.data);
                },
                fail: err => {
                    reject(err);
                }
            });
        });

        Promise.all([topicsPromise, tagsPromise])
            .then(([topicsData, tagsData]) => {
                this.setData({
                    topics: topicsData,
                    tags: tagsData,
                    headerHeight: statusBarHeight + 44,
                    statusHeight: statusBarHeight
                });
            })
            .catch(err => {
                console.error(err);
            });
    },
});
