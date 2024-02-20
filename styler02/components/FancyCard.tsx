import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Hawa-Mahal-Rajasthan-Feature.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
          <Text style={styles.cardDescription}>
            It is a Description. It is a Description. It is a Description. It is
            a Description
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    height: 350,
    width: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fafafa',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#755d9c',
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 14,
  },
});
