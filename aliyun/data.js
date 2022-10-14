// 右上菜单
exports.operation = [
  {
    "name": "官网",
    "icon": "home",
    "link":
      "https://www.aliyun.com/solution/hybridcloud?spm=a2ciq.13956874.banner.d-banner-btn-2.63f63390Y3nTgn",
    "mobile": false,
  },
  {
    "name": "微信",
    "icon": "displayer",
    "link":
      "https://apsara-stack.aliyun.com/poc/?spm=5176.23601142.J_9539135940.2.46635d42x0TqDM",
    "mobile": false,
  },
  {
    "name": "咨询",
    "icon": "headset",
    "link": "https://apsara-stack.aliyun.com/consult/home",
    "mobile": false,
  },
  {
    "name": "分享",
    "icon": "share",
    "mobile": true,
    "uaWhiteList": "DingTalk|WeChat",
  },
];

// 整站导航菜单
exports.nav = [
  {
    "name": "菜单一",
    "imgUrl":
      "//img.alicdn.com/imgextra/i1/O1CN01fY93bp1IydmMpsQHC_!!6000000000962-0-tps-660-371.jpg",
    "videoUrl":
      "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/mini/build@2.mp4",
    "link": "/build",
    "children": [
      {
        "name": "AAAA",
        "link": "/build/introduction",
      },
      {
        "name": "BBBB",
        "link": "/build/enterprise",
      },
      {
        "name": "CCCC",
        "link": "/build/agility",
      },
    ],
    "mobileNextPage": false,
  },
  {
    "name": "菜单二",
    "imgUrl":
      "//img.alicdn.com/imgextra/i1/O1CN01nxXxvz1ODMWUWmgn5_!!6000000001671-0-tps-660-371.jpg",
    "videoUrl":
      "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/mini/control@2.mp4",
    "link": "/control",
    "children": [
      {
        "name": "1111",
        "link": "/control/doa",
      },
      {
        "name": "2222",
        "link": "/control/uniops",
      },
      {
        "name": "3333",
        "link": "/control/resource",
      },
      {
        "name": "44444",
        "link": "/control/operation",
      },
    ],
    "mobileNextPage": false,
  },
  {
    "name": "菜单三",
    "imgUrl":
      "//img.alicdn.com/imgextra/i2/O1CN01x97zMQ1SZaGhXnYag_!!6000000002261-0-tps-660-371.jpg",
    "videoUrl":
      "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/mini/use@2.mp4",
    "link": "/use",
    "children": [
      {
        "name": "甲乙",
        "link": "/use/devops",
      },
      {
        "name": "丙丁",
        "link": "/use/aaop",
      },
      {
        "name": "午己",
        "link": "/use/monitor",
      },
      {
        "name": "庚辛",
        "link": "/use/recovery",
      },
      {
        "name": "壬癸",
        "link": "/use/engineering",
      },
    ],
    "mobileNextPage": false,
  },
  {
    "name": "自定义菜单",
    "imgUrl":
      "//img.alicdn.com/imgextra/i2/O1CN01x97zMQ1SZaGhXnYag_!!6000000002261-0-tps-660-371.jpg",
    "videoUrl":
      "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/mini/use@2.mp4",
    "link": "/custom",
    "children": [
      {
        "name": "甲乙",
        "link": "/custom/devops",
      },
      {
        "name": "丙丁",
        "link": "/custom/aaop",
      },
      {
        "name": "午己",
        "link": "/custom/monitor",
      },
      {
        "name": "庚辛",
        "link": "/custom/recovery",
      },
      {
        "name": "壬癸",
        "link": "/custom/engineering",
      },
    ],
    "mobileNextPage": false,
  },
  {
    "name": "菜单四",
    "link": "/product",
    "children": [
      {
        "link": "/product/structure",
        "name": "子丑",
      },
      {
        "name": "寅卯",
        "link": "/product/container",
      },
      {
        "name": "辰巳",
        "link": "/product/storage",
      },
      {
        "link": "/product/bigdata",
        "name": "午马未羊",
      },
      {
        "link": "/product/database",
        "name": "戌亥",
      },
    ],
    "mobileNextPage": true,
    "imgUrl":
      "//img.alicdn.com/imgextra/i4/O1CN01SK5mrq1pRYQnWERXX_!!6000000005357-0-tps-330-186.jpg",
    "videoUrl":
      "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/mini/product@2.mp4",
    "mobileImgUrl":
      "//gw.alicdn.com/imgextra/i1/O1CN01vlLilP1KsnuJ7avuU_!!6000000001220-0-tps-372-618.jpg",
  },
];

