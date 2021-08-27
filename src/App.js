import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Content title="For those about to rock..." pos1="order-lg-2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." picture="assets/img/01.jpg"/>
        <Content title="We salute you!" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." picture="assets/img/02.jpg"/>
        <Content title="Let there be rock!" pos1="order-lg-2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." picture="assets/img/03.jpg"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
