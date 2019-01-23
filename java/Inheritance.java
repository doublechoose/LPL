public class A {
    protected int a;

    private void getPrivate(){
        System.out.print("i am private");
    }
}

public class Inheritance extends A{

    public void print(){
        System.out.print("a = "+this.a);
    }


    public static void main(String[] args) {
        Inheritance i = new Inheritance();

    }
}