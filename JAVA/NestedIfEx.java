import java.util.Scanner;
class NestedIFEx{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Please enter your country name ::");
		String country=sc.next();
		if(country.equalsIgnoreCase("india")){
			System.out.println("Welcome to the india");
			System.out.println("Please enter your age :: ");
			int age=sc.nextInt();
			if(age>=18){
				System.out.println("welcome for voting");
			}else{
				System.out.println("Invalid age");

			}				
		}else{
			System.out.println("invalid country name");
		
		}
	

}
}