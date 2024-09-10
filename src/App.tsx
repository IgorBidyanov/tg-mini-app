import '@/styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ChatScreen from '@/pages/ChatScreen';
import ExchangeScreen from '@/pages/ExchangeScreen';
import FeedScreen from '@/pages/FeedScreen';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/tg-mini-app/' element={<Layout />}>
            <Route index element={<ChatScreen />} />
            <Route path='exchange' element={<ExchangeScreen />} />
            <Route path='feed' element={<FeedScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
