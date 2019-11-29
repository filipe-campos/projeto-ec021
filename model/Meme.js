var mongoose = require('mongoose')

var MemeSchema = new mongoose.Schema({
  titulo: { type: String },
  descricao: { type: String },
  ano: { type: Number }
}, { timestamps: true })

MemeSchema.methods.toJSONFor = function () {
  return {
    _id: this._id,
    titulo: this.titulo,
    descricao: this.descricao,
    ano: this.ano,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    __v: this.__v
  }
}

mongoose.model('Meme', MemeSchema)
