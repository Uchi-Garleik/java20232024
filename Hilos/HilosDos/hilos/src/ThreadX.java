public class ThreadX extends Thread{
    Character letter;
    Boolean run = false;
    Thread nextThread;

    public Thread getNextThread() {
        return nextThread;
    }

    public void setNextThread(Thread nextThread) {
        this.nextThread = nextThread;
    }

    public ThreadX(Character letter) {
        this.letter = letter;
    }

    public Character getLetter() {
        return letter;
    }

    public void setLetter(Character letter) {
        this.letter = letter;
    }

    @Override
    public void run() {
        try {
            this.wait();
        } catch (Exception e) {
            System.out.println("e");
        }
        if (this.run) {
            for (int i = 0; i < 10; i++) {
                System.out.println(i + ": " + getLetter());
            }
        } else {
            System.out.println("parado");
        }
    }
}
