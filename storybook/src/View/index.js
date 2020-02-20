// @flow
import React from 'react';
import {View as NativeView} from 'react-native';

type Props = {
  children?: React$Node,
  margin?: number,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  marginY?: number,
  marginX?: number,
  padding?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingY?: number,
  paddingX?: number,
  style?: any,
  color?: string,
  testID?: string,
};

const getStyleView = (
  margin?: number,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  marginY?: number,
  marginX?: number,
  padding?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingY?: number,
  paddingX?: number,
  color?: string,
) => {
  let style = {};
  if (color) {
    style = {
      ...style,
      ...{
        backgroundColor: color,
      },
    };
  }

  if (margin !== undefined) {
    style = {
      ...style,
      ...{
        margin,
      },
    };
  }

  if (marginTop !== undefined) {
    style = {
      ...style,
      ...{
        marginTop,
      },
    };
  }

  if (marginBottom !== undefined) {
    style = {
      ...style,
      ...{
        marginBottom,
      },
    };
  }

  if (marginLeft !== undefined) {
    style = {
      ...style,
      ...{
        marginLeft,
      },
    };
  }

  if (marginRight !== undefined) {
    style = {
      ...style,
      ...{
        marginRight,
      },
    };
  }

  if (marginY !== undefined) {
    style = {
      ...style,
      ...{
        marginVertical: marginY,
      },
    };
  }

  if (marginX !== undefined) {
    style = {
      ...style,
      ...{
        marginHorizontal: marginX,
      },
    };
  }

  if (padding !== undefined) {
    style = {
      ...style,
      ...{
        padding,
      },
    };
  }

  if (paddingTop !== undefined) {
    style = {
      ...style,
      ...{
        paddingTop,
      },
    };
  }

  if (paddingBottom !== undefined) {
    style = {
      ...style,
      ...{
        paddingBottom,
      },
    };
  }

  if (paddingLeft !== undefined) {
    style = {
      ...style,
      ...{
        paddingLeft,
      },
    };
  }

  if (paddingRight !== undefined) {
    style = {
      ...style,
      ...{
        paddingRight,
      },
    };
  }

  if (paddingY !== undefined) {
    style = {
      ...style,
      ...{
        paddingVertical: paddingY,
      },
    };
  }

  if (paddingX !== undefined) {
    style = {
      ...style,
      ...{
        paddingHorizontal: paddingX,
      },
    };
  }
  return style;
};

function View({
  children,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginY,
  marginX,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingY,
  paddingX,
  style,
  color,
  testID,
}: Props) {
  const styleView = getStyleView(
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
    color,
  );

  return (
    <NativeView testID={testID} style={[styleView, style]}>
      {children}
    </NativeView>
  );
}

export default React.memo<Props>(View);
