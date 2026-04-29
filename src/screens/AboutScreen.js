import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/profile.png')} 
        style={styles.avatar} 
      />

      
      <Text style={styles.name}>Faraz Thifal</Text>
      <Text style={styles.subText}>NIM: 2410501022</Text>
      <Text style={styles.subText}>Kelas: B</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>UTS Pemrograman Mobile Lanjut</Text>
        <Text style={styles.cardBody}>Tema: BookShelf (C)</Text>
        <Text style={styles.cardBody}>API: Open Library</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  avatar: { width: 150, height: 200, borderRadius: 10, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subText: { fontSize: 16, color: '#666', marginBottom: 5 },
  card: { marginTop: 30, padding: 20, backgroundColor: '#fff', borderRadius: 15, elevation: 3, width: '80%' },
  cardTitle: { fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  cardBody: { fontSize: 14, color: '#444', textAlign: 'center' },
  footer: { position: 'absolute', bottom: 20, color: '#aaa', fontSize: 12 }
});

export default AboutScreen;