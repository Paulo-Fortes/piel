import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider> TheRestOfYourApplication </ChakraProvider>
  )
}
export default App;