// 全栈建云
exports.build = {
  "children": [
    {
      "content": [],
      "id": "introduction",
      "type": "video",
      "videoUrl":
        "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E5%85%A8%E6%A0%88%E5%BB%BA%E4%BA%91/%E3%80%90%E5%AF%B9%E5%A4%96%E3%80%91%E9%98%BF%E9%87%8C%E4%BA%91%E6%B7%B7%E5%90%88%E4%BA%91Apsara%20Stack2.0%E4%BA%A7%E5%93%81%E7%90%86%E5%BF%B5%E4%BB%8B%E7%BB%8D%E8%A7%86%E9%A2%91.mp4",
      "name": "Apsara Stack2.0介绍",
    },
    {
      "content": [
        {
          "sort": 0,
          "name": "业务场景",
          "value":
            '<p>面向边缘计算场景，提供软硬件一体化解决方案，通过预安装、预集成、深度调优，同时支持远程交付和中心统一运维，有效提升系统可用性和运维效率，使企业轻松实现云边联动，助力企业在5G时代实现快速创新。</p><p></p><div class="media-wrap image-wrap"><img src="/assets/imgextra/i3/O1CN01vTfDKZ1EsRuEdzYH9_!!6000000000407-0-tps-916-390.jpg"/></div><p></p>',
        },
        {
          "sort": 1,
          "name": "产品优势",
          "value":
            "<p>1、云边协同：单机柜小型化本地部署，提供独立运行环境无需专业机房环境，支持资源按需配置。通过和中心云联动，实现软件统一更新，边缘节点和中心云能力的快速同步。通过统一云端管理和远程运维，极大提升运维效率；</p><p>2、开箱即用：软硬一体化交付，即开即用，快速部署，软硬件协同优化，根据应用深度集成和调优，服务全流程支撑。</p>",
        },
        {
          "sort": 2,
          "name": "产品架构",
          "value":
            '<p></p><div class="media-wrap image-wrap"><img src="/assets/imgextra/i3/O1CN0103JmB61IFkuMYcdK2_!!6000000000864-0-tps-912-428.jpg"/></div><p></p>',
        },
      ],
      "id": "appliance",
      "name": "一体机",
      "type": "card",
      "videoUrl":
        "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E5%85%A8%E6%A0%88%E5%BB%BA%E4%BA%91/%E9%98%BF%E9%87%8C%E4%BA%91%E4%B8%80%E4%BD%93%E6%9C%BAfinal-%E5%B0%8F.mp4",
      "imgUrl":
        "/assets/imgextra/i1/O1CN01cpY1ma1HOAZKZUBRm_!!6000000000747-0-tps-1102-1330.jpg",
      "link": [
        {
          "name": "申请体验",
          "link":
            "https://apsara-stack.aliyun.com/poc/?spm=5176.23601142.J_9539135940.2.46635d42qxaZWq",
          "icon": "plan",
          "layout": "垂直",
        },
        {
          "name": "AI一体机",
          "icon": "3d",
          "layout": "垂直",
          "link": "/3d/ai",
        },
        {
          "name": "IoT一体机",
          "icon": "3d",
          "layout": "垂直",
          "link": "/3d/iot",
        },
      ],
    },
    {
      "content": [
        {
          "sort": 0,
          "name": "业务场景",
          "value":
            '<p>敏捷版为云化各阶段的客户提供大数据、数据库、云原生PaaS三大优势场景的轻量化垂直产品集，可基于业务需求任选全功能数据库、规模化大数据集群、丰富微服务治理能力，同时支持与阿里云公共云、企业版形成一朵云，构建中心+分支的多级云平台。</p><p></p><div class="media-wrap image-wrap"><img src="/assets/imgextra/i4/O1CN01orxBKQ1of0RtRPgA1_!!6000000005251-0-tps-964-464.jpg"/></div><p></p>',
        },
        {
          "sort": 1,
          "name": "产品优势",
          "value":
            "<p>1、场景聚焦：针对数据库、大数据、云原生PaaS典型应用场景独立输出全功能数据库、规模化大数据集群、丰富微服务治理能力等垂直产品集；</p><p>2、轻量化输出：支持3台服务器起步或基于虚拟机部署，可实现小时级交付；</p><p>3、灵活兼容：充分利用客户现有数据中心物理/虚拟基础设施资源，可基于多种IaaS平台（VMware、OpenStack、Zstack等）部署阿里云PaaS产品。</p>",
        },
        {
          "sort": 2,
          "name": "产品架构",
          "value":
            '<p></p><p></p><div class="media-wrap image-wrap"><img src="/assets/imgextra/i3/O1CN01UzhCjg1WiyneETdsY_!!6000000002823-0-tps-904-626.jpg"/></div><p></p><p></p>',
        },
      ],
      "id": "agility",
      "name": "敏捷版",
      "type": "card",
      "summary": [{ "unit": "台", "value": "3-20", "name": "建议规模" }],
      "videoUrl":
        "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E5%85%A8%E6%A0%88%E5%BB%BA%E4%BA%91/%E6%95%8F%E6%8D%B7%E7%89%8820211021%E6%96%B0.mp4",
      "imgUrl":
        "/assets/imgextra/i4/O1CN01kxGd0C21U61HUI0LU_!!6000000006987-0-tps-1440-1214.jpg",
      "link": [
        {
          "link":
            "https://apsara-stack.aliyun.com/poc/apply?spm=a2ciq.13956874.poc-banner.1.4e716f4eTzGKEf",
          "name": "申请体验",
          "icon": "plan",
          "layout": "水平",
        },
      ],
    },
    {
      "content": [
        {
          "sort": 0,
          "name": "业务场景",
          "value":
            "<p>面向中大型业务规模客户的全栈云平台，满足客户在本地运行同阿里云公共云产品相同特性服务的需求。既可构建政企大规模多级云或行业云，亦可为云化初期客户提供小型轻量化云平台，帮助客户快速上云。</p>",
        },
        {
          "sort": 1,
          "name": "产品优势",
          "value":
            "<p>1、规模按需：满足客户超大规模业务量运行需求，单区域部署规模10000台，支持多Region业务运行；也可面向云化初期客户提供小型化云平台，降低上云门槛；</p><p>2、一应俱全：与公共云同源，提供超过70款公共云产品，支持热升级，客户可在本地持续尽享阿里云最新产品服务；可一键式弹性扩展至公共云，提供不同应用场景需求下的混合云解决方案；</p><p>3、深耕行业：丰富的政府、金融等行业的全栈云平台搭建经验，有效保障中大型政企客户更安全更稳定的上云；</p><p>4、安全稳定：原生安全体系架构提供多层级、一体化安全防护服务，首家通过等保2.0四级认证，高分通过可信云认证、ISO27001、GDPR认证和平台级国密测评等安全认证；提供金融级两地三中心容灾、异地多活方案，强力保证系统高可靠和业务连续性。</p>",
        },
        {
          "sort": 2,
          "name": "产品架构",
          "value":
            '<p></p><p></p><div class="media-wrap image-wrap"><img src="/assets/imgextra/i4/O1CN01ghd5D11oe5ed9DROO_!!6000000005249-0-tps-900-746.jpg"/></div><p></p><p></p>',
        },
      ],
      "id": "enterprise",
      "name": "企业版",
      "type": "card",
      "summary": [{ "value": "20-10000", "unit": "台", "name": "建议规模" }],
      "videoUrl":
        "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E5%85%A8%E6%A0%88%E5%BB%BA%E4%BA%91/%E4%BC%81%E4%B8%9A%E7%89%8820211021%E6%96%B0.mp4",
      "imgUrl":
        "/assets/imgextra/i3/O1CN01oIMlQb1fjk0BeAiI8_!!6000000004043-0-tps-1440-1214.jpg",
      "link": [
        {
          "icon": "plan",
          "name": "申请体验",
          "link":
            "https://apsara-stack.aliyun.com/poc/?spm=5176.23601142.J_9539135940.2.46635d42qxaZWq",
          "layout": "水平",
        },
      ],
    },
  ],
  "id": "build",
  "name": "菜单一",
  "widthDeg": 120,
  "heightDeg": 30,
  "radius": 50,
  "imgUrl":
    "/assets/imgextra/i2/O1CN01QIGJBM1rBdxh2OTba_!!6000000005593-0-tps-4320-1080.jpg",
  "sidebar": [
    { "link": "/build/introduction", "name": "AAA" },
    { "name": "BBB", "link": "/build/enterprise" },
    { "name": "CCC", "link": "/build/agility" },
  ],
  "endpoints": [
    {
      "id": "AAAA",
      "link": "/build/introduction",
      "position": [0, -1, -50], // 水平位置、垂直位置
      "tip": "点击沈傲立",
    },
    {
      "id": "BBBB",
      "link": "/build/enterprise",
      "position": [-11.077424880973364, 1.5, -48.75746771527816],
      "tip": "点击沈傲立",
    },
    {
      "id": "CCCC",
      "link": "/build/agility",
      "position": [11.67226819279527, 1.5, -48.61849601988383],
      "tip": "点击沈傲立",
    },
    {
      "id": "DDDD",
      "link": "/build/agility",
      "position": [21.67226819279527, 1.5, -48.61849601988383],
      "tip": "new point",
    },
  ],
  "mobileImgUrl":
    "https://gw.alicdn.com/imgextra/i3/O1CN01VAwUvk1uMaGo58VPp_!!6000000006023-0-tps-4096-1024.jpg",
};

