const Hotel = require('./models/Hotel');
const Book = require('./models/Book');
const User = require('./models/User');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({[Hotel]:Hotel});
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({ "city": args.city })
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({ "hotel_name": args.hotel_name })
        },
        getBook: async (parent, args) => {
            return await Book.find({ [Book]: Book });
        },
        getUser: async (parent, args) => {
            return await User.find({ [User]: User });
        }
    },

    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)

            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())

            const postalCodeExpression = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
            const isValidPostal = postalCodeExpression.test(String(args.postal_code).toUpperCase())
            
            if(!isValidEmail){
                throw new Error("Email not in proper format")
            }

            if(!isValidEmail){
                throw new Error("Postal code not in proper format")
            }

            let newHotel = new Hotel ({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id
            });
            return await newHotel.save()
        },

        addBook: async (parent, args) => {
            console.log(args)
            let newBook = new Book({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            });
            return await newBook.save()
        },
        
        addUser: async (parent, args) => {
            console.log(args)
            let newUser = new User({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });
            return await newUser.save()
        }
    }
}