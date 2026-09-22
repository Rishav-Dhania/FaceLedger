import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const features = [
  ['01', 'Attendance clarity', 'Track every subject from one focused dashboard.'],
  ['02', 'Digital timetable', 'Know what is next, where it is, and who teaches it.'],
  ['03', 'Smarter classrooms', 'Faculty can record attendance and keep students informed.'],
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.logoMark}><Text style={styles.logoText}>F</Text></View>
          <Text style={styles.wordmark}>FACELEDGER</Text>
          <Text style={styles.version}>MVP 01</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>ATTENDANCE, REIMAGINED</Text>
          <Text style={styles.title}>Every class.{'\n'}Clearly counted.</Text>
          <Text style={styles.subtitle}>
            A calmer way for colleges to connect attendance, timetables, and classroom updates.
          </Text>
        </View>

        <View style={styles.rule} />
        <Text style={styles.sectionLabel}>CHOOSE YOUR WORKSPACE</Text>

        <View style={styles.actions}>
          <Link href="/student" asChild>
            <Text style={[styles.action, styles.studentAction]}>I am a student <Text style={styles.arrow}>↗</Text></Text>
          </Link>
          <Link href="/faculty" asChild>
            <Text style={[styles.action, styles.facultyAction]}>I am faculty <Text style={styles.arrow}>↗</Text></Text>
          </Link>
        </View>

        <View style={styles.featureList}>
          {features.map(([number, heading, copy]) => (
            <View key={number} style={styles.feature}>
              <Text style={styles.number}>{number}</Text>
              <View style={styles.featureCopy}>
                <Text style={styles.featureHeading}>{heading}</Text>
                <Text style={styles.featureText}>{copy}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f6f5f0' },
  container: { padding: 24, paddingBottom: 40 },
  topRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  logoMark: { width: 34, height: 34, backgroundColor: '#163b36', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#f6f5f0', fontSize: 21, fontWeight: '800' },
  wordmark: { color: '#163b36', fontSize: 14, fontWeight: '800', letterSpacing: 2 },
  version: { marginLeft: 'auto', color: '#8b938c', fontSize: 11, letterSpacing: 1 },
  hero: { paddingTop: 82, paddingBottom: 44 },
  eyebrow: { color: '#c2693d', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 16, color: '#163b36', fontSize: 48, lineHeight: 51, fontWeight: '800', letterSpacing: -1 },
  subtitle: { marginTop: 22, maxWidth: 340, color: '#58635e', fontSize: 17, lineHeight: 25 },
  rule: { height: 1, backgroundColor: '#d8d8cf' },
  sectionLabel: { marginTop: 25, color: '#8b938c', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  actions: { gap: 12, marginTop: 14 },
  action: { padding: 20, fontSize: 17, fontWeight: '800', overflow: 'hidden' },
  studentAction: { color: '#f6f5f0', backgroundColor: '#163b36' },
  facultyAction: { color: '#163b36', backgroundColor: '#e6b875' },
  arrow: { fontSize: 22 },
  featureList: { marginTop: 55, gap: 25 },
  feature: { flexDirection: 'row', gap: 18 },
  number: { color: '#c2693d', fontSize: 12, fontWeight: '800', paddingTop: 2 },
  featureCopy: { flex: 1 },
  featureHeading: { color: '#163b36', fontSize: 16, fontWeight: '800' },
  featureText: { marginTop: 5, color: '#68736e', fontSize: 14, lineHeight: 20 },
});
