import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import Image from '../components/Image'
import styles from '../styles/Home.module.scss'
import logo from '../public/logo@2x.png'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="NEXTJS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center',
          styles.hero
        )}
      >
        <figure className="max-w-3xl">
          <Image src={logo} alt="NextSSS Logo" />
        </figure>
        <h1 className="mt-5 font-extrabold text-center"> Este projeto foi criado em NextJS contendo recursos de SEO, caso queira saber mais sobre o NEXTJS clique em Saiba mais!</h1>
      </div>
    </Layout>
  )
}

export default Home
