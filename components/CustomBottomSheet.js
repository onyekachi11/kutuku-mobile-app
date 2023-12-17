import React, {
  useMemo,
  useCallback,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { StyleSheet, View} from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const CustomBottomSheet = forwardRef((props, ref) => {
  const { children } = props;

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        // style={{backgroundColor: 'red'}}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        opacity={0.6}
      />
    ),
    []
  );

  return (
    <View
      // style={
      //   {
      //     ...StyleSheet.absoluteFillObject,
      //     backgroundColor: "rgba(0,0,0.5)",
      //   }
      // }
    >
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={["25%", "43%", "75%"]}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        style={{
          paddingHorizontal: 20,
        }}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    padding: 20,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default CustomBottomSheet;
