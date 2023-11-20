
db.createCollection('provinces', { validator: { $jsonSchema: { bsonType: 'object', title: 'provinces', required: ['name'], properties: { name: { bsonType: 'string' } } } } });
db.createCollection('cities', { validator: { $jsonSchema: { bsonType: 'object', title: 'cities', required: ['province', 'name'], properties: { province: { bsonType: 'objectId' }, name: { bsonType: 'string' } } } } });
db.createCollection('Stores', { validator: { $jsonSchema: { bsonType: 'object', title: 'Stores', required: ['address', 'employees'], properties: { address: { bsonType: 'objectId' }, employees: { bsonType: 'array', items: { bsonType: 'objectId' } } } } } });
db.createCollection('Clients', { validator: { $jsonSchema: { bsonType: 'object', title: 'Clients', required: ['firstName', 'lastName', 'address'], properties: { firstName: { bsonType: 'string' }, lastName: { bsonType: 'string' }, address: { bsonType: 'objectId' } } } } });
db.createCollection('Addresses', { validator: { $jsonSchema: { bsonType: 'object', title: 'Addresses', required: ['address', 'zipcode', 'city', 'telephone'], properties: { address: { bsonType: 'string' }, zipcode: { bsonType: 'int' }, city: { bsonType: 'objectId' }, telephone: { bsonType: 'int' } } } } });
db.createCollection('Employees', { validator: { $jsonSchema: { bsonType: 'object', title: 'Employees', required: ['firstName', 'lastName', 'nif', 'telephone'], properties: { firstName: { bsonType: 'string' }, lastName: { bsonType: 'string' }, nif: { bsonType: 'string' }, telephone: { bsonType: 'int' } } } } });
db.createCollection('Orders', {
    validator: {
        $jsonSchema: {
            bsonType: 'object', title: 'Orders', required: ['products', 'store_id', 'client_id', 'cookedBy_id'], properties: {
                products: {
                    bsonType: 'array', items: {
                        title: 'object', properties: {
                            pizza: {
                                bsonType: 'array', items: {
                                    title: 'object', required: ['name', 'description', 'photo', 'price', 'category'], properties: { name: { bsonType: 'string' }, description: { bsonType: 'string' }, photo: { bsonType: 'objectId' }, price: { bsonType: 'decimal' }, category: { bsonType: 'objectId' } }
                                }
                            }, Hamburguers: {
                                bsonType: 'array', items: {
                                    title: 'object', required: ['name', 'description', 'photo', 'price'], properties: { name: { bsonType: 'string' }, description: { bsonType: 'string' }, photo: { bsonType: 'objectId' }, price: { bsonType: 'decimal' } }
                                }
                            }, drinks: {
                                bsonType: 'array', items: {
                                    title: 'object', required: ['name', 'description', 'photo', 'price'], properties: { name: { bsonType: 'string' }, description: { bsonType: 'string' }, photo: { bsonType: 'objectId' }, price: { bsonType: 'decimal' } }
                                }
                            }
                        }
                    }
                }, store_id: { bsonType: 'objectId' }, client_id: { bsonType: 'objectId' }, deliveryBy_id: { bsonType: 'objectId' }, cookedBy_id: { bsonType: 'objectId' }, deliveryTime: { bsonType: 'date' }
            }
        }
    }
});
db.createCollection('Photos', { validator: { $jsonSchema: { bsonType: 'object', title: 'Photos', required: ['image.png'], properties: { image.png: {
    bsonType: 'object',
    title: 'object',
}}         }      }});
db.createCollection('Categories', { validator: { $jsonSchema: { bsonType: 'object', title: 'Categories', required: ['name'], properties: { name: { bsonType: 'string' } } } } });  