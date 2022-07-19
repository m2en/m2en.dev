import { ThemeButton } from '../components/theme-button';
import React from 'react';
import { Box, Container, VStack, Wrap } from '@chakra-ui/react';
import Head from 'next/head';

function main() {
  return (
    <VStack>
      <Container maxW={'md'}>
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
      </Container>

      <Wrap spacing={8} shouldWrapChildren={false}>
        <Box w={'100%'} p={4}>
          <h1>Hello world</h1>
        </Box>
      </Wrap>
    </VStack>
  );
}

export default main;
