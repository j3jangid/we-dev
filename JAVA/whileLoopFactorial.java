public class whileLoopFactorial{
	public static void main(String[] args){
		int i=1;
		int f=5;
		int j=1;
		while(i<=f){
			j = j*i;
			System.out.print(i);
			i++;
		}
		System.out.println(" Factorial of "+f+" is "+j);
	}
}