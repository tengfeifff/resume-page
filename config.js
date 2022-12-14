var app = new Vue({
  el: '#page',
  data: {
    网页名称: '马腾飞的个人简历',
    姓名: '马腾飞',
    号码: '17629724539',
    邮箱: 'tengfei1665129184@163.com',
    个人网页: '共产党员',
    地址: '河南许昌',
    职业: '以梦为马，不负韶华',
    头像地址: 'images/user.png',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com/u/5017279699/home?wvr=5'
      },
      {
        类型: 'qq',
        地址: 'https://1665129184.qzone.qq.com'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: '面试官好',
    关于我内容: '我是来自北京石油化工学院的马腾飞，欢迎您来到我的频道！在这里您将看到不一样的我！',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '销售经理',
        公司名称: '贝壳找房德佑郑州分部',
        时间:'时间：2020.04 - 2020.09',
        介绍: '2019年，疫情突袭，2020年我大学毕业，获得录取通知书的我只身来到省会郑州，开启了我自己人生的第一份实习工作，可能有的人不太理解？咦！你咋从事房地产实习了，我当时是这样想的：房地产是我始终要接触到的，为什么不趁着年轻去早点了解它呢？我做事总是雷厉风行，告别家人后我就出发了。哈哈！其实还好，在房地产行业中，我学到了非常非常多的文化和知识，这可能是我自学根本学不到的东西，我和同事们在闲暇时间畅聊房产，畅聊未来，工作中我会竭尽全力的用我的专业能力去帮助那些需要我的人，我感觉特别的快乐！'
      },
      {
        职业名称: '小小实习生',
        公司名称: '北京燕山石化',
        时间: '时间：2021.04 - 2021.07',
        介绍: '时隔一年后，我顺利读上了研究生，这次的实习是学校安排的必修实习，在实习中，有多个方面供大家选择，而我考虑到研究生阶段跟着导师主要学习的嵌入式方向，所以毅然决然的选择了跟嵌入式类似的控制---PLC技术，在学习中，我跟老师学习了西门子公司的PLC技术的控制，并成功实现了控制化工行业的换热器、冷凝器等装置的模拟控制，在后来的实习安排中，我又跟相关的研究老师学习了绘制换热器的CAD图，进一步加强了我个人的绘图能力。'
      },
      {
        职业名称: '小实习生',
        公司名称: '北京市电子产品质量检测中心',
        时间: '时间：2021.07 - 2022.01',
        介绍: '2021年的夏天，刚刚结束学校的实习后，一个同学和我约好去参加一个网络安全测评方面的实习，至于为什么参加这种偏向软件方面的测评呢？我的想法是：既然马上就要找工作了，就要提前确定好方向，为未来的人生做好充足的规划。这个测评是关于首发集团下的交通部高速公路的视频和监控系统系统的网络安全等级保护测评，测评的主要参考是第二册网络测评书，而我所做的主要工作是根据现有等保测评项目，进行服务器和数据库以及部分防火墙的安全测评，在此次项目之后，我找到了自己的真正的方向，明确了今后努力的方向。'
      },
	  {
	    职业名称: '实习生',
	    公司名称: '拓普康（北京）科技发展有限公司',
	    时间: '时间：2020.11 - 今天',
	    介绍: '而对于这个项目我为什么最后才写呢？因为这个项目其实是我导师的校企合作项目，在导师的项目中，我也不时去往老师的公司，所以也算是半个实习生吧，在导师的合作项目的实习中，我刚开始主要从事的工作是负责学习全站仪的一些操作流程，负责进行激光测距的一些调配工作，在之后的学习中，根据光学测距原理，不断地更新激光测距的范围，提出自己的想法，设计相关的电路，让测距仪变得更加精确。'
	  },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '副班长',
        学校名称: '河南科技大学车辆161班',
        时间: '2016 - 2020',
        介绍: '一开始我是班级的文体委员，但后来由于我个人活泼开朗的性格，慢慢的和同学们以及老师越来越熟，大家就一致推荐我当班长的副手，即副班长，在作为副班长的四年时间里，我不时组织班级同学进行班级团建活动，组织班级参加多项校园和社会组织活动，在毕业那年，我们班级光荣的被评上了优秀班级的称号。'
      },
      {
        学段: '副部长',
        学校名称: '河南科技大学车辆与交通工程学院组织部',
        时间: '2016 - 2018',
        介绍: '从大学开始我就加入了河南科技大学车辆学院的组织部，在这里，我和我的部长一起努力，做好我们组织部的工作，我们一起组织举办篮球比赛，一起共同组织训练学校的趣味运动会，在经历了近两个多月的训练后，我们带领队伍取得了全校二十多个学院第一名的好成绩'
      },
      {
        学段: '车架组副组长',
        学校名称: '河南科技大学易车河洛风赛车队',
        时间: '2017 - 2018',
        介绍: '河南科技大学易车河洛风赛车队组建于2009年12月，由全校各专业热爱赛车的学生和指导老师组成，作为中国大学生方程式赛车的初创十支车队之一，我校车队文化已经深深渗透于每一个车辆学子的内心，在这里，我可以非常骄傲的说，参加河南科技大学易车河洛风赛车队可以说是我大学课外活动中最有意义的事，本人参与的是河南科技大学第二代巴哈赛车的研发与制造，参与了第四届中国大学生巴哈大赛，我本人在车队中主要负责车架的设计、仿真、车架钢管的加工、以及后端牵引的设计，当然作为负责人，本人还参与了新成员的培训，以及车架组内部事务的管理等多个方面。'
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的能力: [
      {
        名称: '计算机语言',
		图标: '学校名称',
        介绍: 'C/C++、   Linux、   Verilog HDL、   Matlab'
      },
      {
        名称: '单片机技能',
        图标: '学校名称',
        介绍: 'AT89C51、   ARM、   STM32'
      },
      {
        名称: '动手能力',
        图标: '学校名称',
        介绍: '电路调试、   使用电学测量仪器、   手工焊接'
      },
      {
        名称: '机械方面技能',
        图标: '学校名称',
        介绍: '熟练使用各种三维二维制图和仿真软件'
      },
      {
        名称: '运动天赋',
        图标: '学校名称',
        介绍: '篮球、   乒乓球、   羽毛球、   足球、   游泳、   跑步'
      },
      {
        名称: '其他方面',
        图标: '学校名称',
        介绍: '太多了！！！详细请来面试我！'
      }
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: 'Altium   Designer',
        进度: 85,
      },
      {
        名称: 'Keil 编译软件',
        进度: 70
      },
      {
        名称: 'Quartus II 软件',
        进度: 65
      },
      {
        名称: 'MATLAB',
        进度: 70
      },
      {
        名称: '三维制图 Catia',
        进度: 90
      },
      {
        名称: '平面绘图 CAD',
        进度: 90
      },
      {
        名称: '图像处理 PS',
        进度: 80
      },
      {
        名称: '各种办公软件',
        进度: 100
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '爱玩儿',
        图片: 'images/1.jpg',
      },
      {
        名称: '会忧郁',
        图片: 'images/2.jpg',
      },
      {
        名称: '爱旅游',
        图片: 'images/3.jpg',
      }, {
        名称: '哈哈，还有点小清新',
        图片: 'images/4.jpg',
      }, {
        名称: '一块恰饭',
        图片: 'images/5.jpg',
      }, {
        名称: '一块去比赛',
        图片: 'images/6.jpg',
      }, {
        名称: '回母校去看看',
        图片: 'images/7.jpg',
      }, {
        名称: '冬天去耍，哈哈',
        图片: 'images/8.jpg',
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})