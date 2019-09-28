export interface CardModel {
  id: number;
  value: string;
  isOpen: boolean;
  isHit: boolean;
}

export function mapCardValueToCardModel(value: string, id: number): CardModel {
  return {
    value,
    id,
    isOpen: false,
    isHit: false,
  };
}
