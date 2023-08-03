// app.js
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                env: 'cloud1-1gzcvldj99777c3a',
                traceUser: true,
            });
        }
        const systemInfo = wx.getSystemInfoSync()
        const statusBarHeight = systemInfo.statusBarHeight;
        this.globalData = {
            statusBarHeight: statusBarHeight
        }
    },
});
