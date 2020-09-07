import React from 'react';
import ChartsManager from './ChartsManager';

const findLastMonthDay = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getDateRange = (viewing: 'month' | 'week'): [Date, Date] => {
  const today = new Date();

  let dataFrom: Date, dataTo: Date;

  if (viewing === 'week') {
    dataFrom = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    dataFrom.setHours(12);
    while (dataFrom.getDay() != 1) {
      dataFrom.setDate(dataFrom.getDate() - 1);
    }
    dataTo = new Date(dataFrom);
    dataTo.setDate(dataFrom.getDate() + 7);
  } else {
    dataFrom = new Date(today.getFullYear(), today.getMonth(), 1);
    dataFrom.setHours(12);
    dataTo = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    dataTo.setDate(findLastMonthDay(today.getFullYear(), today.getMonth()));
  }

  return [dataFrom, dataTo];
};

const ChartsManagerContainer = () => {
  const viewRange = 'week';
  const labelingType = 'weekLike';

  const [dataFrom, dataTo] = getDateRange(viewRange);

  return (
    <ChartsManager
      dataFrom={dataFrom}
      dataTo={dataTo}
      labelingType={labelingType}
    />
  );
};

export default ChartsManagerContainer;
