// 世界环球旅行家 - 亚洲国家文化数据
// 图片使用 Unsplash Source API: https://source.unsplash.com/{width}x{height}/?{keywords}

const WORLD_CULTURE_DATA = {
  // ===== 东亚 =====
  'china': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '长城是世界七大奇迹之一', img: 'great-wall-of-china', desc: '长城像一条巨龙蜿蜒在山上，全长超过2万公里！它是由很多很多石头一块一块堆起来的，古代人为了保护家园建造了它。' },
        { text: '拥有5000年悠久文明历史', img: 'forbidden-city', desc: '故宫是古代皇帝住的地方，有9999间房子！传说天上的玉皇大帝有1万间房子，所以地上的皇帝只能少一间。' },
        { text: '四大发明改变世界', img: 'ancient-china', desc: '中国古人发明了造纸术、印刷术、火药和指南针。没有它们，我们现在可能还在用竹子写字呢！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '北京烤鸭皮脆肉嫩', img: 'peking-duck', desc: '烤鸭的皮又脆又香，蘸上甜面酱，用薄饼卷起来吃，咬一口满嘴都是香味！据说已经有几百年历史啦。' },
        { text: '饺子象征团圆', img: 'chinese-dumplings', desc: '饺子的形状像古代的金元宝，过年吃饺子意味着"招财进宝"。最有趣的是，有的饺子里会藏着一枚硬币！' },
        { text: '火锅热闹又美味', img: 'chinese-hotpot', desc: '火锅就是把各种好吃的放在热汤里涮一涮，大家围坐在一起，边吃边聊，超级热闹！冬天吃最暖和了。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '春节是最重要的节日', img: 'chinese-new-year', desc: '春节又叫过年，传说很久以前有个叫"年"的怪兽，人们发现它怕红色和响声，所以就有了贴春联和放鞭炮的习俗！' },
        { text: '舞龙舞狮祈求吉祥', img: 'dragon-dance', desc: '舞龙舞狮时，人们穿着彩色服装，跟着鼓点舞动，好像龙和狮子真的活了一样！据说能带来好运气呢。' },
        { text: '中秋节赏月吃月饼', img: 'mid-autumn-festival', desc: '中秋节的月亮特别圆，家人聚在一起吃月饼、看月亮。月饼圆圆的，象征着团圆和美满！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '乒乓球被称为国球', img: 'table-tennis', desc: '中国乒乓球队是世界最强的！那个小小的球在球桌上飞来飞去，运动员的反应速度比眨眼还快，太厉害了！' },
        { text: '武术是传统体育项目', img: 'kung-fu', desc: '武术有很多流派，比如少林功夫、太极拳。练习武术不仅能强身健体，还能像功夫电影里那样帅气！' },
        { text: '羽毛球实力强劲', img: 'badminton', desc: '羽毛球是最快的球类运动之一，专业选手打出的球速度能达到400公里每小时，比高铁还快！' }
      ]
    }
  },

  'japan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '富士山是日本的象征', img: 'mount-fuji', desc: '富士山是一座漂亮的圆锥形火山，山顶常年积雪。它是日本最高的山，有3776米高，相当于1000多层楼那么高！' },
        { text: '古老的神社遍布全国', img: 'japan-shrine', desc: '日本的神社有独特的红色大门叫"鸟居"，传说是神和人之间的分界线。走过鸟居就进入神的世界啦！' },
        { text: '武士道精神影响深远', img: 'samurai-japan', desc: '日本武士就像古代的超级英雄！他们头戴头盔、手持武士刀，遵守着勇敢、忠诚、正义的武士道精神。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '寿司是最著名的料理', img: 'sushi', desc: '寿司就是把生鱼片放在醋饭上，看起来简单但制作很有讲究！好的寿司师傅要学习很多年才能出师呢。' },
        { text: '拉面种类繁多', img: 'ramen-noodles', desc: '日本拉面有豚骨、味噌、酱油等多种口味，每个地区都有自己的特色。吸溜吸溜吃面在日本是礼貌的表现哦！' },
        { text: '天妇罗外酥里嫩', img: 'tempura', desc: '天妇罗是把虾、蔬菜等裹上薄薄的面衣油炸，外酥里嫩，蘸着特制酱汁吃，酥脆可口不油腻！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '樱花季赏花踏青', img: 'cherry-blossom', desc: '每年春天，日本的樱花盛开，粉色的花瓣像雪一样飘落。人们会在樱花树下野餐，这叫"花见"，超级浪漫！' },
        { text: '七夕节许愿祈福', img: 'tanabata-festival', desc: '七夕节那天，人们把愿望写在彩色纸条上，挂在竹子上。传说牛郎和织女在这一天会在银河相会！' },
        { text: '盂兰盆节祭祖扫墓', img: 'obon-festival', desc: '盂兰盆节是纪念祖先的节日，人们相信祖先的灵魂会在这天回家团聚。还会跳一种特别的舞蹈呢！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '柔道起源于日本', img: 'judo', desc: '柔道是日本的武术，讲究"以柔克刚"。看起来温柔的名字，其实是一门很厉害的格斗技术！' },
        { text: '相扑是国技', img: 'sumo-wrestling', desc: '相扑选手体型超大，穿着传统的兜裆布进行比赛。他们每天要吃很多很多才能保持体型，饭量是普通人的好几倍！' },
        { text: '棒球非常受欢迎', img: 'baseball-japan', desc: '棒球是日本最受欢迎的运动之一，每到比赛季节，球迷们会为自己的队伍疯狂加油，气氛超级热烈！' }
      ]
    }
  },

  'south-korea': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '景福宫历史悠久', img: 'gyeongbokgung-palace', desc: '景福宫是古代朝鲜王朝的皇宫，名字取自"诗经"中的"君子万年，介尔景福"。每天都有穿着古装的守卫换岗表演！' },
        { text: '韩服是传统服饰', img: 'hanbok-korea', desc: '韩服色彩鲜艳，女生的裙子蓬蓬的，男生穿宽松的裤子。穿上韩服就像穿越到古代韩剧里一样！' },
        { text: '儒家文化影响深远', img: 'confucian-temple', desc: '韩国很重视儒家文化，讲究尊敬长辈、孝顺父母。吃饭时要等长辈先动筷子，这是基本的礼貌哦！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '泡菜是餐桌必备', img: 'kimchi', desc: '韩国人几乎每顿饭都离不开泡菜！泡菜是用白菜腌制发酵的，酸辣爽口，据说韩国人一年要吃掉几百万吨泡菜！' },
        { text: '烤肉香气四溢', img: 'korean-bbq', desc: '韩式烤肉用特制的炭火烤制，肉片在铁板上滋滋作响，香气扑鼻。用生菜包着肉吃，既健康又美味！' },
        { text: '拌饭营养均衡', img: 'bibimbap', desc: '石锅拌饭把各种蔬菜、肉、鸡蛋放在热腾腾的石锅里，拌着吃，锅底还会形成香脆的锅巴，超好吃！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '春节家人团聚', img: 'korean-new-year', desc: '韩国人过春节要穿韩服、给长辈拜年，还能收到压岁钱！他们吃的是年糕汤，代表长了一岁。' },
        { text: '中秋节祭祖团圆', img: 'chuseok-korea', desc: '中秋节是韩国最重要的节日之一，人们回乡祭祖、吃松饼（一种用米粉做的传统糕点），感恩丰收。' },
        { text: '元宵节放风筝', img: 'kite-festival', desc: '元宵节那天，人们会放风筝、烧月亮房，祈求新的一年平安顺利。夜空中的风筝像星星一样漂亮！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '跆拳道享誉世界', img: 'taekwondo', desc: '跆拳道是韩国的国术，强调"礼义廉耻"。练习者穿着白色道服，用脚踢和手击，动作帅气有力！' },
        { text: '足球实力强劲', img: 'soccer-korea', desc: '韩国足球队是亚洲最强的队伍之一，曾经进入世界杯四强！球迷们整齐的呐喊助威声震耳欲聋。' },
        { text: '射箭多次夺冠', img: 'archery', desc: '韩国射箭队在奥运会上几乎包揽金牌！他们的射箭技术太厉害了，被称为"梦之队"。' }
      ]
    }
  },

  'north-korea': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '朝鲜半岛历史悠久', img: 'korean-history', desc: '朝鲜有着悠久的五千年历史，古代朝鲜人民创造了灿烂的文化和建筑，留下了很多珍贵的历史遗迹。' },
        { text: '金刚山风景秀丽', img: 'kumgang-mountain', desc: '金刚山被称为"朝鲜第一名山"，山峰奇特、景色优美。山上的岩石形状各异，有的像动物，有的像人物。' },
        { text: '传统建筑风格独特', img: 'korean-architecture', desc: '朝鲜的传统建筑有独特的飞檐翘角，屋顶弯弯的像鸟儿展翅。彩绘梁柱上画着美丽的花纹和图案。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '冷面清凉爽口', img: 'naengmyeon', desc: '朝鲜冷面用荞麦面做成，配上冰凉的牛肉汤，夏天吃特别解暑！面条又细又韧，要用剪刀剪断才能吃。' },
        { text: '泡菜风味独特', img: 'kimchi-north', desc: '朝鲜泡菜口味偏清淡，酸爽可口。每个家庭都有自己独特的腌制秘方，代代相传。' },
        { text: '打糕是传统点心', img: 'korean-rice-cake', desc: '打糕是用糯米做的传统糕点，软糯香甜。制作时要用木槌反复捶打，所以才叫"打糕"。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '春节是最重要的节日', img: 'korean-new-year', desc: '朝鲜人过春节要穿新衣服、给长辈拜年，全家团聚吃年夜饭。孩子们还会玩跳板、放风筝等传统游戏。' },
        { text: '阿里郎节规模盛大', img: 'arirang-festival', desc: '阿里郎节是朝鲜最盛大的节日，有十万人参加的大型团体操表演，场面壮观得像电影特效！' },
        { text: '秋夕祭祖扫墓', img: 'chuseok', desc: '秋夕这天，人们回到家乡祭拜祖先，扫墓祭奠，感恩先人的庇佑，是一家团圆的重要日子。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '跆拳道是传统武术', img: 'taekwondo', desc: '跆拳道在朝鲜非常普及，从小就开始练习。它是奥运会正式比赛项目，踢腿动作特别帅气！' },
        { text: '举重成绩优异', img: 'weightlifting', desc: '朝鲜举重运动员在国际比赛中屡获金牌，他们从小接受严格训练，力量惊人！' },
        { text: '体操表现出色', img: 'gymnastics', desc: '朝鲜体操选手动作优美、技术精湛，在世锦赛上多次获奖。他们的训练非常刻苦认真。' }
      ]
    }
  },

  'mongolia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '成吉思汗统一蒙古', img: 'genghis-khan', desc: '成吉思汗是蒙古的英雄，他统一了蒙古各部落，建立了横跨欧亚的庞大帝国，是历史上最大的帝国之一！' },
        { text: '蒙古帝国曾横跨欧亚', img: 'mongol-empire', desc: '蒙古帝国最强大时，从中国一直延伸到欧洲！蒙古骑兵骑着快马，征服了大半个世界。' },
        { text: '草原游牧文化深厚', img: 'mongolian-steppe', desc: '蒙古草原辽阔无边，蓝天白云下牛羊成群。蒙古人世代过着游牧生活，住在可以移动的蒙古包里。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤全羊是传统大餐', img: 'roasted-lamb', desc: '烤全羊是蒙古最隆重的大餐，把整只羊放在火上慢慢烤，外皮金黄酥脆，里面鲜嫩多汁！' },
        { text: '奶茶咸香可口', img: 'mongolian-tea', desc: '蒙古奶茶是咸的！用砖茶、牛奶和盐煮成，冬天喝一碗浑身暖洋洋的，是蒙古人每天必备的饮品。' },
        { text: '奶豆腐是特色小吃', img: 'mongolian-cheese', desc: '奶豆腐是用牛奶做的传统小吃，白白的、软软的，有点像奶酪但更筋道，营养很丰富！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '那达慕大会盛大', img: 'naadam-festival', desc: '那达慕是蒙古最盛大的节日，有骑马、摔跤、射箭三项传统比赛。选手们身穿漂亮的民族服装参赛！' },
        { text: '白月节是新年', img: 'tsagaan-sar', desc: '白月节是蒙古的新年，人们穿新衣、走亲访友、吃传统美食，祝彼此新年快乐！' },
        { text: '摔跤比赛精彩', img: 'mongolian-wrestling', desc: '蒙古摔跤很特别，选手穿着敞开的短上衣比赛。摔跤手在蒙古地位很高，备受尊敬！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '骑马是基本技能', img: 'horse-riding', desc: '蒙古人从小就会骑马，像骑自行车一样熟练！草原上的孩子三四岁就开始学骑马了。' },
        { text: '射箭是传统项目', img: 'archery-mongolia', desc: '蒙古弓箭手传统上用反曲弓，射程很远很准。古代蒙古骑兵的射箭技术曾让敌人闻风丧胆！' },
        { text: '摔跤比赛激烈', img: 'mongolian-wrestling', desc: '蒙古摔跤规则是让对方身体任何部位着地就赢了。摔跤手身材魁梧，力量惊人！' }
      ]
    }
  },

  // ===== 南亚 =====
  'india': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '泰姬陵是世界遗产', img: 'taj-mahal', desc: '泰姬陵是一位皇帝为爱妻建造的陵墓，用了2万多名工人、花费22年才建成！它被叫做"永恒的泪珠"，你觉得像吗？' },
        { text: '恒河是圣河', img: 'ganges-river', desc: '恒河全长2500多公里，被印度人称为"母亲河"。每天都有很多人在河边祈祷、洗澡，非常神圣！' },
        { text: '佛教起源于此', img: 'buddhism-india', desc: '佛教在2500多年前诞生于印度，佛陀就在一棵菩提树下悟道成佛。现在全世界有5亿多佛教徒呢！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '咖喱种类繁多', img: 'indian-curry', desc: '印度咖喱不是一种调料，而是用几十种香料混合成的！每家店的味道都不一样，你想尝尝吗？' },
        { text: '飞饼香脆可口', img: 'indian-bread', desc: '印度飞饼会在空中飞来飞去！做饼师傅把面团甩得薄如纸张，在空中旋转，像变魔术一样精彩！' },
        { text: '奶茶香料浓郁', img: 'chai-tea', desc: '印度奶茶加了很多香料，有姜、肉桂、豆蔻等。一天要喝好几杯，比咖啡还受欢迎呢！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '排灯节灯火辉煌', img: 'diwali', desc: '排灯节时，家家户户都点起油灯和蜡烛，整个印度像星星海洋一样亮闪闪的！人们还会放烟花庆祝。' },
        { text: '洒红节色彩缤纷', img: 'holi-festival', desc: '洒红节是印度的"泼粉节"！大家互相撒彩色粉末，几分钟后每个人都变成"彩虹人"啦！' },
        { text: '瑜伽发源于此', img: 'yoga-india', desc: '瑜伽有5000多年历史，是印度的国宝！它能让人身心放松，现在全世界都在练习瑜伽呢。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球是最受欢迎的运动', img: 'cricket-india', desc: '板球在印度就像足球在其他国家一样疯狂！一场比赛可以打5天，球迷们从头看到尾，太热情了！' },
        { text: '曲棍球成绩优异', img: 'field-hockey', desc: '印度曲棍球队曾经8次夺得奥运金牌！球员们挥舞球杆，像跳舞一样优雅地运球过人。' },
        { text: '卡巴迪是传统项目', img: 'kabaddi', desc: '卡巴迪是一种"抓人游戏"！进攻方要憋气跑进对方区域抓人，还要不断喊"卡巴迪"，太好玩了！' }
      ]
    }
  },

  'pakistan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '摩亨佐达罗古城遗址', img: 'mohenjo-daro', desc: '这座古城有4500多年历史，比金字塔还古老！古人建造了完整的下水道系统，太聪明了！' },
        { text: '伊斯兰建筑精美', img: 'badshahi-mosque', desc: '巴德夏希清真寺能容纳10万人同时祈祷！红色砂岩建造，配上白色圆顶，美得像童话城堡。' },
        { text: '犍陀罗艺术独特', img: 'gandhara-art', desc: '犍陀罗艺术把希腊和印度风格融合在一起，佛像有卷发、高鼻子，像西方雕塑一样帅气！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串香气扑鼻', img: 'seekh-kebab', desc: '巴基斯坦烤肉串在炭火上滋滋作响，撒上秘制香料，咬一口满嘴都是烟熏香味！' },
        { text: '炖肉浓郁可口', img: 'pakistani-curry', desc: '炖肉要用慢火炖好几个小时，肉变得软烂入味，配上一盘香喷喷的米饭，超级下饭！' },
        { text: '烤饼是主食', img: 'naan-bread', desc: '烤饼在传统泥炉里烤制，出炉时鼓得像个气球！撕下一块蘸咖喱吃，外酥里软太香了。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节欢庆', img: 'eid-festival', desc: '开斋节标志斋月结束，家家户户穿上新衣服，做美味的甜食，孩子们收到礼物开心极了！' },
        { text: '独立日盛大游行', img: 'pakistan-independence', desc: '独立日那天，整个国家都飘扬着绿色国旗，烟花绽放，人们唱歌跳舞庆祝国家生日！' },
        { text: '婚礼热闹非凡', img: 'pakistani-wedding', desc: '巴基斯坦婚礼要庆祝好几天！新郎骑着装饰华丽的马，新娘穿红色礼服，宾客跳舞到深夜。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球最受欢迎', img: 'cricket', desc: '板球在巴基斯坦是全民运动！小朋友在街头巷尾打球，长大后梦想成为国家队英雄。' },
        { text: '曲棍球曾获冠军', img: 'hockey-pakistan', desc: '巴基斯坦曲棍球队曾4次获得世界杯冠军！球员们配合默契，球在他们脚下像长了眼睛。' },
        { text: '壁球实力强劲', img: 'squash', desc: '巴基斯坦出过很多壁球世界冠军！在狭小的场地里，球员跑动如飞，速度快得让你眼花缭乱。' }
      ]
    }
  },

  'bangladesh': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '孟加拉虎是国宝', img: 'bengal-tiger', desc: '孟加拉虎是世界上最大的猫科动物，一只老虎的体重能达到250公斤！它是力量和勇气的象征。' },
        { text: '孙德尔本斯红树林', img: 'sundarbans', desc: '这是世界上最大的红树林，面积相当于10万个足球场！里面住着老虎、鳄鱼和很多珍稀动物。' },
        { text: '孟加拉语诗歌丰富', img: 'bengali-literature', desc: '孟加拉语有着千年历史，诗人泰戈尔用它写诗，还获得了诺贝尔奖！你知道诗歌能变成歌吗？' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '鱼肉咖喱鲜美', img: 'fish-curry-bangladesh', desc: '孟加拉人太爱吃鱼了，有句俗话叫"鱼和水就是孟加拉"！咖喱鱼配上米饭，是餐桌上的明星。' },
        { text: '手抓饭是传统', img: 'biryani', desc: '手抓饭用香料和鸡肉一起焖煮，米饭染成金黄色，香喷喷的！用手抓着吃，据说更香哦！' },
        { text: '甜点种类繁多', img: 'bengali-sweets', desc: '孟加拉甜点多达上百种！最出名的是奶球泡在糖浆里，甜甜糯糯，一口一个停不下来。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '孟加拉新年欢乐', img: 'bengali-new-year', desc: '孟加拉新年那天，大街上都是穿红白衣服的人！大家唱歌跳舞游行，还吃传统美食庆祝。' },
        { text: '开斋节重要', img: 'eid-bangladesh', desc: '开斋节是孟加拉最重要的节日之一，人们穿上新衣服，全家团聚吃大餐，孩子们开心收礼物！' },
        { text: '杜尔迦节热闹', img: 'durga-puja', desc: '杜尔迦节是敬拜女神的节日，人们制作精美的女神像，节日结束时放到河里漂流，非常壮观！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球发展迅速', img: 'cricket-bangladesh', desc: '孟加拉板球队近年来进步飞快！他们击败过很多强队，被称为"猛虎"，让对手都刮目相看。' },
        { text: '足球历史悠久', img: 'football-bangladesh', desc: '足球在孟加拉非常受欢迎，街头巷尾都能看到孩子们踢球的身影，梦想成为足球明星！' },
        { text: '卡巴迪受欢迎', img: 'kabaddi', desc: '卡巴迪是南亚传统运动，像捉迷藏又像摔跤！进攻方要深呼吸冲进对方场地抓人，刺激极了。' }
      ]
    }
  },

  'sri-lanka': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '锡兰红茶闻名世界', img: 'ceylon-tea', desc: '斯里兰卡红茶又叫锡兰红茶，每年出口3亿多公斤！英国女王都爱喝，是世界上最好的红茶之一。' },
        { text: '狮子岩宏伟壮观', img: 'sigiriya', desc: '狮子岩是一块200米高的大石头，古人在上面建了一座宫殿！要爬1200级台阶才能上去，太神奇了！' },
        { text: '佛牙寺神圣庄严', img: 'temple-tooth', desc: '佛牙寺供奉着佛陀的一颗牙齿，是佛教徒心中的圣地！每天都有成千上万的人来祈祷参拜。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '椰子饭香糯可口', img: 'coconut-rice', desc: '斯里兰卡盛产椰子，椰子饭用椰奶煮成，每一粒米都带着淡淡椰香，好吃到停不下来！' },
        { text: '咖喱风味独特', img: 'sri-lankan-curry', desc: '斯里兰卡咖喱加入了很多本地香料，还有烤过的椰子碎，味道层次丰富，辣得过瘾！' },
        { text: '海鲜新鲜美味', img: 'seafood-sri-lanka', desc: '作为一个岛国，斯里兰卡的海鲜超级新鲜！螃蟹、虾、鱼现捞现做，鲜美无比。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '新年节欢庆', img: 'sinhala-new-year', desc: '斯里兰卡新年通常在4月，人们玩传统游戏、吃甜食，还要在吉时点燃炉火煮第一锅牛奶！' },
        { text: '灯节灯火通明', img: 'vesak-festival', desc: '灯节是纪念佛陀的重要节日，满大街都是彩灯和灯笼，晚上整座城市像星星海洋一样璀璨！' },
        { text: '大象节热闹', img: 'esala-perahera', desc: '大象节是斯里兰卡最盛大的游行！装饰华丽的大象走在队伍最前面，后面是跳舞和击鼓的人群。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球实力强劲', img: 'cricket-sri-lanka', desc: '斯里兰卡板球队虽然来自小国，但实力超强！他们1996年夺得过世界冠军，创造了奇迹。' },
        { text: '橄榄球发展良好', img: 'rugby-sri-lanka', desc: '橄榄球在斯里兰卡很受欢迎，学校之间经常举办比赛，球员们在场上冲撞拼搏，热血沸腾！' },
        { text: '田径项目出色', img: 'athletics', desc: '斯里兰卡在短跑项目上表现出色，出过亚运会冠军！运动员们刻苦训练，为国争光。' }
      ]
    }
  },

  'nepal': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '珠穆朗玛峰在此', img: 'mount-everest', desc: '珠穆朗玛峰是世界最高峰，海拔8848米！它相当于2000多座30层楼高，每年还在"长高"约4毫米呢！' },
        { text: '加德满都谷地古老', img: 'kathmandu', desc: '加德满都有超过2000年历史，城里有七处世界遗产！古老寺庙和佛塔随处可见，像座露天博物馆。' },
        { text: '佛教发源地之一', img: 'lumbini', desc: '佛陀出生在尼泊尔的蓝毗尼，现在那里是世界佛教徒的圣地！每年有上百万人来朝圣祈祷。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '饺子叫Momo', img: 'momo-dumpling', desc: 'Momo是尼泊尔版饺子，有蒸的和炸的两种！蘸着香辣酱吃，一个接一个根本停不下来。' },
        { text: '手抓饭是传统', img: 'dal-bhat', desc: '手抓饭是尼泊尔的国民美食，扁豆汤配米饭，加上蔬菜和咖喱，营养又美味，当地人每天都要吃！' },
        { text: '奶茶香甜可口', img: 'nepali-tea', desc: '尼泊尔奶茶用红茶加牛奶和香料煮成，爬山累了喝一杯热乎乎的奶茶，瞬间元气满满！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '达善节是最重要的节日', img: 'dashain-festival', desc: '达善节要庆祝15天，是尼泊尔最长的节日！人们回家团聚，长辈会在晚辈额头上点红tika祝福。' },
        { text: '灯节色彩缤纷', img: 'tihar-festival', desc: '灯节是敬拜动物和财富女神的节日，家里点满油灯，还要给狗、牛和乌鸦戴上花环感谢它们！' },
        { text: '洒红节欢乐', img: 'holi-nepal', desc: '洒红节那天，人们互相泼彩色粉末和水，整条街变成彩色的海洋，所有人都玩成"花脸猫"！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '登山运动发达', img: 'mountaineering', desc: '尼泊尔是世界登山胜地，夏尔巴人是登山高手！他们能在没有氧气的情况下攀登珠峰，太厉害了。' },
        { text: '板球发展迅速', img: 'cricket-nepal', desc: '尼泊尔板球近年来快速发展，虽然国家小，但球员们拼劲十足，球迷热情不输大国！' },
        { text: '足球受欢迎', img: 'football-nepal', desc: '足球在尼泊尔很受欢迎，孩子们在街头巷尾踢球，梦想有一天能代表国家出战世界杯！' }
      ]
    }
  },

  // ===== 东南亚 =====
  'thailand': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '大皇宫金碧辉煌', img: 'grand-palace', desc: '大皇宫是泰国国王的宫殿，金光闪闪，像是用黄金建造的！里面有无数座华丽的建筑，装饰着闪闪发光的宝石和黄金。' },
        { text: '泰国寺庙众多', img: 'thai-temple', desc: '泰国有超过4万座寺庙！每座寺庙都有金色尖顶，阳光下闪闪发光。进寺庙要脱鞋、不能穿短裤，这是对佛像的尊重。' },
        { text: '大象是吉祥物', img: 'thai-elephant', desc: '大象是泰国的国宝，被视为神圣动物。泰国大象会画画、踢足球、跳舞，超级聪明！大象节时它们还会参加游行。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '冬阴功汤酸辣', img: 'tom-yum', desc: '冬阴功汤是泰国最有名的汤，酸酸辣辣特别开胃！里面有虾、蘑菇和香茅，喝一口就让人精神百倍！' },
        { text: '芒果糯米饭香甜', img: 'mango-rice', desc: '芒果糯米饭是泰国最甜的美食！新鲜芒果配上椰奶糯米饭，甜甜的、香香的，是夏天最受欢迎的甜品。' },
        { text: '泰式炒河粉', img: 'pad-thai', desc: '泰式炒河粉是泰国的"国民美食"，街边小摊随处可见。河粉配上虾、豆芽和花生碎，酸甜咸辣一应俱全！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '泼水节欢乐无比', img: 'songkran', desc: '泼水节是泰国新年，人们拿着水枪、水盆互相泼水！泼水代表洗去霉运，被泼得越湿运气越好！' },
        { text: '水灯节浪漫', img: 'loy-krathong', desc: '水灯节晚上，人们把装饰着鲜花和蜡烛的水灯放入河中。满河的灯火像星星一样，美得像童话世界！' },
        { text: '象节热闹非凡', img: 'elephant-festival', desc: '大象节那天，大象们穿上华丽的衣服参加游行和比赛。它们会踢足球、画画、拔河，展示各种本领！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '泰拳是国技', img: 'muay-thai', desc: '泰拳是泰国的传统武术，可以用拳、脚、肘、膝八个部位攻击，被称为"八肢武术"，威力十足！' },
        { text: '藤球技巧高超', img: 'sepak-takraw', desc: '藤球是用脚踢的排球，不能用手！选手们做着各种高难度动作，倒挂金钩、空中翻滚，像武术一样精彩！' },
        { text: '排球发展良好', img: 'volleyball-thailand', desc: '泰国女排在亚洲很有名，队员们身材不高但技术精湛，曾多次获得亚洲冠军，被称为"小巨人"！' }
      ]
    }
  },

  'vietnam': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '下龙湾风景如画', img: 'halong-bay', desc: '下龙湾有1600多座石灰岩小岛，像一颗颗翡翠散落在海上！传说是一条龙创造了这些岛屿，你相信吗？' },
        { text: '古都顺化历史悠久', img: 'hue-vietnam', desc: '顺化皇城是古代越南皇帝的家，有148座建筑！它是仿照北京故宫建造的，像一个缩小版的紫禁城。' },
        { text: '会安古镇古色古香', img: 'hoi-an', desc: '会安古镇有400多年历史，街上挂满五颜六色的灯笼！每到夜晚，灯笼亮起来，整个小镇像童话世界。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '河粉汤鲜味美', img: 'pho', desc: '越南河粉汤头要用牛骨熬10个小时以上！汤清味鲜，挤点柠檬汁更美味，是越南人的早餐首选。' },
        { text: '春卷清爽可口', img: 'vietnamese-spring-roll', desc: '越南春卷皮是透明的，能看见里面五颜六色的馅料！不用油炸，包上虾和蔬菜，清爽又健康。' },
        { text: '滴漏咖啡独特', img: 'vietnamese-coffee', desc: '越南咖啡用小滴漏壶慢慢滴，要等好几分钟才能喝到！加上炼乳，又浓又甜，味道超特别。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '春节是最重要的节日', img: 'tet-festival', desc: '越南春节叫"泰特"，人们会买桃花和金桔树回家！传说桃花能驱邪避凶，带来一整年的好运。' },
        { text: '中秋节赏灯', img: 'mid-autumn-vietnam', desc: '越南中秋节是孩子们的节日！孩子们提着鲤鱼灯笼游街，还会看舞狮表演，热闹又好玩。' },
        { text: '端午节吃粽子', img: 'dragon-boat-vietnam', desc: '越南端午节要吃粽子、喝雄黄酒，还要杀虫驱邪！传说这能保佑身体健康，百病不侵。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球发展迅速', img: 'football-vietnam', desc: '越南足球队被称为"金星战团"，球迷们疯狂支持！主场气氛热烈得像过节，加油声震耳欲聋。' },
        { text: '羽毛球实力强', img: 'badminton-vietnam', desc: '越南羽毛球在东南亚名列前茅！选手们身手敏捷，球拍挥得像闪电，让人眼花缭乱。' },
        { text: '武术是传统项目', img: 'vovinam', desc: '越武道是越南传统武术，可以用拳、脚、肘、膝攻击！动作帅气有力，还融合了柔道和跆拳道。' }
      ]
    }
  },

  'cambodia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '吴哥窟是世界遗产', img: 'angkor-wat', desc: '吴哥窟是世界上最大的宗教建筑群，比巴黎圣母院大好几倍！墙上刻着2000多个仙女浮雕，每个都不一样。' },
        { text: '高棉帝国辉煌历史', img: 'khmer-empire', desc: '高棉帝国曾经统治东南亚大部分地区，有100万人口！那时伦敦还是小村庄，高棉已经是超级大都市了。' },
        { text: '传统舞蹈优美', img: 'apsara-dance', desc: '仙女舞是柬埔寨国宝级舞蹈，舞者手指能向后弯曲到接近手腕！要从小练习才能跳出这么美的舞蹈。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '米线汤是国民美食', img: 'kuy-teav', desc: '柬埔寨米线汤用猪骨熬汤，配上肉片和内脏，撒上葱花和炸蒜末！一碗下肚，浑身暖洋洋的。' },
        { text: '咖喱风味独特', img: 'cambodian-curry', desc: '柬埔寨咖喱比泰国的温和，椰奶香浓郁，配上法式面包蘸着吃，是东西方文化碰撞的美味！' },
        { text: '法式面包受殖民影响', img: 'cambodian-bread', desc: '法式三明治是法国殖民留下的美食，法棍夹着肉和腌菜！酥脆的面包配上酸甜蔬菜，太开胃了。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '新年是最大节日', img: 'khmer-new-year', desc: '柬埔寨新年要庆祝3天！人们泼水祝福、堆沙塔、玩传统游戏，满大街都是欢笑的人群。' },
        { text: '水节庆祝丰收', img: 'water-festival-cambodia', desc: '水节时洞里萨河会倒流！人们划龙舟比赛，晚上还有烟花和灯船游行，整整热闹3天。' },
        { text: '亡人节祭祖', img: 'pchum-ben', desc: '亡人节要连续15天给祖先供奉食物！人们相信祖先会在这段时间回来探望家人，要好好招待。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '传统武术Bokator', img: 'bokator', desc: '斗狮拳有1000多年历史，传说是一位战士打败狮子后创造的！招式模仿动物，威力十足。' },
        { text: '足球发展良好', img: 'football-cambodia', desc: '柬埔寨足球正在快速发展，越来越多孩子爱上踢球！他们梦想有一天能代表国家出战世界杯。' },
        { text: '斗牛是传统活动', img: 'cambodian-boxing', desc: '高棉拳是古老的搏击术，拳手们赤脚对战，拳拳到肉！比赛激烈又刺激，观众热情高涨。' }
      ]
    }
  },

  'laos': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '琅勃拉邦是古城', img: 'luang-prabang', desc: '琅勃拉邦有30多座古老寺庙，整座城都是世界遗产！清晨僧侣托钵化缘，场面神圣又壮观。' },
        { text: '佛教文化深厚', img: 'laos-temple', desc: '老挝男人一生至少要当一次和尚！寺庙里有金色屋顶和彩色壁画，每座都美得像艺术品。' },
        { text: '湄公河流经全境', img: 'mekong-river', desc: '湄公河全长4350公里，是世界上第12长河！老挝人叫它母亲河，河水养育了沿岸的千万人。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '糯米饭是主食', img: 'sticky-rice', desc: '老挝人用手抓糯米饭吃，把饭搓成小球蘸酱料！每个家庭都有专门的竹编糯米饭盒。' },
        { text: '拉普是特色菜', img: 'laap', desc: '拉普是老挝国菜，用碎肉拌香料和柠檬汁，生熟都可以！酸辣开胃，配糯米饭超级好吃。' },
        { text: '米粉汤鲜美', img: 'laos-noodles', desc: '老挝米粉汤加入香草和酸菜，汤头清爽不油腻！加上一点辣椒酱，辣得过瘾又想再喝。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '新年是泼水节', img: 'pi-mai-laos', desc: '老挝新年要庆祝3天，人们互相泼水祝福！还会选宋干小姐，把水倒在她身上祈福。' },
        { text: '塔銮节盛大', img: 'that-luang-festival', desc: '塔銮节时，成千上万的人绕着金色佛塔游行！人们献上鲜花和蜡烛，场面庄严又壮观。' },
        { text: '布施是日常修行', img: 'alms-giving', desc: '每天清晨5点，虔诚的信徒跪在路边给僧侣布施！这个传统已有几百年，是老挝独特的风景。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '藤球是传统运动', img: 'katraw', desc: '老挝藤球用脚踢，不能用手！选手们做着各种高难度动作，像杂技演员一样厉害。' },
        { text: '足球受欢迎', img: 'football-laos', desc: '足球是老挝最流行的运动，孩子们在泥地上也能踢得开心！他们梦想成为国家英雄。' },
        { text: '传统武术盛行', img: 'muay-lao', desc: '老挝拳和泰拳很像，但有自己独特招式！拳手们戴着拳套对战，比赛激烈又精彩。' }
      ]
    }
  },

  'myanmar': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '蒲甘有千座佛塔', img: 'bagan-temples', desc: '蒲甘平原上有2000多座古老佛塔，一字排开！日出时热气球升空，金色的塔尖在晨光中闪闪发光。' },
        { text: '仰光大金塔神圣', img: 'shwedagon-pagoda', desc: '大金塔高112米，塔身贴了27吨黄金！塔顶还有5448颗钻石和2317颗红宝石，闪瞎你的眼！' },
        { text: '茵莱湖风景独特', img: 'inle-lake', desc: '茵莱湖上住着"水上人家"，房子建在木桩上！渔民单脚划船，双手撒网，动作超帅气。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '茶叶沙拉独特', img: 'lahpet-thoke', desc: '茶叶沙拉用发酵茶叶拌坚果和豆子，酸酸的茶叶配脆脆的花生，口感层次丰富又开胃！' },
        { text: '米线是国民美食', img: 'mohinga', desc: '鱼汤米线是缅甸人的早餐最爱，汤头用鱼和香蕉树干熬煮！撒上炸蒜和香草，鲜香无比。' },
        { text: '咖喱饭丰盛', img: 'myanmar-curry', desc: '缅甸咖喱饭有主菜还有无数小菜，像自助餐一样丰富！只要点了咖喱，小菜可以无限续。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '泼水节庆祝新年', img: 'thingyan', desc: '缅甸泼水节持续4-5天，人们疯狂泼水庆祝新年！传说用水洗去过去一年的霉运，迎接好运。' },
        { text: '点灯节璀璨', img: 'taunggyi-balloon', desc: '点灯节时人们放飞巨大的热气球，挂满蜡烛和烟花！夜空中飘满发光的气球，美得像梦境。' },
        { text: '袈裟节布施', img: 'kathina', desc: '袈裟节那天，信徒们给僧侣赠送新袈裟！有些地方还会用布织成超长的袈裟，场面壮观。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '藤球是国球', img: 'chinlone', desc: '缅甸藤球不用对抗，而是围成圈互相传踢！像跳舞一样优美，讲究团队配合和美感。' },
        { text: '传统拳击激烈', img: 'lethwei', desc: '缅甸拳被称为"最凶猛的武术"，除了拳脚，还能用头撞！拳手们赤手空拳对战，超硬核。' },
        { text: '足球发展良好', img: 'football-myanmar', desc: '足球在缅甸非常受欢迎，孩子们从小就在街头踢球！国家队虽然不够强，但球迷热情不减。' }
      ]
    }
  },

  'malaysia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '双子塔是地标', img: 'petronas-towers', desc: '双子塔高452米，曾经是世界最高建筑！两座塔中间有一条空中天桥，站在上面俯瞰城市超刺激。' },
        { text: '多元文化融合', img: 'malaysia-culture', desc: '马来西亚有马来人、华人、印度人三大民族！不同文化和谐共处，节日超级多，一年到头都在庆祝。' },
        { text: '马六甲历史悠久', img: 'malacca', desc: '马六甲有600多年历史，曾是东西方贸易中心！这里融合了葡萄牙、荷兰、英国的建筑风格。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '椰浆饭是国民美食', img: 'nasi-lemak', desc: '椰浆饭用椰奶煮饭，配上小鱼干、花生、黄瓜和辣酱！包在香蕉叶里，香味扑鼻又便宜。' },
        { text: '沙嗲烤肉香', img: 'satay', desc: '沙嗲是马来西亚烤肉串，用特制花生酱蘸着吃！炭火烤得滋滋作响，香气能飘到街尾。' },
        { text: '榴莲是水果之王', img: 'durian', desc: '榴莲被称为水果之王，闻着臭吃着香！马来西亚猫山王榴莲最出名，价格比肉还贵。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节盛大', img: 'eid-malaysia', desc: '开斋节是马来西亚最盛大的节日！人们穿上传统服装，开门迎客，美食摆满桌，太丰盛了。' },
        { text: '春节热闹', img: 'chinese-new-year-malaysia', desc: '马来西亚华人过年要捞生——大家用筷子捞鱼生沙拉，捞越高越好运！这是独特的马来西亚习俗。' },
        { text: '屠妖节色彩缤纷', img: 'deepavali-malaysia', desc: '屠妖节时印度人家家户户点起油灯，地上画着美丽的彩绘图案！寺庙里挤满祈福的人群。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '羽毛球实力强劲', img: 'badminton-malaysia', desc: '马来西亚羽毛球世界闻名，出过很多世界冠军！球迷们看比赛时紧张得大气都不敢出。' },
        { text: '足球受欢迎', img: 'football-malaysia', desc: '马来西亚足球超级联赛热闹非凡，球迷们敲锣打鼓为球队加油！气氛堪比欧洲大联赛。' },
        { text: '壁球成绩优异', img: 'squash-malaysia', desc: '马来西亚壁球女将曾连续9年世界第一！她们在狭小场地里跑动如飞，反应快得惊人。' }
      ]
    }
  },

  'singapore': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '鱼尾狮是象征', img: 'merlion', desc: '鱼尾狮是新加坡标志，狮头鱼身，嘴里还会喷水！传说一位王子在这里看到狮子，所以叫狮城。' },
        { text: '多元文化和谐', img: 'singapore-culture', desc: '新加坡有华人、马来人、印度人和欧亚人！不同种族和睦相处，四种语言都是官方语言。' },
        { text: '花园城市美誉', img: 'gardens-by-the-bay', desc: '滨海湾花园有18棵超级树，高达50米！晚上灯光亮起，像阿凡达里的奇幻森林。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '海南鸡饭是国菜', img: 'hainanese-chicken-rice', desc: '海南鸡饭是新加坡国菜，鸡肉嫩滑、米饭香喷喷！简单却美味，连外国元首都点名要吃。' },
        { text: '辣椒蟹鲜辣', img: 'chilli-crab', desc: '辣椒蟹是新加坡招牌菜，大螃蟹裹着酸甜辣酱！要用手抓着吃，吮指回味无穷。' },
        { text: '肉骨茶滋补', img: 'bak-kut-teh', desc: '肉骨茶用猪骨和中药材熬煮，汤头浓郁！新加坡人当早餐吃，一碗下肚精力充沛。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '春节盛大庆祝', img: 'chinese-new-year-singapore', desc: '新加坡春节时牛车水张灯结彩，还有巨型灯饰和舞狮表演！热闹程度不输中国国内。' },
        { text: '开斋节重要', img: 'eid-singapore', desc: '开斋节时芽笼士那变成彩灯海洋！人们穿上传统马来服装，走亲访友，小孩开心收红包。' },
        { text: '屠妖节璀璨', img: 'deepavali-singapore', desc: '屠妖节时小印度挂满彩灯和油灯，亮得像白天一样！街上还有游行和表演，热闹非凡。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '乒乓球成绩优异', img: 'table-tennis-singapore', desc: '新加坡女乒曾是奥运银牌得主！小小国家能在乒坛称霸亚洲，太厉害了。' },
        { text: '游泳培养出色', img: 'swimming-singapore', desc: '新加坡游泳选手在奥运拿过金牌！他们从小接受专业训练，在泳池里如鱼得水。' },
        { text: '帆船发展良好', img: 'sailing-singapore', desc: '作为岛国，新加坡帆船运动发达！选手们乘风破浪，在海面上飞驰，帅气十足。' }
      ]
    }
  },

  'indonesia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '巴厘岛是旅游胜地', img: 'bali-temple', desc: '巴厘岛有神仙岛之称，满岛都是精美寺庙！每家每户都有神龛，每天都要献花祈祷。' },
        { text: '婆罗浮屠宏伟', img: 'borobudur', desc: '婆罗浮屠是世界最大佛教寺庙，有1200多年历史！塔上有504座佛像和2672块浮雕，太壮观了。' },
        { text: '万岛之国', img: 'indonesia-islands', desc: '印度尼西亚有17000多个岛屿，是全世界最大的群岛国家！岛屿像珍珠项链一样散落在赤道上。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '炒饭是国民美食', img: 'nasi-goreng', desc: '印尼炒饭用甜酱油炒制，颜色深味道香！配上煎蛋和虾片，简单却好吃到让人想打包。' },
        { text: '沙嗲烤串香', img: 'satay-indonesia', desc: '印尼沙嗲用椰子壳炭火烤，配上花生酱！街边小摊一份只要几块钱，便宜又美味。' },
        { text: '仁当牛肉浓郁', img: 'rendang', desc: '仁当牛肉被评选为世界最美味食物第一名！用椰奶和香料慢炖几个小时，香浓入味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日盛大游行', img: 'indonesia-independence', desc: '独立日那天，全国举行盛大游行和表演！孩子们穿上民族服装，载歌载舞庆祝国家生日。' },
        { text: '开斋节重要', img: 'eid-indonesia', desc: '印尼是世界最大穆斯林国家，开斋节全国放假！人们返乡团聚，还做一种叫Ketupat的粽子。' },
        { text: '巴厘岛静居日', img: 'nyepi', desc: '静居日那天全岛禁火、禁声、不出门！连机场都关闭24小时，全岛进入静默，太独特了。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '羽毛球是国球', img: 'badminton-indonesia', desc: '印尼羽毛球世界顶尖，拿过很多奥运金牌！球迷们疯狂支持，主场加油声震耳欲聋。' },
        { text: '足球最受欢迎', img: 'football-indonesia', desc: '印尼球迷是亚洲最热情的之一！主场比赛时观众席像火山爆发，气氛热烈到爆炸。' },
        { text: '传统武术Pencak Silat', img: 'pencak-silat', desc: '印尼传统武术融合了格斗和舞蹈，动作优美又实用！现在已经传到世界各地。' }
      ]
    }
  },

  'philippines': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '巴里卡萨岛风景秀丽', img: 'philippines-island', desc: '菲律宾有7641个岛屿，被称为"海岛天堂"！碧蓝的海水、洁白的沙滩，美得像明信片。' },
        { text: '西班牙殖民历史', img: 'intramuros', desc: '马尼拉古城墙有400多年历史，是西班牙殖民者建造的！石墙和教堂充满欧洲风情。' },
        { text: '千岛之国', img: 'philippines-beach', desc: '菲律宾由7641个岛屿组成，数量惊人！有些小岛退潮时才出现，涨潮就消失在海里。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤乳猪是宴席主菜', img: 'lechon', desc: '菲律宾烤乳猪是宴会主角，整只猪在炭火上旋转烤制！皮脆肉嫩，连骨头都能嚼碎吃掉。' },
        { text: '阿多波是国民菜', img: 'adobo', desc: '阿多波用酱油和醋炖肉，酸甜咸香！每个家庭都有独特秘方，是菲律宾的灵魂美食。' },
        { text: '芒果甜美多汁', img: 'philippine-mango', desc: '菲律宾芒果被称为"世界最甜芒果"！果肉细腻无纤维，甜度爆表，好吃到停不下来。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣诞季超长', img: 'christmas-philippines', desc: '菲律宾圣诞季从9月开始，持续4个月！是全球圣诞季最长的国家，9月就开始放圣诞歌。' },
        { text: '阿提阿提汉节热闹', img: 'ati-atihan', desc: '阿提阿提汉节是菲律宾最疯狂的节日！人们穿上土著服装，脸上涂黑，跳舞跳到天亮。' },
        { text: '新年庆祝盛大', img: 'new-year-philippines', desc: '菲律宾新年要穿圆点图案衣服，象征财富！还要在午夜跳跳跳，据说能长高带来好运。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '篮球最受欢迎', img: 'basketball-philippines', desc: '菲律宾人疯狂爱篮球，街边到处是篮球场！他们还有亚洲最早的职业篮球联赛。' },
        { text: '拳击世界冠军多', img: 'boxing-philippines', desc: '菲律宾出过8个级别的世界拳王帕奎奥！他是国民英雄，比赛时全国万人空巷守电视。' },
        { text: '台球成绩优异', img: 'billiards', desc: '菲律宾是台球强国，出过很多世界冠军！选手们球技高超，能打出各种神奇角度。' }
      ]
    }
  },

  'brunei': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '水上村落历史悠久', img: 'brunei-water-village', desc: '文莱水上村落有1000多年历史，3万人在水上生活！房屋、学校、清真寺全都建在水上。' },
        { text: '清真寺金碧辉煌', img: 'omar-ali-mosque', desc: '奥马尔清真寺用28克拉黄金打造圆顶，闪耀夺目！它建在人工湖上，倒影美如仙境。' },
        { text: '石油王国富裕', img: 'brunei-oil', desc: '文莱靠石油和天然气成为世界最富国家之一！公民不用交税，看病上学都免费。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '椰浆饭香浓', img: 'nasi-lemak-brunei', desc: '文莱椰浆饭用椰奶和香兰叶煮饭，香气扑鼻！配上小鱼干和辣酱，是当地人的早餐最爱。' },
        { text: '烤串风味独特', img: 'satay-brunei', desc: '文莱沙嗲用牛肉和鸡肉串烤，蘸着花生酱吃！晚上夜市里烤串滋滋作响，香味诱人。' },
        { text: '椰子糕甜香', img: 'wajid', desc: '文莱椰子糕用糯米和椰糖制作，软糯香甜！包在椰叶里，一口一个停不下来。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节重要', img: 'eid-brunei', desc: '文莱是伊斯兰国家，开斋节全国放假庆祝！苏丹还会在皇宫设宴招待民众，大排场阵。' },
        { text: '苏丹诞辰日庆祝', img: 'sultan-birthday', desc: '苏丹诞辰日全国大庆，有游行和表演！苏丹是世界上在位时间最长的君主之一。' },
        { text: '新年庆典', img: 'new-year-brunei', desc: '文莱新年有烟花和庆祝活动，虽然是伊斯兰国家也照样欢庆！人们欢聚一堂迎接新年。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球受欢迎', img: 'football-brunei', desc: '足球在文莱非常受欢迎，孩子们从小踢到大！国家队虽然小，但斗志昂扬。' },
        { text: '藤球是传统', img: 'sepak-takraw-brunei', desc: '文莱藤球和东南亚其他国家一样流行！选手们用脚踢球，动作精彩像杂技表演。' },
        { text: '高尔夫发展良好', img: 'golf-brunei', desc: '文莱有多个世界级高尔夫球场，绿草如茵！苏丹本人就是高尔夫爱好者。' }
      ]
    }
  },

  'timor-leste': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '独立历程艰辛', img: 'timor-leste-independence', desc: '东帝汶是亚洲最年轻的国家，2002年才独立！人们为自由奋斗了几十年，终于建立了自己的国家。' },
        { text: '葡萄牙殖民遗产', img: 'timor-portuguese', desc: '东帝汶曾是葡萄牙殖民地，至今人们还说着葡萄牙语！古老的葡萄牙建筑依然矗立。' },
        { text: '海岸线风景优美', img: 'timor-coast', desc: '东帝汶海岸线有700多公里长，海水清澈见底！海岸边有绝美的悬崖和沙滩。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤鱼新鲜美味', img: 'grilled-fish-timor', desc: '东帝汶的烤鱼现捞现烤，只需要一点盐和柠檬！原汁原味的鲜美，是海边的馈赠。' },
        { text: '玉米是主食', img: 'corn-timor', desc: '玉米是东帝汶人的主食，一日三餐都吃！烤玉米、玉米粥、玉米饼，变着花样做。' },
        { text: '咖啡品质优良', img: 'timor-coffee', desc: '东帝汶咖啡在有机咖啡中享有盛名！山区的火山土壤种出的咖啡豆香味浓郁。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'independence-day-timor', desc: '独立日是东帝汶最重要的节日！人们唱着国歌游行，纪念来之不易的自由。' },
        { text: '圣诞节重要', img: 'christmas-timor', desc: '东帝汶是亚洲唯一以天主教为主的国家！圣诞节隆重庆祝，教堂里挤满了祈祷的人群。' },
        { text: '圣周庆典', img: 'holy-week-timor', desc: '圣周是复活节前的重要节日，人们参加各种宗教仪式！街上还有游行和表演。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-timor', desc: '足球是东帝汶最受欢迎的运动，孩子们在泥地上踢球！他们梦想有一天能踢进世界杯。' },
        { text: '武术发展良好', img: 'martial-arts-timor', desc: '东帝汶传统武术融合了葡萄牙和东南亚风格！年轻人练习武术强身健体。' },
        { text: '篮球有爱好者', img: 'basketball-timor', desc: '篮球在东帝汶也逐渐流行，学校里有篮球场！孩子们课间打球，玩得不亦乐乎。' }
      ]
    }
  },

  // ===== 中亚 =====
  'kazakhstan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '草原游牧传统', img: 'kazakh-steppe', desc: '哈萨克草原面积比整个西欧还大！马背上的民族在这里放牧牛羊，追逐着蓝天白云。' },
        { text: '独立纪念碑宏伟', img: 'kazakhstan-monument', desc: '这座纪念碑高达91米，代表1991年独立！它像一位钢铁巨人守护着首都阿斯塔纳。' },
        { text: '蒙古帝国遗产', img: 'mongol-heritage', desc: '成吉思汗的子孙曾在这里驰骋！他们的故事像草原的风一样流传了800多年。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '手抓饭是传统', img: 'plov', desc: '一盘饭里有羊肉、胡萝卜和香料，手抓着吃才最香！你敢试试用手吃饭吗？' },
        { text: '马肉肠独特', img: 'kazy', desc: '这是用马肉做的香肠！哈萨克人说它比牛肉更香更嫩，你敢尝一口吗？' },
        { text: '奶茶是日常饮品', img: 'kumis', desc: '用马奶发酵做成的饮料，有点酸又有点气泡！哈萨克人夏天每天都要喝上一碗。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纳乌鲁斯节是新年', img: 'nauryz', desc: '每年3月22日，人们跳火堆、吃特别的新年粥，迎接春天的到来！' },
        { text: '猎鹰节传统', img: 'eagle-hunting', desc: '金雕展翅可达2米多！猎人在马背上让老鹰抓狐狸，这传统已经1000多岁了。' },
        { text: '独立日庆祝', img: 'independence-kazakhstan', desc: '12月16日是哈萨克斯坦的生日！全国各地都会举行盛大的庆祝活动。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '拳击成绩优异', img: 'boxing-kazakhstan', desc: '哈萨克拳击手在国际大赛上拿过50多枚奖牌！他们的拳头像草原风暴一样厉害。' },
        { text: '摔跤是传统', img: 'wrestling-kazakhstan', desc: '哈萨克摔跤叫库列什，选手穿着厚厚的衣服比赛，谁能把对手摔倒谁就赢！' },
        { text: '冬季运动发展', img: 'winter-sports', desc: '哈萨克北部冬天零下40度！人们在冰天雪地里滑雪、滑冰，冷也挡不住运动的热情。' }
      ]
    }
  },

  'uzbekistan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '丝绸之路重镇', img: 'silk-road', desc: '2000多年前，骆驼商队带着丝绸和香料从这里走过，这里是东西方贸易的十字路口！' },
        { text: '撒马尔罕古城', img: 'samarkand', desc: '这座城有2700多岁！蓝色的圆顶建筑闪闪发光，像童话里的东方魔法王国。' },
        { text: '帖木儿帝国遗产', img: 'timur-empire', desc: '600多年前，帖木儿大帝建立了横跨亚洲的帝国！他的陵墓至今还闪耀着金色光芒。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '抓饭是国菜', img: 'uzbek-plov', desc: '乌兹别克人说没有抓饭就没有快乐！一锅里能放进半只羊，够全家人吃饱。' },
        { text: '烤包子香脆', img: 'samsa', desc: '三角形的包子在泥炉里烤得金黄酥脆！咬一口，肉汁和香气一起在嘴里爆炸。' },
        { text: '烤肉串美味', img: 'kebab-uzbek', desc: '一串烤肉有半米长！炭火烤得滋滋作响，香料和肉香飘满整条街道。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纳乌鲁斯节盛大', img: 'navruz-uzbek', desc: '新年第一天，人们穿着鲜艳的衣服唱歌跳舞，还会做七种以S开头的菜迎接春天！' },
        { text: '独立日庆祝', img: 'independence-uzbekistan', desc: '9月1日全国欢庆！街道上挂满彩旗，人们载歌载舞庆祝国家的生日。' },
        { text: '开斋节重要', img: 'eid-uzbekistan', desc: '斋月结束后，人们穿上新衣服，走亲访友，分享美食，像过年一样热闹！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-uzbekistan', desc: '乌兹别克足球队是亚洲强队！街头的孩子们都梦想着成为下一个足球明星。' },
        { text: '摔跤是传统', img: 'kurash', desc: '乌兹别克摔跤库拉什有2000多年历史！选手们穿着长袍比赛，看起来像古代武士。' },
        { text: '拳击发展良好', img: 'boxing-uzbekistan', desc: '乌兹别克拳击手在奥运会上拿过多枚金牌！他们的拳头像丝绸一样华丽又有力。' }
      ]
    }
  },

  'turkmenistan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '地毯编织传统', img: 'turkmen-carpet', desc: '土库曼地毯有400多年历史！一个大地毯需要编整整一年，比你的房间还贵！' },
        { text: '古城梅尔夫遗址', img: 'merv', desc: '这座古城曾是世界上最大的城市之一！2000多年前住着50万人，现在只剩下神秘的废墟。' },
        { text: '天然气资源丰富', img: 'turkmen-gas', desc: '土库曼有一个地狱之门——燃烧了50多年的大火坑！地下的天然气让它永不熄灭。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '抓饭是主食', img: 'plov-turkmen', desc: '土库曼人每周至少吃三次抓饭！羊肉和米饭完美融合，一盘就能让你吃撑。' },
        { text: '烤肉串美味', img: 'kebab-turkmen', desc: '沙漠里的烤肉最香！用果木炭火慢慢烤，肉串上的油滴进火里发出滋滋的声音。' },
        { text: '馕是日常主食', img: 'naan-turkmen', desc: '刚出炉的馕又大又圆，像一个金黄色的大盘子！掰开后热气腾腾，越嚼越香。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纳乌鲁斯节盛大', img: 'navruz-turkmen', desc: '新年这天，人们会在地上画出彩色图案，用水浇火堆，祈求新的一年平安幸福！' },
        { text: '独立日庆祝', img: 'independence-turkmenistan', desc: '10月27日是独立日！首都阿什哈巴德会举行盛大的阅兵和烟花表演。' },
        { text: '赛马节传统', img: 'horse-racing-turkmenistan', desc: '土库曼人把马当亲人！著名的阿哈尔捷金马金光闪闪，跑起来像风一样快。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '摔跤是传统', img: 'wrestling-turkmen', desc: '土库曼摔跤在沙漠中进行！选手们光着膀子比试，谁的力气大谁就是英雄。' },
        { text: '足球发展良好', img: 'football-turkmenistan', desc: '虽然人口只有600万，但土库曼人对足球的热情不输任何国家！' },
        { text: '赛马历史悠久', img: 'horse-racing', desc: '阿哈尔捷金马是世界上最古老的马种之一！它们一天能跑100公里，被誉为天马。' }
      ]
    }
  },

  'kyrgyzstan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '伊塞克湖美丽', img: 'issyk-kul', desc: '这个湖有160多公里长！冬天也不会结冰，人们叫它"永不冻结的湖"，像一颗蓝色宝石。' },
        { text: '游牧文化深厚', img: 'nomad-culture', desc: '吉尔吉斯人住圆形的毡房，随时可以拆掉搬家！整个家打包只需要1个小时。' },
        { text: '丝绸之路遗产', img: 'silk-road-kyrgyz', desc: '古代商队骑着骆驼穿过这里的高山峡谷，把中国的丝绸运往西方的罗马帝国！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '手抓饭是传统', img: 'plov-kyrgyz', desc: '吉尔吉斯抓饭里会放进整个羊头！这是招待最尊贵客人的礼节。' },
        { text: '烤肉串香嫩', img: 'shashlik', desc: '山里烤的肉串最香！用野果木当燃料，烤出来的肉带着淡淡果香。' },
        { text: '奶茶是日常', img: 'kumis-kyrgyz', desc: '吉尔吉斯人爱喝发酵的马奶！小小一口又酸又甜，据说能让人身体更健康。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纳乌鲁斯节是新年', img: 'nooruz', desc: '新年这天，人们用麦芽做甜粥，象征生活越来越甜！还会举行传统的骑马比赛。' },
        { text: '猎鹰节传统', img: 'eagle-hunting-kyrgyz', desc: '吉尔吉斯猎人骑着马、手臂上架着金雕！老鹰从空中俯冲抓狐狸，太酷了！' },
        { text: '独立日庆祝', img: 'independence-kyrgyzstan', desc: '8月31日是全国的生日！人们穿上传统服装，在草原上载歌载舞。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '摔跤是传统', img: 'wrestling-kyrgyz', desc: '吉尔吉斯摔跤叫"库列什"，获胜者会得到一匹马或一只羊作为奖品！' },
        { text: '骑马比赛盛行', img: 'horse-games', desc: '马上抢羊比赛最刺激！两支队伍骑着马抢一只羊，抢到并扔进对方"球门"就赢。' },
        { text: '足球发展良好', img: 'football-kyrgyzstan', desc: '吉尔吉斯足球队是亚洲的黑马！他们在雪山上训练，脚下功夫了得。' }
      ]
    }
  },

  'tajikistan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '帕米尔高原壮丽', img: 'pamir-mountains', desc: '帕米尔高原被称为世界屋脊！海拔7000多米的高峰比云还高，山上终年积雪。' },
        { text: '波斯文化影响', img: 'persian-heritage', desc: '塔吉克人说波斯语！他们的诗歌和故事和一千零一夜一样美丽神奇。' },
        { text: '古城杜尚别', img: 'dushanbe', desc: '杜尚别的意思是星期一！因为这里原本是个周一集市，现在变成了美丽首都。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '手抓饭是国菜', img: 'osh', desc: '塔吉克抓饭用黄色的藏红花染成金色！一盘饭里藏着满满的羊肉和胡萝卜。' },
        { text: '烤包子美味', img: 'sambusa', desc: '三角形的烤包子皮脆馅香！里面的羊肉馅加了特别的香料，一口咬下汁水四溢。' },
        { text: '茶是日常饮品', img: 'tajik-tea', desc: '塔吉克人一天要喝七八杯茶！绿茶、红茶、奶茶，来客人必须先敬三杯茶。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纳乌鲁斯节盛大', img: 'navruz-tajik', desc: '新年这天要准备七样以S开头的食物！人们跳传统舞蹈，庆祝春天和新生。' },
        { text: '独立日庆祝', img: 'independence-tajikistan', desc: '9月9日是独立日！首都杜尚别会举行盛大游行和烟花表演庆祝国家生日。' },
        { text: '开斋节重要', img: 'eid-tajikistan', desc: '斋月结束后的开斋节，人们穿上新衣服，走亲访友，孩子们收到礼物特别开心！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-tajikistan', desc: '塔吉克足球正在崛起！孩子们在高山牧场踢球，梦想着有朝一日代表国家出战。' },
        { text: '摔跤是传统', img: 'wrestling-tajik', desc: '塔吉克摔跤手力量惊人！他们在高山上训练，肺活量是平原人的两倍。' },
        { text: '拳击发展良好', img: 'boxing-tajikistan', desc: '塔吉克拳击手在国际赛场上表现出色！他们的拳头带着帕米尔高原的力量。' }
      ]
    }
  },

  // ===== 西亚 =====
  'iran': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '波斯帝国历史悠久', img: 'persepolis', desc: '波斯帝国曾是世界上最大的帝国之一，统治着全球44%的人口！它的首都波斯波利斯有100个柱子的宫殿。' },
        { text: '伊斯法罕清真寺精美', img: 'isfahan-mosque', desc: '这座清真寺的蓝色瓷砖会随光线变色，被称为世界的一半！建造它用了整整400年呢。' },
        { text: '地毯编织世界闻名', img: 'persian-carpet', desc: '一块波斯地毯可能要编好几年，最贵的卖了几千万！每平方厘米就有上百个小结，你能想象吗？' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串是国菜', img: 'kebab-iran', desc: '伊朗烤肉串有50多种做法！最受欢迎的烤肉一根就有30厘米长，比你的手臂还长呢。' },
        { text: '藏红花米饭香', img: 'saffron-rice', desc: '藏红花是世界上最贵的香料，比黄金还贵！一克藏红花要用200朵花才能做成。' },
        { text: '石榴鸡独特', img: 'fesenjan', desc: '这道菜用石榴酱和核桃煮鸡肉，酸酸甜甜的！一个石榴里有600多粒籽呢。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '诺鲁孜节是新年', img: 'nowruz', desc: '伊朗新年有3000多年历史，比春节还古老！大家要跳过火堆祈求好运，你敢试试吗？' },
        { text: '跳火节传统', img: 'charshanbe-suri', desc: '人们在新年前跳过火堆，让火焰带走霉运！火堆越高，好运越多，太刺激了！' },
        { text: '雅尔达节守夜', img: 'yalda-night', desc: '冬至这天是全年最长夜，大家吃石榴和西瓜迎接光明！你吃过冬至的西瓜吗？' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '摔跤是国技', img: 'wrestling-iran', desc: '伊朗摔跤有2000多年历史，是古代战士的训练项目！每个村庄都有自己的摔跤场。' },
        { text: '足球非常受欢迎', img: 'football-iran', desc: '伊朗足球队被称为波斯铁骑，曾5次打进世界杯！德黑兰的球场能坐10万人。' },
        { text: '举重实力强劲', img: 'weightlifting-iran', desc: '伊朗举重选手在奥运会上夺得过许多金牌！最强的人能举起300公斤，等于5个大人！' }
      ]
    }
  },

  'iraq': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '两河流域是文明摇篮', img: 'mesopotamia', desc: '这里是人类最早的文明发源地，6000年前就发明了文字！比埃及金字塔还早1000年。' },
        { text: '巴比伦古城遗址', img: 'babylon', desc: '巴比伦曾是世界上最大的城市，有50万人住在里面！城墙宽到可以让战车掉头。' },
        { text: '空中花园传说', img: 'hanging-gardens', desc: '空中花园被称为古代七大奇迹之一，据说有20米高的花园平台！是用灌溉系统浇花的。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤鱼是特色', img: 'masgouf', desc: '底格里斯河的鱼放在火上慢慢烤3小时！一条鱼可以重达15公斤，够一家人吃。' },
        { text: '手抓饭传统', img: 'kubba', desc: '库巴是用小麦包裹肉馅炸成的，一口一个！伊拉克人一年要吃掉几百万个库巴。' },
        { text: '烤肉串美味', img: 'kebab-iraq', desc: '伊拉克烤肉香料独特，有丁香、肉桂和豆蔻！一串烤肉有8种香料的味道。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节重要', img: 'eid-iraq', desc: '开斋节是伊拉克最重要的节日，人们要吃特殊的甜食庆祝！一家人会准备上百块糕点。' },
        { text: '阿舒拉节庄严', img: 'ashura', desc: '阿舒拉节是重要的宗教节日，人们穿黑色衣服表达哀思。这个节日已有1300多年历史。' },
        { text: '新年庆祝', img: 'new-year-iraq', desc: '伊拉克的新年用鲜花和糖果庆祝，就像我们的春节！家家户户都会团聚吃大餐。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-iraq', desc: '伊拉克足球队曾在亚洲杯夺冠，全国狂欢了整整三天！每个孩子都梦想成为足球明星。' },
        { text: '篮球发展良好', img: 'basketball-iraq', desc: '篮球在伊拉克越来越受欢迎，学校都有篮球队！伊拉克的篮球场建在沙漠里，很酷吧？' },
        { text: '摔跤是传统', img: 'wrestling-iraq', desc: '伊拉克传统摔跤历史悠久，获胜者会得到奖品！比赛时选手穿着传统服装很帅气。' }
      ]
    }
  },

  'saudi-arabia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '麦加是伊斯兰圣地', img: 'mecca', desc: '麦加是伊斯兰教最神圣的城市，每年有200多万人来朝觐！黑纱覆盖的清真寺可容纳400万人。' },
        { text: '麦地那先知清真寺', img: 'medina', desc: '麦地那有先知穆罕默德的陵墓，是伊斯兰教第二圣城！绿色的大圆顶非常漂亮。' },
        { text: '阿拉伯半岛中心', img: 'arabian-peninsula', desc: '沙特阿拉伯占据了阿拉伯半岛的80%！国土面积有14个浙江省那么大，但大部分是沙漠。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串是传统', img: 'kebab-saudi', desc: '沙特烤肉用羊肉和牛肉混合，加香料腌制一夜！一串烤肉可以有半斤肉呢。' },
        { text: '椰枣是特产', img: 'dates', desc: '沙特椰枣被称为沙漠面包，一棵椰枣树能结200公斤果实！古埃及人也爱吃椰枣哦。' },
        { text: '卡布萨饭香', img: 'kabsa', desc: '卡布萨是沙特的国菜，一锅饭里有肉、菜和香料！一锅可以喂饱20个人。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '朝觐是穆斯林功课', img: 'hajj', desc: '穆斯林一生至少要去麦加朝觐一次！朝觐者绕天房走7圈，每次都有数百万人一起。' },
        { text: '开斋节盛大', img: 'eid-saudi', desc: '开斋节沙特全国放假庆祝，人们穿新衣服走亲访友！孩子们会收到礼物和糖果。' },
        { text: '建国日庆祝', img: 'national-day-saudi', desc: '沙特建国日是9月23日，全国会放烟花、挂国旗！沙特已有90多年历史了。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-saudi', desc: '沙特足球队曾5次打进世界杯，被称为"沙漠之狐"！他们的球员技术非常细腻。' },
        { text: '赛骆驼传统', img: 'camel-racing', desc: '赛骆驼是沙特传统运动，一只骆驼能卖几百万！比赛时骆驼跑得比马还快呢。' },
        { text: '猎鹰活动', img: 'falconry-saudi', desc: '猎鹰是沙特贵族运动，一只猎鹰要训练3年才能参赛！最好的猎鹰价值百万。' }
      ]
    }
  },

  'uae': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '迪拜塔是世界最高楼', img: 'burj-khalifa', desc: '迪拜塔高828米，相当于3座埃菲尔铁塔叠起来！电梯速度每秒18米，比汽车还快。' },
        { text: '珍珠潜水历史', img: 'pearl-diving', desc: '50年前迪拜人靠采珍珠为生，潜水员一口气能憋3分钟！一颗好珍珠能换一套房。' },
        { text: '沙漠中的绿洲', img: 'dubai-desert', desc: '迪拜在50年内从沙漠小渔村变成了超级城市！这里有室内滑雪场，外面却40度。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '沙瓦玛是快餐', img: 'shawarma', desc: '沙瓦玛是阿拉伯最流行的快餐，一个面包卷里塞满了肉和蔬菜！一天能卖几千份。' },
        { text: '椰枣营养丰富', img: 'dates-uae', desc: '阿联酋椰枣含有15种矿物质，是沙漠里的能量棒！运动员也喜欢吃椰枣。' },
        { text: '阿拉伯咖啡传统', img: 'arabic-coffee', desc: '阿拉伯咖啡加了豆蔻和藏红花，是待客必备！喝咖啡时要喝三小杯才礼貌呢。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节盛大', img: 'eid-uae', desc: '开斋节迪拜全城庆祝，人们穿传统白袍走亲戚！孩子们收到礼物时特别开心。' },
        { text: '国庆日庆祝', img: 'national-day-uae', desc: '阿联酋国庆日在12月2日，会放烟花和灯光秀！高楼都会亮起国旗的颜色。' },
        { text: '购物节热闹', img: 'dubai-shopping-festival', desc: '迪拜购物节持续一个月，商场打折低至一折！还会送豪车和黄金给幸运顾客。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-uae', desc: '阿联酋足球队被称为白衣军团，曾在亚洲杯获亚军！每个学校都有足球队。' },
        { text: '赛骆驼传统', img: 'camel-racing-uae', desc: '赛骆驼现在用机器人骑手，主人在旁边开车指挥！机器人比人轻，骆驼跑得更快。' },
        { text: 'F1赛车举办地', img: 'f1-abu-dhabi', desc: '阿布扎比的F1赛道穿过酒店，晚上比赛灯光超级美！冠军会喷香槟庆祝。' }
      ]
    }
  },

  // ===== 补充缺失国家 =====
  'oman': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '苏丹国历史悠久', img: 'oman-history', desc: '阿曼是阿拉伯半岛最古老的国家之一，有5000年历史！曾经是强大的海上王国。' },
        { text: '马斯喀特古城', img: 'muscat-old', desc: '马斯喀特古城被山脉环绕，像一座天然堡垒！两座500年的古堡守卫着城市。' },
        { text: '海上丝绸之路', img: 'silk-road-oman', desc: '阿曼曾是海上丝绸之路的重要一站，中国的瓷器从这里运往欧洲！郑和也来过这里。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串香浓', img: 'shuwa-oman', desc: '阿曼烤肉要用香料腌制48小时，然后埋在沙子里烤一天！肉超级嫩，入口即化。' },
        { text: '咖喱饭独特', img: 'biryani-oman', desc: '阿曼咖喱饭用印度香料和海鲜一起煮，一锅饭有20多种材料！味道特别丰富。' },
        { text: '椰枣甜点', img: 'dates-oman', desc: '阿曼有200多种椰枣，还做成甜点和果酱！椰枣巧克力是最受欢迎的礼物。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节隆重', img: 'eid-oman', desc: '开斋节是阿曼最重要的节日，人们穿传统服装、送礼物！整个国家放假庆祝。' },
        { text: '国庆日欢庆', img: 'national-day-oman', desc: '阿曼国庆日有传统舞蹈和骆驼比赛！人们会挥舞国旗唱爱国歌曲。' },
        { text: '赛骆驼传统', img: 'camel-race-oman', desc: '阿曼赛骆驼从古代就有了，比赛时骆驼跑得飞快！获奖骆驼的主人非常光荣。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球受欢迎', img: 'football-oman', desc: '阿曼足球队被称为红战士，在亚洲很有名！每个周末都有足球比赛。' },
        { text: '赛骆驼传统', img: 'camel-racing-oman', desc: '赛骆驼是阿曼最受欢迎的传统运动，每个地区都有自己的比赛！冠军骆驼很值钱。' },
        { text: '帆船运动', img: 'sailing-oman', desc: '阿曼是帆船强国，选手在亚洲比赛获得过很多金牌！海岸线上到处是帆船。' }
      ]
    }
  },

  'qatar': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '珍珠贸易历史', img: 'pearl-history-qatar', desc: '卡塔尔曾是世界最大的珍珠产地，一颗珍珠能换一座城！后来日本发明了养殖珍珠。' },
        { text: '多哈现代化', img: 'doha-modern', desc: '多哈从沙漠小城变成超级都市只用了50年！现在到处都是摩天大楼和豪华酒店。' },
        { text: '伊斯兰文化', img: 'islamic-culture-qatar', desc: '卡塔尔的伊斯兰艺术博物馆收藏了来自世界各地的14世纪珍宝！一件古董价值连城。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉饭美味', img: 'machboos-qatar', desc: '卡塔尔烤肉饭用香料和藏红花煮，一锅饭金黄发亮！是卡塔尔人最爱吃的家常菜。' },
        { text: '海鲜料理丰富', img: 'seafood-qatar', desc: '卡塔尔海鲜新鲜美味，一只螃蟹可以有脸盆那么大！捕捞后2小时就上餐桌。' },
        { text: '阿拉伯甜点', img: 'sweets-qatar', desc: '卡塔尔甜点用蜂蜜、坚果和椰枣制作，一个果仁酥有几百层！甜到让你忘不了。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节庆祝', img: 'eid-qatar', desc: '开斋节卡塔尔全国庆祝，家庭聚餐吃传统美食！孩子们收到礼物特别开心。' },
        { text: '国庆日盛大', img: 'national-day-qatar', desc: '卡塔尔国庆日在12月18日，有盛大的阅兵和灯光秀！高楼都会亮起国旗颜色。' },
        { text: '斋月传统', img: 'ramadan-qatar', desc: '斋月期间穆斯林从日出到日落不吃东西，日落后开斋饭超级丰盛！有几十道菜。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球世界杯举办地', img: 'world-cup-qatar', desc: '卡塔尔举办了2022年世界杯，花了2200亿美元建球场！是全球最贵的世界杯。' },
        { text: '赛骆驼传统', img: 'camel-racing-qatar', desc: '卡塔尔赛骆驼用机器人骑手，比赛非常激烈！一头冠军骆驼价值百万美元。' },
        { text: 'F1赛车', img: 'f1-qatar', desc: '卡塔尔F1比赛在夜晚举行，赛道灯光如白天！赛车时速超过300公里，超刺激。' }
      ]
    }
  },

  'kuwait': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '石油王国', img: 'oil-kuwait', desc: '科威特是世界最富有的国家之一，地下全是石油！石油比水还多，你敢相信吗？' },
        { text: '科威特塔地标', img: 'kuwait-towers', desc: '科威特塔高187米，有三个球体的水塔！最大的球体可以旋转，俯瞰全城美景。' },
        { text: '海湾历史', img: 'gulf-history-kuwait', desc: '科威特曾是海上贸易中心，船只从这里驶向印度和非洲！造船技术世界一流。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉饭传统', img: 'machboos-kuwait', desc: '科威特烤肉饭香料独特，用丁香和豆蔻调味！一顿饭要有肉、饭和蔬菜三部分。' },
        { text: '海鲜料理', img: 'seafood-kuwait', desc: '科威特的海鲜新鲜美味，虾可以长到30厘米！用传统香料烤制超好吃。' },
        { text: '阿拉伯咖啡', img: 'arabic-coffee-kuwait', desc: '科威特咖啡文化很重要，待客必须先上咖啡！咖啡里加了豆蔻，味道独特。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节庆祝', img: 'eid-kuwait', desc: '开斋节科威特全国放假，人们穿新衣服走亲访友！孩子们收到红包特别开心。' },
        { text: '国庆日欢庆', img: 'national-day-kuwait', desc: '科威特国庆日在2月25日，全国放烟花、开音乐会！街上挂满了彩灯和国旗。' },
        { text: '解放纪念日', img: 'liberation-day-kuwait', desc: '2月26日是解放日，纪念科威特恢复独立！那天街上到处都是欢乐的人群。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球受欢迎', img: 'football-kuwait', desc: '科威特足球队曾在亚洲杯夺冠，被称为"蓝浪"！足球是最受欢迎的运动。' },
        { text: '赛骆驼传统', img: 'camel-racing-kuwait', desc: '赛骆驼是科威特传统运动，冬天是比赛季节！每场比赛有几十头骆驼参加。' },
        { text: '水上运动', img: 'water-sports-kuwait', desc: '科威特人喜欢帆船和潜水，夏天海边到处是玩水的人！帆船比赛非常精彩。' }
      ]
    }
  },

  'turkey': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '奥斯曼帝国辉煌', img: 'ottoman-empire', desc: '奥斯曼帝国统治了600年，横跨三大洲！最强时有29个省份，面积比罗马帝国还大。' },
        { text: '圣索菲亚大教堂', img: 'hagia-sophia', desc: '圣索菲亚大教堂有1500年历史，曾是世界上最大的建筑！它的穹顶高55米，没用一根柱子。' },
        { text: '博斯普鲁斯海峡', img: 'bosporus', desc: '博斯普鲁斯海峡把伊斯坦布尔分成亚洲和欧洲两部分！一座桥就能跨两大洲，神奇吧？' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串闻名世界', img: 'kebab-turkey', desc: '土耳其烤肉有40多种，旋转烤肉一根能有1米高！全世界都爱吃土耳其烤肉。' },
        { text: '土耳其冰淇淋', img: 'turkish-ice-cream', desc: '土耳其冰淇淋要靠打才能吃到，因为卖家会跟你玩把戏！它的口感像橡皮糖一样有嚼劲。' },
        { text: '土耳其咖啡', img: 'turkish-coffee', desc: '土耳其咖啡有600年历史，喝完后可以算命！咖啡渣的图案能预测你的未来哦。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节重要', img: 'eid-turkey', desc: '开斋节在土耳其叫"糖果节"，孩子们挨家挨户要糖果！就像我们的万圣节一样好玩。' },
        { text: '共和国日庆祝', img: 'republic-day-turkey', desc: '10月29日是土耳其共和国日，全国放烟花庆祝！学校会有诗歌和舞蹈表演。' },
        { text: '旋转舞表演', img: 'whirling-dervishes', desc: '旋转舞者能转30分钟不晕！他们穿着白色长裙，像陀螺一样旋转，是一种祈祷方式。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球热情高涨', img: 'football-turkey', desc: '土耳其人疯狂热爱足球，球场里几万人一起呐喊！伊斯坦布尔的德比战超激烈。' },
        { text: '摔跤传统运动', img: 'wrestling-turkey', desc: '土耳其橄榄油摔跤有600年历史，选手全身涂满油！比赛可以持续几个小时。' },
        { text: '篮球发展良好', img: 'basketball-turkey', desc: '土耳其篮球水平很高，国家队在世界比赛获得过银牌！NBA也有土耳其球星。' }
      ]
    }
  },

  'bhutan': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '虎穴寺神圣', img: 'tiger-nest', desc: '虎穴寺建在900米高的悬崖上，传说一位大师骑着老虎飞到这里！要爬两小时山路才能到达。' },
        { text: '宗堡建筑独特', img: 'dzong-bhutan', desc: '宗堡是集寺庙、行政和防御为一体的建筑，没有用一根钉子！墙上的花纹都是手工画上去的。' },
        { text: '幸福指数国度', img: 'happiness-kingdom', desc: '不丹用"国民幸福指数"代替GDP来衡量国家发展！他们认为快乐比金钱更重要，好有智慧！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '辣椒奶酪特色', img: 'ema-datshi', desc: '辣椒奶酪是不丹国菜，辣椒加上奶酪炖煮，辣到冒汗还停不下来！不丹人超级爱吃辣。' },
        { text: '红米饭主食', img: 'red-rice-bhutan', desc: '不丹红米生长在高海拔地区，米粒呈红色，口感有嚼劲，据说比白米更有营养哦！' },
        { text: '酥油茶传统', img: 'butter-tea-bhutan', desc: '酥油茶用茶叶、酥油和盐打成，喝起来咸咸的。在寒冷山区，一碗热酥油茶让人浑身暖和。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '策秋节盛大', img: 'tsechu-festival', desc: '策秋节是不丹最重要的节日，人们穿上精美服装，观看面具舞表演，据说能获得好运和祝福！' },
        { text: '新年节庆祝', img: 'losar-bhutan', desc: '不丹新年要全家团聚，吃传统美食，还会去寺庙祈福。人们穿上新衣服，互相拜年祝福。' },
        { text: '面具舞表演', img: 'mask-dance-bhutan', desc: '面具舞者戴着色彩鲜艳的木制面具，穿着华丽服装，在鼓点和号角声中跳舞，像穿越到古代！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '射箭是国技', img: 'archery-bhutan', desc: '射箭是不丹国技，几乎人人都会！比赛时射手要在145米外射中靶子，比奥运射箭远得多！' },
        { text: '足球受欢迎', img: 'football-bhutan', desc: '虽然不丹是世界最小足球国家之一，但人们对足球的热爱一点不少，小球员们梦想踢进世界杯！' },
        { text: '传统竞技', img: 'traditional-sports-bhutan', desc: '不丹传统项目有石头投掷、射箭比赛等，都是测试力量和技巧的好游戏，节日时大家一起玩！' }
      ]
    }
  },

  'maldives': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '群岛国家独特', img: 'island-nation', desc: '马尔代夫有1192个岛屿，但只有约200个有人住！岛屿像珍珠一样散落在印度洋上，太梦幻了。' },
        { text: '伊斯兰文化', img: 'islamic-maldives', desc: '马尔代夫是伊斯兰国家，清真寺遍布各岛。金色圆顶的清真寺在阳光下闪闪发光，非常壮观。' },
        { text: '海洋文明', img: 'ocean-civilization', desc: '马尔代夫人的祖先是航海家，他们乘着小船在印度洋上航行，建立了独特的水上文明。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '金枪鱼料理', img: 'tuna-maldives', desc: '马尔代夫是吃金枪鱼的天堂！新鲜的金枪鱼烤着吃、煮咖喱都超级美味，海边的鱼最鲜。' },
        { text: '咖喱风味', img: 'curry-maldives', desc: '马尔代夫咖喱加入椰奶，口感香浓顺滑。配上刚捕上来的海鲜，是海岛上最美味的享受！' },
        { text: '椰子美食', img: 'coconut-maldives', desc: '椰子在马尔代夫无处不在！椰子水清凉解渴，椰肉做成甜点，连咖喱里都加椰奶，太香了。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '开斋节重要', img: 'eid-maldives', desc: '开斋节是马尔代夫最重要的节日，人们穿上传统服饰，拜访亲友，享用美食，孩子们收到礼物开心极了。' },
        { text: '独立日庆祝', img: 'independence-day-maldives', desc: '独立日那天，马尔代夫到处都是彩旗和装饰，人们举行游行和表演，庆祝国家的独立和自由。' },
        { text: '伊斯兰节日', img: 'islamic-festivals-maldives', desc: '马尔代夫庆祝很多伊斯兰节日，人们会去清真寺祈祷，和家人团聚，分享美食，充满温馨。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冲浪运动', img: 'surfing-maldives', desc: '马尔代夫是世界顶级冲浪胜地！海浪干净漂亮，冲浪者在浪尖飞驰，像在海上跳舞一样帅气。' },
        { text: '潜水天堂', img: 'diving-maldives', desc: '马尔代夫海水清澈见底，能看到鲨鱼、海龟、珊瑚和五颜六色的热带鱼，是潜水爱好者的天堂！' },
        { text: '足球受欢迎', img: 'football-maldives', desc: '虽然国家很小，但马尔代夫人对足球热情满满！小岛上孩子们踢球玩耍，梦想成为足球明星。' }
      ]
    }
  },
  // ===== 欧洲 =====

  // ----- 西欧 -----
  'united-kingdom': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '大本钟是伦敦地标', img: 'big-ben', desc: '大本钟是伦敦最著名的钟楼，钟声每15分钟响一次。它其实叫"伊丽莎白塔"，大本钟只是钟的名字！' },
        { text: '英国王室历史悠久', img: 'british-royal-family', desc: '英国王室有1000多年历史！女王和国王住在白金汉宫，门口有穿着红色制服、戴着高帽子的卫兵站岗。' },
        { text: '工业革命发源地', img: 'industrial-revolution', desc: '200多年前，英国发明了蒸汽机，开始了工业革命。火车、纺织机都是那时发明的，改变了整个世界！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '炸鱼薯条是国菜', img: 'fish-and-chips', desc: '炸鱼薯条是英国最有名的美食！金黄酥脆的炸鱼配上薯条，挤上醋或蘸酱，简单却美味。' },
        { text: '英式下午茶优雅', img: 'english-tea', desc: '英国人喜欢在下午喝茶，配三层架点心！最下面是三明治，中间是司康饼，上面是小蛋糕，超精致！' },
        { text: '英式早餐丰盛', img: 'english-breakfast', desc: '传统英式早餐超级丰盛：煎蛋、培根、香肠、豆子、蘑菇、番茄、吐司，吃完能顶一天！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣诞节隆重庆祝', img: 'christmas-uk', desc: '英国圣诞节气氛超浓！人们装饰圣诞树、互送礼物、吃烤火鸡，还有圣诞布丁藏硬币的传统！' },
        { text: '盖伊·福克斯之夜', img: 'bonfire-night', desc: '每年11月5日，英国人放烟花、点燃篝火，庆祝1605年阻止了国会爆炸案。夜空被烟花照亮！' },
        { text: '女王生日庆典', img: 'queens-birthday', desc: '女王生日那天有盛大的阅兵仪式，士兵穿着红色制服、骑着马，在伦敦街头游行，非常壮观！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球发源地', img: 'football-uk', desc: '现代足球起源于英国！英超是世界上最好看的足球联赛，球迷们为自己的球队疯狂呐喊助威。' },
        { text: '网球温布尔登', img: 'wimbledon', desc: '温布尔登是网球四大满贯之一，也是最古老的！选手必须穿全白色服装，观众吃着草莓奶油看比赛。' },
        { text: '板球传统悠久', img: 'cricket', desc: '板球是英国传统运动，一场比赛可以打5天！选手穿着白色服装，在绿色的草地上优雅比赛。' }
      ]
    }
  },

  'france': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '埃菲尔铁塔是地标', img: 'eiffel-tower', desc: '埃菲尔铁塔高324米，是巴黎的象征！每年有700万人爬上去看风景，是世界上最受欢迎的收费景点！' },
        { text: '卢浮宫收藏丰富', img: 'louvre-museum', desc: '卢浮宫是世界上最大的博物馆，有38万件艺术品！《蒙娜丽莎》和《维纳斯》就住在这里。' },
        { text: '法国大革命影响深远', img: 'french-revolution', desc: '200多年前，法国人民推翻了国王，喊出"自由、平等、博爱"的口号，影响了整个世界！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '法式面包世界闻名', img: 'french-baguette', desc: '法棍面包外皮酥脆、内里松软，法国人每天都要吃！好的法棍敲一下会听到"梆梆"的声音。' },
        { text: '奶酪种类繁多', img: 'french-cheese', desc: '法国有400多种奶酪！有的软软的，有的硬硬的，有的还有蓝色的霉，每种味道都不同。' },
        { text: '马卡龙色彩缤纷', img: 'macaron', desc: '马卡龙是法国最有名的甜点，两片杏仁饼干夹着奶油馅，颜色五彩缤纷，好看又好吃！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '国庆日烟花璀璨', img: 'bastille-day', desc: '7月14日是法国国庆，巴黎夜空被烟花照亮，还有盛大的阅兵式，人们跳舞庆祝到深夜！' },
        { text: '戛纳电影节星光熠熠', img: 'cannes-festival', desc: '戛纳电影节是世界上最有名的电影节之一！明星们走上红毯，闪光灯亮成一片，超闪耀！' },
        { text: '薰衣草季节浪漫', img: 'lavender-france', desc: '每年夏天，普罗旺斯的薰衣草盛开，紫色的花海一眼望不到边，空气中弥漫着香气，超浪漫！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '环法自行车赛', img: 'tour-de-france', desc: '环法自行车赛是世界上最有名的自行车比赛！选手们要骑21天、3500公里，穿越整个法国。' },
        { text: '足球实力强劲', img: 'football-france', desc: '法国足球队是世界冠军！他们的球衣是蓝色的，球迷们高唱《马赛曲》为球队加油。' },
        { text: '网球法网赛事', img: 'french-open', desc: '法国网球公开赛是四大满贯之一，在红土球场上举行。红色的球场很有特色！' }
      ]
    }
  },

  'germany': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '柏林墙曾分隔城市', img: 'berlin-wall', desc: '柏林墙曾经把柏林分成两半，东边和西边的人不能相见。1989年墙倒了，人们激动地拥抱在一起！' },
        { text: '新天鹅堡童话般', img: 'neuschwanstein-castle', desc: '新天鹅堡是童话中的城堡！迪士尼城堡就是以它为原型设计的，白雪公主和灰姑娘都住在这里。' },
        { text: '古登堡发明印刷术', img: 'gutenberg-press', desc: '500多年前，德国人古登堡发明了活字印刷术，让书本变得便宜，知识开始普及到全世界！' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '香肠种类繁多', img: 'german-sausage', desc: '德国有1500多种香肠！最有名的是咖喱香肠，蘸着番茄酱和咖喱粉吃，柏林人每年要吃掉7000万根！' },
        { text: '啤酒文化深厚', img: 'german-beer', desc: '德国啤酒有500年历史！慕尼黑啤酒节是世界上最大的啤酒节，人们穿着传统服装喝啤酒庆祝。' },
        { text: '酸菜是经典配菜', img: 'german-sauerkraut', desc: '酸菜是德国人最爱的配菜，酸酸的很开胃。每年德国人要吃掉几公斤酸菜！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '慕尼黑啤酒节盛大', img: 'oktoberfest', desc: '慕尼黑啤酒节是世界上最大的节日之一！人们穿着皮短裤和民族裙，在巨大的帐篷里喝啤酒跳舞。' },
        { text: '圣诞市场温馨', img: 'christmas-market', desc: '德国圣诞市场有600多年历史！小木屋里卖着姜饼、热红酒和手工艺品，空气中弥漫着肉桂香味。' },
        { text: '狂欢节热闹非凡', img: 'german-carnival', desc: '德国狂欢节时，人们穿着奇装异服上街游行，向观众扔糖果。大家都喊"Helau！"来庆祝！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球四次夺冠', img: 'football-germany', desc: '德国足球队赢得过4次世界杯！他们的配合像机器一样精密，被称为"德国战车"。' },
        { text: '赛车运动发达', img: 'f1-germany', desc: '德国是赛车大国，舒马赫和维特尔都是传奇车手！F1德国站吸引无数粉丝观看。' },
        { text: '手球实力强劲', img: 'handball', desc: '德国手球队是世界强队！手球像足球和篮球的结合，球员用手传球射门，比赛节奏超快。' }
      ]
    }
  },

  'netherlands': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '风车是荷兰标志', img: 'windmill', desc: '荷兰有1000多座风车！古代风车用来抽水、磨面，现在成了美丽的风景，像童话世界一样。' },
        { text: '梵高是绘画大师', img: 'van-gogh', desc: '梵高是荷兰最有名的画家，画了《向日葵》和《星空》。他一生卖画不多，但现在作品价值连城！' },
        { text: '运河网络四通八达', img: 'amsterdam-canal', desc: '阿姆斯特丹有165条运河！运河两旁是古老的房子，坐船游览像在画中穿行。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '奶酪世界闻名', img: 'dutch-cheese', desc: '荷兰奶酪是黄色的，味道浓郁。豪达奶酪最有名，外面包着红蜡，像一个大红球！' },
        { text: '鲱鱼是传统美食', img: 'herring', desc: '荷兰人喜欢生吃鲱鱼！拿着鱼尾巴，仰头一口吃下去，再配洋葱和酸黄瓜，是独特的美味。' },
        { text: '华夫饼香甜', img: 'stroopwafel', desc: '荷式华夫饼是两层薄饼夹着焦糖浆，热的时候焦糖会拉丝！配咖啡或茶吃，超满足。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '郁金香季节绚烂', img: 'tulip-festival', desc: '每年春天，库肯霍夫公园的郁金香盛开，700万朵花铺成彩虹！游客从世界各地来看花海。' },
        { text: '国王节全民狂欢', img: 'kings-day', desc: '国王节那天，全国人都穿橙色衣服庆祝！街上有人摆摊卖旧货，运河里挤满了派对船。' },
        { text: '圣尼古拉斯节', img: 'sinterklaas', desc: '圣尼古拉斯节是荷兰最重要的节日，老人和孩子等着"圣尼古拉斯"骑着白马送礼物！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '速滑实力超群', img: 'speed-skating', desc: '荷兰速滑运动员是世界最强的！冬奥会速滑项目，荷兰队经常包揽金银铜牌。' },
        { text: '足球三次进决赛', img: 'football-netherlands', desc: '荷兰足球队以全攻全守闻名，球衣是鲜艳的橙色！球迷被称为"橙色军团"。' },
        { text: '自行车普及度高', img: 'cycling-netherlands', desc: '荷兰是自行车王国，人手一辆自行车！全国有3.5万公里自行车道，连首相都骑车上班。' }
      ]
    }
  },

  'belgium': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '布鲁塞尔大广场', img: 'brussels-square', desc: '布鲁塞尔大广场被称为欧洲最美的广场！四周是华丽的古建筑，每到节假日会铺满鲜花。' },
        { text: '撒尿小童是标志', img: 'manneken-pis', desc: '撒尿小童是布鲁塞尔最有名的雕像，只有60厘米高！它有1000多套衣服，换装时还会庆祝。' },
        { text: '欧盟总部所在地', img: 'eu-headquarters', desc: '布鲁塞尔是欧盟的"首都"，很多重要会议在这里举行。来自欧洲各国的代表一起讨论大事。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '巧克力世界顶级', img: 'belgian-chocolate', desc: '比利时巧克力是全世界最好吃的！有2000多家巧克力店，连空气都飘着巧克力香味。' },
        { text: '华夫饼香甜松软', img: 'belgian-waffle', desc: '比利时华夫饼有两种：布鲁塞尔方格的和列日圆格的。配巧克力酱、草莓或奶油，甜到心里！' },
        { text: '薯条源于比利时', img: 'french-fries', desc: '薯条其实是比利时发明的，不是法国！比利时薯条外脆里嫩，蘸蛋黄酱吃，超美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '鲜花地毯节', img: 'flower-carpet', desc: '每两年，大广场会用75万朵秋海棠铺成巨大花毯！从空中看像一块美丽的地毯。' },
        { text: '狂欢节传统悠久', img: 'belgian-carnival', desc: '比利时狂欢节有500多年历史！人们戴上面具、穿着奇装异服上街游行，把冬天赶走。' },
        { text: '圣诞集市温馨', img: 'christmas-belgium', desc: '比利时圣诞集市有热红酒、华夫饼和手工礼物。最特别的是溜冰场，可以边溜冰边看灯饰！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是第一运动', img: 'football-belgium', desc: '比利时足球队曾排名世界第一！红魔军团拥有很多顶级球星，是世界上最强的球队之一。' },
        { text: '网球名将辈出', img: 'tennis-belgium', desc: '比利时出过很多网球名将，海宁和克里吉斯特都是传奇选手！她们的对决被称为"比利时德比"。' },
        { text: '自行车比赛盛行', img: 'cycling-belgium', desc: '比利时是自行车大国！环法兰德斯赛是最艰难的比赛之一，选手们要爬陡峭的石板坡。' }
      ]
    }
  },

  'switzerland': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '阿尔卑斯山壮美', img: 'swiss-alps', desc: '阿尔卑斯山横贯瑞士，最高峰有4800多米！山上有雪、有冰川、有湖泊，风景美得像明信片。' },
        { text: '永久中立国地位', img: 'swiss-neutrality', desc: '瑞士200多年没有参与战争！它保持中立，因此很多国际组织把总部设在瑞士。' },
        { text: '精密钟表闻名世界', img: 'swiss-watch', desc: '瑞士手表是世界上最精准的！有些手表由几百个零件组成，匠人要花几个月才能组装好。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '奶酪火锅是传统', img: 'cheese-fondue', desc: '瑞士奶酪火锅把奶酪融化在锅里，用面包蘸着吃！冬天和家人朋友围着锅吃，超温暖。' },
        { text: '巧克力世界顶级', img: 'swiss-chocolate', desc: '瑞士人发明了牛奶巧克力！每年每个瑞士人要吃掉10公斤巧克力，是世界上最多的。' },
        { text: '瑞士军刀多功能', img: 'swiss-army-knife', desc: '瑞士军刀有刀、剪刀、开瓶器、螺丝刀等几十种功能！小小的可以放进口袋，超级实用。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '国庆日放烟花', img: 'swiss-national-day', desc: '8月1日是瑞士国庆，人们点燃篝火、放烟花庆祝。传说这天三个州结盟成立了瑞士！' },
        { text: '圣诞节传统温馨', img: 'christmas-switzerland', desc: '瑞士圣诞有独特的"圣诞老人"Samichlaus，他带着助手Schmutzli给乖孩子送礼物和橙子！' },
        { text: '阿尔卑斯牧人节', img: 'alpine-festival', desc: '牧人节上，牧人们穿着传统服装，赶着牛群下山过冬。牛脖子上的铃铛"叮当"作响！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '滑雪是国民运动', img: 'skiing-switzerland', desc: '瑞士是滑雪天堂！雪道总长7000多公里，从陡坡滑下来，速度能达到100公里每小时！' },
        { text: '网球名将费德勒', img: 'tennis-switzerland', desc: '费德勒是网球史上最伟大的选手之一！他赢得20个大满贯，优雅的球风让人着迷。' },
        { text: '冰球也很受欢迎', img: 'ice-hockey-switzerland', desc: '冰球是瑞士第二大运动！联赛比赛时，观众们挥舞着旗帜呐喊助威，气氛热烈。' }
      ]
    }
  },

  'austria': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '维也纳是音乐之都', img: 'vienna', desc: '维也纳是音乐之都！贝多芬、莫扎特、施特劳斯都在这里生活和创作，到处都能听到音乐。' },
        { text: '美泉宫华丽壮观', img: 'schoenbrunn-palace', desc: '美泉宫是奥地利的凡尔赛宫，有1441间房间！茜茜公主曾住在这里，花园超级漂亮。' },
        { text: '哈布斯堡王朝辉煌', img: 'habsburg-empire', desc: '哈布斯堡王朝统治奥地利600多年，是欧洲最有影响力的王朝之一！他们的皇宫现在成了博物馆。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '维也纳炸猪排', img: 'wiener-schnitzel', desc: '维也纳炸猪排是把小牛肉拍薄，裹上面包糠油炸！金黄酥脆，挤上柠檬汁吃，是奥地利国菜。' },
        { text: '萨赫蛋糕经典', img: 'sachertorte', desc: '萨赫蛋糕是奥地利最有名的甜点，巧克力蛋糕夹杏子酱，外面裹巧克力皮！配奶油吃超绝配。' },
        { text: '苹果卷香甜', img: 'apple-strudel', desc: '苹果卷是奥地利传统甜点，薄薄的面皮包着苹果、肉桂和葡萄干，烤得香喷喷的！' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '维也纳新年音乐会', img: 'vienna-concert', desc: '每年元旦，维也纳金色大厅举办新年音乐会！演奏施特劳斯圆舞曲，全球数百万人观看。' },
        { text: '萨尔茨堡音乐节', img: 'salzburg-festival', desc: '萨尔茨堡音乐节是世界上最有名的音乐节之一！莫扎特出生在这里，音乐节上演奏他的作品。' },
        { text: '圣诞市场古老', img: 'christmas-austria', desc: '奥地利圣诞市场有几百年历史！维也纳市政厅前的小木屋卖热红酒和手工艺品，温馨又浪漫。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '滑雪运动发达', img: 'skiing-austria', desc: '奥地利是滑雪强国！阿尔卑斯山有完美的雪道，奥地利选手在冬奥会上赢得过很多金牌。' },
        { text: '足球历史悠久', img: 'football-austria', desc: '奥地利足球有百年历史，维也纳快速队是奥地利最有名的球队！球迷们激情呐喊助威。' },
        { text: '跳台滑雪精彩', img: 'ski-jumping', desc: '每年新年，跳台滑雪四山赛在奥地利和德国举行！选手从高台滑下、飞到空中，超刺激。' }
      ]
    }
  },

  // ----- 北欧 -----
  'sweden': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '维京时代传奇', img: 'vikings', desc: '1000多年前，维京人驾着龙头船在海上冒险！他们是最早到达美洲的欧洲人，比哥伦布还早500年。' },
        { text: '诺贝尔奖发源地', img: 'nobel-prize', desc: '诺贝尔奖在瑞典颁发！每年12月10日，获奖者来到斯德哥尔摩，国王亲自颁发奖章。' },
        { text: '宜家家居风靡世界', img: 'ikea', desc: '宜家是瑞典最有名的品牌！蓝色黄色的标志像瑞典国旗，让全世界人都能买得起好看家具。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '肉丸配越橘酱', img: 'swedish-meatballs', desc: '瑞典肉丸是国菜！圆圆的肉丸配上越橘酱和肉汁，再挤点柠檬汁，酸酸甜甜超好吃。' },
        { text: '肉桂卷香气扑鼻', img: 'cinnamon-roll', desc: '瑞典肉桂卷是世界上最大的！每年10月4日是肉桂卷日，人们排队买新鲜出炉的肉桂卷。' },
        { text: '海鲜丰富新鲜', img: 'swedish-seafood', desc: '瑞典海岸线很长，海鲜超新鲜！小龙虾派对是夏天的传统，大家戴帽子、唱歌、吃小龙虾。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '仲夏节是最重要', img: 'midsummer', desc: '仲夏节是瑞典最重要的节日！人们在草地上围着花柱跳舞，吃鲱鱼和草莓蛋糕，庆祝最长的一天。' },
        { text: '露西亚节点蜡烛', img: 'lucia-day', desc: '12月13日露西亚节，女孩们穿着白裙、戴着蜡烛花环，唱着歌送光明和温暖。' },
        { text: '龙虾派对传统', img: 'crayfish-party', desc: '8月是小龙虾季节，人们戴着滑稽的帽子、挂着彩灯，在花园里吃小龙虾、喝酒唱歌！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冰球实力强劲', img: 'ice-hockey-sweden', desc: '瑞典冰球队是世界强队！他们赢得了多次世界冠军，球员技术精湛，配合默契。' },
        { text: '足球有传统', img: 'football-sweden', desc: '瑞典足球历史悠久，伊布拉希莫维奇是最有名的球星！他个子很高，进球方式超级帅气。' },
        { text: '滑雪冬季运动', img: 'skiing-sweden', desc: '瑞典冬季漫长，滑雪很普及！北部的雪道穿过森林和湖泊，风景如画。' }
      ]
    }
  },

  'norway': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '峡湾是世界遗产', img: 'norwegian-fjord', desc: '挪威峡湾像大海的指纹，深入陆地深处！两岸悬崖高耸，瀑布飞流直下，美得让人窒息。' },
        { text: '维京人探险传奇', img: 'viking-ship', desc: '维京人驾着龙头船探险，从挪威到冰岛、格陵兰，甚至到达美洲！他们是古代最勇敢的航海家。' },
        { text: '诺贝尔和平奖', img: 'nobel-peace-prize', desc: '诺贝尔和平奖在挪威奥斯陆颁发！每年12月10日，获奖者来到奥斯陆市政厅接受奖章。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '三文鱼世界闻名', img: 'norwegian-salmon', desc: '挪威是世界上最大的三文鱼出口国！三文鱼可以生吃、烟熏或烤着吃，肉质鲜嫩。' },
        { text: '棕奶酪独特', img: 'brown-cheese', desc: '挪威棕奶酪是棕色的、甜甜的，涂在面包上吃！味道有点像焦糖，是挪威人从小吃到大的。' },
        { text: '圣诞火腿传统', img: 'christmas-ham', desc: '挪威圣诞火腿腌制后烤制，配上芥末酱！圣诞节时每家每户都会准备，香味飘满屋子。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '宪法日盛装游行', img: 'norway-constitution-day', desc: '5月17日是挪威国庆，人们穿着传统服装bunad上街游行！孩子们拿着旗帜，唱着国歌庆祝。' },
        { text: '北极光冬季奇观', img: 'northern-lights', desc: '冬季在挪威北部能看到北极光！绿色、紫色的光在夜空中舞动，像仙境一样神奇。' },
        { text: '圣诞节温馨传统', img: 'christmas-norway', desc: '挪威圣诞节有点蜡烛、吃姜饼、喝热红酒的传统。最特别的是在圣诞节看迪斯尼节目！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冬季运动强国', img: 'winter-sports-norway', desc: '挪威是冬奥会历史上获得金牌最多的国家！滑雪、跳台滑雪、冬季两项都是强项。' },
        { text: '足球逐渐发展', img: 'football-norway', desc: '挪威足球发展迅速，女足曾获得世界杯冠军！哈兰德是挪威最有名的男足球星，进球如麻。' },
        { text: '手球实力强劲', img: 'handball-norway', desc: '挪威女子手球队是世界最强的！她们多次获得奥运会和世锦赛冠军，被称为"金色女孩"。' }
      ]
    }
  },

  'denmark': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '小美人鱼雕像', img: 'little-mermaid', desc: '小美人鱼雕像是哥本哈根的标志，只有1.25米高！她是安徒生童话里的角色，每天有几千人来看她。' },
        { text: '安徒生童话王国', img: 'hans-christian-andersen', desc: '安徒生是丹麦最伟大的作家！《丑小鸭》《卖火柴的小女孩》《皇帝的新装》都是他写的。' },
        { text: '乐高发明于此', img: 'lego', desc: '乐高是丹麦人发明的！LEGO来自丹麦语"玩得好"，现在全世界孩子都在玩乐高积木。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '开放式三明治', img: 'smorrebrod', desc: '丹麦开放式三明治是一片面包上放各种配料！可以是鱼、肉、奶酪或蔬菜，好看又好吃。' },
        { text: '丹麦酥香甜', img: 'danish-pastry', desc: '丹麦酥是层层叠叠的酥皮点心，里面有奶油或果酱！全世界都叫它"Danish"。' },
        { text: '热狗摊遍布街头', img: 'danish-hotdog', desc: '丹麦街头的热狗摊是传统！热狗配脆洋葱、酸黄瓜和丹麦酱，是丹麦人从小吃到大的味道。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣诞节Hygge氛围', img: 'christmas-denmark', desc: '丹麦圣诞节讲究"Hygge"——温馨舒适！蜡烛、毛毯、热红酒，和家人朋友一起享受温暖时光。' },
        { text: '圣汉斯节篝火', img: 'st-hans-day', desc: '圣汉斯节在夏至这天，人们点燃篝火、唱歌、吃烤香肠！篝火上会"烧女巫"祈求好运。' },
        { text: '狂欢节打碎盆', img: 'fastelavn', desc: '丹麦狂欢节孩子们穿着奇装异服，用棍子打碎装满糖果的盆，就像打碎彩罐一样好玩！' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球曾获欧洲杯', img: 'football-denmark', desc: '1992年丹麦队替补参赛却奇迹般赢得欧洲杯！这个故事被称为"丹麦童话"，激励了无数人。' },
        { text: '手球传统强项', img: 'handball-denmark', desc: '丹麦手球队是世界强队！男子和女子队伍都获得过世界冠军，球迷们热情支持。' },
        { text: '自行车普及率高', img: 'cycling-denmark', desc: '丹麦人超级爱骑自行车！哥本哈根被称为自行车之都，人们骑车通勤、购物、带孩子。' }
      ]
    }
  },

  'finland': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '圣诞老人故乡', img: 'santa-claus-village', desc: '芬兰拉普兰是圣诞老人的故乡！圣诞老人村在北极圈上，可以寄信给圣诞老人，他会回信哦！' },
        { text: '桑拿是国粹', img: 'finnish-sauna', desc: '芬兰有550万人，却有300万个桑拿房！芬兰人每周蒸桑拿，这是他们最重要的传统。' },
        { text: '诺基亚曾主导手机', img: 'nokia', desc: '芬兰公司诺基亚曾经是手机之王！全世界都在用诺基亚手机，那个贪吃蛇游戏你们玩过吗？' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '驯鹿肉是特色', img: 'reindeer-meat', desc: '驯鹿肉是芬兰传统美食！肉质细嫩、脂肪少，做成驯鹿肉排或驯鹿肉饼，是拉普兰的特色。' },
        { text: '黑麦面包健康', img: 'rye-bread', desc: '芬兰黑麦面包颜色深、口感紧实，非常有嚼劲！芬兰人每天都要吃，是健康的主食。' },
        { text: '浆果野莓丰富', img: 'finnish-berries', desc: '芬兰森林里有各种浆果：蓝莓、树莓、云莓！芬兰人夏天去森林采摘，做成酱或甜点。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '仲夏节点篝火', img: 'midsummer-finland', desc: '仲夏节芬兰人在湖边或海边点篝火！大家唱歌跳舞，庆祝短暂而美丽的夏天。' },
        { text: '独立日庄重庆祝', img: 'finland-independence-day', desc: '12月6日独立日，人们点燃蜡烛，在窗边静静怀念。总统府举办盛大舞会，全国观看直播。' },
        { text: '圣诞节传统温馨', img: 'christmas-finland', desc: '芬兰是圣诞老人故乡，圣诞节气氛特别浓！人们吃圣诞火腿、姜饼，拜访圣诞老人村。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冰球是国民运动', img: 'ice-hockey-finland', desc: '芬兰冰球是世界强队！球员像狮子一样勇猛，球迷们挥舞着蓝白旗帜疯狂助威。' },
        { text: '赛车有传奇车手', img: 'f1-finland', desc: '芬兰出了很多F1传奇车手！哈基宁和莱科宁都是世界冠军，芬兰人被称为"飞行芬兰人"。' },
        { text: '冬季运动普及', img: 'winter-sports-finland', desc: '芬兰冬季运动很普及，滑雪、滑冰、冬季两项都很受欢迎。漫长的冬天给了他们天然优势！' }
      ]
    }
  },

  'iceland': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '火山岛国神奇', img: 'iceland-volcano', desc: '冰岛有130多座火山！岛上有温泉、间歇泉和冰川，像另一个星球，电影《星际穿越》在这里取景。' },
        { text: '维京人最早定居', img: 'viking-settlement', desc: '公元9世纪，维京人发现了冰岛！他们驾着龙头船来到这片冰雪之地，开始了新的生活。' },
        { text: '蓝湖温泉著名', img: 'blue-lagoon', desc: '蓝湖温泉是冰岛最有名的温泉！乳蓝色的温泉水富含矿物质，泡在里面超舒服。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '发酵鲨鱼肉独特', img: 'fermented-shark', desc: '发酵鲨鱼肉是冰岛传统美食，味道非常特别！它是把鲨鱼埋在沙子里发酵，口感像奶酪。' },
        { text: '热狗世界级美味', img: 'icelandic-hotdog', desc: '冰岛热狗被称为世界最好吃的热狗！用羊肉、牛肉和猪肉混合做成，配上脆洋葱和酱料。' },
        { text: '酸奶Skyr健康', img: 'skyr-yogurt', desc: 'Skyr是冰岛传统酸奶，蛋白质超高、脂肪超低！口感像奶酪一样浓郁，是健康食品首选。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'iceland-independence-day', desc: '6月17日独立日，冰岛人穿着传统服装游行庆祝！街头有音乐表演和舞蹈，气氛欢乐。' },
        { text: '仲夏节点燃篝火', img: 'midsummer-iceland', desc: '仲夏节冰岛人点燃篝火、放烟花，庆祝短暂而美丽的夏天！午夜太阳不落山，天空一直亮着。' },
        { text: '圣诞节传统独特', img: 'christmas-iceland', desc: '冰岛有13个圣诞老人！他们在圣诞节前13天每天来一个，给乖孩子送礼物，淘气的孩子只能得到土豆。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '手球创造奇迹', img: 'handball-iceland', desc: '冰岛手球队虽小国寡民，却在北京奥运会上获得银牌！这个奇迹激励了所有冰岛人。' },
        { text: '足球人口奇迹', img: 'football-iceland', desc: '冰岛只有35万人，却打进了欧洲杯和世界杯！球迷们整齐地拍手呐喊，场面震撼。' },
        { text: '大力士传统悠久', img: 'strongman-iceland', desc: '冰岛有很多大力士冠军！他们参加拔河、举石头、拉卡车等力量比赛，展现了维京人的力量。' }
      ]
    }
  },

  // ----- 南欧 -----
  'italy': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '罗马帝国辉煌灿烂', img: 'roman-empire', desc: '罗马帝国曾统治整个地中海，持续500年！古罗马人修建了道路、浴场、斗兽场，创造了伟大文明。' },
        { text: '文艺复兴发源地', img: 'renaissance', desc: '文艺复兴在意大利开始！达芬奇、米开朗基罗、拉斐尔创造了无数杰作，让艺术重生。' },
        { text: '威尼斯水城独特', img: 'venice', desc: '威尼斯建在水上，有400多座桥！人们坐船出行，每年狂欢节戴面具游行，像童话世界。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '披萨风靡全球', img: 'pizza', desc: '披萨是意大利最有名的美食！那不勒斯是披萨的发源地，玛格丽特披萨有红白绿三种颜色，像意大利国旗。' },
        { text: '意面种类繁多', img: 'pasta', desc: '意大利有300多种面！细面、宽面、螺旋面、蝴蝶面...每种配不同的酱，怎么吃都好吃。' },
        { text: '冰淇淋Gelato', img: 'gelato', desc: '意大利冰淇淋Gelato是全世界最好吃的！它比普通冰淇淋空气少、口感更浓郁，有多种口味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '威尼斯狂欢节盛名', img: 'venice-carnival', desc: '威尼斯狂欢节是世界上最著名的狂欢节！人们戴着华丽的面具，穿着中世纪服装，在运河边游行。' },
        { text: '圣诞节传统温馨', img: 'christmas-italy', desc: '意大利圣诞节有传统"女巫"Befana，在1月6日给孩子们送礼物！她骑着扫把从烟囱进来。' },
        { text: '赛船节历史悠久', img: 'regatta', desc: '威尼斯赛船节有500多年历史！人们穿着古装划船，穿过大运河，纪念威尼斯的辉煌历史。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球四次世界杯', img: 'football-italy', desc: '意大利足球队赢得过4次世界杯！他们的防守像铜墙铁壁，被称为"蓝色军团"。' },
        { text: 'F1赛车传统强队', img: 'f1-italy', desc: '意大利有著名的法拉利车队！红色的赛车在赛道上飞驰，引擎声轰鸣，是F1的经典画面。' },
        { text: '自行车比赛盛行', img: 'cycling-italy', desc: '环意大利自行车赛是三大环赛之一！选手们穿越阿尔卑斯山和乡村，风景如画。' }
      ]
    }
  },

  'spain': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '斗牛文化历史悠久', img: 'bullfighting', desc: '斗牛是西班牙传统，有300多年历史！斗牛士穿着华丽的服装，勇敢地与公牛搏斗，非常刺激。' },
        { text: '高迪建筑独特', img: 'gaudi-architecture', desc: '高迪设计的建筑像童话里的房子！圣家堂修了140年还没修完，成为巴塞罗那的地标。' },
        { text: '大航海时代先驱', img: 'spanish-exploration', desc: '500年前，西班牙航海家发现新大陆！哥伦布、麦哲伦的船队从西班牙出发，改变了世界。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '西班牙海鲜饭', img: 'paella', desc: '海鲜饭是西班牙最有名的美食！在大平底锅里炒米饭，加海鲜和藏红花，颜色金黄诱人。' },
        { text: '塔帕斯小食丰富', img: 'tapas', desc: '塔帕斯是西班牙小食，有几百种！可以是橄榄、火腿、土豆饼，配酒吃，一种一种尝超好玩。' },
        { text: '火腿世界顶级', img: 'spanish-ham', desc: '西班牙火腿是全世界最好吃的！黑猪火腿腌制多年，薄薄切下来，入口即化，超香。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '奔牛节刺激惊险', img: 'running-of-the-bulls', desc: '奔牛节上，人们和公牛一起在街上跑！虽然很危险，但刺激无比，每年吸引无数人参加。' },
        { text: '番茄大战有趣', img: 'tomatina', desc: '番茄大战是世界上最大的食物大战！人们用番茄互相扔，整个街道变成红色的番茄汁河。' },
        { text: '圣周游行庄严', img: 'holy-week', desc: '圣周是西班牙最重要的宗教节日！人们穿着长袍戴尖帽，抬着雕像在街上游行，气氛庄严。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球双雄争霸', img: 'football-spain', desc: '西班牙有皇马和巴萨两大豪门！它们的对决"世纪德比"吸引全球关注，球迷们疯狂呐喊。' },
        { text: '网球名将辈出', img: 'tennis-spain', desc: '西班牙是网球强国！纳达尔是红土之王，赢得过22个大满贯，他的意志力令人敬佩。' },
        { text: '篮球实力强劲', img: 'basketball-spain', desc: '西班牙篮球是世界强队！男篮和女篮都获得过世界冠军，加索尔兄弟是传奇球星。' }
      ]
    }
  },

  'portugal': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '大航海先驱', img: 'portuguese-exploration', desc: '葡萄牙是最早开始大航海的国家！达伽马开辟了通往印度的航线，麦哲伦第一次环球航行。' },
        { text: '贝伦塔是地标', img: 'belem-tower', desc: '贝伦塔有500多年历史，是里斯本的象征！它建在河岸边，是航海家出发的地方。' },
        { text: '法朵音乐忧郁', img: 'fado-music', desc: '法朵是葡萄牙传统音乐，歌曲忧郁动人！歌手唱着思念和悲伤，让人听了想流泪。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '蛋挞世界闻名', img: 'portuguese-tart', desc: '葡式蛋挞是葡萄牙最有名的甜点！外皮酥脆、内馅嫩滑，热腾腾撒上肉桂粉，香甜可口。' },
        { text: '鳕鱼是国菜', img: 'bacalhau', desc: '葡萄牙人说有365种做鳕鱼的方法，一年每天不重样！腌制的鳕鱼配土豆和橄榄油，超美味。' },
        { text: '波特酒独特', img: 'port-wine', desc: '波特酒是葡萄牙特产甜酒！在波尔图酒窖里陈酿多年，颜色深、口感醇厚，是餐后甜酒首选。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣安东尼奥节', img: 'saint-anthony', desc: '6月里斯本街头摆满沙丁鱼摊！人们吃烤沙丁鱼、跳传统舞蹈，庆祝城市的守护圣人。' },
        { text: '狂欢节热闹', img: 'carnival-portugal', desc: '葡萄牙狂欢节人们穿着奇装异服游行！最特别的是Torres Vedras的狂欢节，有巨型卡通人偶。' },
        { text: '圣诞节温馨传统', img: 'christmas-portugal', desc: '葡萄牙圣诞节有"烧圣诞木头"的传统！家人围在一起吃 bacalhau，迎接新的一年。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球有超级巨星', img: 'football-portugal', desc: '葡萄牙足球有C罗这样的超级巨星！他赢得过5次金球奖，是历史上最伟大的球员之一。' },
        { text: '足球2016年夺冠', img: 'euro-2016', desc: '2016年葡萄牙队首次赢得欧洲杯冠军！全国人民涌上街头庆祝，这是历史性的时刻。' },
        { text: '冲浪运动发展', img: 'surfing-portugal', desc: '葡萄牙海岸有大浪，是冲浪胜地！纳扎雷的巨浪有30多米高，吸引世界顶级冲浪者挑战。' }
      ]
    }
  },

  'greece': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '雅典是文明摇篮', img: 'athens', desc: '雅典是西方文明的发源地！2500年前，这里诞生了民主、哲学和奥林匹克，影响了整个世界。' },
        { text: '奥林匹亚发源地', img: 'olympia', desc: '奥林匹克运动会在古希腊诞生！每四年举办一次，运动员们裸体竞技，纪念宙斯神。' },
        { text: '神话故事丰富', img: 'greek-mythology', desc: '希腊神话有无数神和英雄！宙斯、雅典娜、阿波罗...每个神都有自己的故事，至今仍在流传。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '希腊沙拉清爽', img: 'greek-salad', desc: '希腊沙拉有新鲜番茄、黄瓜、洋葱和巨大的羊奶酪块！淋上橄榄油，是夏天最清爽的美食。' },
        { text: '穆萨卡层次丰富', img: 'moussaka', desc: '穆萨卡是希腊传统菜，像千层蛋糕！一层茄子、一层肉酱、再铺上奶油烤制，香浓美味。' },
        { text: '酸奶配蜂蜜', img: 'greek-yogurt', desc: '希腊酸奶比普通酸奶更浓稠！配上蜂蜜和核桃，是希腊人最爱的甜点，健康又好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '复活节最重要', img: 'easter-greece', desc: '希腊复活节是最重要的节日！午夜点蜡烛游行，吃烤羊肉和传统蛋糕，庆祝三天三夜。' },
        { text: '狂欢节有趣', img: 'carnival-greece', desc: '希腊狂欢节人们戴面具、穿奇装异服上街！最特别的是在帕特雷，有花车游行和派对。' },
        { text: '命名日庆祝', img: 'name-day-greece', desc: '希腊人更重视命名日而不是生日！每个人根据名字有对应的圣人日，那天会开派对庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '马拉松起源于此', img: 'marathon-greece', desc: '马拉松比赛起源于希腊！传说士兵从马拉松跑到雅典报捷，喊完"我们赢了"就倒下了。' },
        { text: '篮球是第二运动', img: 'basketball-greece', desc: '希腊篮球是欧洲强队！2004年他们击败美国梦之队，创造了篮球史上的奇迹。' },
        { text: '足球热情高涨', img: 'football-greece', desc: '2004年希腊队奇迹般赢得欧洲杯！这是足球史上最大的黑马故事之一，激励了无数人。' }
      ]
    }
  },

  // ----- 东欧 -----
  'russia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '克里姆林宫宏伟', img: 'kremlin', desc: '克里姆林宫是俄罗斯的政治中心，有800多年历史！红墙内有金色洋葱顶教堂，是莫斯科地标。' },
        { text: '冬宫是世界级博物馆', img: 'hermitage-museum', desc: '冬宫是世界上最大的博物馆之一，有300万件藏品！如果每件看1分钟，需要6年才能看完。' },
        { text: '文学大师辈出', img: 'russian-literature', desc: '俄罗斯有托尔斯泰、陀思妥耶夫斯基、契诃夫等文学巨匠！他们的作品影响了整个世界。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '罗宋汤是国菜', img: 'borscht', desc: '罗宋汤是红色的甜菜汤，配酸奶油喝！冬天来一碗热乎乎的红汤，浑身都暖和了。' },
        { text: '鱼子酱是奢侈品', img: 'caviar', desc: '俄罗斯鱼子酱是世界上最昂贵的美食之一！黑黑的鱼子放在薄饼上，配酸奶油吃。' },
        { text: '布林饼传统美味', img: 'blini', desc: '布林饼是俄罗斯传统薄饼，可以配鱼子酱、酸奶油或果酱！类似可丽饼但更小更厚。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '胜利日隆重', img: 'victory-day', desc: '5月9日胜利日是俄罗斯最重要的节日！红场有盛大阅兵，展示坦克和导弹，纪念二战胜利。' },
        { text: '谢肉节吃薄饼', img: 'maslenitsa', desc: '谢肉节是俄罗斯送冬迎春的节日！人们吃薄饼、烧掉象征冬天的稻草人，庆祝春天到来。' },
        { text: '新年是最重要', img: 'new-year-russia', desc: '俄罗斯新年比圣诞节更重要！人们喝香槟、看总统讲话、吃"奥利维尔沙拉"庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冰球是世界冠军', img: 'ice-hockey-russia', desc: '俄罗斯冰球队是世界强队！他们的技术像艺术一样优美，球员被称为"红色机器"。' },
        { text: '体操多次夺冠', img: 'gymnastics-russia', desc: '俄罗斯体操是传统强项！选手动作优美、技术精湛，在奥运会上赢得过无数金牌。' },
        { text: '足球主办世界杯', img: 'world-cup-russia', desc: '2018年俄罗斯主办世界杯，建了很多新体育场！全世界球迷来到俄罗斯，气氛热烈。' }
      ]
    }
  },

  'poland': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '华沙古城重建', img: 'warsaw-old-town', desc: '华沙古城在二战中被毁，波兰人用画重建了它！他们凭记忆和画作，一砖一瓦恢复原貌，是奇迹。' },
        { text: '肖邦是音乐大师', img: 'chopin', desc: '肖邦是波兰最伟大的音乐家，被称为"钢琴诗人"！他的《夜曲》和《波兰舞曲》举世闻名。' },
        { text: '克拉科夫历史名城', img: 'krakow', desc: '克拉科夫是波兰古都，有1000多年历史！老城广场、城堡和教堂保存完好，像中世纪穿越。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '饺子Pierogi是国菜', img: 'pierogi', desc: '波兰饺子有各种馅：土豆、奶酪、肉、酸菜！煮熟后煎一下，配酸奶油，超级好吃。' },
        { text: '罗宋汤传统美味', img: 'barszcz', desc: '波兰红汤Borscht是传统美食！红色的汤配小饺子，冬天喝一碗暖和极了。' },
        { text: '香肠种类丰富', img: 'polish-sausage', desc: '波兰香肠Kielbasa有几十种！烤着吃、煮着吃、配酸菜吃，是波兰人的家常美食。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '复活节彩蛋传统', img: 'easter-egg-poland', desc: '波兰复活节有画彩蛋传统！人们用蜡染法在蛋上画精美图案，这是代代相传的艺术。' },
        { text: '圣安德鲁节', img: 'st-andrew-day', desc: '11月29日圣安德鲁节，年轻女孩们预测未来夫婿！倒蜡烛、数苹果皮，是古老的传统。' },
        { text: '圣诞节丰盛', img: 'christmas-poland', desc: '波兰圣诞晚餐有12道菜，代表12门徒！全家人一起准备，开饭前看天上星星，超温馨。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-poland', desc: '足球是波兰最受欢迎的运动！莱万多夫斯基是世界顶级球星，进球能力惊人。' },
        { text: '排球实力强劲', img: 'volleyball-poland', desc: '波兰排球是世界强队！男排曾获得世界冠军，每场比赛球迷们疯狂呐喊助威。' },
        { text: '速滑冬季运动', img: 'speed-skating-poland', desc: '波兰速滑运动员在冬奥会上表现出色！特别是女子选手，多次获得奥运奖牌。' }
      ]
    }
  },

  'czech-republic': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '布拉格古城美丽', img: 'prague-old-town', desc: '布拉格被称为"百塔之城"，有1100多年历史！老城广场的天文钟每小时有小人偶出来表演。' },
        { text: '查理大桥历史悠久', img: 'charles-bridge', desc: '查理大桥有650多年历史，桥上有30座圣像！传说摸一摸桥上的圣约翰雕像会带来好运。' },
        { text: '波西米亚文化独特', img: 'bohemian-culture', desc: '波西米亚是捷克的历史地区，有独特的艺术和文化！"波西米亚风格"就是从这里来的。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤鸭配饺子', img: 'roasted-duck', desc: '捷克烤鸭配"饺子"——其实是面包饺子！鸭子烤得皮脆肉嫩，配上紫甘蓝，是传统大餐。' },
        { text: '啤酒世界一流', img: 'czech-beer', desc: '捷克啤酒是全世界最好的！皮尔森啤酒就诞生在这里，人均啤酒消费量世界第一！' },
        { text: '特雷德尼克香甜', img: 'trdelnik', desc: '特雷德尼克是圆柱形甜点，外面裹糖和肉桂！街头巷尾都能买到，热乎乎超香。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '复活节传统独特', img: 'easter-czech', desc: '捷克复活节男孩用柳条鞭"打"女孩，女孩送彩蛋！这是古老的传统，意味着健康和美丽。' },
        { text: '圣诞节温馨传统', img: 'christmas-czech', desc: '捷克圣诞节吃鲤鱼和土豆沙拉！人们会在池塘边买活鲤鱼，养在浴缸里到圣诞节吃。' },
        { text: '春节庆典热闹', img: 'spring-festival-prague', desc: '布拉格春季庆典是传统艺术节！音乐、戏剧、舞蹈表演在城市的各个角落举行。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冰球是国民运动', img: 'ice-hockey-czech', desc: '捷克冰球是世界强队！他们多次获得世界冠军，球员技术精湛，配合默契。' },
        { text: '足球历史悠久', img: 'football-czech', desc: '捷克足球有悠久历史，内德维德是最有名的球星！他赢得过金球奖，是足球传奇。' },
        { text: '网球名将辈出', img: 'tennis-czech', desc: '捷克出过很多网球名将！女将纳芙拉蒂诺娃是历史上最伟大的选手之一。' }
      ]
    }
  },

  'hungary': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '布达佩斯温泉之都', img: 'budapest-thermal-bath', desc: '布达佩斯有100多个温泉！塞切尼温泉是最大的，人们泡温泉下国际象棋，太悠闲了。' },
        { text: '国会大厦壮观', img: 'hungarian-parliament', desc: '匈牙利国会大厦是欧洲最美的建筑之一！有691个房间，屋顶是金色的，夜晚灯光璀璨。' },
        { text: '匈牙利人来自东方', img: 'hungarian-origins', desc: '匈牙利人的祖先来自亚洲！他们的语言和芬兰语相似，是欧洲唯一的非印欧语系国家。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '炖牛肉汤Goulash', img: 'goulash', desc: '炖牛肉汤是匈牙利国菜！用牛肉、土豆、辣椒粉炖煮，冬天喝一碗热乎乎的，超满足。' },
        { text: '辣椒粉是灵魂', img: 'paprika', desc: '匈牙利辣椒粉是菜的灵魂！有甜的和辣的两种，加入菜里，颜色红艳艳的，很开胃。' },
        { text: '烟囱卷甜点', img: 'kurtoskalacs', desc: '烟囱卷是匈牙利传统甜点！面团绕在圆柱上烤，外面裹糖和肉桂，像烟囱一样空心。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '布达佩斯春之节', img: 'spring-festival-budapest', desc: '布达佩斯春之节是匈牙利最大的艺术节！音乐、舞蹈、戏剧表演在城市各处举行，持续两周。' },
        { text: '国庆日烟火璀璨', img: 'hungary-national-day', desc: '8月20日国庆日，布达佩斯上空放烟花！人们聚集在多瑙河边，看烟花照亮国会大厦。' },
        { text: '圣诞集市温馨', img: 'christmas-hungary', desc: '布达佩斯圣诞集市在欧洲排名前列！小木屋卖手工艺品和热红酒，空气中弥漫着香料味。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '水球是王者', img: 'water-polo', desc: '匈牙利水球是世界最强！他们赢得过9次奥运金牌，是当之无愧的"水球王国"。' },
        { text: '足球有过辉煌', img: 'football-hungary', desc: '1950年代匈牙利队是世界最强，被称为"神奇的马扎尔人"！他们发明了新的足球战术。' },
        { text: '游泳名将辈出', img: 'swimming-hungary', desc: '匈牙利游泳运动员很厉害！特别是女子选手，在奥运会上多次获得金牌。' }
      ]
    }
  },

  // ===== 北美洲 =====

  // ----- 北美 -----
  'united-states': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '自由女神像象征自由', img: 'statue-of-liberty', desc: '自由女神像是纽约的标志，高93米！她手持火炬照亮世界，是法国送给美国的礼物，欢迎来自世界各地的移民。' },
        { text: '独立宣言开创历史', img: 'independence-hall', desc: '1776年美国发表《独立宣言》，宣布人人生而平等！这份文件改变了世界，开启了民主的新时代。' },
        { text: '好莱坞是电影之都', img: 'hollywood', desc: '好莱坞是世界电影之都！这里有星光大道、奥斯卡奖，很多电影明星和导演都在这里实现梦想。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '汉堡是经典美食', img: 'hamburger', desc: '汉堡是美国最具代表性的美食！两片面包夹着肉饼、生菜、番茄和酱料，一口咬下去超满足！' },
        { text: '苹果派是传统甜点', img: 'apple-pie', desc: '苹果派被称为"美国妈妈的味道"！酥脆的外皮包着甜美的苹果馅，是感恩节必备的甜点。' },
        { text: '烧烤文化深厚', img: 'barbecue', desc: '美国烧烤有德州、堪萨斯等多种风味！慢烤的肉配上特制酱料，香气四溢，是家庭聚会的首选。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '感恩节家庭团聚', img: 'thanksgiving', desc: '感恩节是美国最重要的家庭节日！家人聚在一起吃烤火鸡、南瓜派，感谢这一年的收获和幸福。' },
        { text: '独立日烟花璀璨', img: 'independence-day', desc: '7月4日独立日，美国到处放烟花庆祝！人们穿红白蓝三色衣服、吃热狗、看游行，气氛超热烈。' },
        { text: '万圣节盛装游行', img: 'halloween', desc: '万圣节孩子们穿奇装异服挨家挨户要糖！南瓜灯、鬼怪装饰、恐怖电影，是又怕又好玩的节日。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '美式橄榄球最受欢迎', img: 'american-football', desc: '美式橄榄球是美国最受欢迎的运动！NFL超级碗是美国收视率最高的电视节目，像过年一样热闹。' },
        { text: '棒球被称为国球', img: 'baseball', desc: '棒球是美国国球！夏天一家人去棒球场看比赛、吃热狗，是美国最经典的家庭活动。' },
        { text: '篮球风靡全球', img: 'basketball', desc: 'NBA是世界上最好的篮球联赛！乔丹、科比、詹姆斯都是传奇球星，他们的比赛精彩绝伦。' }
      ]
    }
  },

  'canada': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '尼亚加拉大瀑布壮观', img: 'niagara-falls', desc: '尼亚加拉大瀑布是世界最著名的瀑布之一！每秒有240万升水倾泻而下，水雾像云一样壮观。' },
        { text: '枫叶是国旗标志', img: 'maple-leaf', desc: '加拿大国旗上的红枫叶是国家象征！加拿大到处都是枫树，秋天枫叶变红，美得像画一样。' },
        { text: '原住民文化丰富', img: 'indigenous-culture', desc: '加拿大有丰富的原住民文化！图腾柱、捕梦网、独木舟都是原住民的创造，讲述着古老的故事。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '枫糖浆是世界闻名', img: 'maple-syrup', desc: '枫糖浆是加拿大的特产！春天人们收集枫树汁熬成糖浆，淋在煎饼上香甜无比。' },
        { text: '肉汁奶酪薯条', img: 'poutine', desc: '肉汁奶酪薯条是加拿大的国菜！炸薯条配上奶酪粒和肉汁，热量高但超好吃，是深夜美食首选。' },
        { text: '冰酒甘甜醇香', img: 'ice-wine', desc: '冰酒是加拿大特产！用冰冻的葡萄酿造，口感像蜂蜜一样甜美，是世界顶级的甜酒。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '加拿大日盛大庆祝', img: 'canada-day', desc: '7月1日加拿大日是全国欢庆的日子！穿红白衣服、看烟花、参加游行，到处都是枫叶旗。' },
        { text: '冬季狂欢节热闹', img: 'winter-carnival', desc: '魁北克冬季狂欢节是世界上最大的冬季嘉年华！冰雕、雪橇、冰上划船，把寒冷变成欢乐。' },
        { text: '感恩节家庭团聚', img: 'thanksgiving-canada', desc: '加拿大感恩节在10月第二个周一！家人聚在一起吃烤火鸡、南瓜派，感谢丰收和幸福。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '冰球是国球', img: 'ice-hockey-canada', desc: '冰球是加拿大国球！几乎每个孩子都会滑冰打冰球，加拿大队是世界最强的冰球队之一。' },
        { text: '滑雪运动普及', img: 'skiing-canada', desc: '加拿大是滑雪天堂！落基山脉有世界顶级的雪场，粉雪又厚又软，滑雪者梦寐以求。' },
        { text: '篮球发明于加拿大', img: 'basketball-canada', desc: '篮球是由加拿大人奈史密斯发明的！现在NBA有多伦多猛龙队，加拿大篮球发展迅速。' }
      ]
    }
  },

  'mexico': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '玛雅文明神秘辉煌', img: 'maya-ruins', desc: '玛雅文明是墨西哥古代文明！他们建造了金字塔、发明了历法，留下了神秘的预言和美丽的遗迹。' },
        { text: '阿兹特克帝国强大', img: 'aztec-empire', desc: '阿兹特克帝国曾经统治墨西哥！他们的首都建在湖上，有金字塔和宫殿，是当时最大的城市之一。' },
        { text: '金字塔壮观宏伟', img: 'teotihuacan', desc: '特奥蒂瓦坎古城有巨大的太阳金字塔和月亮金字塔！2000年前建造，至今仍然宏伟壮观。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饼是主食', img: 'tortilla', desc: '玉米饼是墨西哥的主食！用玉米面做的薄饼，可以包各种馅料，墨西哥人每天都要吃。' },
        { text: '塔可是国民美食', img: 'taco', desc: '塔可是墨西哥最有名的美食！玉米饼包着肉、洋葱、香菜和辣酱，一口咬下去超满足。' },
        { text: '辣椒酱种类繁多', img: 'salsa', desc: '墨西哥有上百种辣椒酱！从温和到超辣，搭配各种食物，墨西哥人吃饭离不开辣椒。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '亡灵节色彩缤纷', img: 'day-of-the-dead', desc: '亡灵节是墨西哥最重要的节日！人们画骷髅妆、建祭坛、摆万寿菊，欢迎逝去的亲人回家团聚。' },
        { text: '独立日热情庆祝', img: 'mexico-independence-day', desc: '9月16日独立日，墨西哥人高喊"自由"！钟声响起、烟花绽放，全国人民热情庆祝。' },
        { text: '圣诞节传统温馨', img: 'christmas-mexico', desc: '墨西哥圣诞节有"波萨达斯"游行！人们装扮成玛丽亚和约瑟夫挨家挨户敲门，重演圣经故事。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是第一运动', img: 'football-mexico', desc: '足球是墨西哥最受欢迎的运动！世界杯时全国人民都为球队加油，球迷热情世界闻名。' },
        { text: '拳击名将辈出', img: 'boxing-mexico', desc: '墨西哥是拳击强国！出了很多世界冠军，拳手们以顽强的意志和进攻性打法著称。' },
        { text: '棒球也受欢迎', img: 'baseball-mexico', desc: '墨西哥棒球发展很好！有很多球员进入美国职棒大联盟，墨西哥联赛也很受欢迎。' }
      ]
    }
  },

  // ----- 中美 -----
  'guatemala': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '玛雅遗址蒂卡尔', img: 'tikal', desc: '蒂卡尔是玛雅最大的遗址之一！高大的金字塔藏在热带雨林中，曾经是玛雅最重要的城市。' },
        { text: '安提瓜古城美丽', img: 'antigua-guatemala', desc: '安提瓜古城是殖民时期的首都！彩色房子、鹅卵石街道，被火山环绕，是中美洲最美的城市之一。' },
        { text: '火山景观壮观', img: 'volcano-guatemala', desc: '危地马拉有37座火山！其中三座是活火山，火山湖和火山景观美不胜收，吸引无数游客。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饼配炖肉', img: 'pepian', desc: '玉米饼配炖肉是危地马拉国菜！用辣椒、芝麻和香料炖肉，配上米饭和玉米饼，香浓美味。' },
        { text: '玉米粽子传统', img: 'tamale-guatemala', desc: '玉米粽子是危地马拉传统美食！用玉米叶包着玉米面和肉馅蒸制，圣诞节必吃。' },
        { text: '咖啡世界闻名', img: 'guatemala-coffee', desc: '危地马拉咖啡是世界顶级咖啡！火山土壤培育出风味独特的咖啡豆，香气浓郁。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '亡灵节传统独特', img: 'day-of-the-dead-guatemala', desc: '危地马拉亡灵节有放巨型风筝的传统！人们相信风筝能把祝福带给逝去的亲人。' },
        { text: '圣周游行盛大', img: 'holy-week-guatemala', desc: '安提瓜的圣周游行是世界闻名的！人们抬着雕像在铺满花的地毯上游行，场面壮观。' },
        { text: '独立日欢庆', img: 'guatemala-independence-day', desc: '9月15日独立日，学生们举着火炬跑步传递独立精神！全国都有游行和庆祝活动。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-guatemala', desc: '足球是危地马拉最受欢迎的运动！每逢国家队比赛，球迷们热情高涨，球场座无虚席。' },
        { text: '自行车运动发展', img: 'cycling-guatemala', desc: '危地马拉自行车运动发展良好！有专业的自行车公路赛，山地自行车也很流行。' },
        { text: '马拉松比赛举办', img: 'marathon-guatemala', desc: '危地马拉每年举办马拉松比赛！选手们跑过古城和火山，风景如画。' }
      ]
    }
  },

  'honduras': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '科潘玛雅遗址', img: 'copan-ruins', desc: '科潘是玛雅文明的重要遗址！有精美的石雕和阶梯文字，被称为玛雅的"雅典"。' },
        { text: '加勒比海岸美丽', img: 'caribbean-coast', desc: '洪都拉斯加勒比海岸有美丽的海滩和珊瑚礁！清澈的海水、白色沙滩，是潜水天堂。' },
        { text: '殖民历史丰富', img: 'colonial-history-honduras', desc: '洪都拉斯有丰富的殖民历史！西班牙殖民者带来了天主教和西班牙文化，影响了当地生活。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饼配豆饭', img: 'baleada', desc: '玉米饼配豆饭是洪都拉斯最经典的美食！薄饼涂上豆泥和奶油，简单却美味，是国民早餐。' },
        { text: '海鲜丰富新鲜', img: 'seafood-honduras', desc: '洪都拉斯加勒比海岸海鲜超新鲜！烤鱼、虾和龙虾配上椰子饭，热带风味十足。' },
        { text: '热带水果丰富', img: 'tropical-fruits-honduras', desc: '洪都拉斯盛产热带水果！芒果、菠萝、木瓜到处都是，新鲜多汁，便宜又好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣周传统重要', img: 'holy-week-honduras', desc: '圣周是洪都拉斯最重要的宗教节日！人们参加教堂活动、游行和祈祷，纪念耶稣受难。' },
        { text: '独立日庆祝', img: 'honduras-independence-day', desc: '9月15日独立日，全国举行游行和庆祝活动！学生们表演传统舞蹈和音乐。' },
        { text: '圣诞节温馨', img: 'christmas-honduras', desc: '洪都拉斯圣诞节家庭团聚、吃传统美食！午夜弥撒后放烟花，迎接圣诞节到来。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是国球', img: 'football-honduras', desc: '足球是洪都拉斯国球！国家队曾多次参加世界杯，球迷们对足球热情高涨。' },
        { text: '棒球发展良好', img: 'baseball-honduras', desc: '洪都拉斯棒球发展良好！很多球员进入美国职棒大联盟，在国内也很受欢迎。' },
        { text: '潜水运动普及', img: 'diving-honduras', desc: '洪都拉斯是潜水胜地！加勒比海的珊瑚礁和海洋生物丰富，吸引世界各地潜水爱好者。' }
      ]
    }
  },

  'el-salvador': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '玛雅遗址圣安德烈斯', img: 'san-andres-ruins', desc: '圣安德烈斯是萨尔瓦多重要的玛雅遗址！有金字塔和广场，展示了玛雅文明的发展。' },
        { text: '火山之国独特', img: 'volcanoes-el-salvador', desc: '萨尔瓦多被称为"火山之国"！有20多座火山，火山土壤肥沃，孕育了独特的风景。' },
        { text: '和平协定历史性', img: 'peace-accords', desc: '1992年和平协定结束了内战！这个历史性协定让国家走向和平，成为民主国家的转折点。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '普普萨是国菜', img: 'pupusa', desc: '普普萨是萨尔瓦多国菜！厚厚的玉米饼包着奶酪或豆馅，配酸菜吃，是国民美食。' },
        { text: '海鲜汤鲜美', img: 'seafood-soup', desc: '萨尔瓦多海鲜汤用新鲜海鲜炖制！配上椰奶和香料，汤汁鲜美，是沿海地区的特色。' },
        { text: '玉米饮料传统', img: 'atol', desc: '玉米饮料是传统饮品！用玉米、肉桂和糖煮成，热乎乎喝下去，温暖又香甜。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '亡灵节传统', img: 'day-of-the-dead-el-salvador', desc: '亡灵节萨尔瓦多人建祭坛、摆鲜花和食物！和家人一起去墓地扫墓，纪念逝去的亲人。' },
        { text: '圣周游行', img: 'holy-week-el-salvador', desc: '圣周有盛大的宗教游行！人们抬着耶稣和圣母的雕像在街上游行，气氛庄严。' },
        { text: '独立日庆祝', img: 'el-salvador-independence-day', desc: '9月15日独立日，学校举行游行和表演！学生们穿着传统服装跳舞庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是第一运动', img: 'football-el-salvador', desc: '足球是萨尔瓦多最受欢迎的运动！国家队和俱乐部比赛吸引大量球迷观看。' },
        { text: '冲浪运动发展', img: 'surfing-el-salvador', desc: '萨尔瓦多海岸是冲浪胜地！太平洋的浪非常适合冲浪，吸引了很多国际比赛。' },
        { text: '篮球逐渐普及', img: 'basketball-el-salvador', desc: '篮球在萨尔瓦多逐渐普及！学校和社区都有篮球场，年轻人越来越喜欢这项运动。' }
      ]
    }
  },

  'nicaragua': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '格拉纳达古城美丽', img: 'granada-nicaragua', desc: '格拉纳达是中美洲最古老的殖民城市之一！彩色房子、教堂和鹅卵石街道，充满历史韵味。' },
        { text: '马萨亚火山活跃', img: 'masaya-volcano', desc: '马萨亚火山是尼加拉瓜最活跃的火山！可以开车到火山口边，看到里面的熔岩湖在发光。' },
        { text: '湖与火山独特', img: 'lake-nicaragua', desc: '尼加拉瓜湖是中美洲最大的湖！湖里有世界唯一的淡水鲨鱼，还有美丽的火山岛。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饭是主食', img: 'gallo-pinto', desc: '玉米饭是尼加拉瓜的国民早餐！米饭和黑豆一起炒，配鸡蛋、奶酪和玉米饼，营养又美味。' },
        { text: '玉米饮料清爽', img: 'chicha', desc: '奇查是尼加拉瓜传统饮料！用紫色玉米发酵制成，甜中带酸，清凉解暑。' },
        { text: '油炸玉米饼', img: 'vigoron', desc: '油炸玉米饼配酸白菜和炸猪皮，是尼加拉瓜街头美食！酥脆可口，配起来超好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣周游行盛大', img: 'holy-week-nicaragua', desc: '圣周是尼加拉瓜最重要的宗教节日！人们参加游行、祈祷和庆祝活动，气氛庄严而热烈。' },
        { text: '独立日欢庆', img: 'nicaragua-independence-day', desc: '9月15日独立日，全国举行游行和庆祝！学生们举着国旗，表演传统舞蹈和音乐。' },
        { text: '圣诞节传统', img: 'christmas-nicaragua', desc: '尼加拉瓜圣诞节有传统美食和聚会！家人一起做玉米粽子，庆祝节日。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '棒球是最受欢迎', img: 'baseball-nicaragua', desc: '棒球是尼加拉瓜最受欢迎的运动！有很多球员进入美国职棒大联盟，国内联赛也很火热。' },
        { text: '足球也很流行', img: 'football-nicaragua', desc: '足球在尼加拉瓜也很流行！国家队比赛时球迷们热情支持，球场气氛热烈。' },
        { text: '拳击传统悠久', img: 'boxing-nicaragua', desc: '尼加拉瓜拳击有传统！出了世界冠军罗曼·冈萨雷斯，他是拳击界的传奇。' }
      ]
    }
  },

  'costa-rica': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '没有军队的国家', img: 'no-army', desc: '哥斯达黎加1948年废除军队！把军费用于教育和医疗，是世界上最和平的国家之一。' },
        { text: '生态旅游发达', img: 'eco-tourism', desc: '哥斯达黎加是世界生态旅游先驱！保护了25%的国土，有热带雨林、火山和海滩。' },
        { text: '石球神秘', img: 'stone-spheres', desc: '哥斯达黎加有神秘的古代石球！有的重达16吨，是怎么制作的至今仍是谜。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '米饭豆子是主食', img: 'gallo-pinto-costa-rica', desc: '米饭豆子是哥斯达黎加国民早餐！米饭和黑豆一起炒，配鸡蛋和玉米饼，简单又美味。' },
        { text: '咖啡世界闻名', img: 'costa-rica-coffee', desc: '哥斯达黎加咖啡是世界顶级咖啡！火山土壤和高海拔培育出风味独特的咖啡豆。' },
        { text: '热带水果丰富', img: 'tropical-fruits-costa-rica', desc: '哥斯达黎加热带水果丰富！芒果、木瓜、菠萝新鲜多汁，还有独特的酸豆果。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日火炬传递', img: 'costa-rica-independence-day', desc: '9月15日独立日，学生们举着火炬接力！从尼加拉瓜边境跑到巴拿马，纪念独立。' },
        { text: '圣周传统重要', img: 'holy-week-costa-rica', desc: '圣周是哥斯达黎加最重要的节日！人们参加宗教活动、家庭聚会，海滩挤满了度假的人。' },
        { text: '圣诞节热闹', img: 'christmas-costa-rica', desc: '哥斯达黎加圣诞节装饰彩灯、举办派对！传统的tamal玉米粽是圣诞必吃美食。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是国民运动', img: 'football-costa-rica', desc: '足球是哥斯达黎加国民运动！国家队在世界杯上表现出色，球迷们热情支持。' },
        { text: '冲浪世界闻名', img: 'surfing-costa-rica', desc: '哥斯达黎加是世界级冲浪胜地！太平洋和加勒比海两岸都有绝佳的浪点。' },
        { text: '极限运动发展', img: 'extreme-sports', desc: '哥斯达黎加极限运动发达！高空滑索、漂流、蹦极，在热带雨林中冒险超刺激。' }
      ]
    }
  },

  'panama': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '巴拿马运河世界闻名', img: 'panama-canal', desc: '巴拿马运河是世界工程奇迹！连接太平洋和大西洋，船只需要8-10小时通过，每年6万多艘船使用。' },
        { text: '老城区世界遗产', img: 'casco-viejo', desc: '巴拿马老城区是世界文化遗产！西班牙殖民建筑、彩色房子和教堂，充满历史韵味。' },
        { text: '原住民文化丰富', img: 'indigenous-panama', desc: '巴拿马有多个原住民族群！库纳族、恩贝拉族等保持着传统生活方式和文化。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '海鲜饭鲜美', img: 'arroz-con-mariscos', desc: '海鲜饭是巴拿马特色美食！用米饭配上各种海鲜和椰奶，热带风味十足。' },
        { text: '玉米粽传统', img: 'tamal-panama', desc: '玉米粽是巴拿马传统美食！用香蕉叶包裹玉米面和肉馅，节日必备。' },
        { text: '热带水果丰富', img: 'tropical-fruits-panama', desc: '巴拿马热带水果丰富！芒果、木瓜、百香果新鲜便宜，到处都能买到。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节盛大', img: 'carnival-panama', desc: '巴拿马狂欢节是中美洲最大的！有花车游行、选美比赛和派对，人们洒水庆祝。' },
        { text: '独立日双重庆祝', img: 'panama-independence-day', desc: '巴拿马有两次独立！11月3日独立日和11月28日独立日，都有盛大的庆祝活动。' },
        { text: '圣周传统', img: 'holy-week-panama', desc: '圣周是巴拿马重要节日！人们参加教堂活动、游行和家庭聚会。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '棒球是国球', img: 'baseball-panama', desc: '棒球是巴拿马国球！出了很多大联盟球星，马里亚诺·里维拉是最伟大的终结者之一。' },
        { text: '足球也很受欢迎', img: 'football-panama', desc: '足球在巴拿马很受欢迎！2018年首次进入世界杯，全国人民狂欢庆祝。' },
        { text: '拳击有传统', img: 'boxing-panama', desc: '巴拿马拳击有传统！出了世界冠军罗伯特·杜兰，被称为"石头之手"。' }
      ]
    }
  },

  // ----- 加勒比 -----
  'cuba': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '哈瓦那老城世界遗产', img: 'havana-old-town', desc: '哈瓦那老城是世界文化遗产！彩色房子、老爷车和古建筑，像穿越回1950年代。' },
        { text: '革命历史重要', img: 'cuban-revolution', desc: '1959年古巴革命改变了国家！切·格瓦拉和卡斯特罗的故事至今仍在流传。' },
        { text: '雪茄世界闻名', img: 'cuban-cigar', desc: '古巴雪茄是世界最好的！用传统手工卷制，需要200多道工序，是奢侈品中的奢侈品。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '米饭豆子是主食', img: 'moros-y-cristianos', desc: '米饭配黑豆是古巴主食！米饭和豆子一起煮，配上猪肉和炸香蕉，是经典组合。' },
        { text: '烤猪肉传统', img: 'roast-pork-cuba', desc: '烤猪肉是古巴传统美食！整只猪在火上慢慢烤，皮脆肉嫩，是节日必备。' },
        { text: '莫吉托经典鸡尾酒', img: 'mojito', desc: '莫吉托是古巴发明的鸡尾酒！朗姆酒配薄荷叶、青柠和糖，清爽又提神。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节热闹非凡', img: 'carnival-cuba', desc: '古巴狂欢节有音乐、舞蹈和游行！萨尔萨舞、康加舞，人们跟着节奏跳个不停。' },
        { text: '革命日庆祝', img: 'revolution-day-cuba', desc: '7月26日革命日是古巴重要节日！有演讲、游行和庆祝活动，纪念革命的胜利。' },
        { text: '圣诞节传统', img: 'christmas-cuba', desc: '古巴圣诞节家人团聚、吃烤猪肉！午夜弥撒后放烟花，迎接圣诞节的到来。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '棒球是国球', img: 'baseball-cuba', desc: '棒球是古巴国球！古巴队是世界最强的业余球队之一，赢得过很多奥运金牌。' },
        { text: '拳击传统强大', img: 'boxing-cuba', desc: '古巴拳击是世界强项！业余拳击训练严格，出了很多奥运冠军和世界冠军。' },
        { text: '排球实力强劲', img: 'volleyball-cuba', desc: '古巴排球实力强劲！女排队多次获得世界冠军，被称为"加勒比海姑娘"。' }
      ]
    }
  },

  'jamaica': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '雷鬼音乐发源地', img: 'reggae-music', desc: '牙买加是雷鬼音乐的发源地！鲍勃·马利的音乐传遍世界，传递着和平与爱的信息。' },
        { text: '海盗历史传奇', img: 'pirate-history', desc: '牙买加曾是海盗的天堂！皇家港口是海盗基地，传奇海盗亨利·摩根在这里活动。' },
        { text: '蓝山咖啡世界顶级', img: 'blue-mountain-coffee', desc: '蓝山咖啡是世界最贵的咖啡之一！高海拔种植，口感平衡温和，是咖啡爱好者的梦想。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤鸡是国菜', img: 'jerk-chicken', desc: '牙买加烤鸡是国菜！用特殊的辣酱腌制后烤制，外皮焦香、肉质嫩滑，风味独特。' },
        { text: '阿基果配咸鱼', img: 'ackee-saltfish', desc: '阿基果配咸鱼是牙买加国菜！阿基果像炒蛋，配上咸鱼和香料，是早餐首选。' },
        { text: '朗姆酒世界闻名', img: 'jamaican-rum', desc: '牙买加朗姆酒是世界最好的！用甘蔗酿造，口感醇厚，是很多鸡尾酒的基酒。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节热闹', img: 'carnival-jamaica', desc: '牙买加狂欢节有音乐、舞蹈和游行！人们穿着闪亮的服装，跟着雷鬼音乐跳舞。' },
        { text: '独立日庆祝', img: 'jamaica-independence-day', desc: '8月6日独立日，牙买加人穿绿黄黑三色衣服庆祝！有音乐节、游行和派对。' },
        { text: '雷鬼月活动', img: 'reggae-month', desc: '2月是牙买加雷鬼月！有音乐会、展览和纪念活动，庆祝雷鬼音乐文化。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '短跑王国', img: 'sprinting-jamaica', desc: '牙买加是短跑王国！博尔特是最快的飞人，100米世界纪录9.58秒至今无人打破。' },
        { text: '板球传统悠久', img: 'cricket-jamaica', desc: '板球在牙买加很受欢迎！是西印度群岛队的一部分，多次赢得世界冠军。' },
        { text: '足球发展良好', img: 'football-jamaica', desc: '牙买加足球队是加勒比海最强之一！1998年首次参加世界杯，创造历史。' }
      ]
    }
  },

  'haiti': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '第一个黑人共和国', img: 'first-black-republic', desc: '海地是世界上第一个黑人共和国！1804年奴隶起义成功，建立了独立国家，是历史的奇迹。' },
        { text: '革命历史伟大', img: 'haitian-revolution', desc: '海地革命是历史上唯一成功的奴隶革命！图森特·卢维杜尔领导起义，改变了历史。' },
        { text: '城堡遗址壮观', img: 'citadelle', desc: '拉费里埃尔城堡是世界遗产！由独立后的黑人建造，保护国家免受入侵，是巨大的石造堡垒。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '油炸猪肉传统', img: 'griot', desc: '油炸猪肉是海地国菜！猪肉用酸橙和香料腌制后油炸，配上米饭和豆子，超美味。' },
        { text: '南瓜汤历史性', img: 'pumpkin-soup', desc: '南瓜汤是海地独立日必吃！以前奴隶不能喝，独立后喝汤庆祝自由，象征平等。' },
        { text: '炸香蕉片', img: 'plantain-chips', desc: '炸香蕉片是海地常见小吃！硬香蕉切片油炸，咸香酥脆，是街边热门零食。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日喝南瓜汤', img: 'haiti-independence-day', desc: '1月1日独立日，海地人喝南瓜汤庆祝！这是自由和平等的象征，家家户户都做。' },
        { text: '狂欢节热闹', img: 'carnival-haiti', desc: '海地狂欢节有音乐、舞蹈和花车游行！康帕音乐响起，人们跟着节奏跳舞。' },
        { text: '亡灵节传统', img: 'day-of-the-dead-haiti', desc: '海地亡灵节有独特的巫毒传统！人们去墓地纪念祖先，点上蜡烛和鲜花。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是最受欢迎', img: 'football-haiti', desc: '足球是海地最受欢迎的运动！1974年首次参加世界杯，是加勒比海地区的骄傲。' },
        { text: '篮球逐渐发展', img: 'basketball-haiti', desc: '篮球在海地逐渐发展！学校和社区都有篮球场，年轻人越来越喜欢这项运动。' },
        { text: '田径有传统', img: 'athletics-haiti', desc: '海地田径运动员在奥运会上有过出色表现！短跑和中长跑都有优秀选手。' }
      ]
    }
  },

  'dominican-republic': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '哥伦布首次登陆', img: 'columbus-landing', desc: '哥伦布1492年首次在多米尼加登陆！圣多明各是美洲最古老的欧洲城市，有很多历史第一。' },
        { text: '圣多明各古城', img: 'santo-domingo-old-town', desc: '圣多明各老城是世界遗产！有美洲第一座教堂、城堡和大学，充满历史气息。' },
        { text: '琥珀博物馆独特', img: 'amber-museum', desc: '多米尼加琥珀世界闻名！有的琥珀里有古代昆虫，像《侏罗纪公园》里的一样神奇。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '米饭豆子炖肉', img: 'la-bandera', desc: '国旗饭是多米尼加国菜！米饭、豆子、炖肉和沙拉，颜色像国旗，所以叫这个名字。' },
        { text: '炸芭蕉传统', img: 'mangu', desc: '炸芭蕉泥是多米尼加早餐！芭蕉煮熟后捣成泥，配上洋葱、鸡蛋和奶酪，是国民早餐。' },
        { text: '热带水果丰富', img: 'tropical-fruits-dominican', desc: '多米尼加热带水果丰富！芒果、木瓜、百香果、牛油果，新鲜便宜又好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节盛大', img: 'carnival-dominican', desc: '多米尼加狂欢节是加勒比海最大的！有花车游行、面具舞会和音乐表演，热闹非凡。' },
        { text: '独立日庆祝', img: 'dominican-independence-day', desc: '2月27日独立日，全国举行庆祝活动！人们穿红蓝白三色衣服，游行唱歌庆祝。' },
        { text: '圣诞节传统', img: 'christmas-dominican', desc: '多米尼加圣诞节有丰盛的美食和音乐！家人团聚吃烤猪肉，跳默朗格舞庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '棒球是国球', img: 'baseball-dominican', desc: '棒球是多米尼加国球！出了很多大联盟球星，是美国职棒球员最多的外国国家。' },
        { text: '篮球也很受欢迎', img: 'basketball-dominican', desc: '篮球在多米尼加很受欢迎！有职业联赛和社区球场，年轻人喜欢打球。' },
        { text: '排球发展良好', img: 'volleyball-dominican', desc: '多米尼加排球发展良好！女排是加勒比海强队，在国际比赛上表现出色。' }
      ]
    }
  },

  // ===== 南美洲 =====

  // ----- 南美主要国家 -----
  'brazil': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '亚马逊雨林地球之肺', img: 'amazon-rainforest', desc: '亚马逊雨林是世界上最大的热带雨林，面积相当于半个中国！里面住着无数动植物，还有很多未被发现的秘密。' },
        { text: '里约狂欢节世界最大', img: 'rio-carnival', desc: '里约狂欢节是世界上最大的狂欢节！数百万人穿着华丽服装，在街头跳桑巴舞，热闹非凡。' },
        { text: '足球王国五次夺冠', img: 'brazil-football', desc: '巴西是足球王国，赢得了5次世界杯！贝利、罗纳尔多、内马尔都是巴西足球传奇。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉是国民美食', img: 'brazilian-barbecue', desc: '巴西烤肉世界闻名！大块肉串在铁签上烤，外焦里嫩，配米饭和豆子吃，超级满足。' },
        { text: '黑豆炖肉传统', img: 'feijoada', desc: '黑豆炖肉是巴西国菜！黑豆配猪肉、香肠慢炖，配米饭、橙子和甘蓝，是周末家庭聚餐必备。' },
        { text: '莓果碗健康美味', img: 'acai-bowl', desc: '巴西莓果碗是健康美食！紫色莓果打成冰沙，配香蕉、燕麦和蜂蜜，颜值超高又营养。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节举世闻名', img: 'carnival-brazil', desc: '巴西狂欢节是世界上最大的派对！人们穿华丽服装、戴面具，在街头跳舞狂欢五天四夜。' },
        { text: '六月节传统', img: 'festa-junina', desc: '六月节是巴西传统节日！人们穿乡村服装、跳方舞、吃玉米食品，庆祝丰收。' },
        { text: '新年跳浪许愿', img: 'new-year-brazil', desc: '巴西人在新年跳过七个浪花许愿！传说每个浪花代表一个愿望，跳完就能实现。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是国民运动', img: 'football-brazil', desc: '巴西是足球王国！街头巷尾都有孩子踢球，他们用任何东西当球门，梦想成为下一个球星。' },
        { text: '排球也很强', img: 'volleyball-brazil', desc: '巴西排球是世界强队！男女排都获得过奥运金牌，沙滩排球更是巴西人的最爱。' },
        { text: 'F1赛车传奇', img: 'f1-brazil', desc: '巴西出过很多F1冠军！塞纳是巴西英雄，英特拉格斯赛道是F1经典赛道。' }
      ]
    }
  },

  'argentina': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '探戈舞发源地', img: 'tango', desc: '探戈舞诞生于布宜诺斯艾利斯！这种热情奔放的舞蹈，现在全世界都在跳。' },
        { text: '伊瓜苏瀑布壮观', img: 'iguazu-falls', desc: '伊瓜苏瀑布是世界最宽的瀑布，有275个瀑布组成！水声如雷，彩虹横跨，美不胜收。' },
        { text: '巴塔哥尼亚冰川', img: 'patagonia-glacier', desc: '巴塔哥尼亚有世界第三大冰川！冰川呈现蓝色，会发出巨响断裂掉入水中，壮观无比。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉是世界级', img: 'argentine-steak', desc: '阿根廷烤肉是世界最好的！牛肉在炭火上慢烤，外焦里嫩，配红酒吃，简直是天堂。' },
        { text: '马黛茶是国饮', img: 'mate-tea', desc: '马黛茶是阿根廷国饮！人们用专用杯和吸管喝，走哪儿带哪儿，还和朋友轮流分享。' },
        { text: '冰淇淋意式传统', img: 'argentine-ice-cream', desc: '阿根廷冰淇淋有意式传统！口感细腻，口味众多，是阿根廷人的最爱甜点。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日隆重庆祝', img: 'argentina-independence-day', desc: '5月25日独立日，布宜诺斯艾利斯举行盛大游行！人们穿传统服装，跳民族舞蹈庆祝。' },
        { text: '探戈节热闹', img: 'tango-festival', desc: '布宜诺斯艾利斯探戈节是世界上最大的探戈活动！舞者在街头表演，游客也可以学几步。' },
        { text: '圣诞节夏季特色', img: 'christmas-argentina', desc: '阿根廷圣诞节在夏天！人们吃烤肉、喝冰啤酒庆祝，没有雪但有阳光和热情。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球三次世界杯', img: 'football-argentina', desc: '阿根廷足球队赢得过3次世界杯！马拉多纳和梅西是阿根廷足球之神。' },
        { text: '篮球奥运冠军', img: 'basketball-argentina', desc: '阿根廷男篮曾击败美国梦之队，夺得奥运金牌！吉诺比利是阿根廷篮球传奇。' },
        { text: '马球传统悠久', img: 'polo-argentina', desc: '阿根廷是马球王国！这里出产最好的马球马和马球手，是贵族运动的天堂。' }
      ]
    }
  },

  'chile': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '复活节岛神秘', img: 'easter-island', desc: '复活节岛上有近千座神秘巨石像！这些石头人像高达10米，重达80吨，至今没人知道是怎么移动的。' },
        { text: '阿塔卡马沙漠', img: 'atacama-desert', desc: '阿塔卡马是世界上最干燥的沙漠！有些地方几百年没下过雨，像火星一样荒凉。' },
        { text: '葡萄酒产区闻名', img: 'chile-wine', desc: '智利是世界著名的葡萄酒产区！这里的红酒果香浓郁，价格实惠，全世界都爱喝。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '馅饼是国食', img: 'empanada', desc: '智利馅饼是国食！酥皮包着肉、洋葱和鸡蛋，烤得金黄，一口咬下去超满足。' },
        { text: '海鲜丰富新鲜', img: 'chilean-seafood', desc: '智利海岸线长，海鲜超新鲜！三文鱼、帝王蟹、海胆，都是顶级美味。' },
        { text: '皮斯科酸酒', img: 'pisco-sour', desc: '皮斯科酸酒是智利国酒！用皮斯科白兰地、柠檬汁和糖调制，酸酸甜甜很好喝。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '国庆日热闹', img: 'chile-national-day', desc: '9月18日国庆日，智利人吃馅饼、喝红酒、跳传统舞蹈庆祝！全国放假好几天。' },
        { text: '新年前夜独特', img: 'new-year-chile', desc: '智利人新年前夜会在墓地吃晚餐，和已故亲人一起迎接新年，是独特的传统。' },
        { text: '塔帕蒂节复活节岛', img: 'tapati-festival', desc: '复活节岛塔帕蒂节是波利尼西亚文化庆典！人们涂身体彩绘、比赛划船、选出女王。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-chile', desc: '足球是智利最受欢迎的运动！智利队曾两次获得美洲杯冠军，球迷们疯狂支持。' },
        { text: '网球名将辈出', img: 'tennis-chile', desc: '智利出过很多网球名将！冈萨雷斯曾获得奥运金牌，是智利体育英雄。' },
        { text: ' rodeo传统运动', img: 'rodeo-chile', desc: '智利牛仔竞技是传统运动！骑手要赶小牛到围栏，是智利国粹运动。' }
      ]
    }
  },

  'peru': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '马丘比丘神秘', img: 'machu-picchu', desc: '马丘比丘是印加帝国的古城，建在海拔2400米的山顶！石头建筑没有用任何胶水，却严丝合缝。' },
        { text: '印加帝国辉煌', img: 'inca-empire', desc: '印加帝国是南美最大的古代帝国！他们修建了4万公里的道路，没有文字却创造了奇迹。' },
        { text: '纳斯卡线条神秘', img: 'nazca-lines', desc: '纳斯卡线条是地面上的巨型图案！只有从天上才能看清：蜂鸟、蜘蛛、猴子，至今是未解之谜。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '生鱼片是国菜', img: 'ceviche', desc: '秘鲁生鱼片是世界级美食！新鲜生鱼用柠檬汁腌制，配洋葱和辣椒，酸辣鲜美。' },
        { text: '烤豚鼠传统', img: 'cuy', desc: '烤豚鼠是秘鲁传统美食！豚鼠烤得外焦里嫩，看起来有点吓人但味道像鸡肉。' },
        { text: '皮斯科酒闻名', img: 'pisco-peru', desc: '皮斯科酒是秘鲁国酒！秘鲁和智利都声称皮斯科酒是自己的，争论了100多年。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '太阳节传统', img: 'inti-raymi', desc: '太阳节是印加传统节日！6月24日，人们穿传统服装在萨克赛华曼遗址举行仪式，纪念太阳神。' },
        { text: '独立日庆祝', img: 'peru-independence-day', desc: '7月28日独立日，利马举行盛大阅兵！人们吃传统美食、跳民族舞蹈庆祝。' },
        { text: '亡灵节独特', img: 'day-of-the-dead-peru', desc: '秘鲁亡灵节家人会去墓地野餐，和已故亲人一起吃顿饭，是温馨的传统。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球是第一运动', img: 'football-peru', desc: '足球是秘鲁最受欢迎的运动！秘鲁队曾两次进入世界杯八强，球迷们热情支持。' },
        { text: '排球也有传统', img: 'volleyball-peru', desc: '秘鲁女排是南美强队！曾获得奥运会银牌，是秘鲁体育骄傲。' },
        { text: '斗牛殖民传统', img: 'bullfighting-peru', desc: '秘鲁斗牛是殖民传统，利马有美洲最古老的斗牛场！虽然现在有争议，但仍是传统。' }
      ]
    }
  },

  'colombia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '黄金博物馆世界级', img: 'gold-museum', desc: '波哥大黄金博物馆收藏了55000件黄金制品！这些金器来自古代印第安人，精美绝伦。' },
        { text: '咖啡产区闻名', img: 'colombia-coffee', desc: '哥伦比亚咖啡是世界最好的之一！咖啡种植区风景优美，被称为"咖啡三角"。' },
        { text: '卡塔赫纳古城', img: 'cartagena', desc: '卡塔赫纳是殖民时期古城，城墙和古堡保存完好！彩色房子和鹅卵石街道，像童话世界。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饼包肉', img: 'arepa', desc: '玉米饼是哥伦比亚国民美食！可以包肉、奶酪或鸡蛋，早餐午餐都能吃。' },
        { text: '炖肉汤丰富', img: 'bandeja-paisa', desc: '派萨大盘是哥伦比亚代表菜！盘子里有肉、豆子、米饭、鸡蛋、鳄梨、香肠，超级丰盛。' },
        { text: '咖啡世界级', img: 'colombian-coffee', desc: '哥伦比亚咖啡是世界最好的！口感柔和，酸度适中，是咖啡爱好者的首选。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '巴兰基亚狂欢节', img: 'barranquilla-carnival', desc: '巴兰基亚狂欢节是世界第二大狂欢节！人们穿彩色服装、戴面具，跳非洲和印第安舞蹈。' },
        { text: '花节美丽', img: 'flower-festival', desc: '麦德林花节是世界上最大的花展！花农背着巨大的花架游行，五彩缤纷。' },
        { text: '圣诞节灯光璀璨', img: 'christmas-colombia', desc: '哥伦比亚圣诞节装饰超美！从12月7日开始，家家户户点蜡烛，整个城市灯火通明。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-colombia', desc: '足球是哥伦比亚第一运动！巴尔德拉马的金头发和伊瓜因的进球是经典记忆。' },
        { text: '自行车也很强', img: 'cycling-colombia', desc: '哥伦比亚是自行车强国！高山地形培养了出色的爬坡选手，环法赛场上常见哥伦比亚车手。' },
        { text: '棒球加勒比传统', img: 'baseball-colombia', desc: '加勒比沿海棒球很流行！哥伦比亚出过很多大联盟球员。' }
      ]
    }
  },

  'venezuela': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '天使瀑布最高', img: 'angel-falls', desc: '天使瀑布是世界上最高的瀑布，落差979米！水从这么高落下，还没到底就变成了雾。' },
        { text: '石油储量世界最大', img: 'venezuela-oil', desc: '委内瑞拉石油储量世界第一！这里的石油比水还多，被称为"石油之国"。' },
        { text: '西蒙玻利瓦尔英雄', img: 'simon-bolivar', desc: '西蒙·玻利瓦尔是南美独立英雄！他解放了六个国家，被称为"解放者"。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米饼是主食', img: 'arepa-venezuela', desc: '委内瑞拉玉米饼是国民美食！可以包肉、奶酪、鳄梨，早中晚都能吃。' },
        { text: 'Pabellón criollo', img: 'pabellon-criollo', desc: '克里奥尔拼盘是委内瑞拉国菜！米饭、黑豆、牛肉丝和炸芭蕉，丰盛美味。' },
        { text: '火腿馅饼传统', img: 'tequeno', desc: '火腿馅饼是委内瑞拉经典小吃！酥皮包火腿和奶酪，炸得金黄，蘸酱吃超香。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节热闹', img: 'carnival-venezuela', desc: '委内瑞拉狂欢节人们穿华丽服装游行！加勒比海城市庆祝最热闹，音乐舞蹈不停。' },
        { text: '圣诞节传统', img: 'christmas-venezuela', desc: '委内瑞拉圣诞节吃火腿馅饼和玉米饼！人们早上去教堂，然后开派对庆祝。' },
        { text: '法尔孔节独特', img: 'falcon-festival', desc: '法尔孔节人们放风筝庆祝！天空中飘满五颜六色的风筝，非常壮观。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '棒球是最爱', img: 'baseball-venezuela', desc: '棒球是委内瑞拉最受欢迎的运动！冬季联赛是全国盛事，很多人打进了美国大联盟。' },
        { text: '足球也有热情', img: 'football-venezuela', desc: '委内瑞拉足球虽然不是南美最强，但球迷们同样热情支持自己的球队。' },
        { text: 'F1传奇车手', img: 'f1-venezuela', desc: '委内瑞拉出过F1车手牧萨！他是委内瑞拉体育英雄，激励了无数年轻人。' }
      ]
    }
  },

  'ecuador': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '加拉帕戈斯群岛', img: 'galapagos-islands', desc: '加拉帕戈斯群岛是达尔文创立进化论的地方！这里有巨龟、海鬣蜥等独特动物，是自然宝库。' },
        { text: '基多古城保存完好', img: 'quito-old-town', desc: '基多是世界上保存最好的殖民城市之一！古城被列入世界遗产，街道和教堂美轮美奂。' },
        { text: '赤道纪念碑', img: 'equator-monument', desc: '厄瓜多尔名字意为"赤道"！赤道纪念碑上可以一脚踩北半球、一脚踩南半球。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤豚鼠传统', img: 'cuy-ecuador', desc: '烤豚鼠是厄瓜多尔传统美食！通常在节日吃，配土豆和玉米，是安第斯山区特色。' },
        { text: '酸橘汁腌虾', img: 'ceviche-ecuador', desc: '厄瓜多尔酸橘汁腌虾很有名！用番茄汁而不是柠檬汁，配爆米花吃很特别。' },
        { text: '香蕉料理丰富', img: 'plantain-ecuador', desc: '厄瓜多尔香蕉料理丰富！可以炸、煮、烤，做成各种美食，是日常主食。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节水战', img: 'carnival-ecuador', desc: '厄瓜多尔狂欢节人们打水战！用水球、水枪互相泼水，是迎接春天的狂欢。' },
        { text: '亡灵节传统', img: 'day-of-the-dead-ecuador', desc: '厄瓜多尔亡灵节家人去墓地扫墓，带鲜花和食物，和已故亲人一起野餐。' },
        { text: '太阳节印加传统', img: 'inti-raymi-ecuador', desc: '太阳节是印加传统，6月在印加遗址举行！人们穿传统服装、跳祭祀舞蹈。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-ecuador', desc: '足球是厄瓜多尔最受欢迎的运动！国家队曾多次进入世界杯，球迷们热情支持。' },
        { text: '自行车有传统', img: 'cycling-ecuador', desc: '厄瓜多尔自行车运动有传统！高山地形培养了优秀的爬坡选手。' },
        { text: '网球发展良好', img: 'tennis-ecuador', desc: '厄瓜多尔网球发展良好，出过一些优秀的职业选手。' }
      ]
    }
  },

  'bolivia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '乌尤尼盐湖最大', img: 'uyuni-salt-flat', desc: '乌尤尼盐湖是世界上最大的盐湖！下雨时变成天空之镜，蓝天白云倒映，美得不像地球。' },
        { text: '的的喀喀湖最高', img: 'titicaca-lake', desc: '的的喀喀湖是世界最高的可航行湖泊，海拔3812米！湖上有漂浮岛，人们住在草船上。' },
        { text: '蒂瓦纳库遗址', img: 'tiwanaku', desc: '蒂瓦纳库是比印加更古老的文明遗址！石门和雕像精美，是玻利维亚的文化瑰宝。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '藜麦是主食', img: 'quinoa', desc: '玻利维亚是藜麦的故乡！这种超级食物蛋白质含量高，是联合国认定的健康食品。' },
        { text: '萨尔特尼亚馅饼', img: 'saltena', desc: '萨尔特尼亚是玻利维亚特色馅饼！酥皮包着肉、土豆、鸡蛋和橄榄，甜辣口味很特别。' },
        { text: '烤羊驼肉', img: 'alpaca-meat', desc: '羊驼肉是安第斯山区传统美食！肉质像牛肉但更瘦，烤着吃或炖着吃都美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '奥尔罗狂欢节', img: 'oruro-carnival', desc: '奥尔罗狂欢节是联合国非物质文化遗产！魔鬼舞是最精彩的表演，舞者穿华丽服装游行。' },
        { text: '太阳节传统', img: 'inti-raymi-bolivia', desc: '太阳节在蒂瓦纳库遗址举行，是印加传统！人们穿传统服装迎接冬至太阳。' },
        { text: '亡灵节安第斯风格', img: 'day-of-the-dead-bolivia', desc: '玻利维亚亡灵节家人在墓地野餐，带古柯叶和烈酒献给已故亲人，是温馨的传统。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-bolivia', desc: '足球是玻利维亚最受欢迎的运动！拉巴斯的高海拔主场让很多客队不适应，是独特优势。' },
        { text: '摔跤传统', img: 'wrestling-bolivia', desc: '玻利维亚女摔跤手很有名！她们穿传统裙子摔跤，是独特的文化表演。' },
        { text: '高山运动', img: 'mountain-sports-bolivia', desc: '玻利维亚高山多，登山和滑雪运动有发展潜力。安第斯山是登山者的天堂。' }
      ]
    }
  },

  'paraguay': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '瓜拉尼文化独特', img: 'guarani-culture', desc: '瓜拉尼是巴拉圭原住民文化！巴拉圭语和西班牙语都是官方语言，是南美唯一保留原住民语言的国家。' },
        { text: '耶稣会遗址', img: 'jesuit-ruins', desc: '耶稣会遗址是殖民时期传教站遗迹！石头建筑保存完好，是联合国世界遗产。' },
        { text: '伊泰普水电站', img: 'itaipu-dam', desc: '伊泰普水电站是世界第二大水电站！由巴拉圭和巴西共建，为两国提供电力。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米粉粽是国食', img: 'sopa-paraguaya', desc: '巴拉圭玉米粉粽是国菜！用玉米粉、奶酪和洋葱烤制，口感像蛋糕，是巴拉圭人的最爱。' },
        { text: '木薯料理丰富', img: 'cassava-paraguay', desc: '木薯是巴拉圭主食！可以煮、炸、烤，做成各种美食，是日常必备。' },
        { text: 'Tereré冷茶', img: 'terere', desc: 'Tereré是冰镇马黛茶！巴拉圭人夏天喝冰茶解暑，用专用杯和吸管，社交必备。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'paraguay-independence-day', desc: '5月15日独立日，亚松森举行盛大游行！人们穿传统服装，跳民族舞蹈庆祝。' },
        { text: '狂欢节传统', img: 'carnival-paraguay', desc: '巴拉圭狂欢节有花车游行和舞会！人们穿华丽服装，跳舞唱歌，热闹非凡。' },
        { text: '瓜拉尼传统节', img: 'guarani-festival', desc: '瓜拉尼传统节庆祝原住民文化！人们穿传统服装，表演歌舞和仪式。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-paraguay', desc: '足球是巴拉圭最受欢迎的运动！巴拉圭队曾多次进入世界杯，球迷们热情支持。' },
        { text: '室内足球强', img: 'futsal-paraguay', desc: '巴拉圭室内足球是强项！获得过世界冠军，是巴拉圭体育骄傲。' },
        { text: '篮球也有发展', img: 'basketball-paraguay', desc: '篮球在巴拉圭也有发展，有职业联赛和社区球场。' }
      ]
    }
  },

  'uruguay': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '蒙得维的亚古城', img: 'montevideo-old-town', desc: '蒙得维的亚老城保存着殖民时期建筑！彩色房子和鹅卵石街道，安静又美丽。' },
        { text: '埃斯特角城度假胜地', img: 'punta-del-este', desc: '埃斯特角城是南美最著名的度假胜地！美丽海滩和豪华酒店，夏天游人如织。' },
        { text: '高乔文化传统', img: 'gaucho-culture', desc: '高乔是南美牛仔，乌拉圭保留了高乔文化！牛仔骑马放牧，是乌拉圭的象征。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉是世界级', img: 'uruguay-barbecue', desc: '乌拉圭烤肉和阿根廷一样出名！牛肉在炭火上慢烤，配红酒，是国民美食。' },
        { text: '三明治Chivito', img: 'chivito', desc: 'Chivito是乌拉圭国菜三明治！牛肉、火腿、培根、鸡蛋、奶酪堆在一起，超级丰盛。' },
        { text: '甜点焦糖牛奶', img: 'dulce-de-leche', desc: '焦糖牛奶酱是乌拉圭人最爱的甜点酱！涂面包、做蛋糕、配冰淇淋，怎么都好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '狂欢节最长的', img: 'carnival-uruguay', desc: '乌拉圭狂欢节是世界上持续时间最长的！整整40天的庆祝，桑巴舞和鼓队表演不停。' },
        { text: '圣诞节夏季特色', img: 'christmas-uruguay', desc: '乌拉圭圣诞节在夏天！人们吃烤肉、喝冰啤酒庆祝，没有雪但有阳光海滩。' },
        { text: '独立日庆祝', img: 'uruguay-independence-day', desc: '8月25日独立日，蒙得维的亚举行游行和烟花！人们庆祝国家独立。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球两次世界杯', img: 'football-uruguay', desc: '乌拉圭曾两次赢得世界杯！虽然只有350万人，却是足球强国。' },
        { text: '足球奥运金牌最多', img: 'olympic-football-uruguay', desc: '乌拉圭是奥运会足球金牌最多的国家！共获得过2枚金牌。' },
        { text: '篮球南美强队', img: 'basketball-uruguay', desc: '乌拉圭篮球是南美强队！曾多次获得南美冠军，球迷们热情支持。' }
      ]
    }
  },

  'guyana': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '凯尔图尔瀑布壮观', img: 'kaieteur-falls', desc: '凯尔图尔瀑布是世界上落差最大的单级瀑布之一！比尼亚加拉高5倍，壮观无比。' },
        { text: '英联邦唯一南美国', img: 'guyana-commonwealth', desc: '圭亚那是南美唯一的英语国家！曾是英国殖民地，现在是英联邦成员。' },
        { text: '热带雨林覆盖', img: 'guyana-rainforest', desc: '圭亚那80%的土地被热带雨林覆盖！这里生物多样性丰富，是生态旅游胜地。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '咖喱饭印度影响', img: 'guyana-curry', desc: '圭亚那咖喱受印度影响！印度裔是圭亚那最大族群，咖喱饭是日常美食。' },
        { text: '烤肉加勒比风格', img: 'guyana-barbecue', desc: '圭亚那烤肉有加勒比风格！香料腌制后炭火烤，香气四溢。' },
        { text: '海鲜丰富新鲜', img: 'guyana-seafood', desc: '圭亚那海岸线长，海鲜丰富！虾、蟹、鱼都是新鲜美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '排灯节印度传统', img: 'diwali-guyana', desc: '排灯节是圭亚那重要节日！印度裔点亮油灯庆祝，整个城市灯火通明。' },
        { text: '狂欢节加勒比风', img: 'carnival-guyana', desc: '圭亚那狂欢节有加勒比风情！人们穿华丽服装，跳卡利普索音乐。' },
        { text: '独立日庆祝', img: 'guyana-independence-day', desc: '5月26日独立日，圭亚那举行游行和庆祝活动！人们穿国旗色衣服庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球是国球', img: 'cricket-guyana', desc: '板球是圭亚那最受欢迎的运动！圭亚那是西印度群岛板球队的一部分。' },
        { text: '足球也有发展', img: 'football-guyana', desc: '足球在圭亚那也有发展，有职业联赛和国家队。' },
        { text: '田径出过名将', img: 'athletics-guyana', desc: '圭亚那出过一些优秀的田径运动员，在英联邦运动会上表现出色。' }
      ]
    }
  },

  'suriname': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '荷兰前殖民地', img: 'suriname-dutch', desc: '苏里南曾是荷兰殖民地，1975年独立！这里说荷兰语，是南美唯一的荷兰语国家。' },
        { text: '多元文化融合', img: 'suriname-multicultural', desc: '苏里南是多元文化国家！有印度裔、爪哇裔、克里奥尔人、华人和原住民，文化丰富多彩。' },
        { text: '热带雨林覆盖', img: 'suriname-rainforest', desc: '苏里南90%的土地被热带雨林覆盖！是地球上森林覆盖率最高的国家之一。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '爪哇菜受欢迎', img: 'javanese-cuisine', desc: '爪哇菜是苏里南美食之一！炒面、沙爹串都是爪哇人带来的。' },
        { text: '印度菜也有影响', img: 'indian-cuisine-suriname', desc: '印度裔带来了咖喱和烤饼！印度菜是苏里南日常美食。' },
        { text: '克里奥尔菜混合', img: 'creole-cuisine', desc: '克里奥尔菜融合了非洲和欧洲风味！炖肉、米饭和豆子是日常主食。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '排灯节庆祝', img: 'diwali-suriname', desc: '排灯节是苏里南重要节日！印度裔点灯庆祝，全国一起欢庆。' },
        { text: '开斋节穆斯林传统', img: 'eid-suriname', desc: '苏里南有大量穆斯林，开斋节是全国性节日！人们穿新衣服，互相拜访庆祝。' },
        { text: '独立日庆祝', img: 'suriname-independence-day', desc: '11月25日独立日，苏里南举行游行和庆祝活动！各种族一起庆祝国家独立。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-suriname', desc: '足球是苏里南最受欢迎的运动！很多荷兰球星有苏里南血统，如古利特、里杰卡尔德。' },
        { text: '游泳有发展', img: 'swimming-suriname', desc: '苏里南出过奥运游泳选手，是体育骄傲。' },
        { text: '羽毛球普及', img: 'badminton-suriname', desc: '羽毛球在苏里南也很普及，有业余联赛。' }
      ]
    }
  },

  // ===== 非洲 =====

  'egypt': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '金字塔是世界奇迹', img: 'pyramids', desc: '金字塔是古代世界七大奇迹之一！最大的胡夫金字塔用了230万块石头，建了20年才完成。' },
        { text: '狮身人面像神秘', img: 'sphinx', desc: '狮身人面像有人头狮身，已经有4500年历史！它的鼻子是怎么断的，至今是谜。' },
        { text: '法老文明辉煌', img: 'pharaoh', desc: '古埃及法老创造了辉煌文明！他们发明了象形文字、纸莎草纸，还建造了神庙和陵墓。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '皮塔饼是主食', img: 'pita-bread', desc: '皮塔饼是埃及主食！圆圆的饼中间空心，可以塞肉、蔬菜和酱料吃。' },
        { text: '烤肉串美味', img: 'kebab-egypt', desc: '埃及烤肉串香气四溢！羊肉或牛肉串在铁签上炭火烤，配面包和沙拉吃。' },
        { text: '红茶是国饮', img: 'egyptian-tea', desc: '埃及人超爱喝红茶！加很多糖，装在玻璃杯里，是待客必备。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '斋月神圣', img: 'ramadan-egypt', desc: '斋月是穆斯林神圣月份！白天不吃不喝，日落后开斋饭丰盛，街上灯笼闪耀。' },
        { text: '闻风节古老', img: 'sham-el-nessim', desc: '闻风节是埃及最古老的节日，有5000年历史！人们去公园野餐，吃咸鱼和洋葱。' },
        { text: '开斋节庆祝', img: 'eid-egypt', desc: '开斋节是斋月结束后的庆祝！人们穿新衣服，走亲访友，吃甜点庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-egypt', desc: '足球是埃及最受欢迎的运动！埃及队曾7次获得非洲杯冠军，是非洲最成功的球队。' },
        { text: '壁球世界级', img: 'squash-egypt', desc: '埃及壁球是世界最强！埃及选手长期占据世界第一，是埃及体育骄傲。' },
        { text: '手球也有发展', img: 'handball-egypt', desc: '埃及手球队是非洲强队，曾多次获得非洲冠军。' }
      ]
    }
  },

  'south-africa': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '曼德拉是民族英雄', img: 'mandela', desc: '曼德拉是南非民族英雄！他为反对种族隔离坐了27年牢，出狱后成为总统，感动了全世界。' },
        { text: '好望角航海要道', img: 'cape-of-good-hope', desc: '好望角是大西洋和印度洋交汇处！古代航海家绕过这里就能到亚洲，是重要航线。' },
        { text: '钻石黄金丰富', img: 'south-africa-diamonds', desc: '南非钻石和黄金储量世界领先！最大的钻石库里南就在这里发现，重达3106克拉。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉是国民美食', img: 'south-africa-barbecue', desc: '南非烤肉叫Braai，是国民传统！人们周末聚在一起烤肉，是社交活动。' },
        { text: '肉干比尔通', img: 'biltong', desc: '比尔通是南非肉干！用醋和香料腌制后风干，口感有嚼劲，是南非零食之王。' },
        { text: '咖喱角印度影响', img: 'samoosa', desc: '咖喱角是南非小吃！三角形酥皮包咖喱馅，是印度裔带来的美食。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '自由日重要', img: 'freedom-day', desc: '4月27日自由日纪念南非首次民主选举！曼德拉当选总统，种族隔离结束。' },
        { text: '遗产日庆祝多样', img: 'heritage-day', desc: '遗产日庆祝南非多元文化！人们穿传统服装，吃烤肉，展示各自的文化传统。' },
        { text: '圣诞节夏季特色', img: 'christmas-south-africa', desc: '南非圣诞节在夏天！人们吃烤肉、去海滩庆祝，没有雪但有阳光。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球三次世界冠军', img: 'rugby-south-africa', desc: '南非橄榄球队曾3次赢得世界杯！1995年主场夺冠促进了种族和解，是体育奇迹。' },
        { text: '足球非洲强队', img: 'football-south-africa', desc: '南非足球是非洲强队！2010年南非举办了非洲首届世界杯。' },
        { text: '板球世界级', img: 'cricket-south-africa', desc: '南非板球是世界强队！出过很多顶级选手，是三大运动之一。' }
      ]
    }
  },

  'morocco': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '马拉喀什古城', img: 'marrakech', desc: '马拉喀什是摩洛哥古城，有"红城"之称！古城墙和房子都是红色的，像童话世界。' },
        { text: '菲斯古城迷宫', img: 'fes', desc: '菲斯是世界上最大的无车城区！9000多条小巷像迷宫，走着走着就会迷路。' },
        { text: '撒哈拉沙漠壮美', img: 'sahara-morocco', desc: '摩洛哥有撒哈拉沙漠！金色沙丘连绵，骑骆驼看日落，晚上躺在沙上看星星。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '塔吉锅是国菜', img: 'tagine', desc: '塔吉锅是摩洛哥国菜！圆锥形锅盖焖煮肉和蔬菜，香料丰富，味道浓郁。' },
        { text: '库斯库斯传统', img: 'couscous', desc: '库斯库斯是摩洛哥传统主食！小麦粒蒸得松松的，配肉和蔬菜吃。' },
        { text: '薄荷茶待客', img: 'moroccan-tea', desc: '薄荷茶是摩洛哥待客之道！绿茶加很多糖和新鲜薄荷，倒在高脚杯里。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '斋月神圣', img: 'ramadan-morocco', desc: '斋月是摩洛哥神圣月份！白天禁食，日落后街上飘着食物香气，人们团聚吃开斋饭。' },
        { text: '玫瑰节浪漫', img: 'rose-festival', desc: '玫瑰节在玫瑰谷举行！人们用玫瑰花瓣装饰，选出玫瑰女王，空气中都是花香。' },
        { text: '独立日庆祝', img: 'morocco-independence-day', desc: '独立日摩洛哥举行游行和庆祝！人们穿传统服装，跳舞庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-morocco', desc: '足球是摩洛哥最受欢迎的运动！摩洛哥队2022年世界杯打入四强，创造了非洲历史。' },
        { text: '田径中长跑强', img: 'athletics-morocco', desc: '摩洛哥中长跑是强项！出过很多世界冠军和奥运金牌。' },
        { text: '网球有发展', img: 'tennis-morocco', desc: '摩洛哥网球有发展，出过一些优秀的职业选手。' }
      ]
    }
  },

  'kenya': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '马赛马拉动物迁徙', img: 'masai-mara', desc: '马赛马拉是世界上最大的动物迁徙地！每年数百万角马和斑马穿越草原，场面壮观。' },
        { text: '马赛人传统独特', img: 'masai-people', desc: '马赛人是肯尼亚原住民！他们穿红色格子布、跳高舞，保持着传统生活方式。' },
        { text: '内罗毕首都繁华', img: 'nairobi', desc: '内罗毕是东非最大城市！这里有大象孤儿院和长颈鹿中心，可以近距离接触动物。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉串Nyama Choma', img: 'nyama-choma', desc: '烤肉串是肯尼亚国民美食！羊肉或牛肉炭火烤，配玉米面团和蔬菜，是聚餐首选。' },
        { text: '玉米面团主食', img: 'ugali', desc: '玉米面团是肯尼亚主食！用手抓着吃，蘸肉汁或蔬菜，是日常必备。' },
        { text: '茶文化英国影响', img: 'kenyan-tea', desc: '肯尼亚是世界最大茶叶出口国之一！英国殖民时期带来了茶文化。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'kenya-independence-day', desc: '12月12日独立日，肯尼亚举行游行和庆祝！人们穿国旗色衣服，跳舞庆祝。' },
        { text: '马赛马拉节', img: 'masai-mara-festival', desc: '马赛马拉节庆祝野生动物迁徙！人们穿传统服装，跳马赛舞。' },
        { text: '圣诞节温馨', img: 'christmas-kenya', desc: '肯尼亚圣诞节家人团聚，吃烤肉庆祝！虽然是夏天，但节日气氛浓厚。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '长跑是世界最强', img: 'long-distance-running', desc: '肯尼亚长跑是世界最强！大部分马拉松冠军都是肯尼亚人，他们来自高原，天生耐力好。' },
        { text: '田径奥运强项', img: 'athletics-kenya', desc: '肯尼亚田径是奥运强项！中长跑、障碍赛都是夺金项目。' },
        { text: '板球有发展', img: 'cricket-kenya', desc: '肯尼亚板球在非洲是强队，曾进入世界杯半决赛。' }
      ]
    }
  },

  'nigeria': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '非洲人口最多', img: 'nigeria-population', desc: '尼日利亚是非洲人口最多的国家，有2亿多人！也是非洲最大的经济体。' },
        { text: '诺莱坞电影之都', img: 'nollywood', desc: '诺莱坞是世界第二大电影产业，仅次于宝莱坞！每年生产2000多部电影。' },
        { text: '贝宁青铜艺术', img: 'benin-bronze', desc: '贝宁青铜是尼日利亚古代艺术杰作！精美的青铜雕塑展示了古代文明的辉煌。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: 'Jollof饭是国菜', img: 'jollof-rice', desc: 'Jollof饭是尼日利亚国菜！番茄酱炒饭配肉或鱼，香气四溢，是聚餐必备。' },
        { text: '山药泥传统', img: 'pounded-yam', desc: '山药泥是尼日利亚传统主食！山药捣成泥，蘸汤吃，口感顺滑。' },
        { text: '烤鱼街边美食', img: 'suya', desc: 'Suya是尼日利亚街边烤肉串！香料腌制后炭火烤，辣辣的超好吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'nigeria-independence-day', desc: '10月1日独立日，尼日利亚举行盛大游行！人们穿绿白衣服，跳舞庆祝。' },
        { text: '圣诞节热闹', img: 'christmas-nigeria', desc: '尼日利亚圣诞节很热闹！家人团聚，吃大餐，音乐和舞蹈不停。' },
        { text: '宰牲节穆斯林', img: 'eid-nigeria', desc: '宰牲节是尼日利亚穆斯林重要节日！人们宰羊庆祝，分给穷人。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球三次非洲杯', img: 'football-nigeria', desc: '尼日利亚足球队曾3次获得非洲杯冠军！被称为"超级雄鹰"。' },
        { text: '篮球非洲强队', img: 'basketball-nigeria', desc: '尼日利亚篮球是非洲强队！很多球员在NBA打球，是体育骄傲。' },
        { text: '田径短跑强', img: 'athletics-nigeria', desc: '尼日利亚田径短跑是强项，出过奥运冠军。' }
      ]
    }
  },

  'ethiopia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '咖啡发源地', img: 'ethiopia-coffee', desc: '埃塞俄比亚是咖啡的发源地！传说牧羊人发现山羊吃了咖啡豆很兴奋，咖啡就这样被发现了。' },
        { text: '拉利贝拉岩石教堂', img: 'lalibela', desc: '拉利贝拉有11座岩石教堂，都是从整块岩石中凿出来的！已经900年了，至今仍有人朝拜。' },
        { text: '非洲唯一未被殖民', img: 'ethiopia-uncolonized', desc: '埃塞俄比亚是非洲唯一没有被殖民的国家！他们击败了意大利入侵者，保持独立。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '英吉拉是主食', img: 'injera', desc: '英吉拉是埃塞俄比亚主食，像大海绵饼！酸酸的，用苔麸粉做，配各种炖菜吃。' },
        { text: '咖啡仪式传统', img: 'coffee-ceremony', desc: '咖啡仪式是埃塞俄比亚传统！生咖啡豆现场烘焙、研磨、冲泡，仪式长达两小时。' },
        { text: '炖菜丰富美味', img: 'ethiopian-stew', desc: '埃塞俄比亚炖菜用各种香料！可以是肉或蔬菜，配英吉拉吃，味道浓郁。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '圣诞节独特日期', img: 'christmas-ethiopia', desc: '埃塞俄比亚圣诞节在1月7日！人们穿白衣去教堂，打棒球游戏庆祝。' },
        { text: '主显节重要', img: 'timkat', desc: '主显节是埃塞俄比亚最重要节日！人们穿白衣游行，重演耶稣受洗。' },
        { text: '新年独特', img: 'ethiopian-new-year', desc: '埃塞俄比亚新年在9月！人们穿新衣、送花、吃传统美食庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '长跑世界级', img: 'long-distance-ethiopia', desc: '埃塞俄比亚长跑是世界级！贝克勒和迪巴巴是传奇选手，高原训练给了他们天赋。' },
        { text: '田径奥运强项', img: 'athletics-ethiopia', desc: '埃塞俄比亚田径是奥运夺金大户！中长跑项目经常包揽奖牌。' },
        { text: '足球受欢迎', img: 'football-ethiopia', desc: '足球在埃塞俄比亚也很受欢迎，有职业联赛。' }
      ]
    }
  },

  'tanzania': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '乞力马扎罗山最高', img: 'kilimanjaro', desc: '乞力马扎罗山是非洲最高峰，海拔5895米！山顶终年积雪，被称为"赤道雪峰"。' },
        { text: '塞伦盖蒂大迁徙', img: 'serengeti', desc: '塞伦盖蒂有世界上最大的动物迁徙！每年数百万角马和斑马穿越草原，场面壮观。' },
        { text: '桑给巴尔岛美丽', img: 'zanzibar', desc: '桑给巴尔岛是印度洋明珠！白色沙滩、蓝蓝海水，还有石头城古城，是度假天堂。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米面团主食', img: 'ugali-tanzania', desc: '玉米面团是坦桑尼亚主食！用手抓着吃，蘸肉汁或蔬菜。' },
        { text: '烤肉串美味', img: 'mishkaki', desc: 'Mishkaki是坦桑尼亚烤肉串！牛肉或羊肉腌制后炭火烤，香辣美味。' },
        { text: '海鲜丰富新鲜', img: 'seafood-tanzania', desc: '坦桑尼亚海岸线长，海鲜丰富！龙虾、螃蟹、鱼都是新鲜美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'tanzania-independence-day', desc: '12月9日独立日，坦桑尼亚举行游行和庆祝！人们穿国旗色衣服庆祝。' },
        { text: '桑给巴尔国际电影节', img: 'zanzibar-film-festival', desc: '桑给巴尔国际电影节是东非最大电影盛会！展示非洲和世界电影。' },
        { text: '开斋节穆斯林', img: 'eid-tanzania', desc: '开斋节是坦桑尼亚穆斯林重要节日！人们穿新衣，走亲访友。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-tanzania', desc: '足球是坦桑尼亚最受欢迎的运动！有职业联赛，球迷们热情支持。' },
        { text: '篮球有发展', img: 'basketball-tanzania', desc: '篮球在坦桑尼亚也有发展，有业余联赛。' },
        { text: '田径长跑', img: 'athletics-tanzania', desc: '坦桑尼亚出过优秀的长跑运动员，在奥运会上表现出色。' }
      ]
    }
  },

  'ghana': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '黄金海岸历史', img: 'gold-coast', desc: '加纳曾叫黄金海岸，是黄金贸易中心！欧洲人来了500年，运走了无数黄金。' },
        { text: '黑星广场地标', img: 'black-star-square', desc: '黑星广场是加纳独立广场！巨大的拱门是阿克拉地标，纪念国家独立。' },
        { text: '城堡遗迹奴隶贸易', img: 'cape-coast-castle', desc: '海岸角城堡是奴隶贸易见证！数百万非洲人从这里被运往美洲，是痛苦的历史记忆。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: 'Jollof饭美味', img: 'jollof-rice-ghana', desc: '加纳Jollof饭是国菜！番茄酱炒饭配肉或鱼，和尼日利亚争论谁的更好吃。' },
        { text: '木薯面团主食', img: 'fufu', desc: 'Fufu是加纳主食！木薯捣成团，蘸汤吃，口感顺滑。' },
        { text: '烤鱼街边美食', img: 'grilled-fish-ghana', desc: '加纳烤鱼是街边美食！整条鱼炭火烤，配辣椒酱和米饭，超美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'ghana-independence-day', desc: '3月6日独立日，加纳举行盛大游行！黑星广场上人们庆祝非洲第一个独立国家。' },
        { text: '霍莫沃节丰收', img: 'homowo-festival', desc: '霍莫沃节是加纳丰收节！人们游行、打鼓、吃玉米食品，庆祝丰收。' },
        { text: '圣诞节热闹', img: 'christmas-ghana', desc: '加纳圣诞节很热闹！家人团聚，吃大餐，音乐舞蹈庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球四次非洲杯', img: 'football-ghana', desc: '加纳足球队曾4次获得非洲杯冠军！被称为"黑星"。' },
        { text: '拳击世界冠军', img: 'boxing-ghana', desc: '加纳出过世界拳击冠军！阿祖马·纳尔逊是加纳体育英雄。' },
        { text: '田径短跑强', img: 'athletics-ghana', desc: '加纳田径短跑是强项，出过优秀选手。' }
      ]
    }
  },

  'senegal': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '戈雷岛奴隶贸易', img: 'goree-island', desc: '戈雷岛是奴隶贸易见证！数百万非洲人从这里被运往美洲，奴隶屋至今保存。' },
        { text: '达喀尔拉力赛起点', img: 'dakar-rally', desc: '达喀尔拉力赛曾从达喀尔出发！世界上最艰难的拉力赛，穿越沙漠和荒野。' },
        { text: '西非文化中心', img: 'senegal-culture', desc: '塞内加尔是西非文化中心！音乐、舞蹈、电影都很发达，达喀尔是艺术之都。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '国菜Thieboudienne', img: 'thieboudienne', desc: 'Thieboudienne是塞内加尔国菜！鱼肉和米饭一起煮，加番茄和各种蔬菜，味道丰富。' },
        { text: 'Yassa鸡肉', img: 'yassa', desc: 'Yassa是塞内加尔名菜！鸡肉用柠檬和洋葱腌制后烤，酸酸的很开胃。' },
        { text: '咖啡传统', img: 'senegal-coffee', desc: '塞内加尔咖啡传统悠久！街头咖啡摊是特色，加香料煮的咖啡香气四溢。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'senegal-independence-day', desc: '4月4日独立日，达喀尔举行游行和庆祝！人们穿国旗色衣服庆祝。' },
        { text: '达喀尔双年展', img: 'dakar-biennale', desc: '达喀尔双年展是非洲最大艺术展！展示非洲当代艺术，吸引世界各地艺术家。' },
        { text: '斋月和开斋节', img: 'ramadan-senegal', desc: '塞内加尔是穆斯林国家，斋月和开斋节是重要节日！人们团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球非洲杯冠军', img: 'football-senegal', desc: '塞内加尔足球队曾获得非洲杯冠军！马内是塞内加尔足球英雄。' },
        { text: '摔跤是国粹', img: 'wrestling-senegal', desc: '摔跤是塞内加尔国粹运动！比足球还受欢迎，大型比赛全国观看。' },
        { text: '篮球有发展', img: 'basketball-senegal', desc: '塞内加尔篮球是非洲强队，出过NBA球员。' }
      ]
    }
  },

  'cameroon': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '非洲缩影', img: 'cameroon-miniature', desc: '喀麦隆被称为"非洲缩影"！这里有沙漠、雨林、山脉、海岸，集非洲地理于一国。' },
        { text: '法国英国殖民历史', img: 'cameroon-colonial', desc: '喀麦隆曾被法国和英国殖民！所以英语和法语都是官方语言。' },
        { text: '瓦萨山美丽', img: 'mount-cameroon', desc: '瓦萨山是西非最高峰，海拔4095米！是一座活火山，经常喷发。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '玉米面团主食', img: 'fufu-cameroon', desc: '玉米面团是喀麦隆主食！配各种炖菜和汤吃，是日常必备。' },
        { text: '烤鱼美味', img: 'grilled-fish-cameroon', desc: '喀麦隆烤鱼是常见美食！整条鱼炭火烤，配辣酱和米饭。' },
        { text: '恩多莱菜国菜', img: 'ndole', desc: '恩多莱菜是喀麦隆国菜！苦叶炖菜配虾或肉，配大蕉或米饭吃。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'cameroon-independence-day', desc: '5月20日独立日，喀麦隆举行游行和庆祝！人们庆祝国家统一。' },
        { text: 'Ngondo文化节', img: 'ngondo-festival', desc: 'Ngondo文化节是萨瓦人的传统节日！人们在河边举行仪式，庆祝文化传统。' },
        { text: '圣诞节温馨', img: 'christmas-cameroon', desc: '喀麦隆圣诞节家人团聚，吃大餐庆祝，节日气氛浓厚。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球五次非洲杯', img: 'football-cameroon', desc: '喀麦隆足球队曾5次获得非洲杯冠军！埃托奥是喀麦隆足球传奇。' },
        { text: '拳击世界冠军', img: 'boxing-cameroon', desc: '喀麦隆出过世界拳击冠军，是体育骄傲。' },
        { text: '田径有发展', img: 'athletics-cameroon', desc: '喀麦隆田径有发展，在奥运会上获得过奖牌。' }
      ]
    }
  },

  'uganda': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '山地大猩猩家园', img: 'mountain-gorilla', desc: '乌干达是山地大猩猩的家园！全世界只有1000多只，一半在乌干达，可以近距离观看。' },
        { text: '维多利亚湖最大', img: 'lake-victoria', desc: '维多利亚湖是非洲最大湖泊，也是尼罗河源头！面积像爱尔兰一样大。' },
        { text: '温斯顿·丘吉尔称"非洲明珠"', img: 'pearl-of-africa', desc: '丘吉尔称乌干达为"非洲明珠"！这里风景优美，气候宜人，是非洲最美的国家之一。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '马托基香蕉饭', img: 'matoke', desc: '马托基是乌干达国菜！用未熟香蕉蒸煮捣泥，配肉或花生酱吃，口感像土豆泥。' },
        { text: '烤肉串美味', img: 'rolex-uganda', desc: 'Rolex是乌干达街头美食！煎蛋卷饼包肉和蔬菜，便宜又好吃。' },
        { text: '花生酱炖菜', img: 'groundnut-soup', desc: '花生酱炖菜是乌干达传统美食！花生酱炖肉或蔬菜，配米饭或玉米团。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'uganda-independence-day', desc: '10月9日独立日，乌干达举行游行和庆祝！人们庆祝国家独立。' },
        { text: '殉道者节重要', img: 'martyrs-day', desc: '殉道者节是乌干达重要节日！纪念信仰而死的基督徒，数百万人朝圣。' },
        { text: '圣诞节庆祝', img: 'christmas-uganda', desc: '乌干达圣诞节家人团聚，吃大餐庆祝，节日气氛浓厚。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-uganda', desc: '足球是乌干达最受欢迎的运动！有职业联赛，球迷们热情支持。' },
        { text: '田径中长跑', img: 'athletics-uganda', desc: '乌干达田径中长跑是强项！切普特盖是世界纪录保持者。' },
        { text: '拳击有发展', img: 'boxing-uganda', desc: '乌干达拳击有发展，出过一些优秀选手。' }
      ]
    }
  },

  'rwanda': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '千丘之国', img: 'rwanda-hills', desc: '卢旺达被称为"千丘之国"！到处是起伏的山丘，风景如画。' },
        { text: '山地大猩猩保护', img: 'gorilla-rwanda', desc: '卢旺达是山地大猩猩的重要栖息地！维龙加山脉是观赏大猩猩的最佳地点。' },
        { text: '大屠杀纪念', img: 'rwanda-genocide-memorial', desc: '1994年卢旺达发生大屠杀，100天内有近100万人遇难。现在国家重建，致力于和解与发展。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '香蕉料理丰富', img: 'banana-rwanda', desc: '卢旺达香蕉料理丰富！可以煮、炸、烤，做成各种美食。' },
        { text: '豆类主食', img: 'beans-rwanda', desc: '豆类是卢旺达主食！各种豆子炖煮，配玉米或香蕉吃。' },
        { text: '烤鱼维多利亚湖', img: 'tilapia-rwanda', desc: '维多利亚湖的罗非鱼是卢旺达美食！烤着吃或炖汤都美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '解放日重要', img: 'liberation-day', desc: '7月4日解放日纪念大屠杀结束！人们庆祝国家重获和平。' },
        { text: '大屠杀纪念周', img: 'genocide-memorial-week', desc: '4月是大屠杀纪念月！全国悼念遇难者，反思历史，珍视和平。' },
        { text: '乌穆加尼达社区', img: 'umuganda', desc: '每月最后一个周六是全国社区劳动日！人们一起打扫卫生、修建设施，是卢旺达传统。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-rwanda', desc: '足球是卢旺达最受欢迎的运动！有职业联赛，球迷们热情支持。' },
        { text: '自行车运动发展', img: 'cycling-rwanda', desc: '卢旺达自行车运动发展迅速！环卢旺达自行车赛是国际赛事。' },
        { text: '田径中长跑', img: 'athletics-rwanda', desc: '卢旺达田径中长跑有发展，出过一些优秀选手。' }
      ]
    }
  },

  'algeria': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '撒哈拉沙漠穿越', img: 'sahara-algeria', desc: '阿尔及利亚大部分是撒哈拉沙漠！金色沙丘连绵，有史前岩画和绿洲小镇。' },
        { text: '卡斯巴古城世界遗产', img: 'casbah', desc: '阿尔及尔卡斯巴是联合国世界遗产！迷宫般的小巷和白房子，是北非传统建筑典范。' },
        { text: '罗马遗迹提姆加德', img: 'timgad', desc: '提姆加德是保存最完好的罗马古城之一！街道、剧院、浴场都保存完好，像穿越回罗马时代。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '库斯库斯传统', img: 'couscous-algeria', desc: '库斯库斯是阿尔及利亚国菜！小麦粒配肉和蔬菜，是家庭聚餐必备。' },
        { text: '塔吉锅美味', img: 'tagine-algeria', desc: '阿尔及利亚塔吉锅用圆锥锅盖焖煮！肉和蔬菜慢慢炖，香料浓郁。' },
        { text: '薄荷茶待客', img: 'mint-tea-algeria', desc: '薄荷茶是阿尔及利亚待客之道！绿茶加糖和薄荷，倒得高高的起泡沫。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'algeria-independence-day', desc: '7月5日独立日纪念法国殖民结束！全国举行游行和庆祝活动。' },
        { text: '斋月神圣', img: 'ramadan-algeria', desc: '斋月是阿尔及利亚神圣月份！白天禁食，日落后家人团聚吃开斋饭。' },
        { text: '开斋节庆祝', img: 'eid-algeria', desc: '开斋节是阿尔及利亚重要节日！人们穿新衣，走亲访友庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球两次非洲杯', img: 'football-algeria', desc: '阿尔及利亚足球队曾2次获得非洲杯冠军！2019年夺冠时全国狂欢。' },
        { text: '田径中长跑强', img: 'athletics-algeria', desc: '阿尔及利亚田径中长跑是强项，出过奥运冠军。' },
        { text: '手球非洲强队', img: 'handball-algeria', desc: '阿尔及利亚手球是非洲强队，多次获得非洲冠军。' }
      ]
    }
  },

  'tunisia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '迦太基古城遗址', img: 'carthage', desc: '迦太基是古代最强大的城邦之一！汉尼拔从这里出发，率领大象翻越阿尔卑斯山攻打罗马。' },
        { text: '西迪布赛义德蓝白小镇', img: 'sidi-bou-said', desc: '西迪布赛义德是地中海边的蓝白小镇！白房子、蓝门窗，美得像明信片。' },
        { text: '沙漠星球拍摄地', img: 'star-wars-tunisia', desc: '《星球大战》在突尼斯沙漠取景！塔图因星球就是突尼斯的沙漠小镇。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '库斯库斯国菜', img: 'couscous-tunisia', desc: '库斯库斯是突尼斯国菜！小麦粒配鱼或肉和蔬菜，是家庭聚餐必备。' },
        { text: '布里克煎饼', img: 'brik', desc: '布里克是突尼斯特色煎饼！薄饼包鸡蛋和金枪鱼，炸得金黄酥脆。' },
        { text: '哈里萨辣酱', img: 'harissa', desc: '哈里萨是突尼斯辣酱！红辣椒和大蒜制成，是餐桌必备调料。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '茉莉花革命纪念日', img: 'jasmine-revolution', desc: '12月17日纪念茉莉花革命！这场革命引发了阿拉伯之春，改变了中东。' },
        { text: '迦太基国际电影节', img: 'carthage-film-festival', desc: '迦太基国际电影节是非洲最古老的电影节！展示阿拉伯和非洲电影。' },
        { text: '斋月和开斋节', img: 'ramadan-tunisia', desc: '突尼斯是穆斯林国家，斋月和开斋节是重要节日！家人团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球非洲杯冠军', img: 'football-tunisia', desc: '突尼斯足球队曾获得非洲杯冠军！是北非足球强队。' },
        { text: '手球非洲强队', img: 'handball-tunisia', desc: '突尼斯手球是非洲强队，多次获得非洲冠军。' },
        { text: '网球有发展', img: 'tennis-tunisia', desc: '突尼斯网球有发展，出过一些优秀选手。' }
      ]
    }
  },

  // ===== 大洋洲 =====

  'australia': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '悉尼歌剧院地标', img: 'sydney-opera-house', desc: '悉尼歌剧院是世界最著名的建筑之一！白帆造型，像海上盛开的花朵，是澳大利亚象征。' },
        { text: '原住民文化悠久', img: 'aboriginal-culture', desc: '澳大利亚原住民有6万年历史！他们有独特的艺术、音乐和狩猎文化，是世界上最古老的文明之一。' },
        { text: '大堡礁世界最大', img: 'great-barrier-reef', desc: '大堡礁是世界上最大的珊瑚礁系统！可以从太空看到，有1500种鱼和400种珊瑚。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '烤肉是国民美食', img: 'australian-barbecue', desc: '澳大利亚烤肉是国民传统！周末在公园或后院烤肉，配啤酒，是最澳洲的生活方式。' },
        { text: '肉派是经典', img: 'meat-pie', desc: '肉派是澳大利亚经典美食！酥皮包着肉馅，是橄榄球赛必备零食。' },
        { text: ' Vegemite 酱独特', img: 'vegemite', desc: 'Vegemite是澳大利亚独特酱料！黑色的酵母酱涂在面包上，澳洲人超爱，外国人觉得味道奇怪。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '澳大利亚日争议', img: 'australia-day', desc: '1月26日澳大利亚日纪念英国人到达！但对原住民来说是入侵日，现在有争议。' },
        { text: '圣诞节夏季特色', img: 'christmas-australia', desc: '澳大利亚圣诞节在夏天！人们吃海鲜、去海滩庆祝，没有雪但有阳光。' },
        { text: '新年烟花壮观', img: 'new-year-sydney', desc: '悉尼新年烟花是世界最壮观的之一！歌剧院和港湾大桥上烟花绽放，全球直播。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '板球是国球', img: 'cricket-australia', desc: '板球是澳大利亚国球！澳大利亚队是世界最强之一，灰烬杯是最大赛事。' },
        { text: '橄榄球联盟', img: 'rugby-australia', desc: '澳大利亚橄榄球联盟很强！世界杯曾两次夺冠，是三大运动之一。' },
        { text: '游泳奥运强项', img: 'swimming-australia', desc: '澳大利亚游泳是奥运夺金大户！索普是传奇选手，被称为"鱼雷"。' }
      ]
    }
  },

  'new-zealand': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '毛利文化独特', img: 'maori-culture', desc: '毛利人是新西兰原住民！他们的哈卡战舞震撼人心，橄榄球队赛前都会跳。' },
        { text: '霍比特人村', img: 'hobbiton', desc: '霍比特人村是《指环王》拍摄地！小房子、圆形门、绿色山丘，像童话世界。' },
        { text: '南岛风景壮美', img: 'south-island', desc: '新西兰南岛风景壮美！雪山、冰川、湖泊、峡湾，被称为"中土世界"。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '蜂蜜世界级', img: 'manuka-honey', desc: '麦卢卡蜂蜜是世界最好的蜂蜜！有独特抗菌效果，价格昂贵但很受欢迎。' },
        { text: '羊肉品质高', img: 'new-zealand-lamb', desc: '新西兰羊肉是世界最好的！草原养的羊，肉质鲜嫩，出口全世界。' },
        { text: '海鲜丰富', img: 'seafood-new-zealand', desc: '新西兰海鲜丰富！龙虾、青口贝、三文鱼都是顶级美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '怀唐伊日重要', img: 'waitangi-day', desc: '2月6日怀唐伊日纪念条约签署！是新西兰国庆日，毛利人和欧洲人一起庆祝。' },
        { text: '圣诞节夏季', img: 'christmas-new-zealand', desc: '新西兰圣诞节在夏天！人们吃烧烤、去海滩庆祝，Pohutukawa树开红花是圣诞标志。' },
        { text: '毛利新年', img: 'matariki', desc: '毛利新年Matariki在6月，标志着新年开始！人们聚在一起吃美食、讲故事。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球三次世界冠军', img: 'rugby-new-zealand', desc: '新西兰橄榄球队曾3次赢得世界杯！全黑队是世界最强，赛前哈卡舞震撼对手。' },
        { text: '帆船美洲杯', img: 'sailing-new-zealand', desc: '新西兰是帆船强国！曾多次赢得美洲杯，是航海国家。' },
        { text: '板球世界强队', img: 'cricket-new-zealand', desc: '新西兰板球是世界强队，曾进入世界杯决赛。' }
      ]
    }
  },

  'fiji': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '岛屿天堂美丽', img: 'fiji-islands', desc: '斐济有333个岛屿，是南太平洋天堂！碧蓝海水、白色沙滩、椰子树，是度假胜地。' },
        { text: '传统村落文化', img: 'fiji-village', desc: '斐济传统村落保留着古老文化！卡瓦仪式、歌舞表演、手工艺，可以体验原汁原味的岛国生活。' },
        { text: '日期变更线穿过', img: 'international-date-line', desc: '国际日期变更线穿过斐济！塔韦乌尼岛可以一脚踩今天、一脚踩昨天。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '洛沃传统烤肉', img: 'lovo', desc: '洛沃是斐济传统烤肉！食物用香蕉叶包着埋在地下烤，烟熏风味独特。' },
        { text: '卡瓦饮料仪式', img: 'kava', desc: '卡瓦是斐济传统饮料！用胡椒根磨成粉泡水，喝了会舌头麻，是社交仪式。' },
        { text: '海鲜丰富新鲜', img: 'seafood-fiji', desc: '斐济海鲜丰富新鲜！鱼、虾、蟹都是当天捕捞，简单烹饪就很美味。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '宪法日庆祝', img: 'fiji-constitution-day', desc: '宪法日是斐济重要节日！人们庆祝国家独立和民主。' },
        { text: '排灯节印度传统', img: 'diwali-fiji', desc: '排灯节是斐济重要节日！斐济有很多印度裔，点灯庆祝，气氛热闹。' },
        { text: '圣诞节热带风格', img: 'christmas-fiji', desc: '斐济圣诞节是热带风格！人们穿夏装、吃海鲜、在海边庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球七人制奥运冠军', img: 'rugby-fiji', desc: '斐济橄榄球七人制是奥运冠军！这是斐济第一枚奥运金牌，全国狂欢庆祝。' },
        { text: '足球有发展', img: 'football-fiji', desc: '足球在斐济有发展，有大洋洲联赛。' },
        { text: '游泳冲浪', img: 'swimming-fiji', desc: '斐济人擅长游泳和冲浪，海洋是他们的后花园。' }
      ]
    }
  },

  'papua-new-guinea': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '语言最多国家', img: 'papua-languages', desc: '巴布亚新几内亚是世界上语言最多的国家！800多种语言，每700人就有一个语言。' },
        { text: '部落文化独特', img: 'papua-tribes', desc: '巴布亚新几内亚有数百个部落！每个部落有自己的语言、服饰和传统，文化极其多样。' },
        { text: '热带雨林茂密', img: 'papua-rainforest', desc: '巴布亚新几内亚有世界第三大热带雨林！生物多样性丰富，很多物种还未被发现。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: 'Mumu传统烤肉', img: 'mumu', desc: 'Mumu是巴布亚传统烤肉！肉和蔬菜用叶子包着，在地下热石上烤，是庆典美食。' },
        { text: '山药和芋头主食', img: 'yam-taro', desc: '山药和芋头是巴布亚主食！可以煮、蒸、烤，是日常必备。' },
        { text: '热带水果丰富', img: 'tropical-fruits-papua', desc: '巴布亚热带水果丰富！香蕉、菠萝、木瓜，新鲜便宜。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'papua-independence-day', desc: '9月16日独立日，人们穿传统服装游行！各部落展示自己的文化传统。' },
        { text: '辛辛歌舞节', img: 'sing-sing', desc: '辛辛歌舞节是巴布亚最大文化节！各部落穿传统服饰，唱歌跳舞比赛。' },
        { text: '圣诞节庆祝', img: 'christmas-papua', desc: '巴布亚圣诞节家人团聚，吃传统美食庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球联盟最强', img: 'rugby-papua', desc: '橄榄球联盟是巴布亚最受欢迎的运动！国家队的战斗精神闻名世界。' },
        { text: '足球有发展', img: 'football-papua', desc: '足球在巴布亚有发展，有业余联赛。' },
        { text: '拳击有选手', img: 'boxing-papua', desc: '巴布亚出过一些优秀拳击选手，在国际比赛上表现出色。' }
      ]
    }
  },

  'samoa': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '波利尼西亚文化', img: 'polynesian-culture', desc: '萨摩亚是波利尼西亚文化中心！传统文身、舞蹈和手工艺代代相传，是南太平洋文化摇篮。' },
        { text: '传统村落生活', img: 'samoan-village', desc: '萨摩亚村落保持着传统生活方式！敞开的法勒房屋、大家庭生活、酋长制度，是活的文化博物馆。' },
        { text: '拉莱马努加雨林', img: 'falealupo-rainforest', desc: '萨摩亚热带雨林生态丰富！有独特的鸟类和植物，树上行走步道可以俯瞰雨林。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '乌木烤肉传统', img: 'umu', desc: '乌木是萨摩亚传统烤肉！食物用叶子包着在热石上烤，是周日家庭聚餐传统。' },
        { text: '生鱼沙拉Oka', img: 'oka', desc: 'Oka是萨摩亚生鱼沙拉！生鱼用柠檬汁腌制，配椰奶和洋葱，清爽美味。' },
        { text: '椰子料理丰富', img: 'coconut-samoa', desc: '萨摩亚椰子料理丰富！椰奶、椰肉、椰子油都是日常食材。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'samoa-independence-day', desc: '6月1日独立日，萨摩亚举行游行和庆祝！人们穿传统服装，跳草裙舞。' },
        { text: 'Teuila节文化', img: 'teuila-festival', desc: 'Teuila节是萨摩亚文化节！有舞蹈比赛、文身展示、传统运动。' },
        { text: '圣诞节热带', img: 'christmas-samoa', desc: '萨摩亚圣诞节是热带风格！人们吃乌木烤肉，在海边庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球最强', img: 'rugby-samoa', desc: '橄榄球是萨摩亚最受欢迎的运动！很多萨摩亚人在世界顶级联赛打球。' },
        { text: '拳击有选手', img: 'boxing-samoa', desc: '萨摩亚出过很多优秀拳击选手，大卫·图阿是传奇拳王。' },
        { text: '卡瓦运动传统', img: 'kirket', desc: '萨摩亚有自己的传统运动，是板球的变种。' }
      ]
    }
  },

  'tonga': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '唯一王国', img: 'tonga-kingdom', desc: '汤加是太平洋唯一从未被殖民的王国！保持着传统君主制，是波利尼西亚骄傲。' },
        { text: '国王加冕盛大', img: 'tonga-coronation', desc: '汤加国王加冕是盛大典礼！全国庆祝，传统仪式、宴会和歌舞表演。' },
        { text: '哈派群岛美丽', img: 'haapai-islands', desc: '哈派群岛是汤加最美的地方！清澈海水、白色沙滩，是浮潜和观鲸天堂。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '乌木烤肉传统', img: 'umu-tonga', desc: '乌木是汤加传统烤肉！食物在地下热石上烤，是周日家庭聚餐传统。' },
        { text: '烤猪肉宴席', img: 'roast-pig-tonga', desc: '烤猪肉是汤加宴席主菜！整只猪慢烤，皮脆肉嫩，是庆典必备。' },
        { text: '热带水果丰富', img: 'tropical-fruits-tonga', desc: '汤加热带水果丰富！香蕉、芒果、木瓜，新鲜便宜。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '国王生日庆祝', img: 'kings-birthday-tonga', desc: '国王生日是汤加重要节日！举行盛大庆祝活动，全国放假。' },
        { text: '宪法日庆祝', img: 'constitution-day-tonga', desc: '宪法日纪念汤加宪法颁布！是国庆日，全国庆祝。' },
        { text: '圣诞节传统', img: 'christmas-tonga', desc: '汤加圣诞节家人团聚，吃乌木烤肉庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '橄榄球最受欢迎', img: 'rugby-tonga', desc: '橄榄球是汤加最受欢迎的运动！国家队Ikale Tahi在世界比赛上表现出色。' },
        { text: '拳击有选手', img: 'boxing-tonga', desc: '汤加出过优秀拳击选手，皮塔是奥运拳王。' },
        { text: '网球有发展', img: 'tennis-tonga', desc: '网球在汤加也有发展，有业余联赛。' }
      ]
    }
  },

  'vanuatu': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '火山岛国', img: 'vanuatu-volcano', desc: '瓦努阿图有9座活火山！亚苏尔火山每天都在喷发，岩浆喷向天空，壮观无比。' },
        { text: '蹦极发源地', img: 'bungy-jumping-origin', desc: '瓦努阿图是蹦极发源地！彭特科斯特岛男子从高塔跳下，用藤蔓绑脚，是成年礼。' },
        { text: '潜水天堂', img: 'diving-vanuatu', desc: '瓦努阿图是潜水天堂！清澈海水、珊瑚礁和二战沉船，是潜水者梦想之地。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '拉普拉普传统', img: 'lap-lap', desc: '拉普拉普是瓦努阿图国菜！山药或芋头泥加椰奶，用叶子包着烤。' },
        { text: '椰子蟹特色', img: 'coconut-crab', desc: '椰子蟹是瓦努阿图特色美食！这种蟹会爬椰子树吃椰子，肉味像椰子香。' },
        { text: '热带水果丰富', img: 'tropical-fruits-vanuatu', desc: '瓦努阿图热带水果丰富，新鲜便宜。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'vanuatu-independence-day', desc: '7月30日独立日，瓦努阿图举行游行和庆祝！人们穿传统服装跳舞。' },
        { text: '蹦极节传统', img: 'naghol-festival', desc: '蹦极节在彭特科斯特岛举行！男子从高塔跳下，展示勇气，是古老传统。' },
        { text: '圣诞节热带', img: 'christmas-vanuatu', desc: '瓦努阿图圣诞节是热带风格，家人团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-vanuatu', desc: '足球是瓦努阿图最受欢迎的运动，有联赛和国家队。' },
        { text: '板球有发展', img: 'cricket-vanuatu', desc: '板球在瓦努阿图也有发展，是大洋洲运动。' },
        { text: '水上运动', img: 'water-sports-vanuatu', desc: '瓦努阿图人擅长游泳、潜水和冲浪，海洋是他们的家。' }
      ]
    }
  },

  'solomon-islands': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '二战战场', img: 'wwii-solomon', desc: '所罗门群岛是二战重要战场！瓜达尔卡纳尔岛战役持续6个月，扭转了太平洋战争局势。' },
        { text: '珊瑚礁丰富', img: 'coral-reef-solomon', desc: '所罗门群岛珊瑚礁丰富多样！清澈海水、五彩珊瑚和热带鱼，是潜水天堂。' },
        { text: '传统独木舟', img: 'outrigger-canoe', desc: '所罗门群岛传统独木舟历史悠久！支腿独木舟是岛民出行工具，也是体育活动。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '波伊传统', img: 'poi', desc: '波伊是所罗门传统主食！芋头或山药捣成泥，发酵后吃，口感酸酸的。' },
        { text: '海鲜丰富', img: 'seafood-solomon', desc: '所罗门海鲜丰富新鲜！鱼、虾、蟹都是当天捕捞。' },
        { text: '热带水果', img: 'tropical-fruits-solomon', desc: '所罗门热带水果丰富，椰子、香蕉、木瓜到处都是。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'solomon-independence-day', desc: '7月7日独立日，所罗门举行游行和庆祝！人们穿传统服装跳舞。' },
        { text: '海洋节庆祝', img: 'ocean-festival', desc: '海洋节庆祝所罗门海洋文化！有独木舟比赛和捕鱼比赛。' },
        { text: '圣诞节热带', img: 'christmas-solomon', desc: '所罗门圣诞节是热带风格，家人团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球最受欢迎', img: 'football-solomon', desc: '足球是所罗门最受欢迎的运动，有大洋洲联赛。' },
        { text: '沙滩足球强', img: 'beach-soccer-solomon', desc: '所罗门沙滩足球是大洋洲强队，曾进入世界杯。' },
        { text: '独木舟赛传统', img: 'canoe-racing', desc: '独木舟赛是所罗门传统运动，每年举行比赛。' }
      ]
    }
  },

  'kiribati': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '最先看到日出', img: 'kiribati-sunrise', desc: '基里巴斯是世界上最早看到日出的国家！千禧年时改了时区，成为第一个进入新年的国家。' },
        { text: '珊瑚环礁国家', img: 'coral-atoll', desc: '基里巴斯是珊瑚环礁国家！33个环礁像珍珠散布在太平洋上，平均海拔只有2米。' },
        { text: '气候变化威胁', img: 'climate-change-kiribati', desc: '基里巴斯受气候变化威胁最严重！海平面上升可能淹没整个国家，政府已在购买外国土地准备搬迁。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '海鲜为主', img: 'seafood-kiribati', desc: '基里巴斯以海鲜为主！鱼是日常主食，可以生吃、烤或煮。' },
        { text: '椰子料理', img: 'coconut-kiribati', desc: '基里巴斯椰子料理丰富！椰奶、椰肉都是日常食材。' },
        { text: '面包果主食', img: 'breadfruit', desc: '面包果是基里巴斯主食！可以烤、煮或炸，口感像面包。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '独立日庆祝', img: 'kiribati-independence-day', desc: '7月12日独立日，基里巴斯举行庆祝！人们跳舞唱歌。' },
        { text: '新年最早', img: 'new-year-kiribati', desc: '基里巴斯是世界上第一个进入新年的国家！圣诞岛最先看到新年日出。' },
        { text: '圣诞节热带', img: 'christmas-kiribati', desc: '基里巴斯圣诞节是热带风格，家人团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '足球有发展', img: 'football-kiribati', desc: '足球在基里巴斯有发展，虽然不是国际足联成员。' },
        { text: '排球普及', img: 'volleyball-kiribati', desc: '排球在基里巴斯很普及，是沙滩运动。' },
        { text: '举重有选手', img: 'weightlifting-kiribati', desc: '基里巴斯出过举重选手，是奥运参赛项目。' }
      ]
    }
  },

  'marshall-islands': {
    history: {
      title: '人文历史',
      icon: '📜',
      items: [
        { text: '核试验历史', img: 'nuclear-testing', desc: '马绍尔群岛曾是美国核试验场！比基尼环礁进行了67次核试验，居民被迫搬迁，至今仍有辐射影响。' },
        { text: '航海传统悠久', img: 'navigation-marshall', desc: '马绍尔群岛航海传统悠久！古人不用指南针，只靠星星和海流就能在太平洋航行。' },
        { text: '珊瑚环礁美丽', img: 'marshall-atolls', desc: '马绍尔群岛由29个珊瑚环礁组成！碧蓝泻湖、白色沙滩，像太平洋上的珍珠项链。' }
      ]
    },
    food: {
      title: '特色美食',
      icon: '🥢',
      items: [
        { text: '海鲜为主', img: 'seafood-marshall', desc: '马绍尔群岛以海鲜为主！鱼是日常主食，可以烤或煮。' },
        { text: '椰子料理', img: 'coconut-marshall', desc: '马绍尔椰子料理丰富！椰奶和椰肉是日常食材。' },
        { text: '面包果主食', img: 'breadfruit-marshall', desc: '面包果是马绍尔主食，可以烤或煮。' }
      ]
    },
    festival: {
      title: '风俗活动',
      icon: '🧧',
      items: [
        { text: '纪念日核历史', img: 'nuclear-victims-day', desc: '3月1日是核受害者纪念日！纪念核试验受害者，反思核武器危害。' },
        { text: '宪法日庆祝', img: 'constitution-day-marshall', desc: '5月1日宪法日是马绍尔国庆日！举行庆祝活动。' },
        { text: '圣诞节热带', img: 'christmas-marshall', desc: '马绍尔圣诞节是热带风格，家人团聚庆祝。' }
      ]
    },
    sports: {
      title: '体育竞技',
      icon: '🏅',
      items: [
        { text: '篮球最受欢迎', img: 'basketball-marshall', desc: '篮球是马绍尔最受欢迎的运动，有业余联赛。' },
        { text: '足球有发展', img: 'football-marshall', desc: '足球在马绍尔有发展，虽然不是国际足联成员。' },
        { text: '游泳冲浪', img: 'swimming-marshall', desc: '马绍尔人擅长游泳和冲浪，海洋是他们的家。' }
      ]
    }
  }
};

// 获取国家文化数据
function getCountryCulture(countryId) {
  return WORLD_CULTURE_DATA[countryId] || null;
}

// 图片加载配置（纯本地模式，完全离线可用）
const CULTURE_IMAGE_CONFIG = {
  // 本地图片基础路径
  localBasePath: 'assets/culture'
};

// 获取文化图片 URL（纯本地模式，无在线回退）
// localPath: 本地图片路径（相对于 assets/culture/）
function getCultureImageUrl(localPath) {
  if (!localPath) return [];
  return [`${CULTURE_IMAGE_CONFIG.localBasePath}/${localPath}`];
}

// 获取文化图片本地路径
// countryId: 国家ID
// category: 板块类型 (history/food/festival/sports)
// index: 内容索引（从1开始）
function getLocalImagePath(countryId, category, index) {
  return `${countryId}/${category}/${index}.svg`;
}
