import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/state';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = () => {
   root.render(
      <App store={store}/>
   );
}

rerenderEntireTree()  //для первого рендера

store._subscribe(rerenderEntireTree)
