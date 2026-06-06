import {DrinkCard} from "@/components/cards/DrinkCard";
import {StatusBar} from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const featuredDrink = {
  name: "Vanilla Cold Brew",
  category: "Signature",
  price: 89,
  badge: "Nuevo",
  imageUrl:
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop",
};

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.brandEyebrow}>PREMIUM COFFEE EXPERIENCE</Text>
          <Text style={styles.title}>Regal Café</Text>
          <Text style={styles.subtitle}>
            Descubre bebidas de especialidad, reserva tu espacio y vive el café
            con una experiencia mobile elegante.
          </Text>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.imageGlow} />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop",
            }}
            style={styles.heroImage}
          />

          <View style={styles.heroTextBox}>
            <Text style={styles.heroLabel}>El favorito de la casa</Text>
            <Text style={styles.heroTitle}>Vanilla Cold Brew</Text>
            <Text style={styles.heroDescription}>
              Café frío, notas suaves de vainilla y acabado cremoso.
            </Text>
          </View>
        </View>

        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Bebida destacada</Text>
            <Text style={styles.sectionLink}>Ver menú</Text>
          </View>

          <DrinkCard
            name={featuredDrink.name}
            category={featuredDrink.category}
            price={featuredDrink.price}
            badge={featuredDrink.badge}
            imageUrl={featuredDrink.imageUrl}
            onPress={() => {
              console.log("Open drink detail");
            }}
            onToggleFavorite={() => {
              console.log("Toggle favorite");
            }}
          />
        </View>

        <View style={styles.footer}>
          <Pressable
            style={({pressed}) => [
              styles.primaryButton,
              pressed && styles.primaryButtonPressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>Comenzar</Text>
          </Pressable>

          <Text style={styles.footerText}>
            Diseñada para explorar café, reservas y experiencias premium.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2A1810",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 28,
  },
  header: {
    gap: 12,
  },
  brandEyebrow: {
    color: "#D6A85C",
    fontSize: 12,
    letterSpacing: 1.8,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  title: {
    color: "#F5EBDD",
    fontSize: 48,
    lineHeight: 54,
    fontWeight: "800",
  },
  subtitle: {
    color: "#D9C7B4",
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 330,
  },
  heroCard: {
    backgroundColor: "#3A2418",
    borderRadius: 32,
    padding: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(214, 168, 92, 0.24)",
  },
  imageGlow: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(214, 168, 92, 0.22)",
    top: 40,
    alignSelf: "center",
  },
  heroImage: {
    width: "100%",
    height: 280,
    borderRadius: 24,
    backgroundColor: "#5A3825",
  },
  heroTextBox: {
    paddingTop: 18,
    paddingHorizontal: 4,
    paddingBottom: 4,
  },
  heroLabel: {
    color: "#C98A4A",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
  },
  heroDescription: {
    color: "#D9C7B4",
    fontSize: 15,
    lineHeight: 22,
  },
  featuredSection: {
    gap: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "#F5EBDD",
    fontSize: 20,
    fontWeight: "800",
  },
  sectionLink: {
    color: "#D6A85C",
    fontSize: 14,
    fontWeight: "700",
  },
  footer: {
    gap: 16,
  },
  primaryButton: {
    height: 58,
    borderRadius: 999,
    backgroundColor: "#D6A85C",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonPressed: {
    opacity: 0.82,
    transform: [{scale: 0.98}],
  },
  primaryButtonText: {
    color: "#2A1810",
    fontSize: 16,
    fontWeight: "800",
  },
  footerText: {
    color: "#A99682",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
});
