import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface JobCardProps {
  title: string;
  image: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, image, description }) => {
  return (
    <View style={[styles.card]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
  }
});

export default JobCard;
