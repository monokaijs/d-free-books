import {z} from "zod";
import moment from "moment/moment";

export interface AccountRegistrationData {
  email: string;
  password: string;
  fullName: string;
  birthday: Date;
}

export const accountLoginValidationSchema = z.object({
  email: z.string({
    required_error: 'Bạn cần nhập email'
  }).email(`Email không hợp lệ`),
  password: z.string({
    required_error: 'Bạn cần nhập mật khẩu'
  }),
})

export const accountPasswordValidationSchema = z.string()
  .min(6, 'Password must have at least 6 characters')
  .max(40, 'Password must have 40 characters or under');

export const accountRegistrationValidationSchema = z.object({
  email: z.string().email(`Email không hợp lệ`),
  password: accountPasswordValidationSchema,
  fullName: z.string()
    .min(8, 'Invalid name')
    // .regex(
    //   /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/gm,
    //   'Your full name may contains invalid characters'
    // ),
  ,
  birthday: z.date().max(moment().subtract(16, 'years').toDate(), 'You must be at least 16 years old to create account')
    .min(moment().subtract(80, 'years').toDate(), 'You are maybe too old'),
})
