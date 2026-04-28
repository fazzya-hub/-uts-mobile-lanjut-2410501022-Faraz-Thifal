import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Aplikasi</Text>
        <Text style={styles.desc}>Disini saya mendapatkan tema bookshelf yang didalamnya terdapat fitur searc,favortie,loading,add,remove dan disini saya juga menggunakan open library yang sudah disiapkan</Text>
        
        <View style={styles.line} />
        
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>Faraz Thifal</Text>
        
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>2410501022</Text>
        
        <Text style={styles.label}>Program Studi:</Text>
        <Text style={styles.value}>D3 Sistem Informasi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 25, borderRadius: 15, elevation: 3, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  desc: { textAlign: 'center', color: '#666', marginBottom: 20 },
  line: { width: '100%', height: 1, backgroundColor: '#eee', marginBottom: 20 },
  label: { fontSize: 14, color: '#888', marginTop: 10 },
  value: { fontSize: 18, fontWeight: 'bold', color: '#333' }
});

export default AboutScreen;