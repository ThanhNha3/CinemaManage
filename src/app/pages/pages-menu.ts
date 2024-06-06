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
    title: 'Thể loại',
    icon: 'book-outline',
    link: '/pages/genre',
  },
  {
    title: 'Phim',
    icon: 'film-outline',
    link: '/pages/movie',
  },
  { title: 'Phòng chiếu', icon: 'video-outline', link: '/pages/room' },
  {
    title: 'Vé phim',
    icon: 'calendar-outline',
    link: '/pages/ticket',
  },
  {
    title: 'Suất Chiếu Phim',
    icon: 'tv-outline',
    link: '/pages/screening',
  },
  {
    title: 'Nhân viên',
    icon: 'people-outline',
    link: '/pages/employee',
  },
  {
    title: 'Doanh thu',
    icon: 'pie-chart-outline',
    link: '/pages/revenue',
  },
];
