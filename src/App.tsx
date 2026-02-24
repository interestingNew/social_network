import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/Navbar/News/News';
import { Music } from './components/Navbar/Music/Music';
import { Settings } from './components/Navbar/Settings/Settings';
import { Routes, Route } from 'react-router-dom';
import { Friends } from './components/Navbar/Friends/Friends';
import { SideBarType } from './redux/types';
import { useSelector } from 'react-redux';
import { StateType } from './redux/state-redux';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';

const App = () => {

  const sideBar = useSelector<StateType, SideBarType>(state => state.sideBar)

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile' element={<Profile />} />
            <Route path='dialogs/*' element={<DialogsContainer />} />
            <Route path='users/' element={<UsersContainer />} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
            <Route path='friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
