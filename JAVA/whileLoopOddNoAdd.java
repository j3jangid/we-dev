public class whileLoopOddNoAdd{
	public static void main(String[] args){
		int i=1;
		int j=0;
		while(i<=10){
			if(i%2!=0){
				j = j + i;
				System.out.print(i);
			}
			i++;
		}
		System.out.println(" total of odd no. is "+j);
	}
}