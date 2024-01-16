// const pizzas = [
//     {
//         name: "PEPPER BARBECUE CHICKEN",
//         varients: ["small", "medium", "large"],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
//         description: "Pepper Barbecue Chicken I Cheese"
//     },
//     {
//         name: "Non Veg Supreme",
//         varients: ["small", "medium", "large"],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 350,
//                 "large": 400
//             }
//         ],
//         category: "nonveg",
//         image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
//         description: "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri"
//     },
//     {
//         name: "Golden Corn Pizza",
//         varients: ["small", "medium"],
//         prices: [
//             {
//                 "small": 180,
//                 "medium": 250,
//             }
//         ],
//         category: "veg",
//         image: "https://www.crazymasalafood.com/wp-content/images/golden-1.jpg",
//         description: "Corn over the base makes it look beautiful. It is served with tomato sauce and chilli flakes."
//     },
//     {
//         name: "Jalapeno & Red Paprika Pizza",
//         varients: ["small", "medium", "large"],
//         prices: [
//             {
//                 "small": 200,
//                 "medium": 300,
//                 "large": 420
//             }
//         ],
//         category: "veg",
//         image: "https://www.crazymasalafood.com/wp-content/images/jalepeno.jpg",
//         description: "This pizza is amazing and become more delicious if we will add some more cheese in it."
//     },
//     {
//         name: "Margerita",
//         varients: ["small", "medium", "large"],
//         prices: [
//             {
//                 "small": 150,
//                 "medium": 220,
//                 "large": 300
//             }
//         ],
//         category: "veg",
//         image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
//         description: "This pizza base is made by mixing yeast, sugar, olive oil, salt and all-purpose flour in a big bowl."
//     },
//     {
//         name: "Double Cheese Margherita",
//         varients: ["small", "medium"],
//         prices: [
//             {
//                 "small": 250,
//                 "medium": 380
//             }
//         ],
//         category: "veg",
//         image: "https://www.crazymasalafood.com/wp-content/images/double-1.jpg",
//         description: "This is plain pizza which has cheese on it which is margherita and is delicious."
//     },
// ]
// export default pizzas;


const session = {
    id: 'cs_test_b1wnwmhU11tyRczvz0czzbEeKCvQVhaeUy86DV1xakHf06Gd0qpLBJjCiF',
    object: 'checkout.session',
    after_expiration: null,
    allow_promotion_codes: null,
    amount_subtotal: 80000,
    amount_total: 80000,
    automatic_tax: { enabled: false, status: null },
    billing_address_collection: null,
    cancel_url: 'https://localhost:3000/cancel',
    client_reference_id: null,
    client_secret: null,
    consent: null,
    consent_collection: null,
    created: 1705060029,
    currency: 'inr',
    currency_conversion: null,
    custom_fields: [],
    custom_text: {
        after_submit: null,
        shipping_address: null,
        submit: null,
        terms_of_service_acceptance: null
    },
    customer: 'cus_PMS6n01aTvKzZx',
    customer_creation: null,
    customer_details: {
        address: {
            city: '',
            country: 'US',
            line1: 'afa',
            line2: 'afadf',
            postal_code: 'fafda',
            state: 'LA'
        },
        email: 'singhalsuryansh.0306@gmail.com',
        name: 'SURYANSH SINGHAL',
        phone: null,
        tax_exempt: 'none',
        tax_ids: []
    },
    customer_email: null,
    expires_at: 1705146428,
    invoice: null,
    invoice_creation: {
        enabled: false,
        invoice_data: {
            account_tax_ids: null,
            custom_fields: null,
            description: null,
            footer: null,
            metadata: {},
            rendering_options: null
        }
    },
    livemode: false,
    locale: null,
    metadata: {},
    mode: 'payment',
    payment_intent: 'pi_3OXjCkSGgfaszQ2K06jpRKNx',
    payment_link: null,
    payment_method_collection: 'if_required',
    payment_method_configuration_details: null,
    payment_method_options: {},
    payment_method_types: ['card'],
    payment_status: 'paid',
    phone_number_collection: { enabled: false },
    recovered_from: null,
    setup_intent: null,
    shipping_address_collection: null,
    shipping_cost: null,
    shipping_details: null,
    shipping_options: [],
    status: 'complete',
    submit_type: null,
    subscription: null,
    success_url: 'http://localhost:5000/api/orders/order/success?session_id={CHECKOUT_SESSION_ID}',
    total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
    ui_mode: 'hosted',
    url: null
}

const customer = {
    id: 'cus_PMSD816nkFDL5y',
    object: 'customer',
    address: {
        city: '',
        country: 'US',
        line1: 'afa',
        line2: 'afadf',
        postal_code: 'fafda',
        state: 'LA'
    },
    balance: 0,
    created: 1705060403,
    currency: null,
    default_source: null,
    delinquent: false,
    description: null,
    discount: null,
    email: 'singhalsuryansh.0306@gmail.com',
    invoice_prefix: '6598C9FC',
    invoice_settings: {
        custom_fields: null,
        default_payment_method: null,
        footer: null,
        rendering_options: null
    },
    livemode: false,
    metadata: {},
    name: 'SURYANSH SINGHAL',
    next_invoice_sequence: 1,
    phone: null,
    preferred_locales: [],
    shipping: null,
    tax_exempt: 'none',
    test_clock: null
}