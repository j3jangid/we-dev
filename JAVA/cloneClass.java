public class cloneClass {
    public static void main(String[] args) {
        Student s1 = new Student(1, "Jatin");
        System.out.println(s1.name);

    }
}

class Student{
    int rollNo;
    String name;

    public Student(int rollNo, String name){
        this.rollNo = rollNo;
        this.name = name;
    }
}