// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Thread threadA = new Thread(new ThreadA());
        Thread threadB = new Thread(new ThreadB());
        Thread threadC = new Thread(new ThreadC());

        threadA.start();
        threadB.start();
        threadC.start();

        for (int i = 0; i < 10; i++) {
            System.out.println(i);
            threadA.run();
            threadB.run();
            threadC.run();
        }

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("I'm the main class");
    }
}