import {DrinkCardProps} from "@/types/cards";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export function DrinkCard({
  name,
  category,
  price,
  imageUrl,
  badge = "Nuevo",
  isFavorite = false,
  onPress,
  onToggleFavorite,
}: DrinkCardProps) {
  return (
    <Pressable
      style={({pressed}) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image source={{uri: imageUrl}} style={styles.image} />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>

        <Pressable
          style={styles.favoriteButton}
          onPress={onToggleFavorite}
          hitSlop={10}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? "♥" : "♡"}</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.textGroup}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.actionText}>Ver detalle</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: "#3A2418",
    borderRadius: 28,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(214, 168, 92, 0.22)",
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{scale: 0.98}],
  },
  imageWrapper: {
    height: 150,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#5A3825",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(245, 235, 221, 0.92)",
  },
  badgeText: {
    color: "#2A1810",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(42, 24, 16, 0.72)",
  },
  favoriteIcon: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 22,
  },
  content: {
    paddingTop: 14,
    gap: 14,
  },
  textGroup: {
    gap: 4,
  },
  category: {
    color: "#C98A4A",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    color: "#F5EBDD",
    fontSize: 18,
    fontWeight: "800",
  },
  actionText: {
    color: "#D6A85C",
    fontSize: 13,
    fontWeight: "700",
  },
});
