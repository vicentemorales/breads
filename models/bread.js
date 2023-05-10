// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { Schema } = mongoose ;

//create bread schema

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

/*
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})
*/

// helper methods 
breadSchema.methods.getBakedBy = function(){
  let bakerMessage = `${this.name} was baked with love by `;
  if(this.baker && this.baker.name && this.baker.startDate){
    bakerMessage += `${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}.`;
  } else {
    bakerMessage += 'an unknown baker'
  }
  return bakerMessage
}

/*
// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate}`
}
*/
/*
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}
*/

//create bread model
const Bread = mongoose.model('Bread', breadSchema);

//export bread model
module.exports = Bread;





// Original Bread Models

/*
module.exports = [
    {
      name: 'Rye',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'French',
      hasGluten: true,
       image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Gluten-Free',
      hasGluten: false,
      image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'Pumpernickel',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    }
  ]
  */