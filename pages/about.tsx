// Importe as dependências necessárias no início do seu arquivo

import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Image from '../components/Image'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <Layout>
      <NextSeo title="About" />
      <div className="mx-auto max-w-xl">
        <h1 className={styles.title}>Mais sobre NEXTJS</h1>
        <br/>
        <figure>
          <Image src="/logo@2x.png" width={1472} height={642} alt="NextSSS" />
        </figure>
        <p className="mt-4">
          <br/>
          Next.js é um framework JavaScript de código aberto utilizado para construir aplicações web modernas. Ele é construído sobre o React, outro framework JavaScript popular, e oferece uma variedade de recursos poderosos e vantagens para desenvolvedores web.
          <br/>
          <br/>
          <strong>O que é Next.js?</strong>
          <br/>
          Next.js é uma estrutura de desenvolvimento web que simplifica a criação de aplicativos React. Ela adiciona funcionalidades essenciais ao React, como renderização do lado do servidor (SSR), pré-renderização estática e gerenciamento de rotas, entre outras. O Next.js é desenvolvido e mantido pela equipe da Vercel e é amplamente adotado pela comunidade de desenvolvedores.
          <br/>
          <br/>
          <strong>Características Principais do Next.js:</strong>
          <br/>
          - Renderização do Lado do Servidor (SSR): Uma das características mais marcantes do Next.js é a capacidade de realizar a renderização do lado do servidor. Isso significa que a primeira renderização de uma página é feita no servidor, o que leva a uma rápida exibição do conteúdo para o usuário e melhora a otimização para mecanismos de busca.
          <br/>
          - Pré-renderização Estática (SSG): Além do SSR, o Next.js também suporta a pré-renderização estática, onde as páginas são geradas durante a compilação e podem ser armazenadas em cache em um CDN (Content Delivery Network) para acesso rápido. Isso é útil para conteúdo que não muda frequentemente.
          <br/>
          - Roteamento Automático: O Next.js oferece um sistema de roteamento automático baseado em arquivos. Basta criar arquivos JavaScript dentro da pasta "pages" e o Next.js cuidará do roteamento.
          <br/>
          - Páginas Dinâmicas: O Next.js permite a criação de rotas dinâmicas com base em parâmetros na URL. Isso é útil para páginas de detalhes de produtos, postagens de blog, etc.
          <br/>
          - Carregamento de Componentes Sob Demanda: O Next.js suporta o carregamento de componentes de forma assíncrona, o que melhora o desempenho, pois somente os componentes necessários são carregados quando uma página é acessada.
          <br/>
          - Suporte a API Routes: Você pode criar rotas API diretamente no Next.js, tornando mais fácil construir APIs para seu aplicativo.
          <br/>
          - Integração com Estilização: O Next.js é flexível e pode ser integrado com várias bibliotecas de estilização, como CSS Modules, Styled-components, e outros.
          <br/>
          - Preparado para Produção: O Next.js oferece uma série de otimizações para produção, como minificação de código, compressão, e suporte a ambientes variáveis.
          <br/>
          <br/>
          <strong>Por que Usar o Next.js?</strong>
          <br/>
          - Desenvolvimento Eficiente: O Next.js acelera o desenvolvimento de aplicativos React, oferecendo estruturas e padrões bem definidos.

          - SEO Aprimorado: Com a renderização do lado do servidor e a pré-renderização estática, o Next.js é altamente otimizado para mecanismos de busca, o que pode melhorar a classificação do seu site nos resultados de pesquisa.

          - Experiência do Usuário Melhorada: A renderização mais rápida leva a uma experiência do usuário aprimorada, pois as páginas são exibidas mais rapidamente.

          - Facilidade de Implantação: A Vercel, a empresa por trás do Next.js, oferece hospedagem fácil e escalonável para aplicativos Next.js.

          - Flexibilidade: O Next.js é flexível o suficiente para acomodar várias necessidades de desenvolvimento, desde aplicativos simples até projetos mais complexos.
          <br/>
          <br/>
          <strong>Conclusão</strong>
          <br/>
          O Next.js é uma escolha sólida para o desenvolvimento de aplicativos web modernos. Ele oferece muitos recursos poderosos, incluindo SSR, SSG, roteamento automático e muito mais. Sua flexibilidade e otimizações para produção o tornam uma opção popular entre os desenvolvedores que buscam criar aplicativos web eficientes e bem otimizados. Se você está construindo um novo projeto React, vale a pena considerar o uso do Next.js para aproveitar essas vantagens.
        </p>
      </div>
    </Layout>
  )
}

export default About
