import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản lí doanh thu',
    icon: 'home-outline',
    link: '/pages/revenue',
  },
  {
    title: 'Quản lí quà tặng',
    icon: 'home-outline',
    link: '/pages/gift',
  },
  {
    title: 'Danh Mục',
    icon: 'book',
    link: '/pages/cate',
  },
  {
    title: 'Phim',
    icon: 'film',
    link: '/pages/film',
  },
];
