import {View} from 'react-native';
import React from 'react';

const VStack = ({
  children,
  bgColor,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
  alignSelf = 'stretch',
  style,
}) => {
  if (!children) return <></>;

  const styleProps = React.useMemo(
    () => ({
      backgroundColor: bgColor ? bgColor : 'transparent',
      flexWrap,
      justifyContent,
      alignSelf,
      alignItems,
    }),
    [bgColor, alignItems, justifyContent, flexWrap, alignSelf],
  );

  return <View style={[styleProps, style]}>{children}</View>;
};

export default VStack;
