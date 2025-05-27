public class InheritanceExample {
    static class Animal {
        public void makeSound() {
            System.out.println("Animal makes a sound.");
        }
    }
    static class Dog extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Bark");
        }
    }
    public static void main(String[] args) {
        Animal baseAnimal = new Animal();
        Dog petDog = new Dog();
        System.out.println("Calling makeSound() on Animal:");
        baseAnimal.makeSound();
        System.out.println("Calling makeSound() on Dog:");
        petDog.makeSound();
    }
}
