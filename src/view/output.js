import { Console } from "@woowacourse/mission-utils";

class Output{
    constructor(){}

    static outputError(errorMessage){
        Console.print(`[ERROR] ${errorMessage}`);
    }

    static outputMessage(message){
        Console.print(message);
    }
}

export default Output;