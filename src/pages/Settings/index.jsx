import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import SettingsTabs from './SettingsTabs/SettingsTabs';

const Index = () => {
  return (
    <>
    <Sidebar />
    <div className="home-section"><SettingsTabs/></div>
  </>
  )
}

export default Index;