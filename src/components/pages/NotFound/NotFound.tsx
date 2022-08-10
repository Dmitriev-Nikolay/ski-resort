import React from 'react';

import * as style from './style';

const NotFound: React.FC = () => {

  return (
    <style.NotFoundPage>
      <style.NotFoundPaper>
        <style.TextNotFound>
          Ooops... Error 404!<br />Кажется что-то пошло не так. Пожалуйста, вернитесь на главную страницу.
        </style.TextNotFound>
        <style.NavigationLink to='/'>
          <style.GoToMain variant="contained">
            На главную
          </style.GoToMain>
        </style.NavigationLink>
      </style.NotFoundPaper>
    </style.NotFoundPage>
  );
};

export default NotFound;
