class Singlenton {
    private static instance: Singlenton;
    private constructor() {
        
    }
    static getIntance(){
        if(!Singlenton.instance){
            Singlenton.instance = new Singlenton()
        }
        return Singlenton.instance;
    }
}

export default Singlenton