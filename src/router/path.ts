import { Menu } from '@arco-design/web-react';
import { IconApps, IconBulb } from '@arco-design/web-react/icon';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

function createBlogMenuItem(compName: any, idx: string, title: string, children: any, {config={}, icoName=null}:{config?: Object, icoName?: any}={config: {}}) {
  return {
    compName,
    idx,
    icoName,
    title,
    children,
    config
  }
}

const blogPath = {
  children: [
    createBlogMenuItem(SubMenu, '0', 'dataStruct', [
      createBlogMenuItem(MenuItem, '0_0', 'base', null),
      createBlogMenuItem(MenuItem, '0_1', 'application', null)
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '1', 'translate', [
      createBlogMenuItem(SubMenu, '1_0', 'webrix', [
        createBlogMenuItem(MenuItemGroup, '1_0_0', 'comp', [
          createBlogMenuItem(Link, '/translate/1', '', [
            createBlogMenuItem(MenuItem, '1_0_0_0', 'c1', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/translate/2', '', [
            createBlogMenuItem(MenuItem, '1_0_0_1', 'c2', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '1_1', 'axios', [
        createBlogMenuItem(MenuItemGroup, '1_1_0', 'main', [
          createBlogMenuItem(Link, '/axios/1', '', [
            createBlogMenuItem(MenuItem, '1_1_0_0', 'm1', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/axios/2', '', [
            createBlogMenuItem(MenuItem, '1_1_0_1', 'm2', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '2', '读书记录', [
      createBlogMenuItem(SubMenu, '2_0', '红宝书(js高级程序设计4)', [
        createBlogMenuItem(MenuItemGroup, '2_0_0', '第一章', [
          createBlogMenuItem(Link, '/jsBook/var', '', [
            createBlogMenuItem(MenuItem, '2_0_0_0', '变量', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/jsBook/func', '', [
            createBlogMenuItem(MenuItem, '2_0_0_1', '函数', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '2_1', '易经', [
        createBlogMenuItem(MenuItemGroup, '2_1_0', '第一章', [
          createBlogMenuItem(Link, '/yi/what', '', [
            createBlogMenuItem(MenuItem, '2_1_0_0', '什么是易经', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/yi/chinese', '', [
            createBlogMenuItem(MenuItem, '2_1_0_1', '中国人的文化根源', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '3', '博客', [
      createBlogMenuItem(SubMenu, '3_0', 'js', [
        createBlogMenuItem(MenuItemGroup, '3_0_0', '基本', [
          createBlogMenuItem(Link, '/blog/base', '', [
            createBlogMenuItem(MenuItem, '3_0_0_0', '变量', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/blog/base2', '', [
            createBlogMenuItem(MenuItem, '3_0_0_1', '函数', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_1', 'css', [
        createBlogMenuItem(MenuItemGroup, '3_1_0', '选择器', [
          createBlogMenuItem(Link, '/css/normal', '', [
            createBlogMenuItem(MenuItem, '3_1_0_0', '普通', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/css/special', '', [
            createBlogMenuItem(MenuItem, '3_1_0_1', '特殊', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_2', '源码', [
        createBlogMenuItem(MenuItemGroup, '3_2_0', '框架', [
          createBlogMenuItem(Link, '/blog/1', '', [
            createBlogMenuItem(MenuItem, '3_2_0_0', 'react', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/blog/2', '', [
            createBlogMenuItem(MenuItem, '3_2_0_1', 'vue', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_3', '其他', [
        createBlogMenuItem(MenuItemGroup, '3_3_0', '其他', [
          createBlogMenuItem(Link, '/else/1', '', [
            createBlogMenuItem(MenuItem, '3_3_0_0', '其他', null)
          ], {config: { to: '2_1_0'}}),
          createBlogMenuItem(Link, '/else/2', '', [
            createBlogMenuItem(MenuItem, '3_3_0_1', '其他', null)    
          ], {config: { to: '2_1_0'}})
        ])
      ])
    ], {icoName: IconApps})
  ]
}

export default blogPath;

export const webrixPath = {
  children: [
    createBlogMenuItem(SubMenu, '0', '文档', [
      createBlogMenuItem(Link, '/webrix/cn', '', [
        createBlogMenuItem(MenuItem, '0_0', '中文文档', null)
      ]),
      createBlogMenuItem(Link, '/webrix/en', '', [
        createBlogMenuItem(MenuItem, '0_1', '英文文档', null)
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '1', '使用', [
      createBlogMenuItem(SubMenu, '1_0', 'Movable', [
        createBlogMenuItem(MenuItemGroup, '1_0_0', '例子', [
          createBlogMenuItem(Link, '/webrix/movable/base', '', [
            createBlogMenuItem(MenuItem, '1_0_0_0', '基本使用', null)
          ]),
          createBlogMenuItem(Link, '/webrix/movable/base2', '', [
            createBlogMenuItem(MenuItem, '1_0_0_1', '基本使用2', null)    
          ])
        ])
      ])
    ], {icoName: IconApps})
  ]
}

export const mediaPath = {
  children: [
    createBlogMenuItem(SubMenu, '0', '图片', [
      createBlogMenuItem(Link, '/pics/all', '', [
        createBlogMenuItem(MenuItem, '0_0', '全部', null)
      ]),
      createBlogMenuItem(Link, '/pics/recommand', '', [
        createBlogMenuItem(MenuItem, '0_1', '推荐', null)
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '1', '音乐', [
      createBlogMenuItem(Link, '/music/all', '', [
        createBlogMenuItem(MenuItem, '1_0', '全部', null)
      ]),
      createBlogMenuItem(Link, '/music/favo', '', [
        createBlogMenuItem(MenuItem, '1_1', '喜欢', null)
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '2', '视频', [
      createBlogMenuItem(Link, '/video/all', '', [
        createBlogMenuItem(MenuItem, '2_0', '全部', null)
      ]),
      createBlogMenuItem(Link, '/video/favo', '', [
        createBlogMenuItem(MenuItem, '2_1', '喜欢', null)
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '3', '视频', [
      createBlogMenuItem(Link, '/game/all', '', [
        createBlogMenuItem(MenuItem, '3_0', '全部', null)
      ]),
      createBlogMenuItem(Link, '/game/favo', '', [
        createBlogMenuItem(MenuItem, '3_1', '喜欢', null)
      ])
    ], {icoName: IconApps}),
  ]
}