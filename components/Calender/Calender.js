import React, { useState } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { TouchableOpacity, View } from "react-native";
import Theme from "../Theme";
import { FloatingInput } from "../Input/Input";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CustomModal } from "../Modal/Modal";
import { Button } from "../Button/Button";

// refer https://www.npmjs.com/package/react-native-calendars for more details

export const Calender = (props) => {
  const [showCalender, setShowCalender] = useState(false);
  const onDaySelect = (day) => {
    setShowCalender(false);
    if (props.onChangeText) props.onChangeText(day.dateString, day);
    if (props.onBlur) props.onBlur(day);
  };
  return (
    <>
      <TouchableOpacity onPress={() => setShowCalender(true)} activeOpacity={1}>
        <FloatingInput {...props} editable={false} />
      </TouchableOpacity>

      <CustomModal modalVisible={showCalender}>
        <Calendar
          style={{
            height: hp("45%"),
            width: wp("90%"),
          }}
          theme={styles.theme}
          // Initially visible month. Default = Date()
          current={props.value}
          // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={props.minDate}
          // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={props.maxDate}
          // // Handler which gets executed on day press. Default = undefined
          onDayPress={onDaySelect}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={props.monthFormat}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={props.hideArrows}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={props.disableMonthChange}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={props.hideDayNames}
          // Show week numbers to the left. Default = false
          showWeekNumbers={props.showWeekNumbers}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={props.onPressArrowLeft}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={props.onPressArrowRight}
          // Disable left arrow. Default = false
          disableArrowLeft={props.disableArrowLeft}
          // Disable right arrow. Default = false
          disableArrowRight={props.disableArrowRight}
        />
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 5,
            width: wp("90%"),
          }}
        >
          {/* <Button style={{marginRight: 15}} textStyle={{fontSize: 12}} linkTheme title={"OK"} /> */}
          <Button style={{marginRight: 10}}  onPress={() => setShowCalender(false)} textStyle={{fontSize: 12}} linkTheme title={"CANCEL"} />
        </View>
      </CustomModal>
    </>
  );
};

const styles = {
  theme: {
    backgroundColor: "#ffffff",
    calendarBackground: "#ffffff",
    textSectionTitleColor: "#b6c1cd",
    selectedDayBackgroundColor: Theme.themeColor,
    selectedDayTextColor: Theme.themeColor,
    todayTextColor: Theme.themeColor,
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    dotColor: Theme.themeColor,
    selectedDotColor: "#ffffff",
    arrowColor: Theme.themeColor,
    disabledArrowColor: "#d9e1e8",
    monthTextColor: Theme.themeColor,
    indicatorColor: Theme.themeColor,
    textDayFontFamily: Theme.fontSecondary,
    textMonthFontFamily: Theme.fontSecondary,
    textDayHeaderFontFamily: Theme.fontSecondary,
    // textDayFontWeight: '300',
    // textMonthFontWeight: 'bold',
    // textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  },
};
