import type { IconName } from '../components/Icon';

export interface Activity {
  icon: IconName;
  name: string;
}

export const activities: Activity[] = [
  { icon: 'user', name: 'Funcional' },
  { icon: 'users', name: 'Circuitos Funcionais' },
  { icon: 'clock', name: 'Tabata' },
  { icon: 'heart', name: 'Alongamento' },
  { icon: 'user', name: 'Personal Trainer' },
];