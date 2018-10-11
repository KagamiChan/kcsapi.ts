import Stream from 'stream'

import { StreamWriter, Emitter, NopWriter } from 'maketypes'

class TextStream extends Stream.Writable {
  text: string = ''

  _write = (buf: Buffer, type: string, done: Function) => {
    this.text += buf.toString()
    done()
  }
}

const makeTyping = (data: any) => {
  const resultStream = new TextStream()

  const writer = new StreamWriter(resultStream)
  const emitter = new Emitter(writer, new NopWriter())
  emitter.emit(data, "foo")
  writer.close(() => {})
  console.log(resultStream.text)
}

const main = () => {
  makeTyping({ foo: 'bar', super: 1 })
}

main()
