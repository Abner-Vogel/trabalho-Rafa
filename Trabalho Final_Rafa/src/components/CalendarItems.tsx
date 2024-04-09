import styled, { css } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface DateItemProps extends TouchableOpacityProps {
  selected?: boolean;
}

export const CalendarView = styled.View`
background-color: #1e1e1e;
border-radius: 10px;
border: 2px solid #4a4a4a;
margin-bottom: 30px;
margin-top: 15px;
padding: 15px;
height: 130px;
`;

export const TopDateInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DatePrevArea = styled.TouchableOpacity`
  padding: 8px;
`;

export const DateNextArea = styled.TouchableOpacity`
  padding: 8px;
`;

export const DateTitleArea = styled.View`
  align-items: center;
`;

export const DateTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fafafa;
`;

export const DateList = styled.ScrollView`
  flex: 1;
`;

export const DateItem = styled.TouchableOpacity<DateItemProps>`
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 23px;
  padding: 5px;
  background-color: ${({ selected }) => (selected ? "#FF6347" : "#4a4a4a")};
  box-shadow: ${({ selected }) =>
    selected ? "0px 0px 8px rgba(255, 99, 71, 0.5)" : "none"};
`;

export const DateItemWeekDay = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fafafa;
`;

export const DateItemNumber = styled.Text<DateItemProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? "#fff" : "#fafafa")};
`;
