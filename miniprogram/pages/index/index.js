// index.js
// const app = getApp()
const {envList} = require('../../envList.js');

Page({
    data: {
        isShowExpand: false,
        selected: 0,
        headerHeight: 0,
        statusHeight: 0,
        page: 1,
        pageSize: 10,
        categoryList: [
            {
                id: 1,
                title: '浮人故事汇',
            },
            {
                id: 1,
                title: '浮人故事汇2',
            },
            {
                id: 1,
                title: '浮人故事汇3',
            },
            {
                id: 1,
                title: '浮人故事汇4',
            }
        ],


        articleList: [{
            id: 1,
            title: '那个女孩，世上最遥远的距离——《秒速五厘米》',
            desc: '夜晚的宁静被逐渐变大的雨声打破，我坐在窗前，看着窗外下着大雨，风儿带走一片树叶。这是秋天，不会有花瓣飘飞，有的只是落叶随风渐远的凄凉与无奈。在下班的路上，我在人生的十字路口碰到了一个女孩。这么说也许不太对。因为我注意到她身边有一位男士，还有他们依偎在一起时幸福的笑容。所以，\n' +
                '                    应该称呼她为“女士”才对，但是她在我的记忆之中，永远都会是那一个女孩。',
            cover: 'https://www.liqingdan.com/storage/2020/03/2020032114342526.jpg'
        },
            {
                id: 2,
                title: '别人CF的故事',
                desc: '因为对现实的模拟，FPS游戏有很强的代入感，玩家可以自由控制角色，仿佛亲自在游戏中畅玩。但如果角色死亡后，系统会自动将视角切换到其他玩家那里，这个时候你自由了，可以躺在那里一动不动，或是升上天空，成为上帝。这是一个FPS的故事，是一个“别人的故事”，我确信。\n' +
                    '\n',
                cover: 'https://www.liqingdan.com/storage/2022/07/2022071511355854.png'
            },
            {
                id: 3,
                title: '从黑网吧到鸟巢，中国电子竞技的黑铁、白银、黄金时代！\n',
                desc: "当《英雄联盟》S7世界总决赛的巨龙在鸟巢赛场咆哮降临，多少人关于电子竞技的梦由幻想走入了现实。从2006年SKY李晓峰在意大利蒙扎摘得第二块WCG冠军奖牌开始，到2017年鸟巢的电竞盛世，中国电子竞技从黑网吧到鸟巢的这段路一共走了11年。",
                cover: 'https://www.liqingdan.com/storage/2018/03/2018032111385095.jpg',
            }
        ],
    },
    // 点击切换
    selectedCategory(e) {
        const index = e.currentTarget.dataset.id;
        console.log(index)
        this.setData({
            selected: index
        })
        this.getData(index)
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
        wx.navigateTo({
            url: '/pages/details/index?id=' + itemId, // 跳转到详情页面，并传递ID参数
        });
    },

    onLoad() {
        const statusBarHeight = getApp().globalData.statusBarHeight;
        this.setData({
            headerHeight: statusBarHeight + 44,
            statusBarHeight: statusBarHeight,
        })

        const db = wx.cloud.database()
        db.collection('tags').get({
            success: res => {
                console.log(res.data)
            },
            fail: err => {
                console.log(err)
            }
        })
    }
});
