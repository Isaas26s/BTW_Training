import type { IconName } from '../components/Icon';

export interface Amenity {
  icon: IconName;
  label: string;
}

export const amenities: Amenity[] = [
  { icon: 'wind', label: 'Ar Condicionado' },
  { icon: 'lock', label: 'Armários' },
  { icon: 'coffee', label: 'Cafeteria' },
  { icon: 'shower', label: 'Chuveiro' },
  { icon: 'heart', label: 'Nutricionista' },
  { icon: 'user', label: 'Personal Trainer' },
  { icon: 'users', label: 'Vestiário' },
  { icon: 'wifi', label: 'Wi-Fi' },
];