import React from 'react';
import { Todos } from './Components/Todos';
import style from './Styles/styles.module.scss';
const App: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Todos />
    </div>
  );
}

export default App;