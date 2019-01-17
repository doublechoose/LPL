// A simple program to Test Interface default 
// methods in java 
interface TestInterface 
{ 
	public String hello = "你好";
	// abstract method 
	public void square(int a); 

	// default method 
	default void show() 
	{ 
	System.out.println("Default Method Executed"); 
	} 
} 

class TestClass1 implements TestInterface 
{ 
	// implementation of square abstract method 
	public void square(int a) 
	{ 
		System.out.println(a*a); 
	} 

	public static void main(String args[]) 
	{ 
		TestClass1 d = new TestClass1(); 
		d.square(4); 

		// default method executed 
		d.show(); 
		System.out.println(d.hello); 

	} 
} 
