import java.lang.ThreadLocal;
import java.lang.Thread;

/**
 * ThreadLocalMain
 */
public class ThreadLocalMain {

    ThreadLocal<String> tLocal = new ThreadLocal<>();
    ThreadLocal<String> tLocal1 = new ThreadLocal<>();
    String a;

    public static void main(String[] args) {

        ThreadLocalMain tl = new ThreadLocalMain();
        tl.tLocal.set("value");
        tl.tLocal1.set("valueeee");
        tl.a = "abc";
        System.out.println("main: "+tl.tLocal.get());
        System.out.println("main: "+tl.tLocal1.get());

        Thread thread = new Thread() {

            @Override
            public void run() {
                super.run();
                tl.tLocal1.set("new Thread");
                if (tl.tLocal.get() != null) {
                    System.out.println(tl.tLocal.get());
                    
                } else {
                    System.out.println("is null");
                }
                System.out.println(tl.tLocal1.get());
                System.out.println(tl.a);
                tl.a = "xyz";
                System.out.println(tl.a);

            }
        };
        thread.start();
        System.out.println(tl.a);
        
        System.out.println("after: "+tl.tLocal.get());
        System.out.println("after: "+tl.tLocal1.get());
    }

    static void newThread(String tlString) {
        Thread thread = new Thread() {
            ThreadLocal<String> mStringThreadLocal = new ThreadLocal<>();

            @Override
            public void run() {
                super.run();
                mStringThreadLocal.set(tlString + " : thread " + this.getId());
                System.out.println(mStringThreadLocal.get());
            }
        };
        thread.start();
    }
}