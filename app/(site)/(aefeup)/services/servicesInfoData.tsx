import { InfoSection } from "@/types/infoSection";
import { Utensils } from "lucide-react";

export const infoData : InfoSection[] = [
  {
    id: 1,
    title: "Secretaria",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    phone: "22 508 1556",
    email: "aefeup@aefeup.pt",
    schedule: [
      { label: 'segunda-feira', value: '10:00–12:30, 14:00–17:30' },
      { label: 'terça-feira', value: '10:00–12:30, 14:00–17:30' },
      { label: 'quarta-feira', value: '10:00–12:30, 14:00–17:30' },
      { label: 'quinta-feira', value: '10:00–12:30, 14:00–17:30' },
      { label: 'sexta-feira', value: '10:00–12:30, 14:00–17:30' },
      { label: 'sábado', value: 'Encerrado' },
      { label: 'domingo', value: 'Encerrado' },
    ],
    imageSrc: "/images/services/image.png",
  },
  {
    id: 2,
    title: "Reprografia Efeitos Gráficos",
    subtitle: "Serviços de impressão e design gráfico para atender suas necessidades.",
    phone: "22 508 1556",
    email: "editorial@aefeup.pt",
    schedule: [
      { label: 'segunda-feira', value: '09:00–19:00' },
      { label: 'terça-feira', value: '09:00–19:00' },
      { label: 'quarta-feira', value: '09:00–19:00' },
      { label: 'quinta-feira', value: '09:00–19:00' },
      { label: 'sexta-feira', value: '09:00–19:00' },
      { label: 'sábado', value: 'Encerrado' },
      { label: 'domingo', value: 'Encerrado' },
    ],
    imageSrc: "/images/services/image.png",
  },
  {
    id: 3,
    title: "Cafetaria",
    subtitle: "Desfrute de um ambiente acolhedor com diversas opções de bebidas e snacks.",
    phone: "22 508 1556",
    email: "cafetaria@aefeup.pt",
    schedule: [
      { label: 'segunda-feira', value: '10:00–19:00' },
      { label: 'terça-feira', value: '10:00–19:00' },
      { label: 'quarta-feira', value: '10:00–19:00' },
      { label: 'quinta-feira', value: '10:00–19:00' },
      { label: 'sexta-feira', value: '10:00–19:00' },
      { label: 'sábado', value: 'Encerrado' },
      { label: 'domingo', value: 'Encerrado' },
    ],
    imageSrc: "/images/services/image.png",
    link: {
      path: "menu",
      text: "Ver menu",
      showIcon: true,
      icon: <Utensils size={16} className="text-current" />,
    },
  },
];
