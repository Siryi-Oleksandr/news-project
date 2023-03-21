import { useContext } from 'react';
import localeContext from '../../context/localeContext';
import { handleDate } from '../../services/dataService';
import { List } from './DateList.styled';
import DateItem from 'components/DateItem';

function DateList() {
  const LS_Context = useContext(localeContext);
  const { readArticles } = LS_Context;

  const uniqueDate = handleDate(readArticles).sort((a, b) =>
    b.localeCompare(a)
  );

  return (
    <List>
      {uniqueDate.map(date => {
        return <DateItem key={date} date={date} />;
      })}
    </List>
  );
}

export default DateList;
