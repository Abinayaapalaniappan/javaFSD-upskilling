module com.utils {
    exports com.utils;
}
package com.utils;
public class StringUtils {
    public static String createGreeting(String userName) {
        return "Hello, " + userName + "!";
    }
}
module com.greetings {
    requires com.utils;
}
package com.greetings;
import com.utils.StringUtils;
public class MainApp {
    public static void main(String[] args) {
        System.out.println(StringUtils.createGreeting("Alice"));
    }
}
