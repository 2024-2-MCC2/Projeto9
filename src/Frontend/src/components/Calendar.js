import React, { useState } from 'react';
import styled from 'styled-components';

// Estilização dos componentes
const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #9E5F2B;
  border-radius: 10px;
`;

const Day = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isCampaign ? '#AAF59A' : props.isEnd ? '#F59A9A' : '#fff')};
  border: 1px solid #ddd;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: #9E5F2B;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const MonthYear = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  margin: 0 5px;
  padding: 10px;
  font-size: 16px;
  background-color: #9E5F2B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  option {
    background-color: white;
    color: black;
  }
`;

const Calendar = () => {
  const campaignDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const endDays = [26, 27, 28, 29, 30, 31];

  const [date, setDate] = useState(new Date(2024, 0, 1));

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const years = Array.from(new Array(10), (val, index) => index + 2024); // Lista de anos de 2024 a 2033

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    setDate(new Date(date.getFullYear(), newMonth, 1));
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setDate(new Date(newYear, date.getMonth(), 1));
  };

  const renderDays = () => {
    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<Day key={`empty-${i}`}></Day>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      let dayClass = '';
      if (campaignDays.includes(i)) {
        dayClass = 'campaign';
      } else if (endDays.includes(i)) {
        dayClass = 'end';
      }
      days.push(
        <Day key={i} isCampaign={campaignDays.includes(i)} isEnd={endDays.includes(i)}>
          {i}
        </Day>
      );
    }
    return days;
  };

  return (
    <>
      <Header>
        <Button onClick={handlePrevMonth}>Anterior</Button>
        <MonthYear>
          <SelectWrapper>
            <Select value={date.getMonth()} onChange={handleMonthChange}>
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </Select>
            <Select value={date.getFullYear()} onChange={handleYearChange}>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </SelectWrapper>
        </MonthYear>
        <Button onClick={handleNextMonth}>Próximo</Button>
      </Header>
      <CalendarContainer>
        {renderDays()}
      </CalendarContainer>
    </>
  );
};

export default Calendar;
