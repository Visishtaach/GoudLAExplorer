import React,{useContext} from 'react'
import { ThemeContext } from '../../../themecontext/ThemeContext'
import Header from '../../../components/layout/Header'
import SearchField from '../../../components/layout/SearchField';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


const Parameter = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className='container-sm'>
      <Header/>
      <SearchField />
      <div style={{paddingTop:'20px'}}>
      <Section1/>
      </div>
      <div style={{paddingTop:'20px'}}>
      <Section2/></div>
      <div style={{paddingTop:'20px'}}><Section3/></div>
    </div>
  )
}

export default Parameter
