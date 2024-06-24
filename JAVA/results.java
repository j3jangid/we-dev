import java.util.Scanner;

public class results{
	public static void main(String args[]){
		Scanner sc= new Scanner(System.in);
		System.out.println("Enetr Your Nunber from 0-100");
		int a=sc.nextInt();
		if(a>=0&&a<=40){
			System.out.println("You are fail. Try Hard Next Time");
		}else if (a>40&&a<=60){
			System.out.println("You Passed By Luck");
		}else if (a>60&&a<=70){
			System.out.println("Your Grade is 'C'. Need to work more");
		}else if (a>70&&a<=80){
			System.out.println("Your Grade is 'B'. Need Little Refinment");
		}else if (a>80&&a<=90){
			System.out.println("Your Grade is 'A'. Good Work");
		}else if (a>90&&a<=100){
			System.out.println("Your are among Topper. Keep It Up");
		}else{
			System.out.println("Please Enter Your Number from 0 to 100 only");		
}
}
}