class ParamTypeError extends TypeError {
  constructor(target, type) {
    super();
    this.name = this.constructor.name;
    this.message = `[${this.name}]매개변수 :'${target}'는(은) <${type}>타입이 아닙니다 !`;
  }
}

export class PrimitiveTypeError extends ParamTypeError {}
export class NullTypeError extends PrimitiveTypeError {}
export class ReferenceTypeError extends ParamTypeError {
  constructor(target, type) {
    super(target.constructor?.name || target, type.name || type);
  }
}
