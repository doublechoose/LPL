abstract class TestClass2 implements TestInterface 
{ 

	// abstract void printTest();

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
