import { NativeTabs } from "expo-router/unstable-native-tabs";

import { useThemeColor } from "heroui-native/hooks";

export default function TabLayout() {
  const backgroundColour = useThemeColor("background");

  return (
    <NativeTabs backgroundColor={backgroundColour}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="news">
        <NativeTabs.Trigger.Label>News</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="megaphone.fill" md="campaign" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="timetable">
        <NativeTabs.Trigger.Label>Timetable</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="tray.fill" md="upcoming" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="calendar">
        <NativeTabs.Trigger.Label>Calendar</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="more">
        <NativeTabs.Trigger.Label>More</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="ellipsis" md="more_horiz" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
