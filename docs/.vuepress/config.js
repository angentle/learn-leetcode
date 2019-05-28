module.exports = {
    title: 'Angentle',  // 设置网站标题
    description : 'nothing',
    base : '/angentle',
    "theme_color": "blue",
    "icons": [
        {
            "src": "/public/img/logo.jpg",
            "sizes": "144x144",
            "type": "image/jpg"
        }
    ],
    themeConfig : {
        nav : [
            { text: '面试题整理', link: '/interview-questions01' },
            { text: '接口字段定义', link: '/api' },
            { text: '博文',
                items: [
                    { text: 'Android', link: '/2019-01-21/test03' }
                ]
            },
        ],
        sidebar: {
            '/' : [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "interview-questions01",
                "api",
                "2019-01-21/test03"
            ],


        },
        sidebarDepth : 2
    }
}

