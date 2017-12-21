import React from 'react';
import MainContentComponent from '../../mainContent/mainContentComponent'

/**
 * @Function AppPresenter
 * @desc React Presenter function returning component jsx
 */
const AppPresenter = () => (
     <div>
       <header className="app_header">
           <h1>EncycloMarvel</h1>
       </header>
       <MainContentComponent></MainContentComponent>
     </div>

);
export default AppPresenter;