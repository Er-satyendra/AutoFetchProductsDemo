import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'

import CustomRoute from '@products/Routes/CustomRoute'

import Loader from './Components/Loader'

import '@products/App.scss'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Loader />
        <Suspense fallback={<>Loading....</>}>
          <CustomRoute />
        </Suspense>
      </QueryClientProvider>
    </div>
  )
}

export default App
