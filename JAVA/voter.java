import java.util.Scanner;

public class voter{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Your Age");
		int a=sc.nextInt();
		if (a>=18){
			System.out.print("You can Vote.");
		}else{
			System.out.println("You can't Vote.");
		}
}
}