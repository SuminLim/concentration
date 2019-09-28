export interface CardModel {
  value: string;
  isOpen: boolean;
  isHit: boolean;
}

export function mapCardValueToCardModel(value: string): CardModel {
  return {
    value,
    isOpen: false,
    isHit: false,
  };
}
