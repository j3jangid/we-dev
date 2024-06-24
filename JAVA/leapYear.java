import java.util.Scanner;

public class leapYear{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a Year");
		int a=sc.nextInt();
		if (a%4==0&&a%100!=0||a%400==0){
			System.out.println(a+" is a Leap Year");
		}else{
			System.out.println(a+" is not a Leap Year");
		}
}
}