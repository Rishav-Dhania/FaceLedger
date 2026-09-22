import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function StudentScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Link href="/" style={styles.back}>← Back</Link>
        <Text style={styles.kicker}>STUDENT WORKSPACE</Text>
        <Text style={styles.title}>Good morning, student.</Text>
        <Text style={styles.subtitle}>Your attendance overview will live here.</Text>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>OVERALL ATTENDANCE</Text>
          <Text style={styles.percent}>--%</Text>
          <Text style={styles.cardText}>Connect your college account to load your records.</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.smallCard}><Text style={styles.icon}>▦</Text><Text style={styles.smallTitle}>Attendance</Text></View>
          <View style={styles.smallCard}><Text style={styles.icon}>◷</Text><Text style={styles.smallTitle}>Timetable</Text></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f6f5f0' },
  container: { flex: 1, padding: 24 },
  back: { color: '#c2693d', fontSize: 15, fontWeight: '700' },
  kicker: { marginTop: 70, color: '#c2693d', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 14, color: '#163b36', fontSize: 34, fontWeight: '800' },
  subtitle: { marginTop: 12, color: '#68736e', fontSize: 16 },
  card: { marginTop: 38, padding: 24, backgroundColor: '#163b36' },
  cardLabel: { color: '#a9c6b9', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  percent: { marginTop: 18, color: '#f6f5f0', fontSize: 54, fontWeight: '800' },
  cardText: { marginTop: 8, color: '#cbd9d1', fontSize: 14, lineHeight: 20 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  smallCard: { flex: 1, padding: 18, backgroundColor: '#e6b875' },
  icon: { color: '#163b36', fontSize: 25 },
  smallTitle: { marginTop: 20, color: '#163b36', fontSize: 15, fontWeight: '800' },
});
