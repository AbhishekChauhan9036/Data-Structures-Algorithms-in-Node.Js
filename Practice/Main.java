import java.util.Arrays;
public class Main {
    public static int countSubStrings(String str, int k) {
        int result = 0;
        int[] count = new int[26];

        for (int i = 0; i < str.length(); i++) {
            int distinctChars = 0;
            Arrays.fill(count, 0);

            for (int j = i; j < str.length(); j++) {

                if (count[str.charAt(j) - 'a'] == 0) {
                    distinctChars++;
                }

                count[str.charAt(j) - 'a']++;

                if (distinctChars == k) {
                    result++;
                }
            }
        }

        return result;
    }

    public static void main(String... args) {
        System.out.println(countSubStrings("abc", 2));
    }
}