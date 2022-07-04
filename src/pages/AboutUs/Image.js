import React from 'react'

import Img from './Ted.jpeg';


import styles from './styles.module.css';

  



function Image() {
    return (
      <div class="col-lg-12 col-md-12 col-sm-12 mt-3 " className={styles.imgcontainer}>
    
      <div class="row" className={styles.Image}>
       <img className={styles.Img} src={Img} alt=""/>
       
           
  
        </div>
      </div>
      
      )

  }
  
export default Image

