import java.util.Scanner;

public class monthBySwitch{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter any Number (Range 1-12)");
		int dig=sc.nextInt();
		switch(dig){
			case 1: System.out.println("This means January");
			break;
			case 2: System.out.println("This means Feb");
			break;
			case 3: System.out.println("This means March");
			break;
			case 4: System.out.println("This means April");
			break;
			case 5: System.out.println("This means May");
			break;
			case 6: System.out.println("This means June");
			break;
			case 7: System.out.println("This means July");
			break;
			case 8: System.out.println("This means August");
			break;
			case 9: System.out.println("This means September");
			break;
			case 10: System.out.println("This means October");
			break;
			case 11: System.out.println("This means November");
			break;
			case 12: System.out.println("This means December");
			break;
			default: System.out.println("Please Enter number (Range 1-12)");
		}
	}
}