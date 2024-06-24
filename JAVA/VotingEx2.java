import java.util.Scanner;
class VotingEx2{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Please enter your country name ::");
		String country=sc.next();
		System.out.println("Please enter your age :: ");
		int age=sc.nextInt();
		if(country.equalsIgnoreCase("india") && age>=18){
			System.out.println("welcome for voting");
						
		}else{
			System.out.println("invalid country name or invalid age");
		
		}
	

}
}