import type { AppProps } from 'next/app'
import {
  Button,
  ChakraProvider,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import theme from '../theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Stack
        paddingY={2}
        borderBottomWidth={1}
        borderBottomColor='gray.300'
      >
        <Container maxWidth={'container.xl'}>
          <Stack
            alignItems={'center'}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} spacing={12} flex={1}>
              <Button
                leftIcon={<HamburgerIcon height={6} width={6} />}
                variant='link'
              >
                Menu
              </Button>
              <InputGroup>
                <InputRightElement pointerEvents={'none'}>
                  <SearchIcon color='gray.300' />
                </InputRightElement>
                <Input placeholder='Search'></Input>
              </InputGroup>
            </Stack>
            <Text
              textTransform={'uppercase'}
              color={'primary.500'}
              fontFamily={'serif'}
              fontWeight={'bold'}
              fontSize={'4xl'}
              lineHeight={'normal'}
              flex={1}
              textAlign={'center'}
            >
              La Nacion
            </Text>
            <Stack direction={'row'} justifyContent={'flex-end'} flex={1}>
              <Button colorScheme={'primary'}>Suscribe</Button>
              <Button>Login In</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
