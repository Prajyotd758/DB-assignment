 // node module to connect to mongodb
const mongoose = require("mongoose");

// defining schema for the database
const productSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true

    },
    SKU: {
        type: String,
        required: true
    },
    category_id:  {
        type: BigInt,
        required: true
    },
    inventory_id:  {
        type: BigInt,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    discount_id:  {
        type: BigInt,
        required: true
    },
  },
  {
    // automatically assigns "updated at" ,"deleted at" and "created at" to your schema
    timestamps: true,
  }
);

const pruductCategory = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  desc : {
    type : String,
    required : true
  }
},
{
  timestamps : true,
});

const pruductInventory = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  desc : {
    type : String,
    required : true
  }
},
{
  timestamps : true,
});

const Discount = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  desc : {
    type : String,
    required : true
  },
  discount_percent : {
    type : Number,
    required : true
  },
  active : {
    type : Boolean,
    required : true
  }
},
{
  timestamps : true,
});

// connects to the mongodb
mongoose.connect("url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// logs error on error event
db.on("error", console.error);
//runs only once when the given event is triggered
db.once("open", () => console.log("connection success"));

// creates model by which we can interact with the database
const userModel = mongoose.model("name", productSchema);
