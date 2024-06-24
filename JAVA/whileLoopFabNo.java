public class whileLoopFabNo{
	public static void main(String[] args){
		int i=1;
		int a=0;
		int b=1;
		int c=0;
		System.out.println(c);
		while(i<10){
			a=b;
			b=c;
			c=a+b;
			System.out.println(c);
			i++;
		}
	}
}