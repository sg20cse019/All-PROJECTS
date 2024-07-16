import java.util.Scanner;
import javax.sql.rowset.spi.SyncResolver;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Calendar;

public class billingsystem {
    public static void main(String[] args) {

        System.out.println(
                "--------------------------------------------Invoice-----------------------------------------      ");
        System.out.println(
                "                                           Dmart Shop                                             ");
        System.out.println(
                "                                     NEAR SHARNBASVA UNIVERSITY                                   ");
        System.out.println(
                "                                       VIDYA NAGAR KALABURAGI                                     ");

        System.out.println("GSTIN: 03AWBPPxxxxxx" + "\t\t\t\t\t\t\tContact: (+91) 77954XXXXX");
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        Calendar calendar = Calendar.getInstance();
        String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
        System.out.println("Date: " + formatter.format(date) + "  " + days[calendar.get(Calendar.DAY_OF_WEEK) - 1]
                + "\t\t\t\t\t\t (+91) 99xxxxxxx");
        Scanner scan = new Scanner(System.in);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of products buyed: ");
        int count = scanner.nextInt();

        int sum = 0;
        List<String[]> products = new ArrayList<>();
        int total = 0;

        for (int i = 0; i < count; i++) {
            System.out.println("Enter details of product " + (i + 1) + ": ");
            Scanner sc = new Scanner(System.in);

            System.out.print("Product name: ");
            String productName = sc.nextLine();

            System.out.print("Product ID: ");
            String productId = sc.nextLine();

            System.out.print("Quantity: ");
            int quantity = scanner.nextInt();

            System.out.print("Price: ");
            int price = scanner.nextInt();

            int totalPrice = quantity * price;
            total += totalPrice;

            String[] product = { productId, productName, Integer.toString(quantity), Integer.toString(price),
                    Integer.toString(totalPrice) };
            products.add(product);
        }

        System.out.println(
                "\n\n------------------------------------------------ Invoice ------------------------------------------------\n");
        System.out.printf("%-15s %-25s %-15s %-15s %-15s\n", "Product ID", "Product Name", "Quantity", "Price",
                "Total Price");
        System.out.println("------------------------------------------------------------------------------------");

        for (String[] product : products) {
            System.out.printf("%-15s %-25s %-15s %-15s %-15s\n", product[0], product[1], product[2], product[3],
                    product[4]);
        }

        System.out.println("------------------------------------------------------------------------------------");
        System.out.printf("%75s\n", "Total: " + total);

        System.out.println(
                "----------------------------------------------THANKYOU------------------------------------------------------");
        System.out.println(
                "--------------------------------------------visit again-----------------------------------------------------");
    }
}