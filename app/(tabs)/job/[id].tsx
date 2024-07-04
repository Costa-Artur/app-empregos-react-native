import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Job } from '@/interfaces/job.interface';
import Header from '@/components/Header';

const jobs: Job[] = [
  {
    id: '1',
    title: 'Desenvolvedor Front-end',
    image: 'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
    description: 'Trabalhe com React e React Native.',
    fullDescription: 'Desenvolvimento de interfaces usando React e React Native...',
    requirements: ['Experiência com React', 'Experiência com React Native', 'Conhecimento em TypeScript', 'Conhecimento em CSS'],
  },
  {
    id: '2',
    title: 'Desenvolvedor Back-end',
    image: 'https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg',
    description: 'Experiência com Node.js e MongoDB.',
    fullDescription: 'Desenvolvimento de APIs com Node.js e MongoDB...',
    requirements: ['Experiência com Node.js', 'Experiência com MongoDB', 'Experiência com Express', 'Conhecimento em TypeScript'],
  },
  {
    id: '3',
    title: 'Designer de UX/UI',
    image: 'https://t4.ftcdn.net/jpg/05/18/27/99/360_F_518279931_JniVxt8nGHrHso29Bgivm60JrRBdA2dd.jpg',
    description: 'Criação de interfaces de usuário.',
    fullDescription: 'Responsável por criar interfaces intuitivas e atraentes para usuários finais...',
    requirements: ['Experiência com ferramentas de design', 'Conhecimento em prototipagem', 'Habilidades em pesquisa de usuários'],
  },
  {
    id: '4',
    title: 'Gerente de Projetos',
    image: 'https://t4.ftcdn.net/jpg/05/19/61/27/360_F_519612785_pZUYbBhHRd5NpMPvG2vN0MG9rnnzNa1g.jpg',
    description: 'Gerenciamento de projetos de TI.',
    fullDescription: 'Liderar e coordenar equipes de desenvolvimento para garantir a entrega de projetos dentro do prazo e orçamento...',
    requirements: ['Experiência em gestão de projetos', 'Certificação PMP', 'Conhecimento em metodologias ágeis'],
  },
  {
    id: '5',
    title: 'Analista de Dados',
    image: 'https://t4.ftcdn.net/jpg/05/19/71/35/360_F_519713508_TIpGv0c8r7ZVRNPibYZ1z52S1bmACbmH.jpg',
    description: 'Análise e interpretação de dados.',
    fullDescription: 'Coletar, analisar e interpretar grandes volumes de dados para ajudar a empresa a tomar decisões informadas...',
    requirements: ['Experiência com ferramentas de análise de dados', 'Conhecimento em SQL', 'Habilidades em visualização de dados'],
  },
  {
    id: '6',
    title: 'Engenheiro DevOps',
    image: 'https://t4.ftcdn.net/jpg/05/17/73/89/360_F_517738935_TY1X3ODZMzlhPQ3cWroVMR5K3YOpdYTh.jpg',
    description: 'Implementação e manutenção de pipelines CI/CD.',
    fullDescription: 'Responsável pela automação de processos de desenvolvimento e operações para melhorar a eficiência do ciclo de vida do software...',
    requirements: ['Experiência com ferramentas CI/CD', 'Conhecimento em Docker e Kubernetes', 'Habilidades em scripting'],
  },
  {
    id: '7',
    title: 'Especialista em Segurança da Informação',
    image: 'https://t4.ftcdn.net/jpg/05/18/29/07/360_F_518290773_lRDYPX0AfIrYgGqPoEJZ45iI6K84zcsG.jpg',
    description: 'Proteção de dados e sistemas.',
    fullDescription: 'Garantir a segurança dos dados e sistemas da empresa, implementando e gerenciando políticas de segurança...',
    requirements: ['Conhecimento em segurança de rede', 'Experiência com criptografia', 'Certificações CISSP ou similares'],
  },
  {
    id: '8',
    title: 'Analista de Suporte Técnico',
    image: 'https://t4.ftcdn.net/jpg/05/18/31/15/360_F_518311592_xxqZ7cChMDNDRTFWEZRlBrbT8D8XEEVF.jpg',
    description: 'Suporte a usuários e resolução de problemas técnicos.',
    fullDescription: 'Fornecer suporte técnico aos usuários, resolvendo problemas relacionados a hardware e software...',
    requirements: ['Experiência com suporte técnico', 'Conhecimento em sistemas operacionais', 'Habilidades em atendimento ao cliente'],
  },
  {
    id: '9',
    title: 'Administrador de Sistemas',
    image: 'https://t4.ftcdn.net/jpg/05/18/33/23/360_F_518332309_Op5zq8jH1xZVWu8CDOQzqTeXT4TYB8Su.jpg',
    description: 'Manutenção e administração de sistemas de TI.',
    fullDescription: 'Gerenciar e manter os sistemas de TI da empresa, garantindo sua disponibilidade e desempenho...',
    requirements: ['Experiência com administração de sistemas', 'Conhecimento em Windows e Linux', 'Habilidades em scripting e automação'],
  },
  {
    id: '10',
    title: 'Consultor de TI',
    image: 'https://t4.ftcdn.net/jpg/05/19/73/87/360_F_519738799_3XVqkdo6zXLDt3Jm9iTgGd0vWJsfmOD2.jpg',
    description: 'Consultoria em soluções de TI para empresas.',
    fullDescription: 'Fornecer consultoria especializada em soluções de TI para ajudar as empresas a otimizar seus processos e sistemas...',
    requirements: ['Experiência em consultoria de TI', 'Conhecimento em análise de negócios', 'Habilidades em comunicação e apresentação'],
  }
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
    <View style={styles.section}>
      <Header/>
       <View style={styles.container}>
          <Image source={{ uri: job.image }} style={styles.image} />
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.fullDescription}>{job.fullDescription}</Text>
          <Text style={styles.requirementsTitle}>Requisitos:</Text>
          <FlatList
            data={job.requirements}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Text>- {item}</Text>
            )}
          />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
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
