import { SvgIconComponent } from "@mui/icons-material";
import GroupIcon from '@mui/icons-material/Group';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

type Link = {
  id: number;
  to: string;
  title: string;
  icon: SvgIconComponent;
};

export const links: Link[] = [
  {
    id: 0,
    to: '/visitor',
    title: 'Посетители',
    icon: GroupIcon,
  },
  {
    id: 1,
    to: '/coach',
    title: 'Инструкторы',
    icon: RecordVoiceOverIcon,
  },
  {
    id: 2,
    to: '/skipass',
    title: 'Ски-пассы',
    icon: ChromeReaderModeIcon,
  },
];