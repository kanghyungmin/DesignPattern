interface DataSource {
    writeData(data:any) :void ;
    readData():void;
}

class FileDataSource implements DataSource{
    constructor() {
        console.log("[FileDataSource]Constructor")
    }
    writeData(data : any){
        console.log("[FileDataSource]WriteData")
    }
    readData() {
        console.log("[FileDataSource]ReadData")
    }
}

class DataSourceDecorator implements DataSource {
    wrappee: DataSource | null = null

    constructor (source: DataSource) {
        this.wrappee = source
        console.log("[DataSourceDecorator]Constructor")
    }

    writeData(data : any){
        console.log("[DataSourceDecorator]WriteData")
        this.wrappee?.writeData(data)
    }
    readData() {
        console.log("[DataSourceDecorator]ReadData")
        this.wrappee?.readData()
    }
}


class EncryptionDecorator extends DataSourceDecorator {

    constructor(source: DataSource) {
        super(source)
        console.log("[EncryptionDecorator]Constructor")
    }
    writeData(data : any){
        console.log("[EncryptionDecorator]WriteData")
        console.log("----------------------")
        super.writeData("data")
    }
    readData() {
        console.log("[EncryptionDecorator]ReadData")
    }
}

class CompressionDecorator extends DataSourceDecorator {

    constructor(source: DataSource) {
        super(source)
        console.log("[CompressionDecorator]Constructor")
    }
    writeData(data : any){
        console.log("[CompressionDecorator]WriteData")
        super.writeData("data")
    }
    readData() {
        console.log("[CompressionDecorator]ReadData")
        
    }
}

class Application {


    dumbUsageEcample() {
        let source = new FileDataSource()
        // source = new CompressionDecorator(source)
        // source.writeData("data")

        // source = new CompressionDecorator(source)
        // source.writeData("data")
        source = new EncryptionDecorator(source)

        let sal = new SalaryManager(source)
        sal.SaveData()
        
    }
}

class SalaryManager{
    source : DataSource | null =null
    constructor(source: DataSource){
        this.source = source
    }
    SaveData(){
        return this.source?.writeData("data")
    }
    LoadData() {
        return this.source?.readData()
    }
}

const TestClass = new Application()
TestClass.dumbUsageEcample()