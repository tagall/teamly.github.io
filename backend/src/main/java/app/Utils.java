package app;

import static app.Constants.N;
import static app.Constants.Y;

public class Utils {
    public static boolean ynToBoolean(String yn) {
        return "Y".equals(yn);
    }

    public static String booleanToYN(boolean b) {
        return b ? Y : N;
    }
}
