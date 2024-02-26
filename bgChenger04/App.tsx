import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBg, setRandomBg] = useState('#DAE0E2');

  const generateCoor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBg(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <TouchableOpacity onPress={generateCoor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Click me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#2F363F',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 24,
    color: '#FFF',
    textTransform: 'uppercase',
  },
});
