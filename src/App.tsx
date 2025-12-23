import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/Navbar/News/News';
import { Music } from './components/Navbar/Music/Music';
import { Settings } from './components/Navbar/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateType } from './redux/state';
import { Friends } from './components/Navbar/Friends/Friends';
import { storeType } from './redux/state';

type AppProps = {
  store: storeType
}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.store.getState().sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile' element={<Profile state={props.store.getState().profilePage} addNewPostItem={props.store.addNewPostItem.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>} />
            <Route path='dialogs/*' element={<Dialogs state={props.store.getState().dialogsPage} updateNewMessageText={props.store.updateNewMessageText.bind(props.store)} addNewMessageItem={props.store.addNewMessageItem.bind(props.store)}/>} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
            <Route path='friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
