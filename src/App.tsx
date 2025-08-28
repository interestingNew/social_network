import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/Navbar/News/News';
import { Music } from './components/Navbar/Music/Music';
import { Settings } from './components/Navbar/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArrayPostsType, ArrayDialogsType, ArrayMessagesType } from '.';

type PostsProps = {
  posts: ArrayPostsType
  dialogs:ArrayDialogsType
  messages: ArrayMessagesType
}

const App = (props: PostsProps) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile' element={<Profile posts={props.posts}/>} />
            <Route path='dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
