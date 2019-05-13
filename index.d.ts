/**
 * @format
 */
import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  children: React.ReactElement<any>;
  style?: StyleProp<ViewStyle>;
  /**
   * default 10
   */
  duration?: number;
  /**
   * default 1000
   */
  delay?: number;
}

export class AutoScroller extends React.PureComponent<Props> {}