// 极致用云
exports.use = {
  "children": [
    {
      "content": [
        {
          "sort": 0,
          "name": "业务场景",
          "value": "<p>面向边缘计算场景，提供软硬件一体化解决方案，通过预安装、预集成、深度调优，同时支持远程交付和中心统一运维，有效提升系统可用性和运维效率，使企业轻松实现云边联动，助力企业在5G时代实现快速创新。</p><p></p><div class=\"media-wrap image-wrap\"><img src=\"blob:https://query.aliyun-inc.com/25718405-f2fc-4612-8b17-c4bd7e591007\"/></div><p></p>"
        },
        {
          "sort": 1,
          "name": "产品优势",
          "value": "<p>1、云边协同：单机柜小型化本地部署，提供独立运行环境无需专业机房环境，支持资源按需配置。通过和中心云联动，实现软件统一更新，边缘节点和中心云能力的快速同步。通过统一云端管理和远程运维，极大提升运维效率；</p><p>2、开箱即用：软硬一体化交付，即开即用，快速部署，软硬件协同优化，根据应用深度集成和调优，服务全流程支撑。</p>"
        },
        { "sort": 2, "name": "产品架构", "value": null }
      ],
      "id": "aaop",
      "name": "混合云应用运维平台（AAOP）",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91/%E6%B7%B7%E5%90%88%E4%BA%91%E6%96%B0%E4%B8%80%E4%BB%A3%E8%BF%90%E7%BB%B4%E5%B0%8F%E8%A7%86%E9%A2%91.mp4"
    },
    {
      "content": [],
      "id": "engineering",
      "name": "数字化业务运维系统工程",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91/%E5%AE%89%E5%85%A8%E5%B7%A5%E7%A8%8B-%E7%BB%88%E6%9E%81%E7%89%88%E6%9C%AC2.0-0927.mp4"
    },
    {
      "content": [],
      "id": "jzyyjs",
      "name": "极致用云介绍",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91/0905%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91-%E6%88%90%E7%89%87.mp4"
    },
    {
      "content": [],
      "id": "monitor",
      "name": "一站式应用运维",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91/0904%E9%98%BF%E9%87%8C%E4%BA%91%E8%BF%90%E7%BB%B4%E5%88%9B%E6%84%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-%E6%88%90%E7%89%87.mp4"
    },
    {
      "content": [
        {
          "sort": 0,
          "name": "业务场景",
          "value": "<p>面向边缘计算场景，提供软硬件一体化解决方案，通过预安装、预集成、深度调优，同时支持远程交付和中心统一运维，有效提升系统可用性和运维效率，使企业轻松实现云边联动，助力企业在5G时代实现快速创新。</p><p></p><div class=\"media-wrap image-wrap\"><img src=\"blob:https://query.aliyun-inc.com/25718405-f2fc-4612-8b17-c4bd7e591007\"/></div><p></p>"
        },
        {
          "sort": 1,
          "name": "产品优势",
          "value": "<p>1、云边协同：单机柜小型化本地部署，提供独立运行环境无需专业机房环境，支持资源按需配置。通过和中心云联动，实现软件统一更新，边缘节点和中心云能力的快速同步。通过统一云端管理和远程运维，极大提升运维效率；</p><p>2、开箱即用：软硬一体化交付，即开即用，快速部署，软硬件协同优化，根据应用深度集成和调优，服务全流程支撑。</p>"
        },
        { "sort": 2, "name": "产品架构", "value": null }
      ],
      "id": "devops",
      "name": "极致用云介绍",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91/0905%E6%9E%81%E8%87%B4%E7%94%A8%E4%BA%91-%E6%88%90%E7%89%87.mp4"
    }
  ],
  "id": "use",
  "name": "极致用云",
  "widthDeg": 120,
  "heightDeg": 30,
  "radius": 50,
  "imgUrl": "https://img.alicdn.com/imgextra/i2/O1CN01rciNqH1dhn8jzpbYZ_!!6000000003768-0-tps-4320-1080.jpg",
  "sidebar": [
    { "name": "云效介绍", "link": "/use/devops" },
    { "name": "混合云应用运维平台", "link": "/use/aaop" },
    { "name": "数字化业务运维\\n系统工程", "link": "/use/engineering" },
    { "name": "一站式应用运维", "link": "/use/monitor" },
    {
      "name": "容灾自愈体验",
      "link": "https://apsara-stack.aliyun.com/yunxi/devops-show"
    }
  ],
  "endpoints": [
    {
      "id": "应用研发云效介绍",
      "link": "/use/devops",
      "position": [15.284765248155283, 1.6, -47.60646963710693],
      "tip": "应用研发云效介绍"
    },
    {
      "id": "混合云应用运维平台（AAOP）",
      "link": "/use/aaop",
      "tip": "混合云应用运维平台介绍",
      "position": [6.266661678215213, 1.7, -49.60573506572389]
    },
    {
      "id": "数字化业务运维系统工程",
      "link": "/use/engineering",
      "position": [-3.574872216634296, 1.3, -49.872039146547195],
      "tip": "数字化业务运维系统工程"
    },
    {
      "id": "一站式应用运维",
      "link": "/use/monitor",
      "position": [-12.096094779983387, 1.2, -48.514786313799824],
      "tip": "一站式应用运维"
    },
    {
      "id": "容灾自愈体验",
      "position": [-19.214766132990185, 1.2, -46.16051085564904],
      "link": "https://apsara-stack.aliyun.com/yunxi/devops-show",
      "tip": "容灾自愈体验"
    },
    {
      "id": "咨询",
      "link": "https://page.aliyun.com/form/act1708923890/index.htm",
      "position": [22.114434510950066, -2.9, -44.843637076634415],
      "tip": "点击咨询"
    },
    {
      "id": "体验",
      "link": "https://wx-in-i.dingtalk.com/yydy/yq.html?corpId=dinga36e2e3ea985c43bee0f45d8e4f7c288&inviterUid=23A84101F42705B5&encodeDeptId=0054DC2B53AFE745&scene=contactOrgManage&origin=9999&originMeta=contact-orgManage-orgApply-share&method=QRCode",
      "position": [22.114434510950066, -5.85, -44.843637076634415],
      "tip": "即刻体验"
    }
  ],
  "mobileImgUrl": "https://gw.alicdn.com/imgextra/i4/O1CN01RHcrv523mXFhGjGmf_!!6000000007298-0-tps-4096-1024.jpg"
}

