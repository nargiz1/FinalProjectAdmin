import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import AdvTabs from './AdvTabs/AdvTabs';

const Index = () => {
  return (
    <>
    <Sidebar />
    <div className="home-section"><AdvTabs/></div>
  </>
  )
}

export default Index;