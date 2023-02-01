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
    createBlogMenuItem(SubMenu, '0', '数据结构', [
      createBlogMenuItem(Link, '0_0', '', [
        createBlogMenuItem(MenuItem, '0_0', '基础', null)
      ], {config: { to: '0_0/1'}}),
      createBlogMenuItem(Link, '0_1', '', [
        createBlogMenuItem(MenuItem, '0_1', '应用', null)
      ], {config: { to: '0_1/1'}})
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '1', '翻译', [
      createBlogMenuItem(SubMenu, '1_0', 'webrix', [
        createBlogMenuItem(MenuItemGroup, '1_0_0', '组件', 
        // null,
        [
          createBlogMenuItem(Link, '1_0_0_0', '', [
            createBlogMenuItem(MenuItem, '1_0_0_0', 'Movable', null)
          ], {config: { to: '1_0_0_0'}}),
          createBlogMenuItem(Link, '1_0_0_1', '', [
            createBlogMenuItem(MenuItem, '1_0_0_1', 'Scalable', null)    
          ], {config: { to: '1_0_0_1'}})
        ], 
        {config: {to: '0_1/1'}})
      ]),
      createBlogMenuItem(SubMenu, '1_1', 'axios', [
        createBlogMenuItem(MenuItemGroup, '1_1_0', 'main', [
          createBlogMenuItem(Link, '1_1_0_0', '', [
            createBlogMenuItem(MenuItem, '1_1_0_0', 'm1', null)
          ], {config: { to: '1_1_0_0'}}),
          createBlogMenuItem(Link, '1_1_0_1', '', [
            createBlogMenuItem(MenuItem, '1_1_0_1', 'm2', null)    
          ], {config: { to: '1_1_0_1'}})
        ])
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '2', '读书记录', [
      createBlogMenuItem(SubMenu, '2_0', '红宝书(js高级程序设计4)', [
        createBlogMenuItem(MenuItemGroup, '2_0_0', '第一章', [
          createBlogMenuItem(Link, '2_0_0_0', '', [
            createBlogMenuItem(MenuItem, '2_0_0_0', '变量', null)
          ], {config: { to: '2_0_0_0'}}),
          createBlogMenuItem(Link, '2_0_0_1', '', [
            createBlogMenuItem(MenuItem, '2_0_0_1', '函数', null)    
          ], {config: { to: '2_0_0_1'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '2_1', '易经', [
        createBlogMenuItem(MenuItemGroup, '2_1_0', '第一章', [
          createBlogMenuItem(Link, '2_1_0_0', '', [
            createBlogMenuItem(MenuItem, '2_1_0_0', '什么是易经', null)
          ], {config: { to: '2_1_0_0'}}),
          createBlogMenuItem(Link, '2_1_0_1', '', [
            createBlogMenuItem(MenuItem, '2_1_0_1', '中国人的文化根源', null)    
          ], {config: { to: '2_1_0_1'}})
        ])
      ])
    ], {icoName: IconApps}),
    createBlogMenuItem(SubMenu, '3', '博客', [
      createBlogMenuItem(SubMenu, '3_0', 'js', [
        createBlogMenuItem(MenuItemGroup, '3_0_0', '基本', [
          createBlogMenuItem(Link, '3_0_0_0', '', [
            createBlogMenuItem(MenuItem, '3_0_0_0', '变量', null)
          ], {config: { to: '3_0_0_0'}}),
          createBlogMenuItem(Link, '3_0_0_1', '', [
            createBlogMenuItem(MenuItem, '3_0_0_1', '函数', null)    
          ], {config: { to: '3_0_0_1'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_1', 'css', [
        createBlogMenuItem(MenuItemGroup, '3_1_0', '选择器', [
          createBlogMenuItem(Link, '3_1_0_0', '', [
            createBlogMenuItem(MenuItem, '3_1_0_0', '普通', null)
          ], {config: { to: '3_1_0_0/1,1'}}),
          createBlogMenuItem(Link, '3_1_0_1', '', [
            createBlogMenuItem(MenuItem, '3_1_0_1', '特殊', null)    
          ], {config: { to: '3_1_0_1'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_2', '源码', [
        createBlogMenuItem(MenuItemGroup, '3_2_0', '框架', [
          createBlogMenuItem(Link, '3_2_0_0', '', [
            createBlogMenuItem(MenuItem, '3_2_0_0', 'react', null)
          ], {config: { to: '3_2_0_0/1,10'}}),
          createBlogMenuItem(Link, '3_2_0_1', '', [
            createBlogMenuItem(MenuItem, '3_2_0_1', 'vue', null)    
          ], {config: { to: '3_2_0_1'}})
        ])
      ]),
      createBlogMenuItem(SubMenu, '3_3', '其他', [
        createBlogMenuItem(MenuItemGroup, '3_3_0', '其他', [
          createBlogMenuItem(Link, '3_3_0_0', '', [
            createBlogMenuItem(MenuItem, '3_3_0_0', '其他', null)
          ], {config: { to: '3_3_0_0'}}),
          createBlogMenuItem(Link, '3_3_0_1', '', [
            createBlogMenuItem(MenuItem, '3_3_0_1', '其他', null)    
          ], {config: { to: '3_3_0_1'}})
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