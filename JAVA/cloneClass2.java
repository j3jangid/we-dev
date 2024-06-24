public class cloneClass2 {
    public static void main(String[] args) throws CloneNotSupportedException {
        Student s1 = new Student(1, "Jatin");
        System.out.println(s1.name);
        Student s2 = (Student)s1.clone();
        System.out.println(s2.name);
	System.out.println(s2.rollNo);
    }
}

class Student implements Cloneable{
    int rollNo;
    String name;

    public Student(int rollNo, String name){
        this.rollNo = rollNo;
        this.name = name;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
