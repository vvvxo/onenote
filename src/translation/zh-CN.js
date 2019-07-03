const translation = {
    title: 'P3X OneNote',
    label: {
        donate: 'Donate',
        allowMultiple: {
            checkbox: 'Allow multiple instances (with some quirks)',
            message: {
                yes: 'Now you can use multiple instance with some quirks.',
                no: 'Now, it allows only one instance, no quirks'
            }
        },
        disableHide: {
            //yes: 'Set the close button behaviour that will minimize to the tray instead of quitting',
            //no: 'Set the close button behaviour as to really quit the app',
            checkbox: '隐藏到托盘',
            message: {
                yes: '关闭应用',
                no: '软件将不会关闭，而是隐藏到托盘',

            }
        },
        settings: '设置',
        setProxy: '设置代理',
        openUrl: '打开链接',
        promptRedirectUrlTitle: '重新连接',
        edit: '编辑',
        view: '页面',
        download: '下载',
        developer: 'Patrik Laszlo',
        personalHome: '个人主页',
        corporateHome: '团队主页',
        clearCache: '注销并清除缓存',
        quit: '退出',
        show: '显示',
        hide: '隐藏',
        copyLocation: '复制链接到剪贴板',
        copyLocationCopied: '复制到剪贴板成功',
        //disallowedContent: 'Disallowed content! If not working, hang on, it will reset to the default home. (Max 5 seconds).',
        //unknownLink: 'Hang on, it might change while loading to the destination. If this is not a OneNote page, free to click on the P3X OneNote menu home'
    },
    dialog: {
        info: '信息',
        openUrl: {
            info: 'You can go to any URL you wish',
            placeholder: 'a valid URL',

        },
        minimizationBehavior: {
            title: 'Minimization behavior',
        },
        setProxy: {
            placeholder: '设置代理',
            info: '为空取消代理',
            clear: '代理已关闭',
            set: (value) => {
                return `代理已设置为 ${value}`
            }
        },
        redirect: {
            url: (opts) => {
                return `${opts.url}`
            },
            urlExternal: 'External',
            urlInternal: 'Internal',
        }
    },
    button: {
        yes: '是',
        no: '否',
        ok: '完成',
        cancel: '取消',
        save: '保存',
        clear: '清除',
        go: '转到',

    },
    menu: {
        action: '动作',
        role: {
            edit: {
                undo: '上一步',
                redo: '下一步',
                cut: '剪切',
                copy: '复制',
                paste: '粘贴',
                pasteandmatchstyle: '匹配当前格式',
                delete: '删除',
                selectall: '全选',
            },
            view: {
                reload: '刷新',
                forcereload: '强制刷新',
                toggledevtools: '打开开发者工具',
                resetzoom: 'Reset Zoom',
                zoomin: '放大',
                zoomout: '缩小',
                togglefullscreen: '全屏',
            }
        },
        help: {
            title: '帮助',
            checkUpdates: '检查更新'
        },
        language: {
            label: '语言',
            alert: '语言已设置为英语',
            dialog: {
              label: '设置为网页Onenote语言?',
              coperate: '组织',
              personal: '个人',
            },
            translations: {
                'en-US': 'English',
                'de-DE': 'Deutsch / German',
                'zh-CN': '简体中文',
            }
        },
    },
    redirecting: '重新加载OneNote中，请等待',
    slow: '重新加载中，请等待',
    updater: {
        '检查更新': '检查中 ...',
        '有新版本': '下载中 ...',
        '已是最新版': '没有升级',
        error: (opts) => {
            return `自动升级出错: ${opts.errorMessage}`
        },
        '下载中': (opts) => {
            return '下载 ' + opts.progressObj.percent + '%'
        },
        '下载完成': '下载完成，请重启完成升级'
    }
};

module.exports = translation;
