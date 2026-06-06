export type DrinkCardProps = {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  badge?: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onToggleFavorite?: () => void;
};
