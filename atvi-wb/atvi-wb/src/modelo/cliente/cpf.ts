export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public setValor(novoValorCPF: string): void{
        this.valor = novoValorCPF
    }
    public setDataEmissao(novaDataCPF: Date): void{
        this.dataEmissao = novaDataCPF
    }
}