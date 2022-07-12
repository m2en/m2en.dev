import { ThemeButton } from '../components/theme-button';
import React from 'react';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';

function main() {
  return (
    <Container>
      <Head>
        <title>m2en</title>
        <meta name={'description'} content={"m2en's portfolio"} />
        <meta name={'og:title'} content={"m2en's portfolio"} />
        <meta name={'og:description'} content={"m2en's portfolio"} />
        <meta name={'og:url'} content={'https://m2en.dev'} />
        <meta name={'og:site_name'} content={'m2en'} />
        <meta name={'og:type'} content={'website'} />
        <meta name={'twitter:card'} content={'summary'} />
        <meta name={'twitter:site'} content={'@m2en'} />
      </Head>
      <ThemeButton />
    </Container>
  );
}

export default main;
