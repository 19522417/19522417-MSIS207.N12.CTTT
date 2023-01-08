import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Feed from './components/Feed.js'
import Header from './components/Header.js'
import Login from './components/Login.js'
import Sidebar from './components/Sidebar.js'
import Widget from './components/Widget.js'
import {useStateValue} from './StateProvider.js'

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
      <AppWrapper>
        {user ? (
            <>
              <Header/>
              <div className='app_body'>
                <Sidebar/>
                <Feed/>
                <Widget/>
              </div>
            </>
        ) : (
            <Login/>
        )}
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app_body {
    display: flex;
  }
`

export default App;
