import * as Battery from "expo-battery";

const clientTools: Record<string, any> = {
  getBatteryLevel: async () => {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    if (batteryLevel === -1) {
      return {
        success: false,
        error: "Device does not support retrieving the battery level.",
      };
    }
    return { success: true, batteryLevel };
  },
};

export default clientTools;
