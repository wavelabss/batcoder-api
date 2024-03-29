import mongoose, { Mongoose } from 'mongoose'

export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(`${process.env.MONGODB_URL}`)

export const close = (): Promise<void> => mongoose.connection.close()
