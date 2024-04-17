import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import QuanLi from './quanli';

export default function App() {
  const [maNv, setMaNv] = useState('');
  const [pass, setPass] = useState('');
  const [tenNv, setTenNv] = useState('');
  const [soDT, setSoDT] = useState('');
  const [nhanViens, setNhanViens] = useState([]);
  const [message, setMessage] = useState('');
  const [quanLi, setQuanLi] = useState(new QuanLi());
  let add = quanLi.addNhanVien('111','111','huy','2354655564')
  quanLi.displayEmployees(add)

  
  const handleAddNhanVien = () => {
    quanLi.addNhanVien(maNv, pass, tenNv, soDT);
    setNhanViens([...quanLi.nhanViens]);
    setMessage('Nhân viên đã được thêm!');
    // Reset form fields
    setMaNv('');
    setPass('');
    setTenNv('');
    setSoDT('');
  };

  const handleDeleteNhanVien = (maNv) => {
    quanLi.deleteNhanVien(maNv);
    setNhanViens([...quanLi.nhanViens]);
    setMessage('Nhân viên đã được xóa!');
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mã nhân viên"
        value={maNv}
        onChangeText={text => setMaNv(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tên nhân viên"
        value={tenNv}
        onChangeText={text => setTenNv(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={soDT}
        onChangeText={text => setSoDT(text)}
      />
      <Button title="Thêm nhân viên" onPress={handleAddNhanVien} />
      <Button title="Xóa" onPress={() => handleDeleteNhanVien(maNv)} />
      <Text>{message}</Text>
      <FlatList
        style={styles.flatlist}
        data={nhanViens}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.getMaNv()} - {item.getTenNv()} - {item.getSoDT()}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20, // Đặt giá trị marginTop tại đây
  },
  flatlist: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 10,
    borderRadius: 10,
  },
  item: {
    color: 'white',
    marginBottom: 5,
  },
});
