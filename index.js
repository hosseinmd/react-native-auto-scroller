/*
 * Author: hossein mohammadi
 * Github: hosseinmd
 * Email:  hosseinm.developer@gmail.com
 */

import React, { memo, useCallback, useRef, useMemo } from "react";
import { Animated, Easing, StyleSheet, View, PanResponder } from "react-native";

export const AutoScrolling = memo(props => {
  const Anim = useRef(new Animated.Value(0)).current;
  const Holder = useRef({ maxOffsetX: 0 }).current;

  const run = useCallback(() => {
    let duration = parseInt(Holder.maxOffsetX - Anim._value);
    if (duration < 0) {
      duration = parseInt(Holder.maxOffsetX);
      Anim._value = 0;
      Anim.setValue(0);
    }
    Animated.loop(
      Animated.timing(Anim, {
        toValue: Holder.maxOffsetX,
        duration: duration * props.duration,
        delay: props.delay || 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      {
        iterations: 1000
      }
    ).start();
    Anim.addListener(Value => Value.value);
  }, []);
  const createMaxOffset = useCallback(event => {
    if (Holder.maxOffsetX !== 0) return;
    Holder.maxOffsetX = (event.nativeEvent.layout.width / 3) * 2;
    run();
  }, []);
  const _panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {
          Holder.offsetX = Anim._value;
          Anim.stopAnimation();
        },
        onPanResponderMove: (e, gestureState) => {
          Anim.setValue(Holder.offsetX + gestureState.dx);
        },
        onPanResponderRelease: () => {
          run();
        }
      }),
    []
  );

  return (
    <View
      {..._panResponder.panHandlers}
      style={props.style}
      onLayout={createMaxOffset}
    >
      <Animated.View
        style={[
          styles.row,
          {
            transform: [
              {
                translateX: Anim
              }
            ]
          }
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          {props.children}
          {props.children}
          {props.children}
        </View>
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});

AutoScrolling.defaultProps = {
  duration: 10,
  delay: 1000
};

