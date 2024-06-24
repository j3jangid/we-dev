import java.util.Scanner;

public class hourConverter{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter only Hour (0-24).");
		int a=sc.nextInt();
		if (a==0){
			System.out.println("Good Night its "+(a+12)+" AM");
		}else if(a<=4){
			System.out.println("Good Night its "+a+" AM");
		}else if (a<12){
			System.out.println("Good Morning its "+a+" AM");
		}
		else if(a<17){
			System.out.println("Good Afternoon its "+(a-12)+" PM");
		}else if (a<22){
			System.out.println("Good Evening its "+(a-12)+" PM");
		}else if (a<24){
			System.out.println("Good Night its "+(a-12)+" PM");
		}else {
			System.out.println("Please Enter a Valid Hour (Range: 0-24)");
		}
}
}