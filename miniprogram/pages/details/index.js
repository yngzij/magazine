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
        article: {
            content: '<div class="entry-content">\n' +
                '<p style="text-align: center;">' +
                '<a href="https://www.liqingdan.com/cos/4086.html/attachment/2019081911042246" rel="attachment wp-att-4092"><img alt="" class="aligncenter size-full wp-image-4092" decoding="async" height="663" sizes="(max-width: 1068px) 100vw, 1068px" src="https://www.liqingdan.com/storage/2019/08/2019081911042246.jpg" srcset="https://www.liqingdan.com/storage/2019/08/2019081911042246.jpg 1068w, https://www.liqingdan.com/storage/2019/08/2019081911042246-121x75.jpg 121w, https://www.liqingdan.com/storage/2019/08/2019081911042246-726x450.jpg 726w, https://www.liqingdan.com/storage/2019/08/2019081911042246-768x477.jpg 768w" width="1068"/></a></p>\n' +
                '<p>CN：<strong>蚊葱</strong></p>\n' +
                '<p>真名：王雪文博</p>\n' +
                '<p>新浪微博：@coser-蚊葱</p>\n' +
                '<p>属性：一直自称霸道总裁，其实周围基友评价是个很软的妹子</p>\n' +
                '<p>身高：155Cm（能不提这个悲伤的事情吗）</p>\n' +
                '<p>体重：40Kg</p>\n' +
                '<p>三围：可以不报吗？总之知道是贫乳就够了（望天）</p>\n' +
                '<p>爱好：吃吃吃、拍片、看动漫、看美人（够了）</p>\n' +
                '<p>最喜欢的游戏：《剑侠情缘三》</p>\n' +
                '<p>最喜欢的游戏角色：丐帮！（丐哥帅哭我），还有新出的门派苍云</p>\n' +
                '<p>Cosplay代表作：还在努力成长中，算不上特别好，《刹月华》大哥、《自我嫌恶》弟弟、《仙剑奇侠传三》龙葵、《银魂》神乐</p>\n' +
                '<h1 style="text-align: center;"><a href="https://www.liqingdan.com/cos/4086.html/attachment/2019081911042112" rel="attachment wp-att-4091"><img alt="" class="aligncenter size-full wp-image-4091" decoding="async" height="587" loading="lazy" sizes="(max-width: 997px) 100vw, 997px" src="https://www.liqingdan.com/storage/2019/08/2019081911042112.jpg" srcset="https://www.liqingdan.com/storage/2019/08/2019081911042112.jpg 997w, https://www.liqingdan.com/storage/2019/08/2019081911042112-121x71.jpg 121w, https://www.liqingdan.com/storage/2019/08/2019081911042112-726x427.jpg 726w, https://www.liqingdan.com/storage/2019/08/2019081911042112-768x452.jpg 768w" width="997"/></a></h1>\n' +
                '<h2><strong><span style="color: #000000;"><span style="color: #ff6600;">丨</span>蚊葱的自我介绍</span></strong></h2>\n' +
                '<p>Hello，大家好，我是蚊葱，一般叫我蚊子或者总裁就好，我这边坐标是腐都。所属社团：冬皇黑蔷薇Cos社团，我们社团拿过CAF3比赛第一名。不过我个人暂时还未参加任何比赛，是个小透明，但是正在努力的成长中。我个人很喜欢Cosplay，自我感觉这是种信仰，我深爱着二次元并为了二次元的发展做着自己小小的贡献。现在有个“总裁工作室”在合作一个原创漫画，希望发表后大家能够多多支持啦。</p>\n' +
                '<p>大网：蚊葱你好，这如此个性的CN是如何诞生的，有什么奇特的诞生过程？</p>\n' +
                '<p><strong><span style="color: #000000;">蚊葱</span></strong>：你好，说起CN的来历还是蛮复杂的，哈哈。初中的时候基友找我一起画漫画来着，就把真名中的一个字取出来再加一个“子”，刚刚开始是“文子”。后来因为大家的输入法问题，就成了“蚊子”。再后来，入圈后，发现“蚊子”这个CN撞车的太多了，不好分辨，就取了四川话的“蚊葱”。其实说来说去还是“蚊子”的意思！</p>\n' +
                '<p>大网：蚊葱在Cos的时候更喜欢舞台还是平面拍摄的表现感觉？</p>\n' +
                '<p><span style="color: #000000;"><strong>蚊葱</strong></span>：舞台的话，说实话其实并没有什么经验，现在还是习惯平面拍摄，嘿嘿。其实一直在寻找舞台或者拍动态的机会，主要是现在忙学业没太多时间去排练，今后也一定会涉足舞台这方面的啦！</p>\n' +
                '<p style="text-align: center;"><a href="https://www.liqingdan.com/cos/4086.html/attachment/2019081911042372" rel="attachment wp-att-4093"><img alt="" class="aligncenter size-full wp-image-4093" decoding="async" height="631" loading="lazy" sizes="(max-width: 953px) 100vw, 953px" src="https://www.liqingdan.com/storage/2019/08/2019081911042372.jpg" srcset="https://www.liqingdan.com/storage/2019/08/2019081911042372.jpg 953w, https://www.liqingdan.com/storage/2019/08/2019081911042372-113x75.jpg 113w, https://www.liqingdan.com/storage/2019/08/2019081911042372-680x450.jpg 680w, https://www.liqingdan.com/storage/2019/08/2019081911042372-768x509.jpg 768w" width="953"/></a></p>\n' +
                '<p>大网：蚊子真是热情满满呢，而且作为Coser各项技能都有兼修的样子，今后主要加强哪块技能点投入呢？</p>\n' +
                '<p><span style="color: #000000;"><strong>蚊葱</strong></span>：各项技能兼修不敢当，只能说是自己每样都会一点，但是每样又不是特别会。今后会主要加强后期技能的修炼，后期修图是我自己从入圈开始就在自己慢慢学的技能，磨合到今天已经有3年了，虽然说断断续续地在练，但是也没放弃过。作为一个修图狂魔，肯定要继续练习下去啦，直到做成高大上的作品为止，其余的技能也会慢慢跟进的啦。</p>\n' +
                '<p>大网：身为一名美少年……哦不对，是美少女，你在选择自己要出的角色时主要从哪方面考虑呢，比如以剑三举例。</p>\n' +
                '<p><span style="color: #000000;"><strong>蚊葱</strong></span>：不不不，其实就是美少年（不对），以前不懂事喜欢哪个角色就会去Cos哪个角色，以至于黑历史蛮多（揍）。现在会从自己喜欢的角色中挑选合适的，一般会从身材比较娇小，然后比较软的角色下手（哈哈）。就比如剑三的话，首选肯定只有LOLI和正太了（身高不够揍）。然后再选自己喜欢的门派，不用说就是丐帮（本攻喝酒溜鸟不打奶），明年有机会肯定会出丐萝。</p>\n' +
                '<p>大网：好的，祝蚊子继续在Cosplay的道路上成长，坚持自己喜欢的东西一定能做到最好！</p>\n' +
                '<p><span style="color: #000000;"><strong>蚊葱</strong></span>：谢谢大家么么哒，以后会更努力哒（啦啦啦）！</p>\n' +
                '</div>'
        }

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

    onLoad() {
        const statusBarHeight = getApp().globalData.statusBarHeight;
        this.setData({
            headerHeight: statusBarHeight + 44,
            statusBarHeight: statusBarHeight,
        })
    }
});
