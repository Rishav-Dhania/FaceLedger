import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FacultyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Link href="/" style={styles.back}>← Back</Link>
        <Text style={styles.kicker}>FACULTY WORKSPACE</Text>
        <Text style={styles.title}>Your classes, in focus.</Text>
        <Text style={styles.subtitle}>Attendance tools and assigned classes will live here.</Text>
        <View style={styles.heroCard}>
          <Text style={styles.cardLabel}>NEXT CLASS</Text>
          <Text style={styles.className}>No classes scheduled</Text>
          <Text style={styles.cardText}>Connect your faculty account to see today's timetable.</Text>
        </View>
        <View style={styles.action}><Text style={styles.actionText}>Start attendance <Text style={styles.arrow}>↗</Text></Text></View>
        <View style={styles.actionOutline}><Text style={styles.actionOutlineText}>View reports <Text style={styles.arrow}>↗</Text></Text></View>
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
  subtitle: { marginTop: 12, color: '#68736e', fontSize: 16, lineHeight: 23 },
  heroCard: { marginTop: 38, padding: 24, backgroundColor: '#e6b875' },
  cardLabel: { color: '#6e4b26', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  className: { marginTop: 20, color: '#163b36', fontSize: 25, fontWeight: '800' },
  cardText: { marginTop: 10, color: '#58635e', fontSize: 14, lineHeight: 20 },
  action: { marginTop: 24, padding: 20, backgroundColor: '#163b36' },
  actionText: { color: '#f6f5f0', fontSize: 17, fontWeight: '800' },
  actionOutline: { marginTop: 12, padding: 19, borderWidth: 1, borderColor: '#163b36' },
  actionOutlineText: { color: '#163b36', fontSize: 17, fontWeight: '800' },
  arrow: { fontSize: 22 },
});
