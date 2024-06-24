import java.util.Scanner;

public class SwitchTest{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter any Number in Range of 1-7");
		int day=sc.nextInt();
		switch(day){
			case 1: System.out.println("Your Day is Monday.");
			break;
			case 2: System.out.println("Your Day is Tuesday.");
			break;
			case 3: System.out.println("Your Day is Wednesday.");
			break;
			case 4: System.out.println("Your Day is Thersday.");
			break;
			case 5: System.out.println("Your Day is Friday.");
			break;
			case 6: System.out.println("Your Day is Saturday.");
			break;
			case 7: System.out.println("Your Day is Sunday.");
			break;		
			default: System.out.println("Please Enter Number in Range of 1 - 7.");	
}
}
}