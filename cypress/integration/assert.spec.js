/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equals(1);
    expect(a, 'Deveria ser 1').equals(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
}); 

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const object = {
        a: 1,
        b: 2
    }

    expect(object).equal(object);
    expect(object).equals(object);
    expect(object).eq(object);
    expect(object).to.be.deep.equal({a:1, b:2}) //verifica se as propriedades do obj são iguais
    expect(object).eql({a:1, b:2}) //verifica se as propriedades do obj são iguais
    expect(object).include({a:1})  //verifica se tem o valor 1 no objeto
    expect(object).to.have.property('b', 2);
    expect(object).to.not.be.empty  //checa se não é vazio.
    expect({}).to.be.empty
})

it('Arrays', () => {
    const array = [1,2,3];
    expect(array).to.have.members([1,2,3]);
    expect(array).to.include.members([1,3]) //checa se os números estão dentro do array.
    expect(array).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const number = 1;
    const string = 'String';

    expect(number).to.be.a('number')
    expect(string).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const string =  'String de teste'

    expect(string).to.be.equal('String de teste');
    expect(string).to.have.length(15);
    expect(string).to.contains('de')
    expect(string).to.match(/de/)
    expect(string).to.match(/^String/)
    expect(string).to.match(/teste$/)
    expect(string).to.match(/.{15}/)
    expect(string).to.match(/\w+/) //checa se contêm apenas palavras
    expect(string).to.match(/\D+/) //checa se não contêm números
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) //checa se o número está acima de 3
    expect(number).to.be.below(7) //checa se está abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //está próximo de 5.2 com uma precisão de 0.1
})