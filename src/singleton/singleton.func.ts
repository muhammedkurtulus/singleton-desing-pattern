export default class Singleton {

    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        
        if (!Singleton.instance) {  // Comment this condition for get "Singleton failed".
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

}