// 智能管云
exports.control = {
  "children": [
    {
      "content": [],
      "id": "introduction",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/0905%E6%99%BA%E8%83%BD%E4%BA%91%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0-%E6%88%90%E7%89%87.mp4",
      "name": "智能管云介绍"
    },
    {
      "content": [],
      "id": "operation",
      "name": "精细化运营管理",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E4%B8%80%E4%BD%93%E5%8C%96%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86.mp4"
    },
    {
      "content": [],
      "id": "resource",
      "name": "一体化资源管理",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E6%99%BA%E8%83%BD%E5%8C%96%E9%9B%86%E4%B8%AD%E8%BF%90%E7%BB%B4.mp4"
    },
    {
      "content": [],
      "id": "uniops",
      "name": "智能化集中运维",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E7%B2%BE%E7%BB%86%E5%8C%96%E8%BF%90%E8%90%A5%E7%AE%A1%E7%90%86.mp4"
    },
    {
      "content": [],
      "id": "doa",
      "name": "智能指挥官大屏",
      "type": "video",
      "summary": [],
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E7%AE%A1%E4%BA%91-%E8%B6%85%E5%AE%BD%E5%B1%8F%E4%BB%8B%E7%BB%8D.mp4"
    }
  ],
  "id": "control",
  "name": "智能管云",
  "widthDeg": 150,
  "heightDeg": 30,
  "radius": 50,
  "imgUrl": "https://img.alicdn.com/imgextra/i1/O1CN012V9GXy1O1ud7JoXEP_!!6000000001646-0-tps-5400-1080.jpg",
  "sidebar": [
    { "link": "/control/introduction", "name": "整体介绍" },
    { "name": "智能指挥官大屏演示", "link": "/control/doa" },
    { "name": "智能化集中运维", "link": "/control/uniops" },
    { "name": "一体化资源管理", "link": "/control/resource" },
    { "name": "精细化运营管理", "link": "/control/operation" }
  ],
  "endpoints": [
    {
      "id": "管云介绍",
      "link": "/control/introduction",
      "position": [5.226423163382673, -1.2, -49.72609476841367],
      "tip": "点击观看介绍",
      "alwaysTip": true
    },
    {
      "id": "智能指挥官大屏",
      "link": "/control/doa",
      "position": [2.0065896266279863, 2.5, -49.9597197557223],
      "tip": "点击查看动态大屏",
      "alwaysTip": true
    },
    {
      "id": "智能化集中运维",
      "link": "/control/uniops",
      "position": [33.58602946614951, -0.75, -37.04022981433751]
    },
    {
      "id": "一体化资源管理",
      "link": "/control/resource",
      "position": [38.636678674867554, -0.85, -31.73652566011338]
    },
    {
      "id": "精细化运营管理",
      "link": "/control/operation",
      "position": [42.94799484653321, -1, -25.602143243528587]
    }
  ],
  "mobileImgUrl": "https://gw.alicdn.com/imgextra/i3/O1CN01tLinmf1OlFqHgmEN6_!!6000000001745-0-tps-4096-1024.jpg"
}

