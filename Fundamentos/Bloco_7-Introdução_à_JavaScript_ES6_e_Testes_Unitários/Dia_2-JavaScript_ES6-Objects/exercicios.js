const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phoneNumber = order.phoneNumber;
    const address = Object.values(order.address);

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, telefone ${phoneNumber}, ${address};`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.order.drinks.price = 5; 
    const name = order.name;
    const ValorTotal = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.price;
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
  
    
    console.log(`Olá ${name}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${ValorTotal},00.`)
    
  }
  
  orderModifier(order);

  // Exercícios parte 2

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
