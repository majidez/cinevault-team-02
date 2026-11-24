import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../theme';

/** Student B replaces this placeholder with the movie discovery feature. */
export default function MovieDiscovery() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Movie discovery</Text>
      <Text style={styles.body}>Student B: add movie cards, genre filters, and watchlist here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 18, borderRadius: 18, backgroundColor: colors.surface },
  title: { color: colors.text, fontWeight: '700', fontSize: 18 },
  body: { color: colors.muted, marginTop: 8 },
});
