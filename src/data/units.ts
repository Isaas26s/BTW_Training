export interface Unit {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
}

export const units: Unit[] = [
  {
    id: 'sulacap',
    name: 'Unidade Sulacap',
    address: 'Edifício Sulacap - R. da Conceição, 13 - Sobreloja - Centro, Niterói - RJ, 24020-080',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+da+Conceicao+13+Niteroi',
  },
  {
    id: 'sao-joao',
    name: 'Unidade São João',
    address: 'Rua São João, 170 - Centro de Niterói - RJ',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Sao+Joao+170+Niteroi',
  },
];

export const operatingHours = {
  weekdays: 'Segunda a Sexta: 07:00 - 21:00',
  saturday: 'Sábado: 08:00 - 12:30',
  sunday: 'Domingo: Fechado',
  note: 'Horário de funcionamento a partir do plano Basic+',
};