
db.createCollection('provider', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'provider', required: ['name', 'phone number', 'brands'], properties: {
                name: { bsonType: 'string' }, phone number: { bsonType: 'int' }, fax: { bsonType: 'int' }, address: {
                    bsonType: 'array', items: {
                        title: 'object', required: ['street'], properties: { street: { bsonType: 'string' }, number: { bsonType: 'int' }, floor: { bsonType: 'int' }, door: { bsonType: 'int' }, cp: { bsonType: 'int' }, country: { bsonType: 'string' } }
                    }
                }, brands: {
                    bsonType: 'array', items: {
                        title: 'object', required: ['name', 'brand'], properties: { name: { bsonType: 'string' }, brand: { bsonType: 'string' } }
                    }
                }
            }
        }
    }
});
db.createCollection('Glasses', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'Glasses', required: ['grades', 'mountingType', 'colour', 'glassColour', 'price', 'brand'], properties: {
                grades: {
                    bsonType: 'array', items: {
                        title: 'object', required: ['gradesLeft', 'gradesRight'], properties: { gradesLeft: { bsonType: 'decimal' }, gradesRight: { bsonType: 'decimal' } }
                    }
                }, mountingType: { enum: }, colour: { bsonType: 'string' }, glassColour: {
                    bsonType: 'array', items: {
                        title: 'object', required: ['glassColourLeft', 'glassColourRight'], properties: { glassColourLeft: { bsonType: 'string' }, glassColourRight: { bsonType: 'string' } }
                    }
                }, price: { bsonType: 'decimal' }, brand: { bsonType: 'string' }
            }
        }
    }
});
db.createCollection('Client', { validator: { $jsonSchema: { bsonType: 'object', title: 'Client', required: ['name', 'zipCode', 'phoneNumber', 'email', 'regDate', 'sellBy'], properties: { name: { bsonType: 'string' }, zipCode: { bsonType: 'int' }, phoneNumber: { bsonType: 'int' }, email: { bsonType: 'string' }, regDate: { bsonType: 'date' }, recomendBY: { bsonType: 'int' }, sellBy: { bsonType: 'int' } } } } });
db.createCollection('Employee', { validator: { $jsonSchema: { bsonType: 'object', title: 'Employee', required: ['name'], properties: { name: { bsonType: 'string' } } } } });
db.createCollection('Order', { validator: { $jsonSchema: { bsonType: 'object', title: 'Order', required: ['glasses', 'idClient', 'glasses', 'idClient', 'brand'], properties: { glasses: { bsonType: 'array' }, idClient: { bsonType: 'objectId' }, glasses: { bsonType: 'array' }, idClient: { bsonType: 'objectId' }, brand: { bsonType: 'string' } } } } });  