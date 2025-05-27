public class Car {
    String carMake;
    String carModel;
    int carYear;
    public Car(String carMake, String carModel, int carYear) {
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
    }
    public void displayDetails() {
        System.out.println("Car Details:");
        System.out.println("Make : " + carMake);
        System.out.println("Model: " + carModel);
        System.out.println("Year : " + carYear);
    }
}
public class Main {
    public static void main(String[] args) {
        Car firstCar = new Car("Toyota", "Corolla", 2020);
        Car secondCar = new Car("Honda", "Civic", 2022);
        firstCar.displayDetails();
        System.out.println();
        secondCar.displayDetails();
    }
}
