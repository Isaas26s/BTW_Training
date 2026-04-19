import {
  Wind,
  Lock,
  Coffee,
  ShowerHead,
  Heart,
  User,
  Users,
  Wifi,
  MapPin,
  Phone,
  Instagram,
  Menu,
  X,
  ChevronRight,
  Clock,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import { clsx } from 'clsx';

export type IconName =
  | 'wind'
  | 'lock'
  | 'coffee'
  | 'shower'
  | 'heart'
  | 'user'
  | 'users'
  | 'wifi'
  | 'mapPin'
  | 'phone'
  | 'instagram'
  | 'menu'
  | 'close'
  | 'chevronRight'
  | 'clock'
  | 'messageCircle';

const iconMap: Record<IconName, LucideIcon> = {
  wind: Wind,
  lock: Lock,
  coffee: Coffee,
  shower: ShowerHead,
  heart: Heart,
  user: User,
  users: Users,
  wifi: Wifi,
  mapPin: MapPin,
  phone: Phone,
  instagram: Instagram,
  menu: Menu,
  close: X,
  chevronRight: ChevronRight,
  clock: Clock,
  messageCircle: MessageCircle,
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, size = 24, className, color, style }: IconProps) {
  const IconComponent = iconMap[name];
  return (
    <IconComponent
      size={size}
      className={clsx('inline-block', className)}
      color={color}
      style={style}
    />
  );
}