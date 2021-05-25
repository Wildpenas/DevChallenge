export default class contador{

    constructor(dataFutura){

        this.dataFutura = dataFutura;

    }

    get _dataActual(){

        return new Date()


    }

    get _dataFutura(){

        return new Date(this.dataFutura);   


    } 


    get _timeStampDiff(){

        return this._dataFutura.getTime() - this._dataActual.getTime();

    }

    get dias(){

        return Math.floor(this._timeStampDiff / (24*60*60*1000))

    }
    get horas(){

        return Math.floor(this._timeStampDiff / (60*60*1000))

    }
    get minutos(){

        return Math.floor(this._timeStampDiff / (60*1000))

    }
    get segundos(){

        return Math.floor(this._timeStampDiff / 1000)

    }
    
    get total(){

        let dias0 = this.dias  < 10 ?  "0"+this.dias : this.dias;
        let dias1 = this.dias  < 0 ?  "00" : this.dias;
        const dias = this.dias < 0 ? dias1 : dias0;

        
        const horas0 = this.horas % 24< 10 ? "0"+this.horas%24 : this.horas%24;
        const horas1 = this.horas % 60 < 0 ? "00" : this.horas%24;
        const horas = this.horas % 24< 0 ? horas1  : horas0;



        const minutos0 = this.minutos % 60< 10 ? "0"+this.minutos%60 : this.minutos%60;
        const minutos1 = this.minutos % 60< 0 ? "00" : this.minutos%60;
        const minutos = this.minutos % 60< 0 ? minutos1 : minutos0;



        const segundos0 = this.segundos % 60< 10 ? "0"+this.segundos%60 : this.segundos%60;
        const segundos1 = this.segundos % 60< 0 ? "00" : this.segundos%60;
        const segundos = this.segundos % 60< 0 ? segundos1 : segundos0;


        return [dias,horas,minutos,segundos]
        


    }



}