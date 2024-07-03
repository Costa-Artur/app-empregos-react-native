// app/job/[id].tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const jobs = [
  {
    id: '1',
    title: 'Desenvolvedor Front-end',
    image: 'https://example.com/image1.jpg',
    description: 'Trabalhe com React e React Native.',
    fullDescription: 'Desenvolvimento de interfaces usando React e React Native...',
    requirements: 'Experiência com React, React Native, JavaScript...',
  },
  {
    id: '2',
    title: 'Desenvolvedor Back-end',
    image: 'https://example.com/image2.jpg',
    description: 'Experiência com Node.js e MongoDB.',
    fullDescription: 'Desenvolvimento de APIs com Node.js e MongoDB...',
    requirements: 'Experiência com Node.js, MongoDB, Express...',
  },
];

export default function JobDetail() {
  const { id } = useLocalSearchParams();
  const job = jobs.find(job => job.id === id);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text>Job not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: job.image }} style={styles.image} />
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.fullDescription}>{job.fullDescription}</Text>
      <Text style={styles.requirementsTitle}>Requisitos:</Text>
      <Text style={styles.requirements}>{job.requirements}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  fullDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  requirementsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  requirements: {
    fontSize: 16,
    color: '#666',
  },
});
