public class InterfaceExample {
    // Define the interface
    interface Playable {
        void play();
    }
    static class Guitar implements Playable {
        @Override
        public void play() {
            System.out.println("Guitar is playing: Strum strum!");
        }
    }
    static class Piano implements Playable {
        @Override
        public void play() {
            System.out.println("Piano is playing: Plink plonk!");
        }
    }
    public static void main(String[] args) {
        Playable guitarInstrument = new Guitar();
        Playable pianoInstrument = new Piano();
        System.out.println("Guitar:");
        guitarInstrument.play();
        System.out.println("Piano:");
        pianoInstrument.play();
    }
}