// 自定义菜单
exports.custom = {
  "children": [
    {
      "content": [],
      "id": "introduction",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/0905%E6%99%BA%E8%83%BD%E4%BA%91%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0-%E6%88%90%E7%89%87.mp4",
      "name": "智能管云介绍"
    },
    {
      "content": [],
      "id": "operation",
      "name": "精细化运营管理",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E4%B8%80%E4%BD%93%E5%8C%96%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86.mp4"
    },
    {
      "content": [],
      "id": "resource",
      "name": "一体化资源管理",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E6%99%BA%E8%83%BD%E5%8C%96%E9%9B%86%E4%B8%AD%E8%BF%90%E7%BB%B4.mp4"
    },
    {
      "content": [],
      "id": "uniops",
      "name": "智能化集中运维",
      "type": "video",
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E7%B2%BE%E7%BB%86%E5%8C%96%E8%BF%90%E8%90%A5%E7%AE%A1%E7%90%86.mp4"
    },
    {
      "content": [],
      "id": "doa",
      "name": "智能指挥官大屏",
      "type": "video",
      "summary": [],
      "videoUrl": "https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/%E6%B7%B7%E5%90%88%E4%BA%91%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C%E8%90%A5/%E6%99%BA%E8%83%BD%E7%AE%A1%E4%BA%91/%E7%AE%A1%E4%BA%91-%E8%B6%85%E5%AE%BD%E5%B1%8F%E4%BB%8B%E7%BB%8D.mp4"
    }
  ],
  "id": "custom",
  "name": "自定义菜单",
  "widthDeg": 150,
  "heightDeg": 30,
  "radius": 50,
  "imgUrl": "https://img.alicdn.com/imgextra/i1/O1CN012V9GXy1O1ud7JoXEP_!!6000000001646-0-tps-5400-1080.jpg",
  "sidebar": [
    { "link": "/custom/introduction", "name": "整体介绍" },
    { "name": "智能指挥官大屏演示", "link": "/custom/doa" },
    { "name": "智能化集中运维", "link": "/custom/uniops" },
    { "name": "一体化资源管理", "link": "/custom/resource" },
    { "name": "精细化运营管理", "link": "/custom/operation" }
  ],
  "endpoints": [
    {
      "id": "管云介绍",
      "link": "/custom/introduction",
      "position": [5.226423163382673, -1.2, -49.72609476841367],
      "tip": "点击观看介绍",
      "alwaysTip": true
    },
    {
      "id": "智能指挥官大屏",
      "link": "/custom/doa",
      "position": [2.0065896266279863, 2.5, -49.9597197557223],
      "tip": "点击查看动态大屏",
      "alwaysTip": true
    },
    {
      "id": "智能化集中运维",
      "link": "/custom/uniops",
      "position": [33.58602946614951, -0.75, -37.04022981433751]
    },
    {
      "id": "一体化资源管理",
      "link": "/custom/resource",
      "position": [38.636678674867554, -0.85, -31.73652566011338]
    },
    {
      "id": "精细化运营管理",
      "link": "/custom/operation",
      "position": [42.94799484653321, -1, -25.602143243528587]
    }
  ],
  "mobileImgUrl": "https://gw.alicdn.com/imgextra/i3/O1CN01tLinmf1OlFqHgmEN6_!!6000000001745-0-tps-4096-1024.jpg"
}
