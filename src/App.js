import React from 'react';
import { Layout,Header  , Navigation,Drawer,Content } from 'react-mdl';
import './App.css';
import Main from './Pages/Navigation/main';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
        return (
        <>
          <div className="demo-big-content">
               
              <Layout>
                  <Header className="header-color" title="Title" scroll>
                      <Navigation>
                          <Link to="/resume">Resume</Link>
                          <Link to="/about">About</Link>
                          <Link to="/project">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Header>
                  <Drawer title="Title">
                      <Navigation>
                          <Link to="/resume">Resume</Link>
                          <Link to="/about">About</Link>
                          <Link to="/project">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content" />
                     
                      <Main/>
                      
                  </Content>
              </Layout>
          </div>
         
        
          </>
  );
}

export default App;
