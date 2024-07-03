// app/index.tsx
import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import JobCard from '@/components/JobCard';
import Header from '@/components/Header';

interface Job {
  id: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  requirements: string;
}

const jobs: Job[] = [
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
  // Adicione mais vagas conforme necessário
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/job/${item.id}`)}>
            <JobCard 
              title={item.title} 
              image={item.image} 
              description={item.description} 
            />
          </Pressable>
        )}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});